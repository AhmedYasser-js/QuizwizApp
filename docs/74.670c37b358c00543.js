"use strict";(self.webpackChunkQuizwizApp=self.webpackChunkQuizwizApp||[]).push([[74],{3074:(z,u,d)=>{d.r(u),d.d(u,{StudentsModule:()=>F});var l=d(6814),p=d(3403),s=d(6223),g=d(7700),t=d(5879),m=d(9157);function f(o,i){1&o&&(t.TgZ(0,"mat-error",16),t._uU(1,"name is required"),t.qZA())}function h(o,i){1&o&&(t.TgZ(0,"mat-error",17),t._uU(1,"name isn't Validator"),t.qZA())}function b(o,i){if(1&o&&(t.TgZ(0,"div",13),t.YNc(1,f,2,0,"mat-error",14),t.YNc(2,h,2,0,"mat-error",15),t.qZA()),2&o){const n=t.oxw();let e,r;t.xp6(1),t.Q6J("ngIf",null==(e=n.studentForm.get("name"))?null:e.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(r=n.studentForm.get("name"))?null:r.getError("name"))}}function C(o,i){1&o&&(t.TgZ(0,"mat-error",16),t._uU(1,"phone is required"),t.qZA())}function x(o,i){1&o&&(t.TgZ(0,"mat-error",17),t._uU(1,"name isn't Validator"),t.qZA())}function O(o,i){if(1&o&&(t.TgZ(0,"div",13),t.YNc(1,C,2,0,"mat-error",14),t.YNc(2,x,2,0,"mat-error",15),t.qZA()),2&o){const n=t.oxw();let e,r;t.xp6(1),t.Q6J("ngIf",null==(e=n.studentForm.get("phone"))?null:e.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(r=n.studentForm.get("phone"))?null:r.getError("phone"))}}let M=(()=>{class o{constructor(n,e){this.dialogRef=n,this.data=e,this.action="add",this.studentForm=new s.cw({name:new s.NI(null,[s.kI.required]),phone:new s.NI(null,[s.kI.required])})}onSubmit(n,e){}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(g.so),t.Y36(g.WI))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-student"]],decls:24,vars:5,consts:[["id","addEdit"],[1,"header","d-flex","justify-content-between","px-3","align-items-center"],[1,"w-50"],[1,"w-25","headIcone","d-flex","justify-content-end"],[1,"corect","fa-solid","fa-check","fs-4","p-4",3,"mat-dialog-close"],[1,"close","fa-solid","fa-xmark","fs-4","p-4",3,"click"],[1,"form-item",3,"formGroup"],[1,"input-group","mb-3","custom-input"],[1,"input-group-text","px-2","py-3","fs-","rounded","rounded-start-3","rounded-end-0","border","border-1","border-end-0","bg-mainColor_light"],[1,"y-line","my-auto"],["type","text","placeholder","Group Name :","formControlName","name",1,"form-control","rounded-end","py-1","bg-transparent","ps-3","border","border-1"],["class","text-red m-0 mx-auto p-0 text-start alert alert-danger p-2",4,"ngIf"],["type","text","placeholder","Group Name :","formControlName","phone",1,"form-control","rounded-end","py-1","bg-transparent","ps-3","border","border-1"],[1,"text-red","m-0","mx-auto","p-0","text-start","alert","alert-danger","p-2"],["class","text-red",4,"ngIf"],["class","text-red p-0 block",4,"ngIf"],[1,"text-red"],[1,"text-red","p-0","block"]],template:function(e,r){if(1&e&&(t.TgZ(0,"section",0)(1,"section",1)(2,"div",2)(3,"h4"),t._uU(4,"Set up a new Student"),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()(),t.TgZ(7,"div",3),t._UZ(8,"i",4),t.TgZ(9,"i",5),t.NdJ("click",function(){return r.onNoClick()}),t.qZA()()(),t.TgZ(10,"mat-dialog-content")(11,"form",6)(12,"div",7)(13,"span",8),t._uU(14," Student Name : "),t.qZA(),t._UZ(15,"div",9)(16,"input",10),t.qZA(),t.YNc(17,b,3,2,"div",11),t.TgZ(18,"div",7)(19,"span",8),t._uU(20," Phone : "),t.qZA(),t._UZ(21,"div",9)(22,"input",12),t.qZA(),t.YNc(23,O,3,2,"div",11),t.qZA()()()),2&e){let c,a;t.xp6(6),t.Oqu(r.data.action),t.xp6(2),t.Q6J("mat-dialog-close",r.data.animal),t.xp6(3),t.Q6J("formGroup",r.studentForm),t.xp6(6),t.Q6J("ngIf",(null==(c=r.studentForm.get("name"))?null:c.errors)&&(null==(c=r.studentForm.get("name"))?null:c.touched)),t.xp6(6),t.Q6J("ngIf",(null==(a=r.studentForm.get("phone"))?null:a.errors)&&(null==(a=r.studentForm.get("phone"))?null:a.touched))}},dependencies:[l.O5,m.TO,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,g.ZT,g.xY],styles:[".full_height[_ngcontent-%COMP%]{height:93vh}.w-90[_ngcontent-%COMP%]{width:49.5%}label[_ngcontent-%COMP%]{font-weight:500;font-size:18px}button.Sign[_ngcontent-%COMP%]{padding:10px 30px;font-weight:700;color:#fff;border:#fff solid 4px;border-radius:10px;text-decoration:none;background-color:#333}button.Sign[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px}button.Sign[_ngcontent-%COMP%]:hover{border:#C5D86D solid 4px}button.Sign[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#c5d86d}button.Sign.active[_ngcontent-%COMP%]{border:#C5D86D solid 4px}button.Sign.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c5d86d}@keyframes _ngcontent-%COMP%_upAndDown{0%,to{transform:translateY(0)}50%{transform:translateY(-40px)}}#image-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_upAndDown 3s ease infinite}.submit[_ngcontent-%COMP%]{font-size:20px;font-weight:700;background-color:#fff;padding:10px 15px;border-radius:15px;color:#0d1321;transition:1s ease;border:#fff 3px solid;position:relative}.submit[_ngcontent-%COMP%]:hover{border:#fff 3px solid}.bg-true[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:9px;background-color:#c5d86d;inset:100% 0 0;text-align:center;position:absolute;transition:cubic-bezier(.68,-.55,.265,1.55) .5s;opacity:0;border-radius:15px}.submit[_ngcontent-%COMP%]:hover   .bg-true[_ngcontent-%COMP%]{opacity:1;top:0}.pointer[_ngcontent-%COMP%]{cursor:pointer}.bg-mainColor_dark[_ngcontent-%COMP%]{background-color:#0d1321}.bg-mainColor_light[_ngcontent-%COMP%]{background-color:#ffeddf}.bg-mainColor_lightGreen[_ngcontent-%COMP%]{background-color:#c5d86d}.text-mainColor_dark[_ngcontent-%COMP%]{color:#0d1321}.text-mainColor_light[_ngcontent-%COMP%]{color:#ffeddf}.text-mainColor_lightGreen[_ngcontent-%COMP%]{color:#c5d86d}.bg-transparent[_ngcontent-%COMP%]{background-color:transparent!important}.fit_content[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.groubList[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}.groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;padding:1rem}#main-table[_ngcontent-%COMP%]{background-color:tomato;width:95%;margin:auto}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.3019607843)}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .corect[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3019607843);border-bottom:none}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}a[_ngcontent-%COMP%], i[_ngcontent-%COMP%], button[_ngcontent-%COMP%], image[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none}.d-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus{border-color:#c5d86d;outline:0;box-shadow:0 0 0 .25rem #c5d86d4d}.form-control[_ngcontent-%COMP%]::placeholder{color:#fff;margin-left:6px}#groubs[_ngcontent-%COMP%]{width:95%;margin:auto}#groubs[_ngcontent-%COMP%]   .navCaption[_ngcontent-%COMP%], #groubs[_ngcontent-%COMP%]   .titel[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:30px;width:200px}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;padding:1rem}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}th[_ngcontent-%COMP%]{background-color:#000;margin:5px;border:2px solid white;color:#fff;font-size:14px;padding-block:5px;padding:2px 2px 2px 5px;font-weight:400}td[_ngcontent-%COMP%]{margin:5px;padding:2px 2px 2px 5px;border:2px solid rgba(0,0,0,.1);color:#000;font-size:16px}td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fb7c19}#addEdit[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.3019607843)}#addEdit[_ngcontent-%COMP%]   .corect[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3019607843);border-bottom:none}"]})}return o})();var P=d(9862);let Z=(()=>{class o{constructor(n){this.http=n}ongetStudentsWithoutGroups(){return this.http.get("student/without-group")}ongetAllStudents(){return this.http.get("student")}getStudentById(n){return this.http.get(`student/${n}`)}ongetAllGroups(){return this.http.get("group")}ongetGroupById(n){return this.http.get(`group/${n}`)}deletStudent(n){return this.http.delete(`student/${n}`)}deletFromGroups(n,e){return this.http.delete(`student/${n}/${e}`)}AddToGroups(n,e){return this.http.get(`student/${n}/${e}`)}static#t=this.\u0275fac=function(e){return new(e||o)(t.LFG(P.eN))};static#n=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var _=d(4104);function S(o,i){1&o&&(t.TgZ(0,"h3"),t._uU(1,"Students list"),t.qZA())}function A(o,i){if(1&o&&(t.TgZ(0,"section",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",14)(5,"div")(6,"h5"),t._uU(7),t.qZA(),t.TgZ(8,"h6"),t._uU(9),t.qZA(),t.TgZ(10,"h6"),t._uU(11),t.qZA()(),t.TgZ(12,"div",15),t._UZ(13,"img",16),t.qZA()()()()),2&o){const n=i.$implicit;t.xp6(7),t.AsE("",n.first_name," ",n.last_name,""),t.xp6(2),t.Oqu(n.email),t.xp6(2),t.Oqu(n.status)}}function v(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",7),t.YNc(2,A,14,4,"section",9),t.qZA(),t.BQk()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.allStudents)}}function T(o,i){1&o&&(t.TgZ(0,"section",17)(1,"h2",18),t._uU(2,"No Data"),t.qZA(),t._UZ(3,"img",19),t.qZA())}function w(o,i){if(1&o&&(t.TgZ(0,"section",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",14)(5,"div")(6,"h5"),t._uU(7),t.qZA(),t.TgZ(8,"h6"),t._uU(9),t.qZA(),t.TgZ(10,"h6"),t._uU(11),t.qZA()(),t.TgZ(12,"div",15),t._UZ(13,"img",16),t.qZA()()()()),2&o){const n=i.$implicit;t.xp6(7),t.AsE("",n.first_name," ",n.last_name,""),t.xp6(2),t.Oqu(n.email),t.xp6(2),t.Oqu(n.status)}}function y(o,i){if(1&o&&(t.ynx(0),t.YNc(1,w,14,4,"section",9),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.allStudentsWithoutGroups)}}function q(o,i){1&o&&(t.TgZ(0,"section",17)(1,"h2",18),t._uU(2,"No Data"),t.qZA(),t._UZ(3,"img",19),t.qZA())}function G(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"section",10)(1,"div",20)(2,"div",21)(3,"div",22)(4,"h6",23),t.NdJ("click",function(){const c=t.CHM(n).$implicit,a=t.oxw(2);return t.KtG(a.getGroupById(c._id))}),t._uU(5),t.qZA()()(),t.TgZ(6,"div",15),t._UZ(7,"img",24),t.qZA()()()}if(2&o){const n=i.$implicit;t.xp6(5),t.Oqu(n.name)}}function k(o,i){if(1&o&&(t.ynx(0),t.YNc(1,G,8,1,"section",9),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.allGroups)}}function N(o,i){if(1&o&&(t.TgZ(0,"section",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.qZA(),t.TgZ(4,"div",14)(5,"div")(6,"h5"),t._uU(7),t.qZA(),t.TgZ(8,"h6"),t._uU(9),t.qZA()(),t.TgZ(10,"div",15),t._UZ(11,"img",16),t.qZA()()()()),2&o){const n=i.$implicit;t.xp6(7),t.AsE("",n.first_name," ",n.last_name,""),t.xp6(2),t.Oqu(n.email)}}function U(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",7),t.YNc(2,N,12,3,"section",9),t.qZA(),t.BQk()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.studentGroup)}}function I(o,i){1&o&&(t.TgZ(0,"section",17)(1,"h2",18),t._uU(2,"No Data"),t.qZA(),t._UZ(3,"img",19),t.qZA())}const J=[{path:"",component:(()=>{class o{constructor(n,e){this._StudentsService=n,this.dialog=e,this.allStudents=[],this.studentGroup=[],this.allStudentsWithoutGroups=[],this.allGroups=[]}ngOnInit(){this.getAllStudents(),this.getAllStudentsWithoutGroups(),this.getAllGroups()}getAllStudents(){this._StudentsService.ongetAllStudents().subscribe({next:n=>{console.log(n),this.allStudents=n},error:n=>{console.log(n)},complete:()=>{}})}getAllStudentsWithoutGroups(){this._StudentsService.ongetStudentsWithoutGroups().subscribe({next:n=>{console.log(n),this.allStudentsWithoutGroups=n},error:n=>{console.log(n)},complete:()=>{}})}getAllGroups(){this._StudentsService.ongetAllGroups().subscribe({next:n=>{console.log(n),this.allGroups=n},error:n=>{console.log(n)},complete:()=>{}})}getGroupById(n){this._StudentsService.ongetGroupById(n).subscribe({next:e=>{console.log(e),this.Group=e,this.studentGroup=this.Group.students},error:e=>{console.log(e)},complete:()=>{}})}openDialogAddEdit(n){this.dialog.open(M,{width:"600px",data:{action:n}}).afterClosed().subscribe(r=>{console.log("The dialog was closed",r),"add"==r&&console.log(r),this.getAllStudents()})}clear(){this.Group=""}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(Z),t.Y36(g.uw))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-students"]],decls:17,vars:8,consts:[["id","groups",1,"my-5","p-3"],[1,"groubList","container","my-4","py-4"],[4,"ngIf"],["animationDuration","2000ms",3,"click"],["label","All Students"],["class","noData w-50  m-auto",4,"ngIf"],["label","Students without group"],[1,"row","p-0","m-0"],["label","Groups"],["class","col-md-6 my-2 ",4,"ngFor","ngForOf"],[1,"col-md-6","my-2"],[1,"cards","d-flex"],[1,"w-25"],["src","./assets/images/user img.svg","alt","",1,"img-fluid","w-100"],[1,"w-75","px-3","d-flex","justify-content-between","align-items-center"],[1,"cardicon","w-25","d-flex","justify-content-end"],["src","./assets/images/Vector-1.svg","alt","",1,"w-25"],[1,"noData","w-50","m-auto"],[1,"text-center","text-danger"],["src","./assets/images/noDataA.png","alt","noData",1,"w-100"],[1,"cards","px-3","d-flex","justify-content-between","align-items-center"],[1,"cardCaption","w-50"],[1,"navCaption","ms-auto","d-flex","align-items-center","justify-content-center","m-4"],[1,"m-2",3,"click"],["src","./assets/images/Vector-1.svg","alt",""]],template:function(e,r){1&e&&(t.TgZ(0,"section",0)(1,"section",1),t.YNc(2,S,2,0,"h3",2),t.TgZ(3,"mat-tab-group",3),t.NdJ("click",function(){return r.clear()}),t.TgZ(4,"mat-tab",4)(5,"section"),t.YNc(6,v,3,1,"ng-container",2),t.YNc(7,T,4,0,"section",5),t.qZA()(),t.TgZ(8,"mat-tab",6)(9,"section",7),t.YNc(10,y,2,1,"ng-container",2),t.YNc(11,q,4,0,"section",5),t.qZA()(),t.TgZ(12,"mat-tab",8)(13,"section",7),t.YNc(14,k,2,1,"ng-container",2),t.YNc(15,U,3,1,"ng-container",2),t.YNc(16,I,4,0,"section",5),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",0!=r.allStudents.length),t.xp6(4),t.Q6J("ngIf",0!=r.allStudents.length),t.xp6(1),t.Q6J("ngIf",0==r.allStudents.length),t.xp6(3),t.Q6J("ngIf",0!=r.allStudentsWithoutGroups.length),t.xp6(1),t.Q6J("ngIf",0==r.allStudentsWithoutGroups.length),t.xp6(3),t.Q6J("ngIf",0!=r.allGroups.length&&!r.Group),t.xp6(1),t.Q6J("ngIf",0!=r.studentGroup.length&&r.Group),t.xp6(1),t.Q6J("ngIf",0==r.allGroups.length))},dependencies:[l.sg,l.O5,_.uX,_.SP],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}.bg-mainColor_dark[_ngcontent-%COMP%]{background-color:#0d1321}.bg-mainColor_light[_ngcontent-%COMP%]{background-color:#ffeddf}.bg-mainColor_lightGreen[_ngcontent-%COMP%]{background-color:#c5d86d}.text-mainColor_dark[_ngcontent-%COMP%]{color:#0d1321}.text-mainColor_light[_ngcontent-%COMP%]{color:#ffeddf}.text-mainColor_lightGreen[_ngcontent-%COMP%]{color:#c5d86d}.bg-transparent[_ngcontent-%COMP%]{background-color:transparent!important}.fit_content[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.groubList[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}.groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;padding:1rem}#main-table[_ngcontent-%COMP%]{background-color:tomato;width:95%;margin:auto}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.3019607843)}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .corect[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3019607843);border-bottom:none}#groups[_ngcontent-%COMP%]{width:95%;margin:auto}#groups[_ngcontent-%COMP%]   .navCaption[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:30px;width:200px}#groups[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%], #groups[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}#groups[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}#groups[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid grey;width:10%;border-radius:10px;background-color:#fff}.mat-mdc-tab-body-content[_ngcontent-%COMP%]{height:100%;overflow:hidden!important}"]})}return o})()}];let Y=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(J),p.Bz]})}return o})();var Q=d(5466);let F=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,Y,Q.m]})}return o})()}}]);