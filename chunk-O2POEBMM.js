import{i as T}from"./chunk-4O2Q52FJ.js";import{a as F}from"./chunk-VMJBNDDP.js";import"./chunk-D5JVNGYT.js";import{Cb as s,Db as k,Eb as f,Jb as w,Ka as S,Lb as E,Oa as l,Pb as b,Rb as h,_ as x,ba as v,eb as _,kb as g,la as u,lb as y,ma as p,mb as r,nb as n,ob as m,rb as I,tb as d,ub as C,uc as P}from"./chunk-WI4R3LZG.js";var V=(c,a)=>a.product.id,B=c=>["/address",c];function D(c,a){if(c&1){let o=I();r(0,"div",5)(1,"div",7)(2,"div",8)(3,"div",9),m(4,"img",10),n(),r(5,"div",7)(6,"p"),s(7),n(),r(8,"P",11),s(9),b(10,"currency"),n(),r(11,"button",12),d("click",function(){let e=u(o).$implicit,i=C();return p(i.deleteCart(e.product.id))}),r(12,"span"),m(13,"i",13),n(),r(14,"span"),s(15," Remove "),n()()()()(),r(16,"div",14)(17,"span",15),d("click",function(){let e=u(o).$implicit,i=C();return p(i.updateCart(e.product.id,e.count+1))}),m(18,"i",16),n(),r(19,"span",17),s(20),n(),r(21,"span",15),d("click",function(){let e=u(o).$implicit,i=C();return p(i.updateCart(e.product.id,e.count-1))}),m(22,"i",18),n()()()}if(c&2){let o=a.$implicit;l(4),_("src",o.product.imageCover,S)("alt",o.product.title),l(3),k(o.product.title),l(2),f(" price:",h(10,5,o.price,"GBP"),""),l(11),f(" ",o.count,"")}}var M=(()=>{let a=class a{constructor(){this._CartService=x(F),this.cartItem={}}ngOnInit(){this.cleanCart=this._CartService.getSpecificProductCart().subscribe({next:t=>{console.log(t.data),this.cartItem=t.data}})}restartRespons(){this.cleanrestart=this._CartService.getSpecificProductCart().subscribe({next:t=>{console.log(t.data),this.cartItem=t.data}})}deleteCart(t){this.cleanDelete=this._CartService.removeSpecificCart(t).subscribe({next:e=>{console.log(e),this.cartItem=e.data,this._CartService.CartNumber.next(e.numOfCartItems)}})}updateCart(t,e){this.cleanupdateCart=this._CartService.updateCart(t,e).subscribe({next:i=>{console.log(i),this.cartItem=i.data}})}clearCart(){this.cleanClearCart=this._CartService.clearCart().subscribe({next:t=>{console.log(t),t.message=="success"&&(this._CartService.CartNumber.next(t.numOfCartItems),this.restartRespons())}})}ngOnDestroy(){this.cleanCart?.unsubscribe(),this.cleanClearCart?.unsubscribe(),this.cleanDelete?.unsubscribe(),this.cleanrestart?.unsubscribe(),this.cleanupdateCart?.unsubscribe()}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=v({type:a,selectors:[["app-cart"]],standalone:!0,features:[w],decls:13,vars:8,consts:[[1,"bg-main-light","container","my-2","p-5"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h3"],[1,"btn","btn-outline-secondary","ms-1",3,"click"],[1,"h6","text-main"],[1,"row","justify-content-around","align-items-center","my-2","border-bottom"],[1,"btn","btn-outline-success",3,"disabled","routerLink"],[1,"col-md-10"],[1,"row","my-2","d-flex","align-items-center"],[1,"col-md-2"],["height","150px",1,"w-100","rounded-3",3,"src","alt"],[1,"text-main"],[1,"btn","btn-danger",3,"click"],[1,"fa-solid","fa-trash","cr",2,"color","#ffffff"],[1,"col-md-2","d-flex","justify-content-center","align-items-center"],[3,"click"],[1,"fa-regular","fa-square-plus","fa-2xl",2,"color","#013223"],[1,"p-3"],[1,"fa-regular","fa-square-minus","fa-2xl",2,"color","#dc3545"]],template:function(e,i){e&1&&(r(0,"section",0)(1,"div",1)(2,"h2",2),s(3,"Shop Cart:"),n(),r(4,"button",3),d("click",function(){return i.clearCart()}),s(5," Clear Your Cart "),n()(),r(6,"h4",4),s(7),b(8,"currency"),n(),g(9,D,23,8,"div",5,V),r(11,"button",6),s(12," Buy it "),n()()),e&2&&(l(7),f(" Total Cart Price:",h(8,3,i.cartItem.totalCartPrice,"GBP")," "),l(2),y(i.cartItem.products),l(2),_("disabled",i.cartItem.totalCartPrice==0)("routerLink",E(6,B,i.cartItem._id)))},dependencies:[P,T]});let c=a;return c})();export{M as CartComponent};
