import{a as M}from"./chunk-NHMH2PGK.js";import"./chunk-G5KA7DMQ.js";import{a as N,b as w,c as q,d as L,e as y,f as g,h as G,i as A,j as R,o as D}from"./chunk-EX3JMVX7.js";import{h as V}from"./chunk-4O2Q52FJ.js";import"./chunk-D5JVNGYT.js";import{Cb as d,Jb as F,Mb as E,Oa as s,_ as h,ba as b,cb as m,eb as c,ib as u,la as C,ma as v,mb as o,nb as l,nc as T,ob as f,rb as P,tb as x,ub as _}from"./chunk-WI4R3LZG.js";var S=(t,r)=>({"is-valid":t,"is-invalid":r});function k(t,r){t&1&&(o(0,"p",9),d(1,"email is required"),l())}function I(t,r){t&1&&(o(0,"p",9),d(1,"Enter Valid Email"),l())}function j(t,r){if(t&1&&(o(0,"div",7),m(1,k,2,0,"p",9)(2,I,2,0),l()),t&2){let e,i=_(2);s(),u(1,(e=i.verifyEmail.get("email"))!=null&&e.getError("required")?1:(e=i.verifyEmail.get("email"))!=null&&e.getError("email")?2:-1)}}function U(t,r){t&1&&(o(0,"span"),f(1,"i",10),l())}function $(t,r){if(t&1){let e=P();o(0,"form",3),x("ngSubmit",function(){C(e);let n=_();return v(n.verifyEmailSubmit())}),o(1,"div",4)(2,"label",5),d(3," Email "),l(),f(4,"input",6),m(5,j,3,1,"div",7),o(6,"button",8),d(7," Register "),m(8,U,2,0,"span"),l()()()}if(t&2){let e,i,n=_();c("formGroup",n.verifyEmail),s(4),c("ngClass",E(5,S,!((e=n.verifyEmail.get("email"))!=null&&e.errors)&&(((e=n.verifyEmail.get("email"))==null?null:e.touched)||((e=n.verifyEmail.get("email"))==null?null:e.dirty)),((e=n.verifyEmail.get("email"))==null?null:e.errors)&&(((e=n.verifyEmail.get("email"))==null?null:e.touched)||((e=n.verifyEmail.get("email"))==null?null:e.dirty)))),s(),u(5,(i=n.verifyEmail.get("email"))!=null&&i.errors&&((i=n.verifyEmail.get("email"))!=null&&i.touched||(i=n.verifyEmail.get("email"))!=null&&i.dirty)?5:-1),s(),c("disabled",n.verifyEmail.invalid||n.isLoading),s(2),u(8,n.isLoading?8:-1)}}function z(t,r){t&1&&(o(0,"span"),f(1,"i",10),l())}function B(t,r){if(t&1){let e=P();o(0,"form",3),x("ngSubmit",function(){C(e);let n=_();return v(n.verifyCodeSubmit())}),o(1,"div")(2,"label",11),d(3,"resetCode:"),l(),f(4,"input",12),o(5,"button",8),d(6," Send Code "),m(7,z,2,0,"span"),l()()()}if(t&2){let e=_();c("formGroup",e.verifyCode),s(5),c("disabled",e.verifyCode.invalid||e.isLoading),s(2),u(7,e.isLoading?7:-1)}}function H(t,r){t&1&&(o(0,"p",9),d(1,"email is required"),l())}function J(t,r){t&1&&(o(0,"p",9),d(1,"Enter Valid Email"),l())}function K(t,r){if(t&1&&(o(0,"div",7),m(1,H,2,0,"p",9)(2,J,2,0),l()),t&2){let e,i=_(2);s(),u(1,(e=i.resetPassword.get("email"))!=null&&e.getError("required")?1:(e=i.resetPassword.get("email"))!=null&&e.getError("email")?2:-1)}}function O(t,r){t&1&&(o(0,"p",9),d(1,"newPasswoed is required"),l())}function Q(t,r){t&1&&(o(0,"p",9),d(1,"It must consist of at least 6 letters"),l())}function W(t,r){if(t&1&&(o(0,"div",7),m(1,O,2,0,"p",9)(2,Q,2,0),l()),t&2){let e,i=_(2);s(),u(1,(e=i.resetPassword.get("newPassword"))!=null&&e.getError("required")?1:(e=i.resetPassword.get("password"))!=null&&e.getError("pattern")?2:-1)}}function X(t,r){t&1&&(o(0,"span"),f(1,"i",10),l())}function Y(t,r){if(t&1){let e=P();o(0,"form",3),x("ngSubmit",function(){C(e);let n=_();return v(n.resetPasswordsubmit())}),o(1,"div")(2,"div",4)(3,"label",5),d(4," Email "),l(),f(5,"input",6),m(6,K,3,1,"div",7),l(),o(7,"div",4)(8,"label",13),d(9," newPasswoed "),l(),f(10,"input",14),m(11,W,3,1,"div",7),l(),o(12,"button",8),d(13," New Password "),m(14,X,2,0,"span"),l()()()}if(t&2){let e,i,n,p,a=_();c("formGroup",a.resetPassword),s(5),c("ngClass",E(7,S,!((e=a.resetPassword.get("email"))!=null&&e.errors)&&(((e=a.resetPassword.get("email"))==null?null:e.touched)||((e=a.resetPassword.get("email"))==null?null:e.dirty)),((e=a.resetPassword.get("email"))==null?null:e.errors)&&(((e=a.resetPassword.get("email"))==null?null:e.touched)||((e=a.resetPassword.get("email"))==null?null:e.dirty)))),s(),u(6,(i=a.resetPassword.get("email"))!=null&&i.errors&&((i=a.resetPassword.get("email"))!=null&&i.touched||(i=a.resetPassword.get("email"))!=null&&i.dirty)?6:-1),s(4),c("ngClass",E(10,S,!((n=a.resetPassword.get("newPassword"))!=null&&n.errors)&&(((n=a.resetPassword.get("newPassword"))==null?null:n.touched)||((n=a.resetPassword.get("newPassword"))==null?null:n.dirty)),((n=a.resetPassword.get("newPassword"))==null?null:n.errors)&&(((n=a.resetPassword.get("newPassword"))==null?null:n.touched)||((n=a.resetPassword.get("newPassword"))==null?null:n.dirty)))),s(),u(11,(p=a.resetPassword.get("newPassword"))!=null&&p.errors&&((p=a.resetPassword.get("newPassword"))!=null&&p.touched||(p=a.resetPassword.get("newPassword"))!=null&&p.dirty)?11:-1),s(),c("disabled",a.resetPassword.invalid||a.isLoading),s(2),u(14,a.isLoading?14:-1)}}var ae=(()=>{let r=class r{constructor(){this._AuthService=h(M),this._Router=h(V),this.isLoading=!1,this.step=1,this.verifyEmail=new y({email:new g(null,[w.required,w.email])}),this.verifyCode=new y({resetCode:new g(null,[w.required,w.minLength(6)])}),this.resetPassword=new y({email:new g(null,[w.required,w.email]),newPassword:new g(null,[w.required,w.pattern(/^\w{6,}$/)])})}verifyEmailSubmit(){this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({next:i=>{let n=this.verifyEmail.get("email")?.value;this.resetPassword.get("email")?.patchValue(n),this.isLoading=!0,console.log(i),i.statusMsg==="success"&&(this.step=2),this.isLoading=!1}})}verifyCodeSubmit(){this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({next:i=>{console.log(i),i.status=="Success"&&(this.step=3)},error:i=>{console.log(i)}})}resetPasswordsubmit(){this._AuthService.setResatPassword(this.resetPassword.value).subscribe({next:i=>{console.log(i),localStorage.setItem("userName",i.token),this._AuthService.saveUserDate(),this._Router.navigate(["/home"])},error:i=>{console.log(i)}})}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=b({type:r,selectors:[["app-forgot-password"]],standalone:!0,features:[F],decls:6,vars:1,consts:[[1,"w-75","mx-auto"],[1,"text-center","text-main","my-2"],[1,"shadow","bg-main-light","rounded-4","text-center","p-3",3,"formGroup"],[1,"shadow","bg-main-light","rounded-4","text-center","p-3",3,"ngSubmit","formGroup"],[1,"my-2","p-3"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50"],["type","submit",1,"btn-main","d-block","mx-auto","mt-3",3,"disabled"],[1,"m-0"],[1,"fa-solid","fa-arrows-spin","fa-spin"],["for","resetCode"],["id","resetCode","type","text","formControlName","resetCode",1,"form-control"],["for","newPasswoed"],["type","newPassword","id","newPassword","formControlName","newPassword",1,"form-control",3,"ngClass"]],template:function(n,p){n&1&&(o(0,"section",0)(1,"h1",1),d(2,"forgot Password"),l(),m(3,$,9,8,"form",2)(4,B,8,3)(5,Y,15,13),l()),n&2&&(s(3),u(3,p.step==1?3:p.step==2?4:p.step==3?5:-1))},dependencies:[D,G,N,q,L,A,R,T]});let t=r;return t})();export{ae as ForgotPasswordComponent};
