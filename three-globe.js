import * as THREE from './vendor/three/three.module.min.js';
import { OrbitControls } from './vendor/three/OrbitControls.js';

// Real WebGL sphere; borders are baked once, never redrawn during a drag.
export async function createLifeGlobe(options) {
  const {canvas,features,getRecords,getCoordinates,getVisitedCodes,featureAt,onPick,onMarker,onActive}=options;
  const started=performance.now();
  const loader=new THREE.TextureLoader();
  const asset=name=>new URL('./earth-textures/'+name,import.meta.url).href;
  let satellite=await loader.loadAsync(asset('earth_preview_1024.jpg'));
  satellite.colorSpace=THREE.SRGBColorSpace;
  let heightSamples=null,terrainRevision=0;
  function terrainHeight(lon,lat){if(!heightSamples)return 0;if(Math.abs(lat)>89.9)lon=0;const x=((lon+180)%360+360)%360/360*2047,y=Math.max(0,Math.min(1023,(90-lat)/180*1023)),x0=Math.floor(x),y0=Math.floor(y),x1=Math.min(2047,x0+1),y1=Math.min(1023,y0+1),u=x-x0,v=y-y0;const value=(heightSamples[y0*2048+x0]*(1-u)+heightSamples[y0*2048+x1]*u)*(1-v)+(heightSamples[y1*2048+x0]*(1-u)+heightSamples[y1*2048+x1]*u)*v;return Math.pow(value/255,1.3)*.010;}
  const stage=canvas.parentElement,scene=new THREE.Scene();
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  canvas.dataset.engine='Three.js r'+THREE.REVISION;
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.NoToneMapping;
  const camera=new THREE.PerspectiveCamera(38,1,.05,50);
  const vector=(lon,lat,r=1)=>{
    const p=THREE.MathUtils.degToRad(lon),t=THREE.MathUtils.degToRad(lat);
    return new THREE.Vector3(r*Math.cos(t)*Math.cos(p),r*Math.sin(t),-r*Math.cos(t)*Math.sin(p));
  };
  camera.position.copy(vector(105,25,3.5));
  const controls=new OrbitControls(camera,canvas);
  controls.enablePan=false;controls.enableDamping=true;controls.dampingFactor=.12;
  controls.minDistance=1.2;controls.maxDistance=6;controls.rotateSpeed=.65;
  controls.enableZoom=false;controls.autoRotateSpeed=.45;
  controls.touches.ONE=THREE.TOUCH.ROTATE;controls.touches.TWO=THREE.TOUCH.DOLLY_ROTATE;
  controls.saveState();
  const surface=document.createElement('canvas');surface.width=2048;surface.height=1024;
  const ctx=surface.getContext('2d');
  const texture=new THREE.CanvasTexture(surface);texture.colorSpace=THREE.SRGBColorSpace;
  texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
  satellite.anisotropy=texture.anisotropy;
  const dayMaterial=new THREE.MeshBasicMaterial({map:satellite,color:0xe1e8ed,toneMapped:false});
  const earthGeometry=new THREE.SphereGeometry(1,128,80);
  canvas.dataset.terrain='pending';canvas.dataset.textureQuality='preview';
  const sphere=new THREE.Mesh(earthGeometry,dayMaterial);
  const visitedOverlay=new THREE.Mesh(sphere.geometry,new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,opacity:.85}));visitedOverlay.scale.setScalar(1.0008);scene.add(visitedOverlay);
  // SphereGeometry maps longitude zero to +X at UV .5.
  scene.add(sphere,camera);
  const atmosphere=new THREE.Mesh(new THREE.SphereGeometry(1.02,96,64),new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,side:THREE.BackSide,blending:THREE.AdditiveBlending,
    vertexShader:'varying vec3 n;varying vec3 p;void main(){n=normalize(normalMatrix*normal);vec4 v=modelViewMatrix*vec4(position,1.0);p=v.xyz;gl_Position=projectionMatrix*v;}',
    fragmentShader:'varying vec3 n;varying vec3 p;void main(){float rim=pow(1.0-abs(dot(normalize(n),normalize(-p))),3.0);gl_FragColor=vec4(0.28,0.61,0.92,rim*0.10);}'
  }));scene.add(atmosphere);
  function boundaryGeometry(collection,radius){
    const values=[],segments=new Set();
    function line(points){for(let i=1;i<points.length;i++){
      const a=points[i-1],b=points[i];let dx=b[0]-a[0];if(dx>180)dx-=360;if(dx< -180)dx+=360;
      const dy=b[1]-a[1],steps=Math.max(1,Math.ceil(Math.max(Math.abs(dx),Math.abs(dy))/1.5));
      for(let j=0;j<steps;j++){const p=[a[0]+dx*j/steps,a[1]+dy*j/steps],q=[a[0]+dx*(j+1)/steps,a[1]+dy*(j+1)/steps];const ends=[p.map(n=>n.toFixed(5)).join(','),q.map(n=>n.toFixed(5)).join(',')].sort().join('|');if(segments.has(ends))continue;segments.add(ends);vector(...p,radius+terrainHeight(...p)).toArray(values,values.length);vector(...q,radius+terrainHeight(...q)).toArray(values,values.length);}
    }}
    for(const feature of collection){const g=feature.geometry;if(!g)continue;if(g.type==='LineString')line(g.coordinates);if(g.type==='MultiLineString'||g.type==='Polygon')g.coordinates.forEach(line);if(g.type==='MultiPolygon')g.coordinates.flat().forEach(line);}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(values,3));return geometry;
  }
  const countryMaterial=new THREE.LineBasicMaterial({color:0xb5d4e5,transparent:true,opacity:.8,depthWrite:false});
  const countryBorders=new THREE.LineSegments(boundaryGeometry(features,1.004),countryMaterial);
  const visitedBorders=new THREE.LineSegments(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:0x64cfff,transparent:true,opacity:.95,depthWrite:false}));visitedBorders.renderOrder=5;scene.add(visitedBorders);
  countryBorders.renderOrder=4;scene.add(countryBorders);
  const subdivisions={province:{file:'china-provinces.json',radius:1.003,order:3},city:{file:'china-cities.json',radius:1.002,order:2}};
  canvas.dataset.admin1Boundaries='0';canvas.dataset.cityBoundaries='0';
  canvas.dataset.provinceStyle='china-only-zoom-dependent';canvas.dataset.surface='unlit-satellite-day-night';
  const pins=new THREE.Group();scene.add(pins);
  const pinGeometry=new THREE.SphereGeometry(.009,10,8),pinMaterial=new THREE.MeshBasicMaterial({color:0xffc875});
  let stamp='',frame=0,inView=true,spin=false,disposed=false,active=false,lastTime=0,down=null,multi=false,lastHover=0;
  function schedule(){if(!frame&&!disposed&&inView&&!document.hidden&&document.body.dataset.page==='travel')frame=requestAnimationFrame(paint);}
  function paint(time){frame=0;const delta=lastTime?Math.min((time-lastTime)/1000,.05):1/60;lastTime=time;controls.update(delta);const distance=camera.position.length();const provinceFade=THREE.MathUtils.smoothstep(2.65-distance,0,.35),cityFade=THREE.MathUtils.smoothstep(1.92-distance,0,.23);
    const longitude=THREE.MathUtils.radToDeg(Math.atan2(-camera.position.z,camera.position.x)),latitude=THREE.MathUtils.radToDeg(Math.asin(camera.position.y/distance)),chinaInView=longitude>50&&longitude<165&&latitude> -10&&latitude<80;
    for(const [kind,fade] of [['province',provinceFade],['city',cityFade]]){const row=subdivisions[kind];if(fade>0&&chinaInView)void loadSubdivision(kind);if(row.borders){row.borders.visible=fade>0;row.borders.material.opacity=fade*(kind==='city'?.55:.76);if(kind==='province')row.borders.material.linewidth=THREE.MathUtils.clamp(1.2-distance*.18,.6,1);}}
    const level=cityFade>0?'city':provinceFade>0?'province':'country';if(canvas.dataset.boundaryLevel!==level)canvas.dataset.boundaryLevel=level;renderer.render(scene,camera);
    if(!canvas.dataset.firstFrameMs){canvas.dataset.firstFrameMs=Math.round(performance.now()-started).toString();setTimeout(startEnhancement,150);}if(controls.autoRotate)schedule();}
  let detailModules=null;
  function loadDetailModules(){return detailModules||(detailModules=Promise.all([
    import('./vendor/three/lines/LineSegments2.js'),import('./vendor/three/lines/LineSegmentsGeometry.js'),import('./vendor/three/lines/LineMaterial.js')
  ]).catch(error=>{detailModules=null;throw error;}));}
  const yieldFrame=()=>new Promise(resolve=>setTimeout(resolve,0));
  async function rebuildSubdivision(kind){
    const row=subdivisions[kind];if(row.building)return row.building;
    row.building=(async()=>{const [{LineSegments2},{LineSegmentsGeometry},{LineMaterial}]=await loadDetailModules();let geometry;
      for(;;){const revision=terrainRevision,chunks=[];let length=0;
        for(let i=0;i<row.features.length;i+=16){await yieldFrame();const part=boundaryGeometry(row.features.slice(i,i+16),row.radius),array=part.getAttribute('position').array;chunks.push(array);length+=array.length;part.dispose();}
        if(revision!==terrainRevision)continue;
        const positions=new Float32Array(length);let offset=0;for(const chunk of chunks){positions.set(chunk,offset);offset+=chunk.length;}
        geometry=new LineSegmentsGeometry().setPositions(positions);break;
      }
      if(row.borders){row.borders.geometry.dispose();row.borders.geometry=geometry;}
      else{const material=new LineMaterial({color:kind==='province'?0x000000:0x101820,linewidth:kind==='province'?.6:.55,transparent:true,opacity:0,depthWrite:false,alphaToCoverage:true});row.borders=new LineSegments2(geometry,material);row.borders.visible=false;row.borders.renderOrder=row.order;scene.add(row.borders);}
      canvas.dataset[kind+'State']='ready';schedule();
    })().finally(()=>{row.building=null;});return row.building;
  }
  async function loadSubdivision(kind){
    const row=subdivisions[kind];if(row.promise||row.borders||performance.now()<(row.retryAt||0))return;
    canvas.dataset[kind+'State']='loading';
    row.promise=(async()=>{const response=await fetch(new URL('./'+row.file,import.meta.url));if(!response.ok)throw Error('Boundary unavailable');const collection=await response.json();row.features=collection.features;await rebuildSubdivision(kind);canvas.dataset[kind==='province'?'admin1Boundaries':'cityBoundaries']=String(row.features.length);
    })().catch(()=>{canvas.dataset[kind+'State']='retry';row.retryAt=performance.now()+10000;}).finally(()=>{row.promise=null;});return row.promise;
  }
  async function enhanceTextures(){
    canvas.dataset.detailState='loading';
    const results=await Promise.allSettled([
      loader.loadAsync(asset('earth_blue_marble.jpg')).then(high=>{high.colorSpace=THREE.SRGBColorSpace;high.anisotropy=texture.anisotropy;const old=satellite;satellite=high;dayMaterial.map=high;dayMaterial.needsUpdate=true;old.dispose();canvas.dataset.textureQuality='high';schedule();}),
      loader.loadAsync(asset('earth_bump_roughness_clouds_4096.jpg')).then(async elevation=>{
        const heightCanvas=document.createElement('canvas');heightCanvas.width=2048;heightCanvas.height=1024;
        const context=heightCanvas.getContext('2d',{willReadFrequently:true});context.drawImage(elevation.image,0,0,2048,1024);
        const pixels=context.getImageData(0,0,2048,1024).data;heightSamples=new Uint8Array(2048*1024);
        for(let i=0;i<heightSamples.length;i++)heightSamples[i]=pixels[i*4];heightCanvas.width=heightCanvas.height=1;elevation.dispose();elevation.image=null;terrainRevision++;
        await yieldFrame();const geometry=new THREE.SphereGeometry(1,256,160),positions=geometry.getAttribute('position'),uvs=geometry.getAttribute('uv');let maxRelief=0;
        for(let i=0;i<positions.count;i++){const h=terrainHeight((uvs.getX(i)-.5)*360,(uvs.getY(i)-.5)*180);maxRelief=Math.max(maxRelief,h);positions.setXYZ(i,positions.getX(i)*(1+h),positions.getY(i)*(1+h),positions.getZ(i)*(1+h));}
        positions.needsUpdate=true;geometry.computeBoundingSphere();const old=sphere.geometry;sphere.geometry=geometry;visitedOverlay.geometry=geometry;old.dispose();
        countryBorders.geometry.dispose();countryBorders.geometry=boundaryGeometry(features,1.004);stamp='';refresh();
        for(const [kind,row] of Object.entries(subdivisions))if(row.borders)void rebuildSubdivision(kind).catch(()=>{});
        canvas.dataset.terrain='displaced-heightmap';canvas.dataset.maxRelief=maxRelief.toFixed(5);schedule();
      })
    ]);canvas.dataset.detailState=results.every(r=>r.status==='fulfilled')?'ready':'partial';
  }
  let enhancementStarted=false;
  function startEnhancement(){if(enhancementStarted||!canvas.dataset.firstFrameMs||!inView||document.hidden||document.body.dataset.page!=='travel')return;enhancementStarted=true;void enhanceTextures();}
  controls.addEventListener('change',schedule);
  let nightMaterial=null,night=false;
  const dayNight=document.createElement('button');dayNight.id='atlas-daynight';dayNight.type='button';dayNight.style.fontSize='17px';
  function updateDayNight(){dayNight.textContent=night?'☀':'☾';dayNight.setAttribute('aria-label',night?'切换白天地球':'切换夜晚地球');dayNight.title=night?'切换白天地球':'切换夜晚地球';dayNight.setAttribute('aria-pressed',String(night));canvas.dataset.dayNight=night?'night':'day';}
  $('#atlas-spin').before(dayNight);updateDayNight();
  dayNight.onclick=async()=>{dayNight.disabled=true;try{
    if(!nightMaterial){const lights=await loader.loadAsync(new URL('./earth-textures/earth_night_4096.jpg',import.meta.url).href);const image=document.createElement('canvas');image.width=4096;image.height=2048;const context=image.getContext('2d');context.fillStyle='#1b2d46';context.fillRect(0,0,4096,2048);context.globalAlpha=.32;context.filter='saturate(.55)';context.drawImage(satellite.image,0,0,4096,2048);context.globalAlpha=.95;context.globalCompositeOperation='screen';context.filter='brightness(1.6) saturate(.8)';context.drawImage(lights.image,0,0,4096,2048);const nightTexture=new THREE.CanvasTexture(image);nightTexture.colorSpace=THREE.SRGBColorSpace;nightTexture.anisotropy=texture.anisotropy;nightMaterial=new THREE.MeshBasicMaterial({map:nightTexture,toneMapped:false});lights.dispose();lights.image=null;}
    night=!night;sphere.material=night?nightMaterial:dayMaterial;visitedOverlay.material.opacity=night?.7:.85;countryMaterial.opacity=night?.45:.7;updateDayNight();schedule();
  }catch{dayNight.title='日夜贴图加载失败，请重试';}finally{dayNight.disabled=false;}};
  function setActive(value){active=value;controls.enableZoom=value;onActive(value);}
  function resize(){const r=stage.getBoundingClientRect();if(!r.width)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();schedule();}
  function refresh(){
    const visited=getVisitedCodes(),records=getRecords(),dark=document.documentElement.dataset.theme==='dark';
    const next=JSON.stringify([dark,[...visited].sort(),records.map(r=>[r.id,r.placeKind,getCoordinates(r)])]);
    if(next!==stamp){stamp=next;
      countryMaterial.color.set(0xc0d6e1);
      visitedBorders.geometry.dispose();visitedBorders.geometry=boundaryGeometry(features.filter(f=>visited.has(f.id)),1.006);canvas.dataset.visitedCountries=String(visited.size);
      ctx.clearRect(0,0,surface.width,surface.height);
      const projection=window.d3.geoEquirectangular().scale(surface.width/(2*Math.PI)).translate([surface.width/2,surface.height/2]);
      const path=window.d3.geoPath(projection,ctx);
      for(const feature of features){
        if(!visited.has(feature.id))continue;ctx.beginPath();path(feature);ctx.fillStyle='rgba(65,185,245,.30)';ctx.fill();
      }
      // Small territories remain legible without turning them into invented polygons.
      for(const feature of features.filter(f=>f.geometry.type==='Point'&&visited.has(f.id))){const p=projection(feature.geometry.coordinates);ctx.beginPath();ctx.arc(...p,3.5,0,Math.PI*2);ctx.fillStyle='#ffc875';ctx.fill();}
      texture.needsUpdate=true;
      pins.clear();const unique=new Set();
      for(const record of records){if(['country','territory'].includes(record.placeKind))continue;const p=getCoordinates(record);if(!p||unique.has(p.join(',')))continue;unique.add(p.join(','));const pin=new THREE.Mesh(pinGeometry,pinMaterial);pin.position.copy(vector(...p,1.012+terrainHeight(...p)));pin.userData.recordId=record.id;pins.add(pin);}
    }
    schedule();
  }
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
  function hit(event){const rect=canvas.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);camera.updateMatrixWorld();scene.updateMatrixWorld();raycaster.setFromCamera(pointer,camera);const globeHit=raycaster.intersectObject(sphere)[0];if(!globeHit)return null;const point=globeHit.point.clone().normalize();const coordinate=[THREE.MathUtils.radToDeg(Math.atan2(-point.z,point.x)),THREE.MathUtils.radToDeg(Math.asin(point.y))];const pin=raycaster.intersectObjects(pins.children).find(p=>p.distance<globeHit.distance);return {coordinate,feature:featureAt(coordinate),recordId:pin?.object.userData.recordId};}
  canvas.addEventListener('pointerdown',event=>{if(down)multi=true;else multi=false;down={x:event.clientX,y:event.clientY,activated:!active};setActive(true);$('#atlas-tooltip').hidden=true;});
  canvas.addEventListener('pointerup',event=>{const start=down;down=null;if(!start||multi||start.activated||Math.hypot(event.clientX-start.x,event.clientY-start.y)>6)return;const result=hit(event);if(result?.recordId)onMarker(result.recordId);else if(result?.feature)onPick(result.feature,result.coordinate);});
  canvas.addEventListener('pointercancel',()=>{down=null;});
  canvas.addEventListener('pointermove',event=>{if(down||event.pointerType==='touch'||performance.now()-lastHover<65)return;lastHover=performance.now();const result=hit(event),tip=$('#atlas-tooltip');tip.hidden=!result?.feature;if(result?.feature){tip.textContent=result.feature.properties.label+(getVisitedCodes().has(result.feature.id)?' · 已到访':'');const rect=canvas.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(rect.width-150,event.clientX-rect.left+14))+'px';tip.style.top=Math.max(8,event.clientY-rect.top-35)+'px';}});
  canvas.addEventListener('pointerleave',()=>{$('#atlas-tooltip').hidden=true;});
  document.addEventListener('pointerdown',event=>{if(!stage.contains(event.target))setActive(false);});
  document.addEventListener('focusin',event=>{if(!stage.contains(event.target))setActive(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')setActive(false);});
  window.addEventListener('blur',()=>setActive(false));
  canvas.addEventListener('keydown',event=>{const direction={ArrowLeft:[8,0],ArrowRight:[-8,0],ArrowUp:[0,5],ArrowDown:[0,-5]}[event.key];if(!direction)return;event.preventDefault();const p=camera.position.clone(),lon=THREE.MathUtils.radToDeg(Math.atan2(-p.z,p.x)),lat=THREE.MathUtils.radToDeg(Math.asin(p.y/p.length()));camera.position.copy(vector(lon+direction[0],Math.max(-80,Math.min(80,lat+direction[1])),p.length()));controls.update();schedule();});
  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView){lastTime=0;schedule();startEnhancement();}else if(frame){cancelAnimationFrame(frame);frame=0;}}).observe(stage);
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  function syncSpin(){controls.autoRotate=spin&&!reduce.matches;$('#atlas-spin').setAttribute('aria-pressed',String(controls.autoRotate));schedule();}
  reduce.addEventListener('change',()=>{controls.enableDamping=!reduce.matches;syncSpin();});controls.enableDamping=!reduce.matches;
  new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  new MutationObserver(()=>{if(document.body.dataset.page==='travel'){resize();schedule();startEnhancement();}else{spin=false;controls.autoRotate=false;$('#atlas-spin').setAttribute('aria-pressed','false');if(frame){cancelAnimationFrame(frame);frame=0;}}}).observe(document.body,{attributes:true,attributeFilter:['data-page']});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else{lastTime=0;schedule();startEnhancement();}});
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();disposed=true;if(frame)cancelAnimationFrame(frame);$('#atlas-summary').textContent='地球图形连接已中断，请刷新页面重试';});
  canvas.addEventListener('webglcontextrestored',()=>{disposed=false;texture.needsUpdate=true;refresh();});
  resize();refresh();updateHint();
  // Optional detail starts only after the first visible frame, including offscreen initialization.
  function updateHint(){onActive(active);}
  return {refresh,zoom(factor){camera.position.multiplyScalar(factor);camera.position.setLength(Math.max(controls.minDistance,Math.min(controls.maxDistance,camera.position.length())));controls.update();schedule();},reset(){controls.reset();schedule();},toggleSpin(){spin=!spin;syncSpin();},focus(lon,lat){camera.position.copy(vector(lon,lat,camera.position.length()));controls.update();schedule();}};
}
function $(selector){return document.querySelector(selector);}
