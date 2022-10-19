var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,n=(e,n)=>{for(var a in n||(n={}))s.call(n,a)&&o(e,a,n[a]);if(t)for(var a of t(n))i.call(n,a)&&o(e,a,n[a]);return e};import{C as a,L as r,F as c,G as l,B as h,a as d,b as p,M as m,P as u,c as g,d as f,e as b,f as v,V as j,S as w,g as y,h as x,T as O,i as k,j as C,k as L,W as S,l as I,m as M,n as D}from"./vendor.ebcebb16.js";const E=/^[og]\s*(.+)?/,R=/^mtllib /,V=/^usemtl /,A=/^usemap /,P=new j,z=new j,T=new j,B=new j,N=new j,U=new a;function F(){const e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);const s=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){const s=this._finalize(!1);s&&(s.inherited||s.groupCount<=0)&&this.materials.splice(s.index,1);const i={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==s?s.smooth:this.smooth,groupStart:void 0!==s?s.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){const t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let s=this.materials.length-1;s>=0;s--)this.materials[s].groupCount<=0&&this.materials.splice(s,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},s&&s.name&&"function"==typeof s.clone){const e=s.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseNormalIndex:function(e,t){const s=parseInt(e,10);return 3*(s>=0?s-1:s+t/3)},parseUVIndex:function(e,t){const s=parseInt(e,10);return 2*(s>=0?s-1:s+t/2)},addVertex:function(e,t,s){const i=this.vertices,o=this.object.geometry.vertices;o.push(i[e+0],i[e+1],i[e+2]),o.push(i[t+0],i[t+1],i[t+2]),o.push(i[s+0],i[s+1],i[s+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,s){const i=this.normals,o=this.object.geometry.normals;o.push(i[e+0],i[e+1],i[e+2]),o.push(i[t+0],i[t+1],i[t+2]),o.push(i[s+0],i[s+1],i[s+2])},addFaceNormal:function(e,t,s){const i=this.vertices,o=this.object.geometry.normals;P.fromArray(i,e),z.fromArray(i,t),T.fromArray(i,s),N.subVectors(T,z),B.subVectors(P,z),N.cross(B),N.normalize(),o.push(N.x,N.y,N.z),o.push(N.x,N.y,N.z),o.push(N.x,N.y,N.z)},addColor:function(e,t,s){const i=this.colors,o=this.object.geometry.colors;void 0!==i[e]&&o.push(i[e+0],i[e+1],i[e+2]),void 0!==i[t]&&o.push(i[t+0],i[t+1],i[t+2]),void 0!==i[s]&&o.push(i[s+0],i[s+1],i[s+2])},addUV:function(e,t,s){const i=this.uvs,o=this.object.geometry.uvs;o.push(i[e+0],i[e+1]),o.push(i[t+0],i[t+1]),o.push(i[s+0],i[s+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,s,i,o,n,a,r,c){const l=this.vertices.length;let h=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),p=this.parseVertexIndex(s,l);if(this.addVertex(h,d,p),this.addColor(h,d,p),void 0!==a&&""!==a){const e=this.normals.length;h=this.parseNormalIndex(a,e),d=this.parseNormalIndex(r,e),p=this.parseNormalIndex(c,e),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(void 0!==i&&""!==i){const e=this.uvs.length;h=this.parseUVIndex(i,e),d=this.parseUVIndex(o,e),p=this.parseUVIndex(n,e),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let s=0,i=e.length;s<i;s++){const i=this.parseVertexIndex(e[s],t);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const s=this.vertices.length,i=this.uvs.length;for(let o=0,n=e.length;o<n;o++)this.addVertexLine(this.parseVertexIndex(e[o],s));for(let o=0,n=t.length;o<n;o++)this.addUVLine(this.parseUVIndex(t[o],i))}};return e.startObject("",!1),e}class G extends r{constructor(e){super(e),this.materials=null}load(e,t,s,i){const o=this,n=new c(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(function(s){try{t(o.parse(s))}catch(n){i?i(n):console.error(n),o.manager.itemError(e)}}),s,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new F;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));const s=e.split("\n");let i="",o="",n=0,a=[];const r="function"==typeof"".trimLeft;for(let l=0,h=s.length;l<h;l++)if(i=s[l],i=r?i.trimLeft():i.trim(),n=i.length,0!==n&&(o=i.charAt(0),"#"!==o))if("v"===o){const e=i.split(/\s+/);switch(e[0]){case"v":t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?(U.setRGB(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6])).convertSRGBToLinear(),t.colors.push(U.r,U.g,U.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case"vt":t.uvs.push(parseFloat(e[1]),parseFloat(e[2]))}}else if("f"===o){const e=i.slice(1).trim().split(/\s+/),s=[];for(let t=0,i=e.length;t<i;t++){const i=e[t];if(i.length>0){const e=i.split("/");s.push(e)}}const o=s[0];for(let i=1,n=s.length-1;i<n;i++){const e=s[i],n=s[i+1];t.addFace(o[0],e[0],n[0],o[1],e[1],n[1],o[2],e[2],n[2])}}else if("l"===o){const e=i.substring(1).trim().split(" ");let s=[];const o=[];if(-1===i.indexOf("/"))s=e;else for(let t=0,i=e.length;t<i;t++){const i=e[t].split("/");""!==i[0]&&s.push(i[0]),""!==i[1]&&o.push(i[1])}t.addLineGeometry(s,o)}else if("p"===o){const e=i.slice(1).trim().split(" ");t.addPointGeometry(e)}else if(null!==(a=E.exec(i))){const e=(" "+a[0].slice(1).trim()).slice(1);t.startObject(e)}else if(V.test(i))t.object.startMaterial(i.substring(7).trim(),t.materialLibraries);else if(R.test(i))t.materialLibraries.push(i.substring(7).trim());else if(A.test(i))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===o){if(a=i.split(" "),a.length>1){const e=a[1].trim().toLowerCase();t.object.smooth="0"!==e&&"off"!==e}else t.object.smooth=!0;const e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if("\0"===i)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+i+'"')}t.finalize();const c=new l;c.materialLibraries=[].concat(t.materialLibraries);if(!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(let l=0,j=t.objects.length;l<j;l++){const e=t.objects[l],s=e.geometry,i=e.materials,o="Line"===s.type,n="Points"===s.type;let a=!1;if(0===s.vertices.length)continue;const r=new h;r.setAttribute("position",new d(s.vertices,3)),s.normals.length>0&&r.setAttribute("normal",new d(s.normals,3)),s.colors.length>0&&(a=!0,r.setAttribute("color",new d(s.colors,3))),!0===s.hasUVIndices&&r.setAttribute("uv",new d(s.uvs,2));const j=[];for(let c=0,l=i.length;c<l;c++){const e=i[c],s=e.name+"_"+e.smooth+"_"+a;let r=t.materials[s];if(null!==this.materials)if(r=this.materials.create(e.name),!o||!r||r instanceof p){if(n&&r&&!(r instanceof u)){const e=new u({size:10,sizeAttenuation:!1});m.prototype.copy.call(e,r),e.color.copy(r.color),e.map=r.map,r=e}}else{const e=new p;m.prototype.copy.call(e,r),e.color.copy(r.color),r=e}void 0===r&&(r=o?new p:n?new u({size:1,sizeAttenuation:!1}):new g,r.name=e.name,r.flatShading=!e.smooth,r.vertexColors=a,t.materials[s]=r),j.push(r)}let w;if(j.length>1){for(let e=0,t=i.length;e<t;e++){const t=i[e];r.addGroup(t.groupStart,t.groupCount,e)}w=o?new f(r,j):n?new b(r,j):new v(r,j)}else w=o?new f(r,j[0]):n?new b(r,j[0]):new v(r,j[0]);w.name=e.name,c.add(w)}else if(t.vertices.length>0){const e=new u({size:1,sizeAttenuation:!1}),s=new h;s.setAttribute("position",new d(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(s.setAttribute("color",new d(t.colors,3)),e.vertexColors=!0);const i=new b(s,e);c.add(i)}return c}}class H{constructor(e,t){this.scene=e,this.vuelike=t}update(){const e=document.body.getBoundingClientRect().top;if(this.vuelike.refs.ceoimg){let t=parseInt(.086*-e);this.vuelike.refs.ceoimg.style.transform=`translateX(${t-1200}px)`}this.scene.DEBUG&&console.log(e),e<-this.scene.sceneBreakpoints.default[4]?(this.scene.myPlanet.position.set(...this.scene.Objects.thePlanet.pos),this.scene.myRing.position.set(...this.scene.Objects.thePlanet.pos),this.scene.somosText&&this.scene.somosText.position.set(...this.scene.Objects.somosText.pos),this.scene.universoText&&this.scene.universoText.position.set(...this.scene.Objects.universoText.pos),this.scene.myPlanet.position.setY(5e3),this.scene.myRing.position.setY(5e3),this.scene.somosText&&this.scene.somosText.position.setY(5e3),this.scene.universoText&&this.scene.universoText.position.setY(5e3),this.scene.secondPlanet&&this.scene.secondPlanet.position.set(...this.scene.Objects.secondPlanet.pos)):(this.scene.myPlanet.position.set(...this.scene.Objects.thePlanet.pos),this.scene.myRing.position.set(...this.scene.Objects.thePlanet.pos),this.scene.somosText&&this.scene.somosText.position.set(...this.scene.Objects.somosText.pos),this.scene.universoText&&this.scene.universoText.position.set(...this.scene.Objects.universoText.pos),this.scene.secondPlanet.position.set(...this.scene.Objects.secondPlanet.pos),this.scene.secondPlanet.position.setY(5e3)),e<-this.scene.sceneBreakpoints.default[4]?(this.scene.camera.rotation.set(...this.scene.sceneVariables.camera.rot),this.scene.camera.position.z=45-this.scene.sceneVariables.camera.pos[2],this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]+1):(this.scene.camera.position.z=this.scene.sceneVariables.camera.pos[2]+-.01*e,e<-this.scene.sceneBreakpoints.default[0]?this.scene.camera.rotation.x=this.scene.sceneVariables.camera.rot[0]:this.scene.camera.rotation.x=this.scene.sceneVariables.camera.rot[0]-5e-5*(e+this.scene.sceneBreakpoints.default[0]),e<-this.scene.sceneBreakpoints.default[0]?e>-this.scene.sceneBreakpoints.default[2]?this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]-.0065*(e+this.scene.sceneBreakpoints.default[0]):this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1]-.0065*(-this.scene.sceneBreakpoints.default[2]+this.scene.sceneBreakpoints.default[0]):this.scene.camera.position.y=this.scene.sceneVariables.camera.pos[1],e<-this.scene.sceneBreakpoints.default[1]?this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0]-.03*(e+this.scene.sceneBreakpoints.default[1]):this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0],e<-this.scene.sceneBreakpoints.default[2]?(this.scene.camera.position.x=-this.scene.sceneVariables.camera.pos[0]-.25*(e+this.scene.sceneBreakpoints.default[2])-.03*(e+this.scene.sceneBreakpoints.default[1]),e>-this.scene.sceneBreakpoints.default[3]?this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1]+2e-4*(e+this.scene.sceneBreakpoints.default[2]):this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1]+2e-4*(-this.scene.sceneBreakpoints.default[3]+this.scene.sceneBreakpoints.default[2])):this.scene.camera.rotation.y=this.scene.sceneVariables.camera.rot[1])}}var W=[{imgsrc:"ISMARVIN",name:"Ismarvin Romero",folder:"GERENCIA",job:"Ejecutiva de Cuentas",joblength:"5 años",unix:1502133067,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{organizada:9,comprensiva:9,responsable:9,honesta:9}},{imgsrc:"DEISY",name:"Deisy Esteban",folder:"GERENCIA",job:"Directora creativa",joblength:"5 años",unix:1502823971,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Rigurosa:9,profesional:9,talentosa:9,Dory:9}},{imgsrc:"WILLIAM",name:"William Duque",folder:"GERENCIA",job:"Coordinador audiovisual",joblength:"5 años",unix:1501009571,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{autodidacta:9,"metódico":9,cuidadoso:9,"comiquia’o":9}},{imgsrc:"LUIS",name:"Luis Salcedo",folder:"SENIORS",job:"Community Senior",joblength:"3 años",unix:1541552827,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Divertido:9,proactivo:9,"pícaro":9,responsable:9}},{imgsrc:"GILIAN",name:"Gilian Oronoz",folder:"SENIORS",job:"Community Senior",joblength:"3 años",unix:1547089927,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Paciente:9,"versátil":9,"carismática":9,"simpática":9}},{imgsrc:"GUZBENIA",name:"Guzbenia Marcano",folder:"JUNIORS",job:"Community Manager",joblength:"3 años",unix:1550546174,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Colaboradora:9,dedicada:9,creativa:9,ocurrente:9}},{imgsrc:"FOGLIA",name:"Gaby Foglia",folder:"GERENCIA",job:"Curadora de contenidos",joblength:"3 años",unix:1549336879,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{"Analítica":9,estricta:9,ordenada:9,"regañona":9}},{imgsrc:"MACHADO",name:"Jesús Machado",folder:"SENIORS",job:"Diseñador Senior",joblength:"3 años",unix:1554419779,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Elocuente:9,extrovertido:9,ocurrente:9,"mil voces":9}},{imgsrc:"SAMIL",name:"Samil Rivera",folder:"JUNIORS",job:"Diseñador Junior",joblength:"2 años",unix:1594697431,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Innovador:9,Comunicativo:9,pasional:9,terco:9}},{imgsrc:"FERNANDO",name:"Fernando Fernández",folder:"SENIORS",job:"Diseñador Senior",joblength:"2 años",unix:1589246664,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Innovador:9,creativo:9,perfeccionista:9,resolutivo:9}},{imgsrc:"ANDRES",name:"Andrés Marín",folder:"JUNIORS",job:"Community Manager",joblength:"1 años y 11 meses",unix:1623525687,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{"Crítico":9,comunicativo:9,intuitivo:9,directo:9}},{imgsrc:"NIETO",name:"Gustavo Nieto",folder:"JUNIORS",job:"Community Junior",joblength:"1 año y 6 meses.",unix:1631827347,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Proactivo:9,"estratégico":9,"empático":9,"organizado.":9}},{imgsrc:"ROJAS",name:"Gabriela Rojas",folder:"JUNIORS",job:"Community Manager",joblength:"1 año y 6 meses",unix:1632349044,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{"Empática":9,responsable:9,"dinámica":9,"versátil":9}},{imgsrc:"FUENTES",name:"Gustavo Fuentes",folder:"SENIORS",job:"Community Senior",joblength:"1 año y seis meses",unix:1616004924,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Competitivo:9,persuasivo:9,realista:9,"sarcástico.":9}},{imgsrc:"ORIANA",name:"Oriana Azócar",folder:"JUNIORS",job:"Community Manager",joblength:"10 meses",unix:1639318524,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{"Empática":9,creativa:9,resolutiva:9,cuchi:9}},{imgsrc:"MARIA-FERNANDA",name:"María Fernanda Anés",folder:"JUNIORS",job:"Diseñadora junior",joblength:"5 meses",unix:1650125907,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Resolutiva:9,proactiva:9,curiosa:9,cuchi:9}},{imgsrc:"SIERRA",name:"Jesús Sierra",folder:"JUNIORS",job:"Diseñador junior",joblength:"5 meses",unix:1650651627,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{Comunicativo:9,observador:9,cooperativo:9,introvertido:9}},{imgsrc:"KARIM",name:"Karim Perdomo",folder:"JUNIORS",job:"Diseñadora",joblength:"10 meses",unix:1642875627,skills:{Creatividad:9,Diseno:9,Liderazgo:9,Curiosidad:9},person:{vanguardista:9,comprensiva:9,ingeniosa:9,"elástica":9}}];class J{constructor(e,t,s,i=null){this.$container=$(e),this.scene=s,this.options=Object.assign({},t),this.data=Object.assign({people:W},i),this.requests={},this.refs={},this.updaters={},this.watchers={testfield:e=>{const t=e.currentTarget.value;this.refs.reactivfield.innerHTML=t}},this.clickers={updatePerson:e=>{const t=e.currentTarget.dataset.args;if(!this.data.people[t])return;this.$container.find("#person_name")[0].innerHTML=this.data.people[t].name.toUpperCase(),this.$container.find("#person_job")[0].innerHTML=this.data.people[t].job,this.$container.find("#person_group")[0].innerHTML=`\n\t\t\t\t\t\t<img style="display: block; width: 200px" class=" " src="res/img/${this.data.people[t].folder}/stars.png"/>\n\t\t\t\t\t`;let s=this.getMonthDifference(new Date(1e3*this.data.people[t].unix),new Date),i="";if(s>11){let e="";s>23&&(e="s");let t=Math.floor(s/12);if(s%12==0)i=t+" Año"+e;else{let o="";s-12*t>1&&(o="es"),i=t+" Año"+e+", <small>"+(s-12*t)+" Mes"+o+" <small/>"}}else{let e="";s>1&&(e="es"),i=s+" Mes"+e}this.$container.find("#person_joblength")[0].innerHTML=i,this.$container.find("#person_img")[0].innerHTML=`\n\t\t\t\t\t<img style="display: block" class=" w-100" src="res/img/${this.data.people[t].folder}/${this.data.people[t].imgsrc}-02.jpg"/>\n\t\t\t\t`;const o=Object.keys(this.data.people[t].person),n=Object.keys(this.data.people[t].skills);for(var a=0;a<n.length;a++){if(!this.$container.find(`#person_${n[a]}`)[0])return;this.$container.find(`#person_${n[a]}`)[0].innerHTML="name"==n[a]?this.data.people[t].skills[n[a]]:`\n\t\t\t\t\t\t<div >\n\t\t\t\t\t\t\t<span class="tx-sm">${o[a].toUpperCase()}</span>\n\t\t\t\t\t\t\t<div class="flex mb-4 mt-1">\n\t\t\t\t\t\t\t\t<div style="width:${10*(this.data.people[t].skills[n[a]]-1)}%; height: 10px; background: #94D048;"> </div>\n\t\t\t\t\t\t\t\t<div style="width:${10*(10-this.data.people[t].skills[n[a]])}%; height: 10px; background: #ffffff;"> </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>`}}},this.initDOM(),this.initWatchers(),this.initRefs()}initDOM(){let e=this;const t=this.$container.find("[data-for-click]");for(var s=0;s<t.length;s++){const o=t[s].dataset.forClick;console.log(o);let n=this.data[t[s].dataset.items];for(var i=0;i<n.length;i++){let a=t[s].children[0].cloneNode();a.innerHTML=n[i].name,a.innerHTML=`\n\t\t\t\t\t<div class="flex-column">\n\t\t\t\t\t\t<img style="width: 150px;" src="res/img/${n[i].folder}/${n[i].imgsrc}.png"/>\n\t\t\t\t\t</div>\n\t\t\t\t`,a.dataset.args=i,a.addEventListener("click",(function(t){e.clickers[o](t)})),t[s].append(a)}t[s].removeChild(t[s].children[0]),t[s].children[0].click()}}initRefs(){const e=this.$container.find("[data-ref]");console.log(e);for(var t=0;t<e.length;t++)this.refs[e[t].dataset.ref]=e[t],console.log("****************************this.refs****************************"),console.log(this.refs)}initWatchers(){let e=this;this.$container.on("keyup","[data-watch]",(function(t){e.watchers[$(this).data("watch")](t)})),this.$container.on("click","[data-click]",(function(t){e.clickers[$(this).data("click")](t)}))}calculateAge(e){var t=Date.now()-e,s=new Date(t);return Math.abs(s.getUTCFullYear()-1970)}getMonthDifference(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}}function _(){requestAnimationFrame(_),Y.torus.rotation.y+=.003,Y.torus.rotation.x+=.001,Y.rocketpivot.rotation.x+=.001,Y.rocketpivot.rotation.y+=.002,Y.rocketpivot.rotation.z-=.002;var e;document.body.getBoundingClientRect().top<-Y.sceneBreakpoints.default[4]&&(Y.camera.position.x=(e=Y.camera.position.x,(-Y.sceneVariables.camera.pos[0]-e)*.2+e)),Y.renderer.render(Y.scene,Y.camera)}const Y=new class{constructor(e={DEBUG:!1,DOM:{},Objects:{},sceneBreakpoints:{},sceneVariables:{}}){const t={DOM:{},Objects:{sat:{file:"sat.obj",path:"./res/models/",wireframe:!0,pos:[50,35,45],rot:[0,.7,1],scale:[3,3,3]},rocket:{file:"rocket.obj",path:"./res/models/",wiremat:!0,pos:[1300,122,5],rot:[.5,1.5,0],scale:[18,18,18]},thePlanet:{path:!1,pos:[-200,120,-300],rot:[0,0,0],SphereGeometry:[32,12,12]},secondPlanet:{path:!1,pos:[0,120,-300],rot:[0,0,0],SphereGeometry:[186,12,12]},somosText:{path:!1,pos:[-4,1.5,10]},universoText:{path:!1,pos:[-16,-.7,9]}},sceneBreakpoints:{default:[],mobile:[1900,4500,8500,9e3,16500],desktop:[2400,4500,8e3,8600,14400]},sceneVariables:{camera:{pos:[0,0,9],rot:[.5,0,0],fov:75,fovSettings:{mobile:120,desktop:75},minReach:.1,maxReach:1e3}}};this.DEBUG=e.DEBUG,this.DOM=n(n({},t.DOM),e.DOM),this.Objects=n(n({},t.Objects),e.Objects),this.sceneBreakpoints=n(n({},t.sceneBreakpoints),e.sceneBreakpoints),this.sceneVariables=n(n({},t.sceneVariables),e.sceneVariables),this.init()}init(){this.setWindowRatio(),this.setWindowSettings(),this.setScene(),this.loadSkeletonObjects(),this.loadWireframeObjects(),Array(200).fill().forEach((()=>{this.loadAStar()})),this.loadTexts(),this.loadSpaceObjects(),this.setRenderer(),this.renderer.render(this.scene,this.camera)}setWindowRatio(){this.DOM.ratio=window.innerWidth/window.innerHeight;let e=this.DOM.ratio>1?"desktop":"mobile";this.sceneBreakpoints.default=this.sceneBreakpoints[e],this.sceneVariables.camera.fov=this.sceneVariables.camera.fovSettings[e]}setWindowSettings(){this.DOM.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),console.log("full height",this.DOM.height)}OnWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}setScene(){this.scene=new C;const e=(new k).load("res/img/bg.jpg");this.scene.background=e;let t=new L(this.sceneVariables.camera.fov,this.DOM.ratio,this.sceneVariables.camera.minReach,this.sceneVariables.camera.maxReach);t.position.set(...this.sceneVariables.camera.pos),t.rotation.set(...this.sceneVariables.camera.rot),this.camera=t}setRenderer(){this.renderer=new S({canvas:document.querySelector("#bg")}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight)}onLoadProgress(e){if(e.lengthComputable){const t=e.loaded/e.total*100;if(this.DEBUG){console.log("loading objects...");let s=e.currentTarget.responseURL.replace("http://localhost:3000/","");console.log(s,Math.round(t,2)+"% downloaded")}}}loadSkeletonObjects(){for(const e in this.Objects)this.Objects[e].path&&(new G).setPath(this.Objects[e].path).load(this.Objects[e].file,(t=>{(this.Objects[e].wireframe||this.Objects[e].wiremat)&&t.traverse((function(e){e.isMesh&&(e.material=new y({color:16777215,wireframe:!0}))})),t.position.set(this.Objects[e].pos[0],this.Objects[e].pos[1],this.Objects[e].pos[2]),t.rotation.set(this.Objects[e].rot[0],this.Objects[e].rot[1],this.Objects[e].rot[2]),t.scale.set(this.Objects[e].scale[0],this.Objects[e].scale[1],this.Objects[e].scale[2]),this.scene.add(t),this.Objects[e].wiremat&&(new G).setPath(this.Objects[e].path).load(this.Objects[e].file,(t=>{t.position.set(...this.Objects[e].pos),t.rotation.set(...this.Objects[e].rot),t.scale.set(...this.Objects[e].scale),this.scene.add(t)}),this.onLoadProgress)}),this.onLoadProgress)}loadWireframeObjects(){(new G).setPath("./res/models/").load("ready land.obj",(e=>{e.traverse((function(e){e.isMesh&&(e.material=new y({color:16777215,wireframe:!0,linewidth:3}))})),e.position.set(0,-.85,-35),e.scale.set(15,15,15),this.scene.add(e)}),this.onLoadProgress),(new G).setPath("./res/models/").load("ready land.obj",(e=>{e.traverse((function(e){e.isMesh&&(e.material=new y({color:0}))})),e.position.set(0,-.875,-35),e.scale.set(15,15,15),this.scene.add(e)}),this.onLoadProgress)}loadSpaceObjects(){let e=n({},this.Objects.secondPlanet),t=n({},this.Objects.thePlanet);const s=(new k).load("res/img/DEGRADE-PLANETA.jpg");this.myPlanet=new v(new w(...t.SphereGeometry),new y({map:s})),this.myPlanet.position.set(...t.pos),this.myPlanet.rotation.set(...t.rot),this.scene.add(this.myPlanet),this.secondPlanet=new v(new w(...e.SphereGeometry),new y({color:16777215,wireframe:!0})),this.secondPlanetFill=new v(new w(...e.SphereGeometry),new y({color:16770453,opacity:.3,transparent:!0})),this.secondPlanet.add(this.secondPlanetFill),this.secondPlanet.position.set(...e.pos),this.secondPlanet.rotation.set(...e.rot),this.scene.add(this.secondPlanet);let i=function(e){let t={pos:e.pos,rot:[2.4,0,-2],torus:[45,8,12,64],scale:[1,1,.02]};const s=new O(...t.torus),i=(new k).load("res/img/DEGRADE--ANILLOS-PLANETA.jpg");let o=new v(s,new y({map:i}));return o.position.set(...t.pos),o.rotation.set(...t.rot),o.scale.set(...t.scale),o}(n({},this.Objects.thePlanet));this.myRing=i,this.scene.add(this.myRing);let o=n({},this.Objects.rocket),a={pos:[o.pos[0]-20,o.pos[1],o.pos[2]],rot:[0,.5,1],box:[35,35,35]};this.rocketpivot=new l;const r=new I(...a.box);let c=new v(r,new y({color:16777215,wireframe:!0})),h=new v(r,new y({color:0}));this.rocketpivot.add(c),this.rocketpivot.add(h),this.rocketpivot.position.set(...a.pos),this.scene.add(this.rocketpivot);let d=function(){let e={pos:[750,80,55],torus:[50,15,8,32]};const t=new O(...e.torus),s=new y({color:1773375,wireframe:!0});let i=new v(t,s);return i.position.set(...e.pos),i}();this.torus=d,this.scene.add(this.torus)}loadTexts(){const e=new M,t=[new y({color:16777215}),new y({color:131622})];e.load("./res/style/fonts/Montserrat ExtraBold_Regular.json",(e=>{{const s=new D("SOMOS UN ",{font:e,size:1,height:1});this.somosText=new v(s,t),this.somosText.position.set(...this.Objects.somosText.pos),this.scene.add(this.somosText)}{const s=new D("UNIVERSO CREATIVO",{font:e,size:2,height:1});this.universoText=new v(s,t),this.universoText.position.set(...this.Objects.universoText.pos),this.scene.add(this.universoText)}{const s=new D("¿Qué hacemos por ti?",{font:e,size:12,height:1}),i=new v(s,t);i.rotation.x=.6,i.position.set(180,80,30),this.scene.add(i)}{const s=new D("Archenautas",{font:e,size:22,height:5}),i=new v(s,t);i.rotation.x=.5,i.position.set(1200,97,25),this.scene.add(i)}}))}loadAStar(){let e=function(){let e,t=parseInt(5*Math.random()),s=parseInt(5*Math.random()),i=.5+parseFloat(Math.random());s>2&&(i*=i),s>3&&(i*=i),e=new w(i,t,s);const o=new y({color:16777215,wireframe:!0}),n=new v(e,o);n.rotation.x=x.randFloatSpread(10),n.rotation.y=x.randFloatSpread(10),n.rotation.z=x.randFloatSpread(10);const[a,r,c]=Array(3).fill().map((()=>x.randFloatSpread(500)));return n.position.set(2*a,r+200,c),n}();this.scene.add(e)}}({DEBUG:!1});$(document).ready((()=>{const e=new J("#templateViewId",{},Y),t=new H(Y,e);t.update(),_(),document.body.onscroll=function(e){t.update()},window.addEventListener("resize",(()=>{Y.OnWindowResize()}),!1),document.getElementById("mainMenuModal").addEventListener("click",(function(e){document.body.classList.toggle("noScroll"),document.getElementById("mainModal").classList.toggle("modalState"),document.getElementById("mainMenuContent").classList.toggle("displayNone")})),document.querySelectorAll(".modalLinkButton").forEach((e=>{e.addEventListener("click",(function(e){document.body.classList.toggle("noScroll"),document.getElementById("mainModal").classList.toggle("modalState"),document.getElementById("mainMenuContent").classList.toggle("displayNone")}))}))}));
