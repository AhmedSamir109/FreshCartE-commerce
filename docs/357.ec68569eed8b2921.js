"use strict";(self.webpackChunkmyApp=self.webpackChunkmyApp||[]).push([[357],{357:(z,c,p)=>{p.r(c),p.d(c,{SettingsModule:()=>O});var g=p(6814),m=p(7163),n=p(95),e=p(4769),_=p(4593);function w(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"this field is required"),e.qZA())}function h(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"please enter correct email"),e.qZA())}function Z(t,a){1&t&&(e.TgZ(0,"button",11),e._uU(1,"Next"),e.qZA())}function x(t,a){if(1&t){const s=e.EpF();e.TgZ(0,"div",3)(1,"h2",4),e._uU(2,"Forgot Password"),e.qZA(),e.TgZ(3,"form",5),e.NdJ("ngSubmit",function(){e.CHM(s);const o=e.oxw();return e.KtG(o.forgotPassword(o.forgotPassForm))}),e.TgZ(4,"label",6),e._uU(5,"Email :"),e.qZA(),e._UZ(6,"input",7),e.YNc(7,w,2,0,"p",8),e.YNc(8,h,2,0,"p",8),e.TgZ(9,"p",9),e._uU(10),e.qZA(),e.YNc(11,Z,2,0,"button",10),e.qZA()()}if(2&t){const s=e.oxw(),r=e.MAs(5);let o,i;e.xp6(3),e.Q6J("formGroup",s.forgotPassForm),e.xp6(4),e.Q6J("ngIf",(null==(o=s.forgotPassForm.get("email"))?null:o.getError("required"))&&(null==(o=s.forgotPassForm.get("email"))?null:o.touched)),e.xp6(1),e.Q6J("ngIf",null==(i=s.forgotPassForm.get("email"))?null:i.getError("email")),e.xp6(2),e.Oqu(s.forgotApiMessage),e.xp6(1),e.Q6J("ngIf",!s.isloading)("ngIfElse",r)}}function A(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"this field is required"),e.qZA())}function T(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"must be 6 numbers"),e.qZA())}function C(t,a){1&t&&(e.TgZ(0,"button",11),e._uU(1,"Next"),e.qZA())}function F(t,a){if(1&t){const s=e.EpF();e.TgZ(0,"div",3)(1,"h2",4),e._uU(2,"Forgot Password"),e.qZA(),e.TgZ(3,"form",5),e.NdJ("ngSubmit",function(){e.CHM(s);const o=e.oxw();return e.KtG(o.resetCode(o.resetCodeForm))}),e.TgZ(4,"label",6),e._uU(5,"Reset code :"),e.qZA(),e._UZ(6,"input",12),e.YNc(7,A,2,0,"p",8),e.YNc(8,T,2,0,"p",8),e.TgZ(9,"p",9),e._uU(10),e.qZA(),e.YNc(11,C,2,0,"button",10),e.qZA()()}if(2&t){const s=e.oxw(),r=e.MAs(5);let o,i;e.xp6(3),e.Q6J("formGroup",s.resetCodeForm),e.xp6(4),e.Q6J("ngIf",(null==(o=s.resetCodeForm.get("resetCode"))?null:o.getError("required"))&&(null==(o=s.resetCodeForm.get("resetCode"))?null:o.touched)),e.xp6(1),e.Q6J("ngIf",null==(i=s.resetCodeForm.get("resetCode"))?null:i.getError("minlength")),e.xp6(2),e.Oqu(s.resetCodeApiMessage),e.xp6(1),e.Q6J("ngIf",!s.isloading)("ngIfElse",r)}}function P(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"this field is required"),e.qZA())}function b(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"please enter your email correctly"),e.qZA())}function q(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"this field is required"),e.qZA())}function v(t,a){1&t&&(e.TgZ(0,"p",9),e._uU(1,"password must start with capital letter and between 5 to 16 character"),e.qZA())}function I(t,a){1&t&&(e.TgZ(0,"button",11),e._uU(1,"Next"),e.qZA())}function N(t,a){if(1&t){const s=e.EpF();e.TgZ(0,"div",3)(1,"h2",4),e._uU(2,"Forgot Password"),e.qZA(),e.TgZ(3,"form",5),e.NdJ("ngSubmit",function(){e.CHM(s);const o=e.oxw();return e.KtG(o.resetPassword(o.resetPasswordForm))}),e.TgZ(4,"label",6),e._uU(5,"Email :"),e.qZA(),e._UZ(6,"input",7),e.YNc(7,P,2,0,"p",8),e.YNc(8,b,2,0,"p",8),e.TgZ(9,"label",6),e._uU(10,"New Password :"),e.qZA(),e._UZ(11,"input",13),e.YNc(12,q,2,0,"p",8),e.YNc(13,v,2,0,"p",8),e.TgZ(14,"p",9),e._uU(15),e.qZA(),e.YNc(16,I,2,0,"button",10),e.qZA()()}if(2&t){const s=e.oxw(),r=e.MAs(5);let o,i,l,d;e.xp6(3),e.Q6J("formGroup",s.resetPasswordForm),e.xp6(4),e.Q6J("ngIf",(null==(o=s.resetPasswordForm.get("email"))?null:o.getError("required"))&&(null==(o=s.resetPasswordForm.get("email"))?null:o.touched)),e.xp6(1),e.Q6J("ngIf",null==(i=s.resetCodeForm.get("email"))?null:i.getError("email")),e.xp6(4),e.Q6J("ngIf",(null==(l=s.resetPasswordForm.get("newPassword"))?null:l.getError("required"))&&(null==(l=s.resetPasswordForm.get("newPassword"))?null:l.touched)),e.xp6(1),e.Q6J("ngIf",null==(d=s.resetPasswordForm.get("newPassword"))?null:d.getError("pattern")),e.xp6(2),e.Oqu(s.resetPasswordApiMessage),e.xp6(1),e.Q6J("ngIf",!s.isloading)("ngIfElse",r)}}function U(t,a){1&t&&(e.TgZ(0,"button",11),e._uU(1,"Next "),e._UZ(2,"i",14),e.qZA())}function y(t,a){1&t&&(e.TgZ(0,"p",12),e._uU(1,"this field is required"),e.qZA())}function E(t,a){1&t&&(e.TgZ(0,"p",12),e._uU(1,"this field is required"),e.qZA())}function R(t,a){1&t&&(e.TgZ(0,"p",12),e._uU(1,"password must start with capital letter and between 5 to 16 character"),e.qZA())}function M(t,a){1&t&&(e.TgZ(0,"p",12),e._uU(1,"this field is required"),e.qZA())}function Y(t,a){1&t&&(e.TgZ(0,"button",13),e._uU(1,"Change"),e.qZA())}function Q(t,a){1&t&&(e.TgZ(0,"button",13),e._uU(1,"Changing "),e._UZ(2,"i",14),e.qZA())}const G=[{path:"",redirectTo:"forgetpassword",pathMatch:"full"},{path:"forgetpassword",component:(()=>{class t{constructor(s,r){this._AuthenService=s,this._Router=r,this.isloading=!1,this.forgotResponse=!0,this.resetCodeResponce=!0,this.forgotApiMessage="",this.resetCodeApiMessage="",this.resetPasswordApiMessage="",this.userEmail="",this.forgotPassForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email])}),this.resetCodeForm=new n.cw({resetCode:new n.NI("",[n.kI.required,n.kI.minLength(6)])}),this.resetPasswordForm=new n.cw({email:new n.NI(this.userEmail,[n.kI.required]),newPassword:new n.NI(null,[n.kI.required,n.kI.pattern(/^[A-z][a-zA-Z0-9 ]{5,16}$/)])})}forgotPassword(s){s.markAllAsTouched(),s.valid&&(this.isloading=!0,this._AuthenService.forgotPassword(s.value).subscribe({next:r=>{console.log(r),this.forgotApiMessage=r.statusMsg,this.isloading=!1,this.userEmail=s.value.email,console.log(this.userEmail),this.forgotResponse=!1},error:r=>{console.log(r),this.isloading=!1,this.forgotApiMessage=r.error.message}}))}resetCode(s){s.markAllAsTouched(),console.log(s),s.valid&&(this.isloading=!0,this._AuthenService.resetCode(s.value).subscribe({next:r=>{console.log(r),this.resetCodeResponce=!1,this.isloading=!1},error:r=>{console.log(r),this.resetCodeApiMessage=r.error.message,this.isloading=!1}}))}resetPassword(s){s.markAllAsTouched(),s.valid&&(this.isloading=!0,this._AuthenService.resetPassword(s.value).subscribe({next:r=>{console.log(r),this._Router.navigate(["/login"]),this.isloading=!1},error:r=>{console.log(r),this.isloading=!1,this.resetPasswordApiMessage="There is no user registered with this email address"}}))}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(_.x),e.Y36(m.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgetpassword"]],decls:6,vars:3,consts:[[1,"my-container","m-auto","pt-5","mt-5"],["class"," w-75 m-auto py-5 px-sm-5  mt-5 border-1 rounded-2 shadow",4,"ngIf"],["loading",""],[1,"w-75","m-auto","py-5","px-sm-5","mt-5","border-1","rounded-2","shadow"],[1,"text-center","mb-5","fs-1"],[1,"m-auto","mx-2",3,"formGroup","ngSubmit"],[1,"mb-2"],["type","email","formControlName","email","placeholder","enter your email",1,"form-control","mb-2"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["class","btn bg-main text-light w-100 my-3",4,"ngIf","ngIfElse"],[1,"btn","bg-main","text-light","w-100","my-3"],["type","text","formControlName","resetCode","placeholder","enter the reset code",1,"form-control","mb-2"],["type","password","formControlName","newPassword","placeholder","enter the new password",1,"form-control","mb-2"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(r,o){1&r&&(e.TgZ(0,"section",0),e.YNc(1,x,12,6,"div",1),e.YNc(2,F,12,6,"div",1),e.YNc(3,N,17,8,"div",1),e.qZA(),e.YNc(4,U,3,0,"ng-template",null,2,e.W1O)),2&r&&(e.xp6(1),e.Q6J("ngIf",o.forgotResponse),e.xp6(1),e.Q6J("ngIf",!o.forgotResponse&&o.resetCodeResponce),e.xp6(1),e.Q6J("ngIf",!o.resetCodeResponce))},dependencies:[g.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return t})(),title:"Forget Password"},{path:"resetpassword",component:(()=>{class t{constructor(s){this._AuthenService=s,this.isLoading=!1,this.apiResponseMessage="",this.updatePasswordForm=new n.cw({currentPassword:new n.NI("",[n.kI.required]),password:new n.NI("",[n.kI.required,n.kI.pattern(/^[A-z][a-zA-Z0-9 ]{5,16}$/)]),rePassword:new n.NI("",[n.kI.required])})}updatePassword(s){if(console.log(s),s.valid&&s.get("password").value===s.get("rePassword").value){this.isLoading=!0;let r=localStorage.getItem("token");this._AuthenService.updataPassword(s.value,r).subscribe({next:o=>{console.log(o),this.isLoading=!1,this.apiResponseMessage=o.message},error:o=>{console.log(o),this.isLoading=!1,this.apiResponseMessage=o.error.message}})}}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(_.x))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-resetpassword"]],decls:23,vars:8,consts:[[1,"my-container","m-auto","pt-5","mt-5","view-height"],[1,"w-75","m-auto","py-5","px-sm-5","border-1","rounded-2","shadow"],[1,"text-center","mb-5","fs-1"],[1,"m-auto","mx-2",3,"formGroup","ngSubmit"],[1,"mb-2"],["type","password","formControlName","currentPassword",1,"form-control","mb-2"],["class","text-danger",4,"ngIf"],["type","password","formControlName","password",1,"form-control","mb-2"],["type","password","formControlName","rePassword",1,"form-control","mb-2"],[1,"text-danger","text-center","my-4"],["class","btn bg-main text-light w-100 my-3",4,"ngIf","ngIfElse"],["loading",""],[1,"text-danger"],[1,"btn","bg-main","text-light","w-100","my-3"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(r,o){if(1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),e._uU(3,"Reset Password"),e.qZA(),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return o.updatePassword(o.updatePasswordForm)}),e.TgZ(5,"label",4),e._uU(6,"Current Password :"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,y,2,0,"p",6),e.TgZ(9,"label",4),e._uU(10,"Password :"),e.qZA(),e._UZ(11,"input",7),e.YNc(12,E,2,0,"p",6),e.YNc(13,R,2,0,"p",6),e.TgZ(14,"label",4),e._uU(15,"rePassword :"),e.qZA(),e._UZ(16,"input",8),e.YNc(17,M,2,0,"p",6),e.TgZ(18,"p",9),e._uU(19),e.qZA(),e.YNc(20,Y,2,0,"button",10),e.qZA()()(),e.YNc(21,Q,3,0,"ng-template",null,11,e.W1O)),2&r){const i=e.MAs(22);let l,d,f,u;e.xp6(4),e.Q6J("formGroup",o.updatePasswordForm),e.xp6(4),e.Q6J("ngIf",(null==(l=o.updatePasswordForm.get("currentPassword"))?null:l.getError("required"))&&(null==(l=o.updatePasswordForm.get("currentPassword"))?null:l.touched)),e.xp6(4),e.Q6J("ngIf",(null==(d=o.updatePasswordForm.get("password"))?null:d.getError("required"))&&(null==(d=o.updatePasswordForm.get("password"))?null:d.touched)),e.xp6(1),e.Q6J("ngIf",null==(f=o.updatePasswordForm.get("password"))?null:f.getError("pattern")),e.xp6(4),e.Q6J("ngIf",(null==(u=o.updatePasswordForm.get("rePassword"))?null:u.getError("required"))&&(null==(u=o.updatePasswordForm.get("rePassword"))?null:u.touched)),e.xp6(2),e.Oqu(o.apiResponseMessage),e.xp6(1),e.Q6J("ngIf",!o.isLoading)("ngIfElse",i)}},dependencies:[g.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return t})(),title:"Reset Password",canActivate:[p(6334).i]}];let L=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(G),m.Bz]})}return t})(),O=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[g.ez,L,n.UX,n.u5]})}return t})()}}]);