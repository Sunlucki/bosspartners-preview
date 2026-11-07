import{a as e}from"./rolldown-runtime-BYbx6iT9.js";import{S as t,y as n}from"./vendor-react-ODsZ_Jn8.js";import{A as r,C as i,D as a,F as o,L as s,M as c,N as l,O as u,P as d,S as f,T as p,_ as m,c as h,d as g,g as _,h as v,i as y,k as b,l as x,m as S,n as ee,o as C,p as w,r as T,s as E,t as D,u as O,v as te,w as ne,x as k,y as A}from"./useInViewport-DIayo_ZN.js";var j=e(t(),1),M=/^[og]\s*(.+)?/,N=/^mtllib /,P=/^usemtl /,re=/^usemap /,F=/\s+/,I=new s,L=new s,R=new s,z=new s,B=new s,V=new O;function H(){let e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial==`function`?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0),this.object={name:e||``,fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){let n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);let r={index:this.materials.length,name:e||``,mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:``,smooth:n===void 0?this.smooth:n.smooth,groupStart:n===void 0?0:n.groupEnd,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){let t={index:typeof e==`number`?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){let t=this.currentMaterial();if(t&&t.groupEnd===-1&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return e&&this.materials.length===0&&this.materials.push({name:``,smooth:this.smooth}),t}},n&&n.name&&typeof n.clone==`function`){let e=n.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let r=this.vertices,i=this.object.geometry.vertices;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let r=this.normals,i=this.object.geometry.normals;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){let r=this.vertices,i=this.object.geometry.normals;I.fromArray(r,e),L.fromArray(r,t),R.fromArray(r,n),B.subVectors(R,L),z.subVectors(I,L),B.cross(z),B.normalize(),i.push(B.x,B.y,B.z),i.push(B.x,B.y,B.z),i.push(B.x,B.y,B.z)},addColor:function(e,t,n){let r=this.colors,i=this.object.geometry.colors;r[e]!==void 0&&i.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&i.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&i.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){let r=this.uvs,i=this.object.geometry.uvs;i.push(r[e+0],r[e+1]),i.push(r[t+0],r[t+1]),i.push(r[n+0],r[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,i,a,o,s,c){let l=this.vertices.length,u=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),f=this.parseVertexIndex(n,l);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==``){let e=this.normals.length;u=this.parseNormalIndex(o,e),d=this.parseNormalIndex(s,e),f=this.parseNormalIndex(c,e),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(r!==void 0&&r!==``){let e=this.uvs.length;u=this.parseUVIndex(r,e),d=this.parseUVIndex(i,e),f=this.parseUVIndex(a,e),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type=`Points`;let t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type=`Line`;let n=this.vertices.length,r=this.uvs.length;for(let t=0,r=e.length;t<r;t++)this.addVertexLine(this.parseVertexIndex(e[t],n));for(let e=0,n=t.length;e<n;e++)this.addUVLine(this.parseUVIndex(t[e],r))}};return e.startObject(``,!1),e}var ie=class extends te{constructor(e){super(e),this.materials=null}load(e,t,n,r){let i=this,a=new w(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new H;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,``));let n=e.split(`
`),a=[];for(let e=0,r=n.length;e<r;e++){let r=n[e].trimStart();if(r.length===0)continue;let i=r.charAt(0);if(i!==`#`)if(i===`v`){let e=r.split(F);switch(e[0]){case`v`:t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?(V.setRGB(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6]),l),t.colors.push(V.r,V.g,V.b)):t.colors.push(void 0,void 0,void 0);break;case`vn`:t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case`vt`:t.uvs.push(parseFloat(e[1]),parseFloat(e[2]));break}}else if(i===`f`){let e=r.slice(1).trim().split(F),n=[];for(let t=0,r=e.length;t<r;t++){let r=e[t];if(r.length>0){let e=r.split(`/`);n.push(e)}}let i=n[0];for(let e=1,r=n.length-1;e<r;e++){let r=n[e],a=n[e+1];t.addFace(i[0],r[0],a[0],i[1],r[1],a[1],i[2],r[2],a[2])}}else if(i===`l`){let e=r.substring(1).trim().split(` `),n=[],i=[];if(r.indexOf(`/`)===-1)n=e;else for(let t=0,r=e.length;t<r;t++){let r=e[t].split(`/`);r[0]!==``&&n.push(r[0]),r[1]!==``&&i.push(r[1])}t.addLineGeometry(n,i)}else if(i===`p`){let e=r.slice(1).trim().split(` `);t.addPointGeometry(e)}else if((a=M.exec(r))!==null){let e=(` `+a[0].slice(1).trim()).slice(1);t.startObject(e)}else if(P.test(r))t.object.startMaterial(r.substring(7).trim(),t.materialLibraries);else if(N.test(r))t.materialLibraries.push(r.substring(7).trim());else if(re.test(r))console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);else if(i===`s`){if(a=r.split(` `),a.length>1){let e=a[1].trim().toLowerCase();t.object.smooth=e!==`0`&&e!==`off`}else t.object.smooth=!0;let e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if(r===`\0`)continue;console.warn(`THREE.OBJLoader: Unexpected line: "`+r+`"`)}}t.finalize();let o=new v;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let e=0,n=t.objects.length;e<n;e++){let n=t.objects[e],a=n.geometry,s=n.materials,c=a.type===`Line`,l=a.type===`Points`,u=!1;if(a.vertices.length===0)continue;let d=new E;d.setAttribute(`position`,new S(a.vertices,3)),a.normals.length>0&&d.setAttribute(`normal`,new S(a.normals,3)),a.colors.length>0&&(u=!0,d.setAttribute(`color`,new S(a.colors,3))),a.hasUVIndices===!0&&d.setAttribute(`uv`,new S(a.uvs,2));let f=[];for(let e=0,n=s.length;e<n;e++){let n=s[e],a=n.name+`_`+n.smooth+`_`+u,o=t.materials[a];if(this.materials!==null){if(o=this.materials.create(n.name),c&&o&&!(o instanceof _)){let e=new _;A.prototype.copy.call(e,o),e.color.copy(o.color),o=e}else if(l&&o&&!(o instanceof r)){let e=new r({size:10,sizeAttenuation:!1});A.prototype.copy.call(e,o),e.color.copy(o.color),e.map=o.map,o=e}}o===void 0&&(o=c?new _:l?new r({size:1,sizeAttenuation:!1}):new i,o.name=n.name,o.flatShading=!n.smooth,o.vertexColors=u,t.materials[a]=o),f.push(o)}let p;if(f.length>1){for(let e=0,t=s.length;e<t;e++){let t=s[e];d.addGroup(t.groupStart,t.groupCount,e)}p=c?new m(d,f):l?new b(d,f):new k(d,f)}else p=c?new m(d,f[0]):l?new b(d,f[0]):new k(d,f[0]);p.name=n.name,o.add(p)}else if(t.vertices.length>0){let e=new r({size:1,sizeAttenuation:!1}),n=new E;n.setAttribute(`position`,new S(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(n.setAttribute(`color`,new S(t.colors,3)),e.vertexColors=!0);let i=new b(n,e);o.add(i)}return o}};function ae(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${~~(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var U=Math.PI/4,W=.55,G=3,oe=.05,K=.6;function se(e){let t=0,n=0,r=0,i=!1,a=null,o=null,s=0,c=0;e.style.touchAction=`pan-y`;let l=t=>{o===null&&(o=t.pointerId,i=!0,a=null,s=t.clientX,c=t.clientY,e.setPointerCapture(t.pointerId))},u=t=>{if(!i||t.pointerId!==o)return;let a=e.getBoundingClientRect();r+=(t.clientX-s)/a.width*Math.PI,n+=(t.clientY-c)/a.height*(Math.PI/2),n=Math.max(-K,Math.min(K,n)),s=t.clientX,c=t.clientY},d=t=>{t.pointerId===o&&(o=null,i=!1,a=0,e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId))};return e.addEventListener(`pointerdown`,l),e.addEventListener(`pointermove`,u),e.addEventListener(`pointerup`,d),e.addEventListener(`pointercancel`,d),{update(e){return i||(a===null?t+=e:(a+=e,a>=G&&(n+=(0-n)*oe,r+=(0-r)*oe,Math.abs(n)<.001&&Math.abs(r)<.001&&(n=0,r=0,a=null)))),{x:n,y:Math.sin(t*W)*U+r}},dispose(){e.removeEventListener(`pointerdown`,l),e.removeEventListener(`pointermove`,u),e.removeEventListener(`pointerup`,d),e.removeEventListener(`pointercancel`,d)}}}var q=n(),J=class{x;y;z;constructor(e,t,n){this.x=e,this.y=t,this.z=n}dot2(e,t){return this.x*e+this.y*t}},Y=class{grad3;p;perm;gradP;constructor(e=0){this.grad3=[new J(1,1,0),new J(-1,1,0),new J(1,-1,0),new J(-1,-1,0),new J(1,0,1),new J(-1,0,1),new J(1,0,-1),new J(-1,0,-1),new J(0,1,1),new J(0,-1,1),new J(0,1,-1),new J(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=Array(512),this.gradP=Array(512),this.seed(e)}seed(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(let t=0;t<256;t++){let n=t&1?this.p[t]^e&255:this.p[t]^e>>8&255;this.perm[t]=this.perm[t+256]=n,this.gradP[t]=this.gradP[t+256]=this.grad3[n%12]}}fade(e){return e*e*e*(e*(e*6-15)+10)}lerp(e,t,n){return(1-n)*e+n*t}perlin2(e,t){let n=Math.floor(e),r=Math.floor(t);e-=n,t-=r,n&=255,r&=255;let i=this.gradP[n+this.perm[r]].dot2(e,t),a=this.gradP[n+this.perm[r+1]].dot2(e,t-1),o=this.gradP[n+1+this.perm[r]].dot2(e-1,t),s=this.gradP[n+1+this.perm[r+1]].dot2(e-1,t-1),c=this.fade(e);return this.lerp(this.lerp(i,o,c),this.lerp(a,s,c),this.fade(t))}},X=({lineColor:e=`black`,backgroundColor:t=`transparent`,waveSpeedX:n=.0125,waveSpeedY:r=.005,waveAmpX:i=32,waveAmpY:a=16,xGap:o=10,yGap:s=32,friction:c=.925,tension:l=.005,maxCursorMove:u=100,style:d={},className:f=``})=>{let{ref:p,visible:m}=D(`150px`),h=(0,j.useRef)(null),g=(0,j.useRef)(null),_=(0,j.useRef)({width:0,height:0,left:0,top:0}),v=(0,j.useRef)(new Y(Math.random())),y=(0,j.useRef)([]),b=(0,j.useRef)({x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1}),x=(0,j.useRef)({lineColor:e,waveSpeedX:n,waveSpeedY:r,waveAmpX:i,waveAmpY:a,friction:c,tension:l,maxCursorMove:u,xGap:o,yGap:s}),S=(0,j.useRef)(null);return(0,j.useEffect)(()=>{x.current={lineColor:e,waveSpeedX:n,waveSpeedY:r,waveAmpX:i,waveAmpY:a,friction:c,tension:l,maxCursorMove:u,xGap:o,yGap:s}},[e,n,r,i,a,c,l,u,o,s]),(0,j.useEffect)(()=>{let e=h.current,t=p.current;if(!e||!t||!m)return;g.current=e.getContext(`2d`);function n(){if(!t||!e)return;let n=t.getBoundingClientRect();_.current={width:n.width,height:n.height,left:n.left,top:n.top},e.width=n.width,e.height=n.height}function r(){let{width:e,height:t}=_.current;y.current=[];let n=e+200,r=t+30,{xGap:i,yGap:a}=x.current,o=Math.ceil(n/i),s=Math.ceil(r/a),c=(e-i*o)/2,l=(t-a*s)/2;for(let e=0;e<=o;e++){let t=[];for(let n=0;n<=s;n++)t.push({x:c+i*e,y:l+a*n,wave:{x:0,y:0},cursor:{x:0,y:0,vx:0,vy:0}});y.current.push(t)}}function i(e){let t=y.current,n=b.current,r=v.current,{waveSpeedX:i,waveSpeedY:a,waveAmpX:o,waveAmpY:s,friction:c,tension:l,maxCursorMove:u}=x.current;t.forEach(t=>{t.forEach(t=>{let d=r.perlin2((t.x+e*i)*.002,(t.y+e*a)*.0015)*12;t.wave.x=Math.cos(d)*o,t.wave.y=Math.sin(d)*s;let f=t.x-n.sx,p=t.y-n.sy,m=Math.hypot(f,p),h=Math.max(175,n.vs);if(m<h){let e=1-m/h,r=Math.cos(m*.001)*e;t.cursor.vx+=Math.cos(n.a)*r*h*n.vs*65e-5,t.cursor.vy+=Math.sin(n.a)*r*h*n.vs*65e-5}t.cursor.vx+=(0-t.cursor.x)*l,t.cursor.vy+=(0-t.cursor.y)*l,t.cursor.vx*=c,t.cursor.vy*=c,t.cursor.x+=t.cursor.vx*2,t.cursor.y+=t.cursor.vy*2,t.cursor.x=Math.min(u,Math.max(-u,t.cursor.x)),t.cursor.y=Math.min(u,Math.max(-u,t.cursor.y))})})}function a(e,t=!0){let n=e.x+e.wave.x+(t?e.cursor.x:0),r=e.y+e.wave.y+(t?e.cursor.y:0);return{x:Math.round(n*10)/10,y:Math.round(r*10)/10}}function o(){let{width:e,height:t}=_.current,n=g.current;n&&(n.clearRect(0,0,e,t),n.beginPath(),n.strokeStyle=x.current.lineColor,y.current.forEach(e=>{let t=a(e[0],!1);n.moveTo(t.x,t.y),e.forEach((r,i)=>{let o=i===e.length-1;t=a(r,!o);let s=a(e[i+1]||e[e.length-1],!o);n.lineTo(t.x,t.y),o&&n.moveTo(s.x,s.y)})}),n.stroke())}function s(e){if(!t)return;let n=b.current;n.sx+=(n.x-n.sx)*.1,n.sy+=(n.y-n.sy)*.1;let r=n.x-n.lx,a=n.y-n.ly,c=Math.hypot(r,a);n.v=c,n.vs+=(c-n.vs)*.1,n.vs=Math.min(100,n.vs),n.lx=n.x,n.ly=n.y,n.a=Math.atan2(a,r),t.style.setProperty(`--x`,`${n.sx}px`),t.style.setProperty(`--y`,`${n.sy}px`),i(e),o(),S.current=requestAnimationFrame(s)}function c(){n(),r()}function l(e,t){let n=b.current,r=_.current;n.x=e-r.left,n.y=t-r.top,n.set||=(n.sx=n.x,n.sy=n.y,n.lx=n.x,n.ly=n.y,!0)}function u(e){l(e.clientX,e.clientY)}function d(e){let t=e.touches[0];l(t.clientX,t.clientY)}return n(),r(),S.current=requestAnimationFrame(s),window.addEventListener(`resize`,c),window.addEventListener(`mousemove`,u),window.addEventListener(`touchmove`,d,{passive:!0}),()=>{window.removeEventListener(`resize`,c),window.removeEventListener(`mousemove`,u),window.removeEventListener(`touchmove`,d),S.current!==null&&cancelAnimationFrame(S.current)}},[m]),(0,q.jsx)(`div`,{ref:p,style:{backgroundColor:t,...d},className:`absolute top-0 left-0 w-full h-full overflow-hidden ${f}`,children:(0,q.jsx)(`canvas`,{ref:h,className:`block w-full h-full`})})},ce=`# Blender 4.2.0
# www.blender.org
mtllib LowPolyBottle.mtl
o Bottle.002
v -0.819269 -1.997347 -0.000000
v -0.845588 -1.994753 -0.000000
v -0.870150 -1.987271 -0.000000
v -0.892948 -1.975354 -0.000000
v -0.913972 -1.959455 -0.000000
v -0.933213 -1.940027 -0.000000
v -0.950663 -1.917521 -0.000000
v -0.966314 -1.892390 -0.000000
v -0.980155 -1.865088 -0.000000
v -0.992180 -1.836066 -0.000000
v -0.815324 -1.997347 0.080302
v -0.841516 -1.994753 0.082882
v -0.865960 -1.987271 0.085289
v -0.888648 -1.975354 0.087524
v -0.909571 -1.959455 0.089585
v -0.928720 -1.940027 0.091471
v -0.946086 -1.917521 0.093181
v -0.961661 -1.892390 0.094715
v -0.975436 -1.865088 0.096072
v -0.987402 -1.836066 0.097250
v -0.803527 -1.997347 0.159831
v -0.829340 -1.994753 0.164966
v -0.853431 -1.987271 0.169758
v -0.875790 -1.975354 0.174205
v -0.896410 -1.959455 0.178307
v -0.915282 -1.940027 0.182061
v -0.932397 -1.917521 0.185465
v -0.947746 -1.892390 0.188518
v -0.961322 -1.865088 0.191219
v -0.973115 -1.836066 0.193564
v -0.783991 -1.997347 0.237821
v -0.809177 -1.994753 0.245461
v -0.832682 -1.987271 0.252591
v -0.854498 -1.975354 0.259209
v -0.874617 -1.959455 0.265312
v -0.893029 -1.940027 0.270897
v -0.909728 -1.917521 0.275963
v -0.924705 -1.892390 0.280506
v -0.937950 -1.865088 0.284524
v -0.949457 -1.836066 0.288014
v -0.756906 -1.997347 0.313520
v -0.781221 -1.994753 0.323592
v -0.803914 -1.987271 0.332992
v -0.824977 -1.975354 0.341716
v -0.844400 -1.959455 0.349762
v -0.862177 -1.940027 0.357125
v -0.878298 -1.917521 0.363803
v -0.892757 -1.892390 0.369792
v -0.905545 -1.865088 0.375089
v -0.916655 -1.836066 0.379690
v -0.722531 -1.997347 0.386200
v -0.745742 -1.994753 0.398607
v -0.767404 -1.987271 0.410186
v -0.787510 -1.975354 0.420933
v -0.806051 -1.959455 0.430843
v -0.823021 -1.940027 0.439913
v -0.838410 -1.917521 0.448139
v -0.852213 -1.892390 0.455517
v -0.864420 -1.865088 0.462042
v -0.875024 -1.836066 0.467710
v -0.681197 -1.997347 0.455161
v -0.703081 -1.994753 0.469783
v -0.723504 -1.987271 0.483429
v -0.742459 -1.975354 0.496095
v -0.759940 -1.959455 0.507775
v -0.775939 -1.940027 0.518465
v -0.790448 -1.917521 0.528160
v -0.803461 -1.892390 0.536855
v -0.814969 -1.865088 0.544545
v -0.824967 -1.836066 0.551225
v -0.633303 -1.997347 0.519738
v -0.653648 -1.994753 0.536435
v -0.672636 -1.987271 0.552017
v -0.690258 -1.975354 0.566480
v -0.706510 -1.959455 0.579817
v -0.721384 -1.940027 0.592024
v -0.734873 -1.917521 0.603094
v -0.746971 -1.892390 0.613023
v -0.757670 -1.865088 0.621804
v -0.766965 -1.836066 0.629432
v -0.579311 -1.997347 0.579310
v -0.597921 -1.994753 0.597921
v -0.615289 -1.987271 0.615289
v -0.631410 -1.975354 0.631409
v -0.646276 -1.959455 0.646276
v -0.659882 -1.940027 0.659881
v -0.672221 -1.917521 0.672220
v -0.683287 -1.892390 0.683287
v -0.693075 -1.865088 0.693074
v -0.701577 -1.836066 0.701577
v -0.519739 -1.997347 0.633303
v -0.536435 -1.994753 0.653648
v -0.552018 -1.987271 0.672635
v -0.566480 -1.975354 0.690258
v -0.579818 -1.959455 0.706510
v -0.592024 -1.940027 0.721383
v -0.603095 -1.917521 0.734873
v -0.613023 -1.892390 0.746970
v -0.621804 -1.865088 0.757670
v -0.629432 -1.836066 0.766965
v -0.455162 -1.997347 0.681197
v -0.469784 -1.994753 0.703080
v -0.483430 -1.987271 0.723504
v -0.496096 -1.975354 0.742459
v -0.507776 -1.959455 0.759940
v -0.518466 -1.940027 0.775938
v -0.528160 -1.917521 0.790448
v -0.536855 -1.892390 0.803460
v -0.544545 -1.865088 0.814969
v -0.551226 -1.836066 0.824967
v -0.386201 -1.997347 0.722530
v -0.398607 -1.994753 0.745742
v -0.410186 -1.987271 0.767404
v -0.420933 -1.975354 0.787510
v -0.430844 -1.959455 0.806051
v -0.439914 -1.940027 0.823020
v -0.448140 -1.917521 0.838410
v -0.455517 -1.892390 0.852212
v -0.462042 -1.865088 0.864420
v -0.467710 -1.836066 0.875024
v -0.313521 -1.997347 0.756905
v -0.323593 -1.994753 0.781221
v -0.332992 -1.987271 0.803914
v -0.341717 -1.975354 0.824976
v -0.349762 -1.959455 0.844400
v -0.357125 -1.940027 0.862176
v -0.363803 -1.917521 0.878298
v -0.369792 -1.892390 0.892757
v -0.375089 -1.865088 0.905545
v -0.379691 -1.836066 0.916654
v -0.237821 -1.997347 0.783991
v -0.245461 -1.994753 0.809177
v -0.252592 -1.987271 0.832682
v -0.259209 -1.975354 0.854498
v -0.265312 -1.959455 0.874617
v -0.270898 -1.940027 0.893029
v -0.275963 -1.917521 0.909728
v -0.280506 -1.892390 0.924704
v -0.284524 -1.865088 0.937950
v -0.288015 -1.836066 0.949457
v -0.159832 -1.997347 0.803527
v -0.164966 -1.994753 0.829340
v -0.169758 -1.987271 0.853431
v -0.174206 -1.975354 0.875790
v -0.178307 -1.959455 0.896410
v -0.182061 -1.940027 0.915282
v -0.185465 -1.917521 0.932397
v -0.188519 -1.892390 0.947746
v -0.191219 -1.865088 0.961322
v -0.193565 -1.836066 0.973115
v -0.080303 -1.997347 0.815324
v -0.082882 -1.994753 0.841516
v -0.085290 -1.987271 0.865960
v -0.087524 -1.975354 0.888648
v -0.089585 -1.959455 0.909571
v -0.091471 -1.940027 0.928720
v -0.093182 -1.917521 0.946086
v -0.094716 -1.892390 0.961661
v -0.096072 -1.865088 0.975436
v -0.097251 -1.836066 0.987402
v -0.000000 -1.997347 0.000000
v -0.000000 -1.997347 0.819269
v -0.000000 -1.994753 0.845588
v -0.000000 -1.987271 0.870150
v -0.000000 -1.975354 0.892948
v -0.000000 -1.959455 0.913972
v -0.000000 -1.940027 0.933213
v -0.000000 -1.917521 0.950663
v -0.000000 -1.892390 0.966314
v -0.000000 -1.865088 0.980155
v -0.000000 -1.836066 0.992180
v 0.080302 -1.997347 0.815324
v 0.082882 -1.994753 0.841516
v 0.085289 -1.987271 0.865960
v 0.087524 -1.975354 0.888648
v 0.089585 -1.959455 0.909571
v 0.091471 -1.940027 0.928720
v 0.093181 -1.917521 0.946086
v 0.094715 -1.892390 0.961661
v 0.096072 -1.865088 0.975436
v 0.097250 -1.836066 0.987402
v 0.159831 -1.997347 0.803527
v 0.164966 -1.994753 0.829340
v 0.169758 -1.987271 0.853431
v 0.174205 -1.975354 0.875790
v 0.178307 -1.959455 0.896410
v 0.182061 -1.940027 0.915282
v 0.185465 -1.917521 0.932397
v 0.188518 -1.892390 0.947746
v 0.191219 -1.865088 0.961322
v 0.193564 -1.836066 0.973115
v 0.237821 -1.997347 0.783991
v 0.245461 -1.994753 0.809177
v 0.252591 -1.987271 0.832682
v 0.259209 -1.975354 0.854498
v 0.265312 -1.959455 0.874617
v 0.270897 -1.940027 0.893029
v 0.275963 -1.917521 0.909728
v 0.280506 -1.892390 0.924704
v 0.284524 -1.865088 0.937950
v 0.288014 -1.836066 0.949457
v 0.313520 -1.997347 0.756906
v 0.323592 -1.994753 0.781221
v 0.332992 -1.987271 0.803914
v 0.341716 -1.975354 0.824977
v 0.349762 -1.959455 0.844400
v 0.357125 -1.940027 0.862177
v 0.363803 -1.917521 0.878298
v 0.369792 -1.892390 0.892757
v 0.375089 -1.865088 0.905545
v 0.379691 -1.836066 0.916655
v 0.386200 -1.997347 0.722531
v 0.398607 -1.994753 0.745742
v 0.410186 -1.987271 0.767404
v 0.420933 -1.975354 0.787510
v 0.430843 -1.959455 0.806051
v 0.439914 -1.940027 0.823021
v 0.448139 -1.917521 0.838410
v 0.455517 -1.892390 0.852213
v 0.462042 -1.865088 0.864420
v 0.467710 -1.836066 0.875024
v 0.455161 -1.997347 0.681197
v 0.469783 -1.994753 0.703081
v 0.483430 -1.987271 0.723504
v 0.496095 -1.975354 0.742459
v 0.507775 -1.959455 0.759940
v 0.518465 -1.940027 0.775939
v 0.528160 -1.917521 0.790448
v 0.536855 -1.892390 0.803460
v 0.544545 -1.865088 0.814969
v 0.551225 -1.836066 0.824967
v 0.519738 -1.997347 0.633304
v 0.536435 -1.994753 0.653648
v 0.552017 -1.987271 0.672636
v 0.566480 -1.975354 0.690258
v 0.579817 -1.959455 0.706510
v 0.592024 -1.940027 0.721384
v 0.603094 -1.917521 0.734873
v 0.613023 -1.892390 0.746971
v 0.621804 -1.865088 0.757671
v 0.629432 -1.836066 0.766965
v 0.579310 -1.997347 0.579311
v 0.597921 -1.994753 0.597921
v 0.615289 -1.987271 0.615289
v 0.631409 -1.975354 0.631410
v 0.646276 -1.959455 0.646276
v 0.659881 -1.940027 0.659882
v 0.672220 -1.917521 0.672221
v 0.683287 -1.892390 0.683287
v 0.693074 -1.865088 0.693075
v 0.701577 -1.836066 0.701577
v 0.633303 -1.997347 0.519739
v 0.653648 -1.994753 0.536435
v 0.672635 -1.987271 0.552018
v 0.690258 -1.975354 0.566480
v 0.706510 -1.959455 0.579818
v 0.721383 -1.940027 0.592024
v 0.734873 -1.917521 0.603095
v 0.746970 -1.892390 0.613023
v 0.757670 -1.865088 0.621804
v 0.766965 -1.836066 0.629432
v 0.681197 -1.997347 0.455162
v 0.703080 -1.994753 0.469784
v 0.723504 -1.987271 0.483430
v 0.742459 -1.975354 0.496096
v 0.759940 -1.959455 0.507776
v 0.775938 -1.940027 0.518466
v 0.790448 -1.917521 0.528160
v 0.803460 -1.892390 0.536855
v 0.814969 -1.865088 0.544545
v 0.824967 -1.836066 0.551226
v 0.722530 -1.997347 0.386201
v 0.745742 -1.994753 0.398607
v 0.767404 -1.987271 0.410186
v 0.787510 -1.975354 0.420933
v 0.806051 -1.959455 0.430843
v 0.823021 -1.940027 0.439914
v 0.838410 -1.917521 0.448140
v 0.852212 -1.892390 0.455517
v 0.864420 -1.865088 0.462042
v 0.875024 -1.836066 0.467710
v 0.756906 -1.997347 0.313521
v 0.781221 -1.994753 0.323593
v 0.803914 -1.987271 0.332992
v 0.824976 -1.975354 0.341717
v 0.844400 -1.959455 0.349762
v 0.862177 -1.940027 0.357125
v 0.878298 -1.917521 0.363803
v 0.892757 -1.892390 0.369792
v 0.905545 -1.865088 0.375089
v 0.916654 -1.836066 0.379691
v 0.783991 -1.997347 0.237821
v 0.809177 -1.994753 0.245461
v 0.832682 -1.987271 0.252592
v 0.854498 -1.975354 0.259209
v 0.874617 -1.959455 0.265312
v 0.893029 -1.940027 0.270898
v 0.909728 -1.917521 0.275963
v 0.924704 -1.892390 0.280506
v 0.937950 -1.865088 0.284524
v 0.949457 -1.836066 0.288015
v 0.803527 -1.997347 0.159832
v 0.829340 -1.994753 0.164966
v 0.853431 -1.987271 0.169758
v 0.875790 -1.975354 0.174206
v 0.896410 -1.959455 0.178307
v 0.915282 -1.940027 0.182061
v 0.932397 -1.917521 0.185465
v 0.947746 -1.892390 0.188519
v 0.961322 -1.865088 0.191219
v 0.973115 -1.836066 0.193565
v 0.815324 -1.997347 0.080303
v 0.841516 -1.994753 0.082882
v 0.865960 -1.987271 0.085290
v 0.888648 -1.975354 0.087524
v 0.909571 -1.959455 0.089585
v 0.928720 -1.940027 0.091471
v 0.946086 -1.917521 0.093182
v 0.961661 -1.892390 0.094716
v 0.975436 -1.865088 0.096072
v 0.987402 -1.836066 0.097251
v 0.819269 -1.997347 0.000000
v 0.845588 -1.994753 0.000000
v 0.870150 -1.987271 0.000000
v 0.892948 -1.975354 0.000000
v 0.913972 -1.959455 0.000000
v 0.933213 -1.940027 0.000000
v 0.950663 -1.917521 0.000000
v 0.966314 -1.892390 0.000000
v 0.980155 -1.865088 0.000000
v 0.992180 -1.836066 0.000000
v 0.815324 -1.997347 -0.080302
v 0.841516 -1.994753 -0.082882
v 0.865960 -1.987271 -0.085290
v 0.888648 -1.975354 -0.087524
v 0.909571 -1.959455 -0.089585
v 0.928720 -1.940027 -0.091471
v 0.946086 -1.917521 -0.093181
v 0.961661 -1.892390 -0.094715
v 0.975436 -1.865088 -0.096072
v 0.987402 -1.836066 -0.097250
v 0.803527 -1.997347 -0.159831
v 0.829340 -1.994753 -0.164966
v 0.853431 -1.987271 -0.169758
v 0.875790 -1.975354 -0.174205
v 0.896410 -1.959455 -0.178307
v 0.915282 -1.940027 -0.182061
v 0.932397 -1.917521 -0.185465
v 0.947746 -1.892390 -0.188518
v 0.961322 -1.865088 -0.191219
v 0.973115 -1.836066 -0.193565
v 0.783991 -1.997347 -0.237821
v 0.809177 -1.994753 -0.245461
v 0.832682 -1.987271 -0.252591
v 0.854498 -1.975354 -0.259209
v 0.874617 -1.959455 -0.265312
v 0.893029 -1.940027 -0.270897
v 0.909728 -1.917521 -0.275963
v 0.924704 -1.892390 -0.280506
v 0.937950 -1.865088 -0.284524
v 0.949457 -1.836066 -0.288014
v 0.756906 -1.997347 -0.313520
v 0.781221 -1.994753 -0.323592
v 0.803914 -1.987271 -0.332992
v 0.824977 -1.975354 -0.341716
v 0.844400 -1.959455 -0.349762
v 0.862177 -1.940027 -0.357125
v 0.878298 -1.917521 -0.363803
v 0.892757 -1.892390 -0.369792
v 0.905545 -1.865088 -0.375089
v 0.916655 -1.836066 -0.379690
v 0.722531 -1.997347 -0.386200
v 0.745742 -1.994753 -0.398607
v 0.767404 -1.987271 -0.410186
v 0.787510 -1.975354 -0.420933
v 0.806051 -1.959455 -0.430843
v 0.823021 -1.940027 -0.439913
v 0.838410 -1.917521 -0.448139
v 0.852213 -1.892390 -0.455517
v 0.864420 -1.865088 -0.462042
v 0.875024 -1.836066 -0.467710
v 0.681197 -1.997347 -0.455161
v 0.703081 -1.994753 -0.469783
v 0.723504 -1.987271 -0.483430
v 0.742459 -1.975354 -0.496095
v 0.759940 -1.959455 -0.507775
v 0.775939 -1.940027 -0.518465
v 0.790448 -1.917521 -0.528160
v 0.803460 -1.892390 -0.536855
v 0.814969 -1.865088 -0.544545
v 0.824967 -1.836066 -0.551225
v 0.633303 -1.997347 -0.519738
v 0.653648 -1.994753 -0.536435
v 0.672635 -1.987271 -0.552018
v 0.690258 -1.975354 -0.566480
v 0.706510 -1.959455 -0.579818
v 0.721384 -1.940027 -0.592024
v 0.734873 -1.917521 -0.603094
v 0.746971 -1.892390 -0.613023
v 0.757670 -1.865088 -0.621804
v 0.766965 -1.836066 -0.629432
v 0.579311 -1.997347 -0.579310
v 0.597921 -1.994753 -0.597921
v 0.615289 -1.987271 -0.615289
v 0.631410 -1.975354 -0.631410
v 0.646276 -1.959455 -0.646276
v 0.659881 -1.940027 -0.659881
v 0.672221 -1.917521 -0.672220
v 0.683287 -1.892390 -0.683287
v 0.693075 -1.865088 -0.693074
v 0.701577 -1.836066 -0.701577
v 0.519739 -1.997347 -0.633303
v 0.536435 -1.994753 -0.653648
v 0.552018 -1.987271 -0.672635
v 0.566480 -1.975354 -0.690258
v 0.579818 -1.959455 -0.706510
v 0.592024 -1.940027 -0.721383
v 0.603095 -1.917521 -0.734873
v 0.613023 -1.892390 -0.746970
v 0.621804 -1.865088 -0.757670
v 0.629432 -1.836066 -0.766965
v 0.455161 -1.997347 -0.681197
v 0.469783 -1.994753 -0.703081
v 0.483430 -1.987271 -0.723504
v 0.496095 -1.975354 -0.742459
v 0.507776 -1.959455 -0.759940
v 0.518465 -1.940027 -0.775938
v 0.528160 -1.917521 -0.790448
v 0.536855 -1.892390 -0.803460
v 0.544545 -1.865088 -0.814969
v 0.551225 -1.836066 -0.824967
v 0.386201 -1.997347 -0.722530
v 0.398608 -1.994753 -0.745742
v 0.410186 -1.987271 -0.767404
v 0.420933 -1.975354 -0.787510
v 0.430844 -1.959455 -0.806051
v 0.439914 -1.940027 -0.823020
v 0.448140 -1.917521 -0.838410
v 0.455517 -1.892390 -0.852212
v 0.462042 -1.865088 -0.864420
v 0.467710 -1.836066 -0.875024
v 0.313521 -1.997347 -0.756906
v 0.323592 -1.994753 -0.781221
v 0.332992 -1.987271 -0.803914
v 0.341716 -1.975354 -0.824976
v 0.349762 -1.959455 -0.844400
v 0.357125 -1.940027 -0.862177
v 0.363803 -1.917521 -0.878298
v 0.369792 -1.892390 -0.892757
v 0.375089 -1.865088 -0.905545
v 0.379691 -1.836066 -0.916654
v 0.237821 -1.997347 -0.783991
v 0.245461 -1.994753 -0.809177
v 0.252591 -1.987271 -0.832682
v 0.259209 -1.975354 -0.854498
v 0.265312 -1.959455 -0.874617
v 0.270898 -1.940027 -0.893029
v 0.275963 -1.917521 -0.909728
v 0.280506 -1.892390 -0.924704
v 0.284524 -1.865088 -0.937950
v 0.288015 -1.836066 -0.949457
v 0.159832 -1.997347 -0.803527
v 0.164966 -1.994753 -0.829340
v 0.169758 -1.987271 -0.853431
v 0.174206 -1.975354 -0.875790
v 0.178307 -1.959455 -0.896410
v 0.182061 -1.940027 -0.915282
v 0.185466 -1.917521 -0.932397
v 0.188519 -1.892390 -0.947746
v 0.191219 -1.865088 -0.961322
v 0.193565 -1.836066 -0.973115
v 0.080302 -1.997347 -0.815324
v 0.082882 -1.994753 -0.841516
v 0.085290 -1.987271 -0.865960
v 0.087524 -1.975354 -0.888648
v 0.089585 -1.959455 -0.909571
v 0.091471 -1.940027 -0.928720
v 0.093181 -1.917521 -0.946086
v 0.094715 -1.892390 -0.961661
v 0.096072 -1.865088 -0.975436
v 0.097251 -1.836066 -0.987402
v 0.000000 -1.997347 -0.819269
v 0.000000 -1.994753 -0.845588
v 0.000000 -1.987271 -0.870150
v 0.000000 -1.975354 -0.892948
v 0.000000 -1.959455 -0.913972
v 0.000000 -1.940027 -0.933213
v 0.000000 -1.917521 -0.950663
v 0.000000 -1.892390 -0.966314
v 0.000000 -1.865088 -0.980155
v 0.000000 -1.836066 -0.992180
v -0.080302 -1.997347 -0.815324
v -0.082882 -1.994753 -0.841516
v -0.085290 -1.987271 -0.865960
v -0.087524 -1.975354 -0.888648
v -0.089585 -1.959455 -0.909571
v -0.091471 -1.940027 -0.928720
v -0.093181 -1.917521 -0.946086
v -0.094715 -1.892390 -0.961661
v -0.096072 -1.865088 -0.975436
v -0.097251 -1.836066 -0.987402
v -0.159831 -1.997347 -0.803527
v -0.164966 -1.994753 -0.829340
v -0.169758 -1.987271 -0.853431
v -0.174205 -1.975354 -0.875790
v -0.178307 -1.959455 -0.896410
v -0.182061 -1.940027 -0.915282
v -0.185465 -1.917521 -0.932397
v -0.188518 -1.892390 -0.947746
v -0.191219 -1.865088 -0.961322
v -0.193564 -1.836066 -0.973115
v -0.237821 -1.997347 -0.783991
v -0.245461 -1.994753 -0.809177
v -0.252591 -1.987271 -0.832682
v -0.259209 -1.975354 -0.854498
v -0.265312 -1.959455 -0.874617
v -0.270898 -1.940027 -0.893029
v -0.275963 -1.917521 -0.909728
v -0.280506 -1.892390 -0.924704
v -0.284524 -1.865088 -0.937950
v -0.288015 -1.836066 -0.949457
v -0.313520 -1.997347 -0.756906
v -0.323592 -1.994753 -0.781221
v -0.332992 -1.987271 -0.803914
v -0.341716 -1.975354 -0.824976
v -0.349762 -1.959455 -0.844400
v -0.357125 -1.940027 -0.862177
v -0.363803 -1.917521 -0.878298
v -0.369792 -1.892390 -0.892757
v -0.375089 -1.865088 -0.905545
v -0.379691 -1.836066 -0.916654
v -0.386200 -1.997347 -0.722531
v -0.398607 -1.994753 -0.745742
v -0.410186 -1.987271 -0.767404
v -0.420933 -1.975354 -0.787510
v -0.430843 -1.959455 -0.806051
v -0.439913 -1.940027 -0.823021
v -0.448139 -1.917521 -0.838410
v -0.455517 -1.892390 -0.852213
v -0.462042 -1.865088 -0.864420
v -0.467710 -1.836066 -0.875024
v -0.455161 -1.997347 -0.681197
v -0.469783 -1.994753 -0.703081
v -0.483430 -1.987271 -0.723504
v -0.496095 -1.975354 -0.742459
v -0.507775 -1.959455 -0.759940
v -0.518465 -1.940027 -0.775938
v -0.528160 -1.917521 -0.790448
v -0.536855 -1.892390 -0.803460
v -0.544545 -1.865088 -0.814969
v -0.551225 -1.836066 -0.824967
v -0.519738 -1.997347 -0.633303
v -0.536435 -1.994753 -0.653648
v -0.552017 -1.987271 -0.672636
v -0.566480 -1.975354 -0.690258
v -0.579817 -1.959455 -0.706510
v -0.592024 -1.940027 -0.721384
v -0.603094 -1.917521 -0.734873
v -0.613023 -1.892390 -0.746971
v -0.621804 -1.865088 -0.757670
v -0.629432 -1.836066 -0.766965
v -0.579310 -1.997347 -0.579310
v -0.597921 -1.994753 -0.597921
v -0.615289 -1.987271 -0.615289
v -0.631410 -1.975354 -0.631410
v -0.646276 -1.959455 -0.646276
v -0.659881 -1.940027 -0.659881
v -0.672221 -1.917521 -0.672220
v -0.683287 -1.892390 -0.683287
v -0.693075 -1.865088 -0.693074
v -0.701577 -1.836066 -0.701577
v -0.633303 -1.997347 -0.519739
v -0.653648 -1.994753 -0.536435
v -0.672635 -1.987271 -0.552018
v -0.690258 -1.975354 -0.566480
v -0.706510 -1.959455 -0.579818
v -0.721383 -1.940027 -0.592024
v -0.734873 -1.917521 -0.603094
v -0.746970 -1.892390 -0.613023
v -0.757670 -1.865088 -0.621804
v -0.766965 -1.836066 -0.629432
v -0.681197 -1.997347 -0.455162
v -0.703080 -1.994753 -0.469784
v -0.723503 -1.987271 -0.483430
v -0.742459 -1.975354 -0.496096
v -0.759940 -1.959455 -0.507776
v -0.775938 -1.940027 -0.518466
v -0.790447 -1.917521 -0.528161
v -0.803460 -1.892390 -0.536855
v -0.814969 -1.865088 -0.544545
v -0.824967 -1.836066 -0.551226
v -0.722530 -1.997347 -0.386201
v -0.745742 -1.994753 -0.398607
v -0.767404 -1.987271 -0.410186
v -0.787510 -1.975354 -0.420933
v -0.806051 -1.959455 -0.430843
v -0.823021 -1.940027 -0.439914
v -0.838410 -1.917521 -0.448140
v -0.852212 -1.892390 -0.455517
v -0.864420 -1.865088 -0.462042
v -0.875024 -1.836066 -0.467710
v -0.756906 -1.997347 -0.313521
v -0.781221 -1.994753 -0.323593
v -0.803914 -1.987271 -0.332992
v -0.824976 -1.975354 -0.341717
v -0.844400 -1.959455 -0.349762
v -0.862176 -1.940027 -0.357125
v -0.878298 -1.917521 -0.363803
v -0.892757 -1.892390 -0.369792
v -0.905545 -1.865088 -0.375089
v -0.916654 -1.836066 -0.379691
v -0.783991 -1.997347 -0.237821
v -0.809177 -1.994753 -0.245461
v -0.832682 -1.987271 -0.252591
v -0.854498 -1.975354 -0.259209
v -0.874617 -1.959455 -0.265312
v -0.893029 -1.940027 -0.270897
v -0.909728 -1.917521 -0.275963
v -0.924704 -1.892390 -0.280506
v -0.937950 -1.865088 -0.284524
v -0.949457 -1.836066 -0.288015
v -0.803527 -1.997347 -0.159832
v -0.829340 -1.994753 -0.164966
v -0.853431 -1.987271 -0.169758
v -0.875790 -1.975354 -0.174206
v -0.896410 -1.959455 -0.178307
v -0.915282 -1.940027 -0.182061
v -0.932397 -1.917521 -0.185465
v -0.947746 -1.892390 -0.188519
v -0.961322 -1.865088 -0.191219
v -0.973115 -1.836066 -0.193565
v -0.815324 -1.997347 -0.080302
v -0.841516 -1.994753 -0.082882
v -0.865960 -1.987271 -0.085290
v -0.888648 -1.975354 -0.087524
v -0.909571 -1.959455 -0.089585
v -0.928720 -1.940027 -0.091471
v -0.946086 -1.917521 -0.093181
v -0.961661 -1.892390 -0.094715
v -0.975436 -1.865088 -0.096072
v -0.987402 -1.836066 -0.097251
v 0.000000 2.165778 0.000000
v -0.422808 2.165778 0.000000
v -0.420772 2.165778 0.041443
v -0.414683 2.165778 0.082486
v -0.404601 2.165778 0.122735
v -0.390623 2.165778 0.161802
v -0.372883 2.165778 0.199310
v -0.351551 2.165778 0.234899
v -0.326834 2.165778 0.268226
v -0.298970 2.165778 0.298970
v -0.268226 2.165778 0.326835
v -0.234899 2.165778 0.351552
v -0.199310 2.165778 0.372883
v -0.161801 2.165778 0.390623
v -0.122734 2.165778 0.404602
v -0.082485 2.165778 0.414683
v -0.041442 2.165778 0.420772
v 0.000000 2.165778 0.422808
v 0.041443 2.165778 0.420772
v 0.082486 2.165778 0.414683
v 0.122735 2.165778 0.404601
v 0.161802 2.165778 0.390623
v 0.199310 2.165778 0.372883
v 0.234900 2.165778 0.351551
v 0.268226 2.165778 0.326834
v 0.298970 2.165778 0.298970
v 0.326835 2.165778 0.268226
v 0.351552 2.165778 0.234899
v 0.372883 2.165778 0.199310
v 0.390623 2.165778 0.161801
v 0.404602 2.165778 0.122734
v 0.414683 2.165778 0.082485
v 0.420772 2.165778 0.041442
v 0.422808 2.165778 -0.000000
v 0.420772 2.165778 -0.041443
v 0.414683 2.165778 -0.082486
v 0.404601 2.165778 -0.122735
v 0.390623 2.165778 -0.161802
v 0.372883 2.165778 -0.199310
v 0.351551 2.165778 -0.234900
v 0.326834 2.165778 -0.268227
v 0.298970 2.165778 -0.298970
v 0.268226 2.165778 -0.326835
v 0.234899 2.165778 -0.351552
v 0.199310 2.165778 -0.372883
v 0.161801 2.165778 -0.390623
v 0.122734 2.165778 -0.404602
v 0.082485 2.165778 -0.414683
v 0.041442 2.165778 -0.420772
v -0.000000 2.165778 -0.422808
v -0.041443 2.165778 -0.420772
v -0.082486 2.165778 -0.414683
v -0.122735 2.165778 -0.404601
v -0.161802 2.165778 -0.390623
v -0.199310 2.165778 -0.372883
v -0.234900 2.165778 -0.351551
v -0.268226 2.165778 -0.326834
v -0.298970 2.165778 -0.298970
v -0.326835 2.165778 -0.268226
v -0.351552 2.165778 -0.234899
v -0.372883 2.165778 -0.199310
v -0.390623 2.165778 -0.161801
v -0.404602 2.165778 -0.122734
v -0.414683 2.165778 -0.082485
v -0.420772 2.165778 -0.041442
vn -0.0506 -0.9987 -0.0000
vn -0.1987 -0.9801 -0.0000
vn -0.3814 -0.9244 -0.0000
vn -0.5369 -0.8437 -0.0000
vn -0.6598 -0.7515 -0.0000
vn -0.7526 -0.6585 -0.0000
vn -0.8212 -0.5707 -0.0000
vn -0.8716 -0.4903 -0.0000
vn -0.9088 -0.4173 -0.0000
vn -0.9238 -0.3828 -0.0000
vn -0.0504 -0.9987 0.0050
vn -0.1977 -0.9801 0.0195
vn -0.3796 -0.9244 0.0374
vn -0.5343 -0.8437 0.0526
vn -0.6566 -0.7515 0.0647
vn -0.7490 -0.6585 0.0738
vn -0.8172 -0.5707 0.0805
vn -0.8674 -0.4903 0.0854
vn -0.9044 -0.4173 0.0891
vn -0.9194 -0.3828 0.0906
vn -0.0497 -0.9987 0.0099
vn -0.1948 -0.9801 0.0388
vn -0.3741 -0.9244 0.0744
vn -0.5266 -0.8437 0.1047
vn -0.6471 -0.7515 0.1287
vn -0.7381 -0.6585 0.1468
vn -0.8054 -0.5707 0.1602
vn -0.8548 -0.4903 0.1700
vn -0.8913 -0.4173 0.1773
vn -0.9061 -0.3828 0.1802
vn -0.0485 -0.9987 0.0147
vn -0.1901 -0.9801 0.0577
vn -0.3650 -0.9244 0.1107
vn -0.5138 -0.8437 0.1559
vn -0.6314 -0.7515 0.1915
vn -0.7202 -0.6585 0.2185
vn -0.7858 -0.5707 0.2384
vn -0.8340 -0.4903 0.2530
vn -0.8696 -0.4173 0.2638
vn -0.8841 -0.3828 0.2682
vn -0.0468 -0.9987 0.0194
vn -0.1835 -0.9801 0.0760
vn -0.3524 -0.9244 0.1460
vn -0.4960 -0.8437 0.2055
vn -0.6096 -0.7515 0.2525
vn -0.6953 -0.6585 0.2880
vn -0.7587 -0.5707 0.3142
vn -0.8052 -0.4903 0.3335
vn -0.8396 -0.4173 0.3478
vn -0.8535 -0.3828 0.3535
vn -0.0447 -0.9987 0.0239
vn -0.1752 -0.9801 0.0936
vn -0.3364 -0.9244 0.1798
vn -0.4735 -0.8437 0.2531
vn -0.5819 -0.7515 0.3110
vn -0.6637 -0.6585 0.3548
vn -0.7242 -0.5707 0.3871
vn -0.7686 -0.4903 0.4108
vn -0.8015 -0.4173 0.4284
vn -0.8148 -0.3828 0.4355
vn -0.0421 -0.9987 0.0281
vn -0.1652 -0.9801 0.1104
vn -0.3171 -0.9244 0.2119
vn -0.4464 -0.8437 0.2983
vn -0.5486 -0.7515 0.3666
vn -0.6258 -0.6585 0.4181
vn -0.6828 -0.5707 0.4562
vn -0.7247 -0.4903 0.4842
vn -0.7556 -0.4173 0.5049
vn -0.7681 -0.3828 0.5133
vn -0.0391 -0.9987 0.0321
vn -0.1536 -0.9801 0.1260
vn -0.2948 -0.9244 0.2420
vn -0.4150 -0.8437 0.3406
vn -0.5100 -0.7515 0.4186
vn -0.5818 -0.6585 0.4774
vn -0.6348 -0.5707 0.5209
vn -0.6737 -0.4903 0.5529
vn -0.7025 -0.4173 0.5765
vn -0.7141 -0.3828 0.5861
vn -0.0358 -0.9987 0.0358
vn -0.1405 -0.9801 0.1405
vn -0.2697 -0.9244 0.2697
vn -0.3796 -0.8437 0.3796
vn -0.4665 -0.7515 0.4665
vn -0.5322 -0.6585 0.5322
vn -0.5806 -0.5707 0.5806
vn -0.6163 -0.4903 0.6163
vn -0.6426 -0.4173 0.6426
vn -0.6533 -0.3828 0.6533
vn -0.0321 -0.9987 0.0391
vn -0.1260 -0.9801 0.1536
vn -0.2420 -0.9244 0.2949
vn -0.3406 -0.8437 0.4150
vn -0.4186 -0.7515 0.5100
vn -0.4774 -0.6585 0.5818
vn -0.5209 -0.5707 0.6348
vn -0.5529 -0.4903 0.6737
vn -0.5765 -0.4173 0.7025
vn -0.5861 -0.3828 0.7141
vn -0.0281 -0.9987 0.0421
vn -0.1104 -0.9801 0.1652
vn -0.2119 -0.9244 0.3171
vn -0.2983 -0.8437 0.4464
vn -0.3666 -0.7515 0.5486
vn -0.4181 -0.6585 0.6258
vn -0.4562 -0.5707 0.6828
vn -0.4842 -0.4903 0.7247
vn -0.5049 -0.4173 0.7556
vn -0.5133 -0.3828 0.7681
vn -0.0239 -0.9987 0.0447
vn -0.0936 -0.9801 0.1752
vn -0.1798 -0.9244 0.3364
vn -0.2531 -0.8437 0.4735
vn -0.3110 -0.7515 0.5819
vn -0.3548 -0.6585 0.6637
vn -0.3871 -0.5707 0.7242
vn -0.4108 -0.4903 0.7686
vn -0.4284 -0.4173 0.8015
vn -0.4355 -0.3828 0.8148
vn -0.0194 -0.9987 0.0468
vn -0.0760 -0.9801 0.1835
vn -0.1460 -0.9244 0.3524
vn -0.2055 -0.8437 0.4960
vn -0.2525 -0.7515 0.6096
vn -0.2880 -0.6585 0.6953
vn -0.3142 -0.5707 0.7587
vn -0.3335 -0.4903 0.8052
vn -0.3478 -0.4173 0.8396
vn -0.3535 -0.3828 0.8535
vn -0.0147 -0.9987 0.0485
vn -0.0577 -0.9801 0.1901
vn -0.1107 -0.9244 0.3650
vn -0.1559 -0.8437 0.5138
vn -0.1915 -0.7515 0.6314
vn -0.2185 -0.6585 0.7202
vn -0.2384 -0.5707 0.7858
vn -0.2530 -0.4903 0.8340
vn -0.2638 -0.4173 0.8696
vn -0.2682 -0.3828 0.8841
vn -0.0099 -0.9987 0.0497
vn -0.0388 -0.9801 0.1948
vn -0.0744 -0.9244 0.3741
vn -0.1047 -0.8437 0.5266
vn -0.1287 -0.7515 0.6471
vn -0.1468 -0.6585 0.7381
vn -0.1602 -0.5707 0.8054
vn -0.1700 -0.4903 0.8548
vn -0.1773 -0.4173 0.8913
vn -0.1802 -0.3828 0.9061
vn -0.0050 -0.9987 0.0504
vn -0.0195 -0.9801 0.1977
vn -0.0374 -0.9244 0.3796
vn -0.0526 -0.8437 0.5343
vn -0.0647 -0.7515 0.6566
vn -0.0738 -0.6585 0.7490
vn -0.0805 -0.5707 0.8172
vn -0.0854 -0.4903 0.8674
vn -0.0891 -0.4173 0.9044
vn -0.0906 -0.3828 0.9194
vn -0.0000 -1.0000 -0.0000
vn -0.0000 -0.9987 0.0506
vn -0.0000 -0.9801 0.1987
vn -0.0000 -0.9244 0.3814
vn -0.0000 -0.8437 0.5369
vn -0.0000 -0.7515 0.6598
vn -0.0000 -0.6585 0.7526
vn -0.0000 -0.5707 0.8212
vn -0.0000 -0.4903 0.8716
vn -0.0000 -0.4173 0.9088
vn -0.0000 -0.3828 0.9238
vn 0.0050 -0.9987 0.0504
vn 0.0195 -0.9801 0.1977
vn 0.0374 -0.9244 0.3796
vn 0.0526 -0.8437 0.5343
vn 0.0647 -0.7515 0.6566
vn 0.0738 -0.6585 0.7490
vn 0.0805 -0.5707 0.8172
vn 0.0854 -0.4903 0.8674
vn 0.0891 -0.4173 0.9044
vn 0.0906 -0.3828 0.9194
vn 0.0099 -0.9987 0.0497
vn 0.0388 -0.9801 0.1948
vn 0.0744 -0.9244 0.3741
vn 0.1047 -0.8437 0.5266
vn 0.1287 -0.7515 0.6471
vn 0.1468 -0.6585 0.7381
vn 0.1602 -0.5707 0.8054
vn 0.1700 -0.4903 0.8548
vn 0.1773 -0.4173 0.8913
vn 0.1802 -0.3828 0.9061
vn 0.0147 -0.9987 0.0485
vn 0.0577 -0.9801 0.1901
vn 0.1107 -0.9244 0.3650
vn 0.1559 -0.8437 0.5138
vn 0.1915 -0.7515 0.6314
vn 0.2185 -0.6585 0.7202
vn 0.2384 -0.5707 0.7858
vn 0.2530 -0.4903 0.8340
vn 0.2638 -0.4173 0.8696
vn 0.2682 -0.3828 0.8841
vn 0.0194 -0.9987 0.0468
vn 0.0760 -0.9801 0.1835
vn 0.1460 -0.9244 0.3524
vn 0.2055 -0.8437 0.4960
vn 0.2525 -0.7515 0.6096
vn 0.2880 -0.6585 0.6953
vn 0.3142 -0.5707 0.7587
vn 0.3335 -0.4903 0.8052
vn 0.3478 -0.4173 0.8396
vn 0.3535 -0.3828 0.8535
vn 0.0239 -0.9987 0.0447
vn 0.0936 -0.9801 0.1752
vn 0.1798 -0.9244 0.3364
vn 0.2531 -0.8437 0.4735
vn 0.3110 -0.7515 0.5819
vn 0.3548 -0.6585 0.6637
vn 0.3871 -0.5707 0.7242
vn 0.4108 -0.4903 0.7686
vn 0.4284 -0.4173 0.8015
vn 0.4355 -0.3828 0.8148
vn 0.0281 -0.9987 0.0421
vn 0.1104 -0.9801 0.1652
vn 0.2119 -0.9244 0.3171
vn 0.2983 -0.8437 0.4464
vn 0.3666 -0.7515 0.5486
vn 0.4181 -0.6585 0.6258
vn 0.4562 -0.5707 0.6828
vn 0.4842 -0.4903 0.7247
vn 0.5049 -0.4173 0.7556
vn 0.5133 -0.3828 0.7681
vn 0.0321 -0.9987 0.0391
vn 0.1260 -0.9801 0.1536
vn 0.2420 -0.9244 0.2949
vn 0.3406 -0.8437 0.4150
vn 0.4186 -0.7515 0.5100
vn 0.4774 -0.6585 0.5818
vn 0.5209 -0.5707 0.6348
vn 0.5529 -0.4903 0.6737
vn 0.5765 -0.4173 0.7025
vn 0.5861 -0.3828 0.7141
vn 0.0358 -0.9987 0.0358
vn 0.1405 -0.9801 0.1405
vn 0.2697 -0.9244 0.2697
vn 0.3796 -0.8437 0.3796
vn 0.4665 -0.7515 0.4665
vn 0.5322 -0.6585 0.5322
vn 0.5806 -0.5707 0.5806
vn 0.6163 -0.4903 0.6163
vn 0.6426 -0.4173 0.6426
vn 0.6533 -0.3828 0.6533
vn 0.0391 -0.9987 0.0321
vn 0.1536 -0.9801 0.1260
vn 0.2948 -0.9244 0.2420
vn 0.4150 -0.8437 0.3406
vn 0.5100 -0.7515 0.4186
vn 0.5818 -0.6585 0.4774
vn 0.6348 -0.5707 0.5209
vn 0.6737 -0.4903 0.5529
vn 0.7025 -0.4173 0.5765
vn 0.7141 -0.3828 0.5861
vn 0.0421 -0.9987 0.0281
vn 0.1652 -0.9801 0.1104
vn 0.3171 -0.9244 0.2119
vn 0.4464 -0.8437 0.2983
vn 0.5486 -0.7515 0.3666
vn 0.6258 -0.6585 0.4181
vn 0.6828 -0.5707 0.4562
vn 0.7247 -0.4903 0.4842
vn 0.7556 -0.4173 0.5049
vn 0.7681 -0.3828 0.5133
vn 0.0447 -0.9987 0.0239
vn 0.1752 -0.9801 0.0936
vn 0.3364 -0.9244 0.1798
vn 0.4735 -0.8437 0.2531
vn 0.5819 -0.7515 0.3110
vn 0.6637 -0.6585 0.3548
vn 0.7242 -0.5707 0.3871
vn 0.7686 -0.4903 0.4108
vn 0.8015 -0.4173 0.4284
vn 0.8148 -0.3828 0.4355
vn 0.0468 -0.9987 0.0194
vn 0.1835 -0.9801 0.0760
vn 0.3524 -0.9244 0.1460
vn 0.4960 -0.8437 0.2055
vn 0.6096 -0.7515 0.2525
vn 0.6953 -0.6585 0.2880
vn 0.7587 -0.5707 0.3142
vn 0.8052 -0.4903 0.3335
vn 0.8396 -0.4173 0.3478
vn 0.8535 -0.3828 0.3535
vn 0.0485 -0.9987 0.0147
vn 0.1901 -0.9801 0.0577
vn 0.3650 -0.9244 0.1107
vn 0.5138 -0.8437 0.1559
vn 0.6314 -0.7515 0.1915
vn 0.7202 -0.6585 0.2185
vn 0.7858 -0.5707 0.2384
vn 0.8340 -0.4903 0.2530
vn 0.8696 -0.4173 0.2638
vn 0.8841 -0.3828 0.2682
vn 0.0497 -0.9987 0.0099
vn 0.1948 -0.9801 0.0388
vn 0.3741 -0.9244 0.0744
vn 0.5266 -0.8437 0.1047
vn 0.6471 -0.7515 0.1287
vn 0.7381 -0.6585 0.1468
vn 0.8054 -0.5707 0.1602
vn 0.8548 -0.4903 0.1700
vn 0.8913 -0.4173 0.1773
vn 0.9061 -0.3828 0.1802
vn 0.0504 -0.9987 0.0050
vn 0.1977 -0.9801 0.0195
vn 0.3796 -0.9244 0.0374
vn 0.5343 -0.8437 0.0526
vn 0.6566 -0.7515 0.0647
vn 0.7490 -0.6585 0.0738
vn 0.8172 -0.5707 0.0805
vn 0.8674 -0.4903 0.0854
vn 0.9044 -0.4173 0.0891
vn 0.9194 -0.3828 0.0906
vn 0.0506 -0.9987 -0.0000
vn 0.1987 -0.9801 -0.0000
vn 0.3814 -0.9244 -0.0000
vn 0.5369 -0.8437 -0.0000
vn 0.6598 -0.7515 -0.0000
vn 0.7526 -0.6585 -0.0000
vn 0.8212 -0.5707 -0.0000
vn 0.8716 -0.4903 -0.0000
vn 0.9088 -0.4173 -0.0000
vn 0.9238 -0.3828 -0.0000
vn 0.0504 -0.9987 -0.0050
vn 0.1977 -0.9801 -0.0195
vn 0.3796 -0.9244 -0.0374
vn 0.5343 -0.8437 -0.0526
vn 0.6566 -0.7515 -0.0647
vn 0.7490 -0.6585 -0.0738
vn 0.8172 -0.5707 -0.0805
vn 0.8674 -0.4903 -0.0854
vn 0.9044 -0.4173 -0.0891
vn 0.9194 -0.3828 -0.0906
vn 0.0497 -0.9987 -0.0099
vn 0.1948 -0.9801 -0.0388
vn 0.3741 -0.9244 -0.0744
vn 0.5266 -0.8437 -0.1047
vn 0.6471 -0.7515 -0.1287
vn 0.7381 -0.6585 -0.1468
vn 0.8054 -0.5707 -0.1602
vn 0.8548 -0.4903 -0.1700
vn 0.8913 -0.4173 -0.1773
vn 0.9061 -0.3828 -0.1802
vn 0.0485 -0.9987 -0.0147
vn 0.1901 -0.9801 -0.0577
vn 0.3650 -0.9244 -0.1107
vn 0.5138 -0.8437 -0.1559
vn 0.6314 -0.7515 -0.1915
vn 0.7202 -0.6585 -0.2185
vn 0.7858 -0.5707 -0.2384
vn 0.8340 -0.4903 -0.2530
vn 0.8696 -0.4173 -0.2638
vn 0.8841 -0.3828 -0.2682
vn 0.0468 -0.9987 -0.0194
vn 0.1835 -0.9801 -0.0760
vn 0.3524 -0.9244 -0.1460
vn 0.4960 -0.8437 -0.2055
vn 0.6096 -0.7515 -0.2525
vn 0.6953 -0.6585 -0.2880
vn 0.7587 -0.5707 -0.3142
vn 0.8052 -0.4903 -0.3335
vn 0.8396 -0.4173 -0.3478
vn 0.8535 -0.3828 -0.3535
vn 0.0447 -0.9987 -0.0239
vn 0.1752 -0.9801 -0.0936
vn 0.3364 -0.9244 -0.1798
vn 0.4735 -0.8437 -0.2531
vn 0.5819 -0.7515 -0.3110
vn 0.6637 -0.6585 -0.3548
vn 0.7242 -0.5707 -0.3871
vn 0.7686 -0.4903 -0.4108
vn 0.8015 -0.4173 -0.4284
vn 0.8148 -0.3828 -0.4355
vn 0.0421 -0.9987 -0.0281
vn 0.1652 -0.9801 -0.1104
vn 0.3171 -0.9244 -0.2119
vn 0.4464 -0.8437 -0.2983
vn 0.5486 -0.7515 -0.3666
vn 0.6258 -0.6585 -0.4181
vn 0.6828 -0.5707 -0.4562
vn 0.7247 -0.4903 -0.4842
vn 0.7556 -0.4173 -0.5049
vn 0.7681 -0.3828 -0.5133
vn 0.0391 -0.9987 -0.0321
vn 0.1536 -0.9801 -0.1260
vn 0.2948 -0.9244 -0.2420
vn 0.4150 -0.8437 -0.3406
vn 0.5100 -0.7515 -0.4186
vn 0.5818 -0.6585 -0.4774
vn 0.6348 -0.5707 -0.5209
vn 0.6737 -0.4903 -0.5529
vn 0.7025 -0.4173 -0.5765
vn 0.7141 -0.3828 -0.5861
vn 0.0358 -0.9987 -0.0358
vn 0.1405 -0.9801 -0.1405
vn 0.2697 -0.9244 -0.2697
vn 0.3796 -0.8437 -0.3796
vn 0.4665 -0.7515 -0.4665
vn 0.5322 -0.6585 -0.5322
vn 0.5806 -0.5707 -0.5806
vn 0.6163 -0.4903 -0.6163
vn 0.6426 -0.4173 -0.6426
vn 0.6533 -0.3828 -0.6533
vn 0.0321 -0.9987 -0.0391
vn 0.1260 -0.9801 -0.1536
vn 0.2420 -0.9244 -0.2949
vn 0.3406 -0.8437 -0.4150
vn 0.4186 -0.7515 -0.5100
vn 0.4774 -0.6585 -0.5818
vn 0.5209 -0.5707 -0.6348
vn 0.5529 -0.4903 -0.6737
vn 0.5765 -0.4173 -0.7025
vn 0.5861 -0.3828 -0.7141
vn 0.0281 -0.9987 -0.0421
vn 0.1104 -0.9801 -0.1652
vn 0.2119 -0.9244 -0.3171
vn 0.2983 -0.8437 -0.4464
vn 0.3666 -0.7515 -0.5486
vn 0.4181 -0.6585 -0.6258
vn 0.4562 -0.5707 -0.6828
vn 0.4842 -0.4903 -0.7247
vn 0.5049 -0.4173 -0.7556
vn 0.5133 -0.3828 -0.7681
vn 0.0239 -0.9987 -0.0447
vn 0.0936 -0.9801 -0.1752
vn 0.1798 -0.9244 -0.3364
vn 0.2531 -0.8437 -0.4735
vn 0.3110 -0.7515 -0.5819
vn 0.3548 -0.6585 -0.6637
vn 0.3871 -0.5707 -0.7242
vn 0.4108 -0.4903 -0.7686
vn 0.4284 -0.4173 -0.8015
vn 0.4355 -0.3828 -0.8148
vn 0.0194 -0.9987 -0.0468
vn 0.0760 -0.9801 -0.1835
vn 0.1460 -0.9244 -0.3524
vn 0.2055 -0.8437 -0.4960
vn 0.2525 -0.7515 -0.6096
vn 0.2880 -0.6585 -0.6953
vn 0.3142 -0.5707 -0.7587
vn 0.3335 -0.4903 -0.8052
vn 0.3478 -0.4173 -0.8396
vn 0.3535 -0.3828 -0.8535
vn 0.0147 -0.9987 -0.0485
vn 0.0577 -0.9801 -0.1901
vn 0.1107 -0.9244 -0.3650
vn 0.1559 -0.8437 -0.5138
vn 0.1915 -0.7515 -0.6314
vn 0.2185 -0.6585 -0.7202
vn 0.2384 -0.5707 -0.7858
vn 0.2530 -0.4903 -0.8340
vn 0.2638 -0.4173 -0.8696
vn 0.2682 -0.3828 -0.8841
vn 0.0099 -0.9987 -0.0497
vn 0.0388 -0.9801 -0.1948
vn 0.0744 -0.9244 -0.3741
vn 0.1047 -0.8437 -0.5266
vn 0.1287 -0.7515 -0.6471
vn 0.1468 -0.6585 -0.7381
vn 0.1602 -0.5707 -0.8054
vn 0.1700 -0.4903 -0.8548
vn 0.1773 -0.4173 -0.8913
vn 0.1802 -0.3828 -0.9061
vn 0.0050 -0.9987 -0.0504
vn 0.0195 -0.9801 -0.1977
vn 0.0374 -0.9244 -0.3796
vn 0.0526 -0.8437 -0.5343
vn 0.0647 -0.7515 -0.6566
vn 0.0738 -0.6585 -0.7490
vn 0.0805 -0.5707 -0.8172
vn 0.0854 -0.4903 -0.8674
vn 0.0891 -0.4173 -0.9044
vn 0.0906 -0.3828 -0.9194
vn -0.0000 -0.9987 -0.0506
vn -0.0000 -0.9801 -0.1987
vn -0.0000 -0.9244 -0.3814
vn -0.0000 -0.8437 -0.5369
vn -0.0000 -0.7515 -0.6598
vn -0.0000 -0.6585 -0.7526
vn -0.0000 -0.5707 -0.8212
vn -0.0000 -0.4903 -0.8716
vn -0.0000 -0.4173 -0.9088
vn -0.0000 -0.3828 -0.9238
vn -0.0050 -0.9987 -0.0504
vn -0.0195 -0.9801 -0.1977
vn -0.0374 -0.9244 -0.3796
vn -0.0526 -0.8437 -0.5343
vn -0.0647 -0.7515 -0.6566
vn -0.0738 -0.6585 -0.7490
vn -0.0805 -0.5707 -0.8172
vn -0.0854 -0.4903 -0.8674
vn -0.0891 -0.4173 -0.9044
vn -0.0906 -0.3828 -0.9194
vn -0.0099 -0.9987 -0.0497
vn -0.0388 -0.9801 -0.1948
vn -0.0744 -0.9244 -0.3741
vn -0.1047 -0.8437 -0.5266
vn -0.1287 -0.7515 -0.6471
vn -0.1468 -0.6585 -0.7381
vn -0.1602 -0.5707 -0.8054
vn -0.1700 -0.4903 -0.8548
vn -0.1773 -0.4173 -0.8913
vn -0.1802 -0.3828 -0.9061
vn -0.0147 -0.9987 -0.0485
vn -0.0577 -0.9801 -0.1901
vn -0.1107 -0.9244 -0.3650
vn -0.1559 -0.8437 -0.5138
vn -0.1915 -0.7515 -0.6314
vn -0.2185 -0.6585 -0.7202
vn -0.2384 -0.5707 -0.7858
vn -0.2530 -0.4903 -0.8340
vn -0.2638 -0.4173 -0.8696
vn -0.2682 -0.3828 -0.8841
vn -0.0194 -0.9987 -0.0468
vn -0.0760 -0.9801 -0.1835
vn -0.1460 -0.9244 -0.3524
vn -0.2055 -0.8437 -0.4960
vn -0.2525 -0.7515 -0.6096
vn -0.2880 -0.6585 -0.6953
vn -0.3142 -0.5707 -0.7587
vn -0.3335 -0.4903 -0.8052
vn -0.3478 -0.4173 -0.8396
vn -0.3535 -0.3828 -0.8535
vn -0.0239 -0.9987 -0.0447
vn -0.0936 -0.9801 -0.1752
vn -0.1798 -0.9244 -0.3364
vn -0.2531 -0.8437 -0.4735
vn -0.3110 -0.7515 -0.5819
vn -0.3548 -0.6585 -0.6637
vn -0.3871 -0.5707 -0.7242
vn -0.4108 -0.4903 -0.7686
vn -0.4284 -0.4173 -0.8015
vn -0.4355 -0.3828 -0.8148
vn -0.0281 -0.9987 -0.0421
vn -0.1104 -0.9801 -0.1652
vn -0.2119 -0.9244 -0.3171
vn -0.2983 -0.8437 -0.4464
vn -0.3666 -0.7515 -0.5486
vn -0.4181 -0.6585 -0.6258
vn -0.4562 -0.5707 -0.6828
vn -0.4842 -0.4903 -0.7247
vn -0.5049 -0.4173 -0.7556
vn -0.5133 -0.3828 -0.7681
vn -0.0321 -0.9987 -0.0391
vn -0.1260 -0.9801 -0.1536
vn -0.2420 -0.9244 -0.2949
vn -0.3406 -0.8437 -0.4150
vn -0.4186 -0.7515 -0.5100
vn -0.4774 -0.6585 -0.5818
vn -0.5209 -0.5707 -0.6348
vn -0.5529 -0.4903 -0.6737
vn -0.5765 -0.4173 -0.7025
vn -0.5861 -0.3828 -0.7141
vn -0.0358 -0.9987 -0.0358
vn -0.1405 -0.9801 -0.1405
vn -0.2697 -0.9244 -0.2697
vn -0.3796 -0.8437 -0.3796
vn -0.4665 -0.7515 -0.4665
vn -0.5322 -0.6585 -0.5322
vn -0.5807 -0.5707 -0.5806
vn -0.6163 -0.4903 -0.6163
vn -0.6426 -0.4173 -0.6426
vn -0.6533 -0.3828 -0.6533
vn -0.0391 -0.9987 -0.0321
vn -0.1536 -0.9801 -0.1260
vn -0.2948 -0.9244 -0.2420
vn -0.4150 -0.8437 -0.3406
vn -0.5100 -0.7515 -0.4186
vn -0.5818 -0.6585 -0.4774
vn -0.6348 -0.5707 -0.5209
vn -0.6737 -0.4903 -0.5529
vn -0.7025 -0.4173 -0.5765
vn -0.7141 -0.3828 -0.5861
vn -0.0421 -0.9987 -0.0281
vn -0.1652 -0.9801 -0.1104
vn -0.3171 -0.9244 -0.2119
vn -0.4464 -0.8437 -0.2983
vn -0.5486 -0.7515 -0.3666
vn -0.6258 -0.6585 -0.4181
vn -0.6828 -0.5707 -0.4562
vn -0.7247 -0.4903 -0.4842
vn -0.7556 -0.4173 -0.5049
vn -0.7681 -0.3828 -0.5133
vn -0.0447 -0.9987 -0.0239
vn -0.1752 -0.9801 -0.0936
vn -0.3364 -0.9244 -0.1798
vn -0.4735 -0.8437 -0.2531
vn -0.5819 -0.7515 -0.3110
vn -0.6637 -0.6585 -0.3548
vn -0.7242 -0.5707 -0.3871
vn -0.7686 -0.4903 -0.4108
vn -0.8015 -0.4173 -0.4284
vn -0.8148 -0.3828 -0.4355
vn -0.0468 -0.9987 -0.0194
vn -0.1835 -0.9801 -0.0760
vn -0.3524 -0.9244 -0.1460
vn -0.4960 -0.8437 -0.2055
vn -0.6096 -0.7515 -0.2525
vn -0.6953 -0.6585 -0.2880
vn -0.7587 -0.5707 -0.3142
vn -0.8052 -0.4903 -0.3335
vn -0.8396 -0.4173 -0.3478
vn -0.8535 -0.3828 -0.3535
vn -0.0485 -0.9987 -0.0147
vn -0.1901 -0.9801 -0.0577
vn -0.3650 -0.9244 -0.1107
vn -0.5138 -0.8437 -0.1559
vn -0.6314 -0.7515 -0.1915
vn -0.7202 -0.6585 -0.2185
vn -0.7858 -0.5707 -0.2384
vn -0.8340 -0.4903 -0.2530
vn -0.8696 -0.4173 -0.2638
vn -0.8841 -0.3828 -0.2682
vn -0.0497 -0.9987 -0.0099
vn -0.1948 -0.9801 -0.0388
vn -0.3741 -0.9244 -0.0744
vn -0.5266 -0.8437 -0.1047
vn -0.6471 -0.7515 -0.1287
vn -0.7381 -0.6585 -0.1468
vn -0.8054 -0.5707 -0.1602
vn -0.8548 -0.4903 -0.1700
vn -0.8913 -0.4173 -0.1773
vn -0.9061 -0.3828 -0.1802
vn -0.0504 -0.9987 -0.0050
vn -0.1977 -0.9801 -0.0195
vn -0.3796 -0.9244 -0.0374
vn -0.5343 -0.8437 -0.0526
vn -0.6566 -0.7515 -0.0647
vn -0.7490 -0.6585 -0.0738
vn -0.8172 -0.5707 -0.0805
vn -0.8674 -0.4903 -0.0854
vn -0.9044 -0.4173 -0.0891
vn -0.9194 -0.3828 -0.0906
vn -0.0000 1.0000 -0.0000
vt 0.000000 0.000000
vt 0.015625 0.893654
vt 0.031250 0.893654
vt 0.046875 0.893654
vt 0.062500 0.893654
vt 0.078125 0.893654
vt 0.093750 0.893654
vt 0.109375 0.893654
vt 0.125000 0.893654
vt 0.140625 0.893654
vt 0.156250 0.893654
vt 0.171875 0.893654
vt 0.187500 0.893654
vt 0.203125 0.893654
vt 0.218750 0.893654
vt 0.234375 0.893654
vt 0.250000 0.893654
vt 0.265625 0.893654
vt 0.281250 0.893654
vt 0.296875 0.893654
vt 0.312500 0.893654
vt 0.328125 0.893654
vt 0.343750 0.893654
vt 0.359375 0.893654
vt 0.375000 0.893654
vt 0.390625 0.893654
vt 0.406250 0.893654
vt 0.421875 0.893654
vt 0.437500 0.893654
vt 0.453125 0.893654
vt 0.468750 0.893654
vt 0.484375 0.893654
vt 0.500000 0.893654
vt 0.515625 0.893654
vt 0.531250 0.893654
vt 0.546875 0.893654
vt 0.562500 0.893654
vt 0.578125 0.893654
vt 0.593750 0.893654
vt 0.609375 0.893654
vt 0.625000 0.893654
vt 0.640625 0.893654
vt 0.656250 0.893654
vt 0.671875 0.893654
vt 0.687500 0.893654
vt 0.703125 0.893654
vt 0.718750 0.893654
vt 0.734375 0.893654
vt 0.750000 0.893654
vt 0.765625 0.893654
vt 0.781250 0.893654
vt 0.796875 0.893654
vt 0.812500 0.893654
vt 0.828125 0.893654
vt 0.843750 0.893654
vt 0.859375 0.893654
vt 0.875000 0.893654
vt 0.890625 0.893654
vt 0.906250 0.893654
vt 0.921875 0.893654
vt 0.937500 0.893654
vt 0.953125 0.893654
vt 0.968750 0.893654
vt 0.984375 0.893654
vt 1.000000 0.893654
vt 0.000000 0.893654
s 1
usemtl Material.001
f 1/1/1 161/1/161 11/1/11
f 11/1/11 161/1/161 21/1/21
f 21/1/21 161/1/161 31/1/31
f 31/1/31 161/1/161 41/1/41
f 41/1/41 161/1/161 51/1/51
f 51/1/51 161/1/161 61/1/61
f 61/1/61 161/1/161 71/1/71
f 71/1/71 161/1/161 81/1/81
f 81/1/81 161/1/161 91/1/91
f 91/1/91 161/1/161 101/1/101
f 101/1/101 161/1/161 111/1/111
f 111/1/111 161/1/161 121/1/121
f 121/1/121 161/1/161 131/1/131
f 131/1/131 161/1/161 141/1/141
f 141/1/141 161/1/161 151/1/151
f 161/1/161 162/1/162 151/1/151
f 161/1/161 172/1/172 162/1/162
f 172/1/172 161/1/161 182/1/182
f 182/1/182 161/1/161 192/1/192
f 192/1/192 161/1/161 202/1/202
f 202/1/202 161/1/161 212/1/212
f 212/1/212 161/1/161 222/1/222
f 222/1/222 161/1/161 232/1/232
f 232/1/232 161/1/161 242/1/242
f 242/1/242 161/1/161 252/1/252
f 252/1/252 161/1/161 262/1/262
f 262/1/262 161/1/161 272/1/272
f 272/1/272 161/1/161 282/1/282
f 282/1/282 161/1/161 292/1/292
f 292/1/292 161/1/161 302/1/302
f 302/1/302 161/1/161 312/1/312
f 312/1/312 161/1/161 322/1/322
f 322/1/322 161/1/161 332/1/332
f 332/1/332 161/1/161 342/1/342
f 342/1/342 161/1/161 352/1/352
f 352/1/352 161/1/161 362/1/362
f 362/1/362 161/1/161 372/1/372
f 372/1/372 161/1/161 382/1/382
f 382/1/382 161/1/161 392/1/392
f 392/1/392 161/1/161 402/1/402
f 402/1/402 161/1/161 412/1/412
f 412/1/412 161/1/161 422/1/422
f 422/1/422 161/1/161 432/1/432
f 432/1/432 161/1/161 442/1/442
f 442/1/442 161/1/161 452/1/452
f 452/1/452 161/1/161 462/1/462
f 462/1/462 161/1/161 472/1/472
f 472/1/472 161/1/161 482/1/482
f 482/1/482 161/1/161 492/1/492
f 492/1/492 161/1/161 502/1/502
f 502/1/502 161/1/161 512/1/512
f 512/1/512 161/1/161 522/1/522
f 522/1/522 161/1/161 532/1/532
f 532/1/532 161/1/161 542/1/542
f 542/1/542 161/1/161 552/1/552
f 552/1/552 161/1/161 562/1/562
f 562/1/562 161/1/161 572/1/572
f 572/1/572 161/1/161 582/1/582
f 582/1/582 161/1/161 592/1/592
f 592/1/592 161/1/161 602/1/602
f 602/1/602 161/1/161 612/1/612
f 612/1/612 161/1/161 622/1/622
f 622/1/622 161/1/161 632/1/632
f 632/1/632 161/1/161 1/1/1
f 1/1/1 11/1/11 12/1/12 2/1/2
f 11/1/11 21/1/21 22/1/22 12/1/12
f 21/1/21 31/1/31 32/1/32 22/1/22
f 31/1/31 41/1/41 42/1/42 32/1/32
f 41/1/41 51/1/51 52/1/52 42/1/42
f 51/1/51 61/1/61 62/1/62 52/1/52
f 61/1/61 71/1/71 72/1/72 62/1/62
f 71/1/71 81/1/81 82/1/82 72/1/72
f 81/1/81 91/1/91 92/1/92 82/1/82
f 91/1/91 101/1/101 102/1/102 92/1/92
f 101/1/101 111/1/111 112/1/112 102/1/102
f 111/1/111 121/1/121 122/1/122 112/1/112
f 121/1/121 131/1/131 132/1/132 122/1/122
f 131/1/131 141/1/141 142/1/142 132/1/132
f 141/1/141 151/1/151 152/1/152 142/1/142
f 151/1/151 162/1/162 163/1/163 152/1/152
f 162/1/162 172/1/172 173/1/173 163/1/163
f 172/1/172 182/1/182 183/1/183 173/1/173
f 182/1/182 192/1/192 193/1/193 183/1/183
f 192/1/192 202/1/202 203/1/203 193/1/193
f 202/1/202 212/1/212 213/1/213 203/1/203
f 212/1/212 222/1/222 223/1/223 213/1/213
f 222/1/222 232/1/232 233/1/233 223/1/223
f 232/1/232 242/1/242 243/1/243 233/1/233
f 242/1/242 252/1/252 253/1/253 243/1/243
f 252/1/252 262/1/262 263/1/263 253/1/253
f 262/1/262 272/1/272 273/1/273 263/1/263
f 272/1/272 282/1/282 283/1/283 273/1/273
f 282/1/282 292/1/292 293/1/293 283/1/283
f 292/1/292 302/1/302 303/1/303 293/1/293
f 302/1/302 312/1/312 313/1/313 303/1/303
f 312/1/312 322/1/322 323/1/323 313/1/313
f 322/1/322 332/1/332 333/1/333 323/1/323
f 332/1/332 342/1/342 343/1/343 333/1/333
f 342/1/342 352/1/352 353/1/353 343/1/343
f 352/1/352 362/1/362 363/1/363 353/1/353
f 362/1/362 372/1/372 373/1/373 363/1/363
f 372/1/372 382/1/382 383/1/383 373/1/373
f 382/1/382 392/1/392 393/1/393 383/1/383
f 392/1/392 402/1/402 403/1/403 393/1/393
f 402/1/402 412/1/412 413/1/413 403/1/403
f 412/1/412 422/1/422 423/1/423 413/1/413
f 422/1/422 432/1/432 433/1/433 423/1/423
f 432/1/432 442/1/442 443/1/443 433/1/433
f 442/1/442 452/1/452 453/1/453 443/1/443
f 452/1/452 462/1/462 463/1/463 453/1/453
f 462/1/462 472/1/472 473/1/473 463/1/463
f 472/1/472 482/1/482 483/1/483 473/1/473
f 482/1/482 492/1/492 493/1/493 483/1/483
f 492/1/492 502/1/502 503/1/503 493/1/493
f 502/1/502 512/1/512 513/1/513 503/1/503
f 512/1/512 522/1/522 523/1/523 513/1/513
f 522/1/522 532/1/532 533/1/533 523/1/523
f 532/1/532 542/1/542 543/1/543 533/1/533
f 542/1/542 552/1/552 553/1/553 543/1/543
f 552/1/552 562/1/562 563/1/563 553/1/553
f 562/1/562 572/1/572 573/1/573 563/1/563
f 572/1/572 582/1/582 583/1/583 573/1/573
f 582/1/582 592/1/592 593/1/593 583/1/583
f 592/1/592 602/1/602 603/1/603 593/1/593
f 602/1/602 612/1/612 613/1/613 603/1/603
f 612/1/612 622/1/622 623/1/623 613/1/613
f 622/1/622 632/1/632 633/1/633 623/1/623
f 632/1/632 1/1/1 2/1/2 633/1/633
f 2/1/2 12/1/12 13/1/13 3/1/3
f 12/1/12 22/1/22 23/1/23 13/1/13
f 22/1/22 32/1/32 33/1/33 23/1/23
f 32/1/32 42/1/42 43/1/43 33/1/33
f 42/1/42 52/1/52 53/1/53 43/1/43
f 52/1/52 62/1/62 63/1/63 53/1/53
f 62/1/62 72/1/72 73/1/73 63/1/63
f 72/1/72 82/1/82 83/1/83 73/1/73
f 82/1/82 92/1/92 93/1/93 83/1/83
f 92/1/92 102/1/102 103/1/103 93/1/93
f 102/1/102 112/1/112 113/1/113 103/1/103
f 112/1/112 122/1/122 123/1/123 113/1/113
f 122/1/122 132/1/132 133/1/133 123/1/123
f 132/1/132 142/1/142 143/1/143 133/1/133
f 142/1/142 152/1/152 153/1/153 143/1/143
f 152/1/152 163/1/163 164/1/164 153/1/153
f 163/1/163 173/1/173 174/1/174 164/1/164
f 173/1/173 183/1/183 184/1/184 174/1/174
f 183/1/183 193/1/193 194/1/194 184/1/184
f 193/1/193 203/1/203 204/1/204 194/1/194
f 203/1/203 213/1/213 214/1/214 204/1/204
f 213/1/213 223/1/223 224/1/224 214/1/214
f 223/1/223 233/1/233 234/1/234 224/1/224
f 233/1/233 243/1/243 244/1/244 234/1/234
f 243/1/243 253/1/253 254/1/254 244/1/244
f 253/1/253 263/1/263 264/1/264 254/1/254
f 263/1/263 273/1/273 274/1/274 264/1/264
f 273/1/273 283/1/283 284/1/284 274/1/274
f 283/1/283 293/1/293 294/1/294 284/1/284
f 293/1/293 303/1/303 304/1/304 294/1/294
f 303/1/303 313/1/313 314/1/314 304/1/304
f 313/1/313 323/1/323 324/1/324 314/1/314
f 323/1/323 333/1/333 334/1/334 324/1/324
f 333/1/333 343/1/343 344/1/344 334/1/334
f 343/1/343 353/1/353 354/1/354 344/1/344
f 353/1/353 363/1/363 364/1/364 354/1/354
f 363/1/363 373/1/373 374/1/374 364/1/364
f 373/1/373 383/1/383 384/1/384 374/1/374
f 383/1/383 393/1/393 394/1/394 384/1/384
f 393/1/393 403/1/403 404/1/404 394/1/394
f 403/1/403 413/1/413 414/1/414 404/1/404
f 413/1/413 423/1/423 424/1/424 414/1/414
f 423/1/423 433/1/433 434/1/434 424/1/424
f 433/1/433 443/1/443 444/1/444 434/1/434
f 443/1/443 453/1/453 454/1/454 444/1/444
f 453/1/453 463/1/463 464/1/464 454/1/454
f 463/1/463 473/1/473 474/1/474 464/1/464
f 473/1/473 483/1/483 484/1/484 474/1/474
f 483/1/483 493/1/493 494/1/494 484/1/484
f 493/1/493 503/1/503 504/1/504 494/1/494
f 503/1/503 513/1/513 514/1/514 504/1/504
f 513/1/513 523/1/523 524/1/524 514/1/514
f 523/1/523 533/1/533 534/1/534 524/1/524
f 533/1/533 543/1/543 544/1/544 534/1/534
f 543/1/543 553/1/553 554/1/554 544/1/544
f 553/1/553 563/1/563 564/1/564 554/1/554
f 563/1/563 573/1/573 574/1/574 564/1/564
f 573/1/573 583/1/583 584/1/584 574/1/574
f 583/1/583 593/1/593 594/1/594 584/1/584
f 593/1/593 603/1/603 604/1/604 594/1/594
f 603/1/603 613/1/613 614/1/614 604/1/604
f 613/1/613 623/1/623 624/1/624 614/1/614
f 623/1/623 633/1/633 634/1/634 624/1/624
f 633/1/633 2/1/2 3/1/3 634/1/634
f 3/1/3 13/1/13 14/1/14 4/1/4
f 13/1/13 23/1/23 24/1/24 14/1/14
f 23/1/23 33/1/33 34/1/34 24/1/24
f 33/1/33 43/1/43 44/1/44 34/1/34
f 43/1/43 53/1/53 54/1/54 44/1/44
f 53/1/53 63/1/63 64/1/64 54/1/54
f 63/1/63 73/1/73 74/1/74 64/1/64
f 73/1/73 83/1/83 84/1/84 74/1/74
f 83/1/83 93/1/93 94/1/94 84/1/84
f 93/1/93 103/1/103 104/1/104 94/1/94
f 103/1/103 113/1/113 114/1/114 104/1/104
f 113/1/113 123/1/123 124/1/124 114/1/114
f 123/1/123 133/1/133 134/1/134 124/1/124
f 133/1/133 143/1/143 144/1/144 134/1/134
f 143/1/143 153/1/153 154/1/154 144/1/144
f 153/1/153 164/1/164 165/1/165 154/1/154
f 164/1/164 174/1/174 175/1/175 165/1/165
f 174/1/174 184/1/184 185/1/185 175/1/175
f 184/1/184 194/1/194 195/1/195 185/1/185
f 194/1/194 204/1/204 205/1/205 195/1/195
f 204/1/204 214/1/214 215/1/215 205/1/205
f 214/1/214 224/1/224 225/1/225 215/1/215
f 224/1/224 234/1/234 235/1/235 225/1/225
f 234/1/234 244/1/244 245/1/245 235/1/235
f 244/1/244 254/1/254 255/1/255 245/1/245
f 254/1/254 264/1/264 265/1/265 255/1/255
f 264/1/264 274/1/274 275/1/275 265/1/265
f 274/1/274 284/1/284 285/1/285 275/1/275
f 284/1/284 294/1/294 295/1/295 285/1/285
f 294/1/294 304/1/304 305/1/305 295/1/295
f 304/1/304 314/1/314 315/1/315 305/1/305
f 314/1/314 324/1/324 325/1/325 315/1/315
f 324/1/324 334/1/334 335/1/335 325/1/325
f 334/1/334 344/1/344 345/1/345 335/1/335
f 344/1/344 354/1/354 355/1/355 345/1/345
f 354/1/354 364/1/364 365/1/365 355/1/355
f 364/1/364 374/1/374 375/1/375 365/1/365
f 374/1/374 384/1/384 385/1/385 375/1/375
f 384/1/384 394/1/394 395/1/395 385/1/385
f 394/1/394 404/1/404 405/1/405 395/1/395
f 404/1/404 414/1/414 415/1/415 405/1/405
f 414/1/414 424/1/424 425/1/425 415/1/415
f 424/1/424 434/1/434 435/1/435 425/1/425
f 434/1/434 444/1/444 445/1/445 435/1/435
f 444/1/444 454/1/454 455/1/455 445/1/445
f 454/1/454 464/1/464 465/1/465 455/1/455
f 464/1/464 474/1/474 475/1/475 465/1/465
f 474/1/474 484/1/484 485/1/485 475/1/475
f 484/1/484 494/1/494 495/1/495 485/1/485
f 494/1/494 504/1/504 505/1/505 495/1/495
f 504/1/504 514/1/514 515/1/515 505/1/505
f 514/1/514 524/1/524 525/1/525 515/1/515
f 524/1/524 534/1/534 535/1/535 525/1/525
f 534/1/534 544/1/544 545/1/545 535/1/535
f 544/1/544 554/1/554 555/1/555 545/1/545
f 554/1/554 564/1/564 565/1/565 555/1/555
f 564/1/564 574/1/574 575/1/575 565/1/565
f 574/1/574 584/1/584 585/1/585 575/1/575
f 584/1/584 594/1/594 595/1/595 585/1/585
f 594/1/594 604/1/604 605/1/605 595/1/595
f 604/1/604 614/1/614 615/1/615 605/1/605
f 614/1/614 624/1/624 625/1/625 615/1/615
f 624/1/624 634/1/634 635/1/635 625/1/625
f 634/1/634 3/1/3 4/1/4 635/1/635
f 4/1/4 14/1/14 15/1/15 5/1/5
f 14/1/14 24/1/24 25/1/25 15/1/15
f 24/1/24 34/1/34 35/1/35 25/1/25
f 34/1/34 44/1/44 45/1/45 35/1/35
f 44/1/44 54/1/54 55/1/55 45/1/45
f 54/1/54 64/1/64 65/1/65 55/1/55
f 64/1/64 74/1/74 75/1/75 65/1/65
f 74/1/74 84/1/84 85/1/85 75/1/75
f 84/1/84 94/1/94 95/1/95 85/1/85
f 94/1/94 104/1/104 105/1/105 95/1/95
f 104/1/104 114/1/114 115/1/115 105/1/105
f 114/1/114 124/1/124 125/1/125 115/1/115
f 124/1/124 134/1/134 135/1/135 125/1/125
f 134/1/134 144/1/144 145/1/145 135/1/135
f 144/1/144 154/1/154 155/1/155 145/1/145
f 154/1/154 165/1/165 166/1/166 155/1/155
f 165/1/165 175/1/175 176/1/176 166/1/166
f 175/1/175 185/1/185 186/1/186 176/1/176
f 185/1/185 195/1/195 196/1/196 186/1/186
f 195/1/195 205/1/205 206/1/206 196/1/196
f 205/1/205 215/1/215 216/1/216 206/1/206
f 215/1/215 225/1/225 226/1/226 216/1/216
f 225/1/225 235/1/235 236/1/236 226/1/226
f 235/1/235 245/1/245 246/1/246 236/1/236
f 245/1/245 255/1/255 256/1/256 246/1/246
f 255/1/255 265/1/265 266/1/266 256/1/256
f 265/1/265 275/1/275 276/1/276 266/1/266
f 275/1/275 285/1/285 286/1/286 276/1/276
f 285/1/285 295/1/295 296/1/296 286/1/286
f 295/1/295 305/1/305 306/1/306 296/1/296
f 305/1/305 315/1/315 316/1/316 306/1/306
f 315/1/315 325/1/325 326/1/326 316/1/316
f 325/1/325 335/1/335 336/1/336 326/1/326
f 335/1/335 345/1/345 346/1/346 336/1/336
f 345/1/345 355/1/355 356/1/356 346/1/346
f 355/1/355 365/1/365 366/1/366 356/1/356
f 365/1/365 375/1/375 376/1/376 366/1/366
f 375/1/375 385/1/385 386/1/386 376/1/376
f 385/1/385 395/1/395 396/1/396 386/1/386
f 395/1/395 405/1/405 406/1/406 396/1/396
f 405/1/405 415/1/415 416/1/416 406/1/406
f 415/1/415 425/1/425 426/1/426 416/1/416
f 425/1/425 435/1/435 436/1/436 426/1/426
f 435/1/435 445/1/445 446/1/446 436/1/436
f 445/1/445 455/1/455 456/1/456 446/1/446
f 455/1/455 465/1/465 466/1/466 456/1/456
f 465/1/465 475/1/475 476/1/476 466/1/466
f 475/1/475 485/1/485 486/1/486 476/1/476
f 485/1/485 495/1/495 496/1/496 486/1/486
f 495/1/495 505/1/505 506/1/506 496/1/496
f 505/1/505 515/1/515 516/1/516 506/1/506
f 515/1/515 525/1/525 526/1/526 516/1/516
f 525/1/525 535/1/535 536/1/536 526/1/526
f 535/1/535 545/1/545 546/1/546 536/1/536
f 545/1/545 555/1/555 556/1/556 546/1/546
f 555/1/555 565/1/565 566/1/566 556/1/556
f 565/1/565 575/1/575 576/1/576 566/1/566
f 575/1/575 585/1/585 586/1/586 576/1/576
f 585/1/585 595/1/595 596/1/596 586/1/586
f 595/1/595 605/1/605 606/1/606 596/1/596
f 605/1/605 615/1/615 616/1/616 606/1/606
f 615/1/615 625/1/625 626/1/626 616/1/616
f 625/1/625 635/1/635 636/1/636 626/1/626
f 635/1/635 4/1/4 5/1/5 636/1/636
f 5/1/5 15/1/15 16/1/16 6/1/6
f 15/1/15 25/1/25 26/1/26 16/1/16
f 25/1/25 35/1/35 36/1/36 26/1/26
f 35/1/35 45/1/45 46/1/46 36/1/36
f 45/1/45 55/1/55 56/1/56 46/1/46
f 55/1/55 65/1/65 66/1/66 56/1/56
f 65/1/65 75/1/75 76/1/76 66/1/66
f 75/1/75 85/1/85 86/1/86 76/1/76
f 85/1/85 95/1/95 96/1/96 86/1/86
f 95/1/95 105/1/105 106/1/106 96/1/96
f 105/1/105 115/1/115 116/1/116 106/1/106
f 115/1/115 125/1/125 126/1/126 116/1/116
f 125/1/125 135/1/135 136/1/136 126/1/126
f 135/1/135 145/1/145 146/1/146 136/1/136
f 145/1/145 155/1/155 156/1/156 146/1/146
f 155/1/155 166/1/166 167/1/167 156/1/156
f 166/1/166 176/1/176 177/1/177 167/1/167
f 176/1/176 186/1/186 187/1/187 177/1/177
f 186/1/186 196/1/196 197/1/197 187/1/187
f 196/1/196 206/1/206 207/1/207 197/1/197
f 206/1/206 216/1/216 217/1/217 207/1/207
f 216/1/216 226/1/226 227/1/227 217/1/217
f 226/1/226 236/1/236 237/1/237 227/1/227
f 236/1/236 246/1/246 247/1/247 237/1/237
f 246/1/246 256/1/256 257/1/257 247/1/247
f 256/1/256 266/1/266 267/1/267 257/1/257
f 266/1/266 276/1/276 277/1/277 267/1/267
f 276/1/276 286/1/286 287/1/287 277/1/277
f 286/1/286 296/1/296 297/1/297 287/1/287
f 296/1/296 306/1/306 307/1/307 297/1/297
f 306/1/306 316/1/316 317/1/317 307/1/307
f 316/1/316 326/1/326 327/1/327 317/1/317
f 326/1/326 336/1/336 337/1/337 327/1/327
f 336/1/336 346/1/346 347/1/347 337/1/337
f 346/1/346 356/1/356 357/1/357 347/1/347
f 356/1/356 366/1/366 367/1/367 357/1/357
f 366/1/366 376/1/376 377/1/377 367/1/367
f 376/1/376 386/1/386 387/1/387 377/1/377
f 386/1/386 396/1/396 397/1/397 387/1/387
f 396/1/396 406/1/406 407/1/407 397/1/397
f 406/1/406 416/1/416 417/1/417 407/1/407
f 416/1/416 426/1/426 427/1/427 417/1/417
f 426/1/426 436/1/436 437/1/437 427/1/427
f 436/1/436 446/1/446 447/1/447 437/1/437
f 446/1/446 456/1/456 457/1/457 447/1/447
f 456/1/456 466/1/466 467/1/467 457/1/457
f 466/1/466 476/1/476 477/1/477 467/1/467
f 476/1/476 486/1/486 487/1/487 477/1/477
f 486/1/486 496/1/496 497/1/497 487/1/487
f 496/1/496 506/1/506 507/1/507 497/1/497
f 506/1/506 516/1/516 517/1/517 507/1/507
f 516/1/516 526/1/526 527/1/527 517/1/517
f 526/1/526 536/1/536 537/1/537 527/1/527
f 536/1/536 546/1/546 547/1/547 537/1/537
f 546/1/546 556/1/556 557/1/557 547/1/547
f 556/1/556 566/1/566 567/1/567 557/1/557
f 566/1/566 576/1/576 577/1/577 567/1/567
f 576/1/576 586/1/586 587/1/587 577/1/577
f 586/1/586 596/1/596 597/1/597 587/1/587
f 596/1/596 606/1/606 607/1/607 597/1/597
f 606/1/606 616/1/616 617/1/617 607/1/607
f 616/1/616 626/1/626 627/1/627 617/1/617
f 626/1/626 636/1/636 637/1/637 627/1/627
f 636/1/636 5/1/5 6/1/6 637/1/637
f 6/1/6 16/1/16 17/1/17 7/1/7
f 16/1/16 26/1/26 27/1/27 17/1/17
f 26/1/26 36/1/36 37/1/37 27/1/27
f 36/1/36 46/1/46 47/1/47 37/1/37
f 46/1/46 56/1/56 57/1/57 47/1/47
f 56/1/56 66/1/66 67/1/67 57/1/57
f 66/1/66 76/1/76 77/1/77 67/1/67
f 76/1/76 86/1/86 87/1/87 77/1/77
f 86/1/86 96/1/96 97/1/97 87/1/87
f 96/1/96 106/1/106 107/1/107 97/1/97
f 106/1/106 116/1/116 117/1/117 107/1/107
f 116/1/116 126/1/126 127/1/127 117/1/117
f 126/1/126 136/1/136 137/1/137 127/1/127
f 136/1/136 146/1/146 147/1/147 137/1/137
f 146/1/146 156/1/156 157/1/157 147/1/147
f 156/1/156 167/1/167 168/1/168 157/1/157
f 167/1/167 177/1/177 178/1/178 168/1/168
f 177/1/177 187/1/187 188/1/188 178/1/178
f 187/1/187 197/1/197 198/1/198 188/1/188
f 197/1/197 207/1/207 208/1/208 198/1/198
f 207/1/207 217/1/217 218/1/218 208/1/208
f 217/1/217 227/1/227 228/1/228 218/1/218
f 227/1/227 237/1/237 238/1/238 228/1/228
f 237/1/237 247/1/247 248/1/248 238/1/238
f 247/1/247 257/1/257 258/1/258 248/1/248
f 257/1/257 267/1/267 268/1/268 258/1/258
f 267/1/267 277/1/277 278/1/278 268/1/268
f 277/1/277 287/1/287 288/1/288 278/1/278
f 287/1/287 297/1/297 298/1/298 288/1/288
f 297/1/297 307/1/307 308/1/308 298/1/298
f 307/1/307 317/1/317 318/1/318 308/1/308
f 317/1/317 327/1/327 328/1/328 318/1/318
f 327/1/327 337/1/337 338/1/338 328/1/328
f 337/1/337 347/1/347 348/1/348 338/1/338
f 347/1/347 357/1/357 358/1/358 348/1/348
f 357/1/357 367/1/367 368/1/368 358/1/358
f 367/1/367 377/1/377 378/1/378 368/1/368
f 377/1/377 387/1/387 388/1/388 378/1/378
f 387/1/387 397/1/397 398/1/398 388/1/388
f 397/1/397 407/1/407 408/1/408 398/1/398
f 407/1/407 417/1/417 418/1/418 408/1/408
f 417/1/417 427/1/427 428/1/428 418/1/418
f 427/1/427 437/1/437 438/1/438 428/1/428
f 437/1/437 447/1/447 448/1/448 438/1/438
f 447/1/447 457/1/457 458/1/458 448/1/448
f 457/1/457 467/1/467 468/1/468 458/1/458
f 467/1/467 477/1/477 478/1/478 468/1/468
f 477/1/477 487/1/487 488/1/488 478/1/478
f 487/1/487 497/1/497 498/1/498 488/1/488
f 497/1/497 507/1/507 508/1/508 498/1/498
f 507/1/507 517/1/517 518/1/518 508/1/508
f 517/1/517 527/1/527 528/1/528 518/1/518
f 527/1/527 537/1/537 538/1/538 528/1/528
f 537/1/537 547/1/547 548/1/548 538/1/538
f 547/1/547 557/1/557 558/1/558 548/1/548
f 557/1/557 567/1/567 568/1/568 558/1/558
f 567/1/567 577/1/577 578/1/578 568/1/568
f 577/1/577 587/1/587 588/1/588 578/1/578
f 587/1/587 597/1/597 598/1/598 588/1/588
f 597/1/597 607/1/607 608/1/608 598/1/598
f 607/1/607 617/1/617 618/1/618 608/1/608
f 617/1/617 627/1/627 628/1/628 618/1/618
f 627/1/627 637/1/637 638/1/638 628/1/628
f 637/1/637 6/1/6 7/1/7 638/1/638
f 7/1/7 17/1/17 18/1/18 8/1/8
f 17/1/17 27/1/27 28/1/28 18/1/18
f 27/1/27 37/1/37 38/1/38 28/1/28
f 37/1/37 47/1/47 48/1/48 38/1/38
f 47/1/47 57/1/57 58/1/58 48/1/48
f 57/1/57 67/1/67 68/1/68 58/1/58
f 67/1/67 77/1/77 78/1/78 68/1/68
f 77/1/77 87/1/87 88/1/88 78/1/78
f 87/1/87 97/1/97 98/1/98 88/1/88
f 97/1/97 107/1/107 108/1/108 98/1/98
f 107/1/107 117/1/117 118/1/118 108/1/108
f 117/1/117 127/1/127 128/1/128 118/1/118
f 127/1/127 137/1/137 138/1/138 128/1/128
f 137/1/137 147/1/147 148/1/148 138/1/138
f 147/1/147 157/1/157 158/1/158 148/1/148
f 157/1/157 168/1/168 169/1/169 158/1/158
f 168/1/168 178/1/178 179/1/179 169/1/169
f 178/1/178 188/1/188 189/1/189 179/1/179
f 188/1/188 198/1/198 199/1/199 189/1/189
f 198/1/198 208/1/208 209/1/209 199/1/199
f 208/1/208 218/1/218 219/1/219 209/1/209
f 218/1/218 228/1/228 229/1/229 219/1/219
f 228/1/228 238/1/238 239/1/239 229/1/229
f 238/1/238 248/1/248 249/1/249 239/1/239
f 248/1/248 258/1/258 259/1/259 249/1/249
f 258/1/258 268/1/268 269/1/269 259/1/259
f 268/1/268 278/1/278 279/1/279 269/1/269
f 278/1/278 288/1/288 289/1/289 279/1/279
f 288/1/288 298/1/298 299/1/299 289/1/289
f 298/1/298 308/1/308 309/1/309 299/1/299
f 308/1/308 318/1/318 319/1/319 309/1/309
f 318/1/318 328/1/328 329/1/329 319/1/319
f 328/1/328 338/1/338 339/1/339 329/1/329
f 338/1/338 348/1/348 349/1/349 339/1/339
f 348/1/348 358/1/358 359/1/359 349/1/349
f 358/1/358 368/1/368 369/1/369 359/1/359
f 368/1/368 378/1/378 379/1/379 369/1/369
f 378/1/378 388/1/388 389/1/389 379/1/379
f 388/1/388 398/1/398 399/1/399 389/1/389
f 398/1/398 408/1/408 409/1/409 399/1/399
f 408/1/408 418/1/418 419/1/419 409/1/409
f 418/1/418 428/1/428 429/1/429 419/1/419
f 428/1/428 438/1/438 439/1/439 429/1/429
f 438/1/438 448/1/448 449/1/449 439/1/439
f 448/1/448 458/1/458 459/1/459 449/1/449
f 458/1/458 468/1/468 469/1/469 459/1/459
f 468/1/468 478/1/478 479/1/479 469/1/469
f 478/1/478 488/1/488 489/1/489 479/1/479
f 488/1/488 498/1/498 499/1/499 489/1/489
f 498/1/498 508/1/508 509/1/509 499/1/499
f 508/1/508 518/1/518 519/1/519 509/1/509
f 518/1/518 528/1/528 529/1/529 519/1/519
f 528/1/528 538/1/538 539/1/539 529/1/529
f 538/1/538 548/1/548 549/1/549 539/1/539
f 548/1/548 558/1/558 559/1/559 549/1/549
f 558/1/558 568/1/568 569/1/569 559/1/559
f 568/1/568 578/1/578 579/1/579 569/1/569
f 578/1/578 588/1/588 589/1/589 579/1/579
f 588/1/588 598/1/598 599/1/599 589/1/589
f 598/1/598 608/1/608 609/1/609 599/1/599
f 608/1/608 618/1/618 619/1/619 609/1/609
f 618/1/618 628/1/628 629/1/629 619/1/619
f 628/1/628 638/1/638 639/1/639 629/1/629
f 638/1/638 7/1/7 8/1/8 639/1/639
f 8/1/8 18/1/18 19/1/19 9/1/9
f 18/1/18 28/1/28 29/1/29 19/1/19
f 28/1/28 38/1/38 39/1/39 29/1/29
f 38/1/38 48/1/48 49/1/49 39/1/39
f 48/1/48 58/1/58 59/1/59 49/1/49
f 58/1/58 68/1/68 69/1/69 59/1/59
f 68/1/68 78/1/78 79/1/79 69/1/69
f 78/1/78 88/1/88 89/1/89 79/1/79
f 88/1/88 98/1/98 99/1/99 89/1/89
f 98/1/98 108/1/108 109/1/109 99/1/99
f 108/1/108 118/1/118 119/1/119 109/1/109
f 118/1/118 128/1/128 129/1/129 119/1/119
f 128/1/128 138/1/138 139/1/139 129/1/129
f 138/1/138 148/1/148 149/1/149 139/1/139
f 148/1/148 158/1/158 159/1/159 149/1/149
f 158/1/158 169/1/169 170/1/170 159/1/159
f 169/1/169 179/1/179 180/1/180 170/1/170
f 179/1/179 189/1/189 190/1/190 180/1/180
f 189/1/189 199/1/199 200/1/200 190/1/190
f 199/1/199 209/1/209 210/1/210 200/1/200
f 209/1/209 219/1/219 220/1/220 210/1/210
f 219/1/219 229/1/229 230/1/230 220/1/220
f 229/1/229 239/1/239 240/1/240 230/1/230
f 239/1/239 249/1/249 250/1/250 240/1/240
f 249/1/249 259/1/259 260/1/260 250/1/250
f 259/1/259 269/1/269 270/1/270 260/1/260
f 269/1/269 279/1/279 280/1/280 270/1/270
f 279/1/279 289/1/289 290/1/290 280/1/280
f 289/1/289 299/1/299 300/1/300 290/1/290
f 299/1/299 309/1/309 310/1/310 300/1/300
f 309/1/309 319/1/319 320/1/320 310/1/310
f 319/1/319 329/1/329 330/1/330 320/1/320
f 329/1/329 339/1/339 340/1/340 330/1/330
f 339/1/339 349/1/349 350/1/350 340/1/340
f 349/1/349 359/1/359 360/1/360 350/1/350
f 359/1/359 369/1/369 370/1/370 360/1/360
f 369/1/369 379/1/379 380/1/380 370/1/370
f 379/1/379 389/1/389 390/1/390 380/1/380
f 389/1/389 399/1/399 400/1/400 390/1/390
f 399/1/399 409/1/409 410/1/410 400/1/400
f 409/1/409 419/1/419 420/1/420 410/1/410
f 419/1/419 429/1/429 430/1/430 420/1/420
f 429/1/429 439/1/439 440/1/440 430/1/430
f 439/1/439 449/1/449 450/1/450 440/1/440
f 449/1/449 459/1/459 460/1/460 450/1/450
f 459/1/459 469/1/469 470/1/470 460/1/460
f 469/1/469 479/1/479 480/1/480 470/1/470
f 479/1/479 489/1/489 490/1/490 480/1/480
f 489/1/489 499/1/499 500/1/500 490/1/490
f 499/1/499 509/1/509 510/1/510 500/1/500
f 509/1/509 519/1/519 520/1/520 510/1/510
f 519/1/519 529/1/529 530/1/530 520/1/520
f 529/1/529 539/1/539 540/1/540 530/1/530
f 539/1/539 549/1/549 550/1/550 540/1/540
f 549/1/549 559/1/559 560/1/560 550/1/550
f 559/1/559 569/1/569 570/1/570 560/1/560
f 569/1/569 579/1/579 580/1/580 570/1/570
f 579/1/579 589/1/589 590/1/590 580/1/580
f 589/1/589 599/1/599 600/1/600 590/1/590
f 599/1/599 609/1/609 610/1/610 600/1/600
f 609/1/609 619/1/619 620/1/620 610/1/610
f 619/1/619 629/1/629 630/1/630 620/1/620
f 629/1/629 639/1/639 640/1/640 630/1/630
f 639/1/639 8/1/8 9/1/9 640/1/640
f 9/1/9 19/1/19 20/1/20 10/1/10
f 19/1/19 29/1/29 30/1/30 20/1/20
f 29/1/29 39/1/39 40/1/40 30/1/30
f 39/1/39 49/1/49 50/1/50 40/1/40
f 49/1/49 59/1/59 60/1/60 50/1/50
f 59/1/59 69/1/69 70/1/70 60/1/60
f 69/1/69 79/1/79 80/1/80 70/1/70
f 79/1/79 89/1/89 90/1/90 80/1/80
f 89/1/89 99/1/99 100/1/100 90/1/90
f 99/1/99 109/1/109 110/1/110 100/1/100
f 109/1/109 119/1/119 120/1/120 110/1/110
f 119/1/119 129/1/129 130/1/130 120/1/120
f 129/1/129 139/1/139 140/1/140 130/1/130
f 139/1/139 149/1/149 150/1/150 140/1/140
f 149/1/149 159/1/159 160/1/160 150/1/150
f 159/1/159 170/1/170 171/1/171 160/1/160
f 170/1/170 180/1/180 181/1/181 171/1/171
f 180/1/180 190/1/190 191/1/191 181/1/181
f 190/1/190 200/1/200 201/1/201 191/1/191
f 200/1/200 210/1/210 211/1/211 201/1/201
f 210/1/210 220/1/220 221/1/221 211/1/211
f 220/1/220 230/1/230 231/1/231 221/1/221
f 230/1/230 240/1/240 241/1/241 231/1/231
f 240/1/240 250/1/250 251/1/251 241/1/241
f 250/1/250 260/1/260 261/1/261 251/1/251
f 260/1/260 270/1/270 271/1/271 261/1/261
f 270/1/270 280/1/280 281/1/281 271/1/271
f 280/1/280 290/1/290 291/1/291 281/1/281
f 290/1/290 300/1/300 301/1/301 291/1/291
f 300/1/300 310/1/310 311/1/311 301/1/301
f 310/1/310 320/1/320 321/1/321 311/1/311
f 320/1/320 330/1/330 331/1/331 321/1/321
f 330/1/330 340/1/340 341/1/341 331/1/331
f 340/1/340 350/1/350 351/1/351 341/1/341
f 350/1/350 360/1/360 361/1/361 351/1/351
f 360/1/360 370/1/370 371/1/371 361/1/361
f 370/1/370 380/1/380 381/1/381 371/1/371
f 380/1/380 390/1/390 391/1/391 381/1/381
f 390/1/390 400/1/400 401/1/401 391/1/391
f 400/1/400 410/1/410 411/1/411 401/1/401
f 410/1/410 420/1/420 421/1/421 411/1/411
f 420/1/420 430/1/430 431/1/431 421/1/421
f 430/1/430 440/1/440 441/1/441 431/1/431
f 440/1/440 450/1/450 451/1/451 441/1/441
f 450/1/450 460/1/460 461/1/461 451/1/451
f 460/1/460 470/1/470 471/1/471 461/1/461
f 470/1/470 480/1/480 481/1/481 471/1/471
f 480/1/480 490/1/490 491/1/491 481/1/481
f 490/1/490 500/1/500 501/1/501 491/1/491
f 500/1/500 510/1/510 511/1/511 501/1/501
f 510/1/510 520/1/520 521/1/521 511/1/511
f 520/1/520 530/1/530 531/1/531 521/1/521
f 530/1/530 540/1/540 541/1/541 531/1/531
f 540/1/540 550/1/550 551/1/551 541/1/541
f 550/1/550 560/1/560 561/1/561 551/1/551
f 560/1/560 570/1/570 571/1/571 561/1/561
f 570/1/570 580/1/580 581/1/581 571/1/571
f 580/1/580 590/1/590 591/1/591 581/1/581
f 590/1/590 600/1/600 601/1/601 591/1/591
f 600/1/600 610/1/610 611/1/611 601/1/601
f 610/1/610 620/1/620 621/1/621 611/1/611
f 620/1/620 630/1/630 631/1/631 621/1/621
f 630/1/630 640/1/640 641/1/641 631/1/631
f 640/1/640 9/1/9 10/1/10 641/1/641
usemtl Material.002
f 642/2/642 644/2/642 645/3/642
f 642/3/642 645/3/642 646/4/642
f 642/4/642 646/4/642 647/5/642
f 642/5/642 647/5/642 648/6/642
f 642/6/642 648/6/642 649/7/642
f 642/7/642 649/7/642 650/8/642
f 642/8/642 650/8/642 651/9/642
f 642/9/642 651/9/642 652/10/642
f 642/10/642 652/10/642 653/11/642
f 642/11/642 653/11/642 654/12/642
f 642/12/642 654/12/642 655/13/642
f 642/13/642 655/13/642 656/14/642
f 642/14/642 656/14/642 657/15/642
f 642/15/642 657/15/642 658/16/642
f 642/16/642 658/16/642 659/17/642
f 642/17/642 659/17/642 660/18/642
f 642/18/642 660/18/642 661/19/642
f 642/19/642 661/19/642 662/20/642
f 642/20/642 662/20/642 663/21/642
f 642/21/642 663/21/642 664/22/642
f 642/22/642 664/22/642 665/23/642
f 642/23/642 665/23/642 666/24/642
f 642/24/642 666/24/642 667/25/642
f 642/25/642 667/25/642 668/26/642
f 642/26/642 668/26/642 669/27/642
f 642/27/642 669/27/642 670/28/642
f 642/28/642 670/28/642 671/29/642
f 642/29/642 671/29/642 672/30/642
f 642/30/642 672/30/642 673/31/642
f 642/31/642 673/31/642 674/32/642
f 642/32/642 674/32/642 675/33/642
f 642/33/642 675/33/642 676/34/642
f 642/34/642 676/34/642 677/35/642
f 642/35/642 677/35/642 678/36/642
f 642/36/642 678/36/642 679/37/642
f 642/37/642 679/37/642 680/38/642
f 642/38/642 680/38/642 681/39/642
f 642/39/642 681/39/642 682/40/642
f 642/40/642 682/40/642 683/41/642
f 642/41/642 683/41/642 684/42/642
f 642/42/642 684/42/642 685/43/642
f 642/43/642 685/43/642 686/44/642
f 642/44/642 686/44/642 687/45/642
f 642/45/642 687/45/642 688/46/642
f 642/46/642 688/46/642 689/47/642
f 642/47/642 689/47/642 690/48/642
f 642/48/642 690/48/642 691/49/642
f 642/49/642 691/49/642 692/50/642
f 642/50/642 692/50/642 693/51/642
f 642/51/642 693/51/642 694/52/642
f 642/52/642 694/52/642 695/53/642
f 642/53/642 695/53/642 696/54/642
f 642/54/642 696/54/642 697/55/642
f 642/55/642 697/55/642 698/56/642
f 642/56/642 698/56/642 699/57/642
f 642/57/642 699/57/642 700/58/642
f 642/58/642 700/58/642 701/59/642
f 642/59/642 701/59/642 702/60/642
f 642/60/642 702/60/642 703/61/642
f 642/61/642 703/61/642 704/62/642
f 642/62/642 704/62/642 705/63/642
f 642/63/642 705/63/642 706/64/642
f 642/64/642 706/64/642 643/65/642
f 642/66/642 643/66/642 644/2/642
o Cylinder
v 0.000000 -1.887091 -0.986939
v 0.000000 2.181778 -0.383758
v 0.192543 -1.887091 -0.967975
v 0.074867 2.181778 -0.376384
v 0.377685 -1.887091 -0.911813
v 0.146858 2.181778 -0.354546
v 0.548314 -1.887091 -0.820610
v 0.213205 2.181778 -0.319083
v 0.697871 -1.887091 -0.697871
v 0.271358 2.181778 -0.271358
v 0.820610 -1.887091 -0.548314
v 0.319083 2.181778 -0.213205
v 0.911813 -1.887091 -0.377685
v 0.354546 2.181778 -0.146858
v 0.967975 -1.887091 -0.192542
v 0.376384 2.181778 -0.074867
v 0.986939 -1.887091 0.000000
v 0.383758 2.181778 -0.000000
v 0.967975 -1.887091 0.192542
v 0.376385 2.181778 0.074867
v 0.911813 -1.887091 0.377685
v 0.354546 2.181778 0.146858
v 0.820610 -1.887091 0.548314
v 0.319083 2.181778 0.213205
v 0.697871 -1.887091 0.697871
v 0.271358 2.181778 0.271358
v 0.548314 -1.887091 0.820610
v 0.213205 2.181778 0.319083
v 0.377685 -1.887091 0.911813
v 0.146858 2.181778 0.354546
v 0.192542 -1.887091 0.967975
v 0.074868 2.181778 0.376384
v -0.000000 -1.887091 0.986939
v 0.000000 2.181778 0.383758
v -0.192542 -1.887091 0.967975
v -0.074867 2.181778 0.376384
v -0.377685 -1.887091 0.911813
v -0.146858 2.181778 0.354546
v -0.548314 -1.887091 0.820610
v -0.213205 2.181778 0.319083
v -0.697871 -1.887091 0.697871
v -0.271358 2.181778 0.271358
v -0.820610 -1.887091 0.548314
v -0.319083 2.181778 0.213205
v -0.911813 -1.887091 0.377685
v -0.354546 2.181778 0.146858
v -0.967975 -1.887091 0.192542
v -0.376384 2.181778 0.074868
v -0.986939 -1.887091 -0.000000
v -0.383758 2.181778 0.000000
v -0.967975 -1.887091 -0.192542
v -0.376384 2.181778 -0.074867
v -0.911813 -1.887091 -0.377685
v -0.354546 2.181778 -0.146858
v -0.820610 -1.887091 -0.548314
v -0.319083 2.181778 -0.213204
v -0.697871 -1.887091 -0.697871
v -0.271358 2.181778 -0.271358
v -0.548314 -1.887091 -0.820610
v -0.213205 2.181778 -0.319083
v -0.377685 -1.887091 -0.911813
v -0.146858 2.181778 -0.354546
v -0.192542 -1.887091 -0.967975
v -0.074867 2.181778 -0.376384
v 0.561825 -1.829546 0.840830
v 0.572098 -1.761798 0.856206
v 0.577862 -1.688458 0.864832
v 0.578723 -1.612642 0.866121
v 0.577498 0.617716 0.864287
v 0.565076 0.677896 0.845697
v 0.350846 2.002015 0.525078
v 0.340685 2.151116 0.509870
v 0.715067 -1.829546 0.715067
v 0.728143 -1.761798 0.728143
v 0.735479 -1.688458 0.735479
v 0.736575 -1.612642 0.736575
v 0.735016 0.617716 0.735016
v 0.719206 0.677896 0.719206
v 0.446542 2.002015 0.446542
v 0.433609 2.151116 0.433609
v 0.840830 -1.829546 0.561825
v 0.856205 -1.761798 0.572098
v 0.864832 -1.688458 0.577862
v 0.866121 -1.612642 0.578724
v 0.864287 0.617716 0.577498
v 0.845697 0.677896 0.565077
v 0.525078 2.002015 0.350846
v 0.509871 2.151116 0.340684
v 0.934280 -1.829546 0.386992
v 0.951365 -1.761798 0.394068
v 0.960950 -1.688458 0.398039
v 0.962382 -1.612642 0.398632
v 0.960344 0.617716 0.397788
v 0.939688 0.677896 0.389232
v 0.583436 2.002015 0.241667
v 0.566538 2.151116 0.234667
v 0.991826 -1.829546 0.197287
v 1.009963 -1.761798 0.200894
v 1.020139 -1.688458 0.202918
v 1.021659 -1.612642 0.203221
v 1.019496 0.617716 0.202790
v 0.997567 0.677896 0.198429
v 0.619372 2.002015 0.123201
v 0.601433 2.151116 0.119632
v 1.011258 -1.829546 0.000000
v 1.029750 -1.761798 0.000000
v 1.040125 -1.688458 0.000000
v 1.041675 -1.612642 0.000000
v 1.039469 0.617716 0.000000
v 1.017111 0.677896 0.000000
v 0.631506 2.002015 -0.000000
v 0.613216 2.151116 -0.000000
v 0.991827 -1.829546 -0.197286
v 1.009963 -1.761798 -0.200894
v 1.020139 -1.688458 -0.202918
v 1.021659 -1.612642 -0.203221
v 1.019496 0.617716 -0.202790
v 0.997567 0.677896 -0.198428
v 0.619372 2.002015 -0.123201
v 0.601433 2.151116 -0.119633
v 0.934280 -1.829546 -0.386991
v 0.951365 -1.761798 -0.394068
v 0.960950 -1.688458 -0.398038
v 0.962382 -1.612642 -0.398632
v 0.960344 0.617716 -0.397788
v 0.939688 0.677896 -0.389231
v 0.583436 2.002015 -0.241667
v 0.566538 2.151116 -0.234668
v 0.840830 -1.829546 -0.561824
v 0.856206 -1.761798 -0.572098
v 0.864832 -1.688458 -0.577862
v 0.866121 -1.612642 -0.578723
v 0.864287 0.617716 -0.577498
v 0.845697 0.677896 -0.565076
v 0.525078 2.002015 -0.350846
v 0.509870 2.151116 -0.340685
v 0.715067 -1.829546 -0.715067
v 0.728143 -1.761798 -0.728143
v 0.735479 -1.688458 -0.735479
v 0.736575 -1.612642 -0.736575
v 0.735016 0.617716 -0.735016
v 0.719206 0.677896 -0.719206
v 0.446542 2.002015 -0.446542
v 0.433609 2.151116 -0.433609
v 0.561825 -1.829546 -0.840830
v 0.572098 -1.761798 -0.856206
v 0.577862 -1.688458 -0.864832
v 0.578723 -1.612642 -0.866121
v 0.577498 0.617716 -0.864287
v 0.565077 0.677896 -0.845697
v 0.350846 2.002015 -0.525078
v 0.340684 2.151116 -0.509871
v 0.386991 -1.829546 -0.934280
v 0.394068 -1.761798 -0.951365
v 0.398038 -1.688458 -0.960950
v 0.398632 -1.612642 -0.962382
v 0.397788 0.617716 -0.960344
v 0.389231 0.677896 -0.939688
v 0.241667 2.002015 -0.583436
v 0.234667 2.151116 -0.566538
v 0.197287 -1.829546 -0.991826
v 0.200894 -1.761798 -1.009963
v 0.202918 -1.688458 -1.020139
v 0.203221 -1.612642 -1.021659
v 0.202791 0.617716 -1.019496
v 0.198429 0.677896 -0.997567
v 0.123201 2.002015 -0.619372
v 0.119632 2.151116 -0.601433
v 0.234668 2.151116 0.566538
v 0.241667 2.002015 0.583436
v 0.389231 0.677896 0.939688
v 0.397788 0.617716 0.960344
v 0.398632 -1.612642 0.962382
v 0.398038 -1.688458 0.960950
v 0.394068 -1.761798 0.951365
v 0.386991 -1.829546 0.934280
v 0.119633 2.151116 0.601433
v 0.123201 2.002015 0.619372
v 0.198428 0.677896 0.997567
v 0.202790 0.617716 1.019496
v 0.203221 -1.612642 1.021659
v 0.202918 -1.688458 1.020139
v 0.200894 -1.761798 1.009963
v 0.197286 -1.829546 0.991826
v 0.000000 2.151116 0.613216
v 0.000000 2.002015 0.631506
v -0.000000 0.677896 1.017111
v -0.000000 0.617716 1.039469
v -0.000000 -1.612642 1.041675
v -0.000000 -1.688458 1.040125
v -0.000000 -1.761798 1.029750
v -0.000000 -1.829546 1.011258
v -0.119632 2.151116 0.601433
v -0.123201 2.002015 0.619372
v -0.198429 0.677896 0.997567
v -0.202790 0.617716 1.019496
v -0.203221 -1.612642 1.021659
v -0.202918 -1.688458 1.020139
v -0.200894 -1.761798 1.009963
v -0.197287 -1.829546 0.991826
v -0.234667 2.151116 0.566538
v -0.241667 2.002015 0.583436
v -0.389232 0.677896 0.939688
v -0.397788 0.617716 0.960344
v -0.398632 -1.612642 0.962382
v -0.398039 -1.688458 0.960950
v -0.394068 -1.761798 0.951365
v -0.386992 -1.829546 0.934280
v -0.340684 2.151116 0.509871
v -0.350846 2.002015 0.525078
v -0.565077 0.677896 0.845697
v -0.577498 0.617716 0.864287
v -0.578724 -1.612642 0.866121
v -0.577862 -1.688458 0.864832
v -0.572098 -1.761798 0.856205
v -0.561825 -1.829546 0.840830
v -0.433609 2.151116 0.433609
v -0.446542 2.002015 0.446542
v -0.719206 0.677896 0.719206
v -0.735016 0.617716 0.735016
v -0.736575 -1.612642 0.736575
v -0.735479 -1.688458 0.735479
v -0.728143 -1.761798 0.728143
v -0.715067 -1.829546 0.715067
v -0.509870 2.151116 0.340685
v -0.525078 2.002015 0.350846
v -0.845697 0.677896 0.565076
v -0.864287 0.617716 0.577498
v -0.866121 -1.612642 0.578723
v -0.864832 -1.688458 0.577862
v -0.856206 -1.761798 0.572098
v -0.840830 -1.829546 0.561824
v -0.566537 2.151116 0.234668
v -0.583436 2.002015 0.241667
v -0.939688 0.677896 0.389231
v -0.960344 0.617716 0.397788
v -0.962382 -1.612642 0.398632
v -0.960950 -1.688458 0.398038
v -0.951365 -1.761798 0.394068
v -0.934280 -1.829546 0.386991
v -0.601433 2.151116 0.119633
v -0.619372 2.002015 0.123201
v -0.997567 0.677896 0.198428
v -1.019496 0.617716 0.202790
v -1.021659 -1.612642 0.203221
v -1.020139 -1.688458 0.202918
v -1.009963 -1.761798 0.200894
v -0.991826 -1.829546 0.197286
v -0.613216 2.151116 0.000000
v -0.631506 2.002015 0.000000
v -1.017111 0.677896 -0.000000
v -1.039469 0.617716 -0.000000
v -1.041675 -1.612642 -0.000000
v -1.040125 -1.688458 -0.000000
v -1.029750 -1.761798 -0.000000
v -1.011258 -1.829546 -0.000000
v -0.601433 2.151116 -0.119632
v -0.619372 2.002015 -0.123201
v -0.997567 0.677896 -0.198429
v -1.019496 0.617716 -0.202790
v -1.021659 -1.612642 -0.203221
v -1.020139 -1.688458 -0.202918
v -1.009963 -1.761798 -0.200894
v -0.991826 -1.829546 -0.197287
v -0.566538 2.151116 -0.234667
v -0.583436 2.002015 -0.241667
v -0.939688 0.677896 -0.389232
v -0.960344 0.617716 -0.397788
v -0.962382 -1.612642 -0.398632
v -0.960950 -1.688458 -0.398039
v -0.951365 -1.761798 -0.394068
v -0.934280 -1.829546 -0.386992
v -0.509871 2.151116 -0.340684
v -0.525078 2.002015 -0.350846
v -0.845697 0.677896 -0.565077
v -0.864287 0.617716 -0.577498
v -0.866121 -1.612642 -0.578724
v -0.864832 -1.688458 -0.577863
v -0.856205 -1.761798 -0.572098
v -0.840830 -1.829546 -0.561825
v -0.433609 2.151116 -0.433609
v -0.446543 2.002015 -0.446542
v -0.719206 0.677896 -0.719206
v -0.735016 0.617716 -0.735016
v -0.736575 -1.612642 -0.736575
v -0.735479 -1.688458 -0.735479
v -0.728143 -1.761798 -0.728143
v -0.715067 -1.829546 -0.715067
v -0.340685 2.151116 -0.509870
v -0.350846 2.002015 -0.525078
v -0.565076 0.677896 -0.845697
v -0.577498 0.617716 -0.864287
v -0.578723 -1.612642 -0.866121
v -0.577862 -1.688458 -0.864832
v -0.572098 -1.761798 -0.856206
v -0.561825 -1.829546 -0.840830
v -0.234668 2.151116 -0.566538
v -0.241667 2.002015 -0.583436
v -0.389231 0.677896 -0.939688
v -0.397788 0.617716 -0.960344
v -0.398632 -1.612642 -0.962382
v -0.398038 -1.688458 -0.960950
v -0.394068 -1.761798 -0.951365
v -0.386991 -1.829546 -0.934280
v -0.119633 2.151116 -0.601433
v -0.123201 2.002015 -0.619372
v -0.198428 0.677896 -0.997567
v -0.202790 0.617716 -1.019496
v -0.203221 -1.612642 -1.021659
v -0.202918 -1.688458 -1.020139
v -0.200894 -1.761798 -1.009963
v -0.197286 -1.829546 -0.991826
v 0.000000 -1.829546 -1.011258
v 0.000000 -1.761798 -1.029750
v 0.000000 -1.688458 -1.040125
v 0.000000 -1.612642 -1.041675
v 0.000000 0.617716 -1.039469
v 0.000000 0.677896 -1.017111
v -0.000000 2.002016 -0.631506
v -0.000000 2.151116 -0.613216
v 0.557339 1.196065 0.372402
v -0.557339 1.196065 -0.372402
v 0.372402 1.196065 0.557338
v -0.619281 1.196065 -0.256515
v 0.473977 1.196065 0.473977
v -0.657426 1.196065 -0.130770
v -0.670305 1.196065 0.000000
v 0.619281 1.196065 0.256515
v 0.657426 1.196065 0.130770
v 0.670305 1.196065 -0.000000
v 0.657426 1.196065 -0.130770
v -0.657426 1.196065 0.130770
v -0.619281 1.196065 0.256515
v -0.557339 1.196065 0.372402
v -0.473977 1.196065 0.473977
v 0.619281 1.196065 -0.256515
v -0.372402 1.196065 0.557339
v 0.557338 1.196065 -0.372402
v -0.256515 1.196065 0.619281
v 0.473977 1.196065 -0.473978
v -0.130770 1.196065 0.657426
v 0.372402 1.196065 -0.557339
v 0.000000 1.196065 0.670305
v 0.256515 1.196065 -0.619281
v 0.130770 1.196065 0.657426
v 0.130770 1.196065 -0.657426
v 0.256515 1.196065 0.619281
v -0.473978 1.196065 -0.473977
v -0.372402 1.196065 -0.557338
v -0.256515 1.196065 -0.619281
v -0.130770 1.196065 -0.657426
v 0.000000 1.196064 -0.670305
v 0.000000 1.129337 -0.671441
v 0.558283 1.129338 0.373033
v -0.558283 1.129337 -0.373033
v 0.373033 1.129338 0.558283
v -0.620331 1.129338 -0.256950
v 0.474781 1.129338 0.474781
v -0.658540 1.129338 -0.130992
v -0.671441 1.129338 -0.000000
v 0.620331 1.129337 0.256949
v 0.658540 1.129338 0.130992
v 0.671441 1.129338 -0.000000
v 0.658540 1.129338 -0.130992
v -0.658540 1.129338 0.130992
v -0.620331 1.129338 0.256950
v -0.558283 1.129337 0.373033
v -0.474781 1.129338 0.474781
v 0.620331 1.129338 -0.256950
v -0.373033 1.129338 0.558283
v 0.558283 1.129337 -0.373033
v -0.256950 1.129338 0.620331
v 0.474781 1.129338 -0.474781
v -0.130992 1.129338 0.658540
v 0.373033 1.129338 -0.558283
v 0.000000 1.129338 0.671441
v 0.256949 1.129338 -0.620331
v 0.130992 1.129338 0.658540
v 0.130992 1.129338 -0.658540
v 0.256950 1.129338 0.620331
v -0.474781 1.129338 -0.474781
v -0.373033 1.129338 -0.558283
v -0.256950 1.129337 -0.620331
v -0.130992 1.129338 -0.658540
v 0.597311 0.969070 0.399111
v -0.597311 0.969070 -0.399111
v 0.399111 0.969070 0.597311
v -0.663696 0.969070 -0.274912
v 0.507971 0.969070 0.507971
v -0.704576 0.969070 -0.140149
v -0.718380 0.969070 -0.000000
v 0.663697 0.969070 0.274912
v 0.704576 0.969070 0.140149
v 0.718380 0.969070 0.000000
v 0.704577 0.969070 -0.140149
v -0.704576 0.969070 0.140149
v -0.663697 0.969070 0.274912
v -0.597311 0.969070 0.399110
v -0.507971 0.969070 0.507971
v 0.663697 0.969070 -0.274912
v -0.399111 0.969070 0.597311
v 0.597311 0.969070 -0.399110
v -0.274912 0.969070 0.663697
v 0.507971 0.969070 -0.507971
v -0.140149 0.969070 0.704576
v 0.399111 0.969070 -0.597311
v -0.000000 0.969070 0.718380
v 0.274912 0.969070 -0.663697
v 0.140149 0.969070 0.704577
v 0.140149 0.969070 -0.704576
v 0.274912 0.969070 0.663697
v -0.507971 0.969070 -0.507971
v -0.399110 0.969070 -0.597311
v -0.274912 0.969070 -0.663697
v -0.140149 0.969070 -0.704576
v 0.000000 0.969070 -0.718380
v 0.486503 2.177469 0.325071
v 0.500698 2.166191 0.334555
v -0.486503 2.177469 -0.325071
v -0.500697 2.166191 -0.334555
v 0.325071 2.177469 0.486503
v 0.334556 2.166191 0.500697
v -0.540573 2.177469 -0.223913
v -0.556345 2.166191 -0.230445
v 0.413737 2.177469 0.413737
v 0.425808 2.166191 0.425808
v -0.573869 2.177469 -0.114149
v -0.590613 2.166191 -0.117480
v -0.585112 2.177469 0.000000
v -0.602184 2.166191 0.000000
v 0.540573 2.177469 0.223913
v 0.556345 2.166191 0.230445
v 0.573870 2.177469 0.114150
v 0.590613 2.166191 0.117480
v 0.585112 2.177469 -0.000000
v 0.602184 2.166191 -0.000000
v 0.573869 2.177469 -0.114150
v 0.590613 2.166191 -0.117480
v -0.573869 2.177469 0.114150
v -0.590613 2.166191 0.117480
v -0.540573 2.177469 0.223913
v -0.556345 2.166191 0.230446
v -0.486503 2.177469 0.325071
v -0.500697 2.166191 0.334556
v -0.413737 2.177469 0.413737
v -0.425808 2.166191 0.425808
v 0.540573 2.177469 -0.223913
v 0.556345 2.166191 -0.230446
v -0.325071 2.177469 0.486503
v -0.334555 2.166191 0.500698
v 0.486503 2.177469 -0.325071
v 0.500697 2.166191 -0.334556
v -0.223913 2.177469 0.540573
v -0.230445 2.166191 0.556345
v 0.413737 2.177469 -0.413737
v 0.425808 2.166191 -0.425808
v -0.114149 2.177469 0.573869
v -0.117480 2.166191 0.590613
v 0.325071 2.177469 -0.486503
v 0.334555 2.166191 -0.500698
v 0.000000 2.177469 0.585112
v 0.000000 2.166191 0.602184
v 0.223913 2.177469 -0.540573
v 0.230445 2.166191 -0.556345
v 0.114150 2.177469 0.573869
v 0.117480 2.166191 0.590613
v 0.114150 2.177469 -0.573869
v 0.117480 2.166191 -0.590613
v 0.223913 2.177469 0.540573
v 0.230446 2.166191 0.556345
v -0.413737 2.177469 -0.413737
v -0.425808 2.166191 -0.425808
v -0.325071 2.177469 -0.486503
v -0.334556 2.166191 -0.500697
v -0.223913 2.177469 -0.540573
v -0.230446 2.166191 -0.556345
v -0.114150 2.177469 -0.573869
v -0.117480 2.166191 -0.590613
v -0.000000 2.166191 -0.602184
v -0.000000 2.177469 -0.585112
vn -0.0000 -0.3893 -0.9211
vn -0.0000 0.9998 -0.0214
vn 0.1797 -0.3893 -0.9034
vn 0.0042 0.9998 -0.0210
vn 0.3525 -0.3893 -0.8510
vn 0.0082 0.9998 -0.0198
vn 0.5117 -0.3893 -0.7659
vn 0.0119 0.9998 -0.0178
vn 0.6513 -0.3893 -0.6513
vn 0.0151 0.9998 -0.0151
vn 0.7659 -0.3893 -0.5117
vn 0.0178 0.9998 -0.0119
vn 0.8510 -0.3893 -0.3525
vn 0.0198 0.9998 -0.0082
vn 0.9034 -0.3893 -0.1797
vn 0.0210 0.9998 -0.0042
vn 0.9211 -0.3893 -0.0000
vn 0.0214 0.9998 -0.0000
vn 0.9034 -0.3893 0.1797
vn 0.0210 0.9998 0.0042
vn 0.8510 -0.3893 0.3525
vn 0.0198 0.9998 0.0082
vn 0.7659 -0.3893 0.5117
vn 0.0178 0.9998 0.0119
vn 0.6513 -0.3893 0.6513
vn 0.0151 0.9998 0.0151
vn 0.5117 -0.3893 0.7659
vn 0.0119 0.9998 0.0178
vn 0.3525 -0.3893 0.8510
vn 0.0082 0.9998 0.0198
vn 0.1797 -0.3893 0.9034
vn 0.0042 0.9998 0.0210
vn -0.0000 -0.3893 0.9211
vn -0.0000 0.9998 0.0214
vn -0.1797 -0.3893 0.9034
vn -0.0042 0.9998 0.0210
vn -0.3525 -0.3893 0.8510
vn -0.0082 0.9998 0.0198
vn -0.5117 -0.3893 0.7659
vn -0.0119 0.9998 0.0178
vn -0.6513 -0.3893 0.6513
vn -0.0151 0.9998 0.0151
vn -0.7659 -0.3893 0.5117
vn -0.0178 0.9998 0.0119
vn -0.8510 -0.3893 0.3525
vn -0.0198 0.9998 0.0082
vn -0.9034 -0.3893 0.1797
vn -0.0210 0.9998 0.0042
vn -0.9211 -0.3893 -0.0000
vn -0.0214 0.9998 -0.0000
vn -0.9034 -0.3893 -0.1797
vn -0.0210 0.9998 -0.0042
vn -0.8510 -0.3893 -0.3525
vn -0.0198 0.9998 -0.0082
vn -0.7659 -0.3893 -0.5117
vn -0.0178 0.9998 -0.0119
vn -0.6513 -0.3893 -0.6513
vn -0.0151 0.9998 -0.0151
vn -0.5117 -0.3893 -0.7659
vn -0.0119 0.9998 -0.0178
vn -0.3525 -0.3893 -0.8510
vn -0.0082 0.9998 -0.0198
vn -0.1797 -0.3893 -0.9034
vn -0.0042 0.9998 -0.0210
vn 0.5253 -0.3257 0.7861
vn 0.5442 -0.2013 0.8144
vn 0.5538 -0.0801 0.8288
vn 0.5555 -0.0097 0.8314
vn 0.5469 0.1755 0.8186
vn 0.4678 0.5393 0.7002
vn 0.5536 0.0848 0.8285
vn 0.5177 0.3628 0.7748
vn 0.6685 -0.3257 0.6685
vn 0.6926 -0.2013 0.6926
vn 0.7048 -0.0801 0.7048
vn 0.7071 -0.0097 0.7071
vn 0.6961 0.1755 0.6961
vn 0.5955 0.5393 0.5955
vn 0.7046 0.0848 0.7046
vn 0.6589 0.3628 0.6589
vn 0.7861 -0.3257 0.5253
vn 0.8144 -0.2013 0.5442
vn 0.8288 -0.0801 0.5538
vn 0.8314 -0.0097 0.5555
vn 0.8186 0.1755 0.5469
vn 0.7002 0.5393 0.4678
vn 0.8285 0.0848 0.5536
vn 0.7748 0.3628 0.5177
vn 0.8735 -0.3257 0.3618
vn 0.9050 -0.2013 0.3748
vn 0.9209 -0.0801 0.3815
vn 0.9238 -0.0097 0.3827
vn 0.9095 0.1755 0.3767
vn 0.7780 0.5393 0.3223
vn 0.9206 0.0848 0.3813
vn 0.8609 0.3628 0.3566
vn 0.9273 -0.3257 0.1844
vn 0.9607 -0.2013 0.1911
vn 0.9776 -0.0801 0.1945
vn 0.9807 -0.0097 0.1951
vn 0.9656 0.1755 0.1921
vn 0.8259 0.5393 0.1643
vn 0.9773 0.0848 0.1944
vn 0.9140 0.3628 0.1818
vn 0.9455 -0.3257 -0.0000
vn 0.9795 -0.2013 -0.0000
vn 0.9968 -0.0801 -0.0000
vn 1.0000 -0.0097 -0.0000
vn 0.9845 0.1755 -0.0000
vn 0.8421 0.5393 -0.0000
vn 0.9964 0.0848 -0.0000
vn 0.9319 0.3628 -0.0000
vn 0.9273 -0.3257 -0.1844
vn 0.9607 -0.2013 -0.1911
vn 0.9776 -0.0801 -0.1945
vn 0.9807 -0.0097 -0.1951
vn 0.9656 0.1755 -0.1921
vn 0.8259 0.5393 -0.1643
vn 0.9773 0.0848 -0.1944
vn 0.9140 0.3628 -0.1818
vn 0.8735 -0.3257 -0.3618
vn 0.9050 -0.2013 -0.3748
vn 0.9209 -0.0801 -0.3815
vn 0.9238 -0.0097 -0.3827
vn 0.9095 0.1755 -0.3767
vn 0.7780 0.5393 -0.3223
vn 0.9206 0.0848 -0.3813
vn 0.8609 0.3628 -0.3566
vn 0.7861 -0.3257 -0.5253
vn 0.8144 -0.2013 -0.5442
vn 0.8288 -0.0801 -0.5538
vn 0.8314 -0.0097 -0.5555
vn 0.8186 0.1755 -0.5469
vn 0.7002 0.5393 -0.4678
vn 0.8285 0.0848 -0.5536
vn 0.7748 0.3628 -0.5177
vn 0.6685 -0.3257 -0.6685
vn 0.6926 -0.2013 -0.6926
vn 0.7048 -0.0801 -0.7048
vn 0.7071 -0.0097 -0.7071
vn 0.6961 0.1755 -0.6961
vn 0.5955 0.5393 -0.5955
vn 0.7046 0.0848 -0.7046
vn 0.6589 0.3628 -0.6589
vn 0.5253 -0.3257 -0.7861
vn 0.5442 -0.2013 -0.8144
vn 0.5538 -0.0801 -0.8288
vn 0.5555 -0.0097 -0.8314
vn 0.5469 0.1755 -0.8186
vn 0.4678 0.5393 -0.7002
vn 0.5536 0.0848 -0.8285
vn 0.5177 0.3628 -0.7748
vn 0.3618 -0.3257 -0.8735
vn 0.3748 -0.2013 -0.9050
vn 0.3815 -0.0801 -0.9209
vn 0.3827 -0.0097 -0.9238
vn 0.3767 0.1755 -0.9095
vn 0.3223 0.5393 -0.7780
vn 0.3813 0.0848 -0.9206
vn 0.3566 0.3628 -0.8609
vn 0.1844 -0.3257 -0.9273
vn 0.1911 -0.2013 -0.9607
vn 0.1945 -0.0801 -0.9776
vn 0.1951 -0.0097 -0.9807
vn 0.1921 0.1755 -0.9656
vn 0.1643 0.5393 -0.8259
vn 0.1944 0.0848 -0.9773
vn 0.1818 0.3628 -0.9140
vn 0.3566 0.3628 0.8609
vn 0.3813 0.0848 0.9206
vn 0.3223 0.5393 0.7780
vn 0.3767 0.1755 0.9095
vn 0.3827 -0.0097 0.9238
vn 0.3815 -0.0801 0.9209
vn 0.3748 -0.2013 0.9050
vn 0.3618 -0.3257 0.8735
vn 0.1818 0.3628 0.9140
vn 0.1944 0.0848 0.9773
vn 0.1643 0.5393 0.8259
vn 0.1921 0.1755 0.9656
vn 0.1951 -0.0097 0.9807
vn 0.1945 -0.0801 0.9776
vn 0.1911 -0.2013 0.9607
vn 0.1844 -0.3257 0.9273
vn -0.0000 0.3628 0.9319
vn -0.0000 0.0848 0.9964
vn -0.0000 0.5393 0.8421
vn -0.0000 0.1755 0.9845
vn -0.0000 -0.0097 1.0000
vn -0.0000 -0.0801 0.9968
vn -0.0000 -0.2013 0.9795
vn -0.0000 -0.3257 0.9455
vn -0.1818 0.3628 0.9140
vn -0.1944 0.0848 0.9773
vn -0.1643 0.5393 0.8259
vn -0.1921 0.1755 0.9656
vn -0.1951 -0.0097 0.9807
vn -0.1945 -0.0801 0.9776
vn -0.1911 -0.2013 0.9607
vn -0.1845 -0.3257 0.9273
vn -0.3566 0.3628 0.8609
vn -0.3813 0.0848 0.9206
vn -0.3223 0.5393 0.7780
vn -0.3767 0.1755 0.9095
vn -0.3827 -0.0097 0.9238
vn -0.3815 -0.0801 0.9209
vn -0.3748 -0.2013 0.9050
vn -0.3618 -0.3257 0.8735
vn -0.5177 0.3628 0.7748
vn -0.5536 0.0848 0.8285
vn -0.4678 0.5393 0.7002
vn -0.5469 0.1755 0.8186
vn -0.5555 -0.0097 0.8314
vn -0.5538 -0.0801 0.8288
vn -0.5442 -0.2013 0.8144
vn -0.5253 -0.3257 0.7861
vn -0.6589 0.3628 0.6589
vn -0.7046 0.0848 0.7046
vn -0.5955 0.5393 0.5955
vn -0.6961 0.1755 0.6961
vn -0.7071 -0.0097 0.7071
vn -0.7048 -0.0801 0.7048
vn -0.6926 -0.2013 0.6926
vn -0.6685 -0.3257 0.6685
vn -0.7748 0.3628 0.5177
vn -0.8285 0.0848 0.5536
vn -0.7002 0.5393 0.4678
vn -0.8186 0.1755 0.5469
vn -0.8314 -0.0097 0.5555
vn -0.8288 -0.0801 0.5538
vn -0.8144 -0.2013 0.5442
vn -0.7861 -0.3257 0.5253
vn -0.8609 0.3628 0.3566
vn -0.9206 0.0848 0.3813
vn -0.7780 0.5393 0.3223
vn -0.9095 0.1755 0.3767
vn -0.9238 -0.0097 0.3827
vn -0.9209 -0.0801 0.3815
vn -0.9050 -0.2013 0.3748
vn -0.8735 -0.3257 0.3618
vn -0.9140 0.3628 0.1818
vn -0.9773 0.0848 0.1944
vn -0.8259 0.5393 0.1643
vn -0.9656 0.1755 0.1921
vn -0.9807 -0.0097 0.1951
vn -0.9776 -0.0801 0.1945
vn -0.9607 -0.2013 0.1911
vn -0.9273 -0.3257 0.1844
vn -0.9319 0.3628 -0.0000
vn -0.9964 0.0848 -0.0000
vn -0.8421 0.5393 -0.0000
vn -0.9845 0.1755 -0.0000
vn -1.0000 -0.0097 -0.0000
vn -0.9968 -0.0801 -0.0000
vn -0.9795 -0.2013 -0.0000
vn -0.9455 -0.3257 -0.0000
vn -0.9140 0.3628 -0.1818
vn -0.9773 0.0848 -0.1944
vn -0.8259 0.5393 -0.1643
vn -0.9656 0.1755 -0.1921
vn -0.9807 -0.0097 -0.1951
vn -0.9776 -0.0801 -0.1945
vn -0.9607 -0.2013 -0.1911
vn -0.9273 -0.3257 -0.1844
vn -0.8609 0.3628 -0.3566
vn -0.9206 0.0848 -0.3813
vn -0.7780 0.5393 -0.3223
vn -0.9095 0.1755 -0.3767
vn -0.9238 -0.0097 -0.3827
vn -0.9209 -0.0801 -0.3815
vn -0.9050 -0.2013 -0.3748
vn -0.8735 -0.3257 -0.3618
vn -0.7748 0.3628 -0.5177
vn -0.8285 0.0848 -0.5536
vn -0.7002 0.5393 -0.4678
vn -0.8186 0.1755 -0.5469
vn -0.8314 -0.0097 -0.5555
vn -0.8288 -0.0801 -0.5538
vn -0.8144 -0.2013 -0.5442
vn -0.7861 -0.3257 -0.5253
vn -0.6589 0.3628 -0.6589
vn -0.7046 0.0848 -0.7046
vn -0.5955 0.5393 -0.5955
vn -0.6961 0.1755 -0.6961
vn -0.7071 -0.0097 -0.7071
vn -0.7048 -0.0801 -0.7048
vn -0.6926 -0.2013 -0.6926
vn -0.6685 -0.3257 -0.6685
vn -0.5177 0.3628 -0.7748
vn -0.5536 0.0848 -0.8285
vn -0.4678 0.5393 -0.7002
vn -0.5469 0.1755 -0.8186
vn -0.5555 -0.0097 -0.8314
vn -0.5538 -0.0801 -0.8288
vn -0.5442 -0.2013 -0.8144
vn -0.5253 -0.3257 -0.7861
vn -0.3566 0.3628 -0.8609
vn -0.3813 0.0848 -0.9206
vn -0.3223 0.5393 -0.7780
vn -0.3767 0.1755 -0.9095
vn -0.3827 -0.0097 -0.9238
vn -0.3815 -0.0801 -0.9209
vn -0.3748 -0.2013 -0.9050
vn -0.3618 -0.3257 -0.8735
vn -0.1818 0.3628 -0.9140
vn -0.1944 0.0848 -0.9773
vn -0.1643 0.5393 -0.8259
vn -0.1921 0.1755 -0.9656
vn -0.1951 -0.0097 -0.9807
vn -0.1945 -0.0801 -0.9776
vn -0.1911 -0.2013 -0.9607
vn -0.1844 -0.3257 -0.9273
vn -0.0000 -0.3257 -0.9455
vn -0.0000 -0.2013 -0.9795
vn -0.0000 -0.0801 -0.9968
vn -0.0000 -0.0097 -1.0000
vn -0.0000 0.1755 -0.9845
vn -0.0000 0.5393 -0.8421
vn -0.0000 0.0848 -0.9964
vn -0.0000 0.3628 -0.9319
vn 0.8310 0.0325 0.5553
vn -0.8310 0.0325 -0.5553
vn 0.5553 0.0325 0.8310
vn -0.9234 0.0325 -0.3825
vn 0.7067 0.0325 0.7067
vn -0.9803 0.0325 -0.1950
vn -0.9995 0.0325 -0.0000
vn 0.9234 0.0325 0.3825
vn 0.9803 0.0325 0.1950
vn 0.9995 0.0325 -0.0000
vn 0.9803 0.0325 -0.1950
vn -0.9803 0.0325 0.1950
vn -0.9234 0.0325 0.3825
vn -0.8310 0.0325 0.5553
vn -0.7067 0.0325 0.7067
vn 0.9234 0.0325 -0.3825
vn -0.5553 0.0325 0.8310
vn 0.8310 0.0325 -0.5553
vn -0.3825 0.0325 0.9234
vn 0.7067 0.0325 -0.7067
vn -0.1950 0.0325 0.9803
vn 0.5553 0.0325 -0.8310
vn -0.0000 0.0325 0.9995
vn 0.3825 0.0325 -0.9234
vn 0.1950 0.0325 0.9803
vn 0.1950 0.0325 -0.9803
vn 0.3825 0.0325 0.9234
vn -0.7067 0.0325 -0.7067
vn -0.5553 0.0325 -0.8310
vn -0.3825 0.0325 -0.9234
vn -0.1950 0.0325 -0.9803
vn -0.0000 0.0325 -0.9995
vn -0.0000 0.1516 -0.9884
vn 0.8219 0.1516 0.5491
vn -0.8219 0.1516 -0.5491
vn 0.5491 0.1516 0.8219
vn -0.9132 0.1516 -0.3783
vn 0.6989 0.1516 0.6989
vn -0.9694 0.1516 -0.1928
vn -0.9884 0.1516 -0.0000
vn 0.9132 0.1516 0.3783
vn 0.9694 0.1516 0.1928
vn 0.9884 0.1516 -0.0000
vn 0.9694 0.1516 -0.1928
vn -0.9694 0.1516 0.1928
vn -0.9132 0.1516 0.3783
vn -0.8219 0.1516 0.5491
vn -0.6989 0.1516 0.6989
vn 0.9132 0.1516 -0.3783
vn -0.5491 0.1516 0.8219
vn 0.8219 0.1516 -0.5491
vn -0.3783 0.1516 0.9132
vn 0.6989 0.1516 -0.6989
vn -0.1928 0.1516 0.9694
vn 0.5491 0.1516 -0.8219
vn -0.0000 0.1516 0.9884
vn 0.3783 0.1516 -0.9132
vn 0.1928 0.1516 0.9694
vn 0.1928 0.1516 -0.9694
vn 0.3783 0.1516 0.9132
vn -0.6989 0.1516 -0.6989
vn -0.5491 0.1516 -0.8219
vn -0.3783 0.1516 -0.9132
vn -0.1928 0.1516 -0.9694
vn 0.7089 0.5226 0.4737
vn -0.7089 0.5226 -0.4737
vn 0.4737 0.5226 0.7089
vn -0.7877 0.5226 -0.3263
vn 0.6029 0.5226 0.6029
vn -0.8362 0.5226 -0.1663
vn -0.8526 0.5226 -0.0000
vn 0.7877 0.5226 0.3263
vn 0.8362 0.5226 0.1663
vn 0.8526 0.5226 -0.0000
vn 0.8362 0.5226 -0.1663
vn -0.8362 0.5226 0.1663
vn -0.7877 0.5226 0.3263
vn -0.7089 0.5226 0.4737
vn -0.6029 0.5226 0.6029
vn 0.7877 0.5226 -0.3263
vn -0.4737 0.5226 0.7089
vn 0.7089 0.5226 -0.4737
vn -0.3263 0.5226 0.7877
vn 0.6029 0.5226 -0.6029
vn -0.1663 0.5226 0.8362
vn 0.4737 0.5226 -0.7089
vn -0.0000 0.5226 0.8526
vn 0.3263 0.5226 -0.7877
vn 0.1663 0.5226 0.8362
vn 0.1663 0.5226 -0.8362
vn 0.3263 0.5226 0.7877
vn -0.6029 0.5226 -0.6029
vn -0.4737 0.5226 -0.7089
vn -0.3263 0.5226 -0.7877
vn -0.1663 0.5226 -0.8362
vn -0.0000 0.5226 -0.8526
vn 0.2608 0.9495 0.1742
vn 0.5784 0.7184 0.3865
vn -0.2608 0.9495 -0.1742
vn -0.5784 0.7184 -0.3865
vn 0.1742 0.9495 0.2608
vn 0.3865 0.7184 0.5784
vn -0.2898 0.9495 -0.1200
vn -0.6427 0.7184 -0.2662
vn 0.2218 0.9495 0.2218
vn 0.4919 0.7184 0.4919
vn -0.3076 0.9495 -0.0612
vn -0.6823 0.7184 -0.1357
vn -0.3136 0.9495 -0.0000
vn -0.6956 0.7184 -0.0000
vn 0.2898 0.9495 0.1200
vn 0.6427 0.7184 0.2662
vn 0.3076 0.9495 0.0612
vn 0.6823 0.7184 0.1357
vn 0.3136 0.9495 -0.0000
vn 0.6956 0.7184 -0.0000
vn 0.3076 0.9495 -0.0612
vn 0.6823 0.7184 -0.1357
vn -0.3076 0.9495 0.0612
vn -0.6823 0.7184 0.1357
vn -0.2898 0.9495 0.1200
vn -0.6427 0.7184 0.2662
vn -0.2608 0.9495 0.1742
vn -0.5784 0.7184 0.3865
vn -0.2218 0.9495 0.2218
vn -0.4919 0.7184 0.4919
vn 0.2898 0.9495 -0.1200
vn 0.6427 0.7184 -0.2662
vn -0.1742 0.9495 0.2608
vn -0.3865 0.7184 0.5784
vn 0.2608 0.9495 -0.1742
vn 0.5784 0.7184 -0.3865
vn -0.1200 0.9495 0.2898
vn -0.2662 0.7184 0.6427
vn 0.2218 0.9495 -0.2218
vn 0.4919 0.7184 -0.4919
vn -0.0612 0.9495 0.3076
vn -0.1357 0.7184 0.6823
vn 0.1742 0.9495 -0.2608
vn 0.3865 0.7184 -0.5784
vn -0.0000 0.9495 0.3136
vn -0.0000 0.7184 0.6956
vn 0.1200 0.9495 -0.2898
vn 0.2662 0.7184 -0.6427
vn 0.0612 0.9495 0.3076
vn 0.1357 0.7184 0.6823
vn 0.0612 0.9495 -0.3076
vn 0.1357 0.7184 -0.6823
vn 0.1200 0.9495 0.2898
vn 0.2662 0.7184 0.6427
vn -0.2218 0.9495 -0.2218
vn -0.4919 0.7184 -0.4919
vn -0.1742 0.9495 -0.2608
vn -0.3865 0.7184 -0.5784
vn -0.1200 0.9495 -0.2898
vn -0.2662 0.7184 -0.6427
vn -0.0612 0.9495 -0.3076
vn -0.1357 0.7184 -0.6823
vn -0.0000 0.7184 -0.6956
vn -0.0000 0.9495 -0.3136
vt 1.001143 0.036620
vt 0.969870 0.036620
vt 0.969870 0.018762
vt 1.001143 0.018762
vt 0.438245 0.036620
vt 0.438245 0.054478
vt 0.406973 0.054478
vt 0.406973 0.036620
vt 0.438245 0.072336
vt 0.406973 0.072336
vt 0.438245 0.590215
vt 0.406973 0.590215
vt 0.438245 0.608073
vt 0.406973 0.608073
vt 0.438245 0.677251
vt 0.406973 0.677251
vt 0.438245 0.947373
vt 0.438245 0.950945
vt 0.406973 0.950945
vt 0.406973 0.947373
vt 0.031708 0.036620
vt 0.000436 0.036620
vt 0.000436 0.018762
vt 0.031708 0.018762
vt 0.125524 0.036620
vt 0.094252 0.036620
vt 0.094252 0.018762
vt 0.125524 0.018762
vt 0.688422 0.036620
vt 0.657150 0.036620
vt 0.657150 0.018762
vt 0.688422 0.018762
vt 0.062980 0.677251
vt 0.062980 0.608073
vt 0.094252 0.608073
vt 0.094252 0.677251
vt 0.062980 0.590215
vt 0.094252 0.590215
vt 0.062980 0.072336
vt 0.094252 0.072336
vt 0.062980 0.054478
vt 0.094252 0.054478
vt 0.062980 0.036620
vt 0.688422 0.590215
vt 0.657150 0.590215
vt 0.657150 0.072336
vt 0.688422 0.072336
vt 0.281884 0.608073
vt 0.281885 0.677251
vt 0.250613 0.677251
vt 0.250613 0.608073
vt 0.281884 0.950945
vt 0.250613 0.950945
vt 0.250613 0.947373
vt 0.281884 0.947373
vt 0.876054 0.036620
vt 0.844782 0.036620
vt 0.844782 0.018762
vt 0.876054 0.018762
vt 0.281884 0.054478
vt 0.250613 0.054478
vt 0.250613 0.036620
vt 0.281884 0.036620
vt 0.281884 0.072336
vt 0.250613 0.072336
vt 0.813510 0.677251
vt 0.813510 0.608073
vt 0.844782 0.608073
vt 0.844782 0.677251
vt 0.250613 0.590215
vt 0.281884 0.590215
vt 0.625877 0.036620
vt 0.625877 0.018762
vt 0.031708 0.608073
vt 0.000436 0.608073
vt 0.000436 0.590215
vt 0.031708 0.590215
vt 0.031708 0.677251
vt 0.000436 0.677252
vt 0.031708 0.950945
vt 0.000436 0.950945
vt 0.000436 0.947374
vt 0.031708 0.947373
vt 0.594605 0.036620
vt 0.594605 0.018762
vt 0.031708 0.054478
vt 0.000436 0.054478
vt 0.031708 0.072336
vt 0.000436 0.072336
vt 0.563333 0.950945
vt 0.563333 0.947373
vt 0.594606 0.947373
vt 0.594605 0.950945
vt 0.125524 0.608073
vt 0.125524 0.590215
vt 0.125524 0.677251
vt 0.125524 0.950945
vt 0.094252 0.950945
vt 0.094252 0.947373
vt 0.125524 0.947373
vt 0.719694 0.036620
vt 0.719694 0.018762
vt 0.125524 0.054478
vt 0.062980 0.947373
vt 0.062980 0.950945
vt 0.594606 0.677251
vt 0.594606 0.608073
vt 0.625878 0.608073
vt 0.625878 0.677251
vt 0.156796 0.054478
vt 0.156796 0.036620
vt 0.156796 0.072336
vt 0.125524 0.072336
vt 0.156796 0.590215
vt 0.156796 0.608073
vt 0.156796 0.677251
vt 0.188068 0.036620
vt 0.156796 0.018762
vt 0.188068 0.018762
vt 0.219340 0.677251
vt 0.219340 0.608073
vt 0.219340 0.950945
vt 0.219340 0.947373
vt 0.156796 0.950945
vt 0.156796 0.947373
vt 0.188068 0.054478
vt 0.188068 0.072336
vt 0.188068 0.590215
vt 0.188068 0.608073
vt 0.188068 0.677251
vt 0.188068 0.950945
vt 0.188068 0.947373
vt 0.219340 0.036620
vt 0.219340 0.018762
vt 0.719694 0.590215
vt 0.719694 0.072336
vt 0.219340 0.072336
vt 0.219340 0.590215
vt 0.219340 0.054478
vt 0.250613 0.018762
vt 0.313157 0.054478
vt 0.313157 0.036620
vt 0.313157 0.072336
vt 0.313157 0.590215
vt 0.313157 0.608073
vt 0.313157 0.677251
vt 0.844782 0.950945
vt 0.844782 0.947373
vt 0.876054 0.947373
vt 0.876054 0.950945
vt 0.469517 0.018762
vt 0.438245 0.018762
vt 0.438245 0.000904
vt 0.469517 0.000904
vt 0.500789 0.018762
vt 0.500789 0.000904
vt 0.532061 0.018762
vt 0.532061 0.000904
vt 0.563333 0.018762
vt 0.563333 0.000904
vt 0.594605 0.000904
vt 0.625877 0.000904
vt 0.657150 0.000904
vt 0.688422 0.000904
vt 0.719694 0.000904
vt 0.750966 0.018762
vt 0.750966 0.000904
vt 0.782238 0.018762
vt 0.782238 0.000904
vt 0.813510 0.018762
vt 0.813510 0.000904
vt 0.844782 0.000904
vt 0.876054 0.000904
vt 0.907326 0.018762
vt 0.907326 0.000904
vt 0.938598 0.018762
vt 0.938598 0.000904
vt 0.969870 0.000904
vt 1.001143 0.000904
vt 0.000436 0.000904
vt 0.031708 0.000904
vt 0.062980 0.018762
vt 0.062980 0.000904
vt 0.094252 0.000904
vt 0.125524 0.000904
vt 0.156796 0.000904
vt 0.188068 0.000904
vt 0.219340 0.000904
vt 0.250613 0.000904
vt 0.281884 0.018762
vt 0.281884 0.000904
vt 0.313157 0.018762
vt 0.313157 0.000904
vt 0.344429 0.018762
vt 0.344429 0.000904
vt 0.375701 0.018762
vt 0.375701 0.000904
vt 0.907326 0.590215
vt 0.876054 0.590215
vt 0.876054 0.072336
vt 0.907326 0.072336
vt 0.344429 0.072336
vt 0.344429 0.054478
vt 0.344429 0.590215
vt 0.344429 0.608073
vt 0.344429 0.677251
vt 0.344429 0.950945
vt 0.313157 0.950945
vt 0.313157 0.947373
vt 0.344429 0.947373
vt 0.938598 0.036620
vt 0.907326 0.036620
vt 0.375701 0.054478
vt 0.344429 0.036620
vt 0.375701 0.036620
vt 0.375701 0.072336
vt 0.938598 0.590215
vt 0.938598 0.072336
vt 0.375701 0.608073
vt 0.375701 0.590215
vt 0.406973 0.018762
vt 0.406973 0.000904
vt 0.375701 0.677251
vt 0.375701 0.947373
vt 0.375701 0.950945
vt 0.938598 0.677251
vt 0.938598 0.608073
vt 0.969870 0.608073
vt 0.969871 0.677251
vt 0.969871 0.724065
vt 1.001143 0.724065
vt 1.001143 0.911657
vt 0.969871 0.911657
vt 1.001143 0.608073
vt 1.001143 0.677251
vt 0.969870 0.590215
vt 1.001143 0.590215
vt 0.969870 0.072336
vt 1.001143 0.072336
vt 0.969870 0.054478
vt 1.001143 0.054478
vt 0.938598 0.724065
vt 0.938598 0.911657
vt 0.938598 0.054478
vt 0.907326 0.724065
vt 0.907326 0.911657
vt 0.907326 0.677251
vt 0.907326 0.608073
vt 0.907326 0.054478
vt 0.876054 0.724065
vt 0.876054 0.911657
vt 0.876054 0.677251
vt 0.876054 0.608073
vt 0.876054 0.054478
vt 0.844782 0.724065
vt 0.844782 0.911657
vt 0.844782 0.590215
vt 0.844782 0.072336
vt 0.844782 0.054478
vt 0.813510 0.724065
vt 0.813510 0.911657
vt 0.813510 0.590215
vt 0.813510 0.072336
vt 0.813510 0.054478
vt 0.813510 0.036620
vt 0.782238 0.724065
vt 0.782238 0.911657
vt 0.782238 0.677251
vt 0.782238 0.608073
vt 0.782238 0.590215
vt 0.782238 0.072336
vt 0.782238 0.054478
vt 0.782238 0.036620
vt 0.750966 0.724065
vt 0.750966 0.911657
vt 0.750966 0.677251
vt 0.750966 0.608073
vt 0.750966 0.590215
vt 0.750966 0.072336
vt 0.750966 0.054478
vt 0.750966 0.036620
vt 0.719694 0.724065
vt 0.719694 0.911657
vt 0.719694 0.677251
vt 0.719694 0.608073
vt 0.719694 0.054478
vt 0.688422 0.724065
vt 0.688422 0.911657
vt 0.688422 0.677251
vt 0.688422 0.608073
vt 0.688422 0.054478
vt 0.657150 0.724065
vt 0.657150 0.911657
vt 0.657150 0.677251
vt 0.657150 0.608073
vt 0.657150 0.054478
vt 0.625878 0.724065
vt 0.625878 0.911657
vt 0.625878 0.590215
vt 0.625877 0.072336
vt 0.625877 0.054478
vt 0.594606 0.724065
vt 0.594606 0.911657
vt 0.594606 0.590215
vt 0.594605 0.072336
vt 0.594605 0.054478
vt 0.563333 0.911657
vt 0.563333 0.608073
vt 0.563333 0.590215
vt 0.563333 0.072336
vt 0.563333 0.054478
vt 0.563333 0.036620
vt 0.532061 0.950945
vt 0.532061 0.947373
vt 0.532061 0.911657
vt 0.532061 0.608073
vt 0.532061 0.590215
vt 0.532061 0.072336
vt 0.532061 0.054478
vt 0.532061 0.036620
vt 0.500789 0.950945
vt 0.500789 0.947373
vt 0.500789 0.911657
vt 0.500789 0.608073
vt 0.500789 0.590215
vt 0.500789 0.072336
vt 0.500789 0.054478
vt 0.500789 0.036620
vt 0.469517 0.950945
vt 0.469517 0.947373
vt 0.469517 0.911657
vt 0.469517 0.608073
vt 0.469517 0.590215
vt 0.469517 0.072336
vt 0.469517 0.054478
vt 0.469517 0.036620
vt 0.438245 0.911657
vt 0.031708 0.911658
vt 0.000436 0.911658
vt 0.000436 0.724065
vt 0.031708 0.724065
vt 0.563333 0.724065
vt 0.563333 0.708460
vt 0.594606 0.708460
vt 0.000436 0.708461
vt 0.031708 0.708461
vt 0.438245 0.724065
vt 0.469517 0.724065
vt 0.500789 0.724065
vt 0.532061 0.724065
vt 0.062980 0.724065
vt 0.062980 0.708461
vt 0.094252 0.708460
vt 0.094252 0.724065
vt 0.125524 0.724065
vt 0.125524 0.708460
vt 0.750966 0.708460
vt 0.719694 0.708460
vt 0.782238 0.708460
vt 0.813510 0.708460
vt 0.844782 0.708460
vt 0.250613 0.724065
vt 0.250613 0.708460
vt 0.281885 0.708460
vt 0.281885 0.724065
vt 0.313157 0.724065
vt 0.313157 0.708460
vt 0.344429 0.724065
vt 0.344429 0.708460
vt 0.375701 0.708460
vt 0.375701 0.724065
vt 1.001143 0.708460
vt 0.969871 0.708460
vt 0.406973 0.724065
vt 0.406973 0.708460
vt 0.438245 0.708460
vt 0.907326 0.708460
vt 0.876054 0.708460
vt 0.406973 0.911657
vt 0.375701 0.911657
vt 0.344429 0.911657
vt 0.313157 0.911657
vt 0.062980 0.911658
vt 0.688422 0.708460
vt 0.219340 0.911657
vt 0.188068 0.911657
vt 0.188068 0.724065
vt 0.219340 0.724065
vt 0.250613 0.911657
vt 0.156796 0.724065
vt 0.156796 0.708460
vt 0.188068 0.708460
vt 0.281884 0.911657
vt 0.657150 0.708460
vt 0.625878 0.708460
vt 0.156796 0.911657
vt 0.094252 0.911657
vt 0.125524 0.911657
vt 0.062980 0.954516
vt 0.094252 0.954516
vt 0.094252 1.000947
vt 0.062980 1.000947
vt 0.563333 0.677251
vt 0.469517 0.677251
vt 0.469517 0.708460
vt 0.500789 0.677251
vt 0.500789 0.708460
vt 0.532061 0.677251
vt 0.532061 0.708460
vt 0.938598 0.708460
vt 0.219340 0.708460
vt 0.625878 0.947373
vt 0.625878 0.950945
vt 0.657150 0.947373
vt 0.657150 0.950945
vt 0.688422 0.947373
vt 0.688422 0.950945
vt 0.719694 0.947373
vt 0.719694 0.950945
vt 0.750966 0.947373
vt 0.750966 0.950945
vt 0.782238 0.947373
vt 0.782238 0.950945
vt 0.813510 0.947373
vt 0.813510 0.950945
vt 0.907326 0.947373
vt 0.907326 0.950945
vt 0.938598 0.947373
vt 0.938598 0.950945
vt 0.969871 0.947373
vt 0.969871 0.950945
vt 1.001143 0.947373
vt 1.001143 0.950945
vt 0.563333 0.954516
vt 0.594605 0.954516
vt 0.594605 1.000947
vt 0.563333 1.000947
vt 0.438245 0.954516
vt 0.406973 0.954516
vt 0.469517 0.954516
vt 0.500789 0.954516
vt 0.469517 1.000947
vt 0.438245 1.000947
vt 0.532061 0.954516
vt 0.500789 1.000947
vt 0.532061 1.000947
vt 0.625878 0.954516
vt 0.031708 0.954516
vt 0.031708 1.000947
vt 0.657150 0.954516
vt 0.688422 0.954516
vt 0.688422 1.000947
vt 0.657150 1.000947
vt 0.125524 0.954516
vt 0.125524 1.000947
vt 0.719694 0.954516
vt 0.750966 0.954516
vt 0.750966 1.000947
vt 0.719694 1.000947
vt 0.782238 0.954516
vt 0.782238 1.000947
vt 0.813510 0.954516
vt 0.813510 1.000947
vt 0.844782 0.954516
vt 0.844782 1.000947
vt 0.250613 1.000947
vt 0.250613 0.954516
vt 0.281884 0.954516
vt 0.281884 1.000947
vt 0.876054 0.954516
vt 0.313157 0.954516
vt 0.313157 1.000947
vt 0.907326 0.954516
vt 0.344429 0.954516
vt 0.344429 1.000947
vt 0.938598 0.954516
vt 0.375701 0.954516
vt 0.375701 1.000947
vt 0.969871 0.954516
vt 0.406973 1.000947
vt 1.001143 0.954516
vt 0.907326 1.000947
vt 0.876054 1.000947
vt 1.001143 1.000947
vt 0.969871 1.000947
vt 0.938598 1.000947
vt 0.000436 0.954517
vt 0.625878 1.000947
vt 0.219340 0.954516
vt 0.188068 0.954516
vt 0.219340 1.000947
vt 0.156796 0.954516
vt 0.188068 1.000947
vt 0.156796 1.000947
vt 0.000436 1.000947
s 1
usemtl Material.003
f 881/67/817 889/68/825 890/69/826 882/70/818
f 1020/71/956 1021/72/957 869/73/805 868/74/804
f 1021/72/957 1022/75/958 870/76/806 869/73/805
f 1022/75/958 1023/77/959 871/78/807 870/76/806
f 1023/77/959 1024/79/960 872/80/808 871/78/807
f 1024/79/960 1122/81/1058 1116/82/1052 872/80/808
f 1026/83/962 1185/84/1121 1174/85/1110 874/86/810
f 772/87/708 881/88/817 882/89/818 771/90/707
f 796/91/732 788/92/724 787/93/723 795/94/731
f 961/95/897 969/96/905 970/97/906 962/98/898
f 1095/99/1031 784/100/720 792/101/728 1091/102/1027
f 792/101/728 784/100/720 783/103/719 791/104/727
f 791/104/727 783/103/719 782/105/718 790/106/726
f 790/106/726 782/105/718 781/107/717 789/108/725
f 789/108/725 781/107/717 780/109/716 788/92/724
f 958/110/894 966/111/902 967/112/903 959/113/895
f 840/114/776 1108/115/1044 1106/116/1042 832/117/768
f 1158/118/1094 1154/119/1090 834/120/770 842/121/778
f 913/122/849 921/123/857 922/124/858 914/125/850
f 837/126/773 829/127/765 828/128/764 836/129/772
f 838/130/774 830/131/766 829/127/765 837/126/773
f 1105/132/1041 925/133/861 917/134/853 1107/135/1043
f 840/114/776 832/117/768 831/136/767 839/137/775
f 969/96/905 977/138/913 978/139/914 970/97/906
f 776/140/712 877/141/813 878/142/814 775/143/711
f 1093/144/1029 1117/145/1053 877/141/813 776/140/712
f 1128/146/1064 1176/147/1112 875/148/811 778/149/714
f 977/138/913 985/150/921 986/151/922 978/139/914
f 773/152/709 880/153/816 881/88/817 772/87/708
f 774/154/710 879/155/815 880/153/816 773/152/709
f 775/143/711 878/142/814 879/155/815 774/154/710
f 1178/156/1114 987/157/923 979/158/915 1126/159/1062
f 800/160/736 792/101/728 791/104/727 799/161/735
f 800/160/736 1098/162/1034 1091/102/1027 792/101/728
f 1138/163/1074 1124/164/1060 794/165/730 802/166/738
f 953/167/889 961/95/897 962/98/898 954/168/890
f 797/169/733 789/108/725 788/92/724 796/91/732
f 784/100/720 1095/99/1031 1093/144/1029 776/140/712
f 1128/146/1064 778/149/714 786/170/722 1132/171/1068
f 781/107/717 773/152/709 772/87/708 780/109/716
f 782/105/718 774/154/710 773/152/709 781/107/717
f 1092/172/1028 981/173/917 973/174/909 1094/175/1030
f 784/100/720 776/140/712 775/143/711 783/103/719
f 805/176/741 797/169/733 796/91/732 804/177/740
f 806/178/742 798/179/734 797/169/733 805/176/741
f 807/180/743 799/161/735 798/179/734 806/178/742
f 808/181/744 800/160/736 799/161/735 807/180/743
f 1099/182/1035 1098/162/1034 800/160/736 808/181/744
f 812/183/748 804/177/740 803/184/739 811/185/747
f 1101/186/1037 824/187/760 832/117/768 1106/116/1042
f 1144/188/1080 826/189/762 834/120/770 1154/119/1090
f 1140/190/1076 1138/163/1074 802/166/738 810/191/746
f 813/192/749 805/176/741 804/177/740 812/183/748
f 814/193/750 815/194/751 807/180/743 806/178/742
f 816/195/752 808/181/744 807/180/743 815/194/751
f 1100/196/1036 1099/182/1035 808/181/744 816/195/752
f 1142/197/1078 1140/190/1076 810/191/746 818/198/754
f 814/193/750 806/178/742 805/176/741 813/192/749
f 820/199/756 812/183/748 811/185/747 819/200/755
f 950/201/886 958/110/894 959/113/895 951/202/887
f 822/203/758 823/204/759 815/194/751 814/193/750
f 821/205/757 813/192/749 812/183/748 820/199/756
f 822/203/758 814/193/750 813/192/749 821/205/757
f 824/187/760 816/195/752 815/194/751 823/204/759
f 1101/186/1037 1100/196/1036 816/195/752 824/187/760
f 1142/197/1078 818/198/754 826/189/762 1144/188/1080
f 828/128/764 820/199/756 819/200/755 827/206/763
f 832/117/768 824/187/760 823/204/759 831/136/767
f 829/127/765 821/205/757 820/199/756 828/128/764
f 830/131/766 822/203/758 821/205/757 829/127/765
f 831/136/767 823/204/759 822/203/758 830/131/766
f 845/207/781 837/126/773 836/129/772 844/208/780
f 846/209/782 838/130/774 837/126/773 845/207/781
f 846/209/782 847/210/783 839/137/775 838/130/774
f 848/211/784 840/114/776 839/137/775 847/210/783
f 848/211/784 1110/212/1046 1108/115/1044 840/114/776
f 1156/213/1092 915/214/851 907/215/843 1160/216/1096
f 798/179/734 790/106/726 789/108/725 797/169/733
f 1018/217/954 1019/218/955 707/219/643 769/220/705
f 1010/221/946 1018/217/954 769/220/705 767/222/703
f 1002/223/938 1010/221/946 767/222/703 765/224/701
f 994/225/930 1002/223/938 765/224/701 763/226/699
f 986/151/922 994/225/930 763/226/699 761/227/697
f 978/139/914 986/151/922 761/227/697 759/228/695
f 970/97/906 978/139/914 759/228/695 757/229/693
f 962/98/898 970/97/906 757/229/693 755/230/691
f 954/168/890 962/98/898 755/230/691 753/231/689
f 946/232/882 954/168/890 753/231/689 751/233/687
f 938/234/874 946/232/882 751/233/687 749/235/685
f 930/236/866 938/234/874 749/235/685 747/237/683
f 922/124/858 930/236/866 747/237/683 745/238/681
f 914/125/850 922/124/858 745/238/681 743/239/679
f 906/240/842 914/125/850 743/239/679 741/241/677
f 898/242/834 906/240/842 741/241/677 739/243/675
f 890/69/826 898/242/834 739/243/675 737/244/673
f 882/70/818 890/69/826 737/244/673 735/245/671
f 771/90/707 882/89/818 735/246/671 733/247/669
f 779/248/715 771/90/707 733/247/669 731/249/667
f 787/93/723 779/248/715 731/249/667 729/250/665
f 795/94/731 787/93/723 729/250/665 727/251/663
f 803/184/739 795/94/731 727/251/663 725/252/661
f 811/185/747 803/184/739 725/252/661 723/253/659
f 819/200/755 811/185/747 723/253/659 721/254/657
f 827/206/763 819/200/755 721/254/657 719/255/655
f 835/256/771 827/206/763 719/255/655 717/257/653
f 843/258/779 835/256/771 717/257/653 715/259/651
f 851/260/787 843/258/779 715/259/651 713/261/649
f 859/262/795 851/260/787 713/261/649 711/263/647
f 902/264/838 910/265/846 911/266/847 903/267/839
f 854/268/790 846/209/782 845/207/781 853/269/789
f 855/270/791 847/210/783 846/209/782 854/268/790
f 856/271/792 848/211/784 847/210/783 855/270/791
f 1112/272/1048 1110/212/1046 848/211/784 856/271/792
f 1166/273/1102 1162/274/1098 850/275/786 858/276/794
f 897/277/833 905/278/841 906/240/842 898/242/834
f 861/279/797 853/269/789 852/280/788 860/281/796
f 862/282/798 854/268/790 853/269/789 861/279/797
f 894/283/830 902/264/838 903/267/839 895/284/831
f 864/285/800 856/271/792 855/270/791 863/286/799
f 867/287/803 859/262/795 711/263/647 709/288/645
f 1112/272/1048 856/271/792 864/285/800 1114/289/1050
f 1166/273/1102 858/276/794 866/290/802 1170/291/1106
f 889/68/825 897/277/833 898/242/834 890/69/826
f 869/73/805 861/279/797 860/281/796 868/74/804
f 870/76/806 862/282/798 861/279/797 869/73/805
f 871/78/807 863/286/799 862/282/798 870/76/806
f 872/80/808 864/285/800 863/286/799 871/78/807
f 1116/82/1052 1114/289/1050 864/285/800 872/80/808
f 1113/292/1049 893/293/829 885/294/821 1115/295/1051
f 852/280/788 844/208/780 843/258/779 851/260/787
f 1019/218/955 1020/71/956 868/74/804 867/287/803
f 1051/296/987 1053/297/989 876/298/812 884/299/820
f 1115/295/1051 885/294/821 877/300/813 1117/301/1053
f 877/300/813 885/294/821 886/302/822 878/303/814
f 878/303/814 886/302/822 887/304/823 879/305/815
f 879/305/815 887/304/823 888/306/824 880/307/816
f 880/307/816 888/306/824 889/68/825 881/67/817
f 1170/291/1106 866/290/802 874/86/810 1174/85/1110
f 1049/308/985 1051/296/987 884/299/820 892/309/828
f 868/74/804 860/281/796 859/262/795 867/287/803
f 885/294/821 893/293/829 894/283/830 886/302/822
f 886/302/822 894/283/830 895/284/831 887/304/823
f 887/304/823 895/284/831 896/310/832 888/306/824
f 888/306/824 896/310/832 897/277/833 889/68/825
f 863/286/799 855/270/791 854/268/790 862/282/798
f 1047/311/983 1049/308/985 892/309/828 900/312/836
f 1111/313/1047 901/314/837 893/293/829 1113/292/1049
f 893/293/829 901/314/837 902/264/838 894/283/830
f 860/281/796 852/280/788 851/260/787 859/262/795
f 895/284/831 903/267/839 904/315/840 896/310/832
f 896/310/832 904/315/840 905/278/841 897/277/833
f 853/269/789 845/207/781 844/208/780 852/280/788
f 1045/316/981 1047/311/983 900/312/836 908/317/844
f 1109/318/1045 909/319/845 901/314/837 1111/313/1047
f 901/314/837 909/319/845 910/265/846 902/264/838
f 1158/118/1094 842/121/778 850/275/786 1162/274/1098
f 903/267/839 911/266/847 912/320/848 904/315/840
f 904/315/840 912/320/848 913/122/849 905/278/841
f 905/278/841 913/122/849 914/125/850 906/240/842
f 1043/321/979 1045/316/981 908/317/844 916/322/852
f 1107/135/1043 917/134/853 909/319/845 1109/318/1045
f 909/319/845 917/134/853 918/323/854 910/265/846
f 910/265/846 918/323/854 919/324/855 911/266/847
f 911/266/847 919/324/855 920/325/856 912/320/848
f 912/320/848 920/325/856 921/123/857 913/122/849
f 839/137/775 831/136/767 830/131/766 838/130/774
f 1041/326/977 1043/321/979 916/322/852 924/327/860
f 836/129/772 828/128/764 827/206/763 835/256/771
f 917/134/853 925/133/861 926/328/862 918/323/854
f 918/323/854 926/328/862 927/329/863 919/324/855
f 919/324/855 927/329/863 928/330/864 920/325/856
f 920/325/856 928/330/864 929/331/865 921/123/857
f 921/123/857 929/331/865 930/236/866 922/124/858
f 1040/332/976 1041/326/977 924/327/860 932/333/868
f 1104/334/1040 933/335/869 925/133/861 1105/132/1041
f 925/133/861 933/335/869 934/336/870 926/328/862
f 926/328/862 934/336/870 935/337/871 927/329/863
f 927/329/863 935/337/871 936/338/872 928/330/864
f 928/330/864 936/338/872 937/339/873 929/331/865
f 929/331/865 937/339/873 938/234/874 930/236/866
f 1039/340/975 1040/332/976 932/333/868 940/341/876
f 1103/342/1039 941/343/877 933/335/869 1104/334/1040
f 933/335/869 941/343/877 942/344/878 934/336/870
f 934/336/870 942/344/878 943/345/879 935/337/871
f 935/337/871 943/345/879 944/346/880 936/338/872
f 936/338/872 944/346/880 945/347/881 937/339/873
f 937/339/873 945/347/881 946/232/882 938/234/874
f 1038/348/974 1039/340/975 940/341/876 948/349/884
f 1102/350/1038 949/351/885 941/343/877 1103/342/1039
f 941/343/877 949/351/885 950/201/886 942/344/878
f 942/344/878 950/201/886 951/202/887 943/345/879
f 943/345/879 951/202/887 952/352/888 944/346/880
f 944/346/880 952/352/888 953/167/889 945/347/881
f 945/347/881 953/167/889 954/168/890 946/232/882
f 1033/353/969 1038/348/974 948/349/884 956/354/892
f 1097/355/1033 957/356/893 949/351/885 1102/350/1038
f 949/351/885 957/356/893 958/110/894 950/201/886
f 804/177/740 796/91/732 795/94/731 803/184/739
f 951/202/887 959/113/895 960/357/896 952/352/888
f 952/352/888 960/357/896 961/95/897 953/167/889
f 799/161/735 791/104/727 790/106/726 798/179/734
f 1032/358/968 1033/353/969 956/354/892 964/359/900
f 1096/360/1032 965/361/901 957/356/893 1097/355/1033
f 957/356/893 965/361/901 966/111/902 958/110/894
f 707/219/643 1019/218/955 867/287/803 709/288/645
f 959/113/895 967/112/903 968/362/904 960/357/896
f 960/357/896 968/362/904 969/96/905 961/95/897
f 788/92/724 780/109/716 779/248/715 787/93/723
f 1030/363/966 1032/358/968 964/359/900 972/364/908
f 1094/175/1030 973/174/909 965/361/901 1096/360/1032
f 965/361/901 973/174/909 974/365/910 966/111/902
f 966/111/902 974/365/910 975/366/911 967/112/903
f 967/112/903 975/366/911 976/367/912 968/362/904
f 968/362/904 976/367/912 977/138/913 969/96/905
f 783/103/719 775/143/711 774/154/710 782/105/718
f 1028/368/964 1030/363/966 972/364/908 980/369/916
f 780/109/716 772/87/708 771/90/707 779/248/715
f 973/174/909 981/173/917 982/370/918 974/365/910
f 974/365/910 982/370/918 983/371/919 975/366/911
f 975/366/911 983/371/919 984/372/920 976/367/912
f 976/367/912 984/372/920 985/150/921 977/138/913
f 980/369/916 979/158/915 987/157/923 988/373/924
f 981/173/917 989/374/925 990/375/926 982/370/918
f 990/375/926 991/376/927 983/371/919 982/370/918
f 983/371/919 991/376/927 992/377/928 984/372/920
f 984/372/920 992/377/928 993/378/929 985/150/921
f 985/150/921 993/378/929 994/225/930 986/151/922
f 1180/379/1116 995/380/931 987/157/923 1178/156/1114
f 988/373/924 987/157/923 995/380/931 996/381/932
f 989/374/925 997/382/933 998/383/934 990/375/926
f 998/383/934 999/384/935 991/376/927 990/375/926
f 991/376/927 999/384/935 1000/385/936 992/377/928
f 992/377/928 1000/385/936 1001/386/937 993/378/929
f 993/378/929 1001/386/937 1002/223/938 994/225/930
f 1182/387/1118 1003/388/939 995/380/931 1180/379/1116
f 996/381/932 995/380/931 1003/388/939 1004/389/940
f 997/382/933 1005/390/941 1006/391/942 998/383/934
f 1006/391/942 1007/392/943 999/384/935 998/383/934
f 999/384/935 1007/392/943 1008/393/944 1000/385/936
f 1000/385/936 1008/393/944 1009/394/945 1001/386/937
f 1001/386/937 1009/394/945 1010/221/946 1002/223/938
f 1184/395/1120 1011/396/947 1003/388/939 1182/387/1118
f 1004/389/940 1003/388/939 1011/396/947 1012/397/948
f 1005/390/941 1013/398/949 1014/399/950 1006/391/942
f 1014/399/950 1015/400/951 1007/392/943 1006/391/942
f 1007/392/943 1015/400/951 1016/401/952 1008/393/944
f 1008/393/944 1016/401/952 1017/402/953 1009/394/945
f 1009/394/945 1017/402/953 1018/217/954 1010/221/946
f 1185/84/1121 1026/83/962 1011/396/947 1184/395/1120
f 1012/397/948 1011/396/947 1026/83/962 1025/403/961
f 1013/398/949 1024/79/960 1023/77/959 1014/399/950
f 1014/399/950 1023/77/959 1022/75/958 1015/400/951
f 1015/400/951 1022/75/958 1021/72/957 1016/401/952
f 1016/401/952 1021/72/957 1020/71/956 1017/402/953
f 1017/402/953 1020/71/956 1019/218/955 1018/217/954
f 777/404/713 876/405/812 1053/406/989 1029/407/965
f 1054/408/990 1028/368/964 980/369/916 988/373/924
f 1054/408/990 1087/409/1023 1061/410/997 1028/368/964
f 1086/411/1022 1117/145/1053 1093/144/1029 1062/412/998
f 1029/407/965 1053/406/989 1086/411/1022 1062/412/998
f 1058/413/994 1057/414/993 1012/397/948 1025/403/961
f 1057/414/993 1056/415/992 1004/389/940 1012/397/948
f 1056/415/992 1055/416/991 996/381/932 1004/389/940
f 1055/416/991 1054/408/990 988/373/924 996/381/932
f 1031/417/967 1029/407/965 1062/412/998 1064/418/1000
f 1060/419/996 1027/420/963 1031/417/967 1064/418/1000
f 1034/421/970 1027/420/963 1060/419/996 1067/422/1003
f 1072/423/1008 1039/340/975 1038/348/974 1071/424/1007
f 1073/425/1009 1040/332/976 1039/340/975 1072/423/1008
f 1074/426/1010 1041/326/977 1040/332/976 1073/425/1009
f 1076/427/1012 1043/321/979 1041/326/977 1074/426/1010
f 1042/428/978 1075/429/1011 1077/430/1013 1044/431/980
f 1046/432/982 1044/431/980 1077/430/1013 1079/433/1015
f 1048/434/984 1046/432/982 1079/433/1015 1081/435/1017
f 1048/434/984 1081/435/1017 1083/436/1019 1050/437/986
f 1086/438/1022 1053/297/989 1051/296/987 1084/439/1020
f 1058/413/994 1052/440/988 1085/441/1021 1059/442/995
f 1080/443/1016 1047/311/983 1045/316/981 1078/444/1014
f 1058/413/994 1025/403/961 873/445/809 1052/440/988
f 873/445/809 865/446/801 1050/437/986 1052/440/988
f 865/446/801 857/447/793 1048/434/984 1050/437/986
f 857/447/793 849/448/785 1046/432/982 1048/434/984
f 1031/417/967 785/449/721 777/404/713 1029/407/965
f 1071/424/1007 1038/348/974 1033/353/969 1066/450/1002
f 825/451/761 817/452/753 1036/453/972 1037/454/973
f 833/455/769 825/451/761 1037/454/973 1042/428/978
f 1036/453/972 1035/456/971 1068/457/1004 1069/458/1005
f 841/459/777 833/455/769 1042/428/978 1044/431/980
f 1035/456/971 1034/421/970 1067/422/1003 1068/457/1004
f 1065/460/1001 1032/358/968 1030/363/966 1063/461/999
f 809/462/745 1035/456/971 1036/453/972 817/452/753
f 1031/417/967 1027/420/963 793/463/729 785/449/721
f 809/462/745 801/464/737 1034/421/970 1035/456/971
f 1066/450/1002 1033/353/969 1032/358/968 1065/460/1001
f 1046/432/982 849/448/785 841/459/777 1044/431/980
f 1066/450/1002 1065/460/1001 1096/360/1032 1097/355/1033
f 1065/460/1001 1063/461/999 1094/175/1030 1096/360/1032
f 1067/422/1003 1098/162/1034 1099/182/1035 1068/457/1004
f 1068/457/1004 1099/182/1035 1100/196/1036 1069/458/1005
f 1071/424/1007 1066/450/1002 1097/355/1033 1102/350/1038
f 1080/443/1016 1078/444/1014 1109/318/1045 1111/313/1047
f 1085/441/1021 1116/82/1052 1122/81/1058 1059/442/995
f 1086/438/1022 1084/439/1020 1115/295/1051 1117/301/1053
f 1112/272/1048 1114/289/1050 1083/436/1019 1081/435/1017
f 1079/433/1015 1110/212/1046 1112/272/1048 1081/435/1017
f 1077/430/1013 1108/115/1044 1110/212/1046 1079/433/1015
f 1106/116/1042 1108/115/1044 1077/430/1013 1075/429/1011
f 1076/427/1012 1074/426/1010 1105/132/1041 1107/135/1043
f 1074/426/1010 1073/425/1009 1104/334/1040 1105/132/1041
f 1073/425/1009 1072/423/1008 1103/342/1039 1104/334/1040
f 1072/423/1008 1071/424/1007 1102/350/1038 1103/342/1039
f 1060/419/996 1091/102/1027 1098/162/1034 1067/422/1003
f 1060/419/996 1064/418/1000 1095/99/1031 1091/102/1027
f 1062/412/998 1093/144/1029 1095/99/1031 1064/418/1000
f 1131/465/1067 1123/466/1059 730/467/666 732/468/668
f 1118/469/1054 1092/172/1028 1061/410/997 1087/409/1023
f 1122/81/1058 1121/470/1057 1090/471/1026 1059/442/995
f 1121/470/1057 1120/472/1056 1089/473/1025 1090/471/1026
f 1120/472/1056 1119/474/1055 1088/475/1024 1089/473/1025
f 1119/474/1055 1118/469/1054 1087/409/1023 1088/475/1024
f 1084/439/1020 1082/476/1018 1113/292/1049 1115/295/1051
f 1083/436/1019 1114/289/1050 1116/82/1052 1085/441/1021
f 1082/476/1018 1080/443/1016 1111/313/1047 1113/292/1049
f 1063/461/999 1061/410/997 1092/172/1028 1094/175/1030
f 1069/458/1005 1100/196/1036 1101/186/1037 1070/477/1006
f 1101/186/1037 1106/116/1042 1075/429/1011 1070/477/1006
f 1078/444/1014 1076/427/1012 1107/135/1043 1109/318/1045
f 1126/159/1062 979/158/915 971/478/907 1130/479/1066
f 1130/479/1066 971/478/907 963/480/899 1134/481/1070
f 1134/481/1070 963/480/899 955/482/891 1136/483/1072
f 1136/483/1072 955/482/891 947/484/883 1146/485/1082
f 1146/485/1082 947/484/883 939/486/875 1148/487/1084
f 1148/487/1084 939/486/875 931/488/867 1150/489/1086
f 1150/489/1086 931/488/867 923/490/859 1152/491/1088
f 1152/491/1088 923/490/859 915/214/851 1156/213/1092
f 844/208/780 836/129/772 835/256/771 843/258/779
f 1160/216/1096 907/215/843 899/492/835 1164/493/1100
f 1164/493/1100 899/492/835 891/494/827 1168/495/1104
f 1168/495/1104 891/494/827 883/496/819 1172/497/1108
f 1172/497/1108 883/496/819 875/498/811 1176/499/1112
f 801/464/737 793/463/729 1027/420/963 1034/421/970
f 1078/444/1014 1045/316/981 1043/321/979 1076/427/1012
f 1063/461/999 1030/363/966 1028/368/964 1061/410/997
f 1037/454/973 1036/453/972 1069/458/1005 1070/477/1006
f 1042/428/978 1037/454/973 1070/477/1006 1075/429/1011
f 1082/476/1018 1049/308/985 1047/311/983 1080/443/1016
f 1052/440/988 1050/437/986 1083/436/1019 1085/441/1021
f 1084/439/1020 1051/296/987 1049/308/985 1082/476/1018
f 1055/416/991 1088/475/1024 1087/409/1023 1054/408/990
f 1056/415/992 1089/473/1025 1088/475/1024 1055/416/991
f 1057/414/993 1090/471/1026 1089/473/1025 1056/415/992
f 1090/471/1026 1057/414/993 1058/413/994 1059/442/995
f 1177/500/1113 1125/501/1061 762/502/698 764/503/700
f 1186/504/1122 1173/505/1109 1174/85/1110 1185/84/1121
f 1183/506/1119 1186/504/1122 1185/84/1121 1184/395/1120
f 793/463/729 794/165/730 786/170/722 785/449/721
f 1181/507/1117 1183/506/1119 1184/395/1120 1182/387/1118
f 1186/504/1122 1183/506/1119 770/508/706 708/509/644
f 1179/510/1115 1181/507/1117 1182/387/1118 1180/379/1116
f 1183/506/1119 1181/507/1117 768/511/704 770/508/706
f 1177/500/1113 1179/510/1115 1180/379/1116 1178/156/1114
f 1181/507/1117 1179/510/1115 766/512/702 768/511/704
f 1125/501/1061 1177/500/1113 1178/156/1114 1126/159/1062
f 1179/510/1115 1177/500/1113 764/503/700 766/512/702
f 1129/513/1065 1125/501/1061 1126/159/1062 1130/479/1066
f 1127/514/1063 1131/465/1067 732/468/668 734/515/670
f 1133/516/1069 1129/513/1065 1130/479/1066 1134/481/1070
f 1133/516/1069 1135/517/1071 756/518/692 758/519/694
f 1135/517/1071 1133/516/1069 1134/481/1070 1136/483/1072
f 730/467/666 1123/466/1059 1137/520/1073 728/521/664
f 1145/522/1081 1135/517/1071 1136/483/1072 1146/485/1082
f 1145/522/1081 1147/523/1083 752/524/688 754/525/690
f 1147/523/1083 1145/522/1081 1146/485/1082 1148/487/1084
f 1147/523/1083 1149/526/1085 750/527/686 752/524/688
f 1149/526/1085 1147/523/1083 1148/487/1084 1150/489/1086
f 1149/526/1085 1151/528/1087 748/529/684 750/527/686
f 1151/528/1087 1149/526/1085 1150/489/1086 1152/491/1088
f 1151/528/1087 1155/530/1091 746/531/682 748/529/684
f 1155/530/1091 1151/528/1087 1152/491/1088 1156/213/1092
f 720/532/656 1153/533/1089 1157/534/1093 718/535/654
f 1159/536/1095 1155/530/1091 1156/213/1092 1160/216/1096
f 1157/534/1093 1161/537/1097 716/538/652 718/535/654
f 1163/539/1099 1159/536/1095 1160/216/1096 1164/493/1100
f 716/538/652 1161/537/1097 1165/540/1101 714/541/650
f 1167/542/1103 1163/539/1099 1164/493/1100 1168/495/1104
f 1165/540/1101 1169/543/1105 712/544/648 714/541/650
f 1171/545/1107 1167/542/1103 1168/495/1104 1172/497/1108
f 1169/543/1105 1173/505/1109 710/546/646 712/544/648
f 1175/547/1111 1171/545/1107 1172/497/1108 1176/499/1112
f 710/546/646 1173/505/1109 1186/504/1122 708/509/644
f 1161/537/1097 1157/534/1093 1158/118/1094 1162/274/1098
f 1159/536/1095 1163/539/1099 742/548/678 744/549/680
f 1173/505/1109 1169/543/1105 1170/291/1106 1174/85/1110
f 1171/545/1107 1175/547/1111 736/550/672 738/551/674
f 1169/543/1105 1165/540/1101 1166/273/1102 1170/291/1106
f 1167/542/1103 1171/545/1107 738/551/674 740/552/676
f 1165/540/1101 1161/537/1097 1162/274/1098 1166/273/1102
f 1163/539/1099 1167/542/1103 740/552/676 742/548/678
f 1157/534/1093 1153/533/1089 1154/119/1090 1158/118/1094
f 1155/530/1091 1159/536/1095 744/549/680 746/531/682
f 1127/514/1063 1175/553/1111 1176/147/1112 1128/146/1064
f 1125/501/1061 1129/513/1065 760/554/696 762/502/698
f 1143/555/1079 1141/556/1077 1142/197/1078 1144/188/1080
f 1143/555/1079 1153/533/1089 720/532/656 722/557/658
f 1153/533/1089 1143/555/1079 1144/188/1080 1154/119/1090
f 1135/517/1071 1145/522/1081 754/525/690 756/518/692
f 1141/556/1077 1139/558/1075 1140/190/1076 1142/197/1078
f 1141/556/1077 1143/555/1079 722/557/658 724/559/660
f 1139/558/1075 1137/520/1073 1138/163/1074 1140/190/1076
f 726/560/662 1139/558/1075 1141/556/1077 724/559/660
f 1137/520/1073 1123/466/1059 1124/164/1060 1138/163/1074
f 728/521/664 1137/520/1073 1139/558/1075 726/560/662
f 1131/465/1067 1127/514/1063 1128/146/1064 1132/171/1068
f 1129/513/1065 1133/516/1069 758/519/694 760/554/696
f 1123/466/1059 1131/465/1067 1132/171/1068 1124/164/1060
f 736/561/672 1175/553/1111 1127/514/1063 734/515/670
f 1122/81/1058 1024/79/960 1013/398/949 1121/470/1057
f 1121/470/1057 1013/398/949 1005/390/941 1120/472/1056
f 1120/472/1056 1005/390/941 997/382/933 1119/474/1055
f 1119/474/1055 997/382/933 989/374/925 1118/469/1054
f 1118/469/1054 989/374/925 981/173/917 1092/172/1028
f 785/449/721 786/170/722 778/149/714 777/404/713
f 956/354/892 955/482/891 963/480/899 964/359/900
f 794/165/730 793/463/729 801/464/737 802/166/738
f 940/341/876 939/486/875 947/484/883 948/349/884
f 932/333/868 931/488/867 939/486/875 940/341/876
f 924/327/860 923/490/859 931/488/867 932/333/868
f 916/322/852 915/214/851 923/490/859 924/327/860
f 834/120/770 833/455/769 841/459/777 842/121/778
f 849/448/785 850/275/786 842/121/778 841/459/777
f 850/275/786 849/448/785 857/447/793 858/276/794
f 865/446/801 866/290/802 858/276/794 857/447/793
f 873/445/809 874/86/810 866/290/802 865/446/801
f 874/86/810 873/445/809 1025/403/961 1026/83/962
f 900/312/836 899/492/835 907/215/843 908/317/844
f 876/298/812 875/498/811 883/496/819 884/299/820
f 884/299/820 883/496/819 891/494/827 892/309/828
f 892/309/828 891/494/827 899/492/835 900/312/836
f 908/317/844 907/215/843 915/214/851 916/322/852
f 972/364/908 971/478/907 979/158/915 980/369/916
f 818/198/754 817/452/753 825/451/761 826/189/762
f 948/349/884 947/484/883 955/482/891 956/354/892
f 833/455/769 834/120/770 826/189/762 825/451/761
f 810/191/746 809/462/745 817/452/753 818/198/754
f 802/166/738 801/464/737 809/462/745 810/191/746
f 964/359/900 963/480/899 971/478/907 972/364/908
f 875/148/811 876/405/812 777/404/713 778/149/714
f 1132/171/1068 786/170/722 794/165/730 1124/164/1060
`,le=`/assets/BLUBERRY%20COOKIES-B52EQzwo.webp`,Z=`/assets/LEMON%20HAZE-OFNaQHSg.webp`,ue=`/assets/STRAWBERRY%20OG-CnF8PUbN.webp`,de=`/assets/ZEN-CUFwOnfQ.webp`,fe=`/assets/ZKITTLEZ%20OG-C_lx-z_5.webp`,pe=`/assets/galaxy-M6UKCHc6.jpeg`,Q=`/assets/Bomb%20Dope-01vEOLLu.jpg`,me=`/assets/Bomb%20Dope%20Lime-Bn-aNyLx.jpg`,he=`/assets/Bomb%20Dope%20Mojito-Cna5Zllj.jpg`,ge=`/assets/Bomb%20Dope%20RollMops-yBh2IFGp.jpg`,$=[{name:`BLUBERRY COOKIES`,image:le,color:`#a855f7`},{name:`LEMON HAZE`,image:Z,color:`#fc5000`},{name:`STRAWBERRY OG`,image:ue,color:`#ef4444`},{name:`ZEN`,image:de,color:`#ff8a4c`},{name:`ZKITTLEZ OG`,image:fe,color:`#38bdf8`}],_e=[{name:`LYCHEE SHOT`,image:Q,color:`#ff626c`},{name:`LIME SHOT`,image:me,color:`#c4dd46`},{name:`MOJITO SHOT`,image:he,color:`#49ccd8`},{name:`ROLLMOPS PEACH`,image:ge,color:`#ee7f41`}];function ve(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255, 255, 255, 1)`),n.addColorStop(.35,`rgba(255, 255, 255, 0.75)`),n.addColorStop(.7,`rgba(255, 255, 255, 0.25)`),n.addColorStop(1,`rgba(255, 255, 255, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new h(e)}var ye=({className:e=``,onProductChange:t,products:n=$,background:i=`galaxy`,bare:m=!1,focusX:_=0,overlay:S,activeIndex:w})=>{let{ref:te,visible:A,activated:M}=D(),N=(0,j.useRef)(null);(0,j.useEffect)(()=>{A?N.current?.start():N.current?.stop()},[A,M]);let[P,re]=(0,j.useState)(0),F=(0,j.useRef)(0),I=w!==void 0;I&&(F.current=Math.min(Math.max(w,0),n.length-1));let L=(0,j.useRef)(t);return L.current=t,(0,j.useEffect)(()=>{let e=te.current;if(!e||!M)return;let t=new d,m=e.clientWidth||400,S=e.clientHeight||400,w=new p(45,m/S,.1,1e3);w.position.set(0,0,7*Math.max(1,S/600));let D=new ee({alpha:!0,antialias:!0,powerPreference:`high-performance`});D.setSize(m,S),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.shadowMap.enabled=!0,D.shadowMap.type=2,D.outputColorSpace=l,e.appendChild(D.domElement);let A=new T(16777215,1.4);t.add(A);let j=new g(16777215,2.5);j.position.set(5,8,5),j.castShadow=!0,t.add(j);let P=new u(16535552,3.5,20);P.position.set(-4,-2,4),t.add(P);let R=new u(6174965,4,20);R.position.set(4,5,-3),t.add(R);let z=new u(16777215,2,15);z.position.set(0,6,2),t.add(z);let B=new o,V=n.map(e=>{let t=B.load(e.image);return t.colorSpace=l,t.wrapS=c,t.wrapT=c,t}),H=null,U=null,W=null,G=null;if(i===`galaxy`){U=new a(14,14),W=new f({transparent:!0,depthWrite:!1}),G=new k(U,W),G.position.set(0,0,-6.5),t.add(G);let e=new Image;e.onload=()=>{let t=1024,n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`);if(!r||!W)return;let i=Math.max(t/e.width,t/e.height),a=e.width*i,o=e.height*i;r.drawImage(e,(t-a)/2,(t-o)/2,a,o);let s=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,`rgba(0,0,0,1)`),s.addColorStop(.18,`rgba(0,0,0,0.95)`),s.addColorStop(.34,`rgba(0,0,0,0.6)`),s.addColorStop(.46,`rgba(0,0,0,0.22)`),s.addColorStop(.55,`rgba(0,0,0,0)`),r.globalCompositeOperation=`destination-in`,r.fillStyle=s,r.fillRect(0,0,t,t),H=new h(n),H.colorSpace=l,W.map=H,W.needsUpdate=!0},e.src=pe}let oe=i===`galaxy`,K=null,q=null,J=null,Y=null,X=null,le=null,Z=null,ue=new O(n[0].color),de=new O(n[0].color),fe=new O(n[0].color);if(oe){K=ve(),q=new E;let e=new Float32Array(480);for(let t=0;t<160;t++)e[t*3]=(Math.random()-.5)*8.5,e[t*3+1]=(Math.random()-.5)*8.5,e[t*3+2]=-.6-Math.random()*1.2;q.setAttribute(`position`,new C(e,3)),J=new r({size:.3,map:K,color:ue,transparent:!0,opacity:.9,blending:2,depthWrite:!1}),Y=new v;let n=new b(q,J);Y.add(n),t.add(Y),X=new E;let i=new Float32Array(390);for(let e=0;e<130;e++)i[e*3]=(Math.random()-.5)*10,i[e*3+1]=(Math.random()-.5)*10,i[e*3+2]=-2-Math.random()*3.5;X.setAttribute(`position`,new C(i,3)),le=new r({size:.16,map:K,color:ue,transparent:!0,opacity:.75,blending:2,depthWrite:!1}),Z=new v;let a=new b(X,le);Z.add(a),t.add(Z)}let Q=new v;Q.position.x=_,t.add(Q);let me=null;try{let e=new ie().parse(ce),t=new ne({color:16753695,roughness:.15,metalness:.1,flatShading:!1,transparent:!0,opacity:.92});me=new ne({map:V[0],color:16777215,roughness:.25,metalness:.1,flatShading:!1});let n=new ne({color:6174965,roughness:.25,metalness:.4,flatShading:!1}),r=0;e.traverse(e=>{if(e.isMesh){let i=e;if(i.castShadow=!0,i.receiveShadow=!0,i.geometry)try{let e=ae(i.geometry,1e-4);e.computeVertexNormals(),i.geometry=e}catch{i.geometry.computeVertexNormals()}r%3==0?i.material=t:r%3==1?i.material=me:i.material=n,r++}});let i=new y().setFromObject(e),a=i.getCenter(new s),o=i.getSize(new s),c=4/Math.max(o.x,o.y,o.z);e.position.sub(a),e.rotation.y=Math.PI,e.scale.set(c,c,c),Q.add(e)}catch(e){console.error(`Error loading 3D OBJ model:`,e)}let he=se(e),ge=0,$=0,_e=!1,ye=0,be=!1,xe=I||n.length<2?void 0:setInterval(()=>{F.current=(F.current+1)%n.length},5e3),Se=new ResizeObserver(()=>{if(!e)return;let t=e.clientWidth,n=e.clientHeight;t===0||n===0||(w.aspect=t/n,w.updateProjectionMatrix(),D.setSize(t,n))});Se.observe(e);let Ce,we=new x,Te=!1,Ee=()=>{if(!Te)return;Ce=requestAnimationFrame(Ee);let e=we.getElapsedTime(),r=e-ge;ge=e,G&&(G.rotation.z=e*.04),Z&&(Z.rotation.z=e*.1,Z.rotation.y=Math.cos(e*.15)*.12),Y&&(Y.rotation.z=e*.22,Y.rotation.y=Math.sin(e*.3)*.2),J&&le&&(fe.lerp(de,.06),J.color.copy(fe),le.color.copy(fe)),!_e&&F.current!==$&&(_e=!0,ye=e,be=!1);let i=Math.sin(e*1.5)*.12,a=1,o=0;if(_e){let t=e-ye,r=Math.min(t/.4,1),s=Math.sin(r*Math.PI);i+=s*.35,a=1+s*.15,o=Math.sin(r*Math.PI*2)*.18,r>=.5&&!be&&($=F.current,me&&V[$]&&(me.map=V[$],me.needsUpdate=!0),de.set(n[$].color),re($),L.current?.($),be=!0),r>=1&&(_e=!1)}Q.position.y=i,Q.scale.set(a,a,a);let{x:s,y:c}=he.update(r);Q.rotation.x=s,Q.rotation.y=c,Q.rotation.z=o,D.render(t,w)},De=()=>{Te||(Te=!0,we.getDelta(),Ee())},Oe=()=>{Te=!1,cancelAnimationFrame(Ce)};return N.current={start:De,stop:Oe},De(),()=>{xe&&clearInterval(xe),Oe(),N.current=null,he.dispose(),Se.disconnect(),D.domElement&&D.domElement.parentNode&&D.domElement.parentNode.removeChild(D.domElement),D.dispose(),K?.dispose(),q?.dispose(),J?.dispose(),X?.dispose(),le?.dispose(),U?.dispose(),W?.dispose(),H?.dispose()}},[M,i,_]),(0,q.jsxs)(`div`,{className:`relative w-full h-full flex items-center justify-center min-h-[280px] sm:min-h-[440px] ${m?`bg-transparent`:`rounded-[32px] sm:rounded-[40px] overflow-hidden bg-[#070609]`} ${e}`,children:[i===`waves`&&(0,q.jsx)(X,{lineColor:n[P].color,waveSpeedX:.02,waveSpeedY:.01,waveAmpX:36,waveAmpY:18,friction:.9,tension:.008,maxCursorMove:110,xGap:13,yGap:34}),S,(0,q.jsx)(`div`,{ref:te,className:`w-full h-full relative z-10 cursor-grab active:cursor-grabbing`})]})},be=({hue:e=230,xOffset:t=0,speed:n=1,intensity:r=1,size:i=1})=>{let a=(0,j.useRef)(null);return(0,j.useEffect)(()=>{let o=a.current;if(!o)return;let s=()=>{o.width=o.clientWidth,o.height=o.clientHeight};s();let c=o.getContext(`webgl`,{alpha:!0,premultipliedAlpha:!1});if(!c){console.error(`WebGL not supported`);return}let l=(e,t)=>{let n=c.createShader(t);return n?(c.shaderSource(n,e),c.compileShader(n),c.getShaderParameter(n,c.COMPILE_STATUS)?n:(console.error(`Shader compile error:`,c.getShaderInfoLog(n)),c.deleteShader(n),null)):null},u=l(`
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,c.VERTEX_SHADER),d=l(`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          float a = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
          fragColor = vec4(col, a);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `,c.FRAGMENT_SHADER);if(!u||!d)return;let f=c.createProgram();if(!f)return;if(c.attachShader(f,u),c.attachShader(f,d),c.linkProgram(f),!c.getProgramParameter(f,c.LINK_STATUS)){console.error(`Program linking error:`,c.getProgramInfoLog(f));return}c.useProgram(f);let p=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),m=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,m),c.bufferData(c.ARRAY_BUFFER,p,c.STATIC_DRAW);let h=c.getAttribLocation(f,`aPosition`);c.enableVertexAttribArray(h),c.vertexAttribPointer(h,2,c.FLOAT,!1,0,0);let g=c.getUniformLocation(f,`iResolution`),_=c.getUniformLocation(f,`iTime`),v=c.getUniformLocation(f,`uHue`),y=c.getUniformLocation(f,`uXOffset`),b=c.getUniformLocation(f,`uSpeed`),x=c.getUniformLocation(f,`uIntensity`),S=c.getUniformLocation(f,`uSize`);c.uniform1f(v,e),c.uniform1f(y,t),c.uniform1f(b,n),c.uniform1f(x,r),c.uniform1f(S,i);let ee=()=>{c.viewport(0,0,o.width,o.height),c.uniform2f(g,o.width,o.height)};ee();let C=()=>{s(),ee()};window.addEventListener(`resize`,C);let w=performance.now(),T,E=()=>{c.uniform1f(_,(performance.now()-w)/1e3),c.drawArrays(c.TRIANGLES,0,6),T=requestAnimationFrame(E)},D=()=>{cancelAnimationFrame(T),document.hidden||(T=requestAnimationFrame(E))};return document.addEventListener(`visibilitychange`,D),T=requestAnimationFrame(E),()=>{window.removeEventListener(`resize`,C),document.removeEventListener(`visibilitychange`,D),cancelAnimationFrame(T)}},[e,t,n,r,i]),(0,q.jsx)(`canvas`,{ref:a,className:`w-full h-full relative`})},xe=`/assets/POUCHER%20V2-DZEfHbR0.obj`,Se=[{id:`blueberry`,name:`BLUEBERRY`,hue:275,badgeColor:`#aa39fb`,lightHex:11155963,topPath:`/assets/BLUEBERRY%20TOP-MzXqM7ax.jpg`,sidePath:`/assets/BLUEBERRY%20SIDE-BXv3PYzO.jpg`,bottomPath:`/assets/BLUEBERRY%20BOTTOM-CPRpgYV9.jpg`},{id:`sweet-raspberry`,name:`SWEET RASPBERRY`,hue:337,badgeColor:`#db1f66`,lightHex:14360422,topPath:`/assets/SWEET%20RASPBERRY%20TOP-DUEzO2Ws.jpg`,sidePath:`/assets/SWEET%20RASPBERRY%20SIDE-BF6KCEQu.jpg`,bottomPath:`/assets/SWEET%20RASPBERRY%20BOTTOM-DYzn5xCM.jpg`},{id:`bubble-gum`,name:`BUBBLE GUM`,hue:300,badgeColor:`#df1ade`,lightHex:14621406,topPath:`/assets/BUBBLE%20GUM%20TOP-BCS0_LU1.jpg`,sidePath:`/assets/BUBBLE%20GUM%20SIDE-BKOmrYTQ.jpg`,bottomPath:`/assets/SWEET%20RASPBERRY%20BOTTOM-DYzn5xCM.jpg`},{id:`citrus`,name:`CITRUS`,hue:85,badgeColor:`#a0f12b`,lightHex:10547499,topPath:`/assets/CITRUS%20TOP-DUEyVfyA.jpg`,sidePath:`/assets/CITRUS%20SIDE-FFvG0xke.jpg`,bottomPath:`/assets/CITRUS%20BOTTOM-A-c1N2YS.jpg`}],Ce=2e-4,we=16.8,Te=.4,Ee=`
uniform float uArc;
uniform float uTime;
uniform vec3 uArcColor;

float mlHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float mlNoise(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float a = mlHash(ip);
  float b = mlHash(ip + vec2(1.0, 0.0));
  float c = mlHash(ip + vec2(0.0, 1.0));
  float d = mlHash(ip + vec2(1.0, 1.0));
  vec2 t = smoothstep(0.0, 1.0, fp);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}

float mlFbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * mlNoise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}
`,De=`
if (uArc >= 0.0) {
  // Fades the whole strike in and back out across its travel
  float envelope = sin(uArc * 3.1415926);

  // Sweep overshoots the 0..1 range so the bolt fully enters and exits the label
  float sweep = mix(-0.35, 1.35, uArc);

  // Jagged offset makes the leading edge fork instead of running dead straight
  float jag = (mlFbm(vec2(vMapUv.x * 7.0, uTime * 9.0)) - 0.5) * 0.30;
  float dist = abs(vMapUv.y - sweep + jag);

  float glow = smoothstep(0.38, 0.0, dist);
  float core = smoothstep(0.05, 0.0, dist);

  // A second, fainter branch trailing the main bolt
  float branchJag = (mlFbm(vec2(vMapUv.x * 13.0 + 5.0, uTime * 12.0)) - 0.5) * 0.44;
  float branch = smoothstep(0.14, 0.0, abs(vMapUv.y - sweep + branchJag));

  vec3 bolt = uArcColor * (glow * 1.25 + branch * 0.8) + vec3(1.0) * core;

  // Whole label pulses as the charge passes through it
  gl_FragColor.rgb += bolt * envelope * 1.7 + uArcColor * envelope * 0.22;
}
`,Oe=({className:e=``,onVariantChange:t,variants:n=Se,bare:r=!1,focusX:i=0,showBackdrop:a=!0,activeIndex:c})=>{let{ref:f,visible:m,activated:h}=D(),_=(0,j.useRef)(null);(0,j.useEffect)(()=>{m?_.current?.start():_.current?.stop()},[m,h]);let[b,S]=(0,j.useState)(0),C=c!==void 0,w=C?Math.min(Math.max(c,0),n.length-1):b,[E,te]=(0,j.useState)(!0),[k,A]=(0,j.useState)(null),M=n[w],N=(0,j.useRef)(n);N.current=n;let P=(0,j.useRef)(t);P.current=t,(0,j.useEffect)(()=>{if(!m||C)return;let e=setInterval(()=>{S(e=>(e+1)%n.length)},5e3);return()=>clearInterval(e)},[m,C,n.length]),(0,j.useEffect)(()=>{P.current?.(w)},[w]);let re=(0,j.useRef)({}),F=(0,j.useRef)(null),I=(0,j.useRef)([]),L=(0,j.useRef)(null),R=(0,j.useRef)(!1),z=(0,j.useRef)(0);return(0,j.useEffect)(()=>{z.current!==w&&(z.current=w,L.current=w,R.current=!0)},[w]),(0,j.useEffect)(()=>{let e=f.current;if(!e||!h)return;let t=new d,n=e.clientWidth||600,r=e.clientHeight||440,a=new p(40,n/r,.1,1e3),c=e=>{a.position.z=30*Math.min(1.35,Math.max(1,560/(e||560)))};a.position.set(0,0,30),c(n);let m=new ee({alpha:!0,antialias:!0,powerPreference:`high-performance`});m.setSize(n,r),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.outputColorSpace=l,m.toneMapping=4,m.toneMappingExposure=1.2,e.appendChild(m.domElement);let b=new v;b.position.x=i,t.add(b);let S=new T(16777215,1.8);t.add(S);let C=new g(16777215,2.5);C.position.set(10,20,15),t.add(C);let E=new u(M.lightHex,4.5,30);E.position.set(-15,5,15),t.add(E),F.current=E;let D=new u(11032055,3.5,30);D.position.set(15,-10,-10),t.add(D);let k=new u(16777215,2,20);k.position.set(0,20,5),t.add(k);let j=new o,P=e=>{let t=j.load(e);return t.colorSpace=l,t};I.current=N.current.map(e=>({top:P(e.topPath),side:P(e.sidePath),bottom:P(e.bottomPath)}));let z=I.current[w],B=[],V=(e,t)=>{let n=new ne({map:e,roughness:t,metalness:.1,side:2});return n.onBeforeCompile=e=>{e.uniforms.uArc={value:-1},e.uniforms.uTime={value:0},e.uniforms.uArcColor={value:new O(16777215)},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`${Ee}\nvoid main() {`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>\n${De}`),B.push(e.uniforms)},n};new ie().load(xe,e=>{e.traverse(e=>{if(e.isMesh){let t=e,n=t.name.toUpperCase();if(n.includes(`LABEL_TOP`)||n.includes(`ETYKIETA TOP`)){let e=V(z.top,.3);t.material=e,re.current.top=e,t.position.z+=Ce}else if(n.includes(`LABEL_SIDE`)||n.includes(`NAKLEJKA BOK`)){let e=V(z.side,.35);t.material=e,re.current.side=e}else if(n.includes(`LABEL_BOTTOM`)||n.includes(`ETYKIETA BOTTOM`)){let e=V(z.bottom,.3);t.material=e,re.current.bottom=e}else t.material=new ne({color:1184277,roughness:.85,metalness:.05})}});let t=new y().setFromObject(e),n=t.getCenter(new s),r=t.getSize(new s);e.position.sub(n);let i=new v;i.add(e);let a=Math.max(r.x,r.y,r.z);if(a>0){let e=we/a;i.scale.set(e,e,e)}i.rotation.x=-Math.PI/9,i.rotation.z=-.1,b.add(i),te(!1)},void 0,e=>{console.error(`Error loading POUCHER V2 OBJ model:`,e),A(`Failed to load 3D model`),te(!1)});let H,ae=new x,U=null,W=()=>{let e=L.current;if(e===null)return;L.current=null;let t=I.current[e],{top:n,side:r,bottom:i}=re.current;t&&(n&&(n.map=t.top,n.needsUpdate=!0),r&&(r.map=t.side,r.needsUpdate=!0),i&&(i.map=t.bottom,i.needsUpdate=!0)),F.current?.color.setHex(N.current[e].lightHex)},G=se(e),oe=0,K=!1,q=()=>{if(!K)return;H=requestAnimationFrame(q);let e=ae.getElapsedTime(),n=e-oe;if(oe=e,R.current){R.current=!1,U=e;let t=L.current;if(t!==null){let e=new O(N.current[t].badgeColor);B.forEach(t=>t.uArcColor.value.copy(e))}}let r=Math.sin(e*1.5)*.12,i=1,o=0,s=-1;if(U!==null){let t=(e-U)/Te,n=Math.sin(Math.min(t,1)*Math.PI);r+=n*.35,i=1+n*.15,o=Math.sin(Math.min(t,1)*Math.PI*2)*.18,t>=.5&&W(),t>=1?U=null:s=t}B.forEach(t=>{t.uArc.value=s,t.uTime.value=e}),b.position.y=r,b.scale.set(i,i,i);let{x:c,y:l}=G.update(n);b.rotation.x=c,b.rotation.y=l,b.rotation.z=o,m.render(t,a)},J=()=>{K||(K=!0,ae.getDelta(),q())},Y=()=>{K=!1,cancelAnimationFrame(H)};_.current={start:J,stop:Y},J();let X=()=>{if(!e)return;let t=e.clientWidth,n=e.clientHeight;a.aspect=t/n,c(t),a.updateProjectionMatrix(),m.setSize(t,n)};return window.addEventListener(`resize`,X),()=>{window.removeEventListener(`resize`,X),G.dispose(),Y(),_.current=null,m.dispose(),e.contains(m.domElement)&&e.removeChild(m.domElement)}},[h,i]),(0,q.jsxs)(`div`,{className:`w-full h-full min-h-[280px] sm:min-h-[480px] relative flex flex-col items-center justify-between p-0 sm:p-4 ${r?`bg-transparent`:`bg-[#070607] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl border border-neutral-800`} ${e}`,children:[a&&(0,q.jsx)(`div`,{className:`absolute inset-0 pointer-events-none z-0 opacity-80 mix-blend-screen overflow-hidden`,children:(0,q.jsx)(be,{hue:M.hue,xOffset:0,speed:1.2,intensity:2.2,size:1.4})}),E&&(0,q.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center bg-[#070607]/80 z-20 space-y-3`,children:[(0,q.jsx)(`div`,{className:`w-10 h-10 border-4 rounded-full animate-spin`,style:{borderTopColor:`transparent`,borderRightColor:M.badgeColor,borderBottomColor:M.badgeColor,borderLeftColor:M.badgeColor}}),(0,q.jsx)(`span`,{className:`text-sm font-bold text-neutral-300 tracking-wide uppercase`,children:`Ładowanie modelu 3D...`})]}),k&&(0,q.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center bg-[#070607] z-20 text-neutral-400 font-medium text-sm`,children:k}),(0,q.jsx)(`div`,{ref:f,className:`w-full flex-1 min-h-[220px] sm:min-h-[360px] cursor-grab active:cursor-grabbing relative z-10`})]})},ke=[[/blueberry/i,`BLUBERRY COOKIES`],[/lemon\s*haze/i,`LEMON HAZE`],[/strawberry/i,`STRAWBERRY OG`],[/zkittlez/i,`ZKITTLEZ OG`],[/\bzen\b/i,`ZEN`]],Ae=[[/lychee/i,`LYCHEE SHOT`],[/lime/i,`LIME SHOT`],[/mojito/i,`MOJITO SHOT`],[/rollmops|peach/i,`ROLLMOPS PEACH`]],je=[[/blueberry/i,`blueberry`],[/bubble\s*gum/i,`bubble-gum`],[/citrus/i,`citrus`],[/raspberry/i,`sweet-raspberry`]],Me=(e,t)=>t.find(([t])=>t.test(e))?.[1];function Ne(e){if(/^\s*elixir/i.test(e)){let t=Me(e,ke),n=$.find(e=>e.name===t);return n?{kind:`bottle`,product:n,background:`galaxy`}:null}if(/bomb\s*dope/i.test(e)){let t=Me(e,Ae),n=_e.find(e=>e.name===t);return n?{kind:`bottle`,product:n,background:`waves`}:null}if(/^\s*poucher/i.test(e)){let t=Me(e,je),n=Se.find(e=>e.id===t);return n?{kind:`poucher`,variant:n}:null}return null}function Pe(e){if(e.length<2)return null;let t=e.map(Ne);if(t.some(e=>e===null))return null;let n=t;return n.every(e=>e.kind===n[0].kind)?n:null}function Fe({showcase:e,line:t,activeIndex:n,className:r=``,bare:i=!1,fullBleed:a=!1,focusX:o=0,backdrop:s=`scene`}){let c=i||a,l=t&&n!==void 0?t:void 0,u=l?.[0].kind===`poucher`?l.map(e=>e.variant):void 0,d=l?.[0].kind===`bottle`?l.map(e=>e.product):void 0;return(0,q.jsx)(`div`,{className:`${a?`absolute inset-0 h-full w-full`:c?`h-[364px] w-full sm:h-[600px]`:`h-[420px] w-full overflow-hidden rounded-[28px] sm:h-[520px]`} ${r}`,children:e.kind===`poucher`?(0,q.jsx)(Oe,{className:`h-full w-full`,variants:u??[e.variant],activeIndex:u?n:void 0,bare:c,focusX:o,showBackdrop:s!==`none`}):(0,q.jsx)(ye,{className:`h-full w-full`,products:d??[e.product],activeIndex:d?n:void 0,background:s===`none`?`none`:e.background,bare:c,focusX:o})})}export{Se as a,ye as c,Oe as i,pe as l,Ne as n,be as o,Pe as r,_e as s,Fe as t,X as u};