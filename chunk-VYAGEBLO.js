import{a as B,b as M}from"./chunk-2WRBCCNW.js";import{a as T}from"./chunk-NHMH2PGK.js";import"./chunk-G5KA7DMQ.js";import{b as L,c as N,d as A}from"./chunk-CYLSCFYX.js";import{g as w,i as y,j as E}from"./chunk-4O2Q52FJ.js";import{a as I}from"./chunk-VMJBNDDP.js";import"./chunk-D5JVNGYT.js";import{Cb as l,Db as d,Eb as u,Jb as b,Oa as r,Pb as p,Qb as s,_ as v,ba as f,cb as _,gb as h,ib as C,mb as e,nb as t,ob as a,tb as g,ub as x}from"./chunk-WI4R3LZG.js";function F(i,n){if(i&1&&(a(0,"i",34),e(1,"span",35),l(2),t()),i&2){let k=x();r(2),d(k.countNumber)}}function z(i,n){if(i&1&&(a(0,"i",36),e(1,"span",35),l(2),t()),i&2){let k=x();r(2),d(k.countNumber)}}var O=(()=>{let n=class n{constructor(){this._AuthService=v(T),this._CartService=v(I),this._MyTranslateService=v(B),this._TranslateService=v(L),this.countNumber=0}ngOnInit(){this._CartService.getSpecificProductCart().subscribe({next:o=>{this._CartService.CartNumber.next(o.numOfCartItems)}}),this._CartService.CartNumber.subscribe({next:o=>{this.countNumber=o}})}change(o){this._MyTranslateService.changelang(o)}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=f({type:n,selectors:[["app-nav-blank"]],standalone:!0,features:[b],decls:66,vars:26,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","position-fixed","w-100","z-3"],[1,"container-fluid"],[1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse","justify-content-between"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","home","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","routerLink","wishlist","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","routerLink","product","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","routerLink","categories","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","routerLink","brands","routerLinkActive","active-link",1,"nav-link"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle","cr"],[1,"dropdown-menu"],[3,"click"],[1,"dropdown-item","cr"],[1,"nav-item","position-relative"],["aria-current","page","routerLink","cart","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","href","https://github.com/EngAmanyAhmed",1,"nav-link"],[1,"fa-brands","fa-github"],["aria-current","page","href","https://www.facebook.com/amany.ahmed.3760",1,"nav-link"],[1,"fa-brands","fa-facebook"],["aria-current","page","href","https://www.instagram.com/eng.amany.ahmed/?hl=ar",1,"nav-link"],[1,"fa-brands","fa-instagram"],["aria-current","page","href","https://www.linkedin.com/in/amany-ahmed-0b786556",1,"nav-link","cr"],[1,"fa-brands","fa-linkedin-in"],["aria-current","page","href","https://twitter.com/Eng_Amany1",1,"nav-link","cr"],[1,"fa-brands","fa-twitter"],["aria-current","page",1,"nav-link"],[1,"fa-brands","fa-youtube"],[1,"nav-link","cr",3,"click"],[1,"fa-solid","fa-cart-arrow-down","fa-xl","fa-beat",2,"color","rgba(255, 0, 0, 0.5)"],[1,"badge","bg-info","position-absolute","top-0","start-0"],[1,"fa-solid","fa-cart-shopping","fa-xl",2,"color","#0aad0a"]],template:function(c,m){c&1&&(e(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"img",3),t(),e(4,"button",4),a(5,"span",5),t(),e(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),l(10),p(11,"translate"),t()(),e(12,"li",8)(13,"a",10),l(14),p(15,"translate"),t()(),e(16,"li",8)(17,"a",11),l(18),p(19,"translate"),t()(),e(20,"li",8)(21,"a",12),l(22),p(23,"translate"),t()(),e(24,"li",8)(25,"a",13),l(26),p(27,"translate"),t()()(),e(28,"ul",7)(29,"li",14)(30,"a",15),l(31),p(32,"translate"),t(),e(33,"ul",16)(34,"li",17),g("click",function(){return m.change("en")}),e(35,"a",18),l(36,"en"),t()(),e(37,"li",17),g("click",function(){return m.change("ar")}),e(38,"a",18),l(39,"ar"),t()()()(),e(40,"li",19)(41,"a",20),_(42,F,3,1)(43,z,3,1),t()(),e(44,"li",8)(45,"a",21),a(46,"i",22),t()(),e(47,"li",8)(48,"a",23),a(49,"i",24),t()(),e(50,"li",8)(51,"a",25),a(52,"i",26),t()(),e(53,"li",8)(54,"a",27),a(55,"i",28),t()(),e(56,"li",8)(57,"a",29),a(58,"i",30),t()(),e(59,"li",8)(60,"a",31),a(61,"i",32),t()(),e(62,"li",8)(63,"a",33),g("click",function(){return m._AuthService.logOut()}),l(64),p(65,"translate"),t()()()()()()),c&2&&(r(10),d(s(11,12,"navbar.Home")),r(4),d(s(15,14,"navbar.wish list")),r(4),d(s(19,16,"navbar.Product")),r(4),u(" ",s(23,18,"navbar.Categories"),""),r(4),u(" ",s(27,20,"navbar.brands"),""),r(5),u(" ",s(32,22,"navbar.lang")," "),r(3),h("bg-secondary",m._TranslateService.currentLang=="en"),r(3),h("bg-secondary",m._TranslateService.currentLang=="ar"),r(5),C(42,m.countNumber!==0?42:43),r(22),u(" ",s(65,24,"navbar.SingOut")," "))},dependencies:[y,E,A,N],styles:[".search-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:300px}.search-input[_ngcontent-%COMP%]{width:100%;padding:10px 40px 10px 10px;font-size:16px;border:1px solid #ccc;border-radius:30px;box-sizing:border-box}.search-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:18px;color:#eeaeca;pointer-events:none}"]});let i=n;return i})();var W=(()=>{let n=class n{};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=f({type:n,selectors:[["app-blank-layout"]],standalone:!0,features:[b],decls:4,vars:0,consts:[[1,"container-fluid","mt-5"]],template:function(c,m){c&1&&(a(0,"app-nav-blank"),e(1,"div",0),a(2,"router-outlet"),t(),a(3,"app-footer"))},dependencies:[O,M,w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}"]});let i=n;return i})();export{W as BlankLayoutComponent};