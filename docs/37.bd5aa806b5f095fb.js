"use strict";(self.webpackChunkQuizwizApp=self.webpackChunkQuizwizApp||[]).push([[37],{8037:(T,g,r)=>{r.r(g),r.d(g,{InstructorModule:()=>y});var p=r(6814),u=r(3403),t=r(5879);let m=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-instructor"]],decls:1,vars:0,template:function(e,d){1&e&&t._UZ(0,"router-outlet")},dependencies:[u.lC]})}return n})();var i=r(6223),f=r(9862);let b=(()=>{class n{constructor(o){this._HttpClient=o}UpdateInstractorAccount(o){return this._HttpClient.put("instructor",o)}UpdateStudentAccount(o){return this._HttpClient.put("student",o)}static#t=this.\u0275fac=function(e){return new(e||n)(t.LFG(f.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var C=r(8763);function h(n,l){1&n&&(t.TgZ(0,"p",37),t._uU(1," First Name is required "),t.qZA())}function P(n,l){if(1&n&&(t.TgZ(0,"div",35),t.YNc(1,h,2,0,"p",36),t.qZA()),2&n){const o=t.oxw();let e;t.xp6(1),t.Q6J("ngIf",null==(e=o.editForm.get("first_name"))?null:e.getError("required"))}}function x(n,l){1&n&&(t.TgZ(0,"p",37),t._uU(1," Last Name is required "),t.qZA())}function M(n,l){if(1&n&&(t.TgZ(0,"div",35),t.YNc(1,x,2,0,"p",36),t.qZA()),2&n){const o=t.oxw();let e;t.xp6(1),t.Q6J("ngIf",null==(e=o.editForm.get("last_name"))?null:e.getError("required"))}}function O(n,l){1&n&&(t.TgZ(0,"p",37),t._uU(1," Email is required "),t.qZA())}function _(n,l){1&n&&(t.TgZ(0,"p",37),t._uU(1," Please Enter a valid email ex:abc@abc "),t.qZA())}function v(n,l){if(1&n&&(t.TgZ(0,"div",35),t.YNc(1,O,2,0,"p",36),t.YNc(2,_,2,0,"p",36),t.qZA()),2&n){const o=t.oxw();let e,d;t.xp6(1),t.Q6J("ngIf",null==(e=o.editForm.get("email"))?null:e.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(d=o.editForm.get("email"))?null:d.getError("email"))}}const Z=[{path:"",component:m,children:[{path:"groups",loadChildren:()=>Promise.all([r.e(592),r.e(449)]).then(r.bind(r,2449)).then(n=>n.GroupsModule),data:{title:"Groups"},title:"Groups"},{path:"quizzes",loadChildren:()=>Promise.all([r.e(592),r.e(216)]).then(r.bind(r,8216)).then(n=>n.QuizzesModule),data:{title:"Quizzes"},title:"Quizzes"},{path:"results",loadChildren:()=>Promise.all([r.e(592),r.e(616)]).then(r.bind(r,5616)).then(n=>n.ResultsModule),data:{title:"Results"},title:"Results"},{path:"students",loadChildren:()=>r.e(74).then(r.bind(r,3074)).then(n=>n.StudentsModule),data:{title:"Students"},title:"Students"},{path:"editProfile",component:(()=>{class n{constructor(o,e){this._EditProfileService=o,this._ToastrService=e,this.role=localStorage.getItem("role"),this.profile={first_name:`${localStorage.getItem("first_name")}`,last_name:`${localStorage.getItem("last_name")}`,email:`${localStorage.getItem("email")}`,status:`${localStorage.getItem("status")}`},this.editForm=new i.cw({first_name:new i.NI(null,[i.kI.required]),last_name:new i.NI(null,[i.kI.required]),email:new i.NI(null,[i.kI.required,i.kI.email]),status:new i.NI(null,[i.kI.required])})}ngOnInit(){console.log(this.profile),this.editForm.patchValue(this.profile),console.log(this.editForm.value)}onsubmit(o){"Instructor"==this.role?this.instructorUpdateAcount(o.value):this.studentUpdateAcount(o.value)}instructorUpdateAcount(o){this._EditProfileService.UpdateInstractorAccount(o).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message)},error:e=>{this._ToastrService.error("error")}})}studentUpdateAcount(o){this._EditProfileService.UpdateStudentAccount(o).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message)},error:e=>{this._ToastrService.error("error")}})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(b),t.Y36(C._W))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-profile"]],decls:61,vars:6,consts:[["id","user-profile"],[1,"container","p-4","py-4"],[1,"ps-5"],[1,"row","align-items-center","border_mainColor"],[1,"col-md-5","me-5","p-2"],[1,"d-flex","justify-content-center"],["src","../../../assets/images/Avatar-Profile-Vector-PNG-Pic.png","alt","",1,"w-85","rounded-circle"],[1,"col-md-6","py-4","px-2"],[3,"formGroup","ngSubmit"],["for",""],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text","px-3","py-3","bg-transparent","rounded","rounded-start-3","rounded-end-0","border","border-4","border-end-0"],[1,"fa-solid","fa-user"],["type","text","formControlName","first_name","placeholder","First name","aria-describedby","basic-addon3",1,"form-control","border","border-4","rounded-end","py-1","bg-transparent","ps-3"],["class","alert alert-danger py-1",4,"ngIf"],["type","text","formControlName","last_name","placeholder","Last name","aria-describedby","basic-addon3",1,"form-control","border","border-4","rounded-end","py-1","bg-transparent","ps-3"],["type","text","formControlName","email","placeholder","email","aria-describedby","basic-addon3",1,"form-control","border","border-4","rounded-end","py-1","bg-transparent","ps-3"],[1,"input-group"],["id","basic-addon2",1,"input-group-text","px-3","py-3","bg-transparent","rounded","rounded-start-3","rounded-end-0","border","border-4","border-end-0"],[1,"fa-solid","fa-users-viewfinder"],[1,"y-line","my-auto"],["id","inputGroupSelect01",1,"form-select","rounded-end","py-1","bg-mainColor_dark","pointer","ps-3","border","border-4","bg-transparent"],["selected",""],[1,"w-50","my-3"],[1,"form-group"],[1,"form-check"],["formControlName","status","type","checkbox","id","gridCheck",1,"form-check-input"],["for","gridCheck",1,"form-check-label"],[1,"col-md-12","d-flex","justify-content-evenly","align-items-center"],["type","submit",1,"submit","border","border-2",3,"disabled"],[1,"text","me-1"],[1,"fa-solid","fa-circle-check"],[1,"bg-true"],[1,"btn","btn-outline-danger","ms-3","padding"],[1,"text","fw-bold"],[1,"alert","alert-danger","py-1"],["class","mb-0",4,"ngIf"],[1,"mb-0"]],template:function(e,d){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"Edit Profile"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5),t._UZ(7,"img",6),t.qZA()(),t.TgZ(8,"div",7)(9,"form",8),t.NdJ("ngSubmit",function(){return d.onsubmit(d.editForm)}),t.TgZ(10,"div")(11,"label",9),t._uU(12,"Your First Name"),t.qZA(),t.TgZ(13,"div",10)(14,"span",11),t._UZ(15,"i",12),t.qZA(),t._UZ(16,"input",13),t.qZA(),t.YNc(17,P,2,1,"div",14),t.qZA(),t.TgZ(18,"div")(19,"label",9),t._uU(20,"Your Last Name"),t.qZA(),t.TgZ(21,"div",10)(22,"span",11),t._UZ(23,"i",12),t.qZA(),t._UZ(24,"input",15),t.qZA(),t.YNc(25,M,2,1,"div",14),t.qZA(),t.TgZ(26,"div")(27,"label",9),t._uU(28,"Your E-mail address"),t.qZA(),t.TgZ(29,"div",10)(30,"span",11),t._UZ(31,"i",12),t.qZA(),t._UZ(32,"input",16),t.qZA(),t.YNc(33,v,3,2,"div",14),t.qZA(),t.TgZ(34,"div")(35,"label",9),t._uU(36,"Your Role"),t.qZA(),t.TgZ(37,"div",17)(38,"span",18),t._UZ(39,"i",19),t.qZA(),t._UZ(40,"div",20),t.TgZ(41,"select",21)(42,"option",22),t._uU(43),t.qZA()()()(),t.TgZ(44,"div",23)(45,"div",24)(46,"div",25),t._UZ(47,"input",26),t.TgZ(48,"label",27),t._uU(49," Active Acount "),t.qZA()()()(),t.TgZ(50,"div",28)(51,"button",29)(52,"span",30),t._uU(53,"Update"),t.qZA(),t.TgZ(54,"span"),t._UZ(55,"i",31),t.qZA(),t.TgZ(56,"div",32),t._UZ(57,"i",31),t.qZA()(),t.TgZ(58,"button",33)(59,"span",34),t._uU(60,"Cancel "),t.qZA()()()()()()()()),2&e){let a,s,c;t.xp6(9),t.Q6J("formGroup",d.editForm),t.xp6(8),t.Q6J("ngIf",(null==(a=d.editForm.get("first_name"))?null:a.touched)&&"INVALID"==(null==(a=d.editForm.get("first_name"))?null:a.status)),t.xp6(8),t.Q6J("ngIf",(null==(s=d.editForm.get("last_name"))?null:s.touched)&&"INVALID"==(null==(s=d.editForm.get("last_name"))?null:s.status)),t.xp6(8),t.Q6J("ngIf",(null==(c=d.editForm.get("email"))?null:c.touched)&&"INVALID"==(null==(c=d.editForm.get("email"))?null:c.status)),t.xp6(10),t.Oqu(d.role),t.xp6(8),t.Q6J("disabled",!d.editForm.valid)}},dependencies:[p.O5,i._Y,i.YN,i.Kr,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u],styles:[".full_height[_ngcontent-%COMP%]{height:93vh}.w-90[_ngcontent-%COMP%]{width:49.5%}label[_ngcontent-%COMP%]{font-weight:500;font-size:18px}button.Sign[_ngcontent-%COMP%]{padding:10px 30px;font-weight:700;color:#fff;border:#fff solid 4px;border-radius:10px;text-decoration:none;background-color:#333}button.Sign[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px}button.Sign[_ngcontent-%COMP%]:hover{border:#C5D86D solid 4px}button.Sign[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#c5d86d}button.Sign.active[_ngcontent-%COMP%]{border:#C5D86D solid 4px}button.Sign.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c5d86d}@keyframes _ngcontent-%COMP%_upAndDown{0%,to{transform:translateY(0)}50%{transform:translateY(-40px)}}#image-container[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_upAndDown 3s ease infinite}.submit[_ngcontent-%COMP%]{font-size:20px;font-weight:700;background-color:#fff;padding:10px 15px;border-radius:15px;color:#0d1321;transition:1s ease;border:#fff 3px solid;position:relative}.submit[_ngcontent-%COMP%]:hover{border:#fff 3px solid}.bg-true[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:9px;background-color:#c5d86d;inset:100% 0 0;text-align:center;position:absolute;transition:cubic-bezier(.68,-.55,.265,1.55) .5s;opacity:0;border-radius:15px}.submit[_ngcontent-%COMP%]:hover   .bg-true[_ngcontent-%COMP%]{opacity:1;top:0}.pointer[_ngcontent-%COMP%]{cursor:pointer}.bg-mainColor_dark[_ngcontent-%COMP%]{background-color:#0d1321}.bg-mainColor_light[_ngcontent-%COMP%]{background-color:#ffeddf}.bg-mainColor_lightGreen[_ngcontent-%COMP%]{background-color:#c5d86d}.text-mainColor_dark[_ngcontent-%COMP%]{color:#0d1321}.text-mainColor_light[_ngcontent-%COMP%]{color:#ffeddf}.text-mainColor_lightGreen[_ngcontent-%COMP%]{color:#c5d86d}.bg-transparent[_ngcontent-%COMP%]{background-color:transparent!important}.fit_content[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.groubList[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}.groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;padding:1rem}#main-table[_ngcontent-%COMP%]{background-color:tomato;width:95%;margin:auto}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.3019607843)}#main-table[_ngcontent-%COMP%]   #addEdit[_ngcontent-%COMP%]   .corect[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3019607843);border-bottom:none}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}a[_ngcontent-%COMP%], i[_ngcontent-%COMP%], button[_ngcontent-%COMP%], image[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none}.d-center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus{border-color:#c5d86d;outline:0;box-shadow:0 0 0 .25rem #c5d86d4d}.form-control[_ngcontent-%COMP%]::placeholder{color:#fff;margin-left:6px}#groubs[_ngcontent-%COMP%]{width:95%;margin:auto}#groubs[_ngcontent-%COMP%]   .navCaption[_ngcontent-%COMP%], #groubs[_ngcontent-%COMP%]   .titel[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:30px;width:200px}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;padding:1rem}#groubs[_ngcontent-%COMP%]   .groubList[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}th[_ngcontent-%COMP%]{background-color:#000;margin:5px;border:2px solid white;color:#fff;font-size:14px;padding-block:5px;padding:2px 2px 2px 5px;font-weight:400}td[_ngcontent-%COMP%]{margin:5px;padding:2px 2px 2px 5px;border:2px solid rgba(0,0,0,.1);color:#000;font-size:16px}td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fb7c19}.w-40[_ngcontent-%COMP%]{width:40%}.w-60[_ngcontent-%COMP%]{width:60%}.w-95[_ngcontent-%COMP%]{width:95%}.padding[_ngcontent-%COMP%]{padding:12px 17px;border-radius:15px}.w-85[_ngcontent-%COMP%]{width:90%}.border_mainColor[_ngcontent-%COMP%]{border:solid 4px rgba(197,216,109,.3137254902);border-radius:10px}"]})}return n})(),title:"Edit Profile",data:{title:"Edit Profile"}},{path:"questions",loadChildren:()=>Promise.all([r.e(592),r.e(504)]).then(r.bind(r,2504)).then(n=>n.QuestionsModule)}]}];let A=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(Z),u.Bz]})}return n})(),y=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[p.ez,A]})}return n})()}}]);