(function(){"use strict";var e={6002:function(e,t,i){var n=i(9242),r=i(3396);function a(e,t){const i=(0,r.up)("router-link"),n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(i,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Головна")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(i,{to:"/workers"},{default:(0,r.w5)((()=>[(0,r.Uk)("Робітники")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(i,{to:"/candidates"},{default:(0,r.w5)((()=>[(0,r.Uk)("Кандідати")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(i,{to:"/interviews"},{default:(0,r.w5)((()=>[(0,r.Uk)("Співбесіди")])),_:1})]),(0,r.Wm)(n)],64)}var d=i(89);const s={},o=(0,d.Z)(s,[["render",a]]);var c=o,l=i(2483);const u={class:"home"};function w(e,t,i,n,a,d){return(0,r.wg)(),(0,r.iD)("div",u," Головна ")}var v={name:"HomeView"};const k=(0,d.Z)(v,[["render",w]]);var m=k,g=i(7139);const L=(0,r._)("h3",null,"Наші працівники",-1);function p(e,t,i,n,a,d){return(0,r.wg)(),(0,r.iD)("div",null,[L,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getWorkersList,(({name:e,id:t})=>((0,r.wg)(),(0,r.iD)("ul",{key:t},[(0,r._)("li",null,(0,g.zw)(e),1)])))),128))])}var h=i(65),f={name:"WorkersView",computed:{...(0,h.Se)("workers",["getWorkersList"])},created(){this.onLoadWorkersList()},methods:{...(0,h.nv)("workers",["onLoadWorkersList"])}};const W=(0,d.Z)(f,[["render",p]]);var y=W;function C(e,t,i,n,a,d){const s=(0,r.up)("interviews-list"),o=(0,r.up)("interviews-edit");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(o)])}const I=e=>((0,r.dD)("data-v-c4c73724"),e=e(),(0,r.Cn)(),e),_={class:"container"},D=I((()=>(0,r._)("h2",{class:"header"},[(0,r._)("p",null,"Працівник"),(0,r._)("p",null,"Кандидат"),(0,r._)("p",null,"День")],-1))),b={class:"interview"},O=["onClick"];function B(e,t,i,n,a,d){return(0,r.wg)(),(0,r.iD)("div",_,[D,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getInterviewsList,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r._)("div",b,[(0,r._)("span",null,(0,g.zw)(e.workerName.name)+"---"+(0,g.zw)(e.workerName.category),1),(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(e.candidate.name)+" -- "+(0,g.zw)(e.candidate.category),1),(0,r.Uk)(),(0,r._)("span",null,(0,g.zw)(e.day),1)]),(0,r._)("button",{onClick:t=>d.onDelete(e)},"Видалити",8,O)])))),128))])])}var z={name:"InterviewsList",computed:{...(0,h.Se)("interviews",["getInterviewsList"]),...(0,h.Se)("workers",["getWorkersList"]),...(0,h.Se)("candidates",["getCandidatesList"])},created(){this.onLoadWorkersList(),this.onLoadCandidatesList()},methods:{...(0,h.nv)("workers",["onLoadWorkersList"]),...(0,h.nv)("candidates",["onLoadCandidatesList"]),...(0,h.nv)("interviews",["deleteInterview"]),...(0,h.OI)("workers",["addWorkerById"]),...(0,h.OI)("candidates",["addCandidateById"]),onDelete(e){const t=this.getWorkersList.find((t=>t.name===e.workerName.name)),i=this.getCandidatesList.find((t=>t.name===e.candidate.name));this.addWorkerById(t),this.addCandidateById(i),this.deleteInterview(e.id)}}};const U=(0,d.Z)(z,[["render",B],["__scopeId","data-v-c4c73724"]]);var E=U;const S=e=>((0,r.dD)("data-v-53335892"),e=e(),(0,r.Cn)(),e),A={class:"wrapper"},H={class:"container__edit"},V=S((()=>(0,r._)("span",null,"Працівник",-1))),Y=["value"],Z=S((()=>(0,r._)("span",null,"Кандидат",-1))),j=["value"],K=S((()=>(0,r._)("span",null,"День",-1))),N=["value"];function T(e,t,i,a,d,s){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",H,[(0,r._)("label",null,[V,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>d.interview.workerName=e),onChange:t[1]||(t[1]=(...e)=>s.chooseWorker&&s.chooseWorker(...e))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getEditWorkersList,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:{name:e.name,category:e.category,id:e.id}},(0,g.zw)(e.name)+" -- "+(0,g.zw)(e.category),9,Y)))),128))],544),[[n.bM,d.interview.workerName]])]),(0,r._)("label",null,[Z,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.interview.candidate=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.updateCandidatesList,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:{name:e.name,category:e.category,id:e.id}},(0,g.zw)(e.name)+" -- "+(0,g.zw)(e.category),9,j)))),128))],512),[[n.bM,d.interview.candidate]])]),(0,r._)("label",null,[K,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>d.interview.day=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getWorkerWeek,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.title},(0,g.zw)(e.title),9,N)))),128))],512),[[n.bM,d.interview.day]])])]),(0,r._)("button",{id:"button",onClick:t[4]||(t[4]=(...e)=>s.onAdd&&s.onAdd(...e))},"Додати")])}var x={name:"InterviewsEdit",data(){return{interview:{},selectedWorker:{},updateCandidatesList:[]}},computed:{...(0,h.Se)("interviews",["getWorkerWeek"]),...(0,h.Se)("workers",["getWorkersList"]),...(0,h.Se)("workers",["getEditWorkersList"]),...(0,h.Se)("candidates",["getCandidatesList"]),...(0,h.Se)("candidates",["getEditCandidatesList"])},created(){this.updateCandidatesList=this.getEditCandidatesList},methods:{...(0,h.nv)("interviews",["onAddInterview"]),...(0,h.OI)("workers",["removeWorkerById"]),...(0,h.OI)("workers",["selectWorkerByCandidate"]),...(0,h.OI)("candidates",["removeCandidateById"]),onAdd(){this.onAddInterview(this.interview);const e=this.selectedWorker?this.selectedWorker.id:null;console.log("workerId",e),null!==e&&this.removeWorkerById(e);const t=this.getCandidatesList.find((e=>e.name===this.interview.candidate.name)),i=t?t.id:null;if(null!==i){this.removeCandidateById(i),this.updateCandidatesList=this.getEditCandidatesList;const e=this.selectedWorker.category;this.updateCandidatesList=this.updateCandidatesList.filter((t=>t.category!==e))}this.interview={}},chooseWorker(){this.selectedWorker=this.getWorkersList.find((e=>e.name===this.interview.workerName.name));const e=this.selectedWorker.category;this.updateCandidatesList=this.updateCandidatesList.filter((t=>t.category===e))}}};const M=(0,d.Z)(x,[["render",T],["__scopeId","data-v-53335892"]]);var P=M,Q={name:"InterviewsView",components:{InterviewsList:E,InterviewsEdit:P}};const F=(0,d.Z)(Q,[["render",C]]);var q=F;const G=(0,r._)("h3",null,"Кандідати",-1);function J(e,t,i,n,a,d){return(0,r.wg)(),(0,r.iD)("div",null,[G,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getCandidatesList,(({name:e,id:t})=>((0,r.wg)(),(0,r.iD)("ul",{key:t},[(0,r._)("li",null,(0,g.zw)(e),1)])))),128))])}var R={name:"CandidatesView",computed:{...(0,h.Se)("candidates",["getCandidatesList"])},created(){this.onLoadCandidatesList()},methods:{...(0,h.nv)("candidates",["onLoadCandidatesList"])}};const X=(0,d.Z)(R,[["render",J]]);var $=X;const ee=[{path:"/",name:"home",component:m},{path:"/workers",name:"workers",component:y},{path:"/candidates",name:"candidates",component:$},{path:"/interviews",name:"interviews",component:q}],te=(0,l.p7)({history:(0,l.PO)("/"),routes:ee});var ie=te;i(560);const ne=[{id:1,name:"Максимов І.Б.",category:"Веб-розробник"},{id:2,name:"Ткачук І.Б.",category:"Фронтенд-розробник"},{id:3,name:"Кузнецов І.Б.",category:"QA інженер"},{id:4,name:"Григоренко І.Б.",category:"Ігровий розробник"},{id:5,name:"Онопрієнко І.Б.",category:"Фронтенд-розробник"}],re=[{id:1,name:"Савченко І.Б.",category:"Фронтенд-розробник"},{id:2,name:"Бойко І.Б.",category:"QA інженер"},{id:3,name:"Марченко І.Б.",category:"Веб-розробник"},{id:4,name:"Приходько І.Б.",category:"Ігровий розробник"},{id:5,name:"Шевченко І.Б.",category:"QA інженер"}],ae=[{id:1,title:"Понеділок"},{id:2,title:"Вівторок"},{id:3,title:"Середа"},{id:4,title:"Четвер"},{id:5,title:"Пятниця"}];var de={namespaced:!0,state:{workersList:[],editWorkersList:[]},getters:{getWorkersList:e=>e.workersList,getWorkerById:e=>t=>e.workersList.find((e=>e.id===t)),getEditWorkersList:e=>e.editWorkersList},mutations:{onLoadWorkersList(e,t){e.workersList=t,e.editWorkersList=[...e.workersList]},removeWorkerById(e,t){e.editWorkersList=e.editWorkersList.filter((e=>e.id!==t))},addWorkerById(e,t){console.log("fullWorker",t),e.editWorkersList.push({...t,id:(new Date).getTime()})}},actions:{onLoadWorkersList({commit:e}){e("onLoadWorkersList",ne)}}},se={namespaced:!0,state:{candidatesList:[],editCandidatesList:[]},getters:{getCandidatesList:e=>e.candidatesList,getCandidateById:e=>t=>e.candidatesList.find((e=>e.id==t)),getEditCandidatesList:e=>e.editCandidatesList},mutations:{onLoadCandidatesList(e,t){e.candidatesList=t,e.editCandidatesList=[...e.candidatesList]},addCandidateById(e,t){console.log("fullCandidate",t),e.editCandidatesList.push({...t,id:(new Date).getTime()})},removeCandidateById(e,t){e.editCandidatesList=e.editCandidatesList.filter((e=>e.id!==t))}},actions:{onLoadCandidatesList({commit:e}){e("onLoadCandidatesList",re)}}},oe={namespaced:!0,state:{workerWeek:ae,interviewsList:[]},getters:{getWorkerWeek:e=>e.workerWeek,getWorkerLoop:e=>e.workerWeek,getInterviewsList:e=>e.interviewsList},mutations:{setInterview(e,t){e.interviewsList.push(t)},deleteInterview(e,t){e.interviewsList=e.interviewsList.filter((e=>e.id!==t))}},actions:{onAddInterview({commit:e},t){e("setInterview",{id:(new Date).getTime(),...t})},deleteInterview({commit:e},t){e("deleteInterview",t)}}},ce=(0,h.MT)({modules:{workers:de,candidates:se,interviews:oe}});(0,n.ri)(c).use(ce).use(ie).mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,a){if(!n){var d=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,o=0;o<n.length;o++)(!1&a||d>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(s=!1,a<d&&(d=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,d=n[0],s=n[1],o=n[2],c=0;if(d.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(o)var l=o(i)}for(t&&t(n);c<d.length;c++)a=d[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(l)},n=self["webpackChunkinterviews_manager"]=self["webpackChunkinterviews_manager"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6002)}));n=i.O(n)})();
//# sourceMappingURL=app.81f14a77.js.map