import{f as O,i as B}from"./chunk-6ATCWD7L.js";import{a as P,b as D,c as k}from"./chunk-Z43QC2LQ.js";import"./chunk-IIHS2WZQ.js";import{a as $,b as F}from"./chunk-N5TDJ7VY.js";import{b as T}from"./chunk-NXFARL5Z.js";import{Qb as j,Rb as q,Wb as G,jb as L,mb as E,pb as W,zb as U}from"./chunk-ZXI3CAWZ.js";import{Ac as g,Da as l,Ea as u,Ec as _,Fc as C,Gc as x,Md as S,Nb as z,Nd as A,Od as I,Pb as r,bc as a,cc as s,fe as N,g as w,hc as f,kc as h,mc as m,pb as i,pd as M,qb as y,xb as b,xd as V,yc as c}from"./chunk-O5BQ2VHJ.js";function H(n,p){if(n&1){let t=f();a(0,"div",3)(1,"input",4),x("ngModelChange",function(e){l(t);let d=m();return C(d.authCode,e)||(d.authCode=e),u(e)}),s(),a(2,"div",5)(3,"button",6),h("click",function(){l(t);let e=m();return u(e.handleSubmitAuthCode())}),c(4),s()()()}if(n&2){let t=m();i(),r("placeholder",t.$t("_inputAuthCode")),_("ngModel",t.authCode),i(2),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," ")}}function J(n,p){if(n&1){let t=f();a(0,"div")(1,"div",7),c(2),s(),a(3,"input",8),x("ngModelChange",function(e){l(t);let d=m();return C(d.url,e)||(d.url=e),u(e)}),s(),a(4,"button",6),h("click",function(){l(t);let e=m();return u(e.handleSave())}),c(5),s(),a(6,"button",9),h("click",function(){l(t);let e=m();return u(e.logoutAuthCode())}),c(7),s()()}if(n&2){let t=m();i(2),g(" ",t.$t("_bindDomain")," "),i(),_("ngModel",t.url),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_save")," "),i(),r("nzLoading",t.submitting),i(),g(" ",t.$t("_logoutAuthCode")," ")}}var v=class n{constructor(p){this.message=p}$t=N;submitting=!1;isPermission=!!S();authCode="";url="";ngOnInit(){this.getUserInfo()}getUserInfo(p){return w(this,null,function*(){return this.submitting=!0,j(p).then(t=>(typeof t.data?.data?.url=="string"&&(this.isPermission=!0,this.url=t.data.data.url),t)).finally(()=>{this.submitting=!1})})}handleSubmitAuthCode(){this.submitting||!this.authCode||this.getUserInfo({code:this.authCode}).then(()=>{I(this.authCode),window.location.reload()})}handleSave(){this.submitting=!0,q({url:this.url}).then(()=>{this.getUserInfo(),this.message.success(this.$t("_saveSuccess"))}).finally(()=>{this.submitting=!1})}logoutAuthCode(){A(),window.location.reload()}static \u0275fac=function(t){return new(t||n)(y(G))};static \u0275cmp=b({type:n,selectors:[["user-collect"]],decls:3,vars:3,consts:[["nzTip","Loading...",3,"nzSpinning"],["class","text-center",4,"ngIf"],[4,"ngIf"],[1,"text-center"],["nz-input","","autofocus","",3,"ngModelChange","placeholder","ngModel"],[1,"text-left"],["nz-button","","nzType","primary",1,"mt-2.5",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5"],["nz-input","","placeholder","example.cn,example.com",3,"ngModelChange","ngModel"],["nz-button","","nzType","primary","nzDanger","",1,"mt-2.5","ml-2.5",3,"click","nzLoading"]],template:function(t,o){t&1&&(a(0,"nz-spin",0),z(1,H,5,4,"div",1)(2,J,8,6,"div",2),s()),t&2&&(r("nzSpinning",o.submitting),i(),r("ngIf",!o.isPermission),i(),r("ngIf",o.isPermission))},dependencies:[V,M,U,L,E,W,B,O,k,D,P,T,F,$],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.poster[_ngcontent-%COMP%]{width:1000px;max-width:100%;border-radius:12px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{v as default};
