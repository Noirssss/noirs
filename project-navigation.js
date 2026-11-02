// Keep private data and loaded posters in this document; never persist collection caches.
const lifeProjectScroll={movies:0,travel:0};let lifeGenresStarted=false,lifeAtlasStarted=false;
function lifeProjectFromURL(){return location.pathname.endsWith('/travel.html')?'travel':'movies';}
function lifeLoadScript(path){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=path;script.onload=resolve;script.onerror=()=>{script.remove();reject(Error('地图组件加载失败'));};document.head.append(script);});}
async function lifeEnsureAtlas(){if(lifeAtlasStarted)return;lifeAtlasStarted=true;try{const [,globeModule,world]=await Promise.all([lifeLoadScript('./d3-array.min.js').then(()=>lifeLoadScript('./d3-geo.min.js')),import('./three-globe.js?v=globe-progressive-1'),fetch('./world-overview.json').then(response=>{if(!response.ok)throw Error('地球边界加载失败');return response.json();})]);window.createLifeGlobe=globeModule.createLifeGlobe;await initTravelAtlas(world);}catch(error){lifeAtlasStarted=false;$('#atlas-summary').textContent=error.message;}}
function lifeSetProject(project,{push=false,restore=false}={}){
 const previous=document.body.dataset.page;if(push&&previous===project)return;
 lifeProjectScroll[previous]=window.scrollY;
 if(push){const target=new URL('./'+project+'.html',location.href);if(lifeGuestPreview)target.searchParams.set('guest','1');history.pushState({project},'',target);}
 document.body.dataset.page=project;document.title=(project==='travel'?'旅行足迹':'影视收藏')+' · 生活收藏';
 document.querySelectorAll('.project-nav a').forEach(link=>{if(link.pathname.endsWith('/'+project+'.html'))link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
 document.querySelectorAll('[data-project]').forEach(panel=>{const inactive=panel.dataset.project!==project;panel.hidden=inactive;panel.inert=inactive;});
 if(project==='travel'){
  view=view||'countries';syncTravelView();if(document.documentElement.dataset.collection==='ready')render();void lifeEnsureAtlas();
  if(lifeAuth.user&&Date.now()-lifeTravelFetchedAt>30000)void refreshOnlineTravel().catch(()=>{});
 }else{
  if(document.documentElement.dataset.collection==='ready'&&!$('#movie-list').children.length)render();
  if(!lifeGenresStarted){lifeGenresStarted=true;void loadGenres();}
  if(typeof atlasState!=='undefined'){atlasState.spin=false;$('#atlas-spin').setAttribute('aria-pressed','false');setAtlasWheelActive(false);}
 }
 if(push||restore)window.scrollTo({top:lifeProjectScroll[project]||0,behavior:'instant'});
}
function lifeStartProjects(){
 history.scrollRestoration='manual';view='cards';syncTravelView();
 document.querySelector('.project-nav').addEventListener('click',event=>{const link=event.target.closest('a');if(!link||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target||link.origin!==location.origin)return;const project=link.pathname.endsWith('/travel.html')?'travel':link.pathname.endsWith('/movies.html')?'movies':null;if(!project)return;event.preventDefault();lifeSetProject(project,{push:true});});
 window.addEventListener('popstate',()=>lifeSetProject(lifeProjectFromURL(),{restore:true}));
 lifeSetProject(lifeProjectFromURL());
}
