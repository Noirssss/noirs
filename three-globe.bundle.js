var Td=Object.defineProperty;var Mr=(n,e)=>()=>(n&&(e=n(n=0)),e);var yo=(n,e)=>{for(var t in e)Td(n,t,{get:e[t],enumerable:!0})};function Ad(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bu(){let n=qn("canvas");return n.style.display="block",n}function Nr(...n){let e="THREE."+n.shift();Xn?Xn("log",e,...n):console.log(e,...n)}function Tu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){let e="THREE."+(n=Tu(n)).shift();if(Xn)Xn("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){let e="THREE."+(n=Tu(n)).shift();if(Xn)Xn("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Pr(...n){let e=n.join(" ");e in Jc||(Jc[e]=!0,Oe(...n))}function Au(n,e,t){return new Promise(function(i,r){setTimeout(function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}},t)})}function Gi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ct[255&n]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[255&e]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[63&t|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[255&i]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function ke(n,e,t){return Math.max(e,Math.min(t,n))}function nc(n,e){return(n%e+e)%e}function Ed(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rd(n,e,t){return n!==e?(t-n)/(e-n):0}function Cr(n,e,t){return(1-t)*n+t*e}function Pd(n,e,t,i){return Cr(n,e,1-Math.exp(-t*i))}function Cd(n,e=1){return e-Math.abs(nc(n,2*e)-e)}function Id(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)}function Ud(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)}function Nd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dd(n,e){return n+Math.random()*(e-n)}function Ld(n){return n*(.5-Math.random())}function Od(n){n!==void 0&&(Qc=n);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}function Fd(n){return n*jn}function Bd(n){return n*Kn}function zd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Vd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kd(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),m=a((e-i)/2),p=s((i-e)/2),d=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*m,o*c);break;case"YZY":n.set(l*m,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*m,o*h,o*c);break;case"XZX":n.set(o*h,l*d,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*d,o*c);break;case"ZYZ":n.set(l*d,l*p,o*h,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ja(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sc(n,e){if(e.constructor===Float32Array)return n;let t=Ja(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function ac(n,e){if(e.constructor===Float32Array)return n;let t=Ja(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}function Gd(){let n={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer==="srgb"&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Za]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},[ki]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),n}function Li(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Wn(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ks.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}function To(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}function Uo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){mn.fromArray(n,s);let o=r.x*Math.abs(mn.x)+r.y*Math.abs(mn.y)+r.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),h=i.dot(mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Qd(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function hh(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Gi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}function sp(n,e,t,i,r,s,a,o){let l;if(l=e.side===1?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;Ns.copy(o),Ns.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ns);return c<t.near||c>t.far?null:{distance:c,point:Ns.clone(),object:n}}function Ds(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ps),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Is);let h=sp(n,e,t,i,Ps,Cs,Is,ph);if(h){let u=new w;Ni.getBarycoord(ph,Ps,Cs,Is,u),r&&(h.uv=Ni.getInterpolatedAttribute(r,o,l,c,u,new ne)),s&&(h.uv1=Ni.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let m={a:o,b:l,c,normal:new w,materialIndex:0};Ni.getNormal(Ps,Cs,Is,m.normal),h.face=m,h.barycoord=u}return h}function Fs(n,e,t,i,r,s,a){let o=n.geometry.attributes.position;if($s.fromBufferAttribute(o,r),ea.fromBufferAttribute(o,s),t.distanceSqToSegment($s,ea,Bo,gh)>i)return;Bo.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Bo);return l<e.near||l>e.far?void 0:{distance:l,point:gh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function oc(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let m=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;m*=h,p*=h,r(a,o,m,p)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}function Sh(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function op(n,e){let t=1-n;return t*t*e}function lp(n,e){return 2*(1-n)*n*e}function cp(n,e){return n*n*e}function Ir(n,e,t,i){return op(n,e)+lp(n,t)+cp(n,i)}function hp(n,e){let t=1-n;return t*t*t*e}function up(n,e){let t=1-n;return 3*t*t*n*e}function dp(n,e){return 3*(1-n)*n*n*e}function pp(n,e){return n*n*n*e}function Ur(n,e,t,i,r){return hp(n,e)+up(n,t)+dp(n,i)+pp(n,r)}function mp(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Ru(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=xp(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let m=t;m<r;m+=t){let p=n[m],d=n[m+1];p<o&&(o=p),d<l&&(l=d),p>h&&(h=p),d>u&&(u=d)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Zr(s,a,t,o,l,c,0),a}function Ru(n,e,t,i,r){let s;if(r===Cp(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Mh(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Mh(a/i|0,n[a],n[a+1],s);return s&&tr(s,s.next)&&(Qr(s),s=s.next),s}function xn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!tr(i,i.next)&&vt(i.prev,i,i.next)!==0)i=i.next;else{if(Qr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Zr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Tp(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?gp(n,i,r,s):fp(n))e.push(l.i,n.i,c.i),Qr(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?Zr(n=vp(xn(n),e),e,t,i,r,s,2):a===2&&yp(n,e,t,i,r,s):Zr(xn(n),e,t,i,r,s,1);break}}}function fp(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),u=Math.min(o,l,c),m=Math.max(r,s,a),p=Math.max(o,l,c),d=i.next;for(;d!==e;){if(d.x>=h&&d.x<=m&&d.y>=u&&d.y<=p&&Rr(r,o,s,l,a,c,d.x,d.y)&&vt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function gp(n,e,t,i){let r=n.prev,s=n,a=n.next;if(vt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,m=a.y,p=Math.min(o,l,c),d=Math.min(h,u,m),v=Math.max(o,l,c),g=Math.max(h,u,m),f=Wo(p,d,e,t,i),x=Wo(v,g,e,t,i),_=n.prevZ,T=n.nextZ;for(;_&&_.z>=f&&T&&T.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=d&&_.y<=g&&_!==r&&_!==a&&Rr(o,h,l,u,c,m,_.x,_.y)&&vt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=v&&T.y>=d&&T.y<=g&&T!==r&&T!==a&&Rr(o,h,l,u,c,m,T.x,T.y)&&vt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=d&&_.y<=g&&_!==r&&_!==a&&Rr(o,h,l,u,c,m,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=x;){if(T.x>=p&&T.x<=v&&T.y>=d&&T.y<=g&&T!==r&&T!==a&&Rr(o,h,l,u,c,m,T.x,T.y)&&vt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function vp(n,e){let t=n;do{let i=t.prev,r=t.next.next;!tr(i,r)&&Cu(i,t,t.next,r)&&Jr(i,r)&&Jr(r,i)&&(e.push(i.i,t.i,r.i),Qr(t),Qr(t.next),t=n=r),t=t.next}while(t!==n);return xn(t)}function yp(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ep(a,o)){let l=Iu(a,o);return a=xn(a,a.next),l=xn(l,l.next),Zr(a,e,t,i,r,s,0),void Zr(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function xp(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=Ru(n,e[s]*i,s<a-1?e[s+1]*i:n.length,i,!1);o===o.next&&(o.steiner=!0),r.push(wp(o))}r.sort(_p);for(let s=0;s<r.length;s++)t=Sp(r[s],t);return t}function _p(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Sp(n,e){let t=Mp(n,e);if(!t)return e;let i=Iu(t,n);return xn(i,i.next),xn(t,t.next)}function Mp(n,e){let t=e,i=n.x,r=n.y,s,a=-1/0;if(tr(n,t))return t;do{if(tr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>a&&(a=u,s=t.x<t.next.x?t:t.next,u===i))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Pu(r<c?i:a,r,l,c,r<c?a:i,r,t.x,t.y)){let u=Math.abs(r-t.y)/(i-t.x);Jr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&bp(s,t)))&&(s=t,h=u)}t=t.next}while(t!==o);return s}function bp(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function Tp(n,e,t,i){let r=n;do r.z===0&&(r.z=Wo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ap(r)}function Ap(n){let e,t=1;do{let i,r=n;n=null;let s=null;for(e=0;r;){e++;let a=r,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||r.z<=a.z)?(i=r,r=r.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;r=a}s.nextZ=null,t*=2}while(e>1);return n}function Wo(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function wp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pu(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Rr(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&Pu(n,e,t,i,r,s,a,o)}function Ep(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rp(n,e)&&(Jr(n,e)&&Jr(e,n)&&Pp(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||tr(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function tr(n,e){return n.x===e.x&&n.y===e.y}function Cu(n,e,t,i){let r=Gs(vt(n,e,t)),s=Gs(vt(n,e,i)),a=Gs(vt(t,i,n)),o=Gs(vt(t,i,e));return r!==s&&a!==o||!(r!==0||!ks(n,t,e))||!(s!==0||!ks(n,i,e))||!(a!==0||!ks(t,n,i))||!(o!==0||!ks(t,e,i))}function ks(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Gs(n){return n>0?1:n<0?-1:0}function Rp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Jr(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function Pp(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Iu(n,e){let t=qo(n.i,n.x,n.y),i=qo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Mh(n,e,t,i){let r=qo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cp(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}function bh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Th(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function Up(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Np(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}function Ah(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}function Tn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(wh(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(wh(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Lt(n){let e={};for(let t=0;t<n.length;t++){let i=Tn(n[t]);for(let r in i)e[r]=i[r]}return e}function wh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}function Vn(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}function Hs(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Uu(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function Fp(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function Bp(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){let o=Uu(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;let l=Fp(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function Eh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Rh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}function Ph(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Nh(n,e){return n.distance-e.distance}function Yo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)Yo(s[a],e,t,!0)}}function hc(n,e,t,i){let r=Yp(i);switch(t){case 1021:return n*e;case 1028:case 1029:return n*e/r.components*r.byteLength;case 1030:case 1031:return n*e*2/r.components*r.byteLength;case 1022:return n*e*3/r.components*r.byteLength;case 1023:case 1033:return n*e*4/r.components*r.byteLength;case 33776:case 33777:case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var rn,mi,Lh,Jo,Oh,ss,Fh,lr,cr,Dt,_i,_n,as,os,Qo,$o,Bh,hr,zh,Vh,kh,Gh,Hh,jh,Wh,qh,Xh,Kh,Yh,Zh,Jh,Qh,$h,eu,tu,iu,nu,el,tl,il,za,nl,rl,sl,al,ru,su,au,ni,ol,ll,cl,hl,ul,dl,pl,ls,ur,Va,ka,ou,Ga,lu,sn,cu,cs,ri,Ha,an,fi,hu,uu,hs,ml,on,zi,Si,fl,gl,Sn,du,pu,mu,fu,Vi,dr,ln,gu,vl,Mn,yl,xl,ja,Wa,qa,Xa,_l,Sl,Ml,bl,Tl,Al,wl,El,Rl,Ka,Pl,Cl,Il,Ul,Nl,Dl,Ll,Ol,Fl,Bl,zl,Vl,kl,Gl,Hl,jl,Wl,ql,Xl,Kl,Ya,Yl,Zl,vu,bn,ki,Za,Jl,lt,yu,xu,_u,Ql,Su,Mu,$l,ec,tc,ic,Jc,Xn,wu,di,Ct,Qc,jn,Kn,wt,uc,ne,Bt,dc,w,xo,$c,pc,Ge,_o,eh,th,tt,Cn,Ks,Hd,Yn,jd,Mo,Ut,mc,nt,Ys,Jt,Dr,Zs,Ba,qe,In,li,Wd,qd,ji,xs,qt,ih,nh,Ji,Zn,Xd,rh,Un,Ri,_s,br,Kd,Yd,sh,ah,oh,lh,Zd,Nn,bo,Zt,Di,Jd,Jn,Eu,Wi,Ss,Je,It,Lr,ci,Pi,Ao,Ci,Dn,Ln,ch,wo,Eo,Ro,Po,Co,Io,Ni,Nt,Ii,hi,Ms,On,Fn,Bn,qi,Xi,pn,Tr,bs,Ts,mn,Zv,yt,As,$d,ui,Or,Fr,Ue,ep,Ar,No,zt,tp,ii,Do,zn,Xt,wr,Tt,ot,Js,Ot,pi,Lo,ip,np,Kt,rp,Qi,Jv,Qv,$v,ey,ty,iy,ny,ry,sy,ay,oy,ly,cy,hy,Ui,Oo,ws,Es,xi,Oi,uh,fn,Rs,dh,Ps,Cs,Is,Fo,Us,ph,Ns,xt,uy,dy,py,my,fy,gy,vy,yy,xy,Qs,_y,Sy,My,by,Ty,Ay,wy,Ey,gn,ap,Ls,$i,mh,Br,jo,Ry,Py,Cy,Iy,Uy,Ny,Dy,Ly,Oy,Fy,By,zy,vn,$s,ea,fh,Er,Os,Bo,gh,ta,vh,yh,Qn,Vy,ky,Gy,Hy,zr,$n,Fi,Vr,kr,yn,ia,na,Gr,ra,en,sa,Bs,zs,zo,Vs,aa,Qt,er,oa,xh,_h,Vo,ko,Go,la,Hr,ca,jr,ha,Wr,qr,Xr,ua,da,Kr,Yr,Xo,yi,pa,Ip,ma,fa,ga,ir,va,ya,Bi,xa,_a,Sa,Ma,nr,jy,us,Lp,Op,kt,ba,Ta,Aa,tn,wa,Ea,Ra,Pa,Yt,Yi,Ca,Ia,Ua,$r,Zi,Na,Xs,Da,Nu,rr,kn,La,es,Wy,qy,Xy,js,Ws,vi,sr,Ki,Ch,Ih,Ft,Oa,ts,Ky,Yy,Zy,ar,Fa,Jy,Qy,$y,ex,tx,ix,nx,rx,sx,zp,cc,Vp,kp,Gp,Hp,jp,Wp,qp,Ko,ht,ax,nn,Uh,is,or,fc,Zo,ox,Dh,qs,Gn,Hn,Ho,Xp,Kp,ns,lx,cx,hx,ux,dx,px,mx,fx,gx,vx,yx,xx,_x,Sx,rs,gc=Mr(()=>{rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,Jo=1,Oh=2,ss=1,Fh=2,lr=3,cr=0,Dt=1,_i=2,_n=0,as=1,os=2,Qo=3,$o=4,Bh=5,hr=100,zh=101,Vh=102,kh=103,Gh=104,Hh=200,jh=201,Wh=202,qh=203,Xh=204,Kh=205,Yh=206,Zh=207,Jh=208,Qh=209,$h=210,eu=211,tu=212,iu=213,nu=214,el=0,tl=1,il=2,za=3,nl=4,rl=5,sl=6,al=7,ru=0,su=1,au=2,ni=0,ol=1,ll=2,cl=3,hl=4,ul=5,dl=6,pl=7,ls=301,ur=302,Va=303,ka=304,ou=1e3,Ga=1001,lu=1002,sn=1003,cu=1004,cs=1005,ri=1006,Ha=1007,an=1008,fi=1009,hu=1010,uu=1011,hs=1012,ml=1013,on=1014,zi=1015,Si=1016,fl=1017,gl=1018,Sn=1020,du=35902,pu=35899,mu=1021,fu=1022,Vi=1023,dr=1026,ln=1027,gu=1028,vl=1029,Mn=1030,yl=1031,xl=1033,ja=33776,Wa=33777,qa=33778,Xa=33779,_l=35840,Sl=35841,Ml=35842,bl=35843,Tl=36196,Al=37492,wl=37496,El=37488,Rl=37489,Ka=37490,Pl=37491,Cl=37808,Il=37809,Ul=37810,Nl=37811,Dl=37812,Ll=37813,Ol=37814,Fl=37815,Bl=37816,zl=37817,Vl=37818,kl=37819,Gl=37820,Hl=37821,jl=36492,Wl=36494,ql=36495,Xl=36283,Kl=36284,Ya=36285,Yl=36286,Zl=0,vu=1,bn="",ki="srgb",Za="srgb-linear",Jl="linear",lt="srgb",yu=512,xu=513,_u=514,Ql=515,Su=516,Mu=517,$l=518,ec=519,tc="300 es",ic=2e3;Jc={},Xn=null;wu={[el]:0,[il]:6,[nl]:4,[za]:5,[tl]:1,[sl]:2,[al]:7,[rl]:3},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,jn=Math.PI/180,Kn=180/Math.PI;wt={DEG2RAD:jn,RAD2DEG:Kn,generateUUID:Gi,clamp:ke,euclideanModulo:nc,mapLinear:Ed,inverseLerp:Rd,lerp:Cr,damp:Pd,pingpong:Cd,smoothstep:Id,smootherstep:Ud,randInt:Nd,randFloat:Dd,randFloatSpread:Ld,seededRandom:Od,degToRad:Fd,radToDeg:Bd,isPowerOfTwo:zd,ceilPowerOfTwo:Vd,floorPowerOfTwo:rc,setQuaternionFromProperEuler:kd,normalize:ac,denormalize:sc},uc=class uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;ne=uc,Bt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],m=s[a+0],p=s[a+1],d=s[a+2],v=s[a+3];if(u!==v||l!==m||c!==p||h!==d){let g=l*m+c*p+h*d+u*v;g<0&&(m=-m,p=-p,d=-d,v=-v,g=-g);let f=1-o;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);f=Math.sin(f*x)/_,l=l*f+m*(o=Math.sin(o*x)/_),c=c*f+p*o,h=h*f+d*o,u=u*f+v*o}else{l=l*f+m*o,c=c*f+p*o,h=h*f+d*o,u=u*f+v*o;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],m=s[a+1],p=s[a+2],d=s[a+3];return e[t]=o*d+h*u+l*p-c*m,e[t+1]=l*d+h*m+c*u-o*p,e[t+2]=c*d+h*p+o*m-l*u,e[t+3]=h*d-o*u-l*m-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),m=l(i/2),p=l(r/2),d=l(s/2);switch(a){case"XYZ":this._x=m*h*u+c*p*d,this._y=c*p*u-m*h*d,this._z=c*h*d+m*p*u,this._w=c*h*u-m*p*d;break;case"YXZ":this._x=m*h*u+c*p*d,this._y=c*p*u-m*h*d,this._z=c*h*d-m*p*u,this._w=c*h*u+m*p*d;break;case"ZXY":this._x=m*h*u-c*p*d,this._y=c*p*u+m*h*d,this._z=c*h*d+m*p*u,this._w=c*h*u-m*p*d;break;case"ZYX":this._x=m*h*u-c*p*d,this._y=c*p*u+m*h*d,this._z=c*h*d-m*p*u,this._w=c*h*u+m*p*d;break;case"YZX":this._x=m*h*u+c*p*d,this._y=c*p*u+m*h*d,this._z=c*h*d-m*p*u,this._w=c*h*u-m*p*d;break;case"XZY":this._x=m*h*u-c*p*d,this._y=c*p*u-m*h*d,this._z=c*h*d+m*p*u,this._w=c*h*u+m*p*d;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],m=i+o+u;if(m>0){let p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dc=class dc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dc.prototype.isVector3=!0;w=dc,xo=new w,$c=new Bt,pc=class pc{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],m=i[2],p=i[5],d=i[8],v=r[0],g=r[3],f=r[6],x=r[1],_=r[4],T=r[7],A=r[2],M=r[5],P=r[8];return s[0]=a*v+o*x+l*A,s[3]=a*g+o*_+l*M,s[6]=a*f+o*T+l*P,s[1]=c*v+h*x+u*A,s[4]=c*g+h*_+u*M,s[7]=c*f+h*T+u*P,s[2]=m*v+p*x+d*A,s[5]=m*g+p*_+d*M,s[8]=m*f+p*T+d*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,m=o*l-h*s,p=c*s-a*l,d=t*u+i*m+r*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/d;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=m*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_o.makeScale(e,t)),this}rotate(e){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pc.prototype.isMatrix3=!0;Ge=pc,_o=new Ge,eh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt=Gd();Ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cn===void 0&&(Cn=qn("canvas")),Cn.width=e.width,Cn.height=e.height;let r=Cn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Li(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Li(t[i]/255)):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hd=0,Yn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(So(r[a].image)):s.push(So(r[a]))}else s=So(r);i.url=s}return t||(e.images[this.uuid]=i),i}};jd=0,Mo=new w,Ut=class n extends di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Gi(),this.name="",this.source=new Yn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i:Oe(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1;mc=class mc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],m=l[1],p=l[5],d=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-v)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+v)<.1&&Math.abs(d+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(p+1)/2,A=(f+1)/2,M=(h+m)/4,P=(u+v)/4,N=(d+g)/4;return _>T&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=P/i):T>A?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=M/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=P/s,r=N/s),this.set(i,r,s,t),this}let x=Math.sqrt((g-d)*(g-d)+(u-v)*(u-v)+(m-h)*(m-h));return Math.abs(x)<.001&&(x=1),this.x=(g-d)/x,this.y=(u-v)/x,this.z=(m-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mc.prototype.isVector4=!0;nt=mc,Ys=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Ut({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yn(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Ys{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Dr=class extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zs=class extends Ut{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ba=class Ba{constructor(e,t,i,r,s,a,o,l,c,h,u,m,p,d,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,m,p,d,v,g)}set(e,t,i,r,s,a,o,l,c,h,u,m,p,d,v,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=m,f[3]=p,f[7]=d,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ba().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),s=1/In.setFromMatrixColumn(e,1).length(),a=1/In.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let m=a*h,p=a*u,d=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+d*c,t[5]=m-v*c,t[9]=-o*l,t[2]=v-m*c,t[6]=d+p*c,t[10]=a*l}else if(e.order==="YXZ"){let m=l*h,p=l*u,d=c*h,v=c*u;t[0]=m+v*o,t[4]=d*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-d,t[6]=v+m*o,t[10]=a*l}else if(e.order==="ZXY"){let m=l*h,p=l*u,d=c*h,v=c*u;t[0]=m-v*o,t[4]=-a*u,t[8]=d+p*o,t[1]=p+d*o,t[5]=a*h,t[9]=v-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let m=a*h,p=a*u,d=o*h,v=o*u;t[0]=l*h,t[4]=d*c-p,t[8]=m*c+v,t[1]=l*u,t[5]=v*c+m,t[9]=p*c-d,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let m=a*l,p=a*c,d=o*l,v=o*c;t[0]=l*h,t[4]=v-m*u,t[8]=d*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+d,t[10]=m-v*u}else if(e.order==="XZY"){let m=a*l,p=a*c,d=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=m*u+v,t[5]=a*h,t[9]=p*u-d,t[2]=d*u-p,t[6]=o*h,t[10]=v*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,qd)}lookAt(e,t,i){let r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ji.crossVectors(i,qt),ji.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ji.crossVectors(i,qt)),ji.normalize(),xs.crossVectors(qt,ji),r[0]=ji.x,r[4]=xs.x,r[8]=qt.x,r[1]=ji.y,r[5]=xs.y,r[9]=qt.y,r[2]=ji.z,r[6]=xs.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],m=i[9],p=i[13],d=i[2],v=i[6],g=i[10],f=i[14],x=i[3],_=i[7],T=i[11],A=i[15],M=r[0],P=r[4],N=r[8],D=r[12],I=r[1],q=r[5],L=r[9],V=r[13],X=r[2],$=r[6],j=r[10],O=r[14],k=r[3],ae=r[7],ye=r[11],we=r[15];return s[0]=a*M+o*I+l*X+c*k,s[4]=a*P+o*q+l*$+c*ae,s[8]=a*N+o*L+l*j+c*ye,s[12]=a*D+o*V+l*O+c*we,s[1]=h*M+u*I+m*X+p*k,s[5]=h*P+u*q+m*$+p*ae,s[9]=h*N+u*L+m*j+p*ye,s[13]=h*D+u*V+m*O+p*we,s[2]=d*M+v*I+g*X+f*k,s[6]=d*P+v*q+g*$+f*ae,s[10]=d*N+v*L+g*j+f*ye,s[14]=d*D+v*V+g*O+f*we,s[3]=x*M+_*I+T*X+A*k,s[7]=x*P+_*q+T*$+A*ae,s[11]=x*N+_*L+T*j+A*ye,s[15]=x*D+_*V+T*O+A*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],m=e[10],p=e[14],d=e[3],v=e[7],g=e[11],f=e[15],x=l*p-c*m,_=o*p-c*u,T=o*m-l*u,A=a*p-c*h,M=a*m-l*h,P=a*u-o*h;return t*(v*x-g*_+f*T)-i*(d*x-g*A+f*M)+r*(d*_-v*A+f*P)-s*(d*T-v*M+g*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],m=e[10],p=e[11],d=e[12],v=e[13],g=e[14],f=e[15],x=t*o-i*a,_=t*l-r*a,T=t*c-s*a,A=i*l-r*o,M=i*c-s*o,P=r*c-s*l,N=h*v-u*d,D=h*g-m*d,I=h*f-p*d,q=u*g-m*v,L=u*f-p*v,V=m*f-p*g,X=x*V-_*L+T*q+A*I-M*D+P*N;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/X;return e[0]=(o*V-l*L+c*q)*$,e[1]=(r*L-i*V-s*q)*$,e[2]=(v*P-g*M+f*A)*$,e[3]=(m*M-u*P-p*A)*$,e[4]=(l*I-a*V-c*D)*$,e[5]=(t*V-r*I+s*D)*$,e[6]=(g*T-d*P-f*_)*$,e[7]=(h*P-m*T+p*_)*$,e[8]=(a*L-o*I+c*N)*$,e[9]=(i*I-t*L-s*N)*$,e[10]=(d*M-v*T+f*x)*$,e[11]=(u*T-h*M-p*x)*$,e[12]=(o*D-a*q-l*N)*$,e[13]=(t*q-i*D+r*N)*$,e[14]=(v*_-d*A-g*x)*$,e[15]=(h*A-u*_+m*x)*$,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,m=s*c,p=s*h,d=s*u,v=a*h,g=a*u,f=o*u,x=l*c,_=l*h,T=l*u,A=i.x,M=i.y,P=i.z;return r[0]=(1-(v+f))*A,r[1]=(p+T)*A,r[2]=(d-_)*A,r[3]=0,r[4]=(p-T)*M,r[5]=(1-(m+f))*M,r[6]=(g+x)*M,r[7]=0,r[8]=(d+_)*P,r[9]=(g-x)*P,r[10]=(1-(m+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=In.set(r[0],r[1],r[2]).length(),o=In.set(r[4],r[5],r[6]).length(),l=In.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-r),m=(t+e)/(t-e),p=(i+r)/(i-r),d,v;if(l)d=s/(a-s),v=a*s/(a-s);else if(o===2e3)d=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-a/(a-s),v=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-r),m=-(t+e)/(t-e),p=-(i+r)/(i-r),d,v;if(l)d=1/(a-s),v=a/(a-s);else if(o===2e3)d=-2/(a-s),v=-(a+s)/(a-s);else{if(o!==2001)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);d=-1/(a-s),v=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ba.prototype.isMatrix4=!0;qe=Ba,In=new w,li=new qe,Wd=new w(0,0,0),qd=new w(1,1,1),ji=new w,xs=new w,qt=new w,ih=new qe,nh=new Bt,Ji=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],m=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";Zn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Xd=0,rh=new w,Un=new Bt,Ri=new qe,_s=new w,br=new w,Kd=new w,Yd=new Bt,sh=new w(1,0,0),ah=new w(0,1,0),oh=new w(0,0,1),lh={type:"added"},Zd={type:"removed"},Nn={type:"childadded",child:null},bo={type:"childremoved",child:null},Zt=class n extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new w,t=new Ji,i=new Bt,r=new w(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ge}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(br,_s,this.up):Ri.lookAt(_s,br,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Un.setFromRotationMatrix(Ri),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),m=a(e.skeletons),p=a(e.animations),d=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),d.length>0&&(i.nodes=d)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new w(0,1,0),Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Di=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},Jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),p=.02,d=.005;c.inputState.pinching&&m>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ss={h:0,s:0,l:0};Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=nc(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=To(a,s,e+1/3),this.g=To(a,s,e),this.b=To(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t="srgb"){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let i=Eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return tt.workingToColorSpace(It.copy(this),e),65536*Math.round(ke(255*It.r,0,255))+256*Math.round(ke(255*It.g,0,255))+Math.round(ke(255*It.b,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(It.copy(this),t);let i=It.r,r=It.g,s=It.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e="srgb"){tt.workingToColorSpace(It.copy(this),e);let t=It.r,i=It.g,r=It.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ss);let i=Cr(Wi.h,Ss.h,t),r=Cr(Wi.s,Ss.s,t),s=Cr(Wi.l,Ss.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Je;Je.NAMES=Eu;Lr=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new w,Pi=new w,Ao=new w,Ci=new w,Dn=new w,Ln=new w,ch=new w,wo=new w,Eo=new w,Ro=new w,Po=new nt,Co=new nt,Io=new nt,Ni=class n{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Pi.subVectors(i,t),Ao.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Pi),l=ci.dot(Ao),c=Pi.dot(Pi),h=Pi.dot(Ao),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let m=1/u,p=(c*l-o*h)*m,d=(a*h-o*l)*m;return s.set(1-p-d,d,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci)!==null&&Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Po.setScalar(0),Co.setScalar(0),Io.setScalar(0),Po.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,i),Io.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Po,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Io,s.z),a}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Pi.subVectors(e,t),ci.cross(Pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),.5*ci.cross(Pi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Dn.subVectors(r,i),Ln.subVectors(s,i),wo.subVectors(e,i);let l=Dn.dot(wo),c=Ln.dot(wo);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,r);let h=Dn.dot(Eo),u=Ln.dot(Eo);if(h>=0&&u<=h)return t.copy(r);let m=l*u-h*c;if(m<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Dn,a);Ro.subVectors(e,s);let p=Dn.dot(Ro),d=Ln.dot(Ro);if(d>=0&&p<=d)return t.copy(s);let v=p*c-l*d;if(v<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Ln,o);let g=h*d-p*u;if(g<=0&&u-h>=0&&p-d>=0)return ch.subVectors(s,r),o=(u-h)/(u-h+(p-d)),t.copy(r).addScaledVector(ch,o);let f=1/(g+v+m);return a=v*f,o=m*f,t.copy(i).addScaledVector(Dn,a).addScaledVector(Ln,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),bs.subVectors(this.max,Tr),On.subVectors(e.a,Tr),Fn.subVectors(e.b,Tr),Bn.subVectors(e.c,Tr),qi.subVectors(Fn,On),Xi.subVectors(Bn,Fn),pn.subVectors(On,Bn);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-pn.z,pn.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,pn.z,0,-pn.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-pn.y,pn.x,0];return!!Uo(t,On,Fn,Bn,bs)&&(t=[1,0,0,0,1,0,0,0,1],!!Uo(t,On,Fn,Bn,bs)&&(Ts.crossVectors(qi,Xi),t=[Ts.x,Ts.y,Ts.z],Uo(t,On,Fn,Bn,bs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(hi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ii=[new w,new w,new w,new w,new w,new w,new w,new w],hi=new w,Ms=new Nt,On=new w,Fn=new w,Bn=new w,qi=new w,Xi=new w,pn=new w,Tr=new w,bs=new w,Ts=new w,mn=new w;Zv=Qd();yt=new w,As=new ne,$d=0,ui=class extends di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$d++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?Ja(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ac(e,this.array)}},Or=class extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Fr=class extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ue=class extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},ep=new Nt,Ar=new w,No=new w,zt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ep.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(No)),this.expandByPoint(Ar.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tp=0,ii=new qe,Do=new Zt,zn=new w,Xt=new Nt,wr=new Nt,Tt=new w,ot=class n extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Fr:Or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new w,1/0);if(e){let i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Xt.min,wr.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,wr.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(wr.min),Xt.expandByPoint(wr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(e,c),Tt.add(zn)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new w,l[D]=new w;let h=new w,u=new w,m=new w,p=new ne,d=new ne,v=new ne,g=new w,f=new w;function x(D,I,q){c[D]=c[I]=c[q]=1,h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,I),m.fromBufferAttribute(i,q),p.fromBufferAttribute(s,D),d.fromBufferAttribute(s,I),v.fromBufferAttribute(s,q),u.sub(h),m.sub(h),d.sub(p),v.sub(p);let L=1/(d.x*v.y-v.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(m,-d.y).multiplyScalar(L),f.copy(m).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(L),o[D].add(g),o[I].add(g),o[q].add(g),l[D].add(f),l[I].add(f),l[q].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,I=_.length;D<I;++D){let q=_[D],L=q.start;for(let V=L,X=L+q.count;V<X;V+=3)x(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let T=new w,A=new w,M=new w,P=new w;function N(D){M.fromBufferAttribute(r,D),P.copy(M);let I=o[D];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),A.crossVectors(P,I);let q=A.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,q)}for(let D=0,I=i.count;D<I;++D)c[D]&&N(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ui(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);let r=new w,s=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let m=0,p=e.count;m<p;m+=3){let d=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,d),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,p=t.count;m<p;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(m+0,h.x,h.y,h.z),i.setXYZ(m+1,h.x,h.y,h.z),i.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,m=new c.constructor(l.length*h),p=0,d=0;for(let v=0,g=l.length;v<g;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let f=0;f<h;f++)m[d++]=c[p++]}return new ui(m,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let m=e(c[h],i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let m=0,p=u.length;m<p;m++)h.push(u[m].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};Ot=new w,pi=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Ja(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ac(e,this.data.array)}},Lo=new w,ip=new w,np=new Ge,Kt=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Lo.subVectors(i,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Lo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||np.getNormalMatrix(e),r=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rp=0,Qi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:Oe(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Kt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jv=new w,Qv=new w,$v=new w,ey=new ne,ty=new ne,iy=new qe,ny=new w,ry=new w,sy=new w,ay=new ne,oy=new ne,ly=new ne,cy=new w,hy=new w,Ui=new w,Oo=new w,ws=new w,Es=new w,xi=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Oo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Es.copy(this.origin).sub(Oo);let s=.5*e.distanceTo(t),a=-this.direction.dot(ws),o=Es.dot(this.direction),l=-Es.dot(ws),c=Es.lengthSq(),h=Math.abs(1-a*a),u,m,p,d;if(h>0)if(u=a*l-o,m=a*o-l,d=s*h,u>=0)if(m>=-d)if(m<=d){let v=1/h;u*=v,m*=v,p=u*(u+a*m+2*o)+m*(a*u+m+2*l)+c}else m=s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m=-s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m<=-d?(u=Math.max(0,-(-a*s+o)),m=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+m*(m+2*l)+c):m<=d?(u=0,m=Math.min(Math.max(-s,-l),s),p=m*(m+2*l)+c):(u=Math.max(0,-(a*s+o)),m=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+m*(m+2*l)+c);else m=a>0?-s:s,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Oo).addScaledVector(ws,m),p}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-m.z)*u,l=(e.max.z-m.z)*u):(o=(e.max.z-m.z)*u,l=(e.min.z-m.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,m=e.y-a.y,p=e.z-a.z,d=t.x-a.x,v=t.y-a.y,g=t.z-a.z,f=i.x-a.x,x=i.y-a.y,_=i.z-a.z,T=Math.abs(l),A=Math.abs(c),M=Math.abs(h),P,N,D,I,q,L,V,X,$,j,O,k;if(T>=A&&T>=M?(D=l,L=u,$=d,k=f,l>=0?(P=c,N=h,I=m,q=p,V=v,X=g,j=x,O=_):(P=h,N=c,I=p,q=m,V=g,X=v,j=_,O=x)):A>=M?(D=c,L=m,$=v,k=x,c>=0?(P=h,N=l,I=p,q=u,V=g,X=d,j=_,O=f):(P=l,N=h,I=u,q=p,V=d,X=g,j=f,O=_)):(D=h,L=p,$=g,k=_,h>=0?(P=l,N=c,I=u,q=m,V=d,X=v,j=f,O=x):(P=c,N=l,I=m,q=u,V=v,X=d,j=x,O=f)),D===0)return null;let ae=P/D,ye=N/D,we=I-ae*L,Y=q-ye*L,ue=V-ae*$,oe=X-ye*$,de=j-ae*k,Te=O-ye*k,me=de*oe-Te*ue,Ee=we*Te-Y*de,Ie=ue*Y-oe*we;if(r){if(me<0||Ee<0||Ie<0)return null}else if((me<0||Ee<0||Ie<0)&&(me>0||Ee>0||Ie>0))return null;let De=me+Ee+Ie;if(De===0)return null;let ee=1/D*(me*L+Ee*$+Ie*k);return(De>0?ee<0:ee>0)?null:this.at(ee/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oi=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uh=new qe,fn=new xi,Rs=new zt,dh=new w,Ps=new w,Cs=new w,Is=new w,Fo=new w,Us=new w,ph=new w,Ns=new w,xt=class extends Zt{constructor(e=new ot,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Fo.fromBufferAttribute(u,e),a?Us.addScaledVector(Fo,h):Us.addScaledVector(Fo.sub(t),h))}t.add(Us)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),fn.copy(e.ray).recast(e.near),Rs.containsPoint(fn.origin)===!1&&(fn.intersectSphere(Rs,dh)===null||fn.origin.distanceToSquared(dh)>(e.far-e.near)**2))return;uh.copy(s).invert(),fn.copy(e.ray).applyMatrix4(uh),i.boundingBox!==null&&fn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,fn)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,m=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,v=m.length;d<v;d++){let g=m[d],f=a[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)r=Ds(this,f,e,i,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let d=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);d<v;d+=3)r=Ds(this,a,e,i,c,h,u,o.getX(d),o.getX(d+1),o.getX(d+2)),r&&(r.faceIndex=Math.floor(d/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let d=0,v=m.length;d<v;d++){let g=m[d],f=a[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)r=Ds(this,f,e,i,c,h,u,x,x+1,x+2),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let d=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);d<v;d+=3)r=Ds(this,a,e,i,c,h,u,d,d+1,d+2),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}};uy=new nt,dy=new nt,py=new nt,my=new nt,fy=new qe,gy=new w,vy=new zt,yy=new qe,xy=new xi,Qs=class extends Ut{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,m){super(null,a,o,l,c,h,r,s,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_y=new qe,Sy=new qe,My=new qe,by=new qe,Ty=new Nt,Ay=new qe,wy=new xt,Ey=new zt,gn=new zt,ap=new ne(.5,.5),Ls=new w,$i=class{constructor(e=new Kt,t=new Kt,i=new Kt,r=new Kt,s=new Kt,a=new Kt){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],m=s[6],p=s[7],d=s[8],v=s[9],g=s[10],f=s[11],x=s[12],_=s[13],T=s[14],A=s[15];if(r[0].setComponents(c-a,p-h,f-d,A-x).normalize(),r[1].setComponents(c+a,p+h,f+d,A+x).normalize(),r[2].setComponents(c+o,p+u,f+v,A+_).normalize(),r[3].setComponents(c-o,p-u,f-v,A-_).normalize(),i)r[4].setComponents(l,m,g,T).normalize(),r[5].setComponents(c-l,p-m,f-g,A-T).normalize();else if(r[4].setComponents(c-l,p-m,f-g,A-T).normalize(),t===2e3)r[5].setComponents(c+l,p+m,f+g,A+T).normalize();else{if(t!==2001)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(l,m,g,T).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(e){gn.center.set(0,0,0);let t=ap.distanceTo(e.center);return gn.radius=.7071067811865476+t,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mh=new qe,Br=class n{constructor(){this.coordinateSystem=2e3,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];mh.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new $i),i[r].setFromProjectionMatrix(mh,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new $i),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}},jo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=r}reset(){this.list.length=0,this.index=0}},Ry=new qe,Py=new Je(1,1,1),Cy=new $i,Iy=new Br,Uy=new Nt,Ny=new zt,Dy=new w,Ly=new w,Oy=new w,Fy=new w,By=new jo,zy=new xt,vn=class extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$s=new w,ea=new w,fh=new qe,Er=new xi,Os=new zt,Bo=new w,gh=new w,ta=class extends Zt{constructor(e=new ot,t=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)$s.fromBufferAttribute(t,r-1),ea.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$s.distanceTo(ea);e.setAttribute("lineDistance",new Ue(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;fh.copy(r).invert(),Er.copy(e.ray).applyMatrix4(fh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let d=m,v=p-1;d<v;d+=c){let g=h.getX(d),f=h.getX(d+1),x=Fs(this,e,Er,l,g,f,d);x&&t.push(x)}if(this.isLineLoop){let d=h.getX(p-1),v=h.getX(m),g=Fs(this,e,Er,l,d,v,p-1);g&&t.push(g)}}else{let m=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let d=m,v=p-1;d<v;d+=c){let g=Fs(this,e,Er,l,d,d+1,d);g&&t.push(g)}if(this.isLineLoop){let d=Fs(this,e,Er,l,p-1,m,p-1);d&&t.push(d)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};vh=new w,yh=new w,Qn=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)vh.fromBufferAttribute(t,r),yh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vh.distanceTo(yh);e.setAttribute("lineDistance",new Ue(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vy=new qe,ky=new xi,Gy=new zt,Hy=new w,zr=class extends Ut{constructor(e=[],t=301,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$n=class extends Ut{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fi=class extends Ut{constructor(e,t,i=1014,r,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==1026&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vr=class extends Fi{constructor(e,t=1014,i=301,r,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},kr=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yn=class n extends ot{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],m=0,p=0;function d(v,g,f,x,_,T,A,M,P,N,D){let I=T/P,q=A/N,L=T/2,V=A/2,X=M/2,$=P+1,j=N+1,O=0,k=0,ae=new w;for(let ye=0;ye<j;ye++){let we=ye*q-V;for(let Y=0;Y<$;Y++){let ue=Y*I-L;ae[v]=ue*x,ae[g]=we*_,ae[f]=X,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[g]=0,ae[f]=M>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Y/P),u.push(1-ye/N),O+=1}}for(let ye=0;ye<N;ye++)for(let we=0;we<P;we++){let Y=m+we+$*ye,ue=m+we+$*(ye+1),oe=m+(we+1)+$*(ye+1),de=m+(we+1)+$*ye;l.push(Y,ue,de),l.push(ue,oe,de),k+=6}o.addGroup(p,k,D),p+=k,m+=O}d("z","y","x",-1,-1,i,t,e,a,s,0),d("z","y","x",1,-1,i,t,-e,a,s,1),d("x","z","y",1,1,e,i,t,r,a,2),d("x","z","y",1,-1,e,i,-t,r,a,3),d("x","y","z",1,-1,e,t,i,r,s,4),d("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ia=class n extends ot{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,m=t,p=2*u+m,d=2*i+s,v=r+1,g=new w,f=new w;for(let x=0;x<=d;x++){let _=0,T=0,A=0,M=0;if(x<=i){let D=x/i,I=D*Math.PI/2;T=-h-e*Math.cos(I),A=e*Math.sin(I),M=-e*Math.cos(I),_=D*u}else if(x<=i+s){let D=(x-i)/s;T=D*t-h,A=e,M=0,_=u+D*m}else{let D=(x-i-s)/i,I=D*Math.PI/2;T=h+e*Math.sin(I),A=e*Math.cos(I),M=e*Math.sin(I),_=u+m+D*u}let P=Math.max(0,Math.min(1,_/p)),N=0;x===0?N=.5/r:x===d&&(N=-.5/r);for(let D=0;D<=r;D++){let I=D/r,q=I*Math.PI*2,L=Math.sin(q),V=Math.cos(q);f.x=-A*V,f.y=T,f.z=A*L,o.push(f.x,f.y,f.z),g.set(-A*V,M,A*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+N,P)}if(x>0){let D=(x-1)*v;for(let I=0;I<r;I++){let q=D+I,L=D+I+1,V=x*v+I,X=x*v+I+1;a.push(q,L,V),a.push(L,X,V)}}}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},na=class n extends ot{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new w,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,m=3;u<=t;u++,m+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[m]/e+1)/2,h.y=(a[m+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gr=class n extends ot{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],m=[],p=[],d=0,v=[],g=i/2,f=0;function x(_){let T=d,A=new ne,M=new w,P=0,N=_===!0?e:t,D=_===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,g*D,0),m.push(0,D,0),p.push(.5,.5),d++;let I=d;for(let q=0;q<=r;q++){let L=q/r*l+o,V=Math.cos(L),X=Math.sin(L);M.x=N*X,M.y=g*D,M.z=N*V,u.push(M.x,M.y,M.z),m.push(0,D,0),A.x=.5*V+.5,A.y=.5*X*D+.5,p.push(A.x,A.y),d++}for(let q=0;q<r;q++){let L=T+q,V=I+q;_===!0?h.push(V,V+1,L):h.push(V+1,V,L),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}(function(){let _=new w,T=new w,A=0,M=(t-e)/i;for(let P=0;P<=s;P++){let N=[],D=P/s,I=D*(t-e)+e;for(let q=0;q<=r;q++){let L=q/r,V=L*l+o,X=Math.sin(V),$=Math.cos(V);T.x=I*X,T.y=-D*i+g,T.z=I*$,u.push(T.x,T.y,T.z),_.set(X,M,$).normalize(),m.push(_.x,_.y,_.z),p.push(L,1-D),N.push(d++)}v.push(N)}for(let P=0;P<r;P++)for(let N=0;N<s;N++){let D=v[N][P],I=v[N+1][P],q=v[N+1][P+1],L=v[N][P+1];(e>0||N!==0)&&(h.push(D,I,L),A+=3),(t>0||N!==s-1)&&(h.push(I,q,L),A+=3)}c.addGroup(f,A,0),f+=A})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(m,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ra=class n extends Gr{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},en=class n extends ot{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(p,d,v,g){let f=g+1,x=[];for(let _=0;_<=f;_++){x[_]=[];let T=p.clone().lerp(v,_/f),A=d.clone().lerp(v,_/f),M=f-_;for(let P=0;P<=M;P++)x[_][P]=P===0&&_===f?T:T.clone().lerp(A,P/M)}for(let _=0;_<f;_++)for(let T=0;T<2*(f-_)-1;T++){let A=Math.floor(T/2);T%2==0?(l(x[_][A+1]),l(x[_+1][A]),l(x[_][A])):(l(x[_][A+1]),l(x[_+1][A+1]),l(x[_+1][A]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,d){let v=3*p;d.x=e[v+0],d.y=e[v+1],d.z=e[v+2]}function h(p,d,v,g){g<0&&p.x===1&&(a[d]=p.x-1),v.x===0&&v.z===0&&(a[d]=g/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let d=new w,v=new w,g=new w;for(let f=0;f<t.length;f+=3)c(t[f+0],d),c(t[f+1],v),c(t[f+2],g),o(d,v,g,p)})(r),(function(p){let d=new w;for(let v=0;v<s.length;v+=3)d.x=s[v+0],d.y=s[v+1],d.z=s[v+2],d.normalize().multiplyScalar(p),s[v+0]=d.x,s[v+1]=d.y,s[v+2]=d.z})(i),(function(){let p=new w;for(let d=0;d<s.length;d+=3){p.x=s[d+0],p.y=s[d+1],p.z=s[d+2];let v=u(p)/2/Math.PI+.5,g=m(p)/Math.PI+.5;a.push(v,1-g)}(function(){let d=new w,v=new w,g=new w,f=new w,x=new ne,_=new ne,T=new ne;for(let A=0,M=0;A<s.length;A+=9,M+=6){d.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),g.set(s[A+6],s[A+7],s[A+8]),x.set(a[M+0],a[M+1]),_.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),f.copy(d).add(v).add(g).divideScalar(3);let P=u(f);h(x,M+0,d,P),h(_,M+2,v,P),h(T,M+4,g,P)}})(),(function(){for(let d=0;d<a.length;d+=6){let v=a[d+0],g=a[d+2],f=a[d+4],x=Math.max(v,g,f),_=Math.min(v,g,f);x>.9&&_<.1&&(v<.2&&(a[d+0]+=1),g<.2&&(a[d+2]+=1),f<.2&&(a[d+4]+=1))}})()})(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},sa=class n extends en{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bs=new w,zs=new w,zo=new w,Vs=new Ni,aa=class extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(jn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),m=new Map,p=[];for(let d=0;d<l;d+=3){a?(c[0]=a.getX(d),c[1]=a.getX(d+1),c[2]=a.getX(d+2)):(c[0]=d,c[1]=d+1,c[2]=d+2);let{a:v,b:g,c:f}=Vs;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Vs.getNormal(zo),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let _=(x+1)%3,T=u[x],A=u[_],M=Vs[h[x]],P=Vs[h[_]],N=`${T}_${A}`,D=`${A}_${T}`,I=m.get(D);I?(zo.dot(I.normal)<=s&&(p.push(M.x,M.y,M.z),p.push(P.x,P.y,P.z)),m.set(D,null)):m.has(N)||m.set(N,{index0:c[x],index1:c[_],normal:zo.clone()})}}for(let d of m.values())if(d){let{index0:v,index1:g}=d;Bs.fromBufferAttribute(o,v),zs.fromBufferAttribute(o,g),p.push(Bs.x,Bs.y,Bs.z),p.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new Ue(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ne:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new w,r=[],s=[],a=[],o=new w,l=new qe;for(let p=0;p<=e;p++){let d=p/e;r[p]=this.getTangentAt(d,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),m=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),m<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let d=1;d<=e;d++)s[d].applyMatrix4(l.makeRotationAxis(r[d],p*d)),a[d].crossVectors(r[d],s[d])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},er=class extends Qt{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let i=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),m=l-this.aX,p=c-this.aY;l=m*h-p*u+this.aX,c=m*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oa=class extends er{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};xh=new w,_h=new w,Vo=new oc,ko=new oc,Go=new oc,la=class extends Qt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(_h.subVectors(r[0],r[1]).add(r[0]),o=_h);let u=r[c%s],m=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(xh.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=xh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(m),p),g=Math.pow(m.distanceToSquared(l),p);v<1e-4&&(v=1),d<1e-4&&(d=v),g<1e-4&&(g=v),Vo.initNonuniformCatmullRom(o.x,u.x,m.x,l.x,d,v,g),ko.initNonuniformCatmullRom(o.y,u.y,m.y,l.y,d,v,g),Go.initNonuniformCatmullRom(o.z,u.z,m.z,l.z,d,v,g)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(o.x,u.x,m.x,l.x,this.tension),ko.initCatmullRom(o.y,u.y,m.y,l.y,this.tension),Go.initCatmullRom(o.z,u.z,m.z,l.z,this.tension));return i.set(Vo.calc(h),ko.calc(h),Go.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Hr=class extends Qt{constructor(e=new ne,t=new ne,i=new ne,r=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ne){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ur(e,r.x,s.x,a.x,o.x),Ur(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Qt{constructor(e=new w,t=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ur(e,r.x,s.x,a.x,o.x),Ur(e,r.y,s.y,a.y,o.y),Ur(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jr=class extends Qt{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Qt{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Qt{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ir(e,r.x,s.x,a.x),Ir(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Qt{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ir(e,r.x,s.x,a.x),Ir(e,r.y,s.y,a.y),Ir(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Sh(o,l.x,c.x,h.x,u.x),Sh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ne().fromArray(r))}return this}},ua=Object.freeze({__proto__:null,ArcCurve:oa,CatmullRomCurve3:la,CubicBezierCurve:Hr,CubicBezierCurve3:ca,EllipseCurve:er,LineCurve:jr,LineCurve3:ha,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:qr,SplineCurve:Xr}),da=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ua[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ua[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Kr=class extends da{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new jr(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Wr(this.currentPoint.clone(),new ne(e,t),new ne(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Hr(this.currentPoint.clone(),new ne(e,t),new ne(i,r),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new er(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yr=class extends Kr{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Kr().fromJSON(r))}return this}};Xo=class{static triangulate(e,t,i=2){return mp(e,t,i)}},yi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];bh(e),Th(i,e);let a=e.length;t.forEach(bh);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Th(i,t[l]);let o=Xo.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};pa=class n extends ot{constructor(e=new Yr([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,m=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ip,_,T,A,M,P,N=!1;if(f){_=f.getSpacedPoints(h),N=!0,m=!1;let ee=!!f.isCatmullRomCurve3&&f.closed;T=f.computeFrenetFrames(h,ee),A=new w,M=new w,P=new w}m||(g=0,p=0,d=0,v=0);let D=o.extractPoints(c),I=D.shape,q=D.holes;if(!yi.isClockWise(I)){I=I.reverse();for(let ee=0,le=q.length;ee<le;ee++){let E=q[ee];yi.isClockWise(E)&&(q[ee]=E.reverse())}}function L(ee){let le=10000000000000001e-36,E=ee[0];for(let K=1;K<=ee.length;K++){let S=K%ee.length,y=ee[S],R=y.x-E.x,z=y.y-E.y,B=R*R+z*z,H=Math.max(Math.abs(y.x),Math.abs(y.y),Math.abs(E.x),Math.abs(E.y));B<=le*H*H?(ee.splice(S,1),K--):E=y}}L(I),q.forEach(L);let V=q.length,X=I;for(let ee=0;ee<V;ee++){let le=q[ee];I=I.concat(le)}function $(ee,le,E){return le||ze("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(le,E)}let j=I.length;function O(ee,le,E){let K,S,y,R=ee.x-le.x,z=ee.y-le.y,B=E.x-ee.x,H=E.y-ee.y,Q=R*R+z*z,C=R*H-z*B;if(Math.abs(C)>Number.EPSILON){let Z=Math.sqrt(Q),ce=Math.sqrt(B*B+H*H),pe=le.x-z/Z,te=le.y+R/Z,Be=((E.x-H/ce-pe)*H-(E.y+B/ce-te)*B)/(R*H-z*B);K=pe+R*Be-ee.x,S=te+z*Be-ee.y;let xe=K*K+S*S;if(xe<=2)return new ne(K,S);y=Math.sqrt(xe/2)}else{let Z=!1;R>Number.EPSILON?B>Number.EPSILON&&(Z=!0):R<-Number.EPSILON?B<-Number.EPSILON&&(Z=!0):Math.sign(z)===Math.sign(H)&&(Z=!0),Z?(K=-z,S=R,y=Math.sqrt(Q)):(K=R,S=z,y=Math.sqrt(Q/2))}return new ne(K/y,S/y)}let k=[];for(let ee=0,le=X.length,E=le-1,K=ee+1;ee<le;ee++,E++,K++)E===le&&(E=0),K===le&&(K=0),k[ee]=O(X[ee],X[E],X[K]);let ae=[],ye,we,Y=k.concat();for(let ee=0,le=V;ee<le;ee++){let E=q[ee];ye=[];for(let K=0,S=E.length,y=S-1,R=K+1;K<S;K++,y++,R++)y===S&&(y=0),R===S&&(R=0),ye[K]=O(E[K],E[y],E[R]);ae.push(ye),Y=Y.concat(ye)}if(g===0)we=yi.triangulateShape(X,q);else{let ee=[],le=[];for(let E=0;E<g;E++){let K=E/g,S=p*Math.cos(K*Math.PI/2),y=d*Math.sin(K*Math.PI/2)+v;for(let R=0,z=X.length;R<z;R++){let B=$(X[R],k[R],y);Te(B.x,B.y,-S),K===0&&ee.push(B)}for(let R=0,z=V;R<z;R++){let B=q[R];ye=ae[R];let H=[];for(let Q=0,C=B.length;Q<C;Q++){let Z=$(B[Q],ye[Q],y);Te(Z.x,Z.y,-S),K===0&&H.push(Z)}K===0&&le.push(H)}}we=yi.triangulateShape(ee,le)}let ue=we.length,oe=d+v;for(let ee=0;ee<j;ee++){let le=m?$(I[ee],Y[ee],oe):I[ee];N?(M.copy(T.normals[0]).multiplyScalar(le.x),A.copy(T.binormals[0]).multiplyScalar(le.y),P.copy(_[0]).add(M).add(A),Te(P.x,P.y,P.z)):Te(le.x,le.y,0)}for(let ee=1;ee<=h;ee++)for(let le=0;le<j;le++){let E=m?$(I[le],Y[le],oe):I[le];N?(M.copy(T.normals[ee]).multiplyScalar(E.x),A.copy(T.binormals[ee]).multiplyScalar(E.y),P.copy(_[ee]).add(M).add(A),Te(P.x,P.y,P.z)):Te(E.x,E.y,u/h*ee)}for(let ee=g-1;ee>=0;ee--){let le=ee/g,E=p*Math.cos(le*Math.PI/2),K=d*Math.sin(le*Math.PI/2)+v;for(let S=0,y=X.length;S<y;S++){let R=$(X[S],k[S],K);Te(R.x,R.y,u+E)}for(let S=0,y=q.length;S<y;S++){let R=q[S];ye=ae[S];for(let z=0,B=R.length;z<B;z++){let H=$(R[z],ye[z],K);N?Te(H.x,H.y+_[h-1].y,_[h-1].x+E):Te(H.x,H.y,u+E)}}}function de(ee,le){let E=ee.length;for(;--E>=0;){let K=E,S=E-1;S<0&&(S=ee.length-1);for(let y=0,R=h+2*g;y<R;y++){let z=j*y,B=j*(y+1);Ee(le+K+z,le+S+z,le+S+B,le+K+B)}}}function Te(ee,le,E){l.push(ee),l.push(le),l.push(E)}function me(ee,le,E){Ie(ee),Ie(le),Ie(E);let K=r.length/3,S=x.generateTopUV(i,r,K-3,K-2,K-1);De(S[0]),De(S[1]),De(S[2])}function Ee(ee,le,E,K){Ie(ee),Ie(le),Ie(K),Ie(le),Ie(E),Ie(K);let S=r.length/3,y=x.generateSideWallUV(i,r,S-6,S-3,S-2,S-1);De(y[0]),De(y[1]),De(y[3]),De(y[1]),De(y[2]),De(y[3])}function Ie(ee){r.push(l[3*ee+0]),r.push(l[3*ee+1]),r.push(l[3*ee+2])}function De(ee){s.push(ee.x),s.push(ee.y)}(function(){let ee=r.length/3;if(m){let le=0,E=j*le;for(let K=0;K<ue;K++){let S=we[K];me(S[2]+E,S[1]+E,S[0]+E)}le=h+2*g,E=j*le;for(let K=0;K<ue;K++){let S=we[K];me(S[0]+E,S[1]+E,S[2]+E)}}else{for(let le=0;le<ue;le++){let E=we[le];me(E[2],E[1],E[0])}for(let le=0;le<ue;le++){let E=we[le];me(E[0]+j*h,E[1]+j*h,E[2]+j*h)}}i.addGroup(ee,r.length/3-ee,0)})(),(function(){let ee=r.length/3,le=0;de(X,le),le+=X.length;for(let E=0,K=q.length;E<K;E++){let S=q[E];de(S,le),le+=S.length}i.addGroup(ee,r.length/3-ee,1)})()}this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return Up(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ua[r.type]().fromJSON(r)),new n(i,e.options)}},Ip={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],m=e[3*r],p=e[3*r+1],d=e[3*r+2],v=e[3*s],g=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(m,1-d),new ne(v,1-f)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-d),new ne(g,1-f)]}};ma=class n extends en{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fa=class n extends ot{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ke(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new w,m=new ne,p=new w,d=new w,v=new w,g=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=1*f,p.y=-g,p.z=0*f,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=1*f,p.y=-g,p.z=0*f,d.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(d)}for(let x=0;x<=t;x++){let _=i+x*h*r,T=Math.sin(_),A=Math.cos(_);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*T,u.y=e[M].y,u.z=e[M].x*A,a.push(u.x,u.y,u.z),m.x=x/t,m.y=M/(e.length-1),o.push(m.x,m.y);let P=l[3*M+0]*T,N=l[3*M+1],D=l[3*M+0]*A;c.push(P,N,D)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let T=_+x*e.length,A=T,M=T+e.length,P=T+e.length+1,N=T+1;s.push(A,M,N),s.push(P,N,M)}this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ga=class n extends en{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ir=class n extends ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,m=t/l,p=[],d=[],v=[],g=[];for(let f=0;f<h;f++){let x=f*m-a;for(let _=0;_<c;_++){let T=_*u-s;d.push(T,-x,0),v.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let _=x+c*f,T=x+c*(f+1),A=x+1+c*(f+1),M=x+1+c*f;p.push(_,T,M),p.push(T,A,M)}this.setIndex(p),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},va=class n extends ot{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,m=(t-e)/(r=Math.max(1,r)),p=new w,d=new ne;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){let f=s+g/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),d.x=(p.x/t+1)/2,d.y=(p.y/t+1)/2,h.push(d.x,d.y)}u+=m}for(let v=0;v<r;v++){let g=v*(i+1);for(let f=0;f<i;f++){let x=f+g,_=x,T=x+i+1,A=x+i+2,M=x+1;o.push(_,T,M),o.push(T,A,M)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ya=class n extends ot{constructor(e=new Yr([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,m=h.extractPoints(t),p=m.shape,d=m.holes;yi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=d.length;g<f;g++){let x=d[g];yi.isClockWise(x)===!0&&(d[g]=x.reverse())}let v=yi.triangulateShape(p,d);for(let g=0,f=d.length;g<f;g++){let x=d[g];p=p.concat(x)}for(let g=0,f=p.length;g<f;g++){let x=p[g];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,f=v.length;g<f;g++){let x=v[g],_=x[0]+u,T=x[1]+u,A=x[2]+u;i.push(_,T,A),l+=3}}this.setIndex(i),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return Np(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}};Bi=class n extends ot{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,m=new w,p=[],d=[],v=[],g=[];for(let f=0;f<=i;f++){let x=[],_=f/i,T=a+_*o,A=e*Math.cos(T),M=Math.sqrt(e*e-A*A),P=0;f===0&&a===0?P=.5/t:f===i&&l===Math.PI&&(P=-.5/t);for(let N=0;N<=t;N++){let D=N/t,I=r+D*s;u.x=-M*Math.cos(I),u.y=A,u.z=M*Math.sin(I),d.push(u.x,u.y,u.z),m.copy(u).normalize(),v.push(m.x,m.y,m.z),g.push(D+P,1-_),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){let _=h[f][x+1],T=h[f][x],A=h[f+1][x],M=h[f+1][x+1];(f!==0||a>0)&&p.push(_,T,M),(f!==i-1||l<Math.PI)&&p.push(T,A,M)}this.setIndex(p),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(v,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},xa=class n extends en{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},_a=class n extends ot{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],h=[],u=[],m=new w,p=new w,d=new w;for(let v=0;v<=i;v++){let g=a+v/i*o;for(let f=0;f<=r;f++){let x=f/r*s;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),m.x=e*Math.cos(x),m.y=e*Math.sin(x),d.subVectors(p,m).normalize(),h.push(d.x,d.y,d.z),u.push(f/r),u.push(v/i)}}for(let v=1;v<=i;v++)for(let g=1;g<=r;g++){let f=(r+1)*v+g-1,x=(r+1)*(v-1)+g-1,_=(r+1)*(v-1)+g,T=(r+1)*v+g;l.push(f,x,T),l.push(x,_,T)}this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Sa=class n extends ot{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new w,m=new w,p=new w,d=new w,v=new w,g=new w,f=new w;for(let _=0;_<=i;++_){let T=_/i*s*Math.PI*2;x(T,s,a,e,p),x(T+.01,s,a,e,d),g.subVectors(d,p),f.addVectors(d,p),v.crossVectors(g,f),f.crossVectors(v,g),v.normalize(),f.normalize();for(let A=0;A<=r;++A){let M=A/r*Math.PI*2,P=-t*Math.cos(M),N=t*Math.sin(M);u.x=p.x+(P*f.x+N*v.x),u.y=p.y+(P*f.y+N*v.y),u.z=p.z+(P*f.z+N*v.z),l.push(u.x,u.y,u.z),m.subVectors(u,p).normalize(),c.push(m.x,m.y,m.z),h.push(_/i),h.push(A/r)}}for(let _=1;_<=i;_++)for(let T=1;T<=r;T++){let A=(r+1)*(_-1)+(T-1),M=(r+1)*_+(T-1),P=(r+1)*_+T,N=(r+1)*(_-1)+T;o.push(A,M,N),o.push(M,P,N)}function x(_,T,A,M,P){let N=Math.cos(_),D=Math.sin(_),I=A/T*_,q=Math.cos(I);P.x=M*(2+q)*.5*N,P.y=M*(2+q)*D*.5,P.z=M*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ma=class n extends ot{constructor(e=new qr(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new ne,h=new w,u=[],m=[],p=[],d=[];function v(g){h=e.getPointAt(g/t,h);let f=a.normals[g],x=a.binormals[g];for(let _=0;_<=r;_++){let T=_/r*Math.PI*2,A=Math.sin(T),M=-Math.cos(T);l.x=M*f.x+A*x.x,l.y=M*f.y+A*x.y,l.z=M*f.z+A*x.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)v(g);v(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let f=0;f<=r;f++)c.x=g/t,c.y=f/r,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let f=1;f<=r;f++){let x=(r+1)*(g-1)+(f-1),_=(r+1)*g+(f-1),T=(r+1)*g+f,A=(r+1)*(g-1)+f;d.push(x,_,A),d.push(_,T,A)}})()})(),this.setIndex(d),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(m,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},nr=class extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new w,s=new w;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],m=u.start;for(let p=m,d=m+u.count;p<d;p+=3)for(let v=0;v<3;v++){let g=o.getX(p+v),f=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,f),Ah(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ah(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};jy=Object.freeze({__proto__:null,BoxGeometry:yn,CapsuleGeometry:ia,CircleGeometry:na,ConeGeometry:ra,CylinderGeometry:Gr,DodecahedronGeometry:sa,EdgesGeometry:aa,ExtrudeGeometry:pa,IcosahedronGeometry:ma,LatheGeometry:fa,OctahedronGeometry:ga,PlaneGeometry:ir,PolyhedronGeometry:en,RingGeometry:va,ShapeGeometry:ya,SphereGeometry:Bi,TetrahedronGeometry:xa,TorusGeometry:_a,TorusKnotGeometry:Sa,TubeGeometry:Ma,WireframeGeometry:nr});us={clone:Tn,merge:Lt},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tn(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new nt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ta=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};tn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends tn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*i-t;break;case 2402:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,m=this._weightPrev,p=this._weightNext,d=(i-t)/(r-t),v=d*d,g=v*d,f=-m*g+2*m*v-m*d,x=(1+m)*g+(-1.5-2*m)*v+(-.5+m)*d+1,_=(-1-p)*g+(1.5+p)*v+.5*d,T=p*g-p*v;for(let A=0;A!==o;++A)s[A]=f*a[h+A]+x*a[c+A]+_*a[l+A]+T*a[u+A];return s}},Ea=class extends tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let m=0;m!==o;++m)s[m]=a[c+m]*u+a[l+m]*h;return s}},Ra=class extends tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends tn{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let d=(i-t)/(r-t),v=1-d;for(let g=0;g!==o;++g)s[g]=a[c+g]*v+a[l+g]*d;return s}let m=2*o,p=e-1;for(let d=0;d!==o;++d){let v=a[c+d],g=a[l+d],f=p*m+2*d,x=u[f],_=u[f+1],T=e*m+2*d,A=h[T],M=h[T+1],P=Bp(i,t,x,A,r);s[d]=Uu(P,v,_,M,g)}return s}};Yt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vn(t,this.TimeBufferType),this.values=Vn(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vn(e.times,Array),values:Vn(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Hs(e.settings)&&(i.settings={inTangents:Vn(e.settings.inTangents,Array),outTangents:Vn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Hs(this.settings)&&(Eh(this.settings.inTangents,e),Eh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Hs(this.settings)&&(Rh(this.settings.inTangents,e),Rh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&wd(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===2302,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,m=h+i;for(let p=0;p!==i;++p){let d=t[h+p];if(d!==t[u+p]||d!==t[m+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let m=0;m!==i;++m)t[u+m]=t[h+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,Hs(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};Yt.prototype.ValueTypeName="",Yt.prototype.TimeBufferType=Float32Array,Yt.prototype.ValueBufferType=Float32Array,Yt.prototype.DefaultInterpolation=2301;Yi=class extends Yt{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool",Yi.prototype.ValueBufferType=Array,Yi.prototype.DefaultInterpolation=2300,Yi.prototype.InterpolantFactoryMethodLinear=void 0,Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Ca=class extends Yt{constructor(e,t,i,r){super(e,t,i,r)}};Ca.prototype.ValueTypeName="color";Ia=class extends Yt{constructor(e,t,i,r){super(e,t,i,r)}};Ia.prototype.ValueTypeName="number";Ua=class extends tn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(s,0,a,c-o,a,c,l);return s}},$r=class extends Yt{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion",$r.prototype.InterpolantFactoryMethodSmooth=void 0;Zi=class extends Yt{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string",Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=2300,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;Na=class extends Yt{constructor(e,t,i,r){super(e,t,i,r)}};Na.prototype.ValueTypeName="vector";Xs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ph(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ph(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};Da=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,m=c.length;u<m;u+=2){let p=c[u],d=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new Da,rr=class{constructor(e){this.manager=e!==void 0?e:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};rr.DEFAULT_MATERIAL_NAME="__DEFAULT";kn=new WeakMap,La=class extends rr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Xs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=kn.get(a);u===void 0&&(u=[],kn.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=qn("img");function l(){h(),t&&t(this);let u=kn.get(this)||[];for(let m=0;m<u.length;m++){let p=u[m];p.onLoad&&p.onLoad(this)}kn.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Xs.remove(`image:${e}`);let m=kn.get(this)||[];for(let p=0;p<m.length;p++){let d=m[p];d.onError&&d.onError(u)}kn.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xs.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},es=class extends rr{constructor(e){super(e)}load(e,t,i,r){let s=new Ut,a=new La(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Wy=new qe,qy=new w,Xy=new w,js=new w,Ws=new Bt,vi=new w,sr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(js,Ws,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Ws,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(js,Ws,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(js,Ws,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new w,Ch=new ne,Ih=new ne,Ft=class extends sr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Kn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*jn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Kn*Math.atan(Math.tan(.5*jn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ih),t.subVectors(Ih,Ch)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*jn*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oa=class extends sr{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ts=class extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ky=new qe,Yy=new qe,Zy=new qe,ar=class extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(-90,1,e,t);r.layers=this.layers,this.add(r);let s=new Ft(-90,1,e,t);s.layers=this.layers,this.add(s);let a=new Ft(-90,1,e,t);a.layers=this.layers,this.add(a);let o=new Ft(-90,1,e,t);o.layers=this.layers,this.add(o);let l=new Ft(-90,1,e,t);l.layers=this.layers,this.add(l);let c=new Ft(-90,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==2001)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;g=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,m,p),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},Fa=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Jy=new w,Qy=new Bt,$y=new w,ex=new w,tx=new w,ix=new w,nx=new Bt,rx=new w,sx=new w,zp=new RegExp("[\\[\\]\\.:\\/]","g"),cc="[^\\[\\]\\.:\\/]",Vp="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",cc),Gp=/(WCOD+)?/.source.replace("WCOD",Vp),Hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Wp=new RegExp("^"+kp+Gp+Hp+jp+"$"),qp=["material","materials","bones","map"],Ko=class{constructor(e,t,i){let r=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(e){let t=Wp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);qp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Oe("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void ze("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0)return void ze("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Ko,ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ax=new Float32Array(1),nn=class extends Js{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Uh=new qe,is=class{constructor(e,t,i=0,r=1/0){this.ray=new xi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Zn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,t=!0,i=[]){return Yo(e,this,i,t),i.sort(Nh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yo(e[r],this,i,t);return i.sort(Nh),i}};or=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},fc=class fc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};fc.prototype.isMatrix2=!0;Zo=fc,ox=new ne,Dh=new w,qs=new w,Gn=new w,Hn=new w,Ho=new w,Xp=new w,Kp=new w,ns=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Dh.subVectors(e,this.start),qs.subVectors(this.end,this.start);let i=qs.dot(qs);if(i===0)return 0;let r=qs.dot(Dh)/i;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Xp,i=Kp){let r=10000000000000001e-32,s,a,o=this.start,l=e.start,c=this.end,h=e.end;Gn.subVectors(c,o),Hn.subVectors(h,l),Ho.subVectors(o,l);let u=Gn.dot(Gn),m=Hn.dot(Hn),p=Hn.dot(Ho);if(u<=r&&m<=r)return t.copy(o),i.copy(l),t.distanceToSquared(i);if(u<=r)s=0,a=p/m,a=ke(a,0,1);else{let d=Gn.dot(Ho);if(m<=r)a=0,s=ke(-d/u,0,1);else{let v=Gn.dot(Hn),g=u*m-v*v;s=g!==0?ke((v*p-d*m)/g,0,1):0,a=(v*s+p)/m,a<0?(a=0,s=ke(-d/u,0,1)):a>1&&(a=1,s=ke((v-d)/u,0,1))}}return t.copy(o).addScaledVector(Gn,s),i.copy(l).addScaledVector(Hn,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},lx=new w,cx=new w,hx=new qe,ux=new qe,dx=new w,px=new Je,mx=new Je,fx=new w,gx=new w,vx=new w,yx=new w,xx=new sr,_x=new Nt,Sx=new w,rs=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function ed(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zp(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,s),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<c.length;u++){let m=c[h],p=c[u];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,m=c.length;u<m;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}function Ug(n,e,t,i,r,s){let a=new Je(0),o,l,c=r===!0?0:1,h=null,u=0,m=null;function p(v){let g=v.isScene===!0?v.background:null;if(g&&g.isTexture){let f=v.backgroundBlurriness>0;g=e.get(g,f)}return g}function d(v,g){v.getRGB(Qa,lc(n)),t.buffers.color.setClear(Qa.r,Qa.g,Qa.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),c=g,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:function(v){let g=!1,f=p(v);f===null?d(a,c):f&&f.isColor&&(d(f,1),g=!0);let x=n.xr.getEnvironmentBlendMode();x==="additive"?t.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||g)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(v,g){let f=p(g);f&&f.isCubeTexture?(l===void 0&&(l=new xt(new yn(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Tn(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,_,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(g.backgroundRotation)).transpose(),f.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(td),l.material.toneMapped=tt.getTransfer(f.colorSpace)!==lt,h===f&&u===f.version&&m===n.toneMapping||(l.material.needsUpdate=!0,h=f,u=f.version,m=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new xt(new ir(2,2),new kt({name:"BackgroundMaterial",uniforms:Tn(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,o.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,o.material.toneMapped=tt.getTransfer(f.colorSpace)!==lt,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&u===f.version&&m===n.toneMapping||(o.material.needsUpdate=!0,h=f,u=f.version,m=n.toneMapping),o.layers.enableAll(),v.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function Ng(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(f){return n.bindVertexArray(f)}function l(f){return n.deleteVertexArray(f)}function c(f){let x=[],_=[],T=[];for(let A=0;A<t;A++)x[A]=0,_[A]=0,T[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:_,attributeDivisors:T,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let x=0,_=f.length;x<_;x++)f[x]=0}function u(f){m(f,0)}function m(f,x){let _=s.newAttributes,T=s.enabledAttributes,A=s.attributeDivisors;_[f]=1,T[f]===0&&(n.enableVertexAttribArray(f),T[f]=1),A[f]!==x&&(n.vertexAttribDivisor(f,x),A[f]=x)}function p(){let f=s.newAttributes,x=s.enabledAttributes;for(let _=0,T=x.length;_<T;_++)x[_]!==f[_]&&(n.disableVertexAttribArray(_),x[_]=0)}function d(f,x,_,T,A,M,P){P===!0?n.vertexAttribIPointer(f,x,_,A,M):n.vertexAttribPointer(f,x,_,T,A,M)}function v(){g(),a=!0,s!==r&&(s=r,o(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(f,x,_,T,A){let M=!1,P=(function(N,D,I,q){let L=q.wireframe===!0,V=i[D.id];V===void 0&&(V={},i[D.id]=V);let X=N.isInstancedMesh===!0?N.id:0,$=V[X];$===void 0&&($={},V[X]=$);let j=$[I.id];j===void 0&&(j={},$[I.id]=j);let O=j[L];return O===void 0&&(O=c(n.createVertexArray()),j[L]=O),O})(f,T,_,x);s!==P&&(s=P,o(s.object)),M=(function(N,D,I,q){let L=s.attributes,V=D.attributes,X=0,$=I.getAttributes();for(let j in $)if($[j].location>=0){let O=L[j],k=V[j];if(k===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(k=N.instanceColor)),O===void 0||O.attribute!==k||k&&O.data!==k.data)return!0;X++}return s.attributesNum!==X||s.index!==q})(f,T,_,A),M&&(function(N,D,I,q){let L={},V=D.attributes,X=0,$=I.getAttributes();for(let j in $)if($[j].location>=0){let O=V[j];O===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(O=N.instanceColor));let k={};k.attribute=O,O&&O.data&&(k.data=O.data),L[j]=k,X++}s.attributes=L,s.attributesNum=X,s.index=q})(f,T,_,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(N,D,I,q){h();let L=q.attributes,V=I.getAttributes(),X=D.defaultAttributeValues;for(let $ in V){let j=V[$];if(j.location>=0){let O=L[$];if(O===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){let k=O.normalized,ae=O.itemSize,ye=e.get(O);if(ye===void 0)continue;let we=ye.buffer,Y=ye.type,ue=ye.bytesPerElement,oe=Y===n.INT||Y===n.UNSIGNED_INT||O.gpuType===ml;if(O.isInterleavedBufferAttribute){let de=O.data,Te=de.isInterleavedBuffer===!0?de.stride:de.itemSize,me=O.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let Ee=0;Ee<j.locationSize;Ee++)m(j.location+Ee,de.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<j.locationSize;Ee++)u(j.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ee=0;Ee<j.locationSize;Ee++)d(j.location+Ee,ae/j.locationSize,Y,k,Te*ue,(me+ae/j.locationSize*Ee)*ue,oe)}else{if(O.isInstancedBufferAttribute){for(let de=0;de<j.locationSize;de++)m(j.location+de,O.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let de=0;de<j.locationSize;de++)u(j.location+de);n.bindBuffer(n.ARRAY_BUFFER,we);for(let de=0;de<j.locationSize;de++)d(j.location+de,ae/j.locationSize,Y,k,ae*ue,ae/j.locationSize*de*ue,oe)}}else if(X!==void 0){let k=X[$];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(j.location,k);break;case 3:n.vertexAttrib3fv(j.location,k);break;case 4:n.vertexAttrib4fv(j.location,k);break;default:n.vertexAttrib1fv(j.location,k)}}}}p()})(f,x,_,T),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:v,resetDefaultState:g,dispose:function(){v();for(let f in i){let x=i[f];for(let _ in x){let T=x[_];for(let A in T){let M=T[A];for(let P in M)l(M[P].object),delete M[P];delete T[A]}}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let x=i[f.id];for(let _ in x){let T=x[_];for(let A in T){let M=T[A];for(let P in M)l(M[P].object),delete M[P];delete T[A]}}delete i[f.id]},releaseStatesOfObject:function(f){for(let x in i){let _=i[x],T=f.isInstancedMesh===!0?f.id:0,A=_[T];if(A!==void 0){for(let M in A){let P=A[M];for(let N in P)l(P[N].object),delete P[N];delete A[M]}delete _[T],Object.keys(_).length===0&&delete i[x]}}},releaseStatesOfProgram:function(f){for(let x in i){let _=i[x];for(let T in _){let A=_[T];if(A[f.id]===void 0)continue;let M=A[f.id];for(let P in M)l(M[P].object),delete M[P];delete A[f.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Dg(n,e,t){let i;this.setMode=function(r){i=r},this.render=function(r,s){n.drawArrays(i,r,s),t.update(s,i,1)},this.renderInstances=function(r,s,a){a!==0&&(n.drawArraysInstanced(i,r,s,a),t.update(s,i,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,s,0,a);let o=0;for(let l=0;l<a;l++)o+=s[l];t.update(o,i,1)}}function Lg(n,e,t,i){let r;function s(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Oe("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=t.logarithmicDepthBuffer===!0&&l===!1;return t.reversedDepthBuffer===!0&&l===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&l===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===Vi||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==fi&&h!==zi&&!u&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function Og(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Kt,o=new Ge,l={value:null,needsUpdate:!1};function c(h,u,m,p){let d=h!==null?h.length:0,v=null;if(d!==0){if(v=l.value,p!==!0||v===null){let g=m+4*d,f=u.matrixWorldInverse;o.getNormalMatrix(f),(v===null||v.length<g)&&(v=new Float32Array(g));for(let x=0,_=m;x!==d;++x,_+=4)a.copy(h[x]).applyMatrix4(f,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,m){let p=h.clippingPlanes,d=h.clipIntersection,v=h.clipShadows,g=n.get(h);if(!r||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,x=4*f,_=g.clippingState||null;l.value=_,_=c(p,u,x,m);for(let T=0;T!==x;++T)_[T]=t[T];g.clippingState=_,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=f}}}function Du(n,e,t){return new ms(n,{minFilter:an,generateMipmaps:e,type:Si,colorSpace:Za,depthBuffer:t})}function fs(n,e,t){return new kt({name:n,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:t,side:Dt,blending:_n,depthTest:!1,depthWrite:!1})}function zg(){return fs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES 256u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vg(){return fs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:16}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kg(){return fs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES 20
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Lu(){return fs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ou(){return fs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(o,l){return l===Va?o.mapping=ls:l===ka&&(o.mapping=ur),o}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let h=c.mapping,u=h===Va||h===ka,m=h===ls||h===ur;if(u||m){let p=t.get(c),d=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return i===null&&(i=new eo(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let v=c.image;return u&&v&&v.height>0||m&&v&&(function(g){let f=0,x=6;for(let _=0;_<x;_++)g[_]!==void 0&&f++;return f===x})(v)?(i===null&&(i=new eo(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===Va||h===ka){if(e.has(c))return r(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let m=new ms(u.height);return m.fromEquirectangularTexture(n,c),e.set(c,m),c.addEventListener("dispose",s),r(m.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function Hg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Pr("WebGLRenderer: "+i+" extension not supported."),r}}}function jg(n,e,t,i){let r={},s=new WeakMap,a=new FinalizationRegistry(h=>delete r[h]);function o(h){l(h.target)}function l(h){h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id],a.unregister(h);let u=s.get(h);u&&(e.remove(u),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function c(h){let u=h.index,m=h.attributes.position,p=0;if(m===void 0)return;let d=u!==null?u.array.length:m.array.length/3-1,v=new(m.count>=65535?Fr:Or)(6*Math.ceil(d/3),1),g=v.array;if(u!==null){let x=u.array;p=u.version;for(let _=0,T=0;_<d;_+=3){let A=x[_+0],M=x[_+1],P=x[_+2];g[T++]=A,g[T++]=M,g[T++]=M,g[T++]=P,g[T++]=P,g[T++]=A}}else{p=m.version;for(let x=0,_=0;x<d;x+=3){let T=x+0,A=x+1,M=x+2;g[_++]=T,g[_++]=A,g[_++]=A,g[_++]=M,g[_++]=M,g[_++]=T}}v.version=p;let f=s.get(h);f&&e.remove(f),s.set(h,v)}return{get:function(h,u){return r[u.id]!==void 0||(u.addEventListener("dispose",o),r[u.id]=new WeakRef(u),a.register(u,u.id,u),t.memory.geometries++),u},update:function(h){let u=h.attributes;for(let m in u)e.update(u[m],n.ARRAY_BUFFER)},getWireframeAttribute:function(h){let u=s.get(h);if(u){let m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)},dispose:function(){for(let h in r){let u=r[h].deref();u!==void 0&&l(u)}}}}function Wg(n,e,t){let i,r,s;this.setMode=function(a){i=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,r,a*s),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(n.drawElementsInstanced(i,o,r,a*s,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,r,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function qg(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:ze("WebGLInfo: Unknown draw mode:",i)}}}}function Xg(n,e,t){let i=new WeakMap,r=new nt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],x=0;m===!0&&(x=1),p===!0&&(x=2),d===!0&&(x=3);let _=a.attributes.position.count*x,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*T*4*h),M=new Dr(A,_,T,h);M.type=zi,M.needsUpdate=!0;let P=4*x;for(let N=0;N<h;N++){let D=v[N],I=g[N],q=f[N],L=_*T*4*N;for(let V=0;V<D.count;V++){let X=V*P;m===!0&&(r.fromBufferAttribute(D,V),A[L+X+0]=r.x,A[L+X+1]=r.y,A[L+X+2]=r.z,A[L+X+3]=0),p===!0&&(r.fromBufferAttribute(I,V),A[L+X+4]=r.x,A[L+X+5]=r.y,A[L+X+6]=r.z,A[L+X+7]=0),d===!0&&(r.fromBufferAttribute(q,V),A[L+X+8]=r.x,A[L+X+9]=r.y,A[L+X+10]=r.z,A[L+X+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new ne(_,T)},i.set(a,u),a.addEventListener("dispose",function N(){M.dispose(),i.delete(a),a.removeEventListener("dispose",N)})}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let d=0;d<l.length;d++)m+=l[d];let p=a.morphTargetsRelative?1:1-m;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function Kg(n,e,t,i,r){let s=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=r.render.frame,c=o.geometry,h=e.get(o,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),s.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return h},dispose:function(){s=new WeakMap}}}function Zg(n,e,t,i,r,s){let a=new Jt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new ot;h.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let u=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new xt(h,u),p=new Oa(-1,1,1,-1,0,1),d,v=null,g=null,f=!1,x=null,_=[],T=!1;this.setSize=function(A,M){a.setSize(A,M),o!==null&&o.setSize(A,M),l!==null&&l.setSize(A,M);for(let P=0;P<_.length;P++){let N=_[P];N.setSize&&N.setSize(A,M)}},this.setEffects=function(A){_=A,T=_.length>0&&_[0].isRenderPass===!0;let M=a.width,P=a.height;_.length>0&&o===null&&(o=new Jt(M,P,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(M,P,{type:Si,depthBuffer:!1,stencilBuffer:!1}));let N=r===!0&&_.some(D=>D.needsDepthTexture===!0);N!==(a.depthTexture!==null)&&(N===!0&&c===null&&(c=new Fi(M,P),s===!0&&(c.format=ln,c.type=Sn)),a.dispose(),a.depthTexture=N?c:null,a.resolveDepthBuffer=N,a.storeMultisampledDepthBuffer=N);for(let D=0;D<_.length;D++){let I=_[D];I.setSize&&I.setSize(M,P),N&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,M){if(f||A.toneMapping===ni&&_.length===0)return!1;if(x=M,M!==null){let P=M.width,N=M.height;a.width===P&&a.height===N||this.setSize(P,N)}return T===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=ni,!0},this.hasRenderPass=function(){return T},this.end=function(A,M){A.toneMapping=d,f=!0;let P=a,N=o;for(let D=0;D<_.length;D++){let I=_[D];I.enabled!==!1&&(I.render(A,N,P,M),I.needsSwap!==!1&&(P=N,N=N===o?l:o))}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,u.defines={},tt.getTransfer(v)===lt&&(u.defines.SRGB_TRANSFER="");let D=Yg[g];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(x),A.render(m,p),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qg(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function $g(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function t0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),St(t,i)}}function i0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),St(t,i)}}function n0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(_t(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),St(t,i)}}function r0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function a0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function o0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function l0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function h0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function u0(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function no(n){return n.version===0&&(n.compareFunction=ec,n.needsUpdate=!0),n}function d0(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),s=this.type===n.SAMPLER_2D_SHADOW?no(nd):id,t.setTexture2D(e||s,r)}function p0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ad,r)}function m0(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),s;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),s=this.type===n.SAMPLER_CUBE_SHADOW?no(rd):od,t.setTextureCube(e||s,r)}function f0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sd,r)}function g0(n){switch(n){case 5126:return Jg;case 35664:return Qg;case 35665:return $g;case 35666:return e0;case 35674:return t0;case 35675:return i0;case 35676:return n0;case 5124:case 35670:return r0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return f0}}function v0(n,e){n.uniform1fv(this.addr,e)}function y0(n,e){let t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function x0(n,e){let t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function _0(n,e){let t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function S0(n,e){let t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M0(n,e){let t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b0(n,e){let t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T0(n,e){n.uniform1iv(this.addr,e)}function A0(n,e){n.uniform2iv(this.addr,e)}function w0(n,e){n.uniform3iv(this.addr,e)}function E0(n,e){n.uniform4iv(this.addr,e)}function R0(n,e){n.uniform1uiv(this.addr,e)}function P0(n,e){n.uniform2uiv(this.addr,e)}function C0(n,e){n.uniform3uiv(this.addr,e)}function I0(n,e){n.uniform4uiv(this.addr,e)}function U0(n,e,t){let i=this.cache,r=e.length,s=io(t,r),a;_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s)),a=this.type===n.SAMPLER_2D_SHADOW?no(nd):id;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function N0(n,e,t){let i=this.cache,r=e.length,s=io(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ad,s[a])}function D0(n,e,t){let i=this.cache,r=e.length,s=io(t,r),a;_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s)),a=this.type===n.SAMPLER_CUBE_SHADOW?no(rd):od;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function L0(n,e,t){let i=this.cache,r=e.length,s=io(t,r);_t(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sd,s[a])}function O0(n){switch(n){case 5126:return v0;case 35664:return y0;case 35665:return x0;case 35666:return _0;case 35674:return S0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return R0;case 36294:return P0;case 36295:return C0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function F0(n,e,t){let i=n.name,r=i.length;for(vc.lastIndex=0;;){let s=vc.exec(i),a=vc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Gu(t,c===void 0?new xc(o,n,e):new _c(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Sc(o),Gu(t,h)),t=h}}}function Hu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function z0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function V0(n){tt._getMatrix(ju,tt.workingColorSpace,n);let e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Jl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+z0(n.getShaderSource(e),a)}return r}function k0(n,e){let t=V0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function H0(n,e){let t=G0[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function j0(){return tt.getLuminanceCoefficients($a),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$a.x.toFixed(4)}, ${$a.y.toFixed(4)}, ${$a.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function q0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ps(n){return n!==""}function qu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Mc(n){return n.replace(K0,Y0)}function Y0(n,e){let t=Ye[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Mc(t)}function Ku(n){return n.replace(Z0,J0)}function J0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(n){return Q0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function tv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function nv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":iv[n.combine]||"ENVMAP_BLENDING_NONE"}function rv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=tv(t),u=nv(t),m=W0(t),p=q0(s),d=r.createProgram(),v,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ps).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ps).join(`
`),g.length>0&&(g+=`
`)):(v=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),g=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ni?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),a=Mc(a),a=qu(a,t),a=Xu(a,t),o=Mc(o),o=qu(o,t),o=Xu(o,t),a=Ku(a),o=Ku(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=f+v+a,_=f+g+o,T=Hu(r,r.VERTEX_SHADER,x),A=Hu(r,r.FRAGMENT_SHADER,_);function M(I){if(n.debug.checkShaderErrors){let q=r.getProgramInfoLog(d)||"",L=r.getShaderInfoLog(T)||"",V=r.getShaderInfoLog(A)||"",X=q.trim(),$=L.trim(),j=V.trim(),O=!0,k=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,d,T,A);else{let ae=Wu(r,T,"vertex"),ye=Wu(r,A,"fragment");ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ae+`
`+ye)}else X!==""?Oe("WebGLProgram: Program Info Log:",X):$!==""&&j!==""||(k=!1);k&&(I.diagnostics={runnable:O,programLog:X,vertexShader:{log:$,prefix:v},fragmentShader:{log:j,prefix:g}})}r.deleteShader(T),r.deleteShader(A),P=new pr(r,d),N=X0(r,d)}let P,N;r.attachShader(d,T),r.attachShader(d,A),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),this.getUniforms=function(){return P===void 0&&M(this),P},this.getAttributes=function(){return N===void 0&&M(this),N};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(d,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=T,this.fragmentShader=A,this}function av(n){return n===Mn||n===Ka||n===Ya}function ov(n,e,t,i,r,s){let a=new Zn,o=new bc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(d){return l.add(d),d===0?"uv":`uv${d}`}return{getParameters:function(d,v,g,f,x,_){let T=f.fog,A=x.geometry,M=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?f.environment:null,P=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,N=e.get(d.envMap||M,P),D=m[d.type],I=i.precision;d.precision!==null&&(I=i.getMaxPrecision(d.precision),I!==d.precision&&Oe("WebGLProgram.getParameters:",d.precision,"not supported, using",I,"instead."));let q=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,L=q!==void 0?q.length:0,V,X,$,j,O=0;if(A.morphAttributes.position!==void 0&&(O=1),A.morphAttributes.normal!==void 0&&(O=2),A.morphAttributes.color!==void 0&&(O=3),D){let Ne=Vt[D];V=Ne.vertexShader,X=Ne.fragmentShader}else{V=d.vertexShader,X=d.fragmentShader;let Ne=o.getVertexShaderStage(d),Qe=o.getFragmentShaderStage(d);o.update(d,Ne,Qe),$=Ne.id,j=Qe.id}let k=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),ye=x.isInstancedMesh===!0,we=x.isBatchedMesh===!0,Y=!!d.map,ue=!!d.matcap,oe=!!N,de=oe&&N.isPMREMTexture===!0,Te=!!d.aoMap,me=!!d.lightMap,Ee=!!d.bumpMap&&d.wireframe===!1,Ie=!!d.normalMap,De=!!d.displacementMap,ee=!!d.emissiveMap,le=!!d.metalnessMap,E=!!d.roughnessMap,K=d.anisotropy>0,S=d.clearcoat>0,y=d.diffuseRoughness>0,R=d.dispersion>0,z=d.retroreflectivity>0,B=d.iridescence>0,H=d.sheen>0,Q=d.transmission>0,C=K&&!!d.anisotropyMap,Z=S&&!!d.clearcoatMap,ce=S&&!!d.clearcoatNormalMap,pe=S&&!!d.clearcoatRoughnessMap,te=y&&!!d.diffuseRoughnessMap,Be=B&&!!d.iridescenceMap,xe=B&&!!d.iridescenceThicknessMap,Se=H&&!!d.sheenColorMap,rt=H&&!!d.sheenRoughnessMap,Ze=!!d.specularMap,ve=!!d.specularColorMap,Ce=!!d.specularIntensityMap,We=Q&&!!d.transmissionMap,ut=Q&&!!d.thicknessMap,ie=!!d.gradientMap,re=!!d.alphaMap,he=d.alphaTest>0,se=!!d.alphaHash,Me=!!d.extensions,Re=ni;d.toneMapped&&(k!==null&&k.isXRRenderTarget!==!0||(Re=n.toneMapping));let He=de?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,Le={shaderID:D,shaderType:d.type,shaderName:d.name,vertexShader:V,fragmentShader:X,defines:d.defines,customVertexShaderID:$,customFragmentShaderID:j,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:I,batching:we,batchingColor:we&&x._colorsTexture!==null,instancing:ye,instancingColor:ye&&x.instanceColor!==null,instancingMorph:ye&&x.morphTexture!==null,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:Y,matcap:ue,envMap:oe,envMapMode:oe&&N.mapping,envMapPMREM:de,envMapMaxLod:de?He.length-1:null,envMapSize:de?He[0].width:null,aoMap:Te,lightMap:me,bumpMap:Ee,normalMap:Ie,displacementMap:De,emissiveMap:ee,normalMapObjectSpace:Ie&&d.normalMapType===vu,normalMapTangentSpace:Ie&&d.normalMapType===Zl,packedNormalMap:Ie&&d.normalMapType===Zl&&av(d.normalMap.format),metalnessMap:le,roughnessMap:E,anisotropy:K,anisotropyMap:C,clearcoat:S,clearcoatMap:Z,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,diffuseRoughness:y,diffuseRoughnessMap:te,dispersion:R,retroreflection:z,iridescence:B,iridescenceMap:Be,iridescenceThicknessMap:xe,sheen:H,sheenColorMap:Se,sheenRoughnessMap:rt,specularMap:Ze,specularColorMap:ve,specularIntensityMap:Ce,transmission:Q,transmissionMap:We,thicknessMap:ut,gradientMap:ie,opaque:d.transparent===!1&&d.blending===as&&d.alphaToCoverage===!1,alphaMap:re,alphaTest:he,alphaHash:se,combine:d.combine,mapUv:Y&&p(d.map.channel),aoMapUv:Te&&p(d.aoMap.channel),lightMapUv:me&&p(d.lightMap.channel),bumpMapUv:Ee&&p(d.bumpMap.channel),normalMapUv:Ie&&p(d.normalMap.channel),displacementMapUv:De&&p(d.displacementMap.channel),emissiveMapUv:ee&&p(d.emissiveMap.channel),metalnessMapUv:le&&p(d.metalnessMap.channel),roughnessMapUv:E&&p(d.roughnessMap.channel),anisotropyMapUv:C&&p(d.anisotropyMap.channel),clearcoatMapUv:Z&&p(d.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(d.diffuseRoughnessMap.channel),iridescenceMapUv:Be&&p(d.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(d.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(d.sheenColorMap.channel),sheenRoughnessMapUv:rt&&p(d.sheenRoughnessMap.channel),specularMapUv:Ze&&p(d.specularMap.channel),specularColorMapUv:ve&&p(d.specularColorMap.channel),specularIntensityMapUv:Ce&&p(d.specularIntensityMap.channel),transmissionMapUv:We&&p(d.transmissionMap.channel),thicknessMapUv:ut&&p(d.thicknessMap.channel),alphaMapUv:re&&p(d.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Ie||K),vertexNormals:!!A.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!A.attributes.uv&&(Y||re),fog:!!T,useFog:d.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||A.attributes.normal===void 0&&Ie===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:O,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:_.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Y&&d.map.isVideoTexture===!0&&tt.getTransfer(d.map.colorSpace)===lt,decodeVideoTextureEmissive:ee&&d.emissiveMap.isVideoTexture===!0&&tt.getTransfer(d.emissiveMap.colorSpace)===lt,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===_i,flipSided:d.side===Dt,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Me&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&d.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le},getProgramCacheKey:function(d){let v=[];if(d.shaderID?v.push(d.shaderID):(v.push(d.customVertexShaderID),v.push(d.customFragmentShaderID)),d.defines!==void 0)for(let g in d.defines)v.push(g),v.push(d.defines[g]);return d.isRawShaderMaterial===!1&&((function(g,f){g.push(f.precision),g.push(f.outputColorSpace),g.push(f.envMapMode),g.push(f.envMapPMREM),g.push(f.envMapMaxLod),g.push(f.envMapSize),g.push(f.mapUv),g.push(f.alphaMapUv),g.push(f.lightMapUv),g.push(f.aoMapUv),g.push(f.bumpMapUv),g.push(f.normalMapUv),g.push(f.displacementMapUv),g.push(f.emissiveMapUv),g.push(f.metalnessMapUv),g.push(f.roughnessMapUv),g.push(f.anisotropyMapUv),g.push(f.clearcoatMapUv),g.push(f.clearcoatNormalMapUv),g.push(f.clearcoatRoughnessMapUv),g.push(f.diffuseRoughnessMapUv),g.push(f.iridescenceMapUv),g.push(f.iridescenceThicknessMapUv),g.push(f.sheenColorMapUv),g.push(f.sheenRoughnessMapUv),g.push(f.specularMapUv),g.push(f.specularColorMapUv),g.push(f.specularIntensityMapUv),g.push(f.transmissionMapUv),g.push(f.thicknessMapUv),g.push(f.combine),g.push(f.fogExp2),g.push(f.sizeAttenuation),g.push(f.morphTargetsCount),g.push(f.numSunLights),g.push(f.numDirLights),g.push(f.numPointLights),g.push(f.numSpotLights),g.push(f.numSpotLightMaps),g.push(f.numHemiLights),g.push(f.numRectAreaLights),g.push(f.numSunLightShadows),g.push(f.numDirLightShadows),g.push(f.numPointLightShadows),g.push(f.numSpotLightShadows),g.push(f.numSpotLightShadowsWithMaps),g.push(f.numLightProbes),g.push(f.numLightProbeGrids),g.push(f.shadowMapType),g.push(f.toneMapping),g.push(f.numClippingPlanes),g.push(f.numClipIntersection),g.push(f.depthPacking)})(v,d),(function(g,f){a.disableAll(),f.instancing&&a.enable(0),f.instancingColor&&a.enable(1),f.instancingMorph&&a.enable(2),f.matcap&&a.enable(3),f.envMap&&a.enable(4),f.normalMapObjectSpace&&a.enable(5),f.normalMapTangentSpace&&a.enable(6),f.clearcoat&&a.enable(7),f.iridescence&&a.enable(8),f.alphaTest&&a.enable(9),f.vertexColors&&a.enable(10),f.vertexAlphas&&a.enable(11),f.vertexUv1s&&a.enable(12),f.vertexUv2s&&a.enable(13),f.vertexUv3s&&a.enable(14),f.vertexTangents&&a.enable(15),f.anisotropy&&a.enable(16),f.alphaHash&&a.enable(17),f.batching&&a.enable(18),f.dispersion&&a.enable(19),f.retroreflection&&a.enable(24),f.diffuseRoughness&&a.enable(25),f.batchingColor&&a.enable(20),f.gradientMap&&a.enable(21),f.packedNormalMap&&a.enable(22),f.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),f.fog&&a.enable(0),f.useFog&&a.enable(1),f.flatShading&&a.enable(2),f.logarithmicDepthBuffer&&a.enable(3),f.reversedDepthBuffer&&a.enable(4),f.skinning&&a.enable(5),f.morphTargets&&a.enable(6),f.morphNormals&&a.enable(7),f.morphColors&&a.enable(8),f.premultipliedAlpha&&a.enable(9),f.shadowMapEnabled&&a.enable(10),f.doubleSided&&a.enable(11),f.flipSided&&a.enable(12),f.useDepthPacking&&a.enable(13),f.dithering&&a.enable(14),f.transmission&&a.enable(15),f.sheen&&a.enable(16),f.opaque&&a.enable(17),f.pointsUvs&&a.enable(18),f.decodeVideoTexture&&a.enable(19),f.decodeVideoTextureEmissive&&a.enable(20),f.alphaToCoverage&&a.enable(21),f.numLightProbeGrids>0&&a.enable(22),f.hasPositionAttribute&&a.enable(23),g.push(a.mask)})(v,d),v.push(n.outputColorSpace)),v.push(d.customProgramCacheKey),v.join()},getUniforms:function(d){let v=m[d.type],g;if(v){let f=Vt[v];g=us.clone(f.uniforms)}else g=d.uniforms;return g},acquireProgram:function(d,v){let g=h.get(v);return g!==void 0?++g.usedTimes:(g=new rv(n,v,d,r),c.push(g),h.set(v,g)),g},releaseProgram:function(d){if(--d.usedTimes===0){let v=c.indexOf(d);c[v]=c[c.length-1],c.pop(),h.delete(d.cacheKey),d.destroy()}},releaseShaderCache:function(d){o.remove(d)},programs:c,dispose:function(){o.dispose()}}}function lv(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ju(){let n=[],e=0,t=[],i=[],r=[];function s(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,m){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:s(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:m},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=s(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=m),e++,p}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(o,l,c,h,u,m,p){p.reversedDepth===!0&&(u=-u);let d=a(o,l,c,h,u,m);c.transmission>0?i.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(o,l,c,h,u,m){let p=a(o,l,c,h,u,m);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l){t.length>1&&t.sort(o||cv),i.length>1&&i.sort(l||Zu),r.length>1&&r.sort(l||Zu)}}}function hv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Ju,n.set(e,[r])):t>=i.length?(r=new Ju,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function uv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new Je};break;case"SpotLight":t={position:new w,direction:new w,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new w,halfWidth:new w,halfHeight:new w}}return n[e.id]=t,t}}}function dv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return n[e.id]=t,t}}}function mv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fv(n){let e=new uv,t=dv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new w);let r=new w,s=new qe,a=new qe;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let u=0,m=0,p=0,d=0,v=0,g=0,f=0,x=0,_=0,T=0,A=0,M=0,P=0,N=0;o.sort(mv);for(let I=0,q=o.length;I<q;I++){let L=o[I],V=L.color,X=L.intensity,$=L.distance,j=null;if(L.shadow&&L.shadow.map&&(j=L.shadow.map.texture.format===Mn?L.shadow.map.texture:L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)l+=V.r*X,c+=V.g*X,h+=V.b*X;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],X);N++}else if(L.isSunLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,ae=t.get(L);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[m]=ae,i.sunShadowMap[m]=j;let ye=k.getViewportCount();for(let we=0;we<ye;we++)i.sunShadowMatrix[p+we]=k.getMatrix(we),i.sunShadowCascade[p+we]=k._cascadeData[we];p+=ye,m++}i.sun[u]=O,u++}else if(L.isDirectionalLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,ae=t.get(L);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,i.directionalShadow[d]=ae,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=O,d++}else if(L.isSpotLight){let O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(V).multiplyScalar(X),O.distance=$,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[g]=O;let k=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,k.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[g]=k.matrix,L.castShadow){let ae=t.get(L);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,i.spotShadow[g]=ae,i.spotShadowMap[g]=j,A++}g++}else if(L.isRectAreaLight){let O=e.get(L);O.color.copy(V).multiplyScalar(X),O.halfWidth.set(.5*L.width,0,0),O.halfHeight.set(0,.5*L.height,0),i.rectArea[f]=O,f++}else if(L.isPointLight){let O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let k=L.shadow,ae=t.get(L);ae.shadowIntensity=k.intensity,ae.shadowBias=k.bias,ae.shadowNormalBias=k.normalBias,ae.shadowRadius=k.radius,ae.shadowMapSize=k.mapSize,ae.shadowCameraNear=k.camera.near,ae.shadowCameraFar=k.camera.far,i.pointShadow[v]=ae,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=L.shadow.matrix,T++}i.point[v]=O,v++}else if(L.isHemisphereLight){let O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(X),O.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[x]=O,x++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let D=i.hash;D.sunLength===u&&D.directionalLength===d&&D.pointLength===v&&D.spotLength===g&&D.rectAreaLength===f&&D.hemiLength===x&&D.numSunShadows===m&&D.numDirectionalShadows===_&&D.numPointShadows===T&&D.numSpotShadows===A&&D.numSpotMaps===M&&D.numLightProbes===N||(i.sun.length=u,i.directional.length=d,i.spot.length=g,i.rectArea.length=f,i.point.length=v,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=p,i.sunShadowCascade.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,D.sunLength=u,D.directionalLength=d,D.pointLength=v,D.spotLength=g,D.rectAreaLength=f,D.hemiLength=x,D.numSunShadows=m,D.numDirectionalShadows=_,D.numPointShadows=T,D.numSpotShadows=A,D.numSpotMaps=M,D.numLightProbes=N,i.version=pv++)},setupView:function(o,l){let c=0,h=0,u=0,m=0,p=0,d=0,v=l.matrixWorldInverse;for(let g=0,f=o.length;g<f;g++){let x=o[g];if(x.isSunLight){let _=i.sun[c];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(v),c++}else if(x.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),h++}else if(x.isSpotLight){let _=i.spot[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),m++}else if(x.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),a.identity(),s.copy(x.matrixWorld),s.premultiply(v),a.extractRotation(s),_.halfWidth.set(.5*x.width,0,0),_.halfHeight.set(0,.5*x.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(v),u++}else if(x.isHemisphereLight){let _=i.hemi[d];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(v),d++}}},state:i}}function Qu(n){let e=new fv(n),t=[],i=[],r=[],s={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,i.length=0,r.length=0},state:s,setupLights:function(){e.setup(t),r.sort((a,o)=>a.priority-o.priority||a.id-o.id)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){a.isLightProbeGrid?r.push(a):t.push(a)},pushShadow:function(a){i.push(a)}}}function gv(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),s;return r===void 0?(s=new Qu(n),e.set(t,[s])):i>=r.length?(s=new Qu(n),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}function Sv(n,e,t){let i=new $i,r=new ne,s=new ne,a=new nt,o=new Ta,l=new Aa,c={},h=t.maxTextureSize,u={[cr]:Dt,[Dt]:cr,[_i]:_i},m=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:vv,fragmentShader:yv}),p=m.clone();p.defines.HORIZONTAL_PASS=1;let d=new ot;d.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(d,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ss;let f=this.type;function x(M,P){let N=e.update(v);m.defines.VSM_SAMPLES!==M.blurSamples&&(m.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Jt(r.x,r.y,{format:Mn,type:Si}):M.mapPass.width===M.map.width&&M.mapPass.height===M.map.height||M.mapPass.setSize(M.map.width,M.map.height),m.uniforms.shadow_pass.value=M.map.depthTexture,m.uniforms.resolution.value.set(M.map.width,M.map.height),m.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,N,m,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,N,p,v,null)}function _(M,P,N,D){let I=null,q=N.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(q!==void 0)I=q;else if(I=N.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let L=I.uuid,V=P.uuid,X=c[L];X===void 0&&(X={},c[L]=X);let $=X[V];$===void 0&&($=I.clone(),X[V]=$,P.addEventListener("dispose",A)),I=$}return I.visible=P.visible,I.wireframe=P.wireframe,I.side=D===lr?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,N.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(n.properties.get(I).light=N),I}function T(M,P,N,D,I,q){if(M.visible===!1)return;if(M.layers.test(I)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&q===lr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);let V=e.update(M),X=M.material;if(Array.isArray(X)){let $=V.groups;for(let j=0,O=$.length;j<O;j++){let k=$[j],ae=X[k.materialIndex];if(ae&&ae.visible){let ye=_(M,ae,D,q);M.onBeforeShadow(n,M,P,N,V,ye,k),n.renderBufferDirect(N,null,V,ye,M,k),M.onAfterShadow(n,M,P,N,V,ye,k)}}}else if(X.visible){let $=_(M,X,D,q);M.onBeforeShadow(n,M,P,N,V,$,null),n.renderBufferDirect(N,null,V,$,M,null),M.onAfterShadow(n,M,P,N,V,$,null)}}let L=M.children;for(let V=0,X=L.length;V<X;V++)T(L[V],P,N,D,I,q)}function A(M){M.target.removeEventListener("dispose",A);for(let P in c){let N=c[P],D=M.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}this.render=function(M,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Fh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ss);let D=n.getRenderTarget(),I=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),L=n.state;L.setBlending(_n),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=f!==this.type;V&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach($=>$.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,$=M.length;X<$;X++){let j=M[X],O=j.shadow;if(O===void 0){Oe("WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let k=O.getFrameExtents();r.multiply(k),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,O.mapSize.y=s.y));let ae=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ae,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===lr){if(j.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Jt(r.x,r.y,{format:Mn,type:Si,minFilter:ri,magFilter:ri,generateMipmaps:!1}),O.map.texture.name=j.name+".shadowMap",O.map.depthTexture=new Fi(r.x,r.y,zi),O.map.depthTexture.name=j.name+".shadowMapDepth",O.map.depthTexture.format=dr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn}else j.isPointLight?(O.map=new ms(r.x),O.map.depthTexture=new Vr(r.x,on)):(O.map=new Jt(r.x,r.y),O.map.depthTexture=new Fi(r.x,r.y,on)),O.map.depthTexture.name=j.name+".shadowMap",O.map.depthTexture.format=dr,this.type===ss?(O.map.depthTexture.compareFunction=ae?$l:Ql,O.map.depthTexture.minFilter=ri,O.map.depthTexture.magFilter=ri):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget===!0||O.map.width===r.x&&O.map.height===r.y||O.map.setSize(r.x,r.y);let ye=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();j.isPointLight!==!0&&O.updateMatrices(j,N);let we=4294967294&O.camera.layers.mask?O.camera.layers:N.layers;for(let Y=0;Y<ye;Y++){let ue=O.getCamera(Y);if(j.isPointLight){let oe=O.camera,de=O.matrix,Te=j.distance||oe.far;Te!==oe.far&&(oe.far=Te,oe.updateProjectionMatrix()),ds.setFromMatrixPosition(j.matrixWorld),oe.position.copy(ds),yc.copy(oe.position),yc.add(xv[Y]),oe.up.copy(_v[Y]),oe.lookAt(yc),oe.updateMatrixWorld(),de.makeTranslation(-ds.x,-ds.y,-ds.z),$u.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),O._frustum.setFromProjectionMatrix($u,oe.coordinateSystem,oe.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(O.map),n.clear());let oe=O.getViewport(Y);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),L.viewport(a)}i=O.getFrustum(Y),T(P,N,ue,j,we,this.type)}O.isPointLightShadow!==!0&&this.type===lr&&x(O,N),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(D,I,q)}}function Mv(n,e){let t=new function(){let E=!1,K=new nt,S=null,y=new nt(0,0,0,0);return{setMask:function(R){S===R||E||(n.colorMask(R,R,R,R),S=R)},setLocked:function(R){E=R},setClear:function(R,z,B,H,Q){Q===!0&&(R*=H,z*=H,B*=H),K.set(R,z,B,H),y.equals(K)===!1&&(n.clearColor(R,z,B,H),y.copy(K))},reset:function(){E=!1,S=null,y.set(-1,0,0,0)}}},i=new function(){let E=!1,K=!1,S=null,y=null,R=null;return{setReversed:function(z){if(K!==z){let B=e.get("EXT_clip_control");z?B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT):B.clipControlEXT(B.LOWER_LEFT_EXT,B.NEGATIVE_ONE_TO_ONE_EXT),K=z;let H=R;R=null,this.setClear(H)}},getReversed:function(){return K},setTest:function(z){z?de(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(z){S===z||E||(n.depthMask(z),S=z)},setFunc:function(z){if(K&&(z=wu[z]),y!==z){switch(z){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}y=z}},setLocked:function(z){E=z},setClear:function(z){R!==z&&(R=z,K&&(z=1-z),n.clearDepth(z))},reset:function(){E=!1,S=null,y=null,R=null,K=!1}}},r=new function(){let E=!1,K=null,S=null,y=null,R=null,z=null,B=null,H=null,Q=null;return{setTest:function(C){E||(C?de(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(C){K===C||E||(n.stencilMask(C),K=C)},setFunc:function(C,Z,ce){S===C&&y===Z&&R===ce||(n.stencilFunc(C,Z,ce),S=C,y=Z,R=ce)},setOp:function(C,Z,ce){z===C&&B===Z&&H===ce||(n.stencilOp(C,Z,ce),z=C,B=Z,H=ce)},setLocked:function(C){E=C},setClear:function(C){Q!==C&&(n.clearStencil(C),Q=C)},reset:function(){E=!1,K=null,S=null,y=null,R=null,z=null,B=null,H=null,Q=null}}},s={},a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],m=null,p=!1,d=null,v=null,g=null,f=null,x=null,_=null,T=null,A=new Je(0,0,0),M=0,P=!1,N=null,D=null,I=null,q=null,L=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,$=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=$>=2);let O=null,k={},ae=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),we=new nt().fromArray(ae),Y=new nt().fromArray(ye);function ue(E,K,S,y){let R=new Uint8Array(4),z=n.createTexture();n.bindTexture(E,z),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let B=0;B<S;B++)E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,y,0,n.RGBA,n.UNSIGNED_BYTE,R):n.texImage2D(K+B,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,R);return z}let oe={};function de(E){o[E]!==!0&&(n.enable(E),o[E]=!0)}function Te(E){o[E]!==!1&&(n.disable(E),o[E]=!1)}oe[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),r.setClear(0),de(n.DEPTH_TEST),i.setFunc(za),De(!1),ee(Jo),de(n.CULL_FACE),Ie(_n);let me={[hr]:n.FUNC_ADD,[zh]:n.FUNC_SUBTRACT,[Vh]:n.FUNC_REVERSE_SUBTRACT};me[kh]=n.MIN,me[Gh]=n.MAX;let Ee={[Hh]:n.ZERO,[jh]:n.ONE,[Wh]:n.SRC_COLOR,[Xh]:n.SRC_ALPHA,[$h]:n.SRC_ALPHA_SATURATE,[Jh]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[qh]:n.ONE_MINUS_SRC_COLOR,[Kh]:n.ONE_MINUS_SRC_ALPHA,[Qh]:n.ONE_MINUS_DST_COLOR,[Zh]:n.ONE_MINUS_DST_ALPHA,[eu]:n.CONSTANT_COLOR,[tu]:n.ONE_MINUS_CONSTANT_COLOR,[iu]:n.CONSTANT_ALPHA,[nu]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(E,K,S,y,R,z,B,H,Q,C){if(E!==_n){if(p===!1&&(de(n.BLEND),p=!0),E===Bh)R=R||K,z=z||S,B=B||y,K===v&&R===x||(n.blendEquationSeparate(me[K],me[R]),v=K,x=R),S===g&&y===f&&z===_&&B===T||(n.blendFuncSeparate(Ee[S],Ee[y],Ee[z],Ee[B]),g=S,f=y,_=z,T=B),H.equals(A)!==!1&&Q===M||(n.blendColor(H.r,H.g,H.b,Q),A.copy(H),M=Q),d=E,P=!1;else if(E!==d||C!==P){if(v===hr&&x===hr||(n.blendEquation(n.FUNC_ADD),v=hr,x=hr),C)switch(E){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case os:n.blendFunc(n.ONE,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $o:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",E)}else switch(E){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qo:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",E)}g=null,f=null,_=null,T=null,A.set(0,0,0),M=0,d=E,P=C}}else p===!0&&(Te(n.BLEND),p=!1)}function De(E){N!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),N=E)}function ee(E){E!==Lh?(de(n.CULL_FACE),E!==D&&(E===Jo?n.cullFace(n.BACK):E===Oh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),D=E}function le(E,K,S){E?(de(n.POLYGON_OFFSET_FILL),q===K&&L===S||(q=K,L=S,i.getReversed()&&(K=-K,S=-S),n.polygonOffset(K,S))):Te(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:r},enable:de,disable:Te,bindFramebuffer:function(E,K){return c[E]!==K&&(n.bindFramebuffer(E,K),c[E]=K,E===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=K),E===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=K),!0)},drawBuffers:function(E,K){let S=u,y=!1;if(E){S=h.get(K),S===void 0&&(S=[],h.set(K,S));let R=E.textures;if(S.length!==R.length||S[0]!==n.COLOR_ATTACHMENT0){for(let z=0,B=R.length;z<B;z++)S[z]=n.COLOR_ATTACHMENT0+z;S.length=R.length,y=!0}}else S[0]!==n.BACK&&(S[0]=n.BACK,y=!0);y&&n.drawBuffers(S)},useProgram:function(E){return m!==E&&(n.useProgram(E),m=E,!0)},setBlending:Ie,setMaterial:function(E,K){E.side===_i?Te(n.CULL_FACE):de(n.CULL_FACE);let S=E.side===Dt;K&&(S=!S),De(S),E.blending===as&&E.transparent===!1?Ie(_n):Ie(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),i.setFunc(E.depthFunc),i.setTest(E.depthTest),i.setMask(E.depthWrite),t.setMask(E.colorWrite);let y=E.stencilWrite;r.setTest(y),y&&(r.setMask(E.stencilWriteMask),r.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),r.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),le(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:De,setCullFace:ee,setLineWidth:function(E){E!==I&&(X&&n.lineWidth(E),I=E)},setPolygonOffset:le,setScissorTest:function(E){E?de(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=n.TEXTURE0+V-1),O!==E&&(n.activeTexture(E),O=E)},bindTexture:function(E,K,S){S===void 0&&(S=O===null?n.TEXTURE0+V-1:O);let y=k[S];y===void 0&&(y={type:void 0,texture:void 0},k[S]=y),y.type===E&&y.texture===K||(O!==S&&(n.activeTexture(S),O=S),n.bindTexture(E,K||oe[E]),y.type=E,y.texture=K)},unbindTexture:function(){let E=k[O];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(E){ze("WebGLState:",E)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(E){ze("WebGLState:",E)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(E){ze("WebGLState:",E)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(E){ze("WebGLState:",E)}},pixelStorei:function(E,K){l[E]!==K&&(n.pixelStorei(E,K),l[E]=K)},getParameter:function(E){return l[E]!==void 0?l[E]:n.getParameter(E)},updateUBOMapping:function(E,K){let S=a.get(K);S===void 0&&(S=new WeakMap,a.set(K,S));let y=S.get(E);y===void 0&&(y=n.getUniformBlockIndex(K,E.name),n.uniformBlockBinding(K,y,y),S.set(E,y))},uniformBlockBinding:function(E,K,S){let y=a.get(K).get(E);s[y]!==S&&(n.bindBufferBase(n.UNIFORM_BUFFER,y,S),s[y]=S)},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(E){ze("WebGLState:",E)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(E){ze("WebGLState:",E)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(E){ze("WebGLState:",E)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(E){ze("WebGLState:",E)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(E){ze("WebGLState:",E)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(E){ze("WebGLState:",E)}},scissor:function(E){we.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),we.copy(E))},viewport:function(E){Y.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),Y.copy(E))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},l={},O=null,k={},c={},s={},h=new WeakMap,u=[],m=null,p=!1,d=null,v=null,g=null,f=null,x=null,_=null,T=null,A=new Je(0,0,0),M=0,P=!1,N=null,D=null,I=null,q=null,L=null,we.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),r.reset()}}}function bv(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u=new Set,m,p=new WeakMap,d=new Set,v=new FinalizationRegistry(S=>d.delete(S)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,y){return g?new OffscreenCanvas(S,y):qn("canvas")}function x(S,y,R){let z=1,B=K(S);if((B.width>R||B.height>R)&&(z=R/Math.max(B.width,B.height)),z<1){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor(z*B.width),Q=Math.floor(z*B.height);m===void 0&&(m=f(H,Q));let C=y?f(H,Q):m;return C.width=H,C.height=Q,C.getContext("2d").drawImage(S,0,0,H,Q),Oe("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+H+"x"+Q+")."),C}return"data"in S&&Oe("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),S}return S}function _(S){return S.generateMipmaps}function T(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,y,R,z,B,H=!1){if(S!==null){if(n[S]!==void 0)return n[S];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q;z&&(Q=e.get("EXT_texture_norm16"),Q||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=y;if(y===n.RED&&(R===n.FLOAT&&(C=n.R32F),R===n.HALF_FLOAT&&(C=n.R16F),R===n.UNSIGNED_BYTE&&(C=n.R8),R===n.UNSIGNED_SHORT&&Q&&(C=Q.R16_EXT),R===n.SHORT&&Q&&(C=Q.R16_SNORM_EXT)),y===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.R8UI),R===n.UNSIGNED_SHORT&&(C=n.R16UI),R===n.UNSIGNED_INT&&(C=n.R32UI),R===n.BYTE&&(C=n.R8I),R===n.SHORT&&(C=n.R16I),R===n.INT&&(C=n.R32I)),y===n.RG&&(R===n.FLOAT&&(C=n.RG32F),R===n.HALF_FLOAT&&(C=n.RG16F),R===n.UNSIGNED_BYTE&&(C=n.RG8),R===n.UNSIGNED_SHORT&&Q&&(C=Q.RG16_EXT),R===n.SHORT&&Q&&(C=Q.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RG8UI),R===n.UNSIGNED_SHORT&&(C=n.RG16UI),R===n.UNSIGNED_INT&&(C=n.RG32UI),R===n.BYTE&&(C=n.RG8I),R===n.SHORT&&(C=n.RG16I),R===n.INT&&(C=n.RG32I)),y===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGB8UI),R===n.UNSIGNED_SHORT&&(C=n.RGB16UI),R===n.UNSIGNED_INT&&(C=n.RGB32UI),R===n.BYTE&&(C=n.RGB8I),R===n.SHORT&&(C=n.RGB16I),R===n.INT&&(C=n.RGB32I)),y===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(C=n.RGBA16UI),R===n.UNSIGNED_INT&&(C=n.RGBA32UI),R===n.BYTE&&(C=n.RGBA8I),R===n.SHORT&&(C=n.RGBA16I),R===n.INT&&(C=n.RGBA32I)),y===n.RGB&&(R===n.UNSIGNED_SHORT&&Q&&(C=Q.RGB16_EXT),R===n.SHORT&&Q&&(C=Q.RGB16_SNORM_EXT),R===n.UNSIGNED_INT_5_9_9_9_REV&&(C=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(C=n.R11F_G11F_B10F)),y===n.RGBA){let Z=H?Jl:tt.getTransfer(B);R===n.FLOAT&&(C=n.RGBA32F),R===n.HALF_FLOAT&&(C=n.RGBA16F),R===n.UNSIGNED_BYTE&&(C=Z===lt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT&&Q&&(C=Q.RGBA16_EXT),R===n.SHORT&&Q&&(C=Q.RGBA16_SNORM_EXT),R===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)}return C!==n.R16F&&C!==n.R32F&&C!==n.RG16F&&C!==n.RG32F&&C!==n.RGBA16F&&C!==n.RGBA32F||e.get("EXT_color_buffer_float"),C}function P(S,y){let R;return S?y===null||y===on||y===Sn?R=n.DEPTH24_STENCIL8:y===zi?R=n.DEPTH32F_STENCIL8:y===hs&&(R=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===on||y===Sn?R=n.DEPTH_COMPONENT24:y===zi?R=n.DEPTH_COMPONENT32F:y===hs&&(R=n.DEPTH_COMPONENT16),R}function N(S,y){return _(S)===!0||S.isFramebufferTexture&&S.minFilter!==sn&&S.minFilter!==ri?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function D(S){let y=new WeakRef(S);i.get(S).__ref=y,d.add(y),v.register(S,y,y)}function I(S){let y=i.get(S).__ref;y!==void 0&&(d.delete(y),v.unregister(y))}function q(S){V(S.target)}function L(S){X(S.target)}function V(S){S.removeEventListener("dispose",q),I(S),(function(y){let R=i.get(y);if(R.__webglInit===void 0)return;let z=y.source,B=p.get(z);if(B){let H=B[R.__cacheKey];H.usedTimes--,H.usedTimes===0&&$(y),Object.keys(B).length===0&&p.delete(z)}i.remove(y)})(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function X(S){S.removeEventListener("dispose",L),I(S),(function(y){let R=i.get(y);R.__depthDisposeCallback&&R.__depthDisposeCallback();let z=y.depthTexture;if(z&&z.renderTarget===y&&V(z),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(R.__webglFramebuffer[H]))for(let Q=0;Q<R.__webglFramebuffer[H].length;Q++)n.deleteFramebuffer(R.__webglFramebuffer[H][Q]);else n.deleteFramebuffer(R.__webglFramebuffer[H]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[H])}else{if(Array.isArray(R.__webglFramebuffer))for(let H=0;H<R.__webglFramebuffer.length;H++)n.deleteFramebuffer(R.__webglFramebuffer[H]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let H=0;H<R.__webglColorRenderbuffer.length;H++)R.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[H]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let B=y.textures;for(let H=0,Q=B.length;H<Q;H++){let C=i.get(B[H]);C.__webglTexture&&(n.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(B[H])}i.remove(y)})(S)}function $(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let R=S.source;delete p.get(R)[y.__cacheKey],a.memory.textures--}let j=0;function O(S,y){let R=i.get(S);if(S.isVideoTexture&&(function(z){let B=a.render.frame;h.get(z)!==B&&(h.set(z,B),z.update())})(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&R.__version!==S.version){let z=S.image;if(z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void de(R,S,y);Oe("WebGLRenderer: Texture marked for update but image is incomplete")}}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+y)}function k(S,y){let R=i.get(S);S.version>0&&R.__version!==S.version?(function(z,B,H){if(B.image.length!==6)return;let Q=ue(z,B),C=B.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+H);let Z=i.get(C);if(C.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);let ce=tt.getPrimaries(tt.workingColorSpace),pe=B.colorSpace===bn?null:tt.getPrimaries(B.colorSpace),te=B.colorSpace===bn||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,B.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,B.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Be=B.isCompressedTexture||B.image[0].isCompressedTexture,xe=B.image[0]&&B.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)Se[se]=Be||xe?xe?B.image[se].image:B.image[se]:x(B.image[se],!0,r.maxCubemapSize),Se[se]=E(B,Se[se]);let rt=Se[0],Ze=s.convert(B.format,B.colorSpace),ve=s.convert(B.type),Ce=M(B.internalFormat,Ze,ve,B.normalized,B.colorSpace),We=B.isVideoTexture!==!0,ut=Z.__version===void 0||Q===!0,ie=C.dataReady,re,he=N(B,rt);if(Y(n.TEXTURE_CUBE_MAP,B),B.isDepthTexture){if(Ce=P(B.format===ln,B.type),ut)if(We)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ce,rt.width,rt.height);else for(let se=0;se<6;se++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ce,rt.width,rt.height,0,Ze,ve,null)}else if(Be){We&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ce,rt.width,rt.height);for(let se=0;se<6;se++){re=Se[se].mipmaps;for(let Me=0;Me<re.length;Me++){let Re=re[Me];B.format!==Vi?Ze!==null?We?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Re.width,Re.height,Ze,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Ce,Re.width,Re.height,0,Re.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,Re.width,Re.height,Ze,ve,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Ce,Re.width,Re.height,0,Ze,ve,Re.data)}}}else{if(re=B.mipmaps,We&&ut){re.length>0&&he++;let se=K(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ce,se.width,se.height)}for(let se=0;se<6;se++)if(xe){We?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ze,ve,Se[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ce,Se[se].width,Se[se].height,0,Ze,ve,Se[se].data);for(let Me=0;Me<re.length;Me++){let Re=re[Me].image[se].image;We?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Re.width,Re.height,Ze,ve,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Ce,Re.width,Re.height,0,Ze,ve,Re.data)}}else{We?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ze,ve,Se[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ce,Ze,ve,Se[se]);for(let Me=0;Me<re.length;Me++){let Re=re[Me];We?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,Ze,ve,Re.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Ce,Ze,ve,Re.image[se])}}}_(B)&&B.mipmapsAutoUpdate===!0&&T(n.TEXTURE_CUBE_MAP),Z.__version=C.version,B.onUpdate&&B.onUpdate(B)}z.__version=B.version})(R,S,y):t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+y)}let ae={[ou]:n.REPEAT,[Ga]:n.CLAMP_TO_EDGE,[lu]:n.MIRRORED_REPEAT},ye={[sn]:n.NEAREST,[cu]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[an]:n.LINEAR_MIPMAP_LINEAR},we={[yu]:n.NEVER,[ec]:n.ALWAYS,[xu]:n.LESS,[Ql]:n.LEQUAL,[_u]:n.EQUAL,[$l]:n.GEQUAL,[Su]:n.GREATER,[Mu]:n.NOTEQUAL};function Y(S,y){if(y.type!==zi||e.has("OES_texture_float_linear")!==!1||y.magFilter!==ri&&y.magFilter!==Ha&&y.magFilter!==cs&&y.magFilter!==an&&y.minFilter!==ri&&y.minFilter!==Ha&&y.minFilter!==cs&&y.minFilter!==an||Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ae[y.wrapT]),S!==n.TEXTURE_3D&&S!==n.TEXTURE_2D_ARRAY||n.texParameteri(S,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ye[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==cs&&y.minFilter!==an||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ue(S,y){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",q),D(y));let z=y.source,B=p.get(z);B===void 0&&(B={},p.set(z,B));let H=(function(Q){let C=[];return C.push(Q.wrapS),C.push(Q.wrapT),C.push(Q.wrapR||0),C.push(Q.magFilter),C.push(Q.minFilter),C.push(Q.anisotropy),C.push(Q.internalFormat),C.push(Q.format),C.push(Q.type),C.push(Q.generateMipmaps),C.push(Q.mipmapsAutoUpdate),C.push(Q.premultiplyAlpha),C.push(Q.flipY),C.push(Q.unpackAlignment),C.push(Q.colorSpace),C.join()})(y);if(H!==S.__cacheKey){B[H]===void 0&&(B[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),B[H].usedTimes++;let Q=B[S.__cacheKey];Q!==void 0&&(B[S.__cacheKey].usedTimes--,Q.usedTimes===0&&$(y)),S.__cacheKey=H,S.__webglTexture=B[H].texture}return R}function oe(S,y,R){return Math.floor(Math.floor(S/R)/y)}function de(S,y,R){let z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=n.TEXTURE_3D);let B=ue(S,y),H=y.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+R);let Q=i.get(H);if(H.version!==Q.__version||B===!0){if(t.activeTexture(n.TEXTURE0+R),!(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)){let ve=tt.getPrimaries(tt.workingColorSpace),Ce=y.colorSpace===bn?null:tt.getPrimaries(y.colorSpace),We=y.colorSpace===bn||ve===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let C=x(y.image,!1,r.maxTextureSize);C=E(y,C);let Z=s.convert(y.format,y.colorSpace),ce=s.convert(y.type),pe,te=M(y.internalFormat,Z,ce,y.normalized,y.colorSpace,y.isVideoTexture);Y(z,y);let Be=y.mipmaps,xe=y.isVideoTexture!==!0,Se=Q.__version===void 0||B===!0,rt=H.dataReady,Ze=N(y,C);if(y.isDepthTexture)te=P(y.format===ln,y.type),Se&&(xe?t.texStorage2D(n.TEXTURE_2D,1,te,C.width,C.height):t.texImage2D(n.TEXTURE_2D,0,te,C.width,C.height,0,Z,ce,null));else if(y.isDataTexture)if(Be.length>0){xe&&Se&&t.texStorage2D(n.TEXTURE_2D,Ze,te,Be[0].width,Be[0].height);for(let ve=0,Ce=Be.length;ve<Ce;ve++)pe=Be[ve],xe?rt&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,pe.width,pe.height,Z,ce,pe.data):t.texImage2D(n.TEXTURE_2D,ve,te,pe.width,pe.height,0,Z,ce,pe.data);y.generateMipmaps=!1}else xe?(Se&&t.texStorage2D(n.TEXTURE_2D,Ze,te,C.width,C.height),rt&&(function(ve,Ce,We,ut){let ie=ve.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce.width,Ce.height,We,ut,Ce.data);else{ie.sort((Re,He)=>Re.start-He.start);let re=0;for(let Re=1;Re<ie.length;Re++){let He=ie[re],Le=ie[Re],Ne=He.start+He.count,Qe=oe(Le.start,Ce.width,4),Xe=oe(He.start,Ce.width,4);Le.start<=Ne+1&&Qe===Xe&&oe(Le.start+Le.count-1,Ce.width,4)===Qe?He.count=Math.max(He.count,Le.start+Le.count-He.start):(++re,ie[re]=Le)}ie.length=re+1;let he=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,Ce.width);for(let Re=0,He=ie.length;Re<He;Re++){let Le=ie[Re],Ne=Math.floor(Le.start/4),Qe=Math.ceil(Le.count/4),Xe=Ne%Ce.width,U=Math.floor(Ne/Ce.width),Ht=Qe;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Xe,U,Ht,1,We,ut,Ce.data)}ve.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}})(y,C,Z,ce)):t.texImage2D(n.TEXTURE_2D,0,te,C.width,C.height,0,Z,ce,C.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){xe&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,te,Be[0].width,Be[0].height,C.depth);for(let ve=0,Ce=Be.length;ve<Ce;ve++)if(pe=Be[ve],y.format!==Vi)if(Z!==null)if(xe){if(rt)if(y.layerUpdates.size>0){let We=hc(pe.width,pe.height,y.format,y.type);for(let ut of y.layerUpdates){let ie=pe.data.subarray(ut*We/pe.data.BYTES_PER_ELEMENT,(ut+1)*We/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,ut,pe.width,pe.height,1,Z,ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,C.depth,Z,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,te,pe.width,pe.height,C.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?rt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,C.depth,Z,ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,te,pe.width,pe.height,C.depth,0,Z,ce,pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{xe&&Se&&t.texStorage2D(n.TEXTURE_2D,Ze,te,Be[0].width,Be[0].height);for(let ve=0,Ce=Be.length;ve<Ce;ve++)pe=Be[ve],y.format!==Vi?Z!==null?xe?rt&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,pe.width,pe.height,Z,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,te,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?rt&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,pe.width,pe.height,Z,ce,pe.data):t.texImage2D(n.TEXTURE_2D,ve,te,pe.width,pe.height,0,Z,ce,pe.data)}else if(y.isDataArrayTexture)if(xe){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,te,C.width,C.height,C.depth),rt)if(y.layerUpdates.size>0){let ve=hc(C.width,C.height,y.format,y.type);for(let Ce of y.layerUpdates){let We=C.data.subarray(Ce*ve/C.data.BYTES_PER_ELEMENT,(Ce+1)*ve/C.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,C.width,C.height,1,Z,ce,We)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,Z,ce,C.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,C.width,C.height,C.depth,0,Z,ce,C.data);else if(y.isData3DTexture)xe?(Se&&t.texStorage3D(n.TEXTURE_3D,Ze,te,C.width,C.height,C.depth),rt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,Z,ce,C.data)):t.texImage3D(n.TEXTURE_3D,0,te,C.width,C.height,C.depth,0,Z,ce,C.data);else if(y.isFramebufferTexture){if(Se)if(xe)t.texStorage2D(n.TEXTURE_2D,Ze,te,C.width,C.height);else{let ve=C.width,Ce=C.height;for(let We=0;We<Ze;We++)t.texImage2D(n.TEXTURE_2D,We,te,ve,Ce,0,Z,ce,null),ve>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),C.parentNode!==ve)return ve.appendChild(C),u.add(y),ve.onpaint=Ce=>{let We=Ce.changedElements;for(let ut of u)We.includes(ut.image)&&(ut.needsUpdate=!0)},void ve.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,C);else{let We=n.RGBA,ut=n.RGBA,ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ut,ie,C)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(xe&&Se){let ve=K(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ze,te,ve.width,ve.height)}for(let ve=0,Ce=Be.length;ve<Ce;ve++)pe=Be[ve],xe?rt&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Z,ce,pe):t.texImage2D(n.TEXTURE_2D,ve,te,Z,ce,pe);y.generateMipmaps=!1}else if(xe){if(Se){let ve=K(C);t.texStorage2D(n.TEXTURE_2D,Ze,te,ve.width,ve.height)}rt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,ce,C)}else t.texImage2D(n.TEXTURE_2D,0,te,Z,ce,C);_(y)&&y.mipmapsAutoUpdate===!0&&T(z),Q.__version=H.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Te(S,y,R,z,B,H){let Q=s.convert(R.format,R.colorSpace),C=s.convert(R.type),Z=M(R.internalFormat,Q,C,R.normalized,R.colorSpace),ce=i.get(y),pe=i.get(R);if(pe.__renderTarget=y,!ce.__hasExternalTextures){let te=Math.max(1,y.width>>H),Be=Math.max(1,y.height>>H);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,H,Z,te,Be,y.depth,0,Q,C,null):t.texImage2D(B,H,Z,te,Be,0,Q,C,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),le(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,B,pe.__webglTexture,0,ee(y)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,B,pe.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(S,y,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let z=y.depthTexture,B=z&&z.isDepthTexture?z.type:null,H=P(y.stencilBuffer,B),Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee(y),H,y.width,y.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee(y),H,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,H,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,S)}else{let z=y.textures;for(let B=0;B<z.length;B++){let H=z[B],Q=s.convert(H.format,H.colorSpace),C=s.convert(H.type),Z=M(H.internalFormat,Q,C,H.normalized,H.colorSpace);le(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee(y),Z,y.width,y.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee(y),Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(S,y,R){let z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!y.depthTexture||!y.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=i.get(y.depthTexture);B.__renderTarget=y;let H=z?y.depthTexture.image[0]:y.depthTexture.image;B.__webglTexture&&H.width===y.width&&H.height===y.height||(H.width=y.width,H.height=y.height,y.depthTexture.needsUpdate=!0),z?k(y.depthTexture,0):O(y.depthTexture,0);let Q=B.__webglTexture,C=ee(y),Z=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+R:n.TEXTURE_2D,ce=y.depthTexture.format===ln?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===dr)le(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,Q,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,Q,0);else{if(y.depthTexture.format!==ln)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");le(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,Q,0,C):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,Q,0)}}function Ie(S){let y=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let z=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){let B=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",B)};z.addEventListener("dispose",B),y.__depthDisposeCallback=B}y.__boundDepthTexture=z}if(S.depthTexture&&!y.__autoAllocateDepthBuffer)if(R)for(let z=0;z<6;z++)Ee(y.__webglFramebuffer[z],S,z);else S.texture.mipmaps.length>0?Ee(y.__webglFramebuffer[0],S,0):Ee(y.__webglFramebuffer,S,0);else if(R){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=n.createRenderbuffer(),me(y.__webglDepthbuffer[z],S,!1);else{let B=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,H)}}else if(S.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),me(y.__webglDepthbuffer,S,!1);else{let z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}let De=[];function ee(S){return Math.min(r.maxSamples,S.samples)}function le(S){let y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function E(S,y){let R=S.colorSpace,z=S.format,B=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==Za&&R!==bn&&(tt.getTransfer(R)===lt?z===Vi&&B===fi||Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",R)),y}function K(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=function(){let S=j;return S>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),j+=1,S},this.resetTextureUnits=function(){j=0},this.getTextureUnits=function(){return j},this.setTextureUnits=function(S){j=S},this.setTexture2D=O,this.setTexture2DArray=function(S,y){let R=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version?de(R,S,y):(S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+y))},this.setTexture3D=function(S,y){let R=i.get(S);S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version?de(R,S,y):t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+y)},this.setTextureCube=k,this.rebindTextures=function(S,y,R){let z=i.get(S);y!==void 0&&Te(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ie(S)},this.setupRenderTarget=function(S){let y=S.texture,R=i.get(S),z=i.get(y);S.addEventListener("dispose",L),D(S);let B=S.textures,H=S.isWebGLCubeRenderTarget===!0,Q=B.length>1;if(Q||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=y.version,a.memory.textures++),H){R.__webglFramebuffer=[];for(let C=0;C<6;C++)if(y.mipmaps.length>0){R.__webglFramebuffer[C]=[];for(let Z=0;Z<y.mipmaps.length;Z++)R.__webglFramebuffer[C][Z]=n.createFramebuffer()}else R.__webglFramebuffer[C]=n.createFramebuffer()}else{if(y.mipmaps.length>0){R.__webglFramebuffer=[];for(let C=0;C<y.mipmaps.length;C++)R.__webglFramebuffer[C]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(Q)for(let C=0,Z=B.length;C<Z;C++){let ce=i.get(B[C]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&le(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let C=0;C<B.length;C++){let Z=B[C];R.__webglColorRenderbuffer[C]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[C]);let ce=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),te=M(Z.internalFormat,ce,pe,Z.normalized,Z.colorSpace,S.isXRRenderTarget===!0),Be=ee(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,te,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,R.__webglColorRenderbuffer[C])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),me(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Y(n.TEXTURE_CUBE_MAP,y);for(let C=0;C<6;C++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Te(R.__webglFramebuffer[C][Z],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z);else Te(R.__webglFramebuffer[C],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);_(y)?T(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(Q){for(let C=0,Z=B.length;C<Z;C++){let ce=B[C],pe=i.get(ce),te=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(te=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,pe.__webglTexture),Y(te,ce),Te(R.__webglFramebuffer,S,ce,n.COLOR_ATTACHMENT0+C,te,0),_(ce)&&T(te)}t.unbindTexture()}else{let C=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(C=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(C,z.__webglTexture),Y(C,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)Te(R.__webglFramebuffer[Z],S,y,n.COLOR_ATTACHMENT0,C,Z);else Te(R.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,C,0);_(y)?T(C):y.mipmaps.length>0&&n.texParameteri(C,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}S.depthBuffer&&Ie(S)},this.updateRenderTargetMipmap=function(S){let y=S.textures;for(let R=0,z=y.length;R<z;R++){let B=y[R];if(_(B)&&B.mipmapsAutoUpdate===!0){let H=A(S),Q=i.get(B).__webglTexture;t.bindTexture(H,Q),T(H),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(S){if(S.samples>0){if(le(S)===!1){let y=S.textures,R=S.width,z=S.height,B=n.COLOR_BUFFER_BIT,H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=i.get(S),C=y.length>1;if(C)for(let Z=0;Z<y.length;Z++)t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Z=0;Z<y.length;Z++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),C){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Z]);let ce=i.get(y[Z]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,B,n.NEAREST),l===!0&&(De.length=0,De.push(n.COLOR_ATTACHMENT0+Z),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&De.push(H),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),C)for(let Z=0;Z<y.length;Z++){t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Z]);let ce=i.get(y[Z]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}},this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=le,this.dispose=function(){for(let S of d){let y=S.deref();y!==void 0&&(y.isRenderTarget===!0?X(y):V(y))}d.clear(),u.clear()}}function Tv(n,e){return{convert:function(t,i=bn){let r,s=tt.getTransfer(i);if(t===fi)return n.UNSIGNED_BYTE;if(t===fl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(t===du)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===pu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===hu)return n.BYTE;if(t===uu)return n.SHORT;if(t===hs)return n.UNSIGNED_SHORT;if(t===ml)return n.INT;if(t===on)return n.UNSIGNED_INT;if(t===zi)return n.FLOAT;if(t===Si)return n.HALF_FLOAT;if(t===mu)return n.ALPHA;if(t===fu)return n.RGB;if(t===Vi)return n.RGBA;if(t===dr)return n.DEPTH_COMPONENT;if(t===ln)return n.DEPTH_STENCIL;if(t===gu)return n.RED;if(t===vl)return n.RED_INTEGER;if(t===Mn)return n.RG;if(t===yl)return n.RG_INTEGER;if(t===xl)return n.RGBA_INTEGER;if(t===ja||t===Wa||t===qa||t===Xa)if(s===lt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===_l||t===Sl||t===Ml||t===bl){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Tl||t===Al||t===wl||t===El||t===Rl||t===Ka||t===Pl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Tl||t===Al)return s===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===wl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===El)return r.COMPRESSED_R11_EAC;if(t===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(t===Ka)return r.COMPRESSED_RG11_EAC;if(t===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Cl||t===Il||t===Ul||t===Nl||t===Dl||t===Ll||t===Ol||t===Fl||t===Bl||t===zl||t===Vl||t===kl||t===Gl||t===Hl){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Cl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Il)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ul)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Nl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Dl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Ll)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ol)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Fl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Bl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===zl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Vl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===kl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Gl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Hl)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===jl||t===Wl||t===ql){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===jl)return s===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Xl||t===Kl||t===Ya||t===Yl){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Sn?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}function Rv(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Dt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Dt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,r.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(ld),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,lc(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?i(r,s):s.isMeshLambertMaterial?(i(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(i(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(i(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(i(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.diffuseRoughness>0&&(c.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(c.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,c.diffuseRoughnessMapTransform))),h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.retroreflectivity>0&&(c.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,c.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,m){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*m,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Pv(n,e,t,i){let r={},s={};function a(u,m,p,d){if((function(v,g,f,x){let _=v.value,T=g+"_"+f;if(Array.isArray(_)){x[T]===void 0&&(x[T]=[]);let A=x[T],M=!1;for(let P=0;P<_.length;P++)l(_[P],A,P)===!0&&(M=!0);return M}return l(_,x,T)})(u,m,p,d)===!0){let v=u.__offset,g=u.value;if(Array.isArray(g)){let f=0;for(let x=0;x<g.length;x++){let _=g[x],T=c(_,!0);o(_,u.__data,f),f+=T.storage/Float32Array.BYTES_PER_ELEMENT}}else o(g,u.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,u.__data)}}function o(u,m,p){typeof u=="number"||typeof u=="boolean"?m[p]=u:u.isMatrix3?(m[p]=u.elements[0],m[p+1]=u.elements[1],m[p+2]=u.elements[2],m[p+3]=0,m[p+4]=u.elements[3],m[p+5]=u.elements[4],m[p+6]=u.elements[5],m[p+7]=0,m[p+8]=u.elements[6],m[p+9]=u.elements[7],m[p+10]=u.elements[8],m[p+11]=0):ArrayBuffer.isView(u)?m.set(u.subarray(0,m.length-p),p):u.toArray(m,p)}function l(u,m,p){if(m[p]===void 0)return typeof u=="number"||typeof u=="boolean"?m[p]=u:ArrayBuffer.isView(u)?m[p]=u.slice():m[p]=u.clone(),!0;{let d=m[p];if(typeof u=="number"||typeof u=="boolean"){if(d!==u)return m[p]=u,!0}else{if(ArrayBuffer.isView(u))return!0;if(d.equals(u)===!1)return d.copy(u),!0}}return!1}function c(u,m){let p={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(p.boundary=4,p.storage=4):u.isVector2?(p.boundary=8,p.storage=8):u.isVector3||u.isColor?(p.boundary=16,p.storage=12):u.isVector4?(p.boundary=16,p.storage=16):u.isMatrix3?(p.boundary=16,p.storage=48):u.isMatrix4?(p.boundary=16,p.storage=64):u.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(p.boundary=16,p.storage=u.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",u),m===!0&&(p.boundary=16,p.storage=16*Math.ceil(p.storage/16)),p}function h(u){let m=u.target;m.removeEventListener("dispose",h),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}return{bind:function(u,m){let p=m.program;i.uniformBlockBinding(u,p,r[u.id])},update:function(u,m){let p=r[u.id];p===void 0&&((function(g){let f=g.uniforms,x=0,_=16;for(let A=0,M=f.length;A<M;A++){let P=Array.isArray(f[A])?f[A]:[f[A]];for(let N=0,D=P.length;N<D;N++){let I=P[N],q=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(f[A])||Array.isArray(I.value),V=x;for(let $=0,j=q.length;$<j;$++){let O=c(q[$],L),k=x%_,ae=k%O.boundary,ye=k+ae;x+=ae,ye!==0&&_-ye<O.storage&&(x+=_-ye),$===0&&(V=x),x+=O.storage}let X=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new X((x-V)/Float32Array.BYTES_PER_ELEMENT),I.__offset=V}}let T=x%_;T>0&&(x+=_-T),g.__size=x,g.__cache={}})(u),p=(function(g){let f=n.createBuffer(),x=g.__size,_=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,f),n.bufferData(n.UNIFORM_BUFFER,x,_),n.bindBuffer(n.UNIFORM_BUFFER,null),f})(u),r[u.id]=p,u.addEventListener("dispose",h));let d=m.program;i.updateUBOMapping(u,d);let v=e.render.frame;s[u.id]!==v&&((function(g){let f=r[g.id],x=g.uniforms,_=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,f);for(let T=0,A=x.length;T<A;T++){let M=x[T];if(Array.isArray(M))for(let P=0,N=M.length;P<N;P++)a(M[P],T,P,_);else a(M,T,0,_)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);r={},s={}}}}function Iv(){return Mi===null&&(Mi=new Qs(Cv,16,16,Mn,Si),Mi.name="DFG_LUT",Mi.minFilter=ri,Mi.magFilter=ri,Mi.wrapS=Ga,Mi.wrapT=Ga,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Jp,Qp,$p,em,tm,im,nm,rm,sm,am,om,lm,cm,hm,um,dm,pm,mm,fm,gm,vm,ym,xm,_m,Sm,Mm,bm,Tm,Am,wm,Em,Rm,Pm,Cm,Im,Um,Nm,Dm,Lm,Om,Fm,Bm,zm,Vm,km,Gm,Hm,jm,Wm,qm,Xm,Km,Ym,Zm,Jm,Qm,$m,ef,tf,nf,rf,sf,af,of,lf,cf,hf,uf,df,pf,mf,ff,gf,vf,yf,xf,_f,Sf,Mf,bf,Tf,Af,wf,Ef,Rf,Pf,Cf,If,Uf,Nf,Df,Lf,Of,Ff,Bf,zf,Vf,kf,Gf,Hf,jf,Wf,qf,Xf,Kf,Yf,Zf,Jf,Qf,$f,eg,tg,ig,ng,rg,sg,ag,og,lg,cg,hg,ug,dg,pg,mg,fg,gg,vg,yg,xg,_g,Sg,Mg,bg,Tg,Ag,wg,Eg,Rg,Pg,Cg,Ye,fe,Vt,Qa,Ig,td,ms,Fg,Bg,eo,Yg,id,nd,rd,sd,ad,od,Fu,Bu,zu,Vu,ku,xc,_c,Sc,vc,pr,B0,ju,G0,$a,K0,Z0,Q0,ev,iv,sv,bc,Tc,pv,vv,yv,xv,_v,$u,ds,yc,Av,wv,Ac,wc,Ev,ld,Cv,Mi,to,fr=Mr(()=>{gc();gc();Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Km=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Jp,alphahash_pars_fragment:Qp,alphamap_fragment:$p,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:im,aomap_fragment:nm,aomap_pars_fragment:rm,batching_pars_vertex:sm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:fm,color_fragment:gm,color_pars_fragment:vm,color_pars_vertex:ym,color_vertex:xm,common:_m,defaultnormal_vertex:Sm,displacementmap_pars_vertex:Mm,displacementmap_vertex:bm,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:wm,colorspace_pars_fragment:Em,envmap_fragment:Rm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Cm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Gm,envmap_vertex:Um,fog_vertex:Nm,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Vm,lights_pars_begin:km,lights_toon_fragment:Hm,lights_toon_pars_fragment:jm,lights_phong_fragment:Wm,lights_phong_pars_fragment:qm,lights_physical_fragment:Xm,lights_physical_pars_fragment:Km,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:Qm,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:ff,normal_fragment_maps:gf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:xf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Tf,opaque_fragment:Af,packing:wf,premultiplied_alpha_fragment:Ef,project_vertex:Rf,dithering_fragment:Pf,dithering_pars_fragment:Cf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Df,shadowmap_vertex:Lf,shadowmask_pars_fragment:Of,skinbase_vertex:Ff,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:Vf,specularmap_fragment:kf,specularmap_pars_fragment:Gf,tonemapping_fragment:Hf,tonemapping_pars_fragment:jf,transmission_fragment:Wf,transmission_pars_fragment:qf,uv_pars_fragment:Xf,uv_pars_vertex:Kf,uv_vertex:Yf,worldpos_vertex:Zf,background_vert:Jf,background_frag:Qf,backgroundCube_vert:$f,backgroundCube_frag:eg,cube_vert:tg,cube_frag:ig,depth_vert:ng,depth_frag:rg,distance_vert:sg,distance_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:hg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:fg,meshmatcap_frag:gg,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:Sg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Tg,points_vert:Ag,points_frag:wg,shadow_vert:Eg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Cg},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Vt={basic:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Lt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Lt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Lt([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Lt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Lt([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Lt([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Lt([fe.common,fe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Lt([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Vt.physical={uniforms:Lt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};Qa={r:0,b:0,g:0},Ig=new qe,td=new Ge;td.set(-1,0,0,0,1,0,0,0,1);ms=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yn(5,5,5),s=new kt({name:"CubemapFromEquirect",uniforms:Tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:_n});s.uniforms.tEquirect.value=t;let a=new xt(r,s),o=t.minFilter;return t.minFilter===an&&(t.minFilter=ri),new ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Fg=new w,Bg=new Je,eo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new xt(new yn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:a=256,position:o=Fg}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,m=l.autoClearColor,p=l.autoClearDepth,d=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Bg));let g=new ar(i,r,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=m,l.autoClearDepth=p,l.autoClearStencil=d,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(256,rc(e))}_fromTexture(e,t){e.mapping===ls||e.mapping===ur?this._setSize(e.image.length===0?256:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Du(e,!1,!1),i=Math.log2(e)-3;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Du(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ls||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zg(),this._integrationMaterial=Vg());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/16);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-3)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(256*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kg());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};Yg={[ol]:"LINEAR_TONE_MAPPING",[ll]:"REINHARD_TONE_MAPPING",[cl]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[dl]:"AGX_TONE_MAPPING",[pl]:"NEUTRAL_TONE_MAPPING",[ul]:"CUSTOM_TONE_MAPPING"};id=new Ut,nd=new Fi(1,1),rd=new Vr(1),sd=new Dr,ad=new Zs,od=new zr,Fu=[],Bu=[],zu=new Float32Array(16),Vu=new Float32Array(9),ku=new Float32Array(4);xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=g0(t.type)}},_c=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O0(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},vc=/(\w+)(\])?(\[|\.)?/g;pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);F0(o,e.getUniformLocation(t,o.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};B0=0;ju=new Ge;G0={[ol]:"Linear",[ll]:"Reinhard",[cl]:"Cineon",[hl]:"ACESFilmic",[dl]:"AgX",[pl]:"Neutral",[ul]:"Custom"};$a=new w;K0=/^[ \t]*#include +<([\w\d./]+)>/gm;Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Q0={[ss]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};ev={[ur]:"ENVMAP_MODE_REFRACTION"};iv={[ru]:"ENVMAP_BLENDING_MULTIPLY",[su]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};sv=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Tc(e),t.set(e,i)),i}},Tc=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};pv=0;vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xv=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],_v=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],$u=new qe,ds=new w,yc=new w;Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new kr(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kt({vertexShader:Av,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends di{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,m=null,p=null,d=null,v=typeof XRWebGLBinding<"u",g=new Ac,f={},x=t.getContextAttributes(),_=null,T=null,A=[],M=[],P=new ne,N=null,D=null,I=new Ft;I.viewport=new nt;let q=new Ft;q.viewport=new nt;let L=[I,q],V=new Fa,X=null,$=null;function j(Y){let ue=M.indexOf(Y.inputSource);if(ue===-1)return;let oe=A[ue];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||a),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<A.length;Y++){let ue=M[Y];ue!==null&&(M[Y]=null,A[Y].disconnect(ue))}X=null,$=null,g.reset();for(let Y in f)delete f[Y];if(e.setRenderTarget(_),p=null,m=null,u=null,r=null,T=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),D!==null){let Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}function k(Y){for(let ue=0;ue<Y.removed.length;ue++){let oe=Y.removed[ue],de=M.indexOf(oe);de>=0&&(M[de]=null,A[de].disconnect(oe))}for(let ue=0;ue<Y.added.length;ue++){let oe=Y.added[ue],de=M.indexOf(oe);if(de===-1){for(let me=0;me<A.length;me++){if(me>=M.length){M.push(oe),de=me;break}if(M[me]===null){M[me]=oe,de=me;break}}if(de===-1)break}let Te=A[de];Te&&Te.connect(oe)}}function ae(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=A[Y];return ue===void 0&&(ue=new Jn,A[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=A[Y];return ue===void 0&&(ue=new Jn,A[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=A[Y];return ue===void 0&&(ue=new Jn,A[Y]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,oe=null,de=null;x.depth&&(de=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?ln:dr,oe=x.stencil?Sn:on);let Te={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=this.getBinding(),m=u.createProjectionLayer(Te),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new Jt(m.textureWidth,m.textureHeight,{format:Vi,type:fi,depthTexture:new Fi(m.textureWidth,m.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Jt(p.framebufferWidth,p.framebufferHeight,{format:Vi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()},this.updateCamera=function(Y){if(r===null)return;let ue=Y.near,oe=Y.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),V.near=q.near=I.near=ue,V.far=q.far=I.far=oe,X===V.near&&$===V.far||(r.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,$=V.far),V.layers.mask=6|Y.layers.mask,I.layers.mask=-5&V.layers.mask,q.layers.mask=-3&V.layers.mask;let de=Y.parent,Te=V.cameras;ae(V,de);for(let me=0;me<Te.length;me++)ae(Te[me],de);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),(function(me,Ee,Ie){Ie===null?me.matrix.copy(Ee.matrixWorld):(me.matrix.copy(Ie.matrixWorld),me.matrix.invert(),me.matrix.multiply(Ee.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0),me.projectionMatrix.copy(Ee.projectionMatrix),me.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=2*Kn*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)})(Y,V,de)},this.getCamera=function(){return V},this.getFoveation=function(){if(m!==null||p!==null)return l},this.setFoveation=function(Y){l=Y,m!==null&&(m.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return f[Y]};let ye=null,we=new ed;we.setAnimationLoop(function(Y,ue){if(h=ue.getViewerPose(c||a),d=ue,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let de=!1;oe.length!==V.cameras.length&&(V.cameras.length=0,de=!0);for(let me=0;me<oe.length;me++){let Ee=oe[me],Ie=null;if(p!==null)Ie=p.getViewport(Ee);else{let ee=u.getViewSubImage(m,Ee);Ie=ee.viewport,me===0&&(e.setRenderTargetTextures(T,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(T))}let De=L[me];De===void 0&&(De=new Ft,De.layers.enable(me),De.viewport=new nt,L[me]=De),De.matrix.fromArray(Ee.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ee.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),me===0&&(V.matrix.copy(De.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),de===!0&&V.cameras.push(De)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let me=u.getDepthInformation(oe[0]);me&&me.isValid&&me.texture&&g.init(me,r.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let me=0;me<oe.length;me++){let Ee=oe[me].camera;if(Ee){let Ie=f[Ee];Ie||(Ie=new kr,f[Ee]=Ie);let De=u.getCameraImage(Ee);Ie.sourceTexture=De}}}}for(let oe=0;oe<A.length;oe++){let de=M[oe],Te=A[oe];de!==null&&Te!==void 0&&Te.update(de,ue,c||a)}ye&&ye(Y,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),d=null}),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}},Ev=new qe,ld=new Ge;ld.set(-1,0,0,0,1,0,0,0,1);Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;to=class{constructor(e={}){let{canvas:t=bu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:m=!1,outputBufferType:p=fi}=e,d;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let v=p,g=new Set([xl,yl,vl]),f=new Set([fi,on,hs,Sn,fl,gl]),x=new Uint32Array(4),_=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},A=null,M=null,P=[],N=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,q=!1,L=null,V=null,X=null,$=null;this._outputColorSpace=ki;let j=0,O=0,k=null,ae=-1,ye=null,we=new nt,Y=new nt,ue=null,oe=new Je(0),de=0,Te=t.width,me=t.height,Ee=1,Ie=null,De=null,ee=new nt(0,0,Te,me),le=new nt(0,0,Te,me),E=!1,K=new $i,S=new Br,y=!1,R=!1,z=new qe,B=new w,H=new nt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function Z(){return k===null?Ee:1}let ce,pe,te,Be,xe,Se,rt,Ze,ve,Ce,We,ut,ie,re,he,se,Me,Re,He,Le,Ne,Qe,Xe,U=i;function Ht(b,F){return t.getContext(b,F)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",cn,!1),t.addEventListener("webglcontextrestored",En,!1),t.addEventListener("webglcontextcreationerror",hn,!1),U===null){let F="webgl2";if(U=Ht(F,b),U===null)throw Ht(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(b){throw t.removeEventListener("webglcontextlost",cn,!1),t.removeEventListener("webglcontextrestored",En,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),ze("WebGLRenderer: "+b.message),b}function jt(){ce=new Hg(U),ce.init(),Ne=new Tv(U,ce),pe=new Lg(U,ce,e,Ne),te=new Mv(U,ce),pe.reversedDepthBuffer&&m&&te.buffers.depth.setReversed(!0),V=U.createFramebuffer(),X=U.createFramebuffer(),$=U.createFramebuffer(),Be=new qg(U),xe=new lv,Se=new bv(U,ce,te,xe,pe,Ne,Be),rt=new Gg(I),Ze=new Zp(U),Qe=new Ng(U,Ze),ve=new jg(U,Ze,Be,Qe),Ce=new Kg(U,ve,Ze,Qe,Be),Re=new Xg(U,pe,Se),he=new Og(xe),We=new ov(I,rt,ce,pe,Qe,he),ut=new Rv(I,xe),ie=new hv,re=new gv(ce),Me=new Ug(I,rt,te,Ce,d,l),se=new Sv(I,Ce,pe),Xe=new Pv(U,Be,pe,te),He=new Dg(U,ce,Be),Le=new Wg(U,ce,Be),Be.programs=We.programs,I.capabilities=pe,I.extensions=ce,I.properties=xe,I.renderLists=ie,I.shadowMap=se,I.state=te,I.info=Be}v!==fi&&(D=new Zg(v,t.width,t.height,o,r,s));let dt=new wc(I,U);function cn(b){b.preventDefault(),Nr("WebGLRenderer: Context Lost."),q=!0}function En(){Nr("WebGLRenderer: Context Restored."),q=!1;let b=Be.autoReset,F=se.enabled,G=se.autoUpdate,J=se.needsUpdate,W=se.type;jt(),Be.autoReset=b,se.enabled=F,se.autoUpdate=G,se.needsUpdate=J,se.type=W}function hn(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oc(b){let F=b.target;F.removeEventListener("dispose",Oc),(function(G){(function(J){let W=xe.get(J).programs;W!==void 0&&(W.forEach(function(ge){We.releaseProgram(ge)}),J.isShaderMaterial&&We.releaseShaderCache(J))})(G),xe.remove(G)})(F)}function Fc(b,F,G,J){L!==null&&b.isNodeMaterial&&L.setObject(J,b),y===!0&&he.setState(b,G,!1),b.transparent===!0&&b.side===_i&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,gr(b,F,J),b.side=cr,b.needsUpdate=!0,gr(b,F,J),b.side=_i):gr(b,F,J)}this.xr=dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(b){b!==void 0&&(Ee=b,this.setSize(Te,me,!1))},this.getSize=function(b){return b.set(Te,me)},this.setSize=function(b,F,G=!0){dt.isPresenting?Oe("WebGLRenderer: Can't change size while VR device is presenting."):(Te=b,me=F,t.width=Math.floor(b*Ee),t.height=Math.floor(F*Ee),G===!0&&(t.style.width=b+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,b,F))},this.getDrawingBufferSize=function(b){return b.set(Te*Ee,me*Ee).floor()},this.setDrawingBufferSize=function(b,F,G){Te=b,me=F,Ee=G,t.width=Math.floor(b*G),t.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(v!==fi){if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])}else ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(b){return b.copy(we)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,F,G,J){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,F,G,J),te.viewport(we.copy(ee).multiplyScalar(Z()).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,F,G,J){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,F,G,J),te.scissor(Y.copy(le).multiplyScalar(Z()).round())},this.getScissorTest=function(){return E},this.setScissorTest=function(b){te.setScissorTest(E=b)},this.setOpaqueSort=function(b){Ie=b},this.setTransparentSort=function(b){De=b},this.getClearColor=function(b){return b.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,G=!0){let J=0;if(b){let W=!1;if(k!==null){let ge=k.texture.format;W=g.has(ge)}if(W){let ge=k.texture.type,_e=f.has(ge),be=Me.getClearColor(),Ae=Me.getClearAlpha(),Fe=be.r,it=be.g,st=be.b;_e?(x[0]=Fe,x[1]=it,x[2]=st,x[3]=Ae,U.clearBufferuiv(U.COLOR,0,x)):(_[0]=Fe,_[1]=it,_[2]=st,_[3]=Ae,U.clearBufferiv(U.COLOR,0,_))}else J|=U.COLOR_BUFFER_BIT}F&&(J|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",cn,!1),t.removeEventListener("webglcontextrestored",En,!1),t.removeEventListener("webglcontextcreationerror",hn,!1),Me.dispose(),ie.dispose(),re.dispose(),Se.dispose(),xe.dispose(),rt.dispose(),Ce.dispose(),ve.dispose(),Qe.dispose(),Xe.dispose(),We.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Bc),dt.removeEventListener("sessionend",zc),un.stop()},this.renderBufferDirect=function(b,F,G,J,W,ge){F===null&&(F=Q);let _e=W.isMesh&&W.matrixWorld.determinantAffine()<0,be=(function(et,pt,At,Ve,je){pt.isScene!==!0&&(pt=Q),Se.resetTextureUnits();let si=pt.fog,uo=Ve.isMeshStandardMaterial||Ve.isMeshLambertMaterial||Ve.isMeshPhongMaterial?pt.environment:null,vr=k===null?I.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:tt.workingColorSpace,yr=Ve.isMeshStandardMaterial||Ve.isMeshLambertMaterial&&!Ve.envMap||Ve.isMeshPhongMaterial&&!Ve.envMap,gi=rt.get(Ve.envMap||uo,yr),Rn=Ve.vertexColors===!0&&!!At.attributes.color&&At.attributes.color.itemSize===4,wi=!!At.attributes.tangent&&(!!Ve.normalMap||Ve.anisotropy>0),po=!!At.morphAttributes.position,Pn=!!At.morphAttributes.normal,Md=!!At.morphAttributes.color,mo=ni;Ve.toneMapped&&(k!==null&&k.isXRRenderTarget!==!0||(mo=I.toneMapping));let Xc=At.morphAttributes.position||At.morphAttributes.normal||At.morphAttributes.color,bd=Xc!==void 0?Xc.length:0,Ke=xe.get(Ve),Ei=M.state.lights;if(y===!0&&(R===!0||et!==ye)){let ct=et===ye&&Ve.id===ae;he.setState(Ve,et,ct)}let ai=!1,fo=!1;Ve.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Ei.state.version||je.isBatchedMesh&&Ke.batching===!1?ai=!0:je.isBatchedMesh||Ke.batching!==!0?je.isBatchedMesh&&Ke.batchingColor===!0&&je._colorsTexture===null||je.isBatchedMesh&&Ke.batchingColor===!1&&je._colorsTexture!==null||je.isInstancedMesh&&Ke.instancing===!1?ai=!0:je.isInstancedMesh||Ke.instancing!==!0?je.isSkinnedMesh&&Ke.skinning===!1?ai=!0:je.isSkinnedMesh||Ke.skinning!==!0?je.isInstancedMesh&&Ke.instancingColor===!0&&je.instanceColor===null||je.isInstancedMesh&&Ke.instancingColor===!1&&je.instanceColor!==null||je.isInstancedMesh&&Ke.instancingMorph===!0&&je.morphTexture===null||je.isInstancedMesh&&Ke.instancingMorph===!1&&je.morphTexture!==null||Ke.envMap!==gi||Ve.fog===!0&&Ke.fog!==si?ai=!0:Ke.numClippingPlanes===void 0||Ke.numClippingPlanes===he.numPlanes&&Ke.numIntersection===he.numIntersection?Ke.vertexAlphas!==Rn||Ke.vertexTangents!==wi||Ke.morphTargets!==po||Ke.morphNormals!==Pn||Ke.morphColors!==Md||Ke.morphTargetsCount!==bd||Ke.numLightProbeGrids!==Hc(M.state.lightProbeGridArray)?ai=!0:Ke.outputColorSpace===vr&&Ke.toneMapping===mo||(fo=!0):ai=!0:ai=!0:ai=!0:ai=!0:(ai=!0,Ke.__version=Ve.version);let Hi=Ke.currentProgram;ai!==!0&&fo!==!0||(Hi=fo===!0?(function(ct,ti,oi,_r,Yc){let dn=xe.get(ct),Zc=dn.currentProgram.id+","+_r+","+Yc,Sr=dn.programVariants.get(Zc);return Sr===void 0?(Sr=gr(ct,ti,oi),dn.programVariants.set(Zc,Sr)):(dn.currentProgram=Sr,dn.uniformsList=null,dn.outputColorSpace=_r,dn.toneMapping=Yc),Sr})(Ve,pt,je,vr,mo):gr(Ve,pt,je),L&&Ve.isNodeMaterial&&L.onUpdateProgram(Ve,Hi,Ke));let Kc=!1,xr=!1,go=!1,mt=Hi.getUniforms(),$t=Ke.uniforms;if(te.useProgram(Hi.program)&&(Kc=!0,xr=!0,go=!0),Ve.id!==ae&&(ae=Ve.id,xr=!0),Kc||ye!==et){te.buffers.depth.getReversed()&&et.reversedDepth!==!0&&(et._reversedDepth=!0,et.updateProjectionMatrix()),mt.setValue(U,"projectionMatrix",et.projectionMatrix),mt.setValue(U,"viewMatrix",et.matrixWorldInverse);let ct=mt.map.cameraPosition;ct!==void 0&&ct.setValue(U,B.setFromMatrixPosition(et.matrixWorld)),pe.logarithmicDepthBuffer&&mt.setValue(U,"logDepthBufFC",2/(Math.log(et.far+1)/Math.LN2)),(Ve.isMeshPhongMaterial||Ve.isMeshToonMaterial||Ve.isMeshLambertMaterial||Ve.isMeshBasicMaterial||Ve.isMeshStandardMaterial||Ve.isShaderMaterial)&&mt.setValue(U,"isOrthographic",et.isOrthographicCamera===!0),ye!==et&&(ye=et,xr=!0,go=!0)}if(Ke.needsLights&&(Ei.state.sunShadowMap.length>0&&mt.setValue(U,"sunShadowMap",Ei.state.sunShadowMap,Se),Ei.state.directionalShadowMap.length>0&&mt.setValue(U,"directionalShadowMap",Ei.state.directionalShadowMap,Se),Ei.state.spotShadowMap.length>0&&mt.setValue(U,"spotShadowMap",Ei.state.spotShadowMap,Se),Ei.state.pointShadowMap.length>0&&mt.setValue(U,"pointShadowMap",Ei.state.pointShadowMap,Se)),je.isSkinnedMesh){mt.setOptional(U,je,"bindMatrix"),mt.setOptional(U,je,"bindMatrixInverse");let ct=je.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),mt.setValue(U,"boneTexture",ct.boneTexture,Se))}je.isBatchedMesh&&(mt.setOptional(U,je,"batchingTexture"),mt.setValue(U,"batchingTexture",je._matricesTexture,Se),mt.setOptional(U,je,"batchingIdTexture"),mt.setValue(U,"batchingIdTexture",je._indirectTexture,Se),mt.setOptional(U,je,"batchingColorTexture"),je._colorsTexture!==null&&mt.setValue(U,"batchingColorTexture",je._colorsTexture,Se));let vo=At.morphAttributes;if(vo.position===void 0&&vo.normal===void 0&&vo.color===void 0||Re.update(je,At,Hi),(xr||Ke.receiveShadow!==je.receiveShadow)&&(Ke.receiveShadow=je.receiveShadow,mt.setValue(U,"receiveShadow",je.receiveShadow)),(Ve.isMeshStandardMaterial||Ve.isMeshLambertMaterial||Ve.isMeshPhongMaterial)&&Ve.envMap===null&&pt.environment!==null&&($t.envMapIntensity.value=pt.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Iv()),xr){if(mt.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ke.needsLights&&(Wt=go,(ei=$t).ambientLightColor.needsUpdate=Wt,ei.lightProbe.needsUpdate=Wt,ei.sunLights.needsUpdate=Wt,ei.sunLightShadows.needsUpdate=Wt,ei.directionalLights.needsUpdate=Wt,ei.directionalLightShadows.needsUpdate=Wt,ei.pointLights.needsUpdate=Wt,ei.pointLightShadows.needsUpdate=Wt,ei.spotLights.needsUpdate=Wt,ei.spotLightShadows.needsUpdate=Wt,ei.rectAreaLights.needsUpdate=Wt,ei.hemisphereLights.needsUpdate=Wt),si&&Ve.fog===!0&&ut.refreshFogUniforms($t,si),ut.refreshMaterialUniforms($t,Ve,Ee,me,M.state.transmissionRenderTarget[et.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let ct=T,ti=0;for(let oi of M.state.lightProbeGridArray)oi.texture!==null&&(ct.textures[ti]=oi.texture,ct.min[ti]=oi.boundingBox.min,ct.max[ti]=oi.boundingBox.max,ct.resolution[ti]=oi.resolution,ti++);for(let oi in ct)ct[oi].length=ti;$t.probesSH.value=ct.textures,$t.probesMin.value=ct.min,$t.probesMax.value=ct.max,$t.probesResolution.value=ct.resolution}pr.upload(U,jc(Ke),$t,Se)}var ei,Wt;if(Ve.isShaderMaterial&&Ve.uniformsNeedUpdate===!0&&(pr.upload(U,jc(Ke),$t,Se),Ve.uniformsNeedUpdate=!1),Ve.isSpriteMaterial&&mt.setValue(U,"center",je.center),mt.setValue(U,"modelViewMatrix",je.modelViewMatrix),mt.setValue(U,"normalMatrix",je.normalMatrix),mt.setValue(U,"modelMatrix",je.matrixWorld),Ve.uniformsGroups!==void 0){let ct=Ve.uniformsGroups;for(let ti=0,oi=ct.length;ti<oi;ti++){let _r=ct[ti];Xe.update(_r,Hi),Xe.bind(_r,Hi)}}return Hi})(b,F,G,J,W);te.setMaterial(J,_e);let Ae=G.index,Fe=1;if(J.wireframe===!0){if(Ae=ve.getWireframeAttribute(G),Ae===void 0)return;Fe=2}let it=G.drawRange,st=G.attributes.position,Pe=it.start*Fe,$e=(it.start+it.count)*Fe;ge!==null&&(Pe=Math.max(Pe,ge.start*Fe),$e=Math.min($e,(ge.start+ge.count)*Fe)),Ae!==null?(Pe=Math.max(Pe,0),$e=Math.min($e,Ae.count)):st!=null&&(Pe=Math.max(Pe,0),$e=Math.min($e,st.count));let bt=$e-Pe;if(bt<0||bt===1/0)return;let ft;Qe.setup(W,J,be,G,Ae);let gt=He;if(Ae!==null&&(ft=Ze.get(Ae),gt=Le,gt.setIndex(ft)),W.isMesh)J.wireframe===!0?(te.setLineWidth(J.wireframeLinewidth*Z()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(W.isLine){let et=J.linewidth;et===void 0&&(et=1),te.setLineWidth(et*Z()),W.isLineSegments?gt.setMode(U.LINES):W.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else W.isPoints?gt.setMode(U.POINTS):W.isSprite&&gt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let et=W._multiDrawStarts,pt=W._multiDrawCounts,At=W._multiDrawCount,Ve=Ae?Ze.get(Ae).bytesPerElement:1,je=xe.get(J).currentProgram.getUniforms();for(let si=0;si<At;si++)je.setValue(U,"_gl_DrawID",si),gt.render(et[si]/Ve,pt[si])}else if(W.isInstancedMesh)gt.renderInstances(Pe,bt,W.count);else if(G.isInstancedBufferGeometry){let et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,et);gt.renderInstances(Pe,bt,pt)}else gt.render(Pe,bt)},this.compile=function(b,F,G=null){G===null&&(G=b),L!==null&&L.renderStart(b,F,G),M=re.get(G),M.init(F),N.push(M),G.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),b!==G&&b.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),R=this.localClippingEnabled,y=he.init(this.clippingPlanes,R),y===!0&&he.setGlobalState(this.clippingPlanes,F),L!==null&&se.render(M.state.shadowsArray,G,F);let J=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let _e=0;_e<ge.length;_e++){let be=ge[_e];Fc(be,G,F,W),J.add(be)}else Fc(ge,G,F,W),J.add(ge)}),M=N.pop(),L!==null&&L.renderEnd(),J},this.compileAsync=function(b,F,G=null){let J=this.compile(b,F,G);return new Promise(W=>{function ge(){J.forEach(function(_e){let be=xe.get(_e).currentProgram;(be===void 0||be.isReady())&&J.delete(_e)}),J.size!==0?setTimeout(ge,10):W(b)}ce.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let co=null;function Bc(){un.stop()}function zc(){un.start()}let un=new ed;function ho(b,F,G,J){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){let ge=F.isArrayCamera?S:K;if(!b.frustumCulled||b.intersectsFrustum(ge)){J&&H.setFromMatrixPosition(b.matrixWorld).applyMatrix4(z);let _e=Ce.update(b),be=b.material;be.visible&&A.push(b,_e,be,G,H.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let ge=F.isArrayCamera?S:K;if(!b.frustumCulled||b.intersectsFrustum(ge)){let _e=Ce.update(b),be=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),H.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),H.copy(_e.boundingSphere.center)),H.applyMatrix4(b.matrixWorld).applyMatrix4(z)),Array.isArray(be)){let Ae=_e.groups;for(let Fe=0,it=Ae.length;Fe<it;Fe++){let st=Ae[Fe],Pe=be[st.materialIndex];Pe&&Pe.visible&&A.push(b,_e,Pe,G,H.z,st,F)}}else be.visible&&A.push(b,_e,be,G,H.z,null,F)}}}let W=b.children;for(let ge=0,_e=W.length;ge<_e;ge++)ho(W[ge],F,G,J)}function Vc(b,F,G,J){let{opaque:W,transmissive:ge,transparent:_e}=b;M.setupLightsView(G),y===!0&&he.setGlobalState(I.clippingPlanes,G),J&&te.viewport(we.copy(J)),W.length>0&&ys(W,F,G),ge.length>0&&ys(ge,F,G),_e.length>0&&ys(_e,F,G),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function kc(b,F,G,J){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[J.id]===void 0){let st=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[J.id]=new Jt(1,1,{generateMipmaps:!0,type:st?Si:fi,minFilter:an,samples:Math.max(4,pe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let W=M.state.transmissionRenderTarget[J.id],ge=J.viewport||we;W.setSize(ge.z*I.transmissionResolutionScale,ge.w*I.transmissionResolutionScale);let _e=I.getRenderTarget(),be=I.getActiveCubeFace(),Ae=I.getActiveMipmapLevel();I.setRenderTarget(W),I.getClearColor(oe),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),C&&Me.render(G);let Fe=I.toneMapping;I.toneMapping=ni;let it=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),M.setupLightsView(J),y===!0&&he.setGlobalState(I.clippingPlanes,J),ys(b,G,J),Se.updateMultisampleRenderTarget(W),Se.updateRenderTargetMipmap(W),ce.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Pe=0,$e=F.length;Pe<$e;Pe++){let bt=F[Pe],{object:ft,geometry:gt,material:et,group:pt}=bt;if(et.side===_i&&ft.layers.test(J.layers)){let At=et.side;et.side=Dt,et.needsUpdate=!0,Gc(ft,G,J,gt,et,pt),et.side=At,et.needsUpdate=!0,st=!0}}st===!0&&(Se.updateMultisampleRenderTarget(W),Se.updateRenderTargetMipmap(W))}I.setRenderTarget(_e,be,Ae),I.setClearColor(oe,de),it!==void 0&&(J.viewport=it),I.toneMapping=Fe}function ys(b,F,G){let J=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ge=b.length;W<ge;W++){let _e=b[W],{object:be,geometry:Ae,group:Fe}=_e,it=_e.material;it.allowOverride===!0&&J!==null&&(it=J),be.layers.test(G.layers)&&Gc(be,F,G,Ae,it,Fe)}}function Gc(b,F,G,J,W,ge){L!==null&&W.isNodeMaterial&&L.setObject(b,W),b.onBeforeRender(I,F,G,J,W,ge),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(I,F,G,J,b,ge),W.transparent===!0&&W.side===_i&&W.forceSinglePass===!1?(W.side=Dt,W.needsUpdate=!0,I.renderBufferDirect(G,F,J,W,b,ge),W.side=cr,W.needsUpdate=!0,I.renderBufferDirect(G,F,J,W,b,ge),W.side=_i):I.renderBufferDirect(G,F,J,W,b,ge),b.onAfterRender(I,F,G,J,W,ge)}function Hc(b){let F=0;for(let G of b)G.texture!==null&&F++;return F}function gr(b,F,G){F.isScene!==!0&&(F=Q);let J=xe.get(b),W=M.state.lights,ge=M.state.shadowsArray,_e=W.state.version,be=We.getParameters(b,W.state,ge,F,G,M.state.lightProbeGridArray),Ae=We.getProgramCacheKey(be),Fe=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,J.fog=F.fog;let it=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=rt.get(b.envMap||J.environment,it),J.envMapRotation=J.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Oc),Fe=new Map,J.programs=Fe,J.programVariants=new Map);let st=Fe.get(Ae);if(st!==void 0){if(J.currentProgram===st&&J.lightsStateVersion===_e)return Wc(b,be),st}else be.uniforms=We.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,G,be),b.onBeforeCompile(be,I),st=We.acquireProgram(be,Ae),Fe.set(Ae,st),J.uniforms=be.uniforms;let Pe=J.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Pe.clippingPlanes=he.uniform),Wc(b,be),J.needsLights=(function($e){return $e.isMeshLambertMaterial||$e.isMeshToonMaterial||$e.isMeshPhongMaterial||$e.isMeshStandardMaterial||$e.isShadowMaterial||$e.isShaderMaterial&&$e.lights===!0})(b),J.lightsStateVersion=_e,J.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),J.numLightProbeGrids=Hc(M.state.lightProbeGridArray),J.currentProgram=st,J.uniformsList=null,st}function jc(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=pr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Wc(b,F){let G=xe.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function qc(b){let F=xe.get(b);return F.__readFormat===b.format&&F.__readType===b.type||(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=pe.textureFormatReadable(b.format),F.__typeReadable=pe.textureTypeReadable(b.type)),F}un.setAnimationLoop(function(b){co&&co(b)}),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(b){co=b,dt.setAnimationLoop(b),b===null?un.stop():un.start()},dt.addEventListener("sessionstart",Bc),dt.addEventListener("sessionend",zc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0)return void ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(q===!0)return;L!==null&&L.renderStart(b,F);let G=dt.enabled===!0&&dt.isPresenting===!0,J=D!==null&&(k===null||G)&&D.begin(I,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),dt.enabled!==!0||dt.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(dt.cameraAutoUpdate===!0&&dt.updateCamera(F),F=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,k),M=re.get(b,N.length),M.init(F),M.state.textureUnits=Se.getTextureUnits(),N.push(M),z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?S.setFromArrayCamera(F):K.setFromProjectionMatrix(z,ic,F.reversedDepth),R=this.localClippingEnabled,y=he.init(this.clippingPlanes,R),A=ie.get(b,P.length),A.init(),P.push(A),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){let ge=I.xr.getDepthSensingMesh();ge!==null&&ho(ge,F,-1/0,I.sortObjects)}ho(b,F,0,I.sortObjects),A.finish(),L!==null&&L.updateLights(M.state.lightsArray),I.sortObjects===!0&&A.sort(Ie,De),C=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,C&&Me.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),y===!0&&he.beginShadows();let W=M.state.shadowsArray;if(se.render(W,b,F),y===!0&&he.endShadows(),(J&&D.hasRenderPass())===!1){let ge=A.opaque,_e=A.transmissive;if(M.setupLights(),F.isArrayCamera){let be=F.cameras;if(_e.length>0)for(let Ae=0,Fe=be.length;Ae<Fe;Ae++)kc(ge,_e,b,be[Ae]);C&&Me.render(b);for(let Ae=0,Fe=be.length;Ae<Fe;Ae++){let it=be[Ae];Vc(A,b,it,it.viewport)}}else _e.length>0&&kc(ge,_e,b,F),C&&Me.render(b),Vc(A,b,F)}k!==null&&O===0&&(Se.updateMultisampleRenderTarget(k),Se.updateRenderTargetMipmap(k)),J&&D.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),Qe.resetDefaultState(),ae=-1,ye=null,N.pop(),N.length>0?(M=N[N.length-1],Se.setTextureUnits(M.state.textureUnits),y===!0&&he.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,P.pop(),A=P.length>0?P[P.length-1]:null,L!==null&&L.renderEnd()},this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,F,G){let J=xe.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),xe.get(b.texture).__webglTexture=F,xe.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:G,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let G=xe.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,G=0){k=b,j=F,O=G;let J=null,W=!1,ge=!1;if(b){let _e=xe.get(b);if(_e.__useDefaultFramebuffer!==void 0)return te.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),we.copy(b.viewport),Y.copy(b.scissor),ue=b.scissorTest,te.viewport(we),te.scissor(Y),te.setScissorTest(ue),void(ae=-1);if(_e.__webglFramebuffer===void 0)Se.setupRenderTarget(b);else if(_e.__hasExternalTextures)Se.rebindTextures(b,xe.get(b.texture).__webglTexture,xe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Fe=b.depthTexture;if(_e.__boundDepthTexture!==Fe){if(Fe!==null&&xe.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(b)}}let be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let Ae=xe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(J=Array.isArray(Ae[F])?Ae[F][G]:Ae[F],W=!0):J=b.samples>0&&Se.useMultisampledRTT(b)===!1?xe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?Ae[G]:Ae,we.copy(b.viewport),Y.copy(b.scissor),ue=b.scissorTest}else we.copy(ee).multiplyScalar(Ee).floor(),Y.copy(le).multiplyScalar(Ee).floor(),ue=E;if(G!==0&&(J=V),te.bindFramebuffer(U.FRAMEBUFFER,J)&&te.drawBuffers(b,J),te.viewport(we),te.scissor(Y),te.setScissorTest(ue),W){let _e=xe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,G)}else if(ge){let _e=F;for(let be=0;be<b.textures.length;be++){let Ae=xe.get(b.textures[be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+be,Ae.__webglTexture,G,_e)}}else if(b!==null&&G!==0){let _e=xe.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,G)}ae=-1},this.readRenderTargetPixels=function(b,F,G,J,W,ge,_e,be=0){if(!b||!b.isWebGLRenderTarget)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){te.bindFramebuffer(U.FRAMEBUFFER,Ae);try{let Fe=b.textures[be],it=Fe.format,st=Fe.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Pe=qc(Fe);if(Pe.__formatReadable===!1)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");F>=0&&F<=b.width-J&&G>=0&&G<=b.height-W&&U.readPixels(F,G,J,W,Ne.convert(it),Ne.convert(st),ge)}finally{let Fe=k!==null?xe.get(k).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,F,G,J,W,ge,_e,be=0){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){if(F>=0&&F<=b.width-J&&G>=0&&G<=b.height-W){te.bindFramebuffer(U.FRAMEBUFFER,Ae);let Fe=b.textures[be],it=Fe.format,st=Fe.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be);let Pe=qc(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(F,G,J,W,Ne.convert(it),Ne.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let bt=k!==null?xe.get(k).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,bt);let ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Au(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($e),U.deleteSync(ft),ge}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,G=0){let J=Math.pow(2,-G),W=Math.floor(b.image.width*J),ge=Math.floor(b.image.height*J),_e=F!==null?F.x:0,be=F!==null?F.y:0;Se.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,_e,be,W,ge),te.unbindTexture()},this.copyTextureToTexture=function(b,F,G=null,J=null,W=0,ge=0){let _e,be,Ae,Fe,it,st,Pe,$e,bt,ft=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(G!==null)_e=G.max.x-G.min.x,be=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,Fe=G.min.x,it=G.min.y,st=G.isBox3?G.min.z:0;else{let gi=Math.pow(2,-W);_e=Math.floor(ft.width*gi),be=Math.floor(ft.height*gi),Ae=b.isDataArrayTexture?ft.depth:b.isData3DTexture?Math.floor(ft.depth*gi):1,Fe=0,it=0,st=0}J!==null?(Pe=J.x,$e=J.y,bt=J.z):(Pe=0,$e=0,bt=0);let gt=Ne.convert(F.format),et=Ne.convert(F.type),pt;F.isData3DTexture?(Se.setTexture3D(F,0),pt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Se.setTexture2DArray(F,0),pt=U.TEXTURE_2D_ARRAY):(Se.setTexture2D(F,0),pt=U.TEXTURE_2D),te.activeTexture(U.TEXTURE0),te.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),te.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),te.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let At=te.getParameter(U.UNPACK_ROW_LENGTH),Ve=te.getParameter(U.UNPACK_IMAGE_HEIGHT),je=te.getParameter(U.UNPACK_SKIP_PIXELS),si=te.getParameter(U.UNPACK_SKIP_ROWS),uo=te.getParameter(U.UNPACK_SKIP_IMAGES);te.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),te.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),te.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),te.pixelStorei(U.UNPACK_SKIP_ROWS,it),te.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let vr=b.isDataArrayTexture||b.isData3DTexture,yr=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let gi=xe.get(b),Rn=xe.get(F),wi=xe.get(gi.__renderTarget),po=xe.get(Rn.__renderTarget);te.bindFramebuffer(U.READ_FRAMEBUFFER,wi.__webglFramebuffer),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,po.__webglFramebuffer);for(let Pn=0;Pn<Ae;Pn++)vr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.get(b).__webglTexture,W,st+Pn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.get(F).__webglTexture,ge,bt+Pn)),U.blitFramebuffer(Fe,it,Fe+_e,it+be,Pe,$e,Pe+_e,$e+be,U.DEPTH_BUFFER_BIT,U.NEAREST);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||xe.has(b)){let gi=xe.get(b),Rn=xe.get(F);te.bindFramebuffer(U.READ_FRAMEBUFFER,X),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,$);for(let wi=0;wi<Ae;wi++)vr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gi.__webglTexture,W,st+wi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gi.__webglTexture,W),yr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rn.__webglTexture,ge,bt+wi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rn.__webglTexture,ge),W!==0?U.blitFramebuffer(Fe,it,Fe+_e,it+be,Pe,$e,Pe+_e,$e+be,U.COLOR_BUFFER_BIT,U.NEAREST):yr?U.copyTexSubImage3D(pt,ge,Pe,$e,bt+wi,Fe,it,_e,be):U.copyTexSubImage2D(pt,ge,Pe,$e,Fe,it,_e,be);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yr?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(pt,ge,Pe,$e,bt,_e,be,Ae,gt,et,ft.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(pt,ge,Pe,$e,bt,_e,be,Ae,gt,ft.data):U.texSubImage3D(pt,ge,Pe,$e,bt,_e,be,Ae,gt,et,ft):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Pe,$e,_e,be,gt,et,ft.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Pe,$e,ft.width,ft.height,gt,ft.data):U.texSubImage2D(U.TEXTURE_2D,ge,Pe,$e,_e,be,gt,et,ft);te.pixelStorei(U.UNPACK_ROW_LENGTH,At),te.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ve),te.pixelStorei(U.UNPACK_SKIP_PIXELS,je),te.pixelStorei(U.UNPACK_SKIP_ROWS,si),te.pixelStorei(U.UNPACK_SKIP_IMAGES,uo),ge===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(pt),te.unbindTexture()},this.initRenderTarget=function(b){xe.get(b).__webglFramebuffer===void 0&&Se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Se.setTextureCube(b,0):b.isData3DTexture?Se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Se.setTexture2DArray(b,0):Se.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){j=0,O=0,k=null,te.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ic}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}});var pd={};yo(pd,{LineSegmentsGeometry:()=>gs});var dd,ao,gs,Cc=Mr(()=>{fr();dd=new Nt,ao=new w,gs=class extends ts{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ue(e,3)),this.setAttribute("uv",new Ue(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new nn(t,6,1);return this.setAttribute("instanceStart",new pi(i,3,0)),this.setAttribute("instanceEnd",new pi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new nn(t,6,1);return this.setAttribute("instanceColorStart",new pi(i,3,0)),this.setAttribute("instanceColorEnd",new pi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new nr(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),dd.setFromBufferAttribute(t),this.boundingBox.union(dd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ao.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ao)),ao.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ao));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}});var md={};yo(md,{LineMaterial:()=>vs});var vs,Ic=Mr(()=>{fr();fe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vt.line={uniforms:us.merge([fe.common,fe.fog,fe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};vs=class extends kt{constructor(e){super({type:"LineMaterial",uniforms:us.clone(Vt.line.uniforms),vertexShader:Vt.line.vertexShader,fragmentShader:Vt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}});var xd={};yo(xd,{LineSegments2:()=>Lc});function yd(n,e,t){return Ti.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ti.multiplyScalar(1/Ti.w),Ti.x=An/t.width,Ti.y=An/t.height,Ti.applyMatrix4(n.projectionMatrixInverse),Ti.multiplyScalar(1/Ti.w),Math.abs(Math.max(Ti.x,Ti.y))}function qv(n,e){let t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,l=a;o<l;o++){Pt.start.fromBufferAttribute(r,o),Pt.end.fromBufferAttribute(s,o),Pt.applyMatrix4(t);let c=new w,h=new w;Ai.distanceSqToSegment(Pt.start,Pt.end,h,c),h.distanceTo(c)<An*.5&&e.push({point:h,pointOnLine:c,distance:Ai.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Xv(n,e,t){let i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Ai.at(1,bi),bi.w=1,bi.applyMatrix4(e.matrixWorldInverse),bi.applyMatrix4(i),bi.multiplyScalar(1/bi.w),bi.x*=s.x/2,bi.y*=s.y/2,bi.z=0,Nc.copy(bi),Dc.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,p=h;m<p;m++){if(Et.fromBufferAttribute(l,m),Rt.fromBufferAttribute(c,m),Et.w=1,Rt.w=1,Et.applyMatrix4(Dc),Rt.applyMatrix4(Dc),Et.z>u&&Rt.z>u)continue;if(Et.z>u){let _=Et.z-Rt.z,T=(Et.z-u)/_;Et.lerp(Rt,T)}else if(Rt.z>u){let _=Rt.z-Et.z,T=(Rt.z-u)/_;Rt.lerp(Et,T)}Et.applyMatrix4(i),Rt.applyMatrix4(i),Et.multiplyScalar(1/Et.w),Rt.multiplyScalar(1/Rt.w),Et.x*=s.x/2,Et.y*=s.y/2,Rt.x*=s.x/2,Rt.y*=s.y/2,Pt.start.copy(Et),Pt.start.z=0,Pt.end.copy(Rt),Pt.end.z=0;let v=Pt.closestPointToPointParameter(Nc,!0);Pt.at(v,vd);let g=wt.lerp(Et.z,Rt.z,v),f=g>=-1&&g<=1,x=Nc.distanceTo(vd)<An*.5;if(f&&x){Pt.start.fromBufferAttribute(l,m),Pt.end.fromBufferAttribute(c,m),Pt.start.applyMatrix4(a),Pt.end.applyMatrix4(a);let _=new w,T=new w;Ai.distanceSqToSegment(Pt.start,Pt.end,T,_),t.push({point:T,pointOnLine:_,distance:Ai.origin.distanceTo(T),object:n,face:null,faceIndex:m,uv:null,uv1:null})}}}var Uc,fd,gd,Et,Rt,bi,Nc,Dc,Pt,vd,oo,lo,Ti,Ai,An,Lc,_d=Mr(()=>{fr();Cc();Ic();Uc=new nt,fd=new w,gd=new w,Et=new nt,Rt=new nt,bi=new nt,Nc=new w,Dc=new qe,Pt=new ns,vd=new w,oo=new Nt,lo=new zt,Ti=new nt;Lc=class extends xt{constructor(e=new gs,t=new vs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)fd.fromBufferAttribute(t,a),gd.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+fd.distanceTo(gd);let s=new nn(r,2,1);return e.setAttribute("instanceDistanceStart",new pi(s,1,0)),e.setAttribute("instanceDistanceEnd",new pi(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ai=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;An=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),lo.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=An*.5;else{let u=Math.max(r.near,lo.distanceToPoint(Ai.origin));c=yd(r,u,l.resolution)}if(lo.radius+=c,Ai.intersectsSphere(lo)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),oo.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=An*.5;else{let u=Math.max(r.near,oo.distanceToPoint(Ai.origin));h=yd(r,u,l.resolution)}oo.expandByScalar(h),Ai.intersectsBox(oo)!==!1&&(i?qv(this,t):Xv(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Uc),this.material.uniforms.resolution.value.set(Uc.z,Uc.w))}}});fr();fr();var cd={type:"change"},Pc={type:"start"},ud={type:"end"},ro=new xi,hd=new Kt,Nv=Math.cos(70*wt.DEG2RAD),Mt=new w,Gt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rc=1e-6,so=class extends rs{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new Bt,this._lastTargetPosition=new w,this._quat=new Bt().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new w,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new w,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lv.bind(this),this._onPointerDown=Dv.bind(this),this._onPointerUp=Ov.bind(this),this._onContextMenu=Hv.bind(this),this._onMouseWheel=zv.bind(this),this._onKeyDown=Vv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Gv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=Bv.bind(this),this._interceptControlDown=jv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=at.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),r<-Math.PI?r+=Gt:r>Math.PI&&(r-=Gt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Mt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<Nv?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rc||this._lastTargetPosition.distanceToSquared(this.target)>Rc?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Dv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Lv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ov(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=at.DOLLY;break;case rn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}break;case rn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Pc)}function Bv(n){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zv(n){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ud))}function Vv(n){this.enabled!==!1&&this._handleKeyDown(n)}function kv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1){this.state=at.NONE;break}this._handleTouchStartRotate(n),this.state=at.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1){this.state=at.NONE;break}this._handleTouchStartPan(n),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=at.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Pc)}function Gv(n){switch(this._trackPointer(n),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=at.NONE}}function Hv(n){this.enabled!==!1&&n.preventDefault()}function jv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function Sd(n){let{canvas:e,features:t,getRecords:i,getCoordinates:r,getVisitedCodes:s,featureAt:a,onPick:o,onMarker:l,onActive:c}=n,h=performance.now(),u=new es,m=ie=>new URL("./earth-textures/"+ie,import.meta.url).href,p=await u.loadAsync(n.previewTexture||m("earth_preview_1024.jpg"));p.colorSpace=ki;let d=null,v=0;function g(ie,re){if(!d)return 0;Math.abs(re)>89.9&&(ie=0);let he=((ie+180)%360+360)%360/360*2047,se=Math.max(0,Math.min(1023,(90-re)/180*1023)),Me=Math.floor(he),Re=Math.floor(se),He=Math.min(2047,Me+1),Le=Math.min(1023,Re+1),Ne=he-Me,Qe=se-Re,Xe=(d[Re*2048+Me]*(1-Ne)+d[Re*2048+He]*Ne)*(1-Qe)+(d[Le*2048+Me]*(1-Ne)+d[Le*2048+He]*Ne)*Qe;return Math.pow(Xe/255,1.3)*.01}let f=e.parentElement,x=new Lr,_=new to({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"});e.dataset.engine="Three.js r187",_.setPixelRatio(Math.min(devicePixelRatio,1.75)),_.outputColorSpace=ki,_.toneMapping=ni;let T=new Ft(38,1,.05,50),A=(ie,re,he=1)=>{let se=wt.degToRad(ie),Me=wt.degToRad(re);return new w(he*Math.cos(Me)*Math.cos(se),he*Math.sin(Me),-he*Math.cos(Me)*Math.sin(se))};T.position.copy(A(105,25,3.5));let M=new so(T,e);M.enablePan=!1,M.enableDamping=!0,M.dampingFactor=.12,M.minDistance=1.2,M.maxDistance=6,M.rotateSpeed=.65,M.enableZoom=!1,M.autoRotateSpeed=.45,M.touches.ONE=mi.ROTATE,M.touches.TWO=mi.DOLLY_ROTATE,M.saveState();let P=document.createElement("canvas");P.width=2048,P.height=1024;let N=P.getContext("2d"),D=new $n(P);D.colorSpace=ki,D.anisotropy=Math.min(4,_.capabilities.getMaxAnisotropy()),p.anisotropy=D.anisotropy;let I=new Oi({map:p,color:14805229,toneMapped:!1}),q=new Bi(1,128,80);e.dataset.terrain="pending",e.dataset.textureQuality="preview";let L=new xt(q,I),V=new xt(L.geometry,new Oi({map:D,transparent:!0,depthWrite:!1,opacity:.85}));V.scale.setScalar(1.0008),x.add(V),x.add(L,T);let X=new xt(new Bi(1.02,96,64),new kt({transparent:!0,depthWrite:!1,side:Dt,blending:os,vertexShader:"varying vec3 n;varying vec3 p;void main(){n=normalize(normalMatrix*normal);vec4 v=modelViewMatrix*vec4(position,1.0);p=v.xyz;gl_Position=projectionMatrix*v;}",fragmentShader:"varying vec3 n;varying vec3 p;void main(){float rim=pow(1.0-abs(dot(normalize(n),normalize(-p))),3.0);gl_FragColor=vec4(0.28,0.61,0.92,rim*0.10);}"}));x.add(X);function $(ie,re){let he=[],se=new Set;function Me(He){for(let Le=1;Le<He.length;Le++){let Ne=He[Le-1],Qe=He[Le],Xe=Qe[0]-Ne[0];Xe>180&&(Xe-=360),Xe<-180&&(Xe+=360);let U=Qe[1]-Ne[1],Ht=Math.max(1,Math.ceil(Math.max(Math.abs(Xe),Math.abs(U))/1.5));for(let jt=0;jt<Ht;jt++){let dt=[Ne[0]+Xe*jt/Ht,Ne[1]+U*jt/Ht],cn=[Ne[0]+Xe*(jt+1)/Ht,Ne[1]+U*(jt+1)/Ht],En=[dt.map(hn=>hn.toFixed(5)).join(","),cn.map(hn=>hn.toFixed(5)).join(",")].sort().join("|");se.has(En)||(se.add(En),A(...dt,re+g(...dt)).toArray(he,he.length),A(...cn,re+g(...cn)).toArray(he,he.length))}}}for(let He of ie){let Le=He.geometry;Le&&(Le.type==="LineString"&&Me(Le.coordinates),(Le.type==="MultiLineString"||Le.type==="Polygon")&&Le.coordinates.forEach(Me),Le.type==="MultiPolygon"&&Le.coordinates.flat().forEach(Me))}let Re=new ot;return Re.setAttribute("position",new Ue(he,3)),Re}let j=new vn({color:11916517,transparent:!0,opacity:.8,depthWrite:!1}),O=new Qn($(t,1.004),j),k=new Qn(new ot,new vn({color:6606847,transparent:!0,opacity:.95,depthWrite:!1}));k.renderOrder=5,x.add(k),O.renderOrder=4,x.add(O);let ae={province:{file:"china-provinces.json",radius:1.003,order:3},city:{file:"china-cities.json",radius:1.002,order:2}};e.dataset.admin1Boundaries="0",e.dataset.cityBoundaries="0",e.dataset.provinceStyle="china-only-zoom-dependent",e.dataset.surface="unlit-satellite-day-night";let ye=new Di;x.add(ye);let we=new Bi(.009,10,8),Y=new Oi({color:16762997}),ue="",oe=0,de=!0,Te=!1,me=!1,Ee=!1,Ie=0,De=null,ee=!1,le=0;function E(){!oe&&!me&&de&&!document.hidden&&document.body.dataset.page==="travel"&&(oe=requestAnimationFrame(K))}function K(ie){oe=0;let re=Ie?Math.min((ie-Ie)/1e3,.05):1/60;Ie=ie,M.update(re);let he=T.position.length(),se=wt.smoothstep(2.65-he,0,.35),Me=wt.smoothstep(1.92-he,0,.23),Re=wt.radToDeg(Math.atan2(-T.position.z,T.position.x)),He=wt.radToDeg(Math.asin(T.position.y/he)),Le=Re>50&&Re<165&&He>-10&&He<80;for(let[Qe,Xe]of[["province",se],["city",Me]]){let U=ae[Qe];Xe>0&&Le&&B(Qe),U.borders&&(U.borders.visible=Xe>0,U.borders.material.opacity=Xe*(Qe==="city"?.55:.76),Qe==="province"&&(U.borders.material.linewidth=wt.clamp(1.2-he*.18,.6,1)))}let Ne=Me>0?"city":se>0?"province":"country";e.dataset.boundaryLevel!==Ne&&(e.dataset.boundaryLevel=Ne),_.render(x,T),e.dataset.firstFrameMs||(e.dataset.firstFrameMs=Math.round(performance.now()-h).toString(),f.dataset.globeReady="true",e.removeAttribute("aria-busy"),setTimeout(C,150)),M.autoRotate&&E()}let S=null;function y(){return S||(S=Promise.all([Promise.resolve().then(()=>(_d(),xd)),Promise.resolve().then(()=>(Cc(),pd)),Promise.resolve().then(()=>(Ic(),md))]).catch(ie=>{throw S=null,ie}))}let R=()=>new Promise(ie=>setTimeout(ie,0));async function z(ie){let re=ae[ie];return re.building||(re.building=(async()=>{let[{LineSegments2:he},{LineSegmentsGeometry:se},{LineMaterial:Me}]=await y(),Re;for(;;){let He=v,Le=[],Ne=0;for(let U=0;U<re.features.length;U+=16){await R();let Ht=$(re.features.slice(U,U+16),re.radius),jt=Ht.getAttribute("position").array;Le.push(jt),Ne+=jt.length,Ht.dispose()}if(He!==v)continue;let Qe=new Float32Array(Ne),Xe=0;for(let U of Le)Qe.set(U,Xe),Xe+=U.length;Re=new se().setPositions(Qe);break}if(re.borders)re.borders.geometry.dispose(),re.borders.geometry=Re;else{let He=new Me({color:ie==="province"?0:1054752,linewidth:ie==="province"?.6:.55,transparent:!0,opacity:0,depthWrite:!1,alphaToCoverage:!0});re.borders=new he(Re,He),re.borders.visible=!1,re.borders.renderOrder=re.order,x.add(re.borders)}e.dataset[ie+"State"]="ready",E()})().finally(()=>{re.building=null})),re.building}async function B(ie){let re=ae[ie];if(!(re.promise||re.borders||performance.now()<(re.retryAt||0)))return e.dataset[ie+"State"]="loading",re.promise=(async()=>{let he=await fetch(new URL("./"+re.file,import.meta.url));if(!he.ok)throw Error("Boundary unavailable");let se=await he.json();re.features=se.features,await z(ie),e.dataset[ie==="province"?"admin1Boundaries":"cityBoundaries"]=String(re.features.length)})().catch(()=>{e.dataset[ie+"State"]="retry",re.retryAt=performance.now()+1e4}).finally(()=>{re.promise=null}),re.promise}async function H(){e.dataset.detailState="loading";let ie=await Promise.allSettled([u.loadAsync(m("earth_blue_marble.jpg")).then(re=>{re.colorSpace=ki,re.anisotropy=D.anisotropy;let he=p;p=re,I.map=re,I.needsUpdate=!0,he.dispose(),e.dataset.textureQuality="high",E()}),u.loadAsync(m("earth_bump_roughness_clouds_4096.jpg")).then(async re=>{let he=document.createElement("canvas");he.width=2048,he.height=1024;let se=he.getContext("2d",{willReadFrequently:!0});se.drawImage(re.image,0,0,2048,1024);let Me=se.getImageData(0,0,2048,1024).data;d=new Uint8Array(2048*1024);for(let Xe=0;Xe<d.length;Xe++)d[Xe]=Me[Xe*4];he.width=he.height=1,re.dispose(),re.image=null,v++,await R();let Re=new Bi(1,256,160),He=Re.getAttribute("position"),Le=Re.getAttribute("uv"),Ne=0;for(let Xe=0;Xe<He.count;Xe++){let U=g((Le.getX(Xe)-.5)*360,(Le.getY(Xe)-.5)*180);Ne=Math.max(Ne,U),He.setXYZ(Xe,He.getX(Xe)*(1+U),He.getY(Xe)*(1+U),He.getZ(Xe)*(1+U))}He.needsUpdate=!0,Re.computeBoundingSphere();let Qe=L.geometry;L.geometry=Re,V.geometry=Re,Qe.dispose(),O.geometry.dispose(),O.geometry=$(t,1.004),ue="",Se();for(let[Xe,U]of Object.entries(ae))U.borders&&z(Xe).catch(()=>{});e.dataset.terrain="displaced-heightmap",e.dataset.maxRelief=Ne.toFixed(5),E()})]);e.dataset.detailState=ie.every(re=>re.status==="fulfilled")?"ready":"partial"}let Q=!1;function C(){Q||!e.dataset.firstFrameMs||!de||document.hidden||document.body.dataset.page!=="travel"||(Q=!0,H())}M.addEventListener("change",E);let Z=null,ce=!1,pe=document.createElement("button");pe.id="atlas-daynight",pe.type="button",pe.style.fontSize="17px";function te(){pe.textContent=ce?"\u2600":"\u263E",pe.setAttribute("aria-label",ce?"\u5207\u6362\u767D\u5929\u5730\u7403":"\u5207\u6362\u591C\u665A\u5730\u7403"),pe.title=ce?"\u5207\u6362\u767D\u5929\u5730\u7403":"\u5207\u6362\u591C\u665A\u5730\u7403",pe.setAttribute("aria-pressed",String(ce)),e.dataset.dayNight=ce?"night":"day"}wn("#atlas-spin").before(pe),te(),pe.onclick=async()=>{pe.disabled=!0;try{if(!Z){let ie=await u.loadAsync(new URL("./earth-textures/earth_night_4096.jpg",import.meta.url).href),re=document.createElement("canvas");re.width=4096,re.height=2048;let he=re.getContext("2d");he.fillStyle="#1b2d46",he.fillRect(0,0,4096,2048),he.globalAlpha=.32,he.filter="saturate(.55)",he.drawImage(p.image,0,0,4096,2048),he.globalAlpha=.95,he.globalCompositeOperation="screen",he.filter="brightness(1.6) saturate(.8)",he.drawImage(ie.image,0,0,4096,2048);let se=new $n(re);se.colorSpace=ki,se.anisotropy=D.anisotropy,Z=new Oi({map:se,toneMapped:!1}),ie.dispose(),ie.image=null}ce=!ce,L.material=ce?Z:I,V.material.opacity=ce?.7:.85,j.opacity=ce?.45:.7,te(),E()}catch{pe.title="\u65E5\u591C\u8D34\u56FE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"}finally{pe.disabled=!1}};function Be(ie){Ee=ie,M.enableZoom=ie,c(ie)}function xe(){let ie=f.getBoundingClientRect();ie.width&&(_.setSize(ie.width,ie.height,!1),T.aspect=ie.width/ie.height,T.updateProjectionMatrix(),E())}function Se(){let ie=s(),re=i(),he=document.documentElement.dataset.theme==="dark",se=JSON.stringify([he,[...ie].sort(),re.map(Me=>[Me.id,Me.placeKind,r(Me)])]);if(se!==ue){ue=se,j.color.set(12637921),k.geometry.dispose(),k.geometry=$(t.filter(Le=>ie.has(Le.id)),1.006),e.dataset.visitedCountries=String(ie.size),N.clearRect(0,0,P.width,P.height);let Me=window.d3.geoEquirectangular().scale(P.width/(2*Math.PI)).translate([P.width/2,P.height/2]),Re=window.d3.geoPath(Me,N);for(let Le of t)ie.has(Le.id)&&(N.beginPath(),Re(Le),N.fillStyle="rgba(65,185,245,.30)",N.fill());for(let Le of t.filter(Ne=>Ne.geometry.type==="Point"&&ie.has(Ne.id))){let Ne=Me(Le.geometry.coordinates);N.beginPath(),N.arc(...Ne,3.5,0,Math.PI*2),N.fillStyle="#ffc875",N.fill()}D.needsUpdate=!0,ye.clear();let He=new Set;for(let Le of re){if(["country","territory"].includes(Le.placeKind))continue;let Ne=r(Le);if(!Ne||He.has(Ne.join(",")))continue;He.add(Ne.join(","));let Qe=new xt(we,Y);Qe.position.copy(A(...Ne,1.012+g(...Ne))),Qe.userData.recordId=Le.id,ye.add(Qe)}}E()}let rt=new is,Ze=new ne;function ve(ie){let re=e.getBoundingClientRect();Ze.set((ie.clientX-re.left)/re.width*2-1,-(ie.clientY-re.top)/re.height*2+1),T.updateMatrixWorld(),x.updateMatrixWorld(),rt.setFromCamera(Ze,T);let he=rt.intersectObject(L)[0];if(!he)return null;let se=he.point.clone().normalize(),Me=[wt.radToDeg(Math.atan2(-se.z,se.x)),wt.radToDeg(Math.asin(se.y))],Re=rt.intersectObjects(ye.children).find(He=>He.distance<he.distance);return{coordinate:Me,feature:a(Me),recordId:Re?.object.userData.recordId}}e.addEventListener("pointerdown",ie=>{De?ee=!0:ee=!1,De={x:ie.clientX,y:ie.clientY,activated:!Ee},Be(!0),wn("#atlas-tooltip").hidden=!0}),e.addEventListener("pointerup",ie=>{let re=De;if(De=null,!re||ee||re.activated||Math.hypot(ie.clientX-re.x,ie.clientY-re.y)>6)return;let he=ve(ie);he?.recordId?l(he.recordId):he?.feature&&o(he.feature,he.coordinate)}),e.addEventListener("pointercancel",()=>{De=null}),e.addEventListener("pointermove",ie=>{if(De||ie.pointerType==="touch"||performance.now()-le<65)return;le=performance.now();let re=ve(ie),he=wn("#atlas-tooltip");if(he.hidden=!re?.feature,re?.feature){he.textContent=re.feature.properties.label+(s().has(re.feature.id)?" \xB7 \u5DF2\u5230\u8BBF":"");let se=e.getBoundingClientRect();he.style.left=Math.max(8,Math.min(se.width-150,ie.clientX-se.left+14))+"px",he.style.top=Math.max(8,ie.clientY-se.top-35)+"px"}}),e.addEventListener("pointerleave",()=>{wn("#atlas-tooltip").hidden=!0}),document.addEventListener("pointerdown",ie=>{f.contains(ie.target)||Be(!1)}),document.addEventListener("focusin",ie=>{f.contains(ie.target)||Be(!1)}),document.addEventListener("keydown",ie=>{ie.key==="Escape"&&Be(!1)}),window.addEventListener("blur",()=>Be(!1)),e.addEventListener("keydown",ie=>{let re={ArrowLeft:[8,0],ArrowRight:[-8,0],ArrowUp:[0,5],ArrowDown:[0,-5]}[ie.key];if(!re)return;ie.preventDefault();let he=T.position.clone(),se=wt.radToDeg(Math.atan2(-he.z,he.x)),Me=wt.radToDeg(Math.asin(he.y/he.length()));T.position.copy(A(se+re[0],Math.max(-80,Math.min(80,Me+re[1])),he.length())),M.update(),E()}),new ResizeObserver(xe).observe(f),new IntersectionObserver(ie=>{de=ie[0].isIntersecting,de?(Ie=0,E(),C()):oe&&(cancelAnimationFrame(oe),oe=0)}).observe(f);let Ce=matchMedia("(prefers-reduced-motion: reduce)");function We(){M.autoRotate=Te&&!Ce.matches,wn("#atlas-spin").setAttribute("aria-pressed",String(M.autoRotate)),E()}Ce.addEventListener("change",()=>{M.enableDamping=!Ce.matches,We()}),M.enableDamping=!Ce.matches,new MutationObserver(Se).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),new MutationObserver(()=>{document.body.dataset.page==="travel"?(xe(),E(),C()):(Te=!1,M.autoRotate=!1,wn("#atlas-spin").setAttribute("aria-pressed","false"),oe&&(cancelAnimationFrame(oe),oe=0))}).observe(document.body,{attributes:!0,attributeFilter:["data-page"]}),document.addEventListener("visibilitychange",()=>{document.hidden&&oe?(cancelAnimationFrame(oe),oe=0):(Ie=0,E(),C())}),e.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),me=!0,oe&&cancelAnimationFrame(oe),wn("#atlas-summary").textContent="\u5730\u7403\u56FE\u5F62\u8FDE\u63A5\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"}),e.addEventListener("webglcontextrestored",()=>{me=!1,D.needsUpdate=!0,Se()}),xe(),Se(),ut();function ut(){c(Ee)}return{refresh:Se,zoom(ie){T.position.multiplyScalar(ie),T.position.setLength(Math.max(M.minDistance,Math.min(M.maxDistance,T.position.length()))),M.update(),E()},reset(){M.reset(),E()},toggleSpin(){Te=!Te,We()},focus(ie,re){T.position.copy(A(ie,re,T.position.length())),M.update(),E()}}}function wn(n){return document.querySelector(n)}var Kv="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAIABAADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxgtET/qv/AB//AOtSBov+eI/77NT/AGM54JpfsR/vYr1OWRycyK++L/n3X/vs0F4+1uv/AH0as/YT/wA9B+VJ9h/26OSQc0SuNh/5YL/30acFX/ngv/fRqf7CP+elJ9i/26OVhzIi2D/n3X/vs0bB/wA8F/77NS/Y/wDaNH2Rj3/OjlfYXMiEID0hT/vo0eX/ANMU/wC+jU/2XB5kA/GjyB/eJp8jDmIvLH/PJP8Avo03aP8Angv4k1ZEApxgAHPH40cgcxU2gj/UJ/30aTaP+eKfmaueSvWnCMCnyC5yltH/ADyT8zQFH/PFfzNX/KU9TS7I+hJz9aOQOcoYX/n3X8zS4X/n3T8z/jV7bGO4/Oj9160+QOcobV6+RHj6n/GlKqBnyI/zP+NXf3fTP6Clwh4+X8aOQXMUcJ/zwj/M/wCNG1T/AMsE/M1fxH2KfrS4XsV/WjkDnKAjX/ngn5mjbEv3oV/M1ogL3C/maQxoeoX8zT5A5yhiH/ngv/fRpcQf8+6/99GrvloOigfhS+Up/h/SjkDnKO2H/n3H/fRo2Q/88P8Ax41eMSjtSbF9xRyC5ymEgJ/1H/j1O8iL/n3H/fdWtv1/KjYPp+FPlDmKwto+8IH/AAOl+yw4/wBT/wCPVN5YPek8seppcq7BzMi+yQ/88sfR6b9lgz/q3H/Aqm8se9HlD3o5V2DmfchNtbD+B/zoFta+j/nU4iHbJp32fjpRyrsHN5lf7Ja/7X50fYoD0Y1ZFtnsPzp4tyO4/OnyLsLn8yp/Z8R/jP6Uv9nR/wB+rYtVzklaX7Mh/jFP2a7BzvuU/wCzU7N+lN/s0djWisUa9Zf1p/7ofxj86PZxF7RmV/Zx9M/jTTp7Dna1a5eAdXWk82D+8v5UeyiHtJGMbRQuWLD61Gbb0LH/AIDWy80O3AIz646VSkYs3DHHsCKzlTii4zbKHkN6/mKaYyO61e3SD5QAR7imGLcc7APoKhw7FqT6lID/ADil2+1W/s/PWnfZyfSlyMfOilspNtX/ALLnvS/YHbpT9mxc6M/bSYrROmye1J/Zj/3h+VL2Uh+0iZ+KSr7ac4/iX6Ug02U+lL2cuwc8SjRWh/ZUuOWUfU0xtOKjmeL86PZyDniUuaOan8iP/n5iP0z/AIUx0QHCtu/DFTZlXRFmjNPK+hzRtpWYxmaXNLil2NjOOKLMLjc0ZNP8s/QUbR2aizC5HlvSlyfSpCg7Gm7M+v5UWYXG5ozUgiXHIbNGxAfut/31TswuR5ozUuxO2fxNIQoHAFFhXI8/SjNS8AZBU+2KX5M5wMfSiwXIaM1MSnZB9eaMrjt/3zRYLkOaM1MG+n5Ck4HIJosFyLNLz6VN5mB90flSbuOc/nTsFyLn0/SjDf3T+VP5Pc/nS/n+dKwXI+fSjn0p+0HtTgSOwosFyLn0/SjDen6VPkd0Un3pfMbooVfoop8oXIdkn90/lTSSOvFSFcnJLH8aUKB2/Wlyhch3e9Lk1KPp+lLz/kUcoXIMn3o3VNgnqB+VG0f3R+VHKFyHcfWjcak8sf3RR5Qo5WF0R7jS7j60/wAodh+tHlc9P1osx3QzcaNx96f5XuRSeX6Z/KizC6Gbj70u4+tLsoMfvSswE3GjcfWjb7ijafajUA3H1o3e9G0+lJtPpRqAuT607BP8a/nUfTqCKOtAEm3/AKaL+dOEZPSQVDS807oLFj7OepcU4W2f+Wh/KqtLk+pp3j2Js+5dWzU9ZWH/AAGpRp8J/wCXhvyFZwdx/Efzp4nkH8RqlKHYTjLuX/7Oi7TsfxFJ/Z4zw7H/AIGP8KqLcyepNTLdN6A/hVpwfQm011Jxpw9W/wC/n/1qa9htGRvP0bP9Kel36on5VYS5U9V/I1ajBkOU0ZzQbeokH40xhEuN3mfga2VdHHf880FY8Z3AfUUeyXQPaPqYm+HP/LT86N0XpL/31WlIyg48sP7qKjKwMOUZc/7VRyF85R3R9hJ/31Ruj9JP++qWVIw5Ee8+5xTAj+g/Cs9Sx26P+7J/31S7ov7sn/fVN2HvThGP7x/KnZiDdF/dk/76pRKi/dEo/wC2lKIVPVj+ApfJj/vGnZhdCi5KnIaYf9tTV7T9dvLK7heOabaHGVaYkEZ9Ko/Z1PRjTltfmHJ60crFzIsHIHWmF2Uf/Wqyyeh/MVC8PPOR71s0zNNERnbGMH86YZXzmntEw7kjtmosHNQ7lKwpmcDr+lN+0OOpJ/GnhGJ4FO+zyf8APMn6UrSHoM+1v24H1pGuWPb86VoX/wCeTD8KjKEdQR9aTchrlHrcvnoKd5zMME5/Sq9GTmlzMfKi0JGX+LHsKC6/3sn6VVpKfOLlLvmYOM80jStzluPSqdLRzsOVE/2ikM2e1Q0uKXMwsiQyE9yKbvPqabinAUXY7IcHb1NLu54yfc0gUe9P2A9DTVydBAzU4F+uM+9KE5xz+VTJBk9T9MVaTE2iHzJKXzX96upaZ7GpRaIOvNUoSIc4mf5knbNO3yep+laAihXsPxNSBE7AVXI+5POuxnq8pGMcH1qVYpyOMAVtafouo6ru/s+xludhAbygDip7zw3rmnuqXmjX0TNnbmBjnHXpmjROzYrvdIwBBKTy4pwtSB95a07eC1kLJcXv2WQZ+V4GYf8AjvI/KpdJTTJb9E1a7e2tj1KIWJ/LOPyNVZIV2ZH2U/3x+VSxadPL/q45JP8AcjLfyr3bQ9C+HxjIi+wXx+8FDGU49wMmr1x8PtFnnhvNFv77SXB3LHAxMJ/7Zt0/SuZ4mCdrGyoya3PCE8OapLAZ00y/eFc5dLZiox15xWtD8OvEc8Alj0qTnojyorn/AICTmvbU0/xXZwzRW+qWNw+cWzzQMhx33bT1+gqpDqWq6bbCfVr+3EgbbLJIWZFbpwEfgH3Geeah4l9EilRXVnk9h8MfEl3cNFPpxsUUcy3bHafYbc5rdi+CerSxhxqmnjPT5ZD+uK9Pt5fEQSaSS+0ycAlo/s6NyvZTucAH3zz7Vca21O7UebrE0CghiILZUJHoSzNx9Kyliql90WqMPM8ytfgbdGINd6zbo+fuQwFx+ZI/lVsfAyLaCdeI/wC3Qf8AxVelCW008DzruVmIxuYbif0NUL7xz4e02JWub+NVbgbgef0qfrFZvR/gV7KktzzuT4JhWwniO2x6Pb4P/oVVG+C+ok4g1ixmJ7LEf154rqL/AOLfhiC2keyjaabHyR+SU3fUkcfnXH3fxN13VHxpeiJFAONyo9y4/EnH5itoyxLM5KihT8F9fUnddaYOuN0jAn/x2sXVfhzq+kyETvpjIAP3gvY1GfTDEHP4V1WliPVrwJc6L4su2c4dPIitoRnv8uCB/wACruYfhn4REUbHRI4phhgVmcsjdeGzk0PESg/ef4f8EPYxlt+Z8+po19JM0UWnXEjK2393CWBPscYP4VoL4L8StyvhzUfqbcj+dfTrIGRYnSOSPjIcZ6e1SRpGhOyPGfTgVLxsuiH9WXc+Wrjwn4gtLqK1n0a5jnlRnjjKjLheuOecZ6UW3hTWLm9a0ayFtOF3bLthDkexbAP519T+TFvEhjXzAMbsc/nTmVXG11DA9jyKPrsuwfVo9z5mk+HXiSDb5+lSIGbAZVEigepKZ4q/a/DtJrsWsmqwi4J2iKOMF84z90kH9K+ifLTOdtIY4y24xqWByDgZzUvGTZX1eKPFm+CrkII9Qd353/uFwpxkdWBqSz+CpkbM95JGgJVwUUMDgYIxkEfjXtGfajNZ/Wqvcr2FPseYJ8GNAjiZpLrUJG4AVZETH4laH+EnhqAv5sl0idQ0l6FwP++P516fwRzTZI45U2SRq6+jDIqfrFXuP2UOx5PJ8M/BiZ8zVZI89MXitj/x2qo+Fnhh2YLrdy2fu4A4/wDHK9iCqq7VQBfQcUjbWQqykqRgj1p/WKncPZQ7HgutfDTS9Nj3p4rsbcH7ovR5f15HX8q5/UPh3cQWDXv9pWk8CrvLRC4Ix6/6vGPfpX0c2nWajcltCGA+Xcg/n1qlc6OmoJIuo3M1xCwKi1icxRbSMbSFOW/E49q1jipdTN0V0PlQ6UxgZ1J8kHaWC5AqvHoavJsjMrv/AHETJ/IV9WPomnW9nHHaaRpsUUf3VeFBs7FskY6e1cPd/ELT9De8OnWQ+1xnEscdqEHXh2fA46Y+taqup7RuQ6bjvI8MuPDt9Gu5LS52990LDH6VSfS7heGQgjsOteo6h8VvFt8x8u8is0ySBbxDOPTLZrj9Q1q81G483Ubu5uZezTMWNbqHWat8zP2n8rucsbdkYqwII9RSElBxEpz3rf8APV/l2E+mcc1VkSAlswMGPek4JbMaqN7oyhJk/KVU+64p+J+pRTnuMmpZLZBkK35imojIOWJqEn1LuiPZK3y45PtinfY7rj92R9asLdPCuSMge1WIb9ZR9xh71SjF6NkuUlsikthdnJIUZ9TTv7On/ilQfjWqpV+hpyWazTKrMFLHaGZsAfU9hWnso2I9qzFNiVPMq59qb9jGCTMB/wABNeiQfDLVrm3e5tfsd5Eg+Zra5Ev4YUc/hSp8NNUXUbW2uza2i3K5illkLR7v7hKg4Y+/FZXpd0XefY8yeNlbA+b3FN2t6V7Dc/DHUNNBk1Df5CY3SWVsZ85OAFAwxPrxjpVKTwnokV0AfEttbRlhk3lqYX29zgnk1H7v+Yrmn1R5Xtb0P5U7y39K9ebwPoPkGf8A4TrRRGzfu88nHbPIIP4VzOrWGmWEnl2mswakw4JggdVH0ZuD+FVGMJaJ/gJzkt0cQsTscAGpRZyt0Q/lXQZ2dUIHbinGSMLnL5xwNvH860VKPcj2r7GANPmP8J5p/wDZk2OlbPmjuppDKP7pP0qvZQF7WRj/ANmTen604aVMfT861BIP7rCpFbnofzoVOAvaSMoaPJ3dRS/2Q3/PVfyroo5tP2bZbScMcfOs27vzxgdvrVsXfh+FpjHpl3cZcGE3Fxt2r6EKOfrzQ4RXQfPLucoNHPeYfgKX+xx3m/8AHa2QbM3Dl1nWIj5BGAxz9WI4q9p+oadbSw/aNMSWMf6xnJZjx6bgOv0+tPkj2Fzy7nMpo3mZ8uRnI67Uzj8qb/ZR7SA/hXcaj4j0uez8u3tp4JsFNyoqLjPBwGPPbByKq/2x4cW0MEegO8wUbZ3vmBB78BR39Kj3exV5dzkf7LlU8jAPc0f2ae7CultNctbeFEn0q1vpEBAa6mlZef8AYDAVlSzB5XcRbdxJ2oPlHsPaqUY9iXORQ/s4Y+9Sf2d/tCryuG7bfY0/61ShFi55GadObtzSHTn/ALprUMgUdD+FKz7VU8Hd/dbJH1pOMFuNTkZP9nSen60f2a/qPzrXe4SUjEKxYHQE8/mTTSyf3hQoRYe0kZX9mye35006dMP4Sa1HmjQZ+8fQUqXSbhw3HqvFS1TvYfPPcxzYzD+Bvyppsph1jb8q7PSTpGpXitq14tnChA2W8HLjv0GBXp2hWPw2v7029jYQzuiFt19dlc/RWPP5VnNwitmy4uUux89mBwcYP5UnlMD0NfQWv/C+x1EeZ4eWxtZiMtE128in028ED8a4fxV8P73wnaW89/c2UpnfYkUO4tn2yvNKEqc9E9Ry547o8zMZ9KTb7Cu0n8G64kCTPod+kbkBWMBOSeRgdf0rDn0t0kZHDI6nlHXaR+FV7NPZi9p3MbaP7tG0dx+VaD6e6+/0qBrZ1PQ0nTaKU0yoUGeCfpSFSDyN2fSrPkt6Gk8ph2NTylcxWXaflAAPocUhjGOKnaFW+8gP4UeXjhRU8rHzFbaR1oxVkx5/Ck8o0uUOYgxRg1P5RpyxH0zT5GHMQKhJ6VcggzyRn8KVEfsgP4VeijnxxHgflWsIGc5jfKRI93lDj1ppfAwqqB9KtCCRxhj+ZpDZH1Fbcr6GXMupTMr4xubHoOKZk/8A66vfYc9xR9gGPv8A6VPJIfNEouzOMEnb6A4FIrKinCAk9KvGwPZhTPsDeoo5ZD5olDy1xzkn3NGxcd/zq4bCQHPWmm0lH8NTyPsPnRV8sdqPLFTGFx/CaQoR1FLlHci2e5pQmOhp+KMc0WC4BRT1DZznv605EHepQoyOM1SRLZLtwMnpioXcE8HrUuWYgfdyOrU0Ak4Cqfwp86exNrEBGTSxhVbJTcPpVracgYi/OngMFOx0HrgUIGxykbMqm0fSguFTcV564zUXlysPvEg+opsyHywGUcelVzaE21IfMkOZHk5Y4VE6KPX3pot0IZ/LLehY9fyqQR5G45ApJLny0KqkjH1xtqNLXZpr0E8mGIlpERFX+JsAH8Kz7iZZpCUTAzwSMZ/CmSvJK+6TkjoOwplZSlfRGkY21YZoopcVBYUUuKMUxCU4UoWnBadguIFzUixMegpFQg5q9bfeAIH41cY3Ik7DIrV2PK4q7HaIo5GTU+Owq7pOmtq2qQWCziJ522qxjZ+fooJ/St+VRVzBycnYfpvh3VNVAOm6Vc3K7tm+OIlQfQt0Fdbb/CrVI7F73WdQsdIt0QuTK+84H04/U1sQfBnXIlUf8JHBEqneoiWTAb16jn3qFPhp43tLuOS11W1lMZIjkedjsB7hXU4/CueVdP4ZJGqpNfEmZd14C02ysPOHiSO9upYxJa2lpAWklU9OM5HWqCaVc6THZzX/AIYlHJ3IpkMswx6MrKuOOldYum+PfBcUlxHp+magJCXnnVi0sh/2yWViB6DiobD4vX0Upk1i1liUrhEtbdQp98uc5/MVKnUa095eo+WC30KEHjmxRDZ6P4fuVunBQCS4jOW/2gEGa5bxD4f1vSGivdYtVhF4S6shXbn0O3hfpXV618RNB1NhK/hOG9nXhZr1kXA+iDn86ZbfFPVY7Y21voGmvbRjPlsJJAq+nLHiqipx1jH1uxScXo5HKaN9kEiqkl1BqbNtgdY45InDcbWV8Y+uSPaurh174haReQ2M8eoOXJEEXlqoc/7JCkEe1Ra/d+MNfW21LUvDSnTrNTIIkgIixjksQ27AHuMYrm4vFWtQMy2WoT2sMjZSCOQsiegXcSR+dXZz1svzJvy9Wddqj+MvE+j/AGS88OWl3tfC3CKBNGx7nawwfXIx6ik07xDrtjdR6D4ig0kbVUBdYiCnZ2w4BBz6n0rW0a/+JkNlHu0mK8EhyLm9IL4PIzhxx+Fc54qudcsNfh1HxJptjP5ibPs42mMqOQoIJcevasFdvksvkaPT3rs0dY8POtxPqWnrZ2sxTdEdP1mGJfbC7Qce2eauaVd/ES3h2atJqkVqybUkjit3YE9yW7Y71ZvfCVzr3h4W8HgXTtNkKlraY3wRoicHJQA5z3BNW9Nv/EHgnwvFa6r4esXtLUlTcf2kihgeejZyfp+VTz3jbRv+vMrls76mHaS61qd2I9a8VWi2Ebk+RJfxwTsoPU7VI7dCcEH0rube60yBw1r4r05rSNSGtmeEDPGMMgBA9sGuKtvEuheJtUleL4cNqDcEvAqs24f3jgAD+dWLw6Don+k3fwv8jecqJ54iT/uoST+AFTKLejVvu/zHFrdP8ztB4r8LKDJJrWjkqOSs69fcnmtD/hJrCawN5DeafJDtJRheKAxHYEj1rhbDxHFdyNLbfCt3ttoVGS2QN79VA9K5zxAZtdt3fRfh5Lp86ytHLdQp+8RwRkfKBj0INQqN3Z/oV7SyLviT4qaxDfNBpf8AZiwNEG3RyfaCrH/aG0Z9ufrXn2qa1qOt3bXGpXLzseinhF+i9BTb/RtV0tA9/pd5aIf4poWVfzxiqG73rvp0oRV4nLOcpPU7Hw14yXShDaSado3lrwbi4sAxHuWX5j+Ves+HvFL6uAtiNIfafmEXmqcdvl2cfnXzkzkelQm4ZTkYB9RUVaEZalwqSR9a2d9dG5khv5tPHzHy1hlO7A65BNTPq2mKyq2pWalgSuZ05xwe/avkUXTM+58lum4sc1NtRl4VfyFYrB3+0aPENdD6+hmimyYpI5PdGDfyqbJ9K+QbeWa3cPbzPE4/ijcqfzFeg+Efilq+lMtleuNQt933p3JkX2Dk9PrUTwkkrxdyo4iLdme+5P0pR0qlpeqWur2Md3aSB43AJGeVPoau/jXGbi/jSYozSd6Bi0ZozRmgAPvTcDqAKdmkyaBCjNLTd1Iz7Rk9KBg5Cgsx+WsltSFxc+TFbT7c4ZwMY9zmrE2t2URdRIHkQZKKRmsd/GOkNO1qJFWQrkncB1+uKNROxzXjBNN1FW/tQX7RwNkRxQuBGP7zBev19K818WR6etvb31rfwXUdyCsUMKOnl7eN7EjDN2wcHkdetel6h4hj0+yuLiaa5jSJ+cNFIxGeDsYng8eleRapqFhcyXPkWUMjyzNL9p8toSCeyorlVUH8a78KnuctZoxPNY8L+ZqNsvw5LewxikeRIpMsxJ7gHOarSXchyEVUB9OtdbfcwSfQnEXzZGFUc4FPkliRfmcknsDmstnlOSXJ/GozuPcmo5ktkacl92TyuuSfM5PaogxIyDn6VHsb0NARu3FZ3ZdkS729TUiuc9TUGX6HBpy7+nbNNMGiYs32hNrEcZbmr8N66MCCVZTkMp5FZ3UA/dYdKkTcQD0rSLsRJJnTaV4p1XSJQ+n380IzkoG+U/h0rrNF8RaNeXpl1a/ureedgJTMGaNh7tvOPyArzWMyDpVtNzDMgH1pSown5Eqbiei+J/ifcTRzaVoEskNojFPtpc+ZKv8As91575ziub0zxZc2qXEeoxHVoZxzFdNu59dxBYfgRWECo6nA9hSeYOwNONCCjyidSTdzR1S40m6Eb2GktYy4AkInLof91SMj8WNZwyOAzbc9M8UhlPZT+NMLsfatElFWIbbHnJPJJ+ppMdgKZn1pRgdzTEG33Jpuw+9Sb+cYGKeOaLXC5Fs9KTafepuPSk/SnYLke2T1NIVduGPHtUuPelx70WC4wKewzShT36U+um8OeCtR1/y7keVHY78O7yDLDuAo5z+VTKUYq7Gk5OyOVZOOn50sdu87KkaNIx4CopJJ/CvY7nTPAXguCOTUrQXF8q5WF3Mjufdeg+pGKwNU+LlztA0LSLLTVBz5jRK7H6DAA/WsVWc/gj95o6aj8TODj0e+kYrHp147DqFt3JH6VsWngLxLd/MNJmt0/wCel2RCv5tio7nxz4rvvml1/UB7RyeUP/HcVjXFxc3rE3V3cTHuZZmcn8zV/vHtYXu+ZPrOiXWi3C291LavIecW9wsmPrjpWaUBPUn8alWKKMYAznt61NNby2rAXNtNAzDIEsZUke2etNLpIV+xVEY2jGcfWnBT0JOKXzk37VxuJ4HrSmQgldvzeh4prlWgasTgHinHIGaks7W51OXybG0nuZguWWFCzD3wMnFbR8KeJrkIToF9HhQoRLZwGx3+tJzQcrMHLADNOi2SSqkkoiUn723NdzoHw6uru6WPV9N1q2iz80ixIqge5JyR9BmvSdO+F/hK1Bc2E1zngC5lYgfQcVjPFQTsi40ZPU+fCApyxyB/dFWIoZbkARwSP/wCvpaDwd4Zg/1eh6eO3MCn+da0dtDAgSGJI0HRUUKB+VZPGdkWsP3Z8uXNhcaa68yKWXOVRk5/u8gEmtrQX8VWcgu9K0Se5uGOEuZ7VpWj/wB3dwPrjNfQ7oitv8mPdnrtGT+OKq3016FxZW8U1xjK+a21DyMgkDIOOnFRLFSatYpUEnucpZaT42dN2p+L/Idh9y2tUYj/AIEQP5VleJPAWr6yI5Dr8+oPFzGt6sYUE9fuj09q760lv7iAyz2kFux+6hkLH2JGBj6VNbwzxR/6bNBKcn51j8vA7DGSKxVWSd1+Rq4JqzPAJfh94pmuGFvpTsqHaWVRGre43kEj3xTG+HnixY97aNMfZZEJ/INXtU/jDQLaMi4vYXuA+w21m32iXOem2PPNV7jxFqTIJtP8MXc9qcfv2kUnB7+WpLH3HFbxxc3orGToRPn280+exnMF5ayQSgkFZFweDg/rVVrWNvavRfHCeKNd1OCCTTLiWOGPzI1t7GRNu71yWOeO+PpXMy+EfEsK5k0DUh9Ldj/KuyFSMopysc8oyTsjnDZR9yab9gTPB/Srl0JLK5a2uonhnUZaORdrD6g02LzLm4jgt1Mk0jBEjQZLMegAq/dtcV5FX7AufvD8qcLCIY5PvW9d+EvE1jGr3Oh6iisMgrCXx9ducfjWXPb3dpCJrm0vIo/78sDIv5kYqPaU+6K5ZkIt4F/gH404LCFYqq5HbHWovtAbGz5s+9I0rY+ZB9etU5K2hNnfUeJSGxsVVA59hU45j8zoh4DEEBvoe9S2OpSWE9jeJFY3DWzEpHLHkdc4cYG7noSTXoTfGCa6tY7STw7YM7sFfzJGeIDudoUkevf8a53Uqx1tdGihB7vU84YFVDMCFPQnofxpA6noyn8a9XlvvFU9hEIfB2n3unQlXgFo7bH9PkJyy89CorznxJ4lm12Qwy6TpentExDC2tBG5PTDE88fhR9aaWqX3g6K7/gZ4GSAMc+9Ky7WIyDjuDkVp2utaOiMuoeF7GYMuDJBNJC4OMZHzED8qq6hf6PcIgsNHuLMj7zfa2l/Qiq+s23iyPZdmVcEAHBwenvRiq26ZSdrkp23ipFkbIVgpPcg1rCrzdGiXGxJRikLgdaVWDDKnIrS6vYmzE2j0ppjU/wj8qkopgQmFT/CB+FRtbjsBVvY2cYpCnuR9BmpdhpspGHHUUCPkYq+IlI43Fz0BXIx61XeB9xIMRwP4SeKxdVXskaJOxt33hq1tYGnj8T6NdPtyIopH3N9Mr1rAER9z7V6Dq/wo12xIexkh1EYBKx/u3H4NwfwNcbdWN3p87xXlrNBKh2uJEIwacHCXW4SUl0sUvsyt1AH0oFqo/izU9JwK05I72M+ZkYhVemTSFMcgAmrEah5EVnCKzAF26KPWu9034a2eo4eLxdps0ZOD9mQs/5EipnKEF7xUYylsecbDwG2g9gK1Y/C+vXUcckWi38iPyjC2bDfpX0RoukaFosEdtZ21sSn8QiUtnuSeTn8a31lEgyBnPrXHLF9kdKw/dnzTJ8LPE4gjlbSNxlPCLKu9fqM8VhSeCtWDzJ/ZN6rwDMq+USUHqR1x719ZlkAy2BUXnRZ3L16ZxWf1mXVIv2K6M+OjpEpOEDE5x9w1E2nSqcZXj3r7J8yJecck54FUrmzsLs5msLSVhyDNCjEfmKaxEesQ9nLufIf9nz4ztB9waBaSDqh/CvqpvDOhmQXMmlaSZP75tV5/pVG98H+EtVPz6baCTubRWjb/wAdIH51axFPsyfZz7nzOtq390/lUy2bN0Fe/XXwp8MXEBS2mu7OU/dkEu8fiGrCi+D8VtdtLeaz9qtV58qJTE5H15FX9ZpJdSPZ1GzyNbL1xUqxxRcsRmvX38B+Fy0BtLe6lkiYLLG90Qjg/wATH29AVrWXQfD9iiw2mnWe0EFnA3sSP9o5P60fW4dEHsJPdniHzeX5gUlM43Y4B9M+tdX4I8YWHhCZ7ibRTd3Uny/aRPtZF9FUjA/PmvUtKs9DsrS5sLPR4Etbn/XR9fM475/Sq1h4D8MW9vfW6wSqLtdoedg7Qj0QkcfU80nioTTUkCoSi7xZam+LnhSO2hlW4uZHcAtEkBLR+zZwMj2JrjdU+LE+o6x5UL3NpowcHNsFW5kx2LMcKCeuOcd67K0+GnhKKzSFtPNyQOZ5ZW3t+RA/Ssm7+D2hzSSfZrzULXK7lGVkRT6cjP8AnrWcHh09blyVVnWafeaVNDHNDaW+1xkTT3ETn89zGn3J8PX95A15PplzNEGESzTxvsz1wpOOfpXJ6B4Hu/DkhhS80W7gYlv9M03Lg+z5z+BNJL4sstO1cWur6bps1iQwE+n2TlkYdmV16deQTWfIm/cdy+bT3jpz4Q8NzXcV9HpVqsig7TEoVWz6qOG/GmQ+F7bSvEEOp6PHBZbkaO8t44vknjPQ4HRge/Tk1nQ+PtJeNYtMstVlVQNqRae/T+Q49adaeNI9Wllt7PTZFkVQwju5TG5B6MERWO334qbVeo7wNLxboC+JPDVzYxSy28mfNQxD77Ln5WUY3A/4GvCLO61jwpcSGXT1i80eXLDf2gZHA6j5h/IivcPtfiS1g82axgvQqkulmTE5PX5Q2cjt2OfrXNeIfHV39jMEmha7p8jx7o/PgSSPOO4KtkHp29a2oTlFctrozqxT969mZvhT4l2Ol2sdlqGjpYWj5eOaxRth9fkJP5g/hS6r4l0/x20mgaLpSx39267L26ZYwQh3Z45JwDgGuLktH1G+jvL2w1NDdOWlW1tBGiEkbQmeMY69K9Tfw94c0i3GqWdheafe6dEzSNZzh3iwuT5o3YOR+fNaVFTg+ZbkQc5K3Q1dU0nxJJ4WistN1aNNU2L511IWVnYD+HacJn6EfnXhGu3uuX135Wu3V5LcW+VVLkkFPoP6969n8Jat4r1mW4bU7OS3tXIa3uHt1iVVIJBwW3PnjjH49qs+I/BljrNvdXVxHLe34QmAG4ZFyBwi9gD+WazpVFSlaSLnBzjeJL4O1TR/+Ebs4NEtbr7KgCsI4c4f+Ivgk5J7mku/Dci+LZfEEGJzNAsLwyEZQg/eUsDgew2/jXnviH4eL4Y8O/2umtyRXCgLJGylQ7H+FWU8HHrwcdq0vh3ZeJLvUjNqU90+lmBZFD3DBXLH5Su04yMHI9+aTpxs5xloCm7qMkesi32jHBA71g32ixS6lNenUbu3mEIiAtJPK2jJPOPvcnv07YqbVLQWemXN1Hc6nHtT52t52kZFByWVWyM/QZrxNvHWtJqEsEWrztbySlVuJVBkVOmcN8oOMZyKzp05STcWXOajoz21NCtxp7WtzJcXCSJtZpbh2Zx75NcF4h+FFnKrS6NttGAA8t5CYyfx5B98/hWJ4R8Ra9Lr1zZ6LFc3Fsx3BMiZY1HG879uc/7ygZ4Fel2/iloD9m1qwltLhUDyjaHUKSQGO3OAcHpu+tV+8pvRk3hNanjusfDXV9OthIs0Fy56xxBgRxk8ng/nXK3mg6nZw+dc2NzDD/z0kiZV/MjFfU1vc2V9bQXNs8csMibo5Exjae4rI1bTJNhlsrZZ5VBKLJgjJ+oIH5VpHFS2khOit0z5eaNl6ihcg12PiDw5qy6rKH0d7cykt5cTCQA99uAABz0xXKy28kLsjxshU4KsMEV1pp6owd1oyePJXLYqTI//AFVViLZ27sCrWK2Rm1qeo+CPGNhYaeluIb+fVdrARxQ/I3pkg+mMkiu40z4iWskkFvqlrLp8smMmeNkHPoSOfwrwvRNdutCuJJLe3t5xKArxzpuBA9PT8K7V77X5rqzmaXTdMgeUNNbwyuMqR3ViV/LHIrz69GKl6nTTqNo92BDAEHIIyKKzdFY/2VbbpkmGzh0YsCPqetaXFcJ1AeaTNLSYoAb3pQaDQD3xTAMioLuV0hyhjB6kydMfnWXq/ivSNDnjj1S4W1WT7jswIJ9CAcj6kYrAvfib4P8AmWW888AdEhZs9ehA/wA5qlCUtkJyit2Ld3VndQtO1vbOGyd0DEbvwbHp69utZWhx6F4hs7qbRtQRpEYma3volcIcddrcgf7pxWZefE/wlBHI1l4faeUkMrSxKBuAwMlskY9hXBa746vtcb5bDT7ZRwDFapvx/vkZ/LFdEKE3urGEqkSv4p0+407X5luhbl5VWZTb/cKsOMVz8kzbtqDGOpNSvJK7FmALHqTUJU53NyTXoJNRSOXS9yPyk53dSetMMPQgrip23HtioTk0mkUmxBau33dp/GmSQ+UxDuuQcZU5H51Iud+7njpioLliSW9eg9Kl2sUr3GlUHU/rTSYwOOarlznrTlcE4fI96z5jTlJd4HQUm+hY2f7nNSfZJfQfnTsxXQ0PUivimG3kUZIqSO0mk6AAepNUridiVJgKsx3CscGoV08qMvL+CjNSpCBOsUVu8jk4A6lvoKbnyK8iLKWiLOKQiui0rwdql8TLOscUKvtw3zEkdiA3ArfFj4W0qPbL9mlvFALpdTlGQ8ZAHfp1z3rGWNgtkUsPJnCw2dzcSLHDbSyO3QKhOamh0i+uriO3gt2kklLKgUjDFRlhnpx39K7+LW7C8tr6CCeztYZyQyJGWzxjgc9R6HFcjqmveINPSGGC5SSKMbU8uFRhP7rKBnH86xlj2tUi1hl3MubRtRgiEsthciJs4k8slTg4OGHHWqgXFaUfijV2lRby4eS0UqJLa3lMKMB2+WutOj+Gr7RoLmBGslldVLSzB5Mk4GACevYVdPHRl8SJlh2tmcDto5Ar0GfwR4cS4W3XxKYZ2yAsyqBkfl37VQ1D4b63aRiW1a3v4ycfuHww/A/0NdMcRSk7XMnSmuhxoBNOx61Yu7C80+Xyry1mt5MZ2yoVP6023hWd9huIYTngzMVH544rVySV76EWbdiHaPejFWruxlstpkaJ0bgPFKrqT+FXLS3srzThFb6dqU+pE48yJgYuvHG3PT3qfaRtzLVD5HezNHwlceGbO8iutbN400UhIiEaNAy443Z5zn+leuX+pxa34Zmbw7rNja3ksQ8p5JVUrntgn5SemccV5VB8OPELpHJcLa2sLnl5JwdvHcDP0qCP4e6/e6hJBZWaNbLnbeXP7lJPoDlv07VyVnRlK7l+p0U1USsonPalpuo6beMNThYTOSd7OH8w9yGBIaq4y3pgdq9C0v4T6+bkSzX+n2XlMGSSN2lOfUAAYx710mkeCtQ1DULiXxZaafeW6lkjmz5dw/PDEx8EH/aORWv1mCW9yPYyfQ8a5xxxVmw0+bUbxLaFoVd/45pBGij1LHgV7hcfDTwnKhA024h9Hiumz+uawm+FUdhexXmm6sjPE4dIdQgyhx2JU/0o+tQa00Yewkmangr4a22hiW61tLO9vnwI0270gA64z1YnvjjFaXjjRbX/AIRy9urfw3aapexxsyiXaDGMEl8k5OOuByav+HLrxFPHLFr9jBDLF0uoJQUuM9ML1XHc1LrVgL/w/qOj2sypLc27xqZckKWGMnvivPqTk5Xb1OqEUlZHl3gnwNpmqeFbjULPWYdYleB1awkhCRpOVwu/PzAjqCMflWhonws0+GziGr2d3cSOFSbzMNsz3jaOTgD1YH6Uz4W67dLb3XhOwGkNcadvY3LNIPPBc5baFBOOmSQelehnWryz1e10++s4njuI2YXls52Iy4yGRuQDnggms7uWrL5UjHj8AWtrqkWraTf3tlqEEflRvMqSRsMYG5QBkYPrWtp+oazBfQ6Xq0cNzJJkte20LQwgY4UZJy/sMfWtf7UhGC4Ue9VXuIHlUrhpOzqMEVTk3uK1tjTJH3SRUfyIcjgdfxrNlvzA8e52Ksdp781Xtr+0mFx9imef96xZihZQ3dQT7/lSsM2vMQMGBOcY68H8Kjku4wPvEN9Kyre8uSwMscgQjnzF2kfyq6SWZDvYLz17+1Owh7akgB+bv2FVxczyTO3MsZXb5ZUce+QM0/aiknDEDqM5H5VG+o+Wm9XV0Jx8vGKVhlqOS5IAEKxoe+egqbyIpVKSukyk52tg1hzaz5oGxWIA4weDRFq5UAJGpB6kk0COiht44FIhiSMEchABn8qZNI0XLqvlAfez0rHj1eYkALxnsKWW6aVSrgEdwWOf0pDNE39un3ZT/KnreREAiTr05rnZ24wkZHoc8H86h8wB8MCcdcUwOhkGnzeZ51vbvvGH3xKdw98jmqkOj6G42xaRp0eSCP8AR0HIOQeB2rKF0gJaIsuOvNINVLkL5hJBHQ8mgDqDFGox5oQkY3Bv8ao/2VD5cn2WZvNPJDuTHIf9pR1qtDI8wBcvk9AT0rQWQIcAcgcnNKwHzzq3gDxSniGZTosu25uG8loBuiAZiR8w4Ax64xXQ33wb1hDENO1DT7vKDzd7NGUbvjg5H6+1e0S3kaw5E23PYDJ/KsWfUmjYC3IiVjwWGS3+FbKtKKUY6EOlFu7PMH+C2uFRt1jTM/xKVk+X8cc1paL8HpIL+F9buLS+s3QiVY5JInibttx97PGc9K9Js7yaTbG2xzjkFuR+FaBk2nGADjPSpdWb3Y1Titkc6vw/8JosYGh22Y02KckFvckHJPuaoah8M/DNwd1vpVvDIev7yQA+/Bz+HFdUzs3QIcc5qCSWdTgKMdc1ncqxyP8AwqTwlKxxFqEZ9BcED8AQa5bWfgzfIVfR72IgA7kuHIJPqCBjGPWvUheuhOSC49FPFKNQnYNwp9Ao5o22FyrsfPZ8IeLVuHtm8PXrsh2lljyp+jdCPerkXw+8YMuV8PyAehlQH/0Kveo79m6qQcZKkcipY9TUqNyMvXg4zW6xNVdTN0IHzpqPhPxNpsTTXug30USjLOFDgD1O3NY/mKowcj8fxr6ieeG7hk+SUB42jZlYgqPw/pXH/wDCrvBrOHbT7psYBxcuB9ev9aqOLqJ62ZLw8eh4cGJ/iGKJGYdMj6Gvc/8AhWPg2XaBp91ARnlbp/m+uc1YtPhp4Ws2lkjtpJpCpCG6k81Yz/eCnhse+a6frcGtTP2ErngglmEZBzz79aYLm4U5jkHv0r23T/hyLTxT9ukk0q405hte3ayK5GOcKDtU9Dnn6V0svgXwu/zPoFjx/dQj+VZSqUuxUacz5sLu/UuG6HJ61c0zT5dQuPIS6s7VQMmS7mCKB9ep+gya97m+H3hCSMr/AGLGmf4o5HUj6fNWPd/Cbw7M2y2uL+zkY/KTIJFH4Ef1qoVqSVloKVKbJpPiVp8WvXOnXoiitoeFuoZjKr8DGMD/APVVmHUvD3i6C9SykjlmeHypjIu1whzggNwcHvXhX+FGSDkEj3BrR4OPRkrES6o9cuvCvhfQ9Fgk1jTnYxDY9ygb5ueGdVbP5V5rrkehpdf8SW5upIznImTAXnsep/KoZtW1C6tktrm+uJrdOkbyE8fjSbdMaN+byJwcpkK4Yeh6YPvzV06UoO8ncmc4y0SsWtD0WLV5hFJqtpZsx2qkgdnY+ygc/nXU2ngW8sZ1uLXU44Z1f91diRo/LGOWIKj8s1wO7yzvVipU5DZwR71cJ1a7hWV7md0mOFWSRmLD1OT0rPEycbNysh0UpfZuzvxqus6WJIrvxHCA0YaGUw5E3z9sHGTzyOw7V1dtqN1HbR3d/JIowSypwGOR0O4gjHevMNOsbS3jGp3usNNPalSILdPMyB0G5uAPwp+ta/qetTQrBMP7PPyxxSkElgM8kY/AVwVHFO6dzsje1mrHrn9sJcHFufqd9Na6jjDGa+hj4yxLdB+FePy3FwjGCS5M93LD8xjHy/THYj1ro/DmgyQxbrlbiEgbmMoKZBxg56EdeKkZ28+v2enqGN/bOCuN7ThQPfnrXPnxVHqbyCDXbFGVthVpNjZ9icDHvVC7s/BOtXFrp91q8VxK7nyYreT5ckDPQcH6ntWlL8PfCNlZrJd2bmP+KVS2D9eaNQIn0u5mth5d15xL7ldZC/6g9KihF/azoZZ2dsjDsSAT+gzSaLDpFxdeR4X1u+8yyJMkUsJkjIz0O7t9CKv3x1iPzftNjDLAAS4WQsremB1FMR0UcNz9nQoNxAHzMM54p6SXUaTAw5ZxgmN8EGvP4Nc1IEyaSriPsnnEIB6HcMZ/Gs6X4jajBdi3uD5bjOV8rBJ9OuD9QaTsM9KSwaVFDo34MFP0NJLpkWP3cMyMDyVIri7Xxpfs2+WTylwGAd1Ix65B/Tmuk07xpa3dz9ludiyd2XnnsOKAJNs9r+9ydqnB/d8U2O6EUcK2bRu43ZFySAM9xx17YBAxW19qi+7uYDosZODn0+tYurSWtg32u6byyqHYSfuk89eeaAOZ8R+N/EWkSJp9k1s+oS52CCxdxGO253cKP6dcVT8P+L/HkdveXWoW8F2sJw0lxdCKA98psjwQO53Vvaf4otNT/cT6lEgJwqyAbTjHTPY+9bsc1tco81pfRFf4FPKE46Z6YoAv6Rqt5d2cbXiwG4KjeYhtUn2BJOK0bm4unhKoVjcMMM6M6479D19K4WOeeCbDGAyNIXaK1m3qv0zyM9ce/etG38X6eW8mPUoGKffUyglTnGGB5BoA69L1F2qQ7EjJVWyV57jrj3pssNreOkwK+bG4dXUc5xjn1GK4y68c6L9q8sy3F3JkfurSHzBG2e5HQ+xNb1pfx3oV4fNtlYgbZcIVx7cjnpRcDoMtjgAVXLzCY4mBGMeWR/WmW16kqNtOCvBVjhh7EGq+p6wttp889nCt5cRrlYTL5aueP4iOnPXHY0hlmO5uRIytG5B+7tfrUM0izQywTRqYCNrRsoII9/aqkcqanDbpcxeTdSKGmiQgiIEdycbsfdyPXpUtrIJI5Fjt5wsZMb+YgVm2jHGMAgjBB/lQFi9ZGIWkS2xUQKuEC9AO2PapmVuy5PXg1Vt5V2EKx2qBks27B7g/T61yeufEzSdLhmW2lW61CMfLBtJQn3cHFVCEpu0UTJqK1Orik+1XEtld2FyiMMESxB4pB7MMj8Dg1g2uuXMs93H4ZsbSbSNPcwyosTQv5mPux4znnqSo6/jXlGo/EjxTqdlLaS6gsUMmQ3kRBGI9Nw5xWv4S+JFp4bsnsDo7LZgGRBDMWkeU4yWLcAcdhXV9VnGN7XMPbxbNLxP8TfEemL9li0/7BJJn99cQtvXtgZ+UkH+IZBry25uJby5murl2knmcySOerMeSa9Pk8b+I72zk1e5OhR6TIpRbC5lDM2Mjgctk/lx2rgL0Ramzz6ToclpDbx7pxHK8wX/aJP3RXTQio9LGNVuXUsaBp3iiRJbzQIb9fl2vJbEruHpnjd07VuaN4J1rxDrYbxJDqqRYw1w5VmyD0JZsgfQH6VDpEniy30BJNDOtmzKtzEq+Wr5529SR16YOfWs+G68YNOPLl1ZpVzIAQ+fc4NEuZ35Wl+YJRVr3PXNUs7PQNCttG0fVLbQppZkEE0yh1kIOXXDdSwB9K1IZdYtbJ/tE1teXQ6eVF5SkfTcf5ivNvD3xFjku1t/E9tA+xdi3BtwXVuh3Z6cegrtYfFOn6jCzaFqunvcRtjyL5jGHHseCPrgiuCVKcXqjrjOLWhiz/EeOLU7jR/Eej/ZkLbFuMblC9iQQSB7jNZniG08E2kCXc10108ykxLA25XK9mIyQee9bWseKNOW0ey8R6PLaSXKELKu2aCQ/7Mg/w4rxm58gXMv2eMxx7vlVmDEfiOtb0aKm77GNSo4q25HdGGW4d4IPJiY5WPeW2j0yetRjC9Ka8gXjpVZrnDcciu66RzpNmhHIyyLIhwyMGB9CK9f8Mwab4ttPNfU5BdRY82Py0Vx36gZI+leILd49R9K09E1sWGoRTldyKw8yLcVEi9xkVhiKaqR03RrSk4PyPqbRLEWNiIFuGmjVjtLDke2e9anSuV8C6npV/o6vp0m0PhzBJMHeP2I7V1Rry2rOx2p3Vxuao6lrOm6NA02oXsNuqoXw7gMwHoOp/Cpb27+xWslx5UsoQZ2RLuY/hXz74++IB8TRrZxQMtuk2/JY/NgYxtPHHXNaUqTqSsROagrnoV/8ZdDSWNbFZZ4ipMjtEVI9AAe/XrXN6r8ab6SOSLS7CODcoCTznLL6/KOPpXkbXZA4RQfeqzzuxyWz6V3LD0o+ZzupUfkat3fPeXct1dXDTXMrbpJXOWY+5qIToeAd30rL3Fj1qxFkdK3Uuxk4F/ZuHzdKvafbWcshF1c/Z4lH8KFi35dPrz9KzUkP19TT/tAHTP1q3qtCLanTy+FJJrm2OnTNNY3C7lnlTbs9QQOTj2HPpUEvhg/YBc2d5HfOFJeOCM5Ug4wCcbvqB1BFYUWoz2zCSC4nicAhSkhUgH0xV3T/ABXq2jTrNpt9PAwj2EOwl75JAYYH4D+dcMpYq9l+h0KNG1xJ7FI5jbx3Mc1wG2mJUO7Pp39cfWqVzZG3nkidQkkZKsAQRn6irur+LtX12YPe3O7HRUURqPXhQKz1k4yxzW9FVFf2juZ1OX7CsQlFVcswX61SucEcMPrmtMqr9RmoJbIPgAgegzWsloKMtdTHIyePzpwTParxsHHUgD1JoS2ycA5+lZezZpzoit38o4xwavou7rTVtAOtTJBtOcgCtYxaM5STHCNR/Dmn/pUltBcX83k2FtLdS4ztiXIA9SelS3Xh/XYgont4oVcElmmXA9if8KyqYmnDzHGlOQy0tpb648q3UPtIDfNjOT0zXXx2+k+HomuryyEdwY9u7LMBnsQScnr0rk47T+woPOe4t3nbcjQOrnHrnGOmfrxXP3uo3d9LvuJWLKNoUH5QPYdB+FeXWxDm7s64U1BWR21543ilLx52ADEflABV/AjrXJ3mq3+qyhZm89h0JAPFU7ezluRu+6n9496ueXFpqiQK0jNxnOKIUZzXPPSIpVEnaOrIhaXSDcGVcejYqPzpN24zNu6ZJOaSa8eU/O3A6KOlV9+7llOO2DWFV02/3d7eZcOa3vF9buRIXTzhzzk84P0qJby680zZQttC5Cgfl7+9Ut+ThafuO3jnI5rO7RVjWt3aZGfzGUk/MHO7Na+m6zf6acW902z+6JGGP1xXM2TJ5+152gDEYwCa6WzW1t5iWuLeVlGEZmDKfwA9R14rthUpcqvHX7jFxnfR6GtPqeva9o5gmnE9qkm4KfmYMP1H6da5eVJIp2SZWjkU84HIrei1sWbIsSPxxlcKPyH6VR1GYalcLeW8RZm+Vlb+I+1TOrJx5Y6LsVGKvd7kGkiKe4zcQpcIgLOhlMe4fXNemweKL6XTI47azgijQ/LDEoG1cdq8jkuJYpwfLKAdRjrW9puspgbD5TDgBW4x1rNSltJladEdK2v6rZ3tvfTRSERHa4Dgh1J7L2/+tXR23jO7u/8AVRJGDy3nSfMo7YwMfnXn0s91LA/l7CJs5OeD9Kjs45IIHifO1X3YAB57d/6U09Q1PVrTxTdNDGvyGbJUogLcdjWzaahfTqGeMoMZ3OQoP9f5V5ebqWx8icT71HIaEe/PTpx/KuX8U6rqOreI5mTz2hXCxKhI+Q9M46GqlJJArs9xuvFVpbRg2rLc3LA/IDtXjuO5rMm8R6/JdbY1tAgIMg2k8exryXTNO1NJ4S1xFbMjKDKxMhTOcBvT04rsv7M1KW2iiaaRoIRlZomJJY9VPUgexqVK47He2Wt+ZsjS/JnY5IaMceqkenvVTXNMvPE0Edpe63NDpwJ+121nEIWnHbLEkgd8d6zdMsITGkpmyAv3p7kdPTAA4rpIzaxxKxVCqjJKHK/X0qgJPDWmaP4esTp2kWvkRbtzFiWeQnuWPJrVnaOWJTs3fMNoZev4VURJnVfJ8ry+uCTn86Uuq4EkqRyIQxxLnH50IY6Qx5IdCfTB4H4VUnvIoFw4ctn5cLgH8ao6jqUXmuIAhOPmJk5NZLTTyqGNq7SnhQsvUenriq0JNuSYTmRw2BwcDHy+4plveStK0K7lC9Uj+XjGenrXJXuvR2FwowiTISrDcTgEd8dMfnVK18ZW1vcfZZXMc27AdhxuoEehC93AuRkbeMmlXUE2EKzMuPmQnOPcetckNUt7gnzJYg5OCsh2n/69Vbq5iimMcE7NKCP3ccmCPzoGdr/aiqHKN1PcjI/GqE99DLuYgjP8a4IP4CuSk1FlkCzNsP3VLMNxPoKZLqCllacFhk/OrBjjpyPrQB2ELQXMS7BEJR0C8Z/OrqKpBWTk4xye9cdb6iIwfsjEtwRk4P4+1XG1S9NwsbFUY9k5yPcUwOqVrRW2NgE/d5605hDFKfmG8j5R6/j61zcOo7wIjIEY4LO/yiibXY7e6W1jjErHuHyDj+tIZs3Fx5I2Fwo5IB7VWFwGBG4uOoYLxWHqGuK6K0MIVgM9Aa5kX13BNvEuDJ0eN+F/DtSuB18uqCKdl2PsA5ZxyD+FaluLWfTXFsC8jLuLEBWB7YP1FeexzXDzNNDLIxPLMz8g+v8A9atu1vZoYkDz7HZss4GGb647UrjOv0rUTMNkuBLGxSVR1Deo77T1BroIykh4JBIx1rgn1a2IDl1kmVcB2Xaw56gipINZ1UqwinXhvusNxx2P86YHaXNmJV2Bjk/xf4VHDYiPHXAPQDOa5v8AtvUoFEjeQ+4AYQFce49asf8ACYCAp9rtZUDHA2nrxSA6GKCFZd4jGR0PerLYLA9D/Osiw1eC+hM9uWKA4PmDHP8AWr32jeGCgZxkd8//AF6AI7qQxKXCBO5PUfj2qZHygcgDIz8p6/hWNcWV5PP5jr8hXAUO3PftxUq2ZVhMIntWjIH7t+G/CgC7NPbSxswyMHDYO0isx5I1n8sRsMdGwOfxrVYxTFd4AYcZOATVWeEF2jeNyp5yuD/+qgCs/khFd22xnksG/THpUkbQqoEcw3Y4LDAFQ+Q1wyhopY9vCqVHPuTV5Ejt2HmKoUgYJ7e1MBY9+0mXe2f4wc1OkSTHzEkcn2PFRXGo21svzOAQMcjk/SoYNUhMfmbZDFjPmbCF/WgDVWMBRtZsj15qOeXyxudQVHrxWLbeJdN1W4eKyunkKNsd4UYoG9N2Nufxq6ZJhOkIjkdG/wCWzYKr9aNtxbloXMfltKCQqrkgU0X6SomIbjYx5YpsAz3yae0CoM/LkdSvFVZtSiijKSMdo4PGaBk8rJFOjmRGhw3mS+YPk9OOntn6VJZN59rFcuYUgLBkk8/cGT1JxXITeLvDNnG9vNc/u4WA8oLwSO20HLe+a5LxbdeF9d0prvR7xLa8WTzJYmZ084em08Zz0wP51VODnJdiZyUUebQTpMMqee4xUxrm455IjlHKkjtVpNQmxgyEkn06CvVjVT3OJ0n0Nnt15peaijnjkQMHX35qT6VqYskhgSdyklwkC4+84JH6A1YmvZZ48SXLB0yFOz5SO3uDVSlrGth41V7xpTqunsO0axutSvpI+gKku4+UKe2frWxq9tYeHYI5fOiu5rhcKFyRGR1I5Gc1kRzSRK6xuyB/vbTjNQOqS/KRvKjGM9B/SuGeC9mm1L7zqjiebRoLTU7eMiW44ct8pwML6EdDkV6ZD4/trTwyo803d4ECxRSR4IPYtkdB9c15rYw/2ffLcSLDOV5VVdsKfcipr+7mv5GneRY2ZyxRUwBnryfp71FGjJ2c1oy6lWO0S7YQpdXsut389tbbWaZVyRLPIT/AF7A/QVvXnj6/tLpoNLe1ksQgCtcW2SSR82dxPeuBn1S1gyFdXb2rIudQnum+VdgPGfT6V0KjSp9bmPNUn5HqFt4/sIZYZrjT44bjdiaWxlEZI9R39eM4rrNO+JPh2QTCe71VkLjYJo1kyPqp4Hfmvn1F2jpUyO6kEMVI9Kn2cGXeS2PoUXPhHX76VdOv/Kv4h5h42xy47BW4ce1c7qHg83YLXssENsZHKFk2ckc4yfX3rymLUJ1wGIfByCw5Fb1x4n1jUraKOa9lk8lSoUt98Hru/vcetTPD6XjqCqtfEbcEmteH4bjRodPDGH96QygllPXIbgj9RVhJpLnw6b6x0uGaZlJYRQeXhc4JGGzn6cVW0Xxel/fWWm+KZElsowIorjJVofRmYdR2yecGtFtJdHj+yajEunm4fbFEzFSFYkyMwPQgDkYyD3rmaa0NU7mC3xF1pbEWs3l/IgXdIp3MB0PPf3rJTxFdiGaGWWdo549pUyZGe3BrtLu2sZ5JYr+WzuUiUbxCu2RPYEnDdvfvVadtLadtL1qyjAlj/wBHvFP3eBjPAAPA6VFn3GcQdQl8pUeQMqDCj0q/aXzQxMI7ohAOUDYxn0FZdxaSWeotbBlk2HGavWsMaztHLIsTAEMzAkL+P6Vldosuw392qSJBeSwzMMbovmdgeoXv+VQpY2iSk3CTyXTD710xLkgd844981pmwu9Lto54LeGZZ4ywlGXZQc4OByDx+tYxubm6uC8gaYqMMWBbA9OTRcLI2bDURBbFI3MSpyUVQAPWtbSvFkcEiR2t/G8CsSF449eDz19DXHLc26zYuI1kUfw5xitzT57CVjEY2llZP3Yx7e3UYq4zE0dkvjO7nk2xSQyBF4O8oC3tzXTafrN5O0JSFJn3ASSDcFjyDlhn72OOPc15tA1rZoJ3trdp/KLLEgVlUf3mLfxeg5qnB4z1GwuytrISs82Skh4iQdvXn1quYR7sdXP2mCEW7kYJkmOAqgd8ep/lWdNqOqxzyXFnClxCzYbay4IHTjpmvPpPHqXUYgkg2kjDPvJO7HBx3qra+JZ7PY5GwgABsZIbH1//AF07oDT8deMtSeCPRobeTTkZd84DYLg5woI/h7n1Nede1ep6dq2ieJWd9Z021a6CCITgZLDnoPUV5/Lod2Li4WAK0EbNskkcIXUHg4POa9DDV6cY8r0OSvTm5X3Mykqeezu7aJZZrWVIm6Sbcr+dQAgjiu5SUtUzmaa3DAznAz61NHcTxQyxRTSJHMAsiK5AcDkAjvUNGabEer/DG8xod1C0ciIk2UlkbKMSOQueAR/Wuu/tfy22vsyrYBJHzep9K8n8N+LLm2kt9PuTEbQ/u1cjb5f1x2/Wsfxlrgn1p47aYJCEXeUPDN9epx7142KThNt9T0aFpRSR6P4h/wCER8R38kbmQ3kQOZLZgAfct0PNeYahY21rqMkHnFoAu5HXD544HXHXisW2itppszTLFGo3E9SfYD1q5dagqIsQWIqBhDGPuj3qcPi3B+9sOrQUlpuW9Mhvbi/t7axLNMz5jTI27voeKXVdLuNJ1KazugBIjdVHDD1HtTNC1+Ox1e1kFvuVJQXYckj/ADzXefECKxvbFNQtb2NpIxl4SwLEY65yT6cV1LHRc720Mfqz5d9Ty67Vhg/w44qgxNbDqs0WARz071lzQMhORiuuWqujGD6MgL0gfBpGGKYaxbNbG1pPiK+0i6FzazyRzAYDocHHofUV3n/C5vFF1HGguLSEIRuKQYZ8e5JFeUA81Ksu3tmk4wm7yQ9Y/Ce4av8AF9b7w5JHbB7a/ZfLyDkZP8efb0rxuecu5YsefXrVU3Dt3wPQU3JJpwjGCtETvJ3kPLknrSdTQq5qVIuaq1xbDo0zVkBUHNQ79owoNRmTnk5rRNIhpsneXIx2pnmVCz5phOTgc1LkNRJTKSaVQzn5QTSwwFmBfgVdGMbVFUk3uJtLYrpE4PINTfKq8k7v0qaNM8kdKqzPGJCEbI7n3qrWRF7snDouCFJB9TUisxzgbvT2qva7XkO5c+matOWUZXhV5PvT5rK7E1rYb5O45c/hTwNpAVRt7mqBu5DKd+4qf4Vq/G29A20rnsaxpYmFWVolTpSgrsdUU4JgkCnBxU1GK6JLmTRmnZ3Oq8F6lb2GjT311qKwxRN88SNgs3/TT5fmHHTNc1r3i24v7qaKwSGKORm8xoVwJVIxyPT8M1nS6ekhP72RVJyVzxSwJbwkJEuSepNeQ8NJPlm0kdvtk1eKuZTyyMdrysxHBJPP51GqEnjP41avbYQPl4g8RPBPb2qup3OqId249x0/+tXDOnKEuV7mykpK6NKyuhhLcpyBjKnNTXUUlxCEChecnJzUixrHtEcagdzRcyiGEnBLHgBete2o8tFxqvRfI4G7zvBGW2nyZAKhPUlhSrpoZf8AXpx6HNSzeU0CsNwkHHPP61A6GRAuOMggg9K8mbpU5WSuvU7I88lvb5EUlmeVjlBGOG6VVhhuFP7xgR6Z5q9hVY87sDimhkZ8YJJ4A7Csea70RqlZalZoRIwZlwy9weatKePuFT/eFTragjKkJ7MelQyRBmVkLjnGOmaPUZovE7wrGkmVXnd359TVq3klgRoTKqofulVAJJ9zVSO1lQfMxG4Zw3Q4qOeeV2IkRW2jAYDBx/hTUhWJW3zMWvZWBwAu0bhVJ2QTYXoOQcYqwtzIg+SZcDjaygfyqYzmRcGOB/UqMNRzIOUdDcytsjknlaNeTlun1q5aakwlDvLIvGECr1x2JHUfWqNtdwoJC9oGkP3fnIwfpU32uSZjbCJUwcHsFJ6nHrTUkLlOwF0ZgsaTIhRdxaQjAGPQVz13eST6ncyRyxqZJjuYDIz/ADxx2FXbfR7iG0M8ckTAfNmIbiMcZPrWY+nxSzqpZ/Oc4VET7xz2Hc1Um2hJIma6K2vkPhpOqxwu21c/xYHGfY1b0pr65EQ/tOS3dW4kkk2gD+eKZd6VLpdosoVxLyGRk+YDsTjgdKj0zUZ7m8jMoj3Z4duMY5xipvrqWkdlb6Ja6NbG+1AwSu4ztWb5C3UYXpk963LHxQ0USusEMUJyBFvwqKOh4Gf0rgLjXWnfe26TBB+R/ukf5xmtCzNxJI9w1kkqtwHfIAz6lR/nNWmugrM6C+8a3CQ+TbpF5JHziMfeHsax0unubnM9rdQl/vPksh44znnNZ86ut2rz2sKMD8rKOjep6UlzZavLN5puIV3KT9/aB29Kq4jpjLdwwxiHyWRfuqIxk+5yciqkuq6mWEAmnD4DAQJke/JwB+dcxKbnTfKZpWfBwHikyfqcE4+lWRrl29uY3Vd7jBfb29GU9evNHMFmW76A3jBIoo/tHCvI0g+Z/dun86wp9Mgt5ZFvTOmwZzABIP8AvrjFTCTXr6J5YItiR/MC2I93b5SevSsQ3cktwVfzJZO4bLYqXIOU0o/s0kCpBdyNcE42sp6fjS3FwbU+UbiB2T0X5s98tWYClrOBcMdsqbgUyzHrjPSp5LaKO6aFuSyAjzCMtkcYo5tBcpMupoWXdO5wOFc8Z9vSrkeqWW0MyEc4Pz81h+YYz5RhfIBBIX/GqEkz7/QrwMdMUnNj5TvbfX7eFkcbdrHABPIP16VoN4tiZjJC7BxkEDBXHrn0rzP7S0YxjnHJY0NezeT5Xy7Ac4UYOaFUYuU7qTxJJcXKu21Wf5Sg7/lWh/wkCQwbRiST7wZEBGa87s1utQvBHAvzD7zZxhfr+NdtYeDbiO6827NxcQxEr5SrtVsd8k/d56mqUpMGjSs5dR1Q7rK0IyMgkfpn1qxJpeqxTGS/sflYfeXBZR9B6Vu6cuqaUiLEtnBa7W3SyvgA9gMHGDxzVlrC31zT5Jbt0LOmTLDciRUb2246VYWOAnnUSbIWKpnhtmTntxUtvqMwCsAXYdcHAH4V2dp4L0L7DFOyXDtHktKwYNL7letNt/DNhLJI9pKQy8hXPz8+oPelqM5eSacvukaKIkZIHNPiuGU7pJHO04JVB8o9a7fT/DOm2+ZLqFpZuwcUt7oGjtF5l1EAwb5UjfB9gDTFZnJzX10IEk+1MykZyRyPTp0qGPUAzCS4lBQn5lzkn61p3Gn6YkrW8dk6KpJkMcxZgfccVjz28VlOxjDgEbo9684z1x6UMaOv0PUIFaRo3GwqcRs23HuM/wBK2rvX7PT4mkmeSRlA3BRyvHp7V5vZXF7I0xhKrGfvMTtIH+fSsu78QwLG0UIeZgxO5jwTTjGUnaKFKSirs7mfx5vRY7QMH3Z3OcKR71ah8TSho4Z2Te5y37xfl56deteN3F1LcuTI3GeFHAFQYX0FdscE7e8zmeK10R7+fE2nxkJJJEzE4+WQEH8RxS2/izw9cFhHqdoCG5BkC4P44r5/wPQU5JHidXRirqchlOCDVfUl3F9ZfY+irnVQtvLNFG0qoCxCEE8DP4/hXk3ibxxfahI1tbwS2Cj5ZN7HzT/8TXHvdXEjDdPMxGcEyHjPWremaZPql0I48hAR5kp6IPX3Pt1qoYeFP3pu4p1pT0iVhcTB1fzZCw7lz+Vd3bXXiTXbFZZ73+xtLgjCiULhpCAO/U/y+tWNP8JaXp8qyv51xt+ZricbUiA6tgf1yazfE2urrH+j2ExXS7c4VlGC+O+PxrGtiINrlXzNKdGSWpo6X4u0TwzpstpYvdXlwzl2laLywWPU9efpVOb4u3MC7NmG5HloBgDt2615Zf3U8srQs7LEjcR5wM+p96ojg8cU3She71BSlY9aPxQkmsfPCTCeByyIGOH3DBzXH6x401DWLlpZ/wB2p6RxsQB/jWNauq27MWyfQ1QZiWJJrT2cIapE80paMtSajPJkZAz6VLBqLqQH+b61nUveqU5Jg4RsJIjRuVYEMOopAatzNazyGVrqNdw4UAk1GTp0TDM8sg77Ux+HJqGknuUm2tiNSauxGQKv7xuv3c1ENS02M4jglxjq5Gf0qNtbCqRFbIvPpmqU4R3ZLjJ9DetvNnVtsbttXcxC8AepqTMKgmWcIQcYAz/WuVn1m+uSd9w/pgHHHpx2qmXkbq5oeJ7CWH7nXPqFkiqDIm4ZySxOfTgelQz+IYDGkbStIsfCIq4VfoK5YBe9HHasva63tr95oqSta5sS687ZEMWPc1nzXM90f38zEf3RwBUIbHajfzSlUlLdlRhGOyJUiiPRsH3p5XacZB+lQBx/d/Wnhh2zikmhtMlGaeD2qNTnvT+hq0SyZSKnjlKuGBwRVQGlDGtFKxDVzVkaO4t95kWNlPJxxVux1K/0Nknsr9o45MK4HK4yD0PbisdJP1GD7ir9rLGYRBJhlHTd/KlKmqjITcNjQKeRFdTWkspt7dirNtyG388ddvGP8axJr65mAjlZpNuQNxPA9BmtOC6l0hyiFXs5ziSN13bc9x+X0rTuvDSXMYn0mWG9Lxh3jWTLgkZIHPOK82rTlB8rOqElJXRz9pcRXEu24JWVsBZ+4P8Atev1rpfPvNOsYbmW2gupWQxwvHhgR/ewBye2TXNXmn3OlXIjnhMUoAJV1II/PvXTaZ4m/dpbSRrFKyFS6nb5nHRh05PfrWSSluXe2w2bxNqEsFqZEQMqsElZd2F7ABfpjJqWTThdaYk5Oy63Hz3yqqgPTA75HrVnU9I06W3h+xubaYKSomOY7j2BA6847fTvVPQNS+xRzt9ht5ZGGwLdZcIfp0yOx/nUTvDcuK5mYl5HeyxiBIkKRA5Kp8zgd2qoDLACc/ORgDPJ/wA4rubfVozrMF3PZw7Vb98icKw+n9OhrT1uz0X7NFeWe4yXKEhNgC8HnjPH6VmpvctwR5l5zkr8zAg8h84phuZSxZUGSeQK6Roo8jdHjnODzg1Qu9P+0SM+8dP7vP4c4o9rfcTpGXHeTIOW5zkZ6irkOpxKz/a2eXC/Jg5FU3sTk4BGeAGOSB+FRPB5UXyqwwec1akZ2dy3ca7cTDyo1WBB1Mbcn05qul1M6CL7WyITkBnIFUCxz0P86fGiOhJkw3oaoLnoPhXWljsbixv5o5ohwqyOcFe/PORntTdYk8NssaWzJYMRv3xuZS3X5cDgdveuDVp7eXELMDjG5aUIBy5OTzn1q41JQ+FicVLc3EniIYOJs4ISQEbWYdiPQ0SsqRFmG4LzgVl/amURn5WCH7p7/Uf1qYXvm7gQoB4xnFdlDF6ONR/M56lDVOJHPfySLhcIp7A5JqopWQklsn170+eLytuWXB6etQGQgcnCj2xXFOcpu8nc6IxUVZFu2mSKXEqho88gDt/jWjDLphl3TRyoAMIUx1Hfn1rDV1C9TUr3RZFjIGz88VKGTJdy6fd+fBK8RHRkPI9q0rDU7JYJLaSCS6LksXDmPPBA4Ix3rAZlZjz07Uu/jbkY78c0Bc1EuBEzJGzMOysvX8qmS4inPkyLtYDOCcVhjOeGI/GrUdnK0bSOuExnc9dVHEVY6LVGNSnB6vQ020+JumRWfPbeUxByfwrUtB/oiAHdgcH1p0sKzJgj6GvXUVOKdjjUnGVmc83BpwYY7VNc2zIxwMj1FVGVlGSOK52nFnQmmTbgaepFVA5HtUiupGCSDSUgcS2pwanzhOvas7fg/eNL5zf3jVqdiXG5bZuKj3c+lRBy3Vx+VKQefmzijmuFhWcFsZpwnEY+X+VV84NHDd8VPMx2RfguHkcZIxVoTonT5iPSsgFoSMEEHioHupN/JOB2qva8q1J9nd6GxJdSyfJnr/CtItrcMf8AVke5NRaVMjT8/exxmtQXC+btz7VrG0ldsiV4uyQ2NI7QDe2Xb0FMF1JIcCMdelS3CSPtCIpHc55FJHbFcF25z2rjrvEyqclNe7/XcceTlvLcY9sVy0eFAH4062mbJRzu9DSXe7K44567utMGE+Y9fauOvU9hXvS0/U2pr2kPfL1FQxktjaTg+1MnkAQqoIz3FeksbD2XtHp5HO6MublROxAU59KqRbVfPQnpxmoWcooMjEK3ftTx5cjLjcSegBAz+deZXxjqyjJRtY6qdHlTV9y0yI4YON/64pA1vGu5dmB3Uc1HJEQMowwBkHOMVEN00wRxlScgDvShjJR1UVcboJ6NllLpHbGCOMjNQzSrKQDgAcdeanwmOQQVGOOD+VN2xvIPLAGDycc1NXGVakOSWxUaEIu6KbPtGxSST2ApgBye+Owq7PAY5cEOMjp2NVi+xMZYjOApGa5ka2IYogznIAbrjNSvCqYZWAbsFFCOI8FhgdeRmp/L+UAqD3xmi40iqjZKg444PPWtJIYyAshXcBw3pVHbjr19cVIvselO4WJDvVwGlMiqeMk4/KnQO0uMsWBPIIA3VERuUjv35pysc5wOPai47EkpMYMS+WAxG9cf55pI2jjkZThXU8jbwf8ACl2rLwqc9Tk0ott3JALDkcUXQWZo2VxYxzbLmDzcnkKwAPvkd6WaCG4m80pswfmBbgj3qgiJGQwi+cdweKtWvmtmJVBHYt2FPmQcrL9re/YdRPlq10pXYI1faMHHQinnVba0vZJRGZpWHyiM/LEe+Cfv/wD1qr+W6B2OxZXUqWPYH09D71UECr0IYHvTlO2iCMO4sxm1F3k83Zn7zSSEsfqTSHS2iT9ywfPOTjn3FLj5chVIXnBXNacF9EqRkvtwMEbeh9vUVncvlMb7JJbukjRgEYYZH8619M1aaxnDl7hR3VXypH0PT8KfPqaMMJbhj/eboT9KjurW3l8k2LSSzSYDRBB8p9Bg896d7bBbubj+J7bySykO5OQvl85+tUZ9TmuSVlRRLjGVk5ZfQdqxpoTHM8bKGdSQSD3pUZg6sUU47ihzb3DlLs1zYxosX2WVJersSSR9BUEOp2Rvn81W2OCCXlwzZ9e+D+dULi5kuZMupeQn5mL5wKEs5bsyR28byuoyQoyVHrTUmDSN1r6wnkZbaRrGfaI4jC/BUcgZ7jPas+O5vDZvcefFO0MhEsLIPMj9X46is94buPNmix+a74y5CkEdsngZxWhp/h251KCedZreKeIN5lsSWbg45xn/APVWsbszejM69la8TJKrJ1RySB+lGkefLc7f9GEyj5XnY9fripLi3d3aGK5aYn5USKMIp/Dr/L60kaTKiosf2YrktJCzByO+STg9O9Sn3G0+g6+0PxBatLdvFmAv80qMCnPfPasnarFfMcAjsTjJ9q6PQNQmGoRwS61dGxDN+43EO2704K8nHeuu8QXfh+Sd47mNorWNY4JYvs2WLn7vIxnHocetVZNXJ1PKZrZl/egHnncKjSLzGO1TgcmugvLdLUmPS7lp7VgxCzsgOB6EE/rWHKl0dgSEIjE7m3qzHHfAP86mw7F+w1SbQrK8uLSUC9vI/s9usZBdG3AlsdhjjPqeK6641C2ksbSzuBNcLawYu7mS4ZhJckZC43YIB64HQVwMdtFblpWTzJGH33OSPpVoT7jgHPfOKrnsrIFG71OsvfGMxCxmO3uNuNqGPCqP7oBBx+GKz7PxFqNjI0cc3lwl97ovIHtnqcflWIkRncbPzp0tuqfKVJb1qedl8iOo1Txmbi3EFrcNFEfQlXJ9Wx0FJH4k02zt45zcXd7ekfcEjBU/4EcVyDREKWxUG1ieKfOxcqO3X4i+IU+dL3MS8LCyDp6ZpkPjzWDfI8zxsR82XQf171ya7wpGTU0QlKsFG4Y5HtRzsORHo0HjPTJYElaGITYPneWAGLeuD1zVSXxPd3kyppdnG8jDChI9zNz1z6ewrz+e4cyAnKsBgbePzrqPD3iW10+Bj9mkE6J88pcBfbj+lWp3IlGwzU59UliMdydkQYp5UbfKT15x1rPS3kkgaZQPKU4JLAfp3pz64ZhKWCvIzDadu3IHTI655qvNqbXDMzKEVeQhHA/lXRTxjpqyRjPDqbu2KAGOARk+9QNIUYr6UtrNPZyNMqffOdvXHFNlXcFI54616NGvKo2mrWOSdNQSadxRLnk0/cDUAWnV0XMrImHUV6V8NDbNZ3inb58cocqwzuUjA/XNeZq1X9Mu5ba8SWG4MHBDsCRlccjjrWOJTlSdjSi7VFc6Pxtq93fas0JZobKIlQIxlX+pz61x/iDXYb4vLGzwXIVd5QABiOpOAOeB2qLX9YD37SIBHG2CyZOMgYz7E4rkppjM+SAFzkAV58afJ70tztcubRbE6Tzea07oJAxyQ+efxq40lhKoMMrxyY5SQZGfrWdHcui7T8y+hqbyFnjMobjNbRlppqRJdyzh1QgZw3fsaYPTvVeOa4tyRHKenIPIq1FqyiIx3FpDJzneoww/EdqpTj10JcX0FXy/49wH+z3qVIY5RiNyrZ4D45qM3OnMoOZVYnkDoKt2x08fvPtBIHUMMGtI2b3RErpHPcelH4UUVxHSFFFFABRmiigApaSigBc0u4YptFO4Dgaerc1FSg00xWLCtT99VwT608GrUiWibPpT1NQA04E1aZNi0hz3qeNttVEPNWo8EZ9K1izOSJ8pJhZVO0dCpwV+lIkVxpzC4t5WIzw6PtZaj3VctwJoZI35UqQRROlGp6k8ziOv9Surwq1w6SPLjMjg7u2M+/8Ak1UeGSNS5XhCAcf41UUNtRcEhzgc9+1dfaItpaJ5mFTB3CQj8a8SpNbo76cW1qYI1Oc2jWucoSDtJ5BBzke/JrSsb77RK0s0xaRsFt3H/wCuqGqGG8USwxvGy5wpX7/+FMjiLRxAEkD7wC8rnt7+tJvmjqNe69Dpmi4yigZ55PFNToSG3ZOaoRXNwjRLLMAQfmTbnIFaH7tPmJ3g85HB+lc7TN7iFhgkjHPPNQPhmB7DsKn3LKp2LwOwqEoByetCQ7laQLnlcEdXIH5VVuFDxFVAyepNXihbpyPQVDLHtyAOQKpEM5ySJlYgEcHpUJTnBrXltiXzyfXNVJ7MyZ+ZlHbArZNGNim0xtyD5xXH8A5zQtx5uWDZ55HSnf2fFsI+bd13NVRIY/NCpMzPnjavFWuVoRdDcZqYINg+7uz1J6+1VGljWQoSy/7wxUkUysCY5DyMMCKmzQD2GACSOffNRE8+oqVY/MPBzUv2R2ZQFx7mlewWKpXjIweORUsVt5ke93WNP7x7/QVLJbxxNljuI9+M01ZMt84+X6cfhVKS3sJpk0ZtI12raNMR1cjqauCzVgsiQRAEZKSJgj8RWcu7f+7JPsK1Fvo8fNhee/GK78NVhJWqadtDmqxkvhHpaW6sCIUDdelUb+5EkgjX7icn3NXkn86XCxkxdA/Y08QxDjy0x2+WuupT9rDlpaIxjLkleepnx6lIFVSit6nOK01+Zcjoai+yRZY7cE9COMVJDF5MQTcWx3NXQjWi7VHdE1HB6x0KtzCxPC8e1VPsksvyYIU9c1rsyou5jgDuaovqEMRZuWJPArWSj1FGUuhk3Vo0DYJqlnB61fvdTFycCMKo6HPNZ5OTxXFU5b+6dcOa3vD95pwYetRjg85p4XI+tSrlMkRuasJ83GeahRDmrCRk/WtYpmcrDJE/WoG471eZRtqvLGOwpyiKLK5bseRUTjI9/WnupB6UwAYPPPpWL7GqGpIyHIJFa9ldQ+XmXO5ffrWQy4+tJnC/xZohNwYpRUkddFeQS/dcDHY8VPmuMDumCfwqxFqN1E2VlbHoTxXTHErqjB4fszppHhjYF/vdRxmgzLuBUBl74HIqnZ6nFdYjlULIfXoaveWq5wQoPr0rDEyqwg50rW9NQpwi5cs9wUuy+ZgFQeQKWeHzYTIZAj8YCnr+HaqssqD5CpKqeOT1pBKpfg8gdD09a8Sc5TfNJ3Z2rliuVIgKJG+NwYAbiCe1KArhjgnd0z29qktrY3KvNM/lwA4ZgMlj1wB3P6VKtvAuXls70r2Ukc/UjpngdOOapIEmUwjRYIIbHAGelWIyJj5Z2Ke25eTUX2WX7OT9nijOMksxLflnFV7ZQJd54ZTnnqKbi0rjT1Ls6zrGu1dyj+Jvvf8A6qYslxKCGAPsatRyrIDk5+vamSfIjMBUFFX7SUYJIGQ+ueKsg7ueoPcGqe6OZCJmG49CKmslPzQg7lHIbsPamJEuFPB5pctnsRnv1qTyuduQT9ak8lcVpCjUlFzitEJzjF8repVK5/8Ar0uNp6ipWiGflb8ab5RB9Rij2MuT2nQPaR5uXqNAPXFWEj3A4XJHXFNVVBxVqIgLheMelZM1SGwwDoOGbrmrIsy6bgVO3r83SlVIxH5jMQFGeKq/2oMgQxGT1boKIwnN2irjc4wV2WRaFcYIAPv1qZYHU5U4JHAWi0lv7l1dYPkJwGEfy/St2fTLi0kI27XGCTGwYHPbI/lSqQlTdpCp1YVPhME27spbBY9/WlEIwQAxWtmY+XveQE8AZB5/Lr7URWtyskh8kOkbbZkz8yEdsetRc0bS0Mp7QvDuWJgvc4/rTfJREHfA6j3rdmjaZVcELGR/FxtB7VXutM6yIcL35yD9DU3KMdoBtDBDjsc1aic7FCx5C96tQxyQsWQg5GCCM5qHEiKQGAZjTUgsM2Ru+4yIBn0yfxqMWvzuxkVFB4Ld6WCNZr4QYERAwZJFwGPoPU1Lc27wRBRMjHB4OQPwq35kKSexVkiiSMqYgxJ+93BqK0uZdIv4r20MazjKgyqCOfb1FOTfIhXyizgf8s1J5/wp1u6yQsJ4fLZhjBHQ0Jtag7PQ6qBtGv7Ytqqx3EkhHnmBHjJYnqR0J9x6Vstp+nWUMOpaVbrdbkdGeMAZGOh7574zXK2Fv5kI8rFsgHBLEl8d8Z7/AEq7Jb+TBG8bSRyRkFZVfBLeoPrWntujJ5OxUu4IpFlN4P3jN+92tswDwRgdD7ipUs7N7GNVtViiQbIxHLv3AdNxIBz69alkv21ESNdxRfaVUZlUqhcjjLA9cjr7gGokZ7cMqSboyM4xz+VZSb6FovXui2cWlW5j1ZbmaMZij8rLwseRgjnr65rlbxJGLrcNJIxfc29iSSe/PeughvHgYiPCu4G50Az69qpmwaaOTy3ikJPRs7ge5HvTlNPcErHMzWA2nYARnHBzUYtWiUqwb2GK6WHS7uBj5hbb7r0qQWRbC569+9Tz2KscLJazyuWChVPTB/zirsOiNJtLDAPTmut/svsq5z69DSjT2XG4so/2ar2ovZmKmmiBMJllxyegpz2nm4eQbR7Cr11EbVgNp56EnNBdpLfy2i+U9Q3elzBYyLmCKLgHr0z3rMaMNKShzn2rUurfgjftBp1nYcZ5GeMkVSloKxllcJggc9KYrrCoG4jHeta5tUC5YkMOq45FY11HuOAVBXkknpTTuQ7jJmWUhl5LH8qSIXdtP5kMvlyYI3pzgHrzVqFkSJREgfPUkUlzJIkeGIQEcDHNO+otyo0qWyMQC0h6E8/nTC8l0UV5S/pkdP8A61VctNLtALHrWjbIFG1ACxHzN6114bDurLyMKtVQRNc7m8lUJyW69qcqmGDa7AgdD04oaJmaMK+3aCffP09Kz7wzrKwYna3TB4r11FKpKdjgTvFRLZlT+8PzqJ7uJcjOSPSqKQyzfdHA7npUjW/kR7pmRee7YFPnY+RFqKYzN3CA49zUGo6v9n/0aIZZepHQVnzao5ysChOo3DoPpWf755NYzr6WibQo63kLJI8rl5GLNTaVjk0lcr3Nwqe3kwTGxAQ+tQUUJ2dwauPOY32q2cd8U0HnNSTYYK4IORhsetRU3owQpOe1Hy+lJRSuAUUUUgCiiigAooooAKKKKACiiigAoopcD1pgPA96kGMVFx6il3e4q07E2JgKcKiVx3Ip4cHoR+dUmhNEoqdGI4Bqt5ijqyn6GnrPGOp/IVopIhploNntVm2k8qG5Y9krPFzHz1/Krtm4ZZMc7kI29ye1aKV07Gcl3K0DO1zbnAxGBgkda6NrBbhAwnLA9R94n2FYtms8Nu067dsbDecZY5/pXV6LFFcwq+N25SUROCT7mvn5s9KmtCpLYxzxCJSI5tvDeo9Kfa2jWp+aMYJ5brir00I3BEyMnpmtXSbGwmtbx5cyTxxHyxz/AJJ9qzTZo0jnnut9xsjhD5P3sYP6VpIo+yNbMY5dpyGIJI+mev6VRgLwaiSkasRydwxj/Crs+ovFE0REfn7vlCtlRVNtpIlJbleSOEIIzJh8YbHX61UjVzGUmlaWQMcEDHHvSpdvPJGrLkENtbbj04+nNTMhUkDPTvSs1uPcg2Mn86YwJbdk5PtU7hsZJ/Km5BUDOeKQWKvkl2JYVBPbupBUnB/Src9wQ+1ccVGj+afmXqPrQmyXbYzrpfJ0+aUqCwQnkVm6RCslsWzhtxDE9a6qS2jkgZZQMEHK4zxVOGyggiCRlRGOgAq1P3bCcHcxr3SjchTExaQEALwBjvzT5lsYMGIxPIRtAD8mr97DFJFtIYIeDtYjNUhbwxriJFT6dTVKV1qZvRlcx3G8Yjt15zkMTipXWQsDnC/WpI42J4Py09YC8oTd8xGelUryaitxNpK7Km0ySBQOp71pJp8YH7wl/boKUWsERBkfB7fNipWuoIxzID9Oa9bC4RQ1qpXOOrWctIDJ7UyRLHDJ5Sg/MB3FNSKzhAzsJHduao32phxsj4QdfU1lvds3et5ulGXNa7JjCclZs6CXVLeLIGWx+ArPk1eRmwCFHsKx2kJpmT61nLEyexpGhFGoNRkSTcGOfWta11JJVw5wfX1rlcmnxyMh4bFKGIaeo5UU0dHqNxHJFsjcHBySKw5JCvvT1uU2bSfzqGQBuVORTqT5tUEIcuhFnJp0cjrwpwKYRikBI6Vz3szWxbGGGSKkXaOehqurnFSR7mPPStkyGi0g5zVlVwuc9aZbwnaOOKsFSAeOtdEVoYSZXZhnpz2qJiCMZIqeWMqAT1PFU33A8dO5qZaFR1Gy/KNwx+HeoAqj5pGxzkAVIZVRc4yw9aqMWdj3rnk0bRQ+STc/BO3sM0+FZLl/LjfHH8RqDjHvTo2aNw4GcVCeupTWmhp2emKzubksQgyVXvTzZWZYKkc3J4w+eKm0mQzGR3OFCncPWr9hEpAlaEttbgAVGKqezUeTqTTi5ydymNKWMhlhnUDqHXOatOr+TEvlyRICfm28V0TH+0VKQxYUrh/NII/ACqsT/YGkieH5UxhByG9x6GuJ4ypKLh3N/q8bpmQWtTESC29V6beD+VNEMUeWlkG4jgL2qzdyLKdiwRZOThR0/Gs+4SWM7pOp4xnp+FdeHwWl6qMKlVXtAc126xrFGflX7pI5A9KnjEjoX86QS9wGzmqUK+bOqk4BPNWrjbb7gqkEnP1rf6vRjaDW/wB5m6k3quhajnYsFuGGTwGx/Oklto5DkrggYyOtUFvwzhJF6dGB6VfgnT5Ub5kJ4cHJH1qFF0oOFRc0PLoP4pc0dGUpIpIzuRz170GR3jYNnae9Xh5YyVOVJwVNQImJ2RDlsHaCM1y4mgqVnHZmtKbnoxYpIgBmMg47DIqYSgn5VbHb5cVG9tEJhseUN6qcH6GrS+UIDHJEZGc/Lu/+tWToVFHma0NFUi3yp6laS4VHICfMOCagNxIGyGOasNA0su1U3N069TU8WiXshDOgiQ+nUfXvXpvG0KUeWPQ5Vh6k3dozFkkViQWyTmjezHlm+oOK2pNKeMMWkye3HH61TbTbksd0SqfqRms4YzDyjyyVl6Fyw9VO6KsG4NmSX5exKk/njkVfO2I7oZo7hMclDyv1B5po0q4CEBkBIxgHJqUaUPLbYMSAYyxyDXBXdHm/d7HRSjUt7yIfME8PlYZVPJB4zThiMBQBx2xxT0iMXybDDI4I2jDK2P5U/wCyr9nMrSKMEKFwc11ZfXjCfI+phiabkuZdDptF1C1azit98aOu7MT5wfdaux206uqxu3zEnjr+NcdYuUuVxKIg2VLn+EEV2WlQ+QgjmnWVgAVPI49yawx+HjSneL3NcLWc42a2J7u1gjsH3xKZFKyKH/iZTn+lJplw1zHct5flvM5cyD3xnr3qwIrea7e72YmeEQPlzgoCSBjp361H9ihjmDxs0Z/uqflP4VwOVtjr5U9WiNkijDptDburP1NUZEZF2x4RW4KrwDWrMUSIszbVHXjNZF4zsmY9g/66AgfmKkrQrHcuR1A/u9R/Q1HuUA7nK7uQQOTSNI5R1YopIIwr5YE/560so1C5ChFudikINu7AIGcD0Pfr3q4xuS5WIpJZhExCM0atzlOBVSSVWCF7i13P92Ezr5h+i5z+db9vDKQH1S6nt3IA2yDLMucZA65+tai3NpanNjaI1wvIu5Y1De/GOK1UYrcltvY5yf8AtD7Mtq0F55IXCoFOPwx0p9vBfIpWeBlhBw4YqJFI9iCT+VdDZrqfkqFkLwySF5FEhGSfr/SpW0VTOsrSxIgX/VMm/B74NK6FqcvcRy2awz28sdxGe4UowPpwSOPwqSO4vbyM4j3An7sjAYrppdJtHGFRAuMNtTBb6kU+LTyEYLIX6ACQDAH4Cpumx6nKNaySkbrdVB4bEmc/SniwmtvnUEjOAD978Oxrobm0gVflkDtnsMCodj/LhUUjjduNOyGY6rcIMDkjpnNSi4YjMkTE9AoXv61eiURSFZZFGem4cY7808Kc7kj247rzketLQaKK3LSPvhQgf3GJx+VOjuZixBi247KM5q7lZJvujGeCVqQRbGJjVPMIyOOPrWd0VZkIbI/eSNg/w4INPaTzcHjZ0qnLc3ZTc91Fk9VUYx+NZN1eXShgsiBe3zZJNFrjubE8cDHdlQfVjzWJfzSAZLoQDgZNVpLt2jLSMM4ySTWTLJcXA3p88YOBg4yfxq4xJcjchsklHnNMpyMYc81O8q26qEZAR0wawEnnggCTKyjGQSc0z7Yxg3Irbm4+ar9nK1+hDqRvYnu7rfK3OSOoFZMj+ZLlm+70XsfamyLKhLYznkkdqjVWdS54XoG9KuNNt2W5m5rdlgb94yoK54wQAKr3LyyyMZZEA7ktVeUlmzg7ei5pkdvJNuYYAz1NejDBRsubc5pV3fTYU3IRTHEgAPVj1NWLK5fzsHhe/tUD2jxnDYzipraIpHIzLlQpJx1NdsU6a00sYSakT3NwSyugYEfKrEYwfelMm4broKmPTqfwpY5vNiPOCOoI7Vz99cyzXDqzkqpwAKwV1+95r3KS5vctaxpXesomUtk+bpuPasWR3lbdK5dvc02ionUc9zWMFHYKKKKgoKKKKACil6UlMCVS5tXX+AMD071FUqNGLeUNnc2AuKjAB74pvoJCUUEY60VIwoq0IIy+0OpAGSfSmzpHGihfmLDIPbFXyNK4uZFej6daKKgYUUUUAFFFFABRRRQAUUUUAHU0UUUAFFFFAChsdhTg5plKKdwJAx9atQTNGyspwQcg1TqRDg1pGTTIaujq9PkhH3SNsq/Mh55rT0tXsLryFKpv4iJHD9Tgn1/mK5PT7oJMFYkKe47HtXVi8hltRC6usv8ABIvT2PsQa4sVQafPBaPfyNaNT7Mnqa+yLcsilmbJJXoCfwqOG5urJ3MCyFCpKkLnJ/P361oQpaXAKwTmRigyM4z7nPvVbUbaZQFCuWRui9B7V56Z2WRHp6OtuzyRrLJKOA/Qn0H+FZuoQSwyHz4mjjKkrsQMFI7DH5Va0/UoIFls7oqkZbfG2Dx3P0qwt6Pmg8yK4glYyFyeVz/IU1dO4OzjZGLF5Ya1mmcEFiu3GNtakhi2EoQe1Vm04Jcq6MxEe4Lu5JyfvflxSSOBwBz09qctWJKyGO/GDVSV9oGR1NStlyTkjHbNUrlyzjPbtTRLdgk3qSUIH1NVzPJGy9+egqCWcMTjcDnOMVasVUr5mdxOdo9DVWsjJassmU7j5gZcjAB5qkzbCwyQC2fSmXFy0pAPC56+9QyHLDv75oSByFeUs2BkgdAaZls8/iKaC3fCCnghxxx2JIqiCSJjwvQZ6VaeX7NF5jBfNf2qCKMyD90hwDyxqrfXIwsW7d5Y2lvU16OBhy3nJehz1nzPlTIZrlixZmLMe9VZLhiOtQvKPWoSxNbzqMcYDi57mmkj0ptL17Vje5pYO1JT8Y5zSY4/l70WAbRRT0YAEFQc9/ShAMpQSOhp5RQ2GfP+6KQKpY84HYUWYXG8nvUqRHrTkQDnGasKm4VpGBDkMWAbetWIYDuBJzUkcfHJ4+lSrJs4GDXRGCWpk5MsKPLXHHA9eBSedGASWBI6DFVmlz149Pao3B3AY/GtHLsZ8vctu6SAAsv1qjcqsZIDA+wPSoJpgrcE/Wq7XBb6VjOotjWMGOdd3zfpmoccdRmkY5PtT4k3sAeBXPu9DbZDobaWZ9seCfWnTb0fZjpx061bzHHGUicgngtiqynZ/wAtnBHoOlaOKSsQm2zX0aWZWMcpAAGQpTpXQwH94ixBXJ6gnBriYPlkHLEk+vWup06OV3TIZazq0IVoc0nayCNSVOVkr3NhFEUvnGSCInqFGajvdRt4LXyrl/NmPzJsQjH+feo7fQpLifyxIEBBI54xU8PhQtJumRpF7bD1/E1wQp4aNpSnfysdTlWl7sYnNG7dsiNAuTkYHNROkxGWVzk5JYda9Gh0KBFQS26RRj+EYyffNX4dDs5SALQDHRj/APXrolmkb6RM1gZJas8qijnVwyKQQetaP2KSaMSyBnA44HH0r0N/C8jFma2t2h/hIXt71BqGn2dlpkjXL+WpG1dnduwFKGZOU0lAUsJZN8x58LC3c/MwU5/zmormFbD91hSrjO4HINXXQHnvVa+hWaFcttZfu4r1alFt3T07HDCotmZ8l03m7lbBP61ZgnWWMbmZZUOQQQKzWjaN8sc4qUxF9rIeR0NZTh7SLizVWi7o3fkbkMxc9Se9SQuUc7sDsSeay7e42x4nDccbkpWux5n7ouVX1odOLpeydyeaSnzo6S2lt3jd0iXcgJbHQ/WtnRr+G5lQ3SDYGwVY9f8AOa86jkkRGQzuVckkbuv1q7YTLDId1xJEDjJQZJrzZZa7N8x2LFa2sdnqeoQ28ssNvF5iI3BbACj3Pc0eY91AsoiUNtyT0Fctaubi/VI97hjwG6n616Zp2mgWqGRGRiMkbh+tcmKw6oNK97nRQquqm7HKraEbiVMbjtj+YqHc1u7C4eZixyp2jCD2x/Wu7S3Uy7WAbjg4qpewQNujXy24BZc8gHpx74P5Vzps2aOVNuLjbcSKwmGVyDgHnisXUEaG9dX3gNgjJJGe9dQ1u9rPgfNDjO0ntUjrDMdwQZUfdPp3rWjXdKopoyqUlUhys41Dxxz7iuvstXi/sa0t1d5LwkZAGXOOw9qB4c0yeNZC6rvYgqjYPv6Vo2+mwW0axQIiRrwGVfnI+vpXXi8Z9Yio8tjnoYV0pN3KySXUL5kUPz0PBqyt4jcqp59Ox9DTZ7VVkcrKgUkANt6/XFNit3TIDjYBww7j0rz2jsQTOJMMykd856UPazTwNtjbDHpn9RUNzMoO3BHPAI/wqNrhkODJ8vf/APVSSGMnt7i1DbDscD/WCJQe/fFdNoEk86R+XJDISgPmSoSyv35z2rl3nZpC0yeZCmCFdtob0Galk8Y31vOn/Eut/ssWSbeNshmzncSOuO1dNKVt2YTXY7fUNOdrDF0YZJHUhRExDEjnPOc9SeK5DS3SMRC6XyQmW8tkIDE9Gz34qnpfiZbnVVlW62XDdIfs5MSv6fMx57Z44NdPBqFlqcPlTIbC7DbmAHysPdDjHqO3FXOKkKLsSx3MMufLkDYGdwPFNdjjcxwMZz2rIs7mySXc0eJDkboCIyxB5/DH/wCupPMtTJyZGBBJ3DOPTLVhZGl2W3udo4BLHsePx/8A1Um/cgZ5Ax/uLlcD3zVaSSFSu0Nkn73XNSOLqWN7hI2liDAyycZH1oVlsFi4lrGY1mlQ+WTgEH/JqGVrRrncjbQDyrDr9M9O9VrnU5Y47aKO48yVFLOpjGFOeme/AFVr3Xi53y2se/qdgKjP06UNpDs9zav18P3VrthS9Mg4LOBhR6cH1x61xFxfNYXUSxXLxuxIWGXjPqQf8KvjXg+QISvqVboKh13U/tXkTpBF5ezYwDBiGH8WMcZ9qd7itYfZeIEnmWGRgXI3Bgpyf0q3eSi4iVEdwN2WIOBj0rim1FrS48xVCr0Hb8Pars+sj7EJFfBHGD3Pp71LhrdD57LU2Zr+BGKuy57risK/uAWUxjAcnvgAetZ8kxvHD+YqgHJ+cYxTS0RiMaS72PyhpDgAGqUbEOdywmJrohyZF29DnH1q4yIEAI3Y5wDxUFuFi+dmDNgKB/nrUm7cx3oT7+lDFcgntZGcGNmO77yseRj+lMEflgDbj8astuwkUKkkjGc8/hVfG1ipGGHBBHIr2cA5SSTktOnU8/EqMW7J6/cRyDg/LnIxxVGbMDiM58rOf/r1oscCqbQSSO5wFQ8UYulJVlOkndiozXI4z2K8qI0pyCTjAA6CneU8UOBkuxyu3tVt1hhTzHB6emTUBuJnOFhjRScL5jf0rsnUhD4tzKKctiOG3zG0kpbnhe+aWe4QQrCjDc3XHTFMlL3TNE8yqUXgJnBPvSQBo1kYhZMjbhecH2/CuOrWqVE40o6dzaMIp3mxZpILazEh4ZlBweprm2JZmYjqc1c1K8+1TkKpVVPfrVLmibSSjHZGkItavdhRRRWZYUUUUAO8tsZxwakjRc/OakBklQAKNoqGXCnA61pZLUm99BrD5yKbRRUFEkfl8l92f4QBkE+9R0+IoJVMqlkz8wBxU80UT3ciQN8g6Z71SV0K9mRxxeZGcdRURUr1FTiORGVTu68cVYa3aTJA+UVXJdE81mUDkHBpdxKhTyB0z2p/kOU3KQwHXBzTCrIRkEd6izReg08HGc0Up64HSjaaQCUUUUgFIwcA5HrSUUUAFFFFABRRS8e9ACUUpoGaYC7fXAoCjGeTSg8U8YIxVJIVxm0ehpwVfSnbewzmkIwadrCuOCilC800GnA8VSESLkVq2l1uQIxw69D61kBqmRsHOcGtYSszOcbo7LRb1Eul87JVsqxyeM9/qK6zNqzMq3G66zhoA2Npx156jpXmVhd7bhA2TngjP3vaulkkMkiXsLN5seMqeTx3/KuKvhIzqc17J/n/AME2p13GNt2vyNO/S3mKB1QSZwTjqKjstGtjOr27su1sGMjgntmm3zR3Nmtwkq7TzgdQR1FZNnqcqXuA2YyM7T6+v1rzOWSumdvNF6nTXVgYrsTEsrKgjaPPBOT831/wrOubRVaQ7x1PephfG8gZpnxIWO5u4qjcGK2tIy/meW3GAehqNRt2M+VsKdh4z1qAkLCzFcnP3qfLGQ2VYbD3IqNuoQtlfatEYNmXNLliM9eDxVm2nFrb5APmOcc+lSf2ejNuGV9jyaJrWQ42IpwMAA4rqeFrcqfKc6rQvuUOc7eTk05UY8qGJHtVpIoYV/fDL5/hNTtapIv7tjG3qprZYGq43RLrwT1M6RSpyxzkd6s2tp5iLNMx29VUd/rTbmz8vByWU9Cx6GrcT77dOMFflYehq8Lh0qzhVWqJq1G4XgNurjy4+OM8CubvNyt1yD0NbepkLZu+3cV6c4rnxIXXDnIruxEteUihHS5DRSkYOM5pK4jpHxhS4D5Ck8kCnsFDHZkDt61CDilLE1SegrCs2eKQk4xmkopXGFFFFIAqWNDnNRjGeatxhccdquCuxSdh6qTVmJAgyevpTEUBd3T0prP3zmulaGL1JWfPPTHTFRl8DOagabnmoDJk5qZVBqBbMpNSRyGRxGuB78Vnbs+tSRSoj5ddw7jOM1KqalOGgXRUSlYyWQdyKr0rHJ9qSsZO7uWlZCgZPNWkljU4CAiqyip4oGkyQM4qoX6ClbqPeTe/yLtHYCpEtzxuXrUqxPG6oYyH9COa1Us3A2MBvBw3sfSuiEOZ6mMp8q0J/DuiNPd5K847ngCunNvBAGSEGSTODjov41FpGjTWsbGdMM+AI2P8xW5Do7MqhkIQ+gx+leRjqylU5Iv3UehhaVoc0lqxumQbU3rHCWGfmY5PNa0fnSnKYUd2PI/CnQWYhRVCnA4zjpWlZllj2yqMf3l7/hXmSZ3RViCK0DHLDLD+JqljjIk+YdDxS3GoJDlUUbhwSaIbsOwyo3e1TZlXRppMDGVKjBGCuOKoX0EU4UPChT+6FqRpDgknb+FRPONpi2sSe5oTdybKxzN34Q0933wefECOVDZGfXnmub1zwtNp8aywu9xExIyqcr6ZxXoJLq3Oacs6+YqLuDEbvunH5130cwr02m3zLsctTB0pLRWZ4wbT59si455BFddo3gKK9t4rqW52RygMoQ5rvrrRdM1aMC7tlcryHU4b8xzV22gtbZFtkiVI1wqY6AV018xc4JU1yvqc9LCcs3z6o811D4e3QmY6ddRyxgfdkOG/wrlbvw7rVqm+bTp0TGSwQnH1r3o2kfzA4Ge44qPypkj8uNhnPLNgkD8azhmdVK0tS5YOD+HQ+f4LJmzuGMdc1a+x7flHJxnGK9mvLSCWKQXFvC5KkkuAM4Hrisyyht9Cggdbcqk3yysTlxnp+R4/GuiOaNu0YfiYSwfeRyHhzRJ2ZZWRoi5wrMldjbvdrHiZ0kU8oy8fhipJdVjubwwx9EwC56bsdPrj+dMibM3llF2Z6Hv/AIV5uIrOrUc5dTuoU1CPKizGC6qCD9c81Df2slzbs8a5mAHGOXwc/wCNX0jMcQzGPYU5HDHGNp9M1gmbSjdGFN5TKWvFEexRh1HP4is+WydUaeFm8tTypHb2rr5bWG4AMsaOw5BIBxXC6pr19p+q3NqYECBhuVyWLjjnPuK6aNCdaXLA5atVUleRfgRJ+N7RyHoR0b2NWk3qhVQykDDA9QfTH0qokUcsK3ETlo5cMpA5/H6Hj8KsHd5WHZ1f+F89fr61nrF2ZpdNXRI7rs3Lyu0AY7U22WVnESgjzBwKpwXLR3DoyZDAKxHTPv6VdtX+yvu3ZPPOfXqKpWaE2OuNIJYOkgRh94Mufxqvc6Qg3OJDtU5ZjyT6cVflnd/nVG/E/wBaWUgRHBJYjkkYH4ZqLO47mNqYQ2scMRCqnzNu5JI9agezjihkmiRAoIU8dWPXFatxaxpA8H2iHcvLbmAI9c1nw6fdXyGQsIoCSyg9+w4pkM5q805ZQ5jzGx67DwT9K19I8RQ3Nu1tqe86pAuIJehm7bT6sB0/nVm60tkj3o65A5BPU1zuo6f56qTGBJjhh1FXGfciSa1OpSJIiJYiyORtZCmDwe3HrT0ZcqyqqqPvbuM4rj017WLJVguX+2RJwBKSzBfRW6ge1bOn+JoNRhEEsMFrLtKsFbCuOxwe/wBOPahwvqio1EbomRVY7lCj7xzj9aZ9pRpCgBUPxgHge7H0rP8Andnlii81VO0lSD74z+tU3a44yrAE54HUdhWdrGlzQubrYqwqN4UnAA559D1qkL9LeZj9pe0uGUgCReCp4IJx+eRUM93dLKxhRoIUO7yoxjnHLHnJPuapXXiR7SMIY4HjK5jSWJSxJ5yV5HJ78VtCCZnKdkRzytFdPEygvjko3yn8R1qrdXpuE80shbAGVAH4Eetayvpeq6Ir2spivATI0PlYUADnae354NczPMPs7wuu1gS4ZT69sVXLYnmuJNM0lvKzRk7GAYdqrbLjaqEEKBkL6fWnyTh5I2XJjAG8Du3r/LrUvmr992yzHmm9NEZSk2UypDZMYH+6OKs23lmYLKMqTgk9qa5Zs44Ap9myrOC7j8RSvoJGtFMiscxnyx8u4DoRU0d5bSDMcoyOqkc1nz3phOxQDn8c1FNHIkG9E8t3GWHf8KixfMaZffKhUkMvPXinXe55xMR/rBjj1FYUMzxOWLDgY2k5rXW4knt4vMVVxyu0Y4rqwSksRGxjXadN3Cmn5VwKdULvl8DoK+iPMRVn8zz02Fhg7i2e3pVG5vYI3bYgeYndk87TU+p3UkSeWg5PvWOylkLEESDkg964JRUG7ep1wXMk2Sm5lckswG7rtHWtKxYLbEj73qaw1YEVqWspEKgd6qlLUqpHQzL3/j7Y4xnmoKt3aO+ZeoU7T7VUrnmveZtHYBRRRUDCpY0RmGWwO9RcYopp2BmhNJEtvtjI/Os/rzRRTlLmFGNgoooqRhUjFWXcCRJ3Hr71HSjHORnjimmBL9qnx9846UC6nAx5hxUXbGeKMjByKfM+4rIVJGT7pIqRpd6CMbgCcnJyM1DRSUmOxO1pIHVVKvn+6en1qT7LOu3dG3IyPcVXSRlzg9RinrM4AG4lR2zVrlJfMPliMfDqy+magK+lXnvEugsdwjAAABkOSMe3frUJgiILRzD72Ar8HHrTlFP4RJtbkCnCkEA00jtjFWGt3SPdwR22nNRcHqKlxfUpMjoqcouODULDBxSasNMSiiipAUU4DvTKXdimgHYpRTd1GR6U7isSbqTd60zcaUe9O4WH04GheaUDvVIkcMdc04GmilyfXiqQh6nBByQQeCO1ddomvKbGWyuYEYvz5q8N/wDXrkAamhkaORWXgjmqcYzXLLYm7WsdzopP9El3Z3ROOV7VVuozbOJkUmJuQff61aj1G3vbRYJkAZehHX6fSqcMyZkt5CGTJA9KxqUHVVn8S/FBGpyu62/I2dMuo7iPDjC9CT61s3lp9otgVj86BRnIPU9fr2/WuKheSynKNkxscj3robS4MsQjPzBuxOMV5E4uL1O6ElJEMwUXDwYU45DA8A/41BcRtCvJBOOCB2pdTVEuYZIEKEko5Uck9v61RvLlnt15IJGOeorsy9fvk+yObEv3eUhN+FYgscjio3vj/ez7VmtncadGkkr7UUsfavX9pJ6HN7OKLLz+YOTTrSdorhOfkY4IzVm30sKCZ2DE9FHQVWuLRo5CE4X1JqrSWpN4vQ2JE3pjv2qrZksZFxwHAxjvSxXEnlgMMsByTUkZXfnjcTnA71nOEJVo1E7NEpyUHFopauypZuuGDvwFxnI9fpXPcKv1rtp1SVleMBXZNkmB0x0x9R1Fcxf6b5bM0GJFHJCHIWprQk/eNKE1blMyiggjqKK5DqCiiigAooooAKKKKAHKATVyJcmqyc85H0q3G5wAB+tbQREh7tu4zVaRypIp8hI6j8qquxJ605yFFCMTnrTc0UVjc0CiiikAUUUCgCWMZNXY1dBlSR7iqsQHetW0QSuqkV00o3MqkrFvTLO9vpY4Yy2ZHAXJ5JPFeraRokWhaWvmJFJdDLFguST2ANZfgvRVVV1ebOIiVt06AnGCx9q65Sk7DzMc/dWvOzDEe97GD0W/qdODpXXtJL0Mq3t50YZKsmeCw5z7+tazrNBGuAnrwMk0bkWMjcMdqqSyzSxbEOI+hdz+gry3Y9BXIhcTSSkSYUZ4wOta8Kgw4XqR19Ky4IYDgZ3Y/iJ4rUVh5WI2BB4yBUO3Qbv1MyeKFJN0i72GcAnrUSXoiuDDDABI7ADjirN3aCQ+YxPHTBpsca2cayM2WAwGxzjnj61URMrNqz2oAngYdclfmGfrS2919oDOoYAH+IEZpsUv2mHyjCPJ3DzFPHXvirs+nKIVmt/kcEHZ2ODQ0gUmOt5BcSbQrvt4LDgZ7ipXULbyRszQ8YBPUCp7UwW9vucLvycD61DEovrlpZD8iHp6VnHfQuXco6FaXVvNO7zB484GT973rcnhaSRZMYwPzqpc3iWRyq5ZjgBjhQff0qWHUJHiWWWIgMcIg6/WtHIzSuF3cokypuYN3x2qxLjAK81QntzIXKnMj5A9BTrZ32LEykeWNrHOQfpUNlcpO0cciMp27WGCM/55rL1GN/LMEo37Qdr7chx6H3xwavSosJ3YJyeg61U1S5jIiSPcXkfacdvUkdhxWkGZyR5s95c6TrUgmklkgJ6M+coen4gfyrrtPvo7Fi8qPNCQHjfOcD/OKyPFGniSx89VLyQjBZRwVzz/AErL0XUY38uynTnBWOQN0J5wR6f4169WksTQVWK1WjOCE3QqunJ6PY7Ya0NSdlhIRQ2Mnv6/StCEnZkndjuBXNaXIqyOuwD59pIGTntwK6RSyYCrlW79ea8pxVtD0FNlqKYDG4ZzWT4r0CDU7GS/T5LmCMkMOdyjnaf8a0bcmSNWwMEVehyLcAjILEVVKrOlNSi9iasI1ItM8ot7zUdFkgLbhE6+akTnKOp7+2cVujxdbzIEWxnMrcCNSCD9O9bGt+FY9Vu4rhrtoYooxCsaoDgDpio7Hw/Z6VbzGEtNcupXznABQHso7V6lbE4SpDnkve8tDz6dDERlyxfumTpt+blC/l2/mBmSSFn4xxg+v/6q0DbzFgLeyEX+4SRXHapoMy3D7JRFIezg7SfY1zq6jqVhOQs00MqEggOVI9aSw1Kr71OXy7D9rUp6TR60v2mKLbIjqOqAetV5/tBfkYXI3Z6j3ry5tW1GVsvezs2d2N5Jz69au6ffTxOsvnyeeDkMzZNV/ZrktJa+hLxdt0d7b2ltFqUq3A3TMxdC/Ix2/wA+1ac1yIlwoHHY1zVhqcNzNJcXMrecq4UOcDPb8Ks6pfpLApt5McfNk5Of8K8uVOUXyyVmdcJxauhLu88wujHv2NZ7SRK3lO25jyDWa00karltxySx96gN0S+Dg8dBTSE5XNC5tVkPmbQWHcGs6axtplLMo3nnj+X1pzXhAG5ifb0pktz5i4aJWAOeG60ambsRw21zYOs9ldzW8qnOUPT8O9Me91drZbYajJ5YztG0A8nnJ6/4VN9oC4DKuAM7QcYqv5i7tzAnnj1qlJk7bDU1PVYboztrcrS7PLLMd/AGADnis52iSSSeQtPO7El5DnJ9ferU7KgIVVbPO7b2NVIkM0mAgzmq5m9yGyHzJi0jByu8fNt4zjpRGhcEsecZIqZlCN5YycfeppJK5GcjjiquOLHRrtYA4Kt820CrMaRud23bt9TVaBwudzDPqRUvBYqr8Z+lSyr6BICrDj3p0O05LKxJ4FSpGsjjPK560yWJgzJwQR25IGaVxEbN/pSqpJx1ps7OQAz7txzwane1mVFlx8pGSQf0pyWZcqx4Geh61cIym7RVyZSSWpDZwebKHxgKa1CQOSfxNHyonTCqCcAelYB1Qo5Wcb8/N6V7GHjHDPll8T3ZyS5quq2NiS4BPlx/Mx7jtVW5u47SDJYb89M1QOtRqpCR447DH61lSzPPIXfn0A6CtqmIVvd3HCi76k5aW7lMiuFYcAE44pjrcI+6QNkd6dHcpEGGzcrDkelMwJAFjyf9lj0+lczs+uputBJUMTggYVhkc1NayMTsAzmq3VSpJ4PFPgJRw3TFKLtIbWhpSIFt7qMcb8EVnvbtF1ePftzjNadw3mW2VxlkwQKxnL5G/OccZrStZEU7i+W+3dt+UdeaZSjr6UfLt77v0rA1DJxjtSU/Z+78z5SAcYzzTdpyM8ZosAlFOwuDknOOMUY7dOM80WAbRRRSAKKKKACilKnAOOD0pKAJHQA/Lk/XrUdWsxSkAblY+p609YLcBvNlIwPujrmtOS+xPNYrRwvLkqOB3NPaAx/eNSzXS/KsA2qvQY60xrsuwYoofpuxnH4U7QWgXkyMvhcDgfqabuFI+7ed+d3fNNqGyrEyuAQcZ9qtJOkjD7REGjAxhBjH0rPqRJMcGqjIlxLs1kjRNNaSM6qMspH3fb61nkk9anFw8auI+N/U96r/AFqZO7HFaBRRRUjCiiigAooooAKcDxTaKYEganhvQn6VGBUygYwTVq5LFDU6jaMUoHOK0RIvFPHWmgU8VSJJF9DUmdpGO1R5+XFN39jV3sTY0muBPZoWXDBtvHSrdrctAytuXpwc5rGjZkG5OQ3LIeh/+vUscsUrnbhT2RuD+defi6E5z51qa0pqCsa9zvuTuhYE7gxQnqQO1VJP30Tbj86noetQxSGJztLIff8AxqxNMuyCVe2Q3f8AGuWhUdGopF1EpxM4QM7nA71swBILQMExhctgdTVdJ4kH3FyeeDxTJ7p5YWUFRnsvU16jxtGEbxd2cjhOTsxTqZJ+WIc9Mmqt/ftFIm0KJcZPcLS24BJY5yo3VlSFWuGeTJLHO0dayw9arOLlJmns430Reh1O5XgRo4bruHWp4pZTLl4/k7CM9PpVJhcSbUhtHQDuec077BfSyBZHZVPfdx+lbcienLcHZdbGuzOFBafYn8JJAP41W3kSf6w4cYOB1/DvVdtHSIhpHZyeu6pSILMAhMc87eaIQnFvX3V0/wAiXyvbcjkhhe3eOa0dJA5ImwSSPQ9qyri2MAVg4dSByOx9DW01/HJGzAOpUjkHrUDz6fMAJsOQeuMGs+ZzdnG3maJ8pi5orUWPSw3V3/4HjNTnSYLmEyQEoT9xc5H496caTlsU6iW5iUVJNC9vM0T/AHlOPrUdZvTQsKOO9LRjH1oAlRSfcVbiHt06VWjHT1q2GITI/Gt4IzkQTHrVRjzVqRuvT6VWbrUTKiNooorIoUAHrTmQAZBpuKeo9elUkAzBNOVDmp40BIA6mrHklX2kEEdsVcadyHIgRCK2dMVd+WNUQAOKngYhwBXRTXKzGeqPctMms77Tre4shstdm2NMYC44IP41PHzctHbIryAfec4X/H8BWJ4Smjn8NQwXC/6uRgvoV7fqTW1LcQpzEqtKCBnHOK+YxEXCrKPZntUXzU4y7ovGJlixIFJPouBVZrVpQRtx6E1ZinDqBJKhYfpViOe3LeWxKv69RWFja9jK/sXG1mdjg5+U4qyAkA+Y/QCr8kqxABXU1QmxMrd89qd7MTbluVprhMnGRjkjFTJ5ckYDYZevPOapt+8m3KuM4zVvK4yFBp+hIzMaStwq5FW40LwKykEEZB9RWLeXa/6scOTlTitLQ2upYSJnLRn7m4fMPxpNO12PYia1d7kupyMYYZ+77/jUdybiOCU2m7cMEYGenGMe9dCLQJnoAevvUMwiX5ETJ9qBXucFLeXF1Nid3ILYKnjn0rqmRwIm6sEwCBk5ptzYRXEpdo8c7s45J9aSffbwgu7Ip4yM5pz1KhYndS6FFYqxwCc9Pp71JF8ow3GOlQ6cquSQxKgYGQRgfjU8vEnyg46VI3voMuHXgkbtvIqlJaqgaVkTzn4ZgOtTzjMLEttHQmq5mZlQfeXHJFVFohp7mZPFcLG0jy7VjQhCpwCc46fSuA1JFstbDRhduVkCgcdjj+dejXWy4jZg20YwwXmuQ1fSY7pTLAGEiRlijfxKvce/X8q9TL60YVLSejODF03KF10Ne21GCBLiazJdJ2UiTI+U9SrDsa3rZpmt4zMVO5f3g9fpXmml3v2SdhJzGw2P9OzfhXZabeATW8RDcEAtu+U55BHtUYzDOhLTboVhq/tVrudPAAitjoOg9atRl9g3EYHSoFKhQaT7QZJCisBjqPSvOu2dzViWYgQkZ75qnFayOeByamaMMCfMNQXviHT9Fs2luJlUKduAdzZPTirhBydiZTUYlfVpbTTUM17KqR8gBuckDOBXjOtap/aurTXjIERiAiL0VR0Fbfi3xY2uboYGQWqybk+X5sYxyfeuQZjjHrzXu4XD+xXNL4meXWq+0dlsShySccZPIFTxybQTmqYapN/auxSOdo27G98wldgyB1POaux3Yjysm4k9PlyK5uC4MMoYGtuORLiLKnqOnpWdbDQxCv8AaFGpKk9NiVZi8TM2eTwCM1D5e5s5G3H3ccVJar5luRgbgTkelRpExm2NyM4rwTv6DJtoZVZjjP8AkUpZEQlflCnHTH/66W+tseWoH3ec561A7h4syLsRe5H6VUYubtHUiTtuOjUyLuD8kgnPfH9Kc6xkBd456kHk1TacsAANqjt/jQr+9exQwUIr95qzlnUk9tDRlzLbmFWjA6gAdTUGkQhNTaOT7wUleepxVbzCOQasIfNkhmB+dX2t9KzxeEgoc9NWsFOpJS97UZqG37VI6MpXjgDjpVJQzJuA4B5qzcwvjcQcbipP06U1UPkkqGKjrXlrY3ZAqgct0q7aQw3AYOzKyjKsB/Omx2JdN2/AxknGaLeQ20xjlX72AH6VUEpSSbsDulexajtyiHexb2B4p4iicKdvT3p0qM6FQxUnvUAfyRsjBkbuxNez9Upqokoe6uvc5FVk4vXUsYVRyenqailuFSMtuHtWfc3UxOwAbu4HNZ7TO3yseldPNGmuWKsJQctZMum7dZlZnJUnB+lZ+oR8LNjG4YI/HFT2kXnzfOSFX9KfqO2S0jwm3jOc8Vz1Jxfuvd7G0VZ6GLSg8HrmpDbyBN5XC+tRVztNbm+4UUUUgJI+hOM54zQOKaTg7fSgVdxF6B2aMoDjb831p7xJdQkjiQVBaHMwXseKmt87wMkcYreOqszJ6PQpGBg7Jldw6DPLfSkaF1UMRwTj8fSpLnCSKF4I64pqJI0byFyoHPOfmNYNK9jRPS5Dx6d6lVEbecnavTjmkKPnaMkk9B1P4VHS2KHgoDgKWyMHsfwpWTDhcDnHAPT2pmTnOTn1pQ7cgZy33vei6AJF2uR7+uabTlbCsMdf0pxYmPGeAeBikBGTk5NTRRZfDghRgmltPJ88ednb6irDtAXJRxhu2OlXGKauTKXQlxBKOY8IgwoHFQsLdyypGy46Hpmk3KBwMqR69ahbao3B+c/dxzWkmQkQZz1pc9QOhoABI5x6k0nfisDUKcDj15HOKbRQA772BnnGBmm9DiilPXpQAlFFFIAooooAKKKKACiiigBce9LikzS5pgJ0NHU0ppB1oAUVIpplKDVITJg1PDVDT14q0yWiTOacCBUeaM1VybFjI2delRkkkAcCmjpTwPU1V7itYmU5XHemOgPUZpyU5hV7onqRo8sf3JDj+63IqQXcqbv3agsMHaeo/GozxULvk4rGpThL4kVFs1bea0uhsU+TOBgBu9MeJ4pRuXDA9R0NZZUN1FW4L26hUKSsyD+F+o/GsamHhNaKzDWPmWlcKW3ICW469vSlV44QSlugJPJJyaWG5s7hlRkaGQ9AemaWZVhlVHI3N0Brnmq9CKs9PIPdk7Nal61lSWMkIFI61HcTEEgAYHQmkgdYLUlmA3McVRuJS+VBzjnNevSqSdGLluzn5ffdhbi5MWMnlqoyTNOwUnAJ60MpdySSSfWpIrKWRsBDt7ms25SehslGKI5eFCqPlHbPeq0hQDoM10aaHD9n8yRhgHGN3JqneaIsbFVXBHq1TKPNs0OM0tzEjOWxityBmS1UjoKzv7OuInDBQV9jmtZbacW6x+XznJ5qqMZK9xVZRexQ1CATlJlUAn7xBrLkQxkA856V0pQxjaV+ULg5HBNZOowBXUjj8KVWlpzDpz6GbTlIzgng9aCuOhptcuxuXY9pHyuhPvUoJK7QAT61nqSOlW4pCCDnB+tbQlczlEbLGw4IOfSqxHNX5MsM4696qOrLzxSnEcWQ0fQYoxRWJYUZoooAkjYg1qW1wqsJZpQ20ZCHPJ96x6f5hrSE7EyjcumQGQkcA9hV+wj86ZRnFYgc5rV0iQm7UGtqUrysZVI2iemW92mm20UG8FVQAkevU4qxHrsMqHkgjGMnrXByXc6IF3fIO2aj+0OWJ3kcV4FSDcm5bndCukkkd9Hq26Rhvwc847Vcg1QKc78tjp6+9edRXb5YAk5ratdTAxu/hA7Vm4G0a1zs31ceeYsuXRQWPYE9PrUqXBlALuwYVyTakWbdGQOnPSrUOqKwA83J9PSocS41Do1jXeSZ25ycA96nYvFbsVYNtGQD3rkDrzRyMCCwX0NWhriNBuDHaeD757UuRle0idLbPBPHHKVyOqkitaO/ihGFX8a4qDVxsG11x2UDpVxdQ3Kr8E5yc+lHKHOmdol0DEu45AHUnFH22FuABkVw15qa3NtJCznaRxzg5HQj8agtNakjibzbgTSg/MSNpBppEtq9jup7yJRgEkj9KzZbkMct34x61zL+ITHkuy53Y4Pb6VUPiCOc7dxXPTNHK27jUkjtY7tYU2LgZ75psd5IZG+XKKM7y36Yrk4ruSV03MBHG27d/eq8L4ktkjb0Az1qHEtT0NyS6Vj8qgrjNZN7fLbKoPCk4xWbPrMduxy+SB92qN/qcd3bMQMMnIOaqMNRSqJLQuf2sqyrjG0k556Uy5v4ZZFlXO4Ecdm/zk1yl3e+XIT228H3pLEmNkleTduG8IDn8/StbWOf2l3YtXmmy28aXMSN5QJxID05/wD1CtjSbpUtICU35DKQxxznP9aZHK1xZByVCMpyAeOtUGuLewARkeVWbfsU42npj6V6LrSxVP2bXvL8TmVONCfOtj0Cz1GCSLbu2uoGVJ5FVLvWLTScvNdohJyVbkn8OtedT65eb28hhEh4UAAlfxPNZjLdXcnPmzOemcsT+dOnljveoxzxq2ijq/EPjNr22+z2DyxF2y8g+X5fQdxXFSFpWLO5YnqWJOavTadNbSmGbEcoA3Bj0rPvliiP+j3HnL0J27ea9GnShShaC0OSVSVSXvFWQFXyO9Rs5Zs4xgYpXkJUZHNRZqZMtIkBp26os0uaVwsS7gSPWtWycxheeDwaxA3NbFu2bcGtqT1M6i0NGJvLvdhB2yDKn0PethA4idkACkfKcA5Nc/KzT2hK/wCsjOeOuK0YNR+VNvzKVyQBwtePjqXs6rts9Tqw9S8LPoQ37eVZRzyMXkc4JB796xZpzK2T+Fa2rzKdPRCD5jNv9gawc12YOKjSUrasxq6yJgacGqEGnA12XMrEu6tS0j2wL03Hk/jWbafPdICMgcmrEkpAZmbk8j3NU4xnFxlsyHdPQ0LiWT7K0YC7AM7QKrWYLWrGTO0tjNSWzl7cFuaisSd0ic7FPA+tedi8HHmiqStc1pVXrz9C5D5MMfySqQRyc1QvfK8sbWU88AU+5YwnLgbGOMqvT2qF7SQRiUIQjA4FedKnKnK09GdKmpLQWxuWz5UrFgeEb+lSyOsZODyKrwBvNQKPm3ZOO1V7qQxFm53buM16+BqydNp9DlqwXNoMlvFXfuh3SMPlJbhfwqgPc8fSlO6aTIBLewqaO0meMyhDszya1bcmWkootaY/Mq4ODgH1NPuNPmuygjdQqMQA1S21gUImDspIxtHep1iwQhxuAPTiplRfOpNX0M3U7GDeSSQnyJI8MB68VRP0rY1mA4WQk7lHOR2rHrKbuzenrG4VJCAZBntzUdPjx5i56VK3Lew0nJJ9TS/w0EYYinxxtIcD0zTS1ETWfEo9uat2vDvK33UGT71XVoYkK7/mPXPHFMlvCYmiiGFJ5Yjr9K2UlFGbTkyFn3yFn5A9KjLHpk49M0uAFPJ3dqbWDZqOLnzC4LZJzknmhtvVAduMZPrTacoyGJyQBnAo3AbThhXUkfLnP4U2pFidlLBCVXk/ShAMP3uBjJ6UpyAV5wD+tSbZJx1DFRwM9qc8M0UHfyn5z61XL1FcgIwSD1HoaTOKcygdDn6DrTakZYi4Rtw6d6ikIZ+KTcdmztnNNpuWlhJa3CinIAXAY8d6dKY92IxwKVtLjvqR1KrqqsoAIPQkZqKihOwDgR0Kjr1zipiI32lT1GGB7VB19jUiZUcZwfvD1qoiY1lwcZo2EqDlRx61dS08xC5bn86gKdsiqcLEqRWopzLg+1Jis7FiUUo60HGeKAEooopALmlxSYp4qkAylHWn7M0eUQadmK4lAp2KXHNOwgFOxQAKeMVSQmw2nHSnCm5pRVCJARj+lO+UjIyPxqIHPFL06VVybE6cmhiajUnNTZytWnoSyBs0zbk1O1MNQ0NMbtxS4NLRnmiwxwAK7SMg1cjm82NYpznYflcjP51VVSx4FW4YyvLYx71XIprlexDdtR5GD5MgwcfK2eKb9jXIBfc391BmneePOVUCsCcEEUn2wwM4jjHp83OKhQnC0U7r8V/mTe+oRWivICrfux94ngip5XVht3MFHIx6VTMzSZm6EnBA7Gnq7thmI+Uc1wYuvN/u9rfiawj1LUE5SAsHKMeQ2P0pZJi8gl+YEjDBzkmqqLknJ4Xp7VKsbO2WOB71xuTVrdDVReqJDNNGQWAK9gOPxpZJrkbWyOeQg6kVA1z5DOgIbnv0qN7rMeG6BuQvHFa/Wa+3Mxeyh2L8Ti5iYnIO7jPb2rLvIWMh3A8UmQTlCV9Oa0raZLiEJLywHJNehh8Wqi9nU37mEocjvEwTZvJnYuSBmqbKQcEYPpXXpFAhwpGT71narZZZZETjuQK6Z0U1eLuEK2tmYO00cirPle1NKYrDkN+YRWPQsR9DUxVDHzj8arFSDg0oJA4NNO24mh7QD6VC0ZBxnNTq5OOefpUgRWPbn9KfKnsHM1uUtvHem1deAepqNo+Dg/pUODGpIrUVN5QPGKesSg88e9JQY+ZEawswyCPpV/TZYYZw8jdOBx3qPyxt2rz3zVR8h8elaL927kP31Y6sS2tySiyIXPaq0sZjcjNYEM7ROGU8g5Fa66gl2R5i7GxjcOR+VZ4mnGvG8V735mcYum/ImEjKcqf/AK1SxzEHD9+cVTaJozljx2x0qWIbz1zXlSi4uzN1LsXxdYOM8Z7U9LxQzMPXjjrVJ8ZGcdMUiNg5UYYcetRYpTZZubpmk64cGlguDGXyM7hkc45qIAj55cKSc4JxSSMPL+XBQD5iDmrVObV0tBOepaF08HzBuvXnOKux3xSNSJGO48rk5FY6KVKkEDnvRcXQd/3ROcfM1RYtTsa810PMVsgAnIBPT3oluxM5aPAkI+bPQ1hJJgbS3ApDMeQGP40co+dl6SaRz8/AHWo/tXzAk5x0FUmkYj7xP1qPPG4DmqsRzHQQ6w8ac4IA4qwmszsysH3Y+grmkJI9qnRucjr2qXFFqqzUuLqaUsz9PSolmJQgOOeoqu05kTOcN1NSQo0iZx74pA5O5UuGLyHnoatWpbeflY8Y4qKe2k8wHn8amt5VtYvOP+szhR3+tPdExet2btndQ2cMcVxu+Y5KKM1rpHZavb+TNDtjU7w2cMD7GuXsGaWQeYSkbPyzHkE9zXUSW7LbnyjGy44Knp9PXNTzODvF2Z104qatLYsWOiaV5o2W8ZZOhySfxrYFvBARi3SJWx0+XGK56xid5A3mFPp3+lReKtUk07RzE0zCa4yoOfur3P49Kcfa15qDd7mtSNOjFySOI8WarFeazPLCUwXI3J0IHA/SsCOXc208g+9QyuXkYn1oX5cN69BXtc3RbI8vl6suKoPuSMfSo3jK9KfE5H4danK70z+NapJoi9mUc0ZqR4+c1Fg+lZu6KQZrUsZCV2dO9ZgXpmr9kQJsHoeK0paSIqbGhA5W5UDucGtHT1dZbiEFREvzklexrJ6Tc9jVhrxo4mVeCRtLZ7elPEUFWik3axnCbhK6LGpFJoHCkeqY74rAzWokhkWLYQeSDn86zLhkNzIY/uFuMVlB8snTS0Wxa1V31ANTgahzT0OXA962TBou2J23WM4JXApJEJuXDE4Vciq8rGGRXXGRzWg4MrRtjJ2jdWq1VjN6O5etl2wKPbNR2cisjY+8SSakjOW29sVG6LbS+aq/JjkDtSruUHGotlv/AJmcbO66ssOiyLtYZFRneQIQxCJjB9v60+OVJU3Ic/0p+AOlKth6eJin+IQqSptjABFG20e596yLiJ7mTLfKo/WtluVIqlIHJ5HJ46dK29nGMeWK0FGbvdlKOBItxRevG7NWot2PLHCdSc9BTSHZ/KjGW7n0qwphsysWcsxyTUNqCu3YptsY1ztYkYRV+UZqvDerc3LAZ3DAQ9/c1Hf2txJcYjXKt90g8AVG5i0uExhxLO4ycdBWVa/K0XBR6blu4xJDKjrjzE2jPJ9jXMcjg9R1roQ6Oqur7vTnofSsGUkzSEjBLGuNTc76WSN6asMqWBczoD61GDg5xVtCkAMrAlsfKPf1q4rqXJkfktIw2gsWbsKmhEXnsZCSi4VcH/PvUaTuq4VsZGCx61YSdUiCbRgdBWkUiHcbNYDYXiO7mo4oy0TRlDnOQT2q3Ec/NGNhA554NPFyUbeq5A+9g54rTkjuRzS2M9LKR9/Uso4AGc/SontpkRGaM7X+6fWtWO/8okoAB2qrNIEuA5XMeeAD2qJU4W0KU5XKLo0bbXUqw7GhWK5IzyMVZlRXPmRhsZ6HtSeUsrKEj2nGOD1NZ8jvoXzFXoavCSHJADshUcdM+tQzQhSApJ45yKibPfOaFeIaSAf6zGAvOME1YYOyMd4IXjbuqpUkTlGzjK9xSjLoNoseXviURncecKeoqmRg1bDbGDlCqsMgA84qKdArnGfXmnNaXFEhopeNvTn1pKzKCjtRRQAUUUUAFODkU2lwSvTj1poC1FcGNQByp6jNSzIDEsqD5e/tVDAH8XNWoZinytyMY2njIrWMr6MiUbaoiNRnrU84QuWjXajcgZzimIm5sd/Spad7DTIaXBNTtHjimhKXKO5GE9TTwopwFLimkK4bRSbaXmimIBwaN3NLzSUAJnFGeaKTmgY7dTgciowDUgFNCYoFPxSAClzVIkMc0vegU6mIVakHSmCnjpVoTEPWkxTskDGBThJ7c07CGiMntTxBTllz1qdCpOMjNUooltiRQ7fmJI/CkuJQwCr0HelfPOTwe1QsAAap6KyJW9xiqSQAcHrmnSrGgGwkkdT61GhbOVHPSrdrEoPnTA7UOFGOprO6Suy2IYClrGr8O7Fj64p6KuyPHDScj2FNbMm+Rjljyu49qQunsWxjOMYrxa9RVJuSN4rlWpZbyohgscjnHrUJu25AAHPXvUROeSaiYgHnisUiuYQkYI+9mm4LdTQPvZ7U4Y6iqEaS2aSWBmbarKPvbsfp3rOycdeKniuJYxlHwRnHtUGOakcmmBJz1PtVuzvHU+VId6ngZ7VUkI3/ACKQMD3pIsmVQvBznNaU6kqb5ouxDipaM1JLCJwXToecCsm5i8tsYrpAimxW6VVjdTiRFPBHris++sTLmSIZPda9qjWjiKfNFWaMJRlSlaTMJtrLhiQR3pjRgdGBqWSJkfDKQfQ1HtOOhqGu5shq8HpUqHkcVHwPWl3rkHOcUloD1LWSwxjtTGBI6Uscsf8AeGaVnQng1ro0RsyuQcYpu75sHipzg0x0BHC/nWbRSY77QFjwvWqLEsxqWRdo6gVGEZvuqTUTbehcUkIBUsbbe9M8p8ZyPzzRtYdefxqVdDeppw6giRGKRTIp6c4waf8A2hCmfLUknux6VkEn2puaJ8s3eSuSoW2NgaiN+WVdp9qWTVoowy20Z8ztITwPpWNk0lK8ekV9wciL/wBqeTlmJPqTWjY3SKCj9DxWGpqzEfet4VGROCaOhk8hlJGRu7E5qjJCIjuRvlY9ajiJwM5yenNWLvKxRRnvljmsMRh6UaTlFWJjKXNZsruyq2Bk96DIpIKjnuKZtCj17fSkA5zjr0NeZY6CwjI78jAxQ+FUep9+lQjd7U7PcUrCGltp4/A1JuHqAe5qPBZvcUjArnA5pgWkySCDz6Vo28jgBSox0PtWPCGJ3ZI449M1owuwVdzKSOuRgVEkOLszpbaBGt3k8suEHzrjO0etVbyyjByY8qQMY52j60llqcluzIp+RxtPPUVo2phmaGCUBVjGEUNx+NRqjsjaSKFtGiSbpQFj9161rNqKWRWOMLy3Py549PaqepQlCVjI29SSeCPWufk1By7SltsY6YH3vp7U405VHZBUqxpaHYm8t7WOW4mby4FO/wCh9vWvPtf1X+1bt7hy3Tain+FewqLUtVmvCN7YRfuoOg9/rWO7sRXq0KCoJt6tnJVqyqtdkRHG72ozzkikpyqWOBVCJUbHQfnU8cpxVXgHA5A704HDcZrSMrENXLxwwpvke3TrUSOcgjrVlHyMZ7VsrMzd0V2G0nFTWRH2pAemRUTZ3GnW/EyeuaS0kN7GlcELPIcdDVJpN+5c9elT3cmzcGPJNZbSENkVdSdmRCN0KSc80uajL5pc1hc2sSZ4p8eS4APNQbqmtpAsnOPrVReomtCS6AU7epxya0LGXz44yD8yDaw9ay7iYPKSDkDgGoVd0bfG5RvUGq5+WV+hDheNjoHkuLaQYcvHnHI5+hq25S4t2CNnI6Vm6befaleGbBcdcdx61I+badlVjkfdz0IrCpN0k2tYPS3Yjlu7PRoLVHjukxlRnBBNaucdazVbzTtb5JBzuHf/AOvWivKgkc1pl0tJRWpNdaph3xjjHWlqOeTyoHcDkDis65upJoANmMHJI6GujEYqFHR7mcKbmWLm6S3OIgu8/eNZ6M08uWbkntVYEnr/ADqaGJywK8HPArxq1eVaV5bdjrjBQWg+6vmt0MMXykdWz39vSsUuSTznNbFzZJc3O/DIpHzAHIzUD6ZAeVmMeBn5xXoT00WiFBxSI9OXInzknZ8o980uoWqDdKnDA/Mvt61btI47dNqybyOSw/Sp3j3R7MDdIOp4z9farSj7NEuTU7mGkBJAK55qScAqxGc5AH0q1LazwhmkJwB97oPpVc9MgjGKThbQ0Ur6lZc9CKlX2H40Aq461JHE34VMUNstqBFb5HVutUXcEnHrV4jMWyqTRMDwM1pO9tCIiK6qhJGSBxUe8P8AezkcihsgH1FNkx5p9+lYts0SLNvuAK5O1uoq15RBx2FQW2Dt9a0FXK9K6KaujGbsypMg9KrFduGHUVpOgx0qjLw1Kceo4sqlBnNCrg/zp560YHesbGtwKeh4prpugD/3Tt69aUZxjPFPVFMLYG5gc/hTtcWxV7H3pKccbyc8H0FNrIsKUYI5496SjvSAKKXv6UMcmmAlFA61ae1HlK44LHGM8U1FvYTaRVpcnOaCNpIPUUlIZL5mVNMGSetIPfp3oGc07hYk3HpmgMaYDmlp3ES5Bo4qMe9OFVcVh9ISKTBpOaLiHZpCabmk70rjsO/Gkop2KABafmminVSEwzS55pKUUxDgaeDTVXNSCPmrSZLAVIOlJtC9aC1VsSKTSZphbmk3UrjsSZqe3nMT5wGUnkd6p7qA5zRcLGk93G+f3WPxqMPGTkgD2qn5lL5g71fOTyGiksUQ+Uc1eSMGwViQBsyPcmuellIiPb6V097Zm20m3nHKtGCpHc1zYyadKxdKHvXMWZv3rbeRnH4elREE9OlKBxjJ3d807b2ryOpq3qCKdgOKjZc5z1qfJxjAxTCOfXNAiMRkjjtS4xg045Xp170oxnJFFwDt0/CljjZidozSqcdFA45yM0jMzDAwo9BxSAlFnlS3moAOSQ3SoRtjbcpyfYU7A6Akj34puRkLwce1AyxBdyJFJGXJEgxVlLl1YK2GwMn6VVWISZVV28jDHjPrVh4CsqgncduBx2+tXCrOm7wdhuKmtR9xafbUDxoTIFyRjtWa+mXGOEz+IraTPnjDckBeeO3WtHZsY71yAMYrtWYXXvx1Jjhn9lnEy2xXrwe4Iqts712l3pRuI2ZFXcTx6msC+sZLRN0iYGcHnmuqMqdRc0GQ+aDtJGUflPAJpPO29U/WnyMp6A5+tV2OTUN22LSuTfaSBwg/Ola7LD7qiq1FLnkPlRN5mR1Az6CnqUHLc1WHFTooPrTTuJosFwwACgfU07yVIzyT6UxUHXFWFAxxjNbJX3M3psUnQdABULLirzpz0zUDjv2rOUSoyKuKcBTjjuaVRk4Vc1nYu4qipo8A1Exdc/LwOM4qPec5zVppCtc1oJVEgzzVu+DeeGP3WXg1iRsT3rZtLkyR+TMCynoR1FXOPtqfJ1MWuSXMQGM7sPzx2q/c2aRZERG3aCR3FMMChxG56fdcDrVmQny9pY4A+8a8WacXZ9DoVmrmSVwVDDrQcr3q6VSRdu35j0NQmEg/Nmi4iFRxmoyxLkc1bhRC+wjIx1oktsjdnHfGKLoCTT4d43EH5Rnnvn+fSqesW1xPqCRQo5jCDkKdoNaFnMFuDb5ziPeufXPNdNpYAXa4Az0YHpRzcrubRgpGba6X5UUcTM7NEAAR69yfarkEAtZFIZmZmB3HqR/hV+YJlTEF5bccN1IrNmuhanzxnzCe53c1m7tm6io6sra/db52jydiAKwBwB7VzV1cGRsn0wAOgFaOoS792epO4896w5WOTXtUaCow82edKftJNkLsSahenk0xqUmaIaOtTKjLnbTYVDOARnPSt+2tbN0KyP8AvD1GcYq6VPmIqT5TDCH0oIIq7eWb2zkEcHoahCqy4I59abg07MFK6uQrkkVZizu+tRAAU9TzTjoJkkuATUUTDzU+tSvylFvAZWz0Qck1Vm3oK9lqMvpPnUZx3qmT71JeYFwVBJCjHWq9Y1JXkzSK0Hg0uTj2qOpdwFuFzyWzipTGxM1PbEB2JGcLwKrZqe1YL5hIJ44xVQfvCktBsjEucrt9qbmkkcMxIpC2KTeoWJYZ2trhJUzx94DuK6AyC7tyVKsMZT29q5rOGJ9KtafefZLgA8xseR6e9XFprklsyJwb95bo0I2+dWz09a1ILlWRcghmPPsaqzRo/wC9QD5uv+1ViC3Rokk3ZwdpU1zUva4esodyZctSF+xZkQSRsnqMVjSpLG5iU5AyPrW0FUMWAGT1PrTGhjfO5Qc9a78VhXXSa3Rz0qnJuYKw4k2n5j3xWhbREK7D7ydAB1q4LWJW3KuDigRmCNhHlmY8Z9a5aOBnGqnPVI2lWi46bme7+VFGMZ3Nk0FkdCZGiWPtuOatLBhfNY4fPB9PrVR4R9mmcKHMnQH1/wD11cnNVHd6X/TQEk4qxW860SRlilDAjrg4/OrFtcI22MuZDjG4DgCseOGaOYErsK9dw4q413Ki5cnaR1UY/KtFUlu0VKC2RryxCdNsewlezdD9Kowxuk6+ZGFB9sGobbUCJo4pGZlcDa57Grj2wNwI8lXflTjgetKcZTaqQ36q5C933ZDZrK0fMkilCem3gmqwt1B/dSbhjlW4NWLm0u/vth8D+E/0qmGbpjkdc1z1cROE/hsvMuEbrcCr7gpyjE9x1q2thEwByWbvk4FQpMydz681YEqOABwexArSli6cnaSsxSjJbDZNOtlPzhR271Wk0rq8L5Q8bT1H0NaOCV28mmCNo2LcquOWPFdkoRtdozU5dzOggZHww2v0K46+9X0+4KiMu+dBGrezf3SPWp4iGUknBHUelKnZrQcm+oyQcZrPnQkbug7Vq7dwbHOOtVpYxt5IpzjdBGVjJ2kZ4zShCwyavtbxldy/MTzUflbax9m0a85T2HNIQUYMOfbsatulVZWAGKiSsUncR0icM6BueigdD/hVenA45yQwNNrJu5ogoq1LaMmCe/Sm/ZivL8e1NwlcXMiDBPTnFHOMc9elWVMafTuPWo3dS3yLj0ocUuoXGxqdymrEqeYqryOaarIoB3DNTB/MlGQcKcc+taRStYht3uVZIyMkfyqEgg4NalxESpYccVnFsSFgAfY1FSPKyou6Gc9PWlU4NJSqAWwTgewzUIoSinAAg+vak20WAcpqZE3sAOpqvgg8VPGxVgehFXHzJZI8ZXg4/A1ERirhdZoyX4cdPSqxXNXJdiUyGipPLo8uosyrjBTqeIx3pwUelUkK5GKdUm0Um2nYVxg609Rk0BealVQKaQmxVGOKkFCikZq1WhG41zULHmns1V2Y5rOTKiiQNmlqIE5qVfbvSTuNoQmkp5UYzTKGCDNG6mmmmlcYrnKEV2umamdS8PxafKI9gB2Ntwyt6E9wa4jNXtIvPss5hkP7uTp7Glyxn7k9mDcormj0NC+gNtdKTkq3J45BqHllz2roL2BdQslZQA56kddw/wAf6mufyyDYeMHBHvXkTi4ycXujWVmlJbMcU4x+VRkbefwpxf5gfQU/AcDdwO5qSCHnGaUruGT26U/Csx2Nx69qmhjSVQm4ZByBQOxXU4zu6+9N6tzT2B3kOMHODUiQrjnIGeBigBgXhcHHPNSp5YJJjyT6U9rUJFnzAQTkU+2iO0SHG31pMLO5bigQIqBT7k1MqoflOCO+RTbbJRmIyR2q0beNbNZSx+Y9ak6IoZFBCDu3NnsKtFd0ZO7JPUetVkjUyktnAHGKnQAyBXVsDoM0zWKsWI32Abhn8awtcAm85QuSoDj3rZluhEreYoPZeOtcnqt/udljYsx6tn9BXRhIN1FLojHES93lMKQ9hUdOYndTa7nuYoKKKKQCjmrMYPGD+lV0I6H8KsoSDg9a0gTIlVSxxjNTruUcAfnUcROTU7YwB+tdEVpcxbK7uxzlvyFVnyDnrVh9oJA9eTURwTzziokXErhPmzmplIX/ADio2PU9qjzn16dBWV7F2uPlkZlx0QnIANRUUVDdykrE0bVetJsTL6VmoRu5qzAfnB7A1rTlZkTVzpsq6b1A3DGcmqzNkYVjw3U1YsCCCmFO8YB69aYUWL5CDuyea5Mwgo1eZdSaOsbdiNS8L8lT7inkGQBm4I5pzgDBIw2B071J8hXHfHFeeaWGoQV+6NwPBFNZG6tz35o3hGIH5VPHtcMz43YwBQkUo3KMiNGy3S4zFw646qTyR7iujgYInHzIRkEDPFZiRiMtnkSE/e9PStC2by4/LUFVUYXHQVTehvBF1LmKK2eRyuwjPzDBrEuZd6iUx/Nu5PTH0FLLc3N7wzrut5WQZ745H6EU9YWZVABPy9zmkrxdypPmVjGvtoYgHNZLjk1s3tuVlyT1JyPQ1mSR81791OKkjzYrldmU2jJBIBIHXilQIYnBPzmpgWj3AEjdwcelNiiDSKGxjJ7Vny6ml9BlsfKnVl+8M4z2OOKsJIc8knPXPemXLJvxGOB0wMc0yNucnmmtHYT11NRZVmDRsc7u59aqS2rxNyDjsaYkuJfbNbcQF5AoLYCnnjvW6SqIybcDAZSvWlUZPpVq+hEUpUHOKroCQT2HesnGzsaJ3VxzYG1cfhWjG629iwA5YZPrWYG2uGxkA9+9S3M37rLcE9RVxlZNkSjeyM2Zt0zN6mo6CcnNFcbd2dKCiijvSAUjBwKsWpCrKxGcLVdvvGpow32SY444BNXH4hS2IWbcxOMZpKKKkYtJ2o70uxtm7B29M0AXLTUGgXy3BZO3tWvbakjrlCA2eSRn9K5zBxTl3R/OrbW/WtFUduV7Gcqabujr4r1ZcDYCeuVbH6GrMZRo9zkofwrj0vSf9ZGHPqODVldTXICmVAB3Oaa5lG0ajXrqS4K93E6ZniA+V9x78VD5wPOCMe1YZvdwBiuQDjkMMfhQNSuQBlxgdCuK3jVnFWbuZOkm9NC7c35DmNYZdhGCwU1WaQSxt5IZgT3BBFXLW9hnXY7PuA/vZNNeCaWTLTnZ1JLdKLzkx2jHQzZzcP8AJJu57tx+tQ/ZJXIZw7L2C810CRqoC2seP70snUn2qRbQFt0kjM31wKmFOU9WrIcqkY6IyINNczpPONkaEBUXk57Vq/ZFfc7MfMfq3oPSp1iVeQKfXTGjFJp9TCVRtiEgdazLi3QuzoOD1wK1O+fSgjNY4rDyrpRvZBTqKGpgmLHY/h2pwgnADiMkY9K1ZLWJ2B5Xp0NNmYqPLT5QOT71w0svk2/aOx0OuvsmcZJmhYQZZx/Bxkfn1rOmOoGPLxSIncha1GyJxKh2SA5OOhq0s00ke0Absc+hrWFK/uVFqtmDnbVHMRiSN0eByHB6ituKRLkEMPLnx8wz0/xFE4YSZ8lFcj5XUVT8qYSBdrKxPy5PNbKHJsDlzl0xSof3TiT2PGabIolQ84dRyp60xbi4hLB1jl2joDzTJJo5186F1WRSNytwcVbnbRkqLIypVSVzx1NRec+ODn3qaMRSzqkswfd/CGGP8KJ7WJGIQHnnNS02roq62ZQluHJIquc9TVuSA7eQeP4gP51A0Lr2yPUVzzUr6m0Whik5x68U8ocM+R1xgCmlHUZKkfhUsCOzYA68cnAqUr6Db6mxKrFQXXIx91T0qhMF+UMCpJ5DZzWoyNE2HGcjjB4qN44pz86hiOBXbOFzljKxlCAzuwhG4DsTyarMjAnKnjrxV+/tktNjRMw3dVzxVR7mRl27jjGK5Zxs7M6Iu6uiGpo5iGUN93PWoj2+lJWabTLaua800X2djuB4wPesinbmKAE8DgU2rqT5mTGPKFKKeEBHGc9hUnknO0dalRY7ojWNnyQCfWjBX3qxie2baMqe9X7eW3nwkiqjY6+vtWsaaemzIc2tTIAYjtTlU7uv5VsyWnyfuwp9ahjt40bLjB6ZFX7Fpk+0TKX3RTSauXEHdORVMjBwamSaGncAeaeeelMFOFJDFFLigU6qSEAHvTgOcUgpaZIoX2p4WkFPFWhMOgqNqc1Rk0mwQxqhI5qY+9NC7m61m1ctCAU8cUowKXcMdaaQgPTpTMUFxjimFzQ2hpMWo2IFBJNMYVm2UkJu5o5IyOCOlJinDINSijqvD+pGdfs7/eOFI9+xqzq+lu2ZY12yfxoBjJ/xrm4FeBhcxvskQ5UiuusfEtrq4VLtkt7zoztwj+/saxxdKUrTS16jouOsXsc/9gugnmCIsvUheSPwqFcucc8V6A9kyKrNEiqRlHjbcp/EVzOrWUklzM0VoY2jyxYciVeORjoR6V56d3ZmsqVldFKCzDKHzkY5+tL5bW7ggKSp696bBdE4UtwB+dDhpSXUHGf/ANdLUyJJl89VfI3ZxtXtUhjmjjAcnGcOQKZaqBlmbH071ogdAZQ6nrnAxSLik9SnfwMyoIVGMc46mpLa1eGD94MZP1FXoGABKc+hAqWOHeuWYhR0FK5ooa3IFjCRHOMtzmp4yFtpByQBwCKUrngg88/SnMuEAwOlK5olYr4BGG7kA/So/NZZWlkYhI8de4xUzuYYZAXyQPT1qlJK8sLROPlAyT29qpBJ2M3UtQZwQG4I6egrDd8nmr99HtWNsj5h0zzWc6969mEFCCSODm5ndjH5XG3n1qHBqQ5xjPFRnrUyLQUUUVIxRyeKsRBu5/SoAD64qePnjJrSBMi3EvHXFD9eMmkTjGalLqMYH6V0LYx6lYo3pTNmThmC4Hpmp3YnoPxqHvUNItMryL83XI9aj6HipJTgkfrUVYS3NEFFFFSMUdatQiqg61eteSBWlPcmex0Wi23mxvKTtSMc8dT2FWjCA5ZjkA5GO9a1haCy8OxNuz5zb2UHrjgD+dMazL/N5QAxx1xXDjKrnUcei0NqNK0ObuYUo8xuBtA6e9WLRdzOj8E9OOKvtphwSSCoHakisdrLID0ORXLcvkdzLkgkF0V2r16U+GJkl+7n2xWvLbZcsUG5ehpDCTwUG3p1x+tFxqBS8s+YNwyF+6auW2FC5X5ycn2Ham4EzFkKYHyj5s0rwy4Cs4Ax8uD3oNErGPbq9vf3+755GlByT1BHGB+fPtWrG6+XjPzd/QVE6qFLuF8z7pYDkiiJgduehpvUlaFDVl2eWVHUE1imQY2kd/yrZ1aYSMkQwdhJz/Ss6CxkuTxhRnqa9rDJ+xjc8+q17RlbarS4UMRu4PfH0rUlsIBp0rRkKw5xnJ+lW7HSAjbnIZh0AFM1NEFyiR7RIQWK+3/16yq4pKShT1bKVJ8rnLRI5WQYakT71PmILnHrUatg5rR7jWxLWpYSOkU0qjO0Ac1loDIQAK2/KFnpjxSuAX5GOufSt6Sd7mVR6WMuZ3lk3O2STk0oAC8/kKYeJMVMpwMHGD1pLVj2RASc554PAqC4k3cGrEuduTwKpyc81lN2Vi4kVFGKMZrA0DtT1AwW9KZShiOlNAKqljxzVoZj0yQH+JxSWd0sBwy5zU+oc20ZUYVmzWsYrlckzOTfMkZxzgD0oXG4bunehvvH60g96y6mhM4CKqjB5zuFRZIPU49KTJAI7HrRQ2FiVhHtUqcHvTGYv8zNnmm0UNhYlWMOxIK7RyfanrNGqtiP5sYBqFXZM7e4waRcbhnpmqUrbCa7j5JNzEhcZHeo6sywTBVzEDnpt61XKsOqkc46UpJ31BNWLVhF5kjdsDr6V0NlFhdxO/0JqjpViwjDyLgsc4NbSoqDCjAFd9CHLG7OStO7sh1FWIYCQzMv0yKsvbwtGpbOR1AzzXNUzKnCfLa6NIYKcoc2xRit/OfOcZ4zU/2Zfu85HpVpYVDbY1xjnHYU1iQnzYyeBXk1MVOU3JOx3ww0Ixs1cz3TYcZzTatT2zg7gQfUVVwQcGvbwdVTp/Fdnl4mm4z2sgKF0JAyRyPqKyLt5ftDNkqGA2/TFdLZwq0LMwyc8VT1KDam3Z97IHHGcZFckcTbEyg+r/4B0+x/cxmuiOYnaeE5YsAe9VjdSk/fP51vrGrptK59jVafSYW5TKH26V2TpS+yzGNSPUz4r+cDyzK208c84q5EsYjL7iSRyxNZ81lJFIVHIHepkjZ4kQkjHWpg5J2ZclF6omVw0okjzwcexHeqtxCsrs6LkA8EipmdUQjHyqMVTeZpH2jgYwAOgFKbVrMIp3uiUadNJDuG0cZAzzWhG5lsI3PzHbgnHQ1mxyKnziQo2MDvmtK3KS2gWNslAcgcZPrRBxWwp36kAY4284Bp2Av3MLxhh1FRsGVqeqn1qxDzlkCs25R2Panx712q6FkHKgDvUQGef51bSGVlyRhfVuKpdyWOY77ZD3B6VEg3SY7U9sLaquTyR3oiKwRvO33UH51ZPQzNWl33PkkgCOs9V3gngY96WaTzpnk/vGmV585c0mzrjG0bCmkGM89KM8AelFSUKcZ4GB2p2zHJwR7GhR608fK3yHmmkIbnB4p6sCQCdo/OmZ3GlAIPNUhFyOUqwLKGyO/NRyEA5xioCcD3pNzd6pz6E8pZW6k9SCOhz1+tSrdecMSdc846kVUySu38aACTnApqbBxRcS4Kggnj37UMsUq8HDVCgJUqQpA6HOMU/ZGV3LJj/ZI5q021qTZIY8JTkHNMHWpirJw2cHpTNvNJoaYlPFNxT6EJhTqTFKKoQ4U8HimilPAqkIa1RE08mmGpY0NptOpCKhlIZk4pM07HNG2kMCOKbT+2KTFFgGYpDT8H0pCKVh3GAVYijC/O44FLbwb23MdqDqTRcyqW2pwo/WqSsrslu7shksxPH6VAdpIOSGHcUjHNIB3NZuTbLSsdR4c8R3NhI1tIfMjcYMZPDD1HvXoENp9onaOEqy7N4DgksMV4/A5W5tyR0evaLCc2cdjd+XG58pRtddwHGOa5MbFOKl1N8M2m49DA1XSrfe6i2HXKkHBH0NYcY+ymdAPM2YA3AD6/Wuz1u5F9eNcxQrDn5nVPuCuIR8tIwZZMsQT61wR1NakVdFZVJzjA5yBU0StIy7gW5xy2BU6QGVnMcbMAM4A6UIBtC7xjOWBpswcLM0IVVU4wABjinh+MHGelQKdqDaPpinbi/C8Adak3Tshwdt+3FPZ8jIHJ/nULkDvj3Bqv5jbsg/n2osNySFvc7VO4YY84FMeNYY3Gd7MOp5qLKSSfM/Cjv0zS3A2W+9ZN3Bx7VtRpOpNQRjUqKMXIo6mEjgUYO9uMg+nrWFKQTV+edgNhUNjkZ7VRaSNj80fbqpr3arWyOKmmkQEVG3WpiV54+nPSocjnIz6e1c0jdDaKKKgY8N+VWUYEY/nVOpVJGK0jImSL6txwOfXNOClgSPzqoGY8/wAqsxMcZPCgc1vGVzJqw1sLmq8jn+GppGDHtVRzgGomy4ojJzzR2pDRnisDQKKKkiQO2Dn2AoSuBHWhp6PJKuxTx1PahLVVy8iZwPu1aivfm4QKOwFb04crvJmU5XWh6Dp8yXmlwwhfntlKsM9iSQf6VqwJbPaeTKVTjJdmxt/xNcTpl5scOWIUja+O4rsp7DbYwSEhvMTcCpyMfWvNx9D2dXmWz1OvCVOeHK90UlIeRkT5u3PelaIDcCpAB6A0+Jo412Kn3v4j3q3GOCXiG48Zrh5jq5TOWOJ7fzI2yh74ORVZoVddkh3R9SBXQGCNAvmICuedvGaoXbQiVdkOwBcFSepoUrgl0MybyxtWNQEz/CO/0qG7eVLXhSAzABjU77UYlFLAd8VSnVriIIxyqnOM1aIlcqTTsxVMflVO5uXXKo231IqzN8qNtJyOM1iySksfrXr4OhT5PaPVv8Dzq1Sbnyjw2XGTWnYSBeMZwc4rFLEHHXmtvS7cSRGQnqcYrqrSiqUubsZQi3NWNZpdrMigAHjr1rnNTuiTLKPl3AID3966DUzGlqWQ7SoAAPf0rjtUkwVjz0HP1rxsJG9Tm7HdiHoomaTzQvPApuM1cgSEBvM3Zx8uDXopXZg3ZE1tAwj8/ftVTjPXFLcXL3M45DAcACqpmYQmAYCFtzeppAwAxWvNpZGfLrdlnYzH7p47mpPKC8nOKhSchNpJI9M1IJN3GeKtWJdxkyluarFDkg1fbGyqj43fWpmkVFlXbye1N4FS4Pem49vpWDRrciopcbWGaAOenFTYYsefMXHrWhqWVihTHTk1WiChxVjUiT5ZraKtTZm9ZIzu9KfSlJGOPWm1iaBRRRSAKKfGhkkCAgE+tPuLZ7dgGwc9xT5Xa4XV7ENTxWsspG0UxonQZbg9cd6tWd+bZsOu5D+Yq4KN/eJk3b3TXjtykCKSSQMZqdbBSoBGB1NT2iG6UOqEjjitJLRcfvXKsTwBXVVr0aK99nPClVqv3EUwoUYHartnbs3zlcgnoRVyO1tgmV2njqTmp0zt+Xk9a8vF5iqsOSCsd+GwHJPmmxgQBuSfekO0Z29fSpyVZMdD3HpURTJC9/avLud7hYhBf5lUZDdfWpkiUERSD8fSmKRH0wPrR9oDSAMFB+uBRcfIWZbHeiNCSVB5XNMOmwsoWYEkjcBnkfjUlvLhgVO31zU9whMiuvXr1ojOUXdMidJNWaIGgWBCigqijgYzgVlagjzwlIRknkc8nnNdKjxTIqsPmA+YEVTlsI0bzE5AOcY4ojL3rvclxVuU5IxHduXgnnBFNbzBwFHFdBfQbk2quXPQ1jsu0lTnj1FfS4TFqurPRni4ig6LvujJuAwOH4zUDEOmE528c1pXkO6MsO1Z1vEGQk8EHnJ4roknexEWmrkMlpM0EcmBhmIPPb/OabHb27XCAnYpPzc1qyPEbYKG5THGOtQzwQzrkDY4HBHQ/WpdNdBqb6mdfWSxzEKMY6AjqOxqGxfyL+MtgBvl5PFaMU+dscxwyHCt3FNurBJ1IACP2I6E1i0nK8dzRS0tIddRqjVCp7+tKkvmx+S4ImjGCp7/AONIqEAluAOueK0vfVE7aMd5uGU91PFWZrkucErk8qB1FU3kWIfeBb0FQiTc+ec1LauPluajKGhjUDPWs/V3aK3itwfvHcxq/wAh4h3C9qx9Rm8y8wTlR1qqztBipK8ijRSspViCMUHj8q4TqEooopAKD70pIOabRTuA4daXdxgfjTKUdaLgPVjuBYbgBjk07aNud3J9qaKlikEb7toYdMGrXmSxjIUP+FIM5q4IllBCfeHYmonhKHBFU4PclSI6kU8g4HHamY5pRQgZN5jZweFPOO1PBBXGOar5pwNWpCsSbRTwme4/Oos08GmrEkm2gCmhqUMRnHQ1QiQL8uetMPJ4BpVdvwp6gE1W4iFk2j61GRVtgDnvUZQZP+FJxGmQbaNpqbYB2z+NAAzk/lU8o7kPlt6GjyyOSKlYnJPA7cUznFFkFxmKBGz9Afyp+Tmg5J+8fzpWHcZ5ZCk4OB1oVVxkg4+uKesfr+tBcjheB/OiwXGqW2FUGc8kelV2BqxuPOScH0pnHPFS1caIAtSpHhSzDAHTPejv0pzNuPzHPtSSSG2Otv3uqWoI43jg17ISnkwquXTG1EB6HGB+VeS6BbNd+IbWJQDg5OelemsFaPHPDBeW4NcGMey9Tqwy3ZX1m5WOzmjCgyyAKDu+X0Oa5iHEMKDaF+XK8dR0ya3dZMckcaoXIZsKzLxhe/v+FZUkeJQo5Unj1NcS0NZu7GQXHkuUQsFYfNjvVZlAlycYz3q1LAsMZOCcngVQeRg/XjHT0pmMjQikygjPy9s0TXEcIwu04rPmeWQKkY3EEFiB29Kjm3ELwV5yaVh82hbkvUQAuG3HnaMUhea5G4oIxngE54+lV4z5k0auBjOQPepbq48pcL94969LBYWFROc+hy1600+WIjNBECpG855zVO7umk+UcKOwqLzAe9QTNxkA4FelaMV7qsYJNvUglfNV26ZpXYA8HNN5fjtXPJ3ZulYhY802pHXA4zTMH0rFo0QlFFLQAAZqZAO5/SmgADI4qVQOvFXFEtkijnmpWQYGMdPSmoBnNSOnGeK3S0Mm9Sq+e3FQMCe1WmXsaiYAVlJGiZX59KNpqUqO9MIIrNoq4yrdgUEw3D8arBCe1X0ENntZvmfH3c9KumtbkzelibUg0YT+7nO31qlG/OTRd3jXUm4rt4xjNQq1VOacroUYtR1Oi0yUHK16HZXCSeG7WELnauMr1zu5FeYaZMFkGe9ei+G5YbjTLi1kJ3RkumD2I/xH61nj054ZSXRlYRqNez6otRqsigqGCZwwbqDWqlupiV+B6GsuJjDAWUbo3bqexrRhuSkZjIBB6V8+9GewkmiOdjFyQABz+FYV3cq0nqT0FW7nUI3kOGJJJBUiqVzaF2MqqQCfWrXmZvTYqzOTbBjkAN83zYBFVfMEb/KwwcMD2Iqa7Q+UykbuKzZWCRdfQc10Uoc8lHuc9WfKmwvGQRuVJyfyrAdgCfrWlK+8YrDvJSLp1AGAcV7kaaoU+VO55vM6krslLjOc1veG5Ud5ImY8YZV9fWuWDmrunzFLlSpw3r6VE0qsXB9TRe4+bsdXqxwMKwwDk8df8K4u6mWSR27sc1uXM8lwCWlJB461ztzE0TYYdelZww/sI73uU6vtZX2It3NS+bhKgopKTRVhxbmnK4zUdKFJPShNhYnEn41KrDsahSI4yTj3p6oB1Oee1aK5DsWkbIIODUbJk5JoDgf/AFulSqQwyf5VruZ7FZk7UwqAeoFWXQfn0qHaC3NQ4lJkW3qR+dJtANTDimNjtUtFXEiGZVB9am1FWWQA9MYFNhG2RWPQVNqB3yDncvrVW9xk395Gf2IAptSAHfj2o8snpWNmaXI6AMnAqQRMWCgcmpwXtlaPaAx+8SOfpQo9wbKx+VqVmeTksTj1PSkIJNJ0pDNJFjkgLEh2x1p+m6cs0okkOVB+7WWrMhypxWrpV6qy7HOM9K6KcoykuYxmpKLsdnpqIls3zdWxt9OOtWrmExsCQCpHbqKzbch0KKMOR1rZRswqzHcQOOa8jME44iTZ6eBalQSM8DDEjJzVuORAME5IHGOMGonU+b8p2jqVNMQHHTk87u4rk3Ou1hzuXlyDVjzRtHBAPcHtVIqS2ffnmlZT17dcmlYCR2XGRyPSo1j34YBsemaZn2yfapbXcZVjjG5u6setMLdy1GhTnIJPcVs2sLG1SRhk5IGecf8A1qj02yFzcpHtw2Mla2HhVZfssYAG3JbPQelZ63KnKNrIxLhGik2oeOu7uagaf59qvjjOCefrVydW81t2QyH14P8AhWPcgGbgYYnJ9apWZi4sZPdws6Z/1gO0g9azrtldBLjJHoc49qslQ8u6ReemDVabaAm0qq9AAOtb05OElKO6OapHmXLIy72c20HmbdwPb0rKt7pCpQgKw5PvWlqUbmyuNq53Yx+fNcyqsZFXoT0Ne7HESnGM+55qpKLcTcjBZiozyM4qxs3R9eR0qhG7RuNx6jHFaCHIrqi7mMtDOnznOOh5q5DKXtRnt0qveHDsooifbZMSM4cVCdpMpq8UV7+MF1fofWqZBzl3ZiPU1dkLSZAOR3JqCSBiM44rGcbu6NYuysyAMBxVi2+aUAetVtpDYqxbZSUHHFTDcqWxpyyhIpJuORgVz0j+ZIz+vSr+pTERRwdDjJFZ1KvO7sKlGyuKclR7UlKpw36dKQjBwe1YmoUUUUgCiiigAooooAcpz1P0pc470yincLEgfHIPNSiUt1JqtSgkVSkxNFkncaKiDmnByaq5Nh9KKYGp45OR+VNCHCnCk3ZPPT2oVgT7VaEPFLmm5GcA5p1MQ8VKvXNRCpFNWiGKcimmns3aozTYIaTTdxxTjTKllIM0nSlNNqRi5p4JFMApaaEBOaYetOOPWmUmMKbTjSYPoTn2qRjGbPSm5PanMjAEspH1FKgznt9anqUb3g8Kt7NOykkcA+ldmymVtvojFvQcf/Xri/Dsr28QkX+OT0rtbhwuoyM7Nkx5OzgNnB7fjXm4xe+vQ6sO/dfqZ91I9ztSSTiPmMEYAB/rUP7uNUeTAXgLn1p915bTkRKoUcex9KVX2LGhwcDn0zXMaPcju4eC3HHbPWs97dWILKQetXrlwAMsQD37VW835iDyOlBlIjI2j5cADsarzpJI/DL9BU4xyDwCckmkVRnjIA59M1rQpSqz5YmU6ijG7I4olhTfJgP7npWbeTeYx+bJqS/kLSHJ47DNZruc17qjGlDkiciTk+ZiNuByDSHJHzNx35ppl9ajaXrxWbkjVJksFu07jOMVcXTWycntx71QSdowMMQKu/2g20bWzVQcLaky5+hG/wC6cZiG5TzkUjxLNE0uxQT1xRJPLOMHkdKNjJEynjPrT0foGqM4x+9AUd81OwHrTeM9a5+VXNbiAelSrnHShcY4qRVyatIlscgbp0FStkKB2pFH0/Gh2+btxWq0RnuyB85qJjjipCSTmmkE96zZaIj70mKnWP2znpzUqQFJNpwvrIOcCkoNjckJHCsbpvIJboAelVr1WW6dXIOOmOmKmgZN7MCvyg7A3c9jVNmLMSxyxOSaU2uWyHFO42nJ1pvenA/NWSLNKzIVgRXTWty8TJNC+116Y/lXIwyba1rG8AYIehrupSi1yvqctWLvzI9Esr6Ixg4zvXPPI56j86ldo2jyieWR0561zmnzFIJgWBTjjPPXk1eM2Pk3LtX7rMe1fO4mgqVVwR69Cvz01IDGykyOQSTk4pXuCsZJJyBwP6VHI+FUiZc454qhNcRnJIG3v81ZpNsqckiG4nmC7mP3untWVc3SPwr7sd/U0zUdRWZvLh+WIDHXrWaGLnA5NevhKHs/fktfyPOrVOfRbF5f3mc1gy585+e5reESiDcTzj1rnmOWJ966sRsjOjux6mtGyi2qXIPPArMQgHmugsFElop6YPFKgrsKrsiN0KruJ/Cs67m835fStG8U42k8VmNGmaurfZE0+5VA55NPMRAyTTmQBhjsaekZf1JrnUehu2QrGWOAM1OFEZGeoPp7U/IiyuMnIzUEjliCe2enpTsooWrFMpHAo3E9TxUePelHNK7HYlDHpUqvg1XHWnr+Z9KpMlotL8x9T0pHT86SM84qfgrknmtkrozejKhFJjgVK0Zzn+dKIxxkkevFRYdyNVywHSrzWamPC8d+arxIN4yOBU11cF/lBwBVxSSbZMrt6DDZDI2nLe1Ti12jhe3Uist8Zz3qSO7mi4Vzj0bkUlOKew3GTW5aWPZco4HQ5qO8QsxfHJ5pw1Berwc9yjUhv43xuhYc+tNuDVriSle9jOOVppHGfU4qS5ZXk3IMKe2ahzxj0rllubrYKASCCOoowana0mULlOvpzSSb2G2up0Gi6o0rCNifNXke9dVH5kg/dMOnK4rhtHs5PtQlJACV1Gn3e29kU52gAfjWOPg3CNR77FYWooTcUXGldD5ew+Znr7dxTVlUsvP8WOeBipLsmVhtZcDkn071RcSiOMEAA5b5R0Ge9ealdHoe0NJYmmmxCAy/3gOKbLDNG+MDB4yDTI9TS1jCxITgdScVHJrUr54jUnoa6KeCrz1UdPMynjKMdL6k/wBmldM7TuHpTIlaC4WXksO1VRqNxuz5oJz6Cp49Q3ttkUKp/EVpUy6vCN9/QmnmFKTs9Dp9P1GJJo3PPHKE96tx38c94yHh2BO5OqfWuZN43kANFGNuf3g7jjt+dOt70q0jkld2CcDoPSuBxaR1Xi3obKywRvI0gMo7gevY1iFHRhM+FG7PznGR9asB45Yw5L+UDgADk57CqV7HcvGJWXMK8ADt+FKKLkyeVo/KWRHVgwJyOmax5pw2AuDznI5GalknMNtsx93pWO8+H8oMy7hlSB3rWKucVSVnYqXlzstrjcTvL7Rz15/+tWGN7bQOcHA9s1f1SRF2W6kFlYs+DnBqjFgHcWwoYDGa9inFxios4r3vI1kjDOqK24qACavhcCsy3dkuuApVz1Faq/NXoU7NHJMzrkEXGT0I606HatvNv+7j9aS7JWVkI4zkGrOI2tlwOGGKSWrG3oikpR9qg4BHfrUjp/ou7tnioPskqNwNygnnNWZEJtVUDotSr21RTtfQyjndzVm1XfKi88n8qj8tifun8qsQjykLA/MeB/Ws4rUuT0My5YtcMT24qKtDykCYP5+tUpE2N7dqwnFrU1i09BlO4IznketNp44PIyMYIqEUMoqaSHZGjglgw646e1Q0NWBO4UUU7adu4dKQDaKKKACiiigAooooAUU4UylBp3Anjxn5hxUvmrgAKB9KqbqcGrRSsS4lgupPTFKdvVAdvTnvVbdTlbAp8wrEucEVIHXPeoN2e1OFNMTRMrnOKmQnqKrr1qdRgVpEhknUZphOKlGNtQtVslCbgeppMgn5T+dRt1pnTms3ItInKk0bePeoRKR1qVXJNCaYWYuPUGmE4qYEH601kqmhJkNBxmnMuKYcioZQoo3EfxH86QZoNIBCM8miOJ55kgQcucHHpRV3SULXMjr1VDtOO9CV3YG7K5vaXZfadRs9OiIVWlWMNgnHPzHA5wK6jXGV9SuPJUBFYRoo6hRwPrXKaBIyXzNn94Im2HPIY9/6fjXRMC3zkHkZ3AZzXj16jnJy7nXQjaJnSM0YySM9MelMfcVDA4z6VJcgN0GCPxqqJXb5MEY7VkUx5dsFSBg+tRFoREUMRDAfKwbv70wuxPTNKAWOWHT3rejh51ZJJaGE6sYrViBDj5j9QKpX12qgxqfrip7ybyomOQMDmuZnuCxPNe4406CtBWucUFKo7yY+a5Yk81VMhPemEk0lckptnWopD959TRmmUVNx2Hg9qepqHNOzg00xWLCOc4yQO9OaQkBVZvxOagByamOw47cVonoS0Chc8jP1NSALn7uKiG3P0qSqRLHYGeCalVDjODUS4zzip427VcSWJnaMbRz71C+c/wD1qsMuaayfLg4+tNpiTK5HvRtwQTxmpto6cUjIB25qeUq41pFRMIACRgtmqzTHYUJ+XOQM96fIcDoCPeqzHc2QoA9BWc5MuKBmz+VNoorK5YUUoYjpSUgHq1SxyFWBzUKKzttUZJ7Uv3T1zVxbQmjo7HUV2iNmwOgNazSllyT8uM8VxPmEe1TSajcOApc7R26Ctuek3zTjdmLhNaRdkbdzqMVuCRGCx6DrmsufU7i4XDEhfQDAqjEWeYE/Ma0ZEXyxvHT2oT5tYqw+VR0epS8w1ZgnMfIUHPeq5UZJxgU7IBAzSTaZTSZPc3REJA4LccGsyprhgz8ZwOOahrOpJyZUFZAOta9jMUTC9RWekWcelX4k8mHI4J6VpSTTuRUaasPuZy/BGM8VUKmrCRl35z0zmpQI1HQ8fnWrXNqyE7aFJYslS3AY4PH408OETn8v8/SnyuNygDGAf14qq7d6zfu7FrUZJJ82fWoKVjk0lYN3ZqlYlUZFLjFRAnPFSg5pp3ExRjPPNKPvcdaAtHIOQKokmUkfWrUfp1NVEycVo2yKVLHnHat6auZz0IdhySx4FQl8txwvYVNcEO21fuD9ah2iiXkJAJNvI61Gck59akxSYz0qWURMM1GwPerGw00r7VLiNMr89O1FSlKjxiosVcjbpxwPTNMqUjNN2GoaKTGVfXU2CAGIHA55qoEz1NHlj1qouUdhNJ7mhaav5DtvhBVvQ1bh1S3R96PIinqhXd+tYW0YpKU3zq01cFFJ3jobtx4gbcPKXOB1b/CoR4guB/Cn5GseikpcqtFWBxT3L02rXUpOZCAew4FQ/bZc5LE/U1XopupJ9QUIroa1vq4UBZVP1FaSaxb4GXB/nXL0VrHETREqMWdwl4JoVZHLRk9AP51dt5wzOZjwRjHrXn0VxNAwaKRlI9DW1aa15iCO4JDH+IVlUp0q0OW1n09f+COLqUpcydzsjMr4UyDaOVx29qbLfExeWT8vQZ7fSufhd3yVlDd/lPJpZEmlt2Ks4Y9AR/SvM+q1b25WdP1uPckurze6xoNxHpWfe3S2hlaPIbGwe5/+tTorKVYjK0pUgZyFyazNRmDlIw7OVJLMwxye1dVDDSg1OSMZVFN2TuUclmLMck8k0YoFOLYGPxxXSII5TFMjjPB6etbcNyFbOcqfSsA8nJqSCZoW46H1rSnUcWTOHMjpXWO4T6dDVYB4coRlSeKW3nHkHjBUc1ZgKzR5Ndukjl1iRBlyCuQfQ1YYq8YOwMw6gcHFI8A6r+VPhiYEMeAKHFtW2JutyvPbr5e8cr161UwN2QOO1W5LiNHYYLpyNoP8qhndY4SfL2sxwgJyfqa5aeIhUdupryyRUeEEZHHtVdrVmOTjFdDst+gVR+FRyR2qgkhR+NbypJiVVnPNZkH5RkVG8RQYI5rYlu4I+Bx7YrPm1AGT5UBA71hOEI9TaMpPoUTkUrBMZQkYHIbrn2ollMrliAPYUyuds2ClzQNu05zntSVIBRRRQAUUUUAFFFFABRRRQAUoNJSimgHA08UwU9apEsXFPVT+FKuO9PFaJEtjkFTioVFTqK1iQx7cCoWqV+BUZqmSiJhUZqVhUZFZMtELVKjYXFMK0H64qdiiwrD1p/mKelVBTgTVKRLiTNjsfwpvlb+5pqmpFJp6MNhvllaTYT3qwOV5ph68U+VCTIdn41qWCNFYTyocMxwD6VR2n04rUjjRLC3SR9uXDcDOaaTs2uxM3sibTYuXG1wd3AY+np+tbiXBjYAnDYxyOaoWm/yIZlyVZi4BGcZP6dBWpCiTnbLkNnAwOfpXhVUlKyPQo35SN387cxToM9MA1SZ0PzKDuI71qXZjt0ZUHKjHWsgsTjOOK7MDho1k3JaGGKqum0kxBwMVHLKIkycZ9KWR/LjLflWDqNy4ByeT1r2pzUEedCHMyDUb8zEqp4z19azaCcnJorzZzcndnoRioqyCiiioGFFFFABRRRQA5Tg1ID3FRA4NSK2aqLEx4bFSK24VDTlODWiZLRYQA81OmM9vyqurVKrfNjj8a1izNkzLzg01iBye1KxJPaoWxk5NU2SkHmZ7d+aPOZTgMQD1xUeDnija3pUXZdkMdS7Z6VDsZ32ICzHgADrVho2PA/GjeUwY3KMG+UIOB+NQ0UmQtZzIpZoyADg57VAatPKxOWYue+45qIRll3BTt6Z7VEoroUm+pDTwlS7FC5YE+2cUb9ucDFJRtuO4ix4I3NsHc9/ypJzFkCJCAO5Oc00tk/400j1ob0sgtqNopwXNG3acsOKmwyzZqQ+7HHrWg0iEEE1kGZyAAcAdhTd7H+I/nW0aqirIzcLu5LNIN2BSCYhfujPaoaci7jWfM2y7KwBSxqaOAkjFSwW5cqBwT61eSIRrwelawp31ZEp2GW9t6jp6055A2Sqj5flxUjA+WVVcscDI/WmpbP0I57k1vZ7Ixv1ZEGO48YHTimFTirRg2Uz5fQmlyjTKZUZILAe9QP6Yq46jOcVXkWsZI0iyqRTalIqMisWjVMSpkxiosGpVXHApxEyYdKXFAHGKcFNamYqAk8Y4q0jFUwOM1AowKdk4rSOhD1JduTimtHihWpHctxVaC1BY95IJwKf5QHAqMNinh/ShWB3EK+1RkVPkE800gGhoEysy45qMgVYZe1MKelZtFplfZzSmP0qXYaTFRylXISpApuOKnNMK8cUmhpkZFNK8cVLtpuOcVNh3IsHmkxUpGOKMClyjuQ4NFSHpk/hTSOalodxtFKFJpdhosA2ipAtBGF+tOwXLVletDIMngGuga/jSFJdrGNjgkfwmuVxgDjmtKynV7ZoJSRG3f0NbwqT5XFPUwqQi3c2jeI+Aocg55xweK5ibO4kjnPNazyJb2uxZfMc8A4wAKpTRRmMvnnril+8lH95uEVGL90og4HHU/pS44pDgGjO48fnWRsNOM0oxn3pGI6UgpX1GXVu32Ec7m6kmtiwkUwDn5s8isASfIqFRx0NbOkRSzyiKKFpGbpgV00p66s56kdNDUT5jUYvEaR0WNnVTgMvIY960ktLWC2la7kkMgyiww929GbsPpn6is8xqqeXnavZFPC0pYiVSahR+b6Gfs1FXmVnkhilYKoUA5wD1NVJXaeQM2SBWn5cCj/VrTcW24DYBWsMPGF7dSfaXMS9NxCwDkrkcYqk9wzH5iT+NWr24W+uFA4A4FVrq2+zOB5iuD/dOa56jd247HTBKyvuQliTnJptFFYmoUUUUgClBwc8fjSUUAO4I6YNBQ0gp4qlqA0rgcU2pqQqTzim4iuRUVNs46ZpuwUuVhcjoqTYKQpRZjuIBTgtJ0qQc00hMQLTwKco4qQKK0USGxiipAKXZT1SrSJbFUVMopuzAzmnBhtrRKxDGtTCaUsDUbGk2NIRjUZNDGmE1m2WkBphp1NNQykANOzUWaN1K47E4NAznqcVFmlDEd6dxWLIYY5pQ+GyKrhiTTx1q1IlotCTcBkZ+lb2maRda7rOnaZHNBarMdollbhcDJJx7VgWi5uEyM+grtvBGmWWo+OLOHUYzPA0p8yHdtGwITuz6DHQc0qsmqZMUnOw+605IzutiwRGKbZHbc2ONyjGCOPXinRBlQqpCuR1Pf/69XNRuxc3DfOdscjbW5+6OAMZqr9oWJC+4ZPOSea8Sd5Tsj0IWUbszrmKdCWlyQT1zxVepri6luTlzwOgHSoK+moRnGmlNJPyPGquLm3HbzIpvuYrnL/liD37107LmoHtYiDlAc+op1Ic6sFOaizjqK6C40q2bJVSjH+6azn0t1PyyKfqK4ZUJxOyNWLKFFXP7NnxkFD+NN/s+47Kp+hqPZz7Fc8e5Voq4ul3TfwqPqaJNNmiXc7IAPQ0ezn2Dnj3KdFKRg4pdpUZKnB6GpsUNpynFAK4+5n8acpC43JxnrmmkA7rS05kIG4DK9jTKskmHTmpIzg9B+VQjHBzT81aZDLSnOAaftQDHGfaqgbAqZJD6VopIhokaFsZwFX3NRMPQ59wKm8wtwR27mmFNw75ptX2En3Kx56mkGPTipzbt6U0wOtRysu6KzgZz6+lNVnHyg8Hsan2bqcsPfbUcruVzIWK2SZD821h1qs8T9uRnGRVobIx5hILdlAzUe/eCG5YnrVNJqwk2VSnNAA/HvUzL3A/DmmbD/hWXKXcRSB2pjsWapNhXg9aQrzzQ07AiGipCoA/lTdvfsKixVxAMnAq3DEMfN0Xk47+gqFAFxnqeac0oVcLnOck+pq42WrJd3sXUlAfjjAxx+v8An2qX7QgXdn5ugWsvzT06UqsWPGfatVV7EOBrC+AbgZHqetON5lsqCFHUVmDOOetJuI6g1ftWT7NGsblWXA/Wm211BEG82Mkn+VZYkIoMnPWj2r3F7PSxo3Elu/zRkgntt4FUnOaj3ik3ZqJTuUo2GsOabszSng06JwHDE8A1no2WKkBOOK1LTTVYZccUy3eCZ8DCMPU4BrQWURNsLKcHoDmumnTjuYVJy2RDNppLZjAx6VBLYyRgkjgd/Wugh+yvbSs87JKpXy0CZDD+LJ7Y4qjMjSHIY59M8Vq4RexmpyW5iFHHY/lSYIPNXZ45EPzA896qOaylGxqncbRTS2KjLZqGyrEm8DilB9KhzShsUuYdifcacCSKgVjnmpAcVSZLRKVzTdnak3nFJuNO6AUoRTCPWn7vekzxSdgGbAB0pjLip85wOlNxzik0O5BikxipyBimYGQBnFTYq5GVBHNMKgnjkVOyACmEADqaTQ0yErkCgLnkc1IcEZqQLkZApctwuQBDS+XVgRGnCL2pqAuYrhBSSoflOO9W/LpJo/3RP5U3DQSlqUcVasn2syH7rUzZnk0jZTBBxg1KXK7lPVWNOSwEybkbB7VlXETxsQQeKsC8mB4bjtxUlxPHPCAVIf1xWk+WS0IjzRepnAcU3vipCAPembeawaNRrLg0qjsfypQpPWpAm0j37Ukhtj7eNZJkQnAJ5Y9hXR2yeSitbllUt8vHPTHX0/xrEiiaFiWGHcYx/dX/ABrogGWNRxwMcV0woxnFxkc1So4tNCTXEzsTIylj/dAHT6VV5zxVnaCeaCi1tSowpR5YGUqjk7sqOJW4UDNRC2uD91atyOikcgVEdRt4uBLkj0qny9WCcuiOXDEHIoJyc0lFeZc7woooxSAKkC96ZTwe1UhMXAo8vPSnAU7vgCrsK4wJt6UHdu+YVOqHOTUuARgiqUCeYrKvGaVc9Kn8odqd5P401Bi5iDYP/wBVKYGPOQfrxUpjZOWU49akT2qlHuLm7FXyWA4B/GoyjDqprWHIycZqNgtN0kJTMvGe1OUZNXWjQ5OBmojGoHHFRyWK5rjAKlAxTUKDqSD708SpnGfyqlYTFFSrikjMZ/iGfSnnCn5a0SIYjGoiaVmyajJxSbGkLTGNLuGOtMPXrUMpDaQ4pCcU0nNQ2VYN1NpwxjnimnpUsojPWgGm05SB1rO5Q7dRuFMJzSU7isTg1IrVWDEVKrc1cZCaLKSbHVh2Oa6eyvZNP1S01K1P7yGRXB9MHvXJhlPFXLa9MB2yLvjIwea10lFxZk007o6m7muorySO5cs5YsCW3Zyc9feoPNMmD1AqO11W2umVLlnkiwAVUhW4GBzjr7/rWpcW+hi2SSyuL5J2HzpMQwQexAwfWuSOHnSmqkFdmkqinHkk7FA03NVprr7Nt3sHU98YJqpJrCA/LCT+Neqq0WrvQ4vZyvoaRY54YAUx5lVTlwSazl1uJ+Gtm/MYpG1S1YfNbNnGeMYqeeF+ZP8AMrklazRNJOn96oDIW6Ix+gqE3IYM0KIuBnnmoXvrllA3jHsoqJVEWoMstIU4ZGH1pQ0uMiNgD71ntmRwXYnHTJpSzjjOB6c81HOXyGksk3aNmqncGTdh1I9qVJpQAQ3TpUwuJH+/h/8AeFU2pKxKVmUltVl7gGmxwsko5yAenY1u2urRW8oaWwikXuhJAP4ggimalNptzKZbRZIBgEIxDEHHIzgZGenel7OPQfPLqZ0sMIwVTGe3pUMsCeSzKecdKSRbpicugHY1D5F0xxjOfes5PyNEvMfDOI12vytNlVdwKHIbkDuKhlgmhI86Nlz61NEQRkH8PSoTb91lNLdDOe9PBphbDlW5HakL7T0pXSCxNjnNSqahVwR6UoYetWmS0Wo8ZyxJqwkgBxt61TRwBgn8hUiv74rWMjNotYJ5AwKQjFM80DnP50guI+M7j71fMibMUrnnAH0FQyBjtAJyOOtK1wGk+XcF9PWpWlUriNQnseanRlaoq+U+OnWhYwp+Y8+lPknj6tP83qB/LtVU3C4+X1zzWbcUWk2W1KruC9ehNNwhPHPrzVEzszelKrn14qfaIfIy75aEcfnTfKTHWoVlxjB59KUztnjoO9VzRFZjzAOxB+pqLai/O/3RyB60jzluCeP1NQvLvbOOOwrOUo9C0mBbLljxn0FR0pJPXtSVk2WKM5qzFgYHpVUHFWrZkB3EjI7VcNyZbGisK7csccenWlW087/VgE/Wqz3YPGSahNzzwxH0NdDnFGPLIklgKHG07vTFQSwSQn5120G4ZW3Bmz9aX7c78TqJl7ZOCKybgzRKSIhzT8hVwMFvXFSSXsbRBI4BGB+JNVVLO2BgfWpbS2Gk3uK2cUi54xyads7k8UgqShytggDn61ZiujGcEDiqypuYD1qZrN4xuJGD6VcebdEyt1LiXzBwxAPt2rVtp/PXJ4PU4HFc8MA81bguGA2rkDvXRTqO+pjOCa0N18D5W7jp7Vm3Fmo3NGwA6gE05bhF4wfc0O4bkGtZNSRlFOLM54pAu7aSvqOarlvxqxPmMllJ55NVJZmkwSRx6DmuWdkdMbsXdShgTUXWlrO5Vifdil3E96i2tQCR9Kq4rE2407fxUeeKdkVSYh2+nbhn0qHNGaLisTZApc4qIMcU0v6mnzBYlL4qMMQevNRtISeKaG555qXLUdibfuOM5qNiMjNN3Y6etITk5NS5FWAnjFWFbA46VVyaduxQpWBouB/enBqqK9SBjnNaKRDiWd496XhgVz2qsGIFSK/TFUpCcRdh6YpDEWQr6ipVYEA8cipFweT1zTUUxXZnjkD1pckjnoOKlni2sGHT2pgXNZ2a0LuRFaTbg81KVIpu3NTYdxEAZwuBj61JuwT5YAUH7394/wCFMkwIVRByzZY+gFRszEck4ovYLXLlkzS3iZbcAdxJreU5wKwNOuI42ZduWPVjwAK021G2Qf60H6V00ZJRu2YVYtyskaBA7UyRtqFj0FYs+t4yIUOf7zVmy3tzN/rJmPtRPEwW2oo0JPcsX161y+FG1B0APWqO40mTRXDKTk7s64xSVkOK4OKQgjrUojycineWc4PIp8oXIQvHQ05V9qn8qneWf7tUoC5iuV5p6rUpiPWlCN6Z+lUoC5hgFPVc0oT3qZEwAauMSGxuKcq07Zk1KAFGTVqJDY1UzT8BajL7enFNZ/xqrpCsx7MT9KhY4PBxSPLgYzUW4molItRJvPdeDg0hmz2xUOaaZBU8zHykxcdjTS1QFjmlDD+In8KnmK5R+RTHxTGbbnaaZ5h71DkhpD6cHYdGIqHeaTcanmKsTGeQN97IpftBI5I/KoCaSjnYcqJvNPp+Rp3mgjuKr0ZpczDlRNnNGaizRkijmCw8t2pvPrTaM0rjsPaNlIBxkjPFN4xznNLuOc00nJodgCilAzS7PeiwCcfSnZ7ZpCpFJg09UA8Mc9RUiuR1OagwalUAdaabEycEcY/SrMVzcQ/cnYeoPIqkOOnepEc9xmtoszauTyF5nMhYk9zUQXLYJqRSmDjg+9MKnr+tN9xINgUc/wA6DgAbe/5U0E7vkBkPoBnNWI7W6kOBbso/2ulCV9gbtuVWBPTj1xShC3BBJ9q0Rp0gxuaMn0VskfhQ9qYQTu2+7kD9Kfs3uxc6KKoVOCSPbNTeSCe9BgQ5xJ8304NXoNNLRoy3Tx8ZyU3c1UYPsKUkupTeBVUFuPrSIMEY5FTy6Vcs+Tdq+PVcGo0ItfleAl/dxTs09VYV01o7iEbiB70GFkb+tOR0YkyMI/RT1NLJdAjakeRnG5uKPdFr0K7E7sdvrThu6VJ5kewhypf1Bz+lRfaY1YdWx6iloupWr6FgxG4t2DDdtPesiVDBOUB/WtCfUNy7YkAHoTiqAx5m99zH0ArOq09i6aa3BlyBnvSeW5IwM1IHUkE7selPMyY+7z6YqLJlXZGEbB3ITjjijA6bWx+tIZR0HGfamGQ5IBpXQWZOH2jmNsVKLhFIGCKoF26ZNJzjrR7RoOS5fadD0yPxpjSL+XqKpAkdDRQ6jYciLRdMdSfpUbTAnHOB71DRUubK5UPzuz82BTCMUUVNxhS5PajBxSUAOBPrQWJPNNoouAUUUUgCiiigAooooAKKKKACiiigAooooAduYgDPSgYpNpxmnAVWoEkT7XB9Ku/2o6LhEUfUZqgKXkmtIykloQ4p7l5dRZ8+ZBG3uFp32/jasSoD6VSUU9fvZIq1OXchwiaUEbyjcV4PTNWhAQ3T8apJfFQAcfhT/trscYAroUo2MXGVyaa2SVdrD8qzZ9PZCSnzCtGKTdyQakaRQvzUShGS1BSlE54rg80AkVbuEDSEqoGfQ1W8s1yOLTOlO6HCT1oLKaTaaNpo1DQUnC/KaAxNN2mgcUAOLU0OaDzzSYo1AcWJpppaXFADKKdikxSsMbRT9tJtpWAZRTsUmKLAGaUPikxRijUCTfTw2V4qHFOXINUmxNFhX7VKr/lVTnPXFPBx0q1JktFsEOCp/CmhOOfpUavUscgJ56VommRZoZtIJB6imyI3ltsHzYqxIAcEdaAKHEEyopQ28eDyowRUcuNuMfjV6SAMMqvzdyOM1E1r3zUuDtYpSRmlSM02tBrUkZ6e9V5IWU8oawlTaNFNMr0VIYzjNM2n0NRZlXEoqTZgc0Be+OKfKFy75OOO5pwh9amE6klHUDI/Kk3qBnI+neuu0TnuwCcdM05VHqAKaZBj0pPMA5FPQWpLtRTnsaZsUvkEge1MafjkVE0hPTNDkhpMsnCtuOD703cvbFVdxI+8aSp5x8pb8xaa0yetVsn1pCoPPek5sfKid5UIxzUe844z9aZxS1N2x2QEnr1pmWB4H4U+ikxkJPPpSHpUhTJ60wjBxUNMYgpCeKKDSGRHk0U/bShamxVyOipNtJtosFxlFP20baLBcZRUmygJzg8UcrC5HRUhWkxRYLjKKkxRtPYUWFcYBS8AU7B7CnK7Bt2Bn6U0guMFPFG0k5pdpppCuJSYqQJ60bTup2FcQxjbycZp/l4p4UkVIsbE9CfTAq1ETkRiOpFhY9Pyq/DpznBc7B6d62dN0e4ujKLO3aXyYzLK5IARB1JJ4AraNLq9DGVTojChsJZBkrtHqeKvQ6KqASyRvIGJ2sy4XIGTjscV2Ph7wRqmvXDI0T2kCMRJPMv3DjIG04JzkYNeraN8PdNsLKCKVDdzQk7Li4TO3PJ2xnIHsSM1M6lOGi1YRjOW+iPFtJ8N6xq1p5umaYzQ5A80AKo/FiB/Oreq+GJ9Ntmkvbs3BibZtgQvGp4yC/ABH0Iz3rsviTp2u6HYrt1mW50a7cxm3dEUxt94D5QMjgnIxivLs7c4yM9cd61ptzXNfQznaLsSXa2kTt9meQw9A0iBSfwBNY00cGcq7n1q3czrt24rOdwewFVNrYcE9yNyingn8ab9saPhJHx6Zpj81ARz0rncmtjdRXUttqUpB/eNVZrk5JA/E81GVpm2s3OTKUYoc07s2dx/Om7yO5P1pNtGKi7L0AuetG89/wCdJikxSuwDcfU0bj60lFK4w3H1pM0UUgCiiikAUUUUAFFOC5pygK2WHAp2C46K2lm+4vHqaVrOdeSnT3q3FeKMBQc+9Ers2DuPPTFb+zhYz5pXM8ow7U3pVgrlskk/WpI7dWOSM56AHms1Bt6Fc1inRWn9mhHVTx71BLsA2iOm6TW7EpplMe9FSBSKQpUWLuMop+yneX7UcrC5FQAT0qYRH0q/p9pvkJIIUD7w9aqNNydiZTSVzKoxV+7UPO2Odvy5Axmq3ltnp1ocLMFK6IwpNKEqdYWzggirkVmX6LVRpNic0igIcjpzTfJfPANbsWnyEEleF6nHStmw8HapqVu19a2Uk1ovDyRAEL7kdce+K1dDS7M/bdjiTbyAZKkUnlMO1e36X8GBf2aXEut2uxj8nkxPJn89tX7r4E2/lM0OuATAfKslvhf0Y4FZONNfaLUpPoeBqh9KdsOa9Nvvg74pgcmGziuFC7gYplIP0zg5rjbzQLzTrl7a9iaC4Q4aOTgirVNPZ3J9pbcx/LIFKIya0/sEqf3CPZhS/YZOoXkehq/Ysn2iM4Qml8sitRbKRl5Qg0f2exHOPpmq9kxe0Rl7acMitA2EmcBfxpBp8rHoB7k0ezYe0RVWd17083AYcg5q6mnRKMyuWPotdXd/C/WIba2u7S1bULS5iWRJbNvMxkZwR1BHSm047snmT2RwBOTnFNZSa9PtPgz4kuAxlit7TgECeYZ/Jc1FffB/xPY9LEXi+trKG/Q4NR7r0ui7tdDzURk1Klvu4Ar0Sz+FniidGZdEMWO1xKiE/QE1ai+Fni1pVQ6dFGGIy5nTCj3wf5VSVNbyRLlPojzhdP3qflcEe1KulLzvD/UV9W6J4astN8NQ6VcWVpIzQiK7ZIgBMcck9zXKXnwl0VrqWe0N5sBBWzMwRCfTzCCQPzNZqtSvqinGpbQ+dpLABiIwzAdeMVEtq2cEYx1r6T034SaNDKLi9V5HbrbGXzEQHsGwCfriqniL4PWF5HG2hmKzkjU70lLOsp7HJ5FL2lJsdqlj53MIHQZoEDMcYr0vVfhd4k01Eb+y0vFdtubNvMIPuODj3rU0H4PalfMH1Uf2ZEVygK+Y5PoQD8v41p+7te5PNK9rHkS2pbtSta7R0r3m4+CNqJIxBrjbP4xJbjP4Yb+dY3ir4W3sOoLFoGitcWQXImE+XY4GQwYjHOcY7GkpUnomN861aPGjFg0eUT0rvpfhv4kVgG8PXoJ/uAEfoa6HTfg1e6hpcc0rSafdhj5kdwA6svYrtOQfUGiSgt2Ck30PHvKPpSeQ56Ka+jNN+CegQQ7dSnvLqcAFpIyI4+vQDk1X1r4M2Mtw0+jXy2UIXmG5RpACO4YHPNZqVNu1yvftsfPv2OX+6aDayKMlSK91g+DFxNpqy/2okN2WPyPAdhHb3H40n/CldSwA2s2ZJPzYibgeoz1PtV/uf5ieap2PDBAw5IpfLHpX1JdfDDwtd2SQSaPAswjCm4t3aElgMbsAkc9cc153r/wa1O0uC2jRm/tT90NIqSr7EEgH6j8qmMoPS9ipcy6Hjvl0bCK727+HXiK1C+boN+Nz7AUTfk/8Bz+dU18B67JqC2I0e/FwxICGAgcdfm6Y981pyR6NEc77HHhTmnAYroP+EduH1STTo4JpbyNzG0ESb23DqMDNSat4Yu9DuY7bUYHtrh4xKI3wSFOcZx0PHSmqfmHtEc+rHoakR9vXkVZNiSeGHtmmSWksQyV49RVcskLmTE35GMjFN3+hpuw09UVmwzBfQ44o1FoMLZGMcCnCXHYU5oHUtjkKcEg5H51HsbGccUaj0DZBICGUZ+lQm0XZujP4HrTznacDOKaCx/iqHZ7opXITEeMHNOEDZ54pxJ6Gje3HzZ+tTZDuxGf+IjJNROyk8LW6tonlBSoA9KqXFlCmW3Y9BWkqUrERqK5mBiDxS5pzx4PANNxWOqNdBM8e9LmmmkyaVxj93GOtJTMmjJouFh9JmkzQOaAGtmkBIp/FIcGkMN2aN1Jto2GlqAuaaRk08KaUwsegNOzFcQKMYo8sH0+lSpbuR0qZLN2PNWoN9BOSRX8v2FKsOcngYrRFgSoAzSCyYN1q/ZMj2iKHkBnC7lGe54xThZOxIXa2P7prR+yM33uaeLMegqlSJ9oZD2si8lGAHfFMEdbZsx6U02Y9KToj9qjJ8sAcCmGPvitj7GPSnpYIXBYcDtR7FsPaowhETSeWc810osYs58oEV0nhv4eX3iYPJYx2yQpnMkzkDPoOOfw/GplSUFeTsONXmdkjzVlIGaFJIwBXtj/Ba9Eqh7yyK9ysZP5etLP8HdUhieW1ngnkA+VDAULfjyBWSdK/xF3nb4Txf7LIVyUYfhQkabvmDH0216PceBfFMLtHJoF6+Opjj3qfxHWqZ8Ja2m3doV+u44X/AEVuT+Vb+zhupGXtJdUcUlszdENTDT5W/hNdXe+H9V0twl7pl1bk9N8Rwfx6VSKbW2nhvQ9a0jSiyHVkjDGmzf3f1p502Ty8gDd6Zra20BNzqg+8x2gepqvZRSJ9rJmZHpa4XdIc9wBW0mhahEsOzTLrbKoaIrAx3A9xxV9vDeuWKi5uNEvfJTDEvA2wj3I7V1Og+K7bSbNVn1O50VidzwWGlLl8dMyOSWH4VEpcqvBXGrydpuxDpnws1a7shdX062AYAqjRl2K8cnB4PsfSoNO+Hfia6u59Pdxa2AlxLcGTMDlc4OAfm/LjNe4afqlrq+nR31hOtzBIvyuhHXuD6EdxT2tcSKyA7ZGHmqzcFQCOR3rj+tVDo9hEy/D2iS6JpUVgbhrgx8tMy8uf1x+tbKyvzvTHoV5pIFMcWCQzAY3AYDVHefLEJCoLNwQa5r6m9tDzz4v6ZBNY2+pz6l5LQr5Vva+Xnz3Jyec8YHt2rxrOK9z+JumXOqeEFnhjgYWLmeWSRiGWPGMJ6kk8/SvDOtenhWnTOGurTM6565NU2xWvJAr1CbHPQj8a0lBthGaSMpselRk+grWOnHsQaibT2Has3TkWqkTLKk00ritB7Rh2qu9uw5PPsKzcGjRTTKmKTFWPKPcYoMdRylcxWxSEVP5ZJ4pPLH1qXFjuQYpNpqyIuM0nln0pcgcxW2mjFWRA56Ct+w8DeIr9I5IdE1CSOT7jC3YBvxxR7Nhzo5fFOWJnOFBP0FeqaH8Gde1CZPtVmNPg/iluSM49l6k/lXoVt8D9AijCSajfO4OS67VBHpjBpuMIv3mLnb2R84pZSbdxXge9TLYp0fKn1FfVGlfDjwpZL5i6QrvghTdsZCPcqeK2oPDeg2rl49F06MkhsrbJww79KPaU1sritN9T49azCHCnPua1NJ8H61r5f+y9NubrZguY4+Bn3PFfXFxp+nvseewtZJQflL26sR+OKsY2IoRQoA+4oA/Adqh1o9EVyS6s+QL3wP4i06cxXmi30TD/AKYMw/MAiqx0e6jGJradO3zRsP6V9jrPJtchmbaCdqDH4c9aGkcqpaN2OAcFhxTjWS6A4t9T48Og3wKgWV1liAB5LDJPQdK07bwf4i83Z/Ymohs/8+r/AOFfWP7wtllbAPH7zOfwpscly5ZJolCFjgiTtnj8cU/rCWqRPs3s2fL8nw/8UO6KNBvxv4X9yf8AI/Grw+C/jB4PO+wwDIJ8s3Kb/pjOM/jX0PBDescs6QDbtwrtITzz94//AF6tr5q7MjCDjGMsTnrxwBRLEN9EEadj5L1PwD4k0gg3eiXyBjgMsJcfmuRVW/8ACWt6bbifUNIvrWLIHmSwMq5PTnGK+xOikDI+lR/cjKuzyKTghl3fp6VKreRXI11PjEWEoZU8l9zfdGw5P0q5F4d1OZsJp923OMLCxOfTpX1u9wqwiT7EXKH5FZVUr7jJ4/wqQ3N4u5/s0rcA+WHGSfZu/wCOKr267C5H3Pm3RvhN4o1Zmb+z2tI0wWa7Plbs/wB3Iya66y+Dl5FeR2t/qlpBC4O0wBpXY/QgAfUmvbVUBi2T83XLE/zpFZZEyvKn2xQsRJbCdJPc8eufgQpZzBrSGQj5d9uQCfchq5W++EPiCwSWeaC0ljT+OK4AGPYNg19BXcs8dxbJCAVkYhyR0q11XDAHPUEcUlXmtXqHs4vRHi/hj4Opf6fDe6tcXNk7E7rX7OBIuDxyxPB+ldvZfC7wpaRIkljJdOvWSaZst9QCB+ldjwBgcY9KKUq031GqcV0KVloulab5n2HTbS280YkEUIXcPQ+tOt9KsbR2a2tood/3ljQKD+AFW6WsW2aWQc4waXGaSipbKSDGBgE1C9nayxmOW1gdSckNEpBPryKmpN4pJsLFBdC0ZGlddJsAZf8AWH7OnzfpVKTwf4Ym+aTQdPOPSAL/ACrbYZGT0FVbgwxwszNweynGTVqUujJaj1MG4+Hvha4gmiTRoYDKpUTRZDL7rngEfSuTHwTtgGMmvzAc4P2ZRj6/NXoWnBoZ3jfc7Endhi4TPbJPH0FWZYGvXK3Mai0KkGFjksc9SR29q1jVqR6mcoQfQ8H174a69o955drC2pWzKWWeBCMD0YHofxOam0r4V+JtQ8qSeGG0t3IJM0o3hT1IUZ7djivfDIARlwCenNO571p9aqWsR7CFzjdP+F/haygjWew+2zKoDyzSNhj67QcD6V1kFrb20MUMEEcccKhY1RcBQOwqWisJTlLdmyilsg560UUVAwooop3Cwn+c0BQowAAKWilcAoopKdwFpKXtRQAUUUUAFFFFFwsFJS0UXAKO3NFJSAKKM80UwDJB4ODTVQKGx/F2JyKdRTEQx2kMUryxxosr8NIEG4/U9TWL4g8FaH4nmSfUrd2uETy1ljkKEL17cH8a6CloUmndA0nucCPg/wCFwR/x/kAHrcdT27ViX3wWjw7WGsuOCQlxCD+GQR/KvWaPwq1iKi6kujB9D53vvhB4ntk81I7OdSMgRzYJ9vmxz7VzkHgvxHdTPDBol88sed6+Qy4x15OBX1NcxedbvHx8ykDIyM1VH2iSEKJk2OoWSQk8HBGQPy61axUuqE6K6M+VrrQtY0+RoLrTr63YgFkeF1yO2fWqMgkjYo+5WXsw5FfVfkarHakzXr7UXO8kLj1JPpj+Vcr4n0ez14ql/GzHpHPgFgemAw5IzjjmqWLXVCdF9GfO5QseOv5VG8LKPr+ldp4g8N2ekSSI10GuAyhIlGdw53EntjHcZrnmtmJOMEdq6YWqR5kZSbg7MyOQMEfjRna2cA4NaRtdvLD9M1ElsN4IQtn1FHIwU0aj8jp2qjJas5JCfrXeTfDDxfCM/wBk+ZwOI542P86xZ/DGv2zsk2i36Mpwf9HYj8wMGteenLZmXLOPQ5c2jAfdqD7ExPQ107aVqatg6beA+n2d/wDCmNp1+vWwux/2wb/ClyRfUfPJHMtZv02Nn6VF5JUZwa6f7PcDrbzD6xn/AAqNonHHlNx/sGk6UR+1fY5vZ7U0oK7C18Panf7fsuj3dxu6GO3Yj88YrqNB+FWsX2rW66ppLWlhuzPJIVDbRzgDOck4H4mspxhFXbNIylJ2SPJtmO1Hlk9Afwr6cufg/wCD5ZDIljLbE/wxXB2/hnNQWvwh8P21ws0LXqbWBXZcIcEfVK5/bUzXkmfOVrpV9ekC0sLq4ycfuYWf+QrctPh74tvJBHF4c1EE95ISg/NsCvq+BfskCW8UQhhQYVIlAH5DpS4Z+xJ9SSKz9v2RfJ5nzrpnwR8UXpRrsWthGThvNlDMv/AVz/Otb/hQ98rMP7asDg/KSr/MO/bj6V7ekMglLMW68ZGcfjmrDRq+N6Kcd+9T7eY/Zo8JX4J6nCcJe6fJlsE5k6ev3f0rWu/gnCxH2DVn3d1ubfA/Ag/0r2EKAMDp9aa0MT8vGrd+Rmn9ZqdGT7GB4zB8E5xkz6zCigZbbbNx+JYVaX4LR7cx62zZxgi1B/8AZ69cEEKjCxIB6AcflTgi44FH1mr3D2MOx5voHws03TL5bq+vH1AKCPs5iVY2z/eGST9OK6ufwx4fuYhHLoloYx0XyV4+nf8AWt4j5TtC57ZHFRpCBuLBWYnPC4wPSs5VJyfM3qWoRSskclL8OvCMuf8AiTPHnoY5HXH/AI9VWT4WeFZUKpaXkbdnW5OR+ea7oKB0AFKVPYkfSmq1RfaYnTh2POW+EXhxEbfd3y5+6zXCDb+G2oX+EWhuqrHealGQOZPkYH3xgV6QsRAw7eYM5+dRn9BT8DpgD6cU1Xq/zC9lDseUS/B2wWRVTWbsgtz/AKMDgd844H41Le/CDTmttun6jdR3AP37hQ6sPooGK9QSJIxtRcDOSMk/zp/XrVfWavcXsafY8n0n4QxR3W7V9UWe3wR5dqrI2ex3HPH4V2Fj4I0HS4tlnHeoA+9QbuXAb1wCB6Z+ldRt+tHSonWnP4mVGnGOyKxCfKoAcZ5wBgfpUwjQjhduf7vH8qkPv0oxnuazLITaxswZg5I6AyHH5dKf5aEdOPQHAp23NLjFADRGu0AYVRzgVSv9E0zVYJIb+xhuEkxuLr8xx0+br+tX88FvSs1tctYtRaynPlSADDP0bPTFNNrVBa+hz8/wu8Jzuz/YpYs9orhlUfhWzZ+FNBsdOWxj0u2eBQP9bGGZiOhLHkkevWthXHOfun7pHQ0Luydx+mDVOpOW7JUIrZEFpZQ6fAtvZxiCFckKo4Gfany28EoXzYY5QvI3oGx9M1NjjJBB/nSAZ7AAetQURRrFEFCRqgJ6IuMU/cucdAKd68Zz14pCoIxgY9CKAGswCHIOeoFV3WWcqrRLsz3/AJ1bopiPH/iLp/ivUZorW10W+XTIA2TBKJROSeGZV6ewIrzC4trizfZdW80DeksZQ/rX1f8ASmyxxzpsnjSVf7sihh+Rrrp4rkjy2MJ0OZ3ufJ2RRX0jqXgPwxqobz9Igjkb/lrbjym/8d4/SsS8+E2i3NlDbR3MluYekyQR+Y3+8QBu/Gt1jYPdGLw0uh4TzRg16xf/AAWZIM6brIkmz9y5h2jH1XPP4ViXHwi8TxIWi+w3BH8KT7Sf++gBW0cRSfUzdGouhwBVcc4phhiJwQM11Q8HeL9L1CNo9CvPPjO5GWFZV+vdT+Nauq6T8R9et1iv9HmlUc7vs8KOcerDBx7U3UjfdW9QUJeZ561nERxxUf2GLuSa7BPhx4ykOBoU4z/ekjH/ALNWlZ/CXxPcS7J1tLbjJ3zhiPwXNJ1KXVoajUPPvsUJ4waadOj7H8692sfgxpEEQN9qF3cyEYIjxEoPt1P61s2Xwt8J2fL2Mt03/TxMxH5DFYvFUTRUap4FpngvVtXQzWOm3d5CrAMYE4+ma9hi+CnhhrBCH1KC4ZQxaWVGKHHIK4xXfaboWk6Pv/s3Tre08zG8xJgtjpk96vnpXLUxDb93Q3jSsve1OI8OfDHQvD15HdkvfXCDCGdVCKfUKO/1zXavK2cDLN79AKfSd6ylUcneRagoqyGMmDuVyCeueaCdp+UbjjjAxmnbQc5NL9MVPMVYau843ADjke9L82BjFOopXCwwKdqhnZsdT0z+VOCgEkDljk0tFFwEIGMUvGaKKACiikoAWikopALRR2ooATA9KXtjtSe9L+tMApMUc0UagGKMUtFO4WExRilopXASiil70XGJSUtFIBO3NIyh1ww4NOoxTAh+zQ53BecYBySfzNQvp8TNG4JDo+7c3JK91z2+vWrtNqk2S0iG3tY4C7hR5kh3O3qemefap6SloAMetFGaKLgFFFFIAooxS0DEpaKKQBRSUtACUtFFACUUDv7UUXAKKKKYgooooAKKKSgYUvGKTtRQIKDS9aKLjExS4ooouAUUtJSuAm6k3CncZxUflq0hwRvHJ9cUaAKZVVtrMFYnAGeTWbqjvLYSLaENO3yAHjHOG/DGatXOxneNH2zcHKgEj0znjvXDzal4lgvriWXR2+x2zNKZFnVmC/3SoHQj8enXFDsg1KPibxfceHNV8ptLubi2WII8xlEKyHbjKrz374+gFcHdePtfnUx200Wnw5yEtk+Ye+85OfetrxP4Tt9XubrWtHV7Vhhrm2nikIDHoY2CkknuuOPWrWjfCa4me3mutQtpPkZ3twrDa46K2Rkr0z074rspSw8Y3erOeaqydlsebz3Et3O9xcTyTzSHLyO25mPqT3pvJr1XVvhRrusahLqE2oaTBNLgNFDEyRqAABgAegqg/wAGNcAymo6c3sS4/wDZa6oYmk1vYwlQnfY84x70oxkV303wf8TRx7o5NPmP9xZyD+qgVS/4VZ4wzgafCTnj/SY/8atV6b+0Q6U+x9CP1H0H8qTcex/WlcHcOOw/lSYPvXinpi72/vN+dG9v7x/Om4PoKKAFycdc03C5zhfypaKAA4J9P90kUH/OaKPwIoAOKO/NFL+NADePX9aCM/8A1jTvzpMmgBADjkUc0uRS59/0oAb360de9Lx/kUcUAHFFH4UZGfegAooooAKKKXmgApOKKCw9aACijqOKQHPSgB2OKbnk0uTg4P6U1BgcnJ9aAH0d6M+4NJ+FABRilpOtAB06DFV7i0huCN/3uxIzj86nAAGOcD3pfbNAFVYbiMELOHUfdDLgj8R2qcCQqCxCt3Cjin9aKAFXpyOfrSUe1AoAQjOBkjHpTsc5Ax9BSED0oye1AB+FBpTz940hwooAAMgkkD0FH+eKa0ioCXYCq9xfLbJvlQRx4yHdv6DkUAWuxz+QoHbt9aqW16LoqY45NrIHWRoyFYH0yamYTheGBbttAH8zQBKRjvnNHOMHpSJkJlwS2ORml5Yc4H0oAD93aPzo7f41HIJjGRG6I3Y7c0xYRGMu7uSf4mp2ESmQJj7xycZVSRQXRW2kgE0oOBwMKOwp3y44AoGNVlJxUMjSmQqI3K+oOB/jU3QYGAPTpS7TgccelAEQyF3eXyOADTgzkcqQfYZpxAGCy9DxntShgV45FIBpznGSD2pGdU++wX6mnbVznPPpSkbhgkH0yKAEGcfrS/XNJtO7sB7Up3An9CaADtmk6df5UBs9Rg96UHJHGM0AKe1JxQeD14pepB49qAE70UdTz2o7cUALRR3HWkByc54zQAtHNIee4yDS9un5U7gJ+FGfY0ce9H0ouIO9BIwDR7g/nSY5549KAFzg8/nRnmkPrz+BpeetAACDRmgc0Y59KAClzSe/SgcmgBaSg8HkUdsikMWik/Cg80ALRRSUALRSUfhTELRSfhRn60ALxScUnPpR1oAdSZNJg560dTSAXNGe1HaigAoopaAExR2oooAOaM0UvWmA3Iz70tJj0pR05oAKKPxooAKMijtyOaMUAFIemRz7etBBpfrTAT/Jo6E/Tijv0oI5zzQIXtSA9falzjB6EelJjnp3oAMjFGe1HGKTvyM0WQxC5Az/AD4xQHG0FuPU04gYwRmk2j0o0DUYZUD49u3JFZV3Fq29nt2tipJC5Vlk2np0OM57mtgggkquT25rPl/tCIb1CTKQ2UXC454GetFhGQtxfXF7NaGZIXtgqyHP7xiSD14xkex/Gt3T4LdoGnjgQNLxI+MtJ2+Y9T+NZtxYvd7Lt449OnXJ3SYlJ47/AP681lN9utIVhtJ7W7ULuRGkxNuz0Cqc4wcg/pSGjtATnIODSY5zgfWsy1kvTYo0jBJQuSHfcGOOmSAcZ/GqVt4gvReSWt/pqJsXcJoJtyEfjz+HNIZ0HWgYrJtfEmmXm3yZZDuGRujK55xjnvV83tsCVaZUYLvIfK4HTJzQFyf606P/AFq/UVAt3bOiutxEVb7p3jDfT1qeMjzEww5I70AZWr6TNfwCO2vpbKTYB5iKHP61R0zw3c6faGB9Ynn3PvYy5PPsc5FdKyEkHax4HQe1N2H/AJ5t/wB80AZw0qELzdXZPUFbg8fT29qrx6RJHdNMdY1FlPSMuCBW15Z/uN/3zSbD/cf/AL5oAybm2vxj7LqcqgdpI9+fqetV/O1hWdFkR2H3PMt3VSfdsHA9+a39jf3G/KjY39xvyoAyzeagIfktYJJQuSfMKrn05ANVLbVtYlkdZNGwF6FZQM/99YzW95bf3X/I0nkt/cb9aAMWXUNXJAi04Q4zvafkD0wVJzVWLVNf8w77GzmReoicg/zrpPJP/PNvyo8kg5EbA+woTsJooRXt08ReTT3i9FaQZP4VnXHiQROEW1uTIf4TCcD8eldA0AcAPCWxzzmnbP8Apk1AzPiuppNpwuG4Hyt/hUrTTI2H2c9OT/hVvyz2jYfhRtfsr4+lAFF5rsj9ysOc9GyOPyp2bssDiHHf5qtmNz/C/wCVHlN/db8qAKcst6rDyrOGRccnz8EH8qYLm/IYf2dggcEyjB/rV/y2/uN+VLsf+635UAZyyan5bs8Fup6qocnPt7UkEl+6n7Q0MbZ+6kZbj67q0tr/ANxvyoMbHrGfyoAhTLdWbPuuP60pWTIwwx796k8pv+ebflS+W/8Acb8qAK7Ix6tjHoaAig7ixz/vVY2P/cb8qNr/ANxvyoAjXaAQOM+hpGTI+Ut+dS7H/uN+VGx/7jflQBEsWP4R+LZp/bGFH0FO2yf3W/Kk8t/7jflQAm2jBxwxx9KdsbGNjflSGN/7rflQA3BPRvx4pgVuf3jH6kY/lUux+yMPwpfLbvG35UAQ/vOm5c07n+LbmniN/wC6fyo8t/7jflQAzj1FLx7U7y2/uN+VJ5Tf3D+VADdyj+IfnRvQ55Jp3lN/cb/vmneW/wDdb8qYFSSbbwkT5PQquaUedv6Fhjktx+WKteW391vyo8psfdY/hRcViqYlkXDK3/fWajGlWjBS8b7wMb1lZSfrgirvlt/cP5UvlnH3G/Ki47EYRVTaCMe7Fj+ZpqwrwBjAOcBQMn1NTbJP7h/KjY/9w/lSuAwx/Trnk0uSO3607Y+fuN+VG2T+4aAGcZ70gbjkYNSbH/uN+VJsf+4fyoATrx+dJgLjnGenvT9j4wUb8jSeW391vyoAaACP880Ace3uKd5bHqr/AJUuxsABG49qAI9uBycfjS884PSn+W/Xafyo8tx0Q/lQAzLZxnNGeP8A61O8t+u1j+FHlv8A3W/KgBuOOlKcDtTvLf8AuH8qCsn91h+FADPwop3lP/dP5UeXJ/db8qAG5zS5wM04Rv8A3W/KkMUnZT+VADaMj3p/lv8A3T+VJ5bf3GP4GgBucDPaj8Kk2Nj/AFbfkab5bn+FvyoASjJ9KXy5c/dP5Uux+6H8qAG9O9Jz2p+xv7jfrQY27IfyNADcDGf6UZ9AKXy5P7n6Unlyf3G/KgBp5P8AhTs0bH/uP+VLsbuj/lQAn+c0dOtO8s9lf8qTY/8Adb8qAE7c9qQY6dfpTvLf+4fypfLc/wAB/KgBufSkOD2H4mn+W+Pun8qDE5/gNADeM8H9aTB9M04RuP4G/LNLtfsr/wDfFADKWlCyd1Y/8BpPLf8AuE/8BoASinbG/ut/3yaNr/3G/I0ANyKKXbJ/zzf8qMSf883P4UAFFLtk/wCebflRsf8AuH8qAEopdj/88zSbZP8Ank35UAJS0bX/AOeT/lQFb/nm/wCVACUU/Y391vyo2P8A3G/KgBtFLsf+435UbH/uN+VACUUbH/55tS7H/uP+VACdfWjFLsf+435UbJP7rflQA3min7X/ALjflRtf+63/AHzQAzn0op+1/wC43/fNGxv7jflQAyin+W39xvyo2P8A3G/KgBntS4p2x/7jfkaTy2/uN+VADc0Y7/yp/lt/db8qTy37K35UAMz6/wA6X1NO8t/7rflSeU/o/wCVACUZpfLk9D/3zS7JP7h/75oAQ/Wk4p+2T+4fypNkn91v++aAGfhSYBzmpNj/ANxv++aNj/3W/wC+aLgR9OgH5VF9nTeZPLi8xur+Xgn8as7G/ut/3zR5bf3G/KgDIfQLdrv7Usskcn8RGDu+pPNV/wDhHW+3CZr55YgdxjljQ5PrkAYNdBsb+435UbG/uN+VNNoTSZjJokVtcmayle1J6qqqVJ9+Mn86e2krKWeaVZpG5OVKqfwyR+la3lt/cb8qPLb+4fyNJ6jWhmzaRZ3MqXE0Cm4X7sm9iU4x8vp+VFlpENkY0hkndQcbZpi39K0vLf8Aun8qciOHXKt19KAP/9k=";function O1(n){return Sd({...n,previewTexture:Kv})}export{O1 as createLifeGlobe};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
