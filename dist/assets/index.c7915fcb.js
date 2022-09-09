var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,s,o)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o,i=(e,i)=>{for(var a in i||(i={}))s.call(i,a)&&n(e,a,i[a]);if(t)for(var a of t(i))o.call(i,a)&&n(e,a,i[a]);return e};import{C as a,L as r,F as c,G as l,B as h,a as d,b as p,M as m,P as u,c as f,d as b,e as g,f as w,V as j,S as y,g as v,h as x,i as O,T as V,j as k,W as B,k as L,l as M,m as E,n as S}from"./vendor.82f298b1.js";const z=/^[og]\s*(.+)?/,I=/^mtllib /,R=/^usemtl /,P=/^usemap /,U=new j,A=new j,F=new j,C=new j,D=new j,G=new a;function W(){const e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);const s=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){const s=this._finalize(!1);s&&(s.inherited||s.groupCount<=0)&&this.materials.splice(s.index,1);const o={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==s?s.smooth:this.smooth,groupStart:void 0!==s?s.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){const t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let s=this.materials.length-1;s>=0;s--)this.materials[s].groupCount<=0&&this.materials.splice(s,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},s&&s.name&&"function"==typeof s.clone){const e=s.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseNormalIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseUVIndex:function(e,t){const s=parseInt(e,10);return 2*(s>=0?s-1:s+t/2)},addVertex:function(e,t,s){const o=this.vertices,n=this.object.geometry.vertices;n.push(o[e+0],o[e+1],o[e+2]),n.push(o[t+0],o[t+1],o[t+2]),n.push(o[s+0],o[s+1],o[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const o=this.normals,n=this.object.geometry.normals;n.push(o[e+0],o[e+1],o[e+2]),n.push(o[t+0],o[t+1],o[t+2]),n.push(o[s+0],o[s+1],o[s+2])},addFaceNormal:function(e,t,s){const o=this.vertices,n=this.object.geometry.normals;U.fromArray(o,e),A.fromArray(o,t),F.fromArray(o,s),D.subVectors(F,A),C.subVectors(U,A),D.cross(C),D.normalize(),n.push(D.x,D.y,D.z),n.push(D.x,D.y,D.z),n.push(D.x,D.y,D.z)},addColor:function(e,t,s){const o=this.colors,n=this.object.geometry.colors;void 0!==o[e]&&n.push(o[e+0],o[e+1],o[e+2]),void 0!==o[t]&&n.push(o[t+0],o[t+1],o[t+2]),void 0!==o[s]&&n.push(o[s+0],o[s+1],o[s+2])},addUV:function(e,t,s){const o=this.uvs,n=this.object.geometry.uvs;n.push(o[e+0],o[e+1]),n.push(o[t+0],o[t+1]),n.push(o[s+0],o[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,o,n,i,a,r,c){const l=this.vertices.length;let h=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),p=this.parseVertexIndex(s,l);if(this.addVertex(h,d,p),this.addColor(h,d,p),void 0!==a&&""!==a){const e=this.normals.length;h=this.parseNormalIndex(a,e),d=this.parseNormalIndex(r,e),p=this.parseNormalIndex(c,e),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(void 0!==o&&""!==o){const e=this.uvs.length;h=this.parseUVIndex(o,e),d=this.parseUVIndex(n,e),p=this.parseUVIndex(i,e),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,o=e.length;s<o;s++){const o=this.parseVertexIndex(e[s],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,o=this.uvs.length;for(let n=0,i=e.length;n<i;n++)this.addVertexLine(this.parseVertexIndex(e[n],s));for(let n=0,i=t.length;n<i;n++)this.addUVLine(this.parseUVIndex(t[n],o))}};return e.startObject("",!1),e}class H extends r{constructor(e){super(e),this.materials=null}load(e,t,s,o){const n=this,i=new c(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(function(s){try{t(n.parse(s))}catch(i){o?o(i):console.error(i),n.manager.itemError(e)}}),s,o)}setMaterials(e){return this.materials=e,this}parse(e){const t=new W;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));const s=e.split("\n");let o="",n="",i=0,a=[];const r="function"==typeof"".trimLeft;for(let l=0,h=s.length;l<h;l++)if(o=s[l],o=r?o.trimLeft():o.trim(),i=o.length,0!==i&&(n=o.charAt(0),"#"!==n))if("v"===n){const e=o.split(/\s+/);switch(e[0]){case"v":t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?(G.setRGB(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6])).convertSRGBToLinear(),t.colors.push(G.r,G.g,G.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case"vt":t.uvs.push(parseFloat(e[1]),parseFloat(e[2]))}}else if("f"===n){const e=o.slice(1).trim().split(/\s+/),s=[];for(let t=0,o=e.length;t<o;t++){const o=e[t];if(o.length>0){const e=o.split("/");s.push(e)}}const n=s[0];for(let o=1,i=s.length-1;o<i;o++){const e=s[o],i=s[o+1];t.addFace(n[0],e[0],i[0],n[1],e[1],i[1],n[2],e[2],i[2])}}else if("l"===n){const e=o.substring(1).trim().split(" ");let s=[];const n=[];if(-1===o.indexOf("/"))s=e;else for(let t=0,o=e.length;t<o;t++){const o=e[t].split("/");""!==o[0]&&s.push(o[0]),""!==o[1]&&n.push(o[1])}t.addLineGeometry(s,n)}else if("p"===n){const e=o.slice(1).trim().split(" ");t.addPointGeometry(e)}else if(null!==(a=z.exec(o))){const e=(" "+a[0].slice(1).trim()).slice(1);t.startObject(e)}else if(R.test(o))t.object.startMaterial(o.substring(7).trim(),t.materialLibraries);else if(I.test(o))t.materialLibraries.push(o.substring(7).trim());else if(P.test(o))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===n){if(a=o.split(" "),a.length>1){const e=a[1].trim().toLowerCase();t.object.smooth="0"!==e&&"off"!==e}else t.object.smooth=!0;const e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if("\0"===o)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+o+'"')}t.finalize();const c=new l;c.materialLibraries=[].concat(t.materialLibraries);if(!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(let l=0,j=t.objects.length;l<j;l++){const e=t.objects[l],s=e.geometry,o=e.materials,n="Line"===s.type,i="Points"===s.type;let a=!1;if(0===s.vertices.length)continue;const r=new h;r.setAttribute("position",new d(s.vertices,3)),s.normals.length>0&&r.setAttribute("normal",new d(s.normals,3)),s.colors.length>0&&(a=!0,r.setAttribute("color",new d(s.colors,3))),!0===s.hasUVIndices&&r.setAttribute("uv",new d(s.uvs,2));const j=[];for(let c=0,l=o.length;c<l;c++){const e=o[c],s=e.name+"_"+e.smooth+"_"+a;let r=t.materials[s];if(null!==this.materials)if(r=this.materials.create(e.name),!n||!r||r instanceof p){if(i&&r&&!(r instanceof u)){const e=new u({size:10,sizeAttenuation:!1});m.prototype.copy.call(e,r),e.color.copy(r.color),e.map=r.map,r=e}}else{const e=new p;m.prototype.copy.call(e,r),e.color.copy(r.color),r=e}void 0===r&&(r=n?new p:i?new u({size:1,sizeAttenuation:!1}):new f,r.name=e.name,r.flatShading=!e.smooth,r.vertexColors=a,t.materials[s]=r),j.push(r)}let y;if(j.length>1){for(let e=0,t=o.length;e<t;e++){const t=o[e];r.addGroup(t.groupStart,t.groupCount,e)}y=n?new b(r,j):i?new g(r,j):new w(r,j)}else y=n?new b(r,j[0]):i?new g(r,j[0]):new w(r,j[0]);y.name=e.name,c.add(y)}else if(t.vertices.length>0){const e=new u({size:1,sizeAttenuation:!1}),s=new h;s.setAttribute("position",new d(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(s.setAttribute("color",new d(t.colors,3)),e.vertexColors=!0);const o=new g(s,e);c.add(o)}return c}}const N=new class{constructor(e={DEBUG:!1,DOM:{},Objects:{},sceneBreakpoints:{},sceneVariables:{}}){const t={DOM:{},Objects:{sat:{file:"sat.obj",path:"./res/models/",wireframe:!0,pos:[85,35,45],rot:[0,.7,1],scale:[3,3,3]},rocket:{file:"rocket.obj",path:"./res/models/",wiremat:!0,pos:[1280,92,35],rot:[.5,1.5,0],scale:[18,18,18]}},sceneBreakpoints:{default:[],mobile:[1600,2400,4200,5500,8500],desktop:[2400,3500,7500,11e3,15e3]},sceneVariables:{camera:{pos:[0,0,9],rot:[.5,0,0],fov:75,fovSettings:{mobile:120,desktop:75},minReach:.1,maxReach:1e3}}};this.DEBUG=e.DEBUG,this.DOM=i(i({},t.DOM),e.DOM),this.Objects=i(i({},t.Objects),e.Objects),this.sceneBreakpoints=i(i({},t.sceneBreakpoints),e.sceneBreakpoints),this.sceneVariables=i(i({},t.sceneVariables),e.sceneVariables),this.init()}init(){this.setWindowRatio(),this.setWindowSettings(),this.setScene(),this.loadSkeletonObjects(),this.loadWireframeObjects(),Array(200).fill().forEach((()=>{this.loadAStar()})),this.loadTexts(),this.loadSpaceObjects(),this.setRenderer(),this.renderer.render(this.scene,this.camera)}setWindowRatio(){this.DOM.ratio=window.innerWidth/window.innerHeight;let e=this.DOM.ratio>1?"desktop":"mobile";this.sceneBreakpoints.default=this.sceneBreakpoints[e],this.sceneVariables.camera.fov=this.sceneVariables.camera.fovSettings[e]}setWindowSettings(){this.DOM.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)}OnWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setScene(){this.scene=new O;const e=(new V).load("res/img/bg.jpg");this.scene.background=e;let t=new k(this.sceneVariables.camera.fov,this.DOM.ratio,this.sceneVariables.camera.minReach,this.sceneVariables.camera.maxReach);t.position.set(...this.sceneVariables.camera.pos),t.rotation.set(...this.sceneVariables.camera.rot),this.camera=t}setRenderer(){this.renderer=new B({canvas:document.querySelector("#bg")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}onLoadProgress(e){if(e.lengthComputable){const t=e.loaded/e.total*100;if(this.DEBUG){console.log("loading objects...");let s=e.currentTarget.responseURL.replace("http://localhost:3000/","");console.log(s,Math.round(t,2)+"% downloaded")}}}loadSkeletonObjects(){for(const e in this.Objects)(new H).setPath(this.Objects[e].path).load(this.Objects[e].file,(t=>{(this.Objects[e].wireframe||this.Objects[e].wiremat)&&t.traverse((function(e){e.isMesh&&(e.material=new v({color:16777215,wireframe:!0}))})),t.position.set(this.Objects[e].pos[0],this.Objects[e].pos[1],this.Objects[e].pos[2]),t.rotation.set(this.Objects[e].rot[0],this.Objects[e].rot[1],this.Objects[e].rot[2]),t.scale.set(this.Objects[e].scale[0],this.Objects[e].scale[1],this.Objects[e].scale[2]),this.scene.add(t),this.Objects[e].wiremat&&(new H).setPath(this.Objects[e].path).load(this.Objects[e].file,(t=>{t.position.set(...this.Objects[e].pos),t.rotation.set(...this.Objects[e].rot),t.scale.set(...this.Objects[e].scale),this.scene.add(t)}),this.onLoadProgress)}),this.onLoadProgress)}loadWireframeObjects(){(new H).setPath("./res/models/").load("ready land.obj",(e=>{e.traverse((function(e){e.isMesh&&(e.material=new v({color:16777215,wireframe:!0,linewidth:3}))})),e.position.set(0,-.85,-35),e.scale.set(15,15,15),this.scene.add(e)}),this.onLoadProgress),(new H).setPath("./res/models/").load("ready land.obj",(e=>{e.traverse((function(e){e.isMesh&&(e.material=new v({color:0}))})),e.position.set(0,-.875,-35),e.scale.set(15,15,15),this.scene.add(e)}),this.onLoadProgress)}loadSpaceObjects(){let e=i({},this.Objects.rocket),t={pos:[e.pos[0]-20,e.pos[1],e.pos[2]],rot:[0,.5,1],box:[35,35,35]},s={pos:[-200,120,-300],rot:[0,.5,1],sphere:[32,48,48]},o={pos:[...s.pos],rot:[2.4,0,3],torus:[45,8,12,64],scale:[1,1,.02]},n={pos:[750,80,55],torus:[50,15,8,32]};const a=(new V).load("res/img/444.jpg");this.myPlanet=new w(new y(...s.sphere),new v({map:a})),this.myPlanet.position.set(...s.pos),this.myPlanet.rotation.set(...s.rot),this.scene.add(this.myPlanet);const r=new L(...o.torus),c=(new V).load("res/img/998.jpg");this.myRing=new w(r,new v({map:c})),this.myRing.position.set(...o.pos),this.myRing.rotation.set(...o.rot),this.myRing.scale.set(...o.scale),this.scene.add(this.myRing),this.rocketpivot=new l;const h=new M(...t.box);let d=new w(h,new v({color:16777215,wireframe:!0})),p=new w(h,new v({color:0}));this.rocketpivot.add(d),this.rocketpivot.add(p),this.rocketpivot.position.set(...t.pos),this.scene.add(this.rocketpivot);const m=new L(...n.torus),u=new v({color:1773375,wireframe:!0});this.torus=new w(m,u),this.torus.position.set(...n.pos),this.scene.add(this.torus)}loadTexts(){const e=new E,t=[new v({color:16777215}),new v({color:131622})];e.load("./res/style/fonts/Montserrat ExtraBold_Regular.json",(e=>{{const s=new S("SOMOS UN ",{font:e,size:1,height:1}),o=new w(s,t);o.position.set(-4,1.25,10),this.scene.add(o)}{const s=new S("UNIVERSO CREATIVO",{font:e,size:2,height:1}),o=new w(s,t);o.position.set(-16,-.7,9),this.scene.add(o)}{const s=new S("¿Qué hacemos por ti?",{font:e,size:12,height:1}),o=new w(s,t);o.rotation.x=.6,o.position.set(180,80,30),this.scene.add(o)}{const s=new S("Archenautas",{font:e,size:22,height:5}),o=new w(s,t);o.rotation.x=.5,o.position.set(1200,67,55),this.scene.add(o)}}))}loadAStar(){let e=function(){let e,t=parseInt(5*Math.random()),s=parseInt(5*Math.random()),o=.5+parseFloat(Math.random());s>2&&(o*=o),s>3&&(o*=o),e=new y(o,t,s);const n=new v({color:16777215,wireframe:!0}),i=new w(e,n);i.rotation.x=x.randFloatSpread(10),i.rotation.y=x.randFloatSpread(10),i.rotation.z=x.randFloatSpread(10);const[a,r,c]=Array(3).fill().map((()=>x.randFloatSpread(500)));return i.position.set(2*a,r+200,c),i}();this.scene.add(e)}}({DEBUG:!0}),T=new class{constructor(e){this.scene=e}update(){const e=document.body.getBoundingClientRect().top;this.scene.DEBUG&&console.log(e),e<-this.scene.sceneBreakpoints.default[4]?(this.scene.camera.rotation.set(...this.scene.sceneVariables.camera.rot),this.scene.camera.position.z=45-this.scene.sceneVariables.camera.pos[2],this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]+1):(this.scene.camera.position.z=this.scene.sceneVariables.camera.pos[2]+-.01*e,e<-this.scene.sceneBreakpoints.default[0]?this.scene.camera.rotation.x=this.scene.sceneVariables.camera.rot[0]:this.scene.camera.rotation.x=this.scene.sceneVariables.camera.rot[0]-5e-5*(e+this.scene.sceneBreakpoints.default[0]),e<-this.scene.sceneBreakpoints.default[0]?e>-this.scene.sceneBreakpoints.default[2]?this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]-.0065*(e+this.scene.sceneBreakpoints.default[0]):this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]-.0065*(-this.scene.sceneBreakpoints.default[2]+this.scene.sceneBreakpoints.default[0]):this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1],e<-this.scene.sceneBreakpoints.default[1]?this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0]-.03*(e+this.scene.sceneBreakpoints.default[1]):this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0],e<-this.scene.sceneBreakpoints.default[2]?(this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0]-.25*(e+this.scene.sceneBreakpoints.default[2])-.03*(e+this.scene.sceneBreakpoints.default[1]),e>-this.scene.sceneBreakpoints.default[3]?this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1]+2e-4*(e+this.scene.sceneBreakpoints.default[2]):this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1]+2e-4*(-this.scene.sceneBreakpoints.default[3]+this.scene.sceneBreakpoints.default[2])):this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1])}}(N);document.body.onscroll=function(e){T.update()},window.addEventListener("resize",(()=>{N.OnWindowResize()}),!1),T.update(),function e(){var t;requestAnimationFrame(e),N.torus.rotation.y+=.003,N.torus.rotation.x+=.001,N.rocketpivot.rotation.x+=.001,N.rocketpivot.rotation.y+=.002,N.rocketpivot.rotation.z-=.002,document.body.getBoundingClientRect().top<-N.sceneBreakpoints.default[4]&&(N.camera.position.x=(t=N.camera.position.x,(-N.sceneVariables.camera.pos[0]-t)*.2+t)),N.renderer.render(N.scene,N.camera)}(),window.addEventListener("load",(function(e){document.getElementById("mainMenuModal").addEventListener("click",(function(e){document.body.classList.toggle("noScroll"),console.log("asd"),document.getElementById("mainModal").classList.toggle("modalState"),document.getElementById("mainMenuContent").classList.toggle("displayNone")})),document.querySelectorAll(".modalLinkButton").forEach((e=>{e.addEventListener("click",(function(e){document.getElementById("mainModal").classList.toggle("modalState"),document.getElementById("mainMenuContent").classList.toggle("displayNone")}))}))}));