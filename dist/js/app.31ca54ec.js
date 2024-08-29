(function(t){function e(e){for(var a,s,r=e[0],i=e[1],n=e[2],b=0,u=[];b<r.length;b++)s=r[b],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(u.length)u.shift()();return l.push.apply(l,n||[]),c()}function c(){for(var t,e=0;e<l.length;e++){for(var c=l[e],a=!0,r=1;r<c.length;r++){var i=c[r];0!==o[i]&&(a=!1)}a&&(l.splice(e--,1),t=s(s.s=c[0]))}return t}var a={},o={app:0},l=[];function s(e){if(a[e])return a[e].exports;var c=a[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=t,s.c=a,s.d=function(t,e,c){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(c,a,function(e){return t[e]}.bind(null,a));return c},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var d=i;l.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"56d7":function(t,e,c){"use strict";c.r(e);var a=c("7a23");function o(t,e,c,o,l,s){const r=Object(a["O"])("Header"),i=Object(a["O"])("router-view"),n=Object(a["O"])("Footer");return Object(a["H"])(),Object(a["i"])("div",null,[Object(a["n"])(r),Object(a["n"])(i),Object(a["n"])(n)])}function l(t,e,c,o,l,s){const r=Object(a["O"])("router-link"),i=Object(a["O"])("b-navbar-toggle"),n=Object(a["O"])("b-navbar-nav"),d=Object(a["O"])("b-collapse"),b=Object(a["O"])("b-navbar");return Object(a["H"])(),Object(a["i"])("div",null,[Object(a["n"])(b,{toggleable:"lg",variant:"dark",class:"m-0"},{default:Object(a["eb"])(()=>[Object(a["n"])(r,{class:"colorWtB",to:"/"},{default:Object(a["eb"])(()=>[Object(a["m"])("Logo")]),_:1}),Object(a["n"])(i,{target:"nav-collapse"}),Object(a["n"])(d,{id:"nav-collapse","is-nav":"",class:"text-light"},{default:Object(a["eb"])(()=>[Object(a["n"])(n,null,{default:Object(a["eb"])(()=>[Object(a["n"])(r,{to:"/",class:"colorWt"},{default:Object(a["eb"])(()=>[Object(a["m"])("상품리스트")]),_:1}),Object(a["n"])(r,{to:"/sales",class:"colorWt"},{default:Object(a["eb"])(()=>[Object(a["m"])("등록된상품페이지")]),_:1}),Object(a["n"])(r,{to:"/create",class:"colorWt"},{default:Object(a["eb"])(()=>[Object(a["m"])("제품등록페이지")]),_:1})]),_:1}),Object(a["n"])(n,{class:"ml-auto"},{default:Object(a["eb"])(()=>[void 0==s.user.profile?(Object(a["H"])(),Object(a["i"])("button",{key:0,class:"btn btn-danger m-1",type:"button",onClick:e[0]||(e[0]=(...t)=>s.kakaoLoin&&s.kakaoLoin(...t))}," 로그인 ")):(Object(a["H"])(),Object(a["i"])("button",{key:1,class:"btn bg-primary text-white m-1",type:"button",onClick:e[1]||(e[1]=(...t)=>s.kakaoLogout&&s.kakaoLogout(...t))}," 로그아웃 "))]),_:1})]),_:1})]),_:1})])}c("14d9");var s={name:"header",computed:{user(){return this.$store.state.user}},methods:{kakaoLoin(){window.Kakao.Auth.login({scope:"profile_image, profile_nickname",success:this.getProfile})},getProfile(t){console.log(t),window.Kakao.API.request({url:"/v2/user/me",success:t=>{const e=t.kakao_account,c=e.profile_image,a=e.profile.nickname;console.log("profile",c),console.log("nickname",a),console.log(e),this.login(e),alert("로그인 성공!")}})},async login(t){this.$store.commit("user",t)},kakaoLogout(){window.Kakao.Auth.logout(t=>{console.log(t),this.$store.commit("user",{}),alert("로그아웃"),this.$router.push({path:"/"})})}}},r=(c("b990"),c("6b0d")),i=c.n(r);const n=i()(s,[["render",l]]);var d=n;const b={class:"mt-5 py-5 bg-dark text-white"};function u(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("footer",b," © 2021 ")}var j={name:"footer"};const p=i()(j,[["render",u]]);var O=p,m={components:{Header:d,Footer:O},computed:{user(){return this.$store.state.user}}};c("afc7");const g=i()(m,[["render",o]]);var h=g,v=c("6605");const f={class:"mt-3"},y={class:"container"},w=Object(a["l"])('<div class="row mb-2"><div class="col-12"><select class="form-select"><option selected></option><option value="1">노트북</option><option value="2">모니터</option><option value="3">마우스/키보드</option></select></div></div>',1),_={class:"row"},k={class:"card",style:{width:"18rem"}},$=["onClick"],x=["src"],I={class:"card-body"},D={class:"card-title"},C={class:"card-text"},P={class:"badge bg-dark text-white me-1"},L={class:"badge bg-dark text-white me-1"},H={class:"badge bg-dark text-white"},S={class:"d-flex justify-content-between align-items-center"},T=Object(a["j"])("div",{class:"btn-group",role:"group"},[Object(a["j"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary"}," 장바구니 담기 "),Object(a["j"])("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"주문하기")],-1),U={class:"text-dark"};function M(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",f,[Object(a["j"])("div",y,[w,Object(a["j"])("div",_,[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productList,(t,e)=>(Object(a["H"])(),Object(a["i"])("div",{class:"col-xl-3 col-lg-4 col-md-6",key:e},[Object(a["j"])("div",k,[Object(a["j"])("a",{onClick:e=>s.goToDetail(t.id),style:{cursor:"pointer"}},[Object(a["j"])("img",{src:`/download/${t.id}/${t.path}`,class:"card-img-top",alt:"..."},null,8,x)],8,$),Object(a["j"])("div",I,[Object(a["j"])("h5",D,Object(a["S"])(t.product_name),1),Object(a["j"])("p",C,[Object(a["j"])("span",P,Object(a["S"])(t.category1),1),Object(a["j"])("span",L,Object(a["S"])(t.category2),1),Object(a["j"])("span",H,Object(a["S"])(t.category3),1)]),Object(a["j"])("div",S,[T,Object(a["j"])("small",U,Object(a["S"])(t.product_price)+"원",1)])])])]))),128))])])])}var F={data(){return{productList:[]}},created(){this.getProductList()},methods:{async getProductList(){this.productList=await this.$api("/api/productList",{}),console.log(this.productList)},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})}}};const V=i()(F,[["render",M]]);var B=V;const E={class:"mt-3"},q={class:"container"},A={class:"row"},K={class:"col-md-5"},W={id:"carouselExampleIndicators",class:"carousel carousel-dark slide","data-bs-ride":"carousel"},Z=Object(a["j"])("ol",{class:"carousel-indicators"},[Object(a["j"])("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active"}),Object(a["j"])("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1"}),Object(a["j"])("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2"})],-1),X={class:"carousel-inner"},J=["src"],N=Object(a["j"])("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"prev"},[Object(a["j"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(a["j"])("span",{class:"visually-hidden"},"Previous")],-1),R=Object(a["j"])("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"next"},[Object(a["j"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(a["j"])("span",{class:"visually-hidden"},"Next")],-1),z={class:"col-md-7"},G={class:"card shadow-sm"},Q={class:"card-body"},Y={class:"card-title"},tt={class:"card-title pt-3 pb-3 border-top"},et={class:"card-text border-top pt-3"},ct={class:"badge bg-dark me-1"},at={class:"badge bg-dark me-1"},ot={class:"badge bg-dark"},lt={class:"card-text pb-3"},st={class:"card-text border-top pb-3"},rt={class:"row"},it=Object(a["j"])("div",{class:"col-auto"},[Object(a["j"])("label",{class:"col-form-label"},"구매수량")],-1),nt={class:"col-auto"},dt={class:"input-group"},bt={class:"row pt-3 pb-3 border-top"},ut=Object(a["j"])("div",{class:"col-6"},[Object(a["j"])("h3",null,"총 상품 금액")],-1),jt={class:"col-6",style:{"text-align":"right"}},pt=Object(a["l"])('<div class="d-flex justify-content-between align-items-center"><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-dark">장바구니 담기</button></div><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-danger">주문하기</button></div></div>',1),Ot={class:"row"},mt={class:"col-12"},gt=["src"];function ht(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",E,[Object(a["j"])("div",q,[Object(a["j"])("div",A,[Object(a["j"])("div",K,[Object(a["j"])("div",W,[Z,Object(a["j"])("div",X,[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productImage,(t,e)=>(Object(a["H"])(),Object(a["i"])("div",{class:Object(a["y"])("carousel-item "+(0==e?"active":"")),key:e},[Object(a["j"])("img",{src:`/download/${l.productId}/${t.path}`,class:"d-block w-100",alt:"..."},null,8,J)],2))),128))]),N,R])]),Object(a["j"])("div",z,[Object(a["j"])("div",G,[Object(a["j"])("div",Q,[Object(a["j"])("h5",Y,Object(a["S"])(l.productDetail.product_name),1),Object(a["j"])("h5",tt,Object(a["S"])(s.getCurrencyFormat(l.productDetail.product_price))+"원 ",1),Object(a["j"])("p",et,[Object(a["j"])("span",ct,Object(a["S"])(l.productDetail.category1),1),Object(a["j"])("span",at,Object(a["S"])(l.productDetail.category2),1),Object(a["j"])("span",ot,Object(a["S"])(l.productDetail.category3),1)]),Object(a["j"])("p",lt," 배송비 "+Object(a["S"])(s.getCurrencyFormat(l.productDetail.delivery_price))+"원 | 도서산간(제주도) 배송비 추가 "+Object(a["S"])(s.getCurrencyFormat(l.productDetail.add_delivery_price))+"원 | 택배배송 | "+Object(a["S"])(l.productDetail.outbound_days)+"일 이내 출고 (주말,공휴일 제외) ",1),Object(a["j"])("div",st,[Object(a["j"])("div",rt,[it,Object(a["j"])("div",nt,[Object(a["j"])("div",dt,[Object(a["j"])("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[0]||(e[0]=t=>s.calculatePrice(-1))},"-"),Object(a["fb"])(Object(a["j"])("input",{type:"text",class:"form-control",style:{width:"40px"},"onUpdate:modelValue":e[1]||(e[1]=t=>l.total=t)},null,512),[[a["ab"],l.total]]),Object(a["j"])("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[2]||(e[2]=t=>s.calculatePrice(1))},"+")])])])]),Object(a["j"])("div",bt,[ut,Object(a["j"])("div",jt,[Object(a["j"])("h3",null,Object(a["S"])(s.getCurrencyFormat(l.totalPrice))+"원",1)])]),pt])])])]),Object(a["j"])("div",Ot,[Object(a["j"])("div",mt,[Object(a["j"])("img",{src:`/download/${l.productId}/${l.productDetail.path}`,class:"img-fluid"},null,8,gt)])])])])}var vt={data(){return{productId:0,productDetail:{},productImage:[],total:1,totalPrice:0}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},methods:{calculatePrice(t){let e=this.total+t;e<1&&(e=1),this.total=e,this.totalPrice=this.productDetail.product_price*this.total},getCurrencyFormat(t){return this.$currencyFormat(t)},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0],this.totalPrice=this.totalPrice=this.productDetail.product_price*this.total),console.log(this.productDetail)},async getProductImage(){this.productImage=await this.$api("/api/productMainImages",{param:[this.productId]}),console.log("this.productImage",this.productImage)}}};const ft=i()(vt,[["render",ht]]);var yt=ft;const wt={class:"mt-3"},_t={class:"container"},kt=Object(a["j"])("h2",{class:"text-center"},"제품 등록",-1),$t={class:"mb-3 row"},xt=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품명",-1),It={class:"col-md-9"},Dt={class:"mb-3 row"},Ct=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품가격",-1),Pt={class:"col-md-9"},Lt={class:"input-group mb-3"},Ht=Object(a["j"])("span",{class:"input-group-text"},"원",-1),St={class:"mb-3 row"},Tt=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"배송비",-1),Ut={class:"col-md-9"},Mt={class:"input-group mb-3"},Ft=Object(a["j"])("span",{class:"input-group-text"},"원",-1),Vt={class:"mb-3 row"},Bt=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"추가배송비(도서산간)",-1),Et={class:"col-md-9"},qt={class:"input-group mb-3"},At=Object(a["j"])("span",{class:"input-group-text"},"원",-1),Kt={class:"mb-3 row"},Wt=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품카테고리",-1),Zt={class:"col-md-9"},Xt={class:"row"},Jt={class:"col-auto"},Nt=["value"],Rt={class:"col-auto"},zt=["value"],Gt={class:"col-auto"},Qt=["value"],Yt={class:"mb-3 row"},te=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"태그",-1),ee={class:"col-md-9"},ce={class:"mb-3 row"},ae=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"출고일",-1),oe={class:"col-md-9"},le={class:"input-group mb-3"},se=Object(a["j"])("span",{class:"input-group-text"},"일 이내 출고",-1),re={class:"mb-3 row"},ie={class:"col-6 d-grid p-1"},ne={class:"col-6 d-grid p-1"};function de(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",wt,[Object(a["j"])("div",_t,[kt,Object(a["j"])("div",$t,[xt,Object(a["j"])("div",It,[Object(a["fb"])(Object(a["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>l.product.product_name=t)},null,512),[[a["ab"],l.product.product_name]])])]),Object(a["j"])("div",Dt,[Ct,Object(a["j"])("div",Pt,[Object(a["j"])("div",Lt,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>l.product.product_price=t)},null,512),[[a["ab"],l.product.product_price]]),Ht])])]),Object(a["j"])("div",St,[Tt,Object(a["j"])("div",Ut,[Object(a["j"])("div",Mt,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>l.product.delivery_price=t)},null,512),[[a["ab"],l.product.delivery_price]]),Ft])])]),Object(a["j"])("div",Vt,[Bt,Object(a["j"])("div",Et,[Object(a["j"])("div",qt,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>l.product.add_delivery_price=t)},null,512),[[a["ab"],l.product.add_delivery_price]]),At])])]),Object(a["j"])("div",Kt,[Wt,Object(a["j"])("div",Zt,[Object(a["j"])("div",Xt,[Object(a["j"])("div",Jt,[Object(a["fb"])(Object(a["j"])("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=t=>l.cate1=t),onChange:e[5]||(e[5]=(...t)=>s.changeCategory1&&s.changeCategory1(...t))},[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.category1,(t,e)=>(Object(a["H"])(),Object(a["i"])("option",{value:t,key:e},Object(a["S"])(t),9,Nt))),128))],544),[[a["Z"],l.cate1]])]),Object(a["j"])("div",Rt,[Object(a["fb"])(Object(a["j"])("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=t=>l.cate2=t),onChange:e[7]||(e[7]=(...t)=>s.changeCategory2&&s.changeCategory2(...t))},[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.category2,(t,e)=>(Object(a["H"])(),Object(a["i"])("option",{value:t,key:e},Object(a["S"])(t),9,zt))),128))],544),[[a["Z"],l.cate2]])]),Object(a["j"])("div",Gt,[Object(a["fb"])(Object(a["j"])("select",{class:"form-select","onUpdate:modelValue":e[8]||(e[8]=t=>l.cate3=t)},[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.category3,(t,e)=>(Object(a["H"])(),Object(a["i"])("option",{value:t,key:e},Object(a["S"])(t),9,Qt))),128))],512),[[a["Z"],l.cate3]])])])])]),Object(a["j"])("div",Yt,[te,Object(a["j"])("div",ee,[Object(a["fb"])(Object(a["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=t=>l.product.tags=t)},null,512),[[a["ab"],l.product.tags]])])]),Object(a["j"])("div",ce,[ae,Object(a["j"])("div",oe,[Object(a["j"])("div",le,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=t=>l.product.outbound_days=t)},null,512),[[a["ab"],l.product.outbound_days]]),se])])]),Object(a["j"])("div",re,[Object(a["j"])("div",ie,[Object(a["j"])("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[11]||(e[11]=(...t)=>s.goToList&&s.goToList(...t))},"취소하기")]),Object(a["j"])("div",ne,[Object(a["j"])("button",{type:"button",class:"btn btn-lg btn-danger",onClick:e[12]||(e[12]=(...t)=>s.productInsert&&s.productInsert(...t))},"저장하기")])])])])}var be={data(){return{product:{product_name:"",product_price:0,delivery_price:0,add_delivery_price:0,tags:"",outbound_days:0,category_id:1,seller_id:1},categoryList:[],category1:[],category2:[],category3:[],cate1:"",cate2:"",cate3:""}},computed:{user(){return this.$store.state.user}},created(){this.getCategoryList()},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getCategoryList(){let t=await this.$api("/api/categoryList",{});this.categoryList=t;let e={};t.forEach(t=>{e[t.category1]=t.id});let c=[];for(let l in e)c.push(l);this.category1=c;let a=[];a=t.filter(t=>t.category1==c[0]);let o={};a.forEach(t=>{o[t.category2]=t.id}),a=[];for(let l in o)a.push(l);this.category2=a},changeCategory1(){this.category3=[];let t=this.categoryList.filter(t=>t.category1==this.cate1),e={};t.forEach(t=>{e[t.category2]=t.id});let c=[];for(let a in e)c.push(a);this.category2=c},changeCategory2(){let t=this.categoryList.filter(t=>t.category1==this.cate1&&t.category2==this.cate2),e={};t.forEach(t=>{e[t.category3]=t.id});let c=[];for(let a in e)c.push(a);this.category3=c},productInsert(){return""==this.product.product_name?this.$swal("제품명은 필수 입력값입니다."):""==this.product.product_price||0==this.product.product_price?this.$swal("제품 가격을 입력하세요."):""==this.product.delivery_price||0==this.product.delivery_price?this.$swal("배송료를 입력하세요."):""==this.product.outbound_days||0==this.product.outbound_days?this.$swal("출고일을 입력하세요."):(this.product.category_id=this.categoryList.filter(t=>t.category1==this.cate1&&t.category2==this.cate2&&t.category3==this.cate3)[0].id,console.log(this.product.category_id),void this.$swal.fire({title:"정말 등록 하시겠습니까?",showCancelButton:!0,confirmButtonText:"생성",cancelButtonText:"취소"}).then(async t=>{t.isConfirmed&&(await this.$api("/api/productInsert",{param:[this.product]}),this.$swal.fire("저장되었습니다!","","success"),this.$router.push({path:"/sales"}))}))}}};const ue=i()(be,[["render",de]]);var je=ue;const pe={class:"mt-3"},Oe={class:"container"},me=Object(a["j"])("h2",{class:"text-center"},"제품 수정",-1),ge={class:"mb-3 row"},he=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품명",-1),ve={class:"col-md-9"},fe={class:"mb-3 row"},ye=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품가격",-1),we={class:"col-md-9"},_e={class:"input-group mb-3"},ke=Object(a["j"])("span",{class:"input-group-text"},"원",-1),$e={class:"mb-3 row"},xe=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"배송비",-1),Ie={class:"col-md-9"},De={class:"input-group mb-3"},Ce=Object(a["j"])("span",{class:"input-group-text"},"원",-1),Pe={class:"mb-3 row"},Le=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"추가배송비(도서산간)",-1),He={class:"col-md-9"},Se={class:"input-group mb-3"},Te=Object(a["j"])("span",{class:"input-group-text"},"원",-1),Ue={class:"mb-3 row"},Me=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품카테고리",-1),Fe={class:"col-md-9"},Ve={class:"row"},Be={class:"col-auto"},Ee=Object(a["j"])("option",{value:"1"},"전자제품",-1),qe=Object(a["j"])("option",{value:"2"},"컴퓨터",-1),Ae=Object(a["j"])("option",{value:"3"},"악세사리",-1),Ke=[Ee,qe,Ae],We={class:"mb-3 row"},Ze=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"태그",-1),Xe={class:"col-md-9"},Je={class:"mb-3 row"},Ne=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"출고일",-1),Re={class:"col-md-9"},ze={class:"input-group mb-3"},Ge=Object(a["j"])("span",{class:"input-group-text"},"일 이내 출고",-1),Qe={class:"mb-3 row"},Ye={class:"col-6 d-grid p-1"},tc={class:"col-6 d-grid p-1"};function ec(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",pe,[Object(a["j"])("div",Oe,[me,Object(a["j"])("div",ge,[he,Object(a["j"])("div",ve,[Object(a["fb"])(Object(a["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>l.productDetail.product_name=t)},null,512),[[a["ab"],l.productDetail.product_name]])])]),Object(a["j"])("div",fe,[ye,Object(a["j"])("div",we,[Object(a["j"])("div",_e,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>l.productDetail.product_price=t)},null,512),[[a["ab"],l.productDetail.product_price]]),ke])])]),Object(a["j"])("div",$e,[xe,Object(a["j"])("div",Ie,[Object(a["j"])("div",De,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>l.productDetail.delivery_price=t)},null,512),[[a["ab"],l.productDetail.delivery_price]]),Ce])])]),Object(a["j"])("div",Pe,[Le,Object(a["j"])("div",He,[Object(a["j"])("div",Se,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>l.productDetail.add_delivery_price=t)},null,512),[[a["ab"],l.productDetail.add_delivery_price]]),Te])])]),Object(a["j"])("div",Ue,[Me,Object(a["j"])("div",Fe,[Object(a["j"])("div",Ve,[Object(a["j"])("div",Be,[Object(a["fb"])(Object(a["j"])("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=t=>l.productDetail.category_id=t)},Ke,512),[[a["Z"],l.productDetail.category_id]])])])])]),Object(a["j"])("div",We,[Ze,Object(a["j"])("div",Xe,[Object(a["fb"])(Object(a["j"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>l.productDetail.tags=t)},null,512),[[a["ab"],l.productDetail.tags]])])]),Object(a["j"])("div",Je,[Ne,Object(a["j"])("div",Re,[Object(a["j"])("div",ze,[Object(a["fb"])(Object(a["j"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>l.productDetail.outbound_days=t)},null,512),[[a["ab"],l.productDetail.outbound_days]]),Ge])])]),Object(a["j"])("div",Qe,[Object(a["j"])("div",Ye,[Object(a["j"])("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[7]||(e[7]=(...t)=>s.goToList&&s.goToList(...t))},"취소하기")]),Object(a["j"])("div",tc,[Object(a["j"])("button",{type:"button",class:"btn btn-lg btn-danger",onClick:e[8]||(e[8]=(...t)=>s.saveProduct&&s.saveProduct(...t))},"저장하기")])])])])}var cc=c("bc3a"),ac=c.n(cc),oc={data(){return{productId:0,productDetail:{product_name:"",product_price:0,delivery_price:0,add_delivery_price:0,tags:"",outbound_days:0,category_id:1,id:null}}},computed:{user(){return this.$store.state.user}},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},created(){this.productId=this.$route.query.product_id,this.getProductDetail()},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])},async saveProduct(){try{const t=await ac.a.post("/api/updateProduct",this.productDetail);console.log("Update successful:",t.data),alert("제품 정보가 성공적으로 저장되었습니다."),this.$router.push({path:"/sales"})}catch(t){console.error("제품 정보를 저장하는 중 오류가 발생했습니다:",t),alert("제품 정보를 저장하는 중 오류가 발생했습니다.")}}}};const lc=i()(oc,[["render",ec]]);var sc=lc;const rc={class:"mt-3"},ic={class:"container"},nc={class:"float-end mb-1"},dc={class:"table table-bordered"},bc=Object(a["j"])("thead",null,[Object(a["j"])("tr",null,[Object(a["j"])("th"),Object(a["j"])("th",null,"제품명"),Object(a["j"])("th",null,"제품가격"),Object(a["j"])("th",null,"배송비"),Object(a["j"])("th",null,"추가 배송비"),Object(a["j"])("th")])],-1),uc=["src"],jc=["onClick"],pc=["onClick"],Oc=["onClick"];function mc(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",rc,[Object(a["j"])("div",ic,[Object(a["j"])("div",nc,[Object(a["j"])("button",{type:"button",class:"btn btn-dark",onClick:e[0]||(e[0]=(...t)=>s.goToInsert&&s.goToInsert(...t))},"제품등록")]),Object(a["j"])("table",dc,[bc,Object(a["j"])("tbody",null,[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productList,(t,e)=>(Object(a["H"])(),Object(a["i"])("tr",{key:e},[Object(a["j"])("td",null,[null!=t.path?(Object(a["H"])(),Object(a["i"])("img",{key:0,src:`/download/${t.id}/${t.path}`,style:{height:"50px",width:"auto"}},null,8,uc)):Object(a["h"])("",!0)]),Object(a["j"])("td",null,Object(a["S"])(t.product_name),1),Object(a["j"])("td",null,Object(a["S"])(t.product_price),1),Object(a["j"])("td",null,Object(a["S"])(t.delivery_price),1),Object(a["j"])("td",null,Object(a["S"])(t.add_delivery_price),1),Object(a["j"])("td",null,[Object(a["j"])("button",{type:"button",class:"btn btn-info me-1",onClick:e=>s.goToImageInsert(t.id)}," 사진등록 ",8,jc),Object(a["j"])("button",{type:"button",class:"btn btn-warning me-1",onClick:e=>s.goToUpdate(t.id)}," 수정 ",8,pc),Object(a["j"])("button",{type:"button",class:"btn btn-danger",onClick:e=>s.deleteProduct(t.id)}," 삭제 ",8,Oc)])]))),128))])])])])}var gc={data(){return{productList:[]}},created(){this.getProductList()},methods:{async getProductList(){this.productList=await this.$api("/api/productList2",{}),console.log(this.productList)},goToInsert(){this.$router.push({path:"/create"})},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})},goToUpdate(t){this.$router.push({path:"/update",query:{product_id:t}})},goToImageInsert(t){this.$router.push({path:"/image_insert",query:{product_id:t}})},deleteProduct(t){this.$swal.fire({title:"정말 삭제하시겠습니까?",showCancelButton:!0,confirmButtonText:"삭제",cancelButtonText:"취소"}).then(async e=>{e.isConfirmed&&(console.log(t),await this.$api("/api/productDelete",{param:[t]}),this.getProductList(),this.$swal.fire("삭제되었습니다!","","success"))})}}};const hc=i()(gc,[["render",mc]]);var vc=hc;const fc={class:"mt-3"},yc={class:"container"},wc=Object(a["j"])("h2",{class:"text-center"},"제품 사진 등록",-1),_c={class:"mb-3 row"},kc=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품ID",-1),$c={class:"col-md-9"},xc={class:"mb-3 row"},Ic=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품명",-1),Dc={class:"col-md-9"},Cc={class:"mb-3 row"},Pc=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"썸네일이미지",-1),Lc={class:"col-md-9"},Hc={class:"row"},Sc={class:"position-relative"},Tc=["src"],Uc=["onClick"],Mc=Object(a["j"])("div",{class:"alert alert-secondary",role:"alert"},[Object(a["j"])("ul",null,[Object(a["j"])("li",null,"이미지 사이즈 : 350*350"),Object(a["j"])("li",null,"파일 사이즈 : 1M 이하"),Object(a["j"])("li",null,"파일 확장자 : png, jpg만 가능")])],-1),Fc={class:"mb-3 row"},Vc=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품이미지",-1),Bc={class:"col-md-9"},Ec={class:"row"},qc={class:"position-relative"},Ac=["src"],Kc=["onClick"],Wc=Object(a["j"])("div",{class:"alert alert-secondary",role:"alert"},[Object(a["j"])("ul",null,[Object(a["j"])("li",null,"최대 5개 가능"),Object(a["j"])("li",null,"이미지 사이즈 : 700*700"),Object(a["j"])("li",null,"파일 사이즈 : 1M 이하"),Object(a["j"])("li",null,"파일 확장자 : png, jpg만 가능")])],-1),Zc={class:"mb-3 row"},Xc=Object(a["j"])("label",{class:"col-md-3 col-form-label"},"제품설명이미지",-1),Jc={class:"col-md-9"},Nc={class:"row"},Rc={class:"col-lg-6 col-md-8"},zc=Object(a["j"])("div",{class:"alert alert-secondary",role:"alert"},[Object(a["j"])("ul",null,[Object(a["j"])("li",null,"파일 사이즈 : 5M 이하"),Object(a["j"])("li",null,"파일 확장자 : png, jpg만 가능")])],-1),Gc={class:"position-relative"},Qc=["src"],Yc=["onClick"],ta={class:"mb-3 row m-auto"};function ea(t,e,c,o,l,s){return Object(a["H"])(),Object(a["i"])("main",fc,[Object(a["j"])("div",yc,[wc,Object(a["j"])("div",_c,[kc,Object(a["j"])("div",$c,Object(a["S"])(l.productId),1)]),Object(a["j"])("div",xc,[Ic,Object(a["j"])("div",Dc,Object(a["S"])(l.productDetail.product_name),1)]),Object(a["j"])("div",Cc,[Pc,Object(a["j"])("div",Lc,[Object(a["j"])("div",Hc,[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productImage.filter(t=>1==t.type),(t,e)=>(Object(a["H"])(),Object(a["i"])("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[Object(a["j"])("div",Sc,[Object(a["j"])("img",{src:`/download/${l.productId}/${t.path}`,class:"img-fluid"},null,8,Tc),Object(a["j"])("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>s.deleteImage(t.id)}," X ",8,Uc)])]))),128))]),Object(a["j"])("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[0]||(e[0]=t=>s.uploadFile(t.target.files,1))},null,32),Mc])]),Object(a["j"])("div",Fc,[Vc,Object(a["j"])("div",Bc,[Object(a["j"])("div",Ec,[(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productImage.filter(t=>2==t.type),(t,e)=>(Object(a["H"])(),Object(a["i"])("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[Object(a["j"])("div",qc,[Object(a["j"])("img",{src:`/download/${l.productId}/${t.path}`,class:"img-fluid"},null,8,Ac),Object(a["j"])("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>s.deleteImage(t.id)}," X ",8,Kc)])]))),128))]),Object(a["j"])("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[1]||(e[1]=t=>s.uploadFile(t.target.files,2))},null,32),Wc])]),Object(a["j"])("div",Zc,[Xc,Object(a["j"])("div",Jc,[Object(a["j"])("div",Nc,[Object(a["j"])("div",Rc,[Object(a["j"])("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[2]||(e[2]=t=>s.uploadFile(t.target.files,3))},null,32),zc]),(Object(a["H"])(!0),Object(a["i"])(a["b"],null,Object(a["M"])(l.productImage.filter(t=>3==t.type),(t,e)=>(Object(a["H"])(),Object(a["i"])("div",{class:"col-lg-6 col-md-4",key:e},[Object(a["j"])("div",Gc,[Object(a["j"])("img",{src:`/download/${l.productId}/${t.path}`,class:"img-fluid"},null,8,Qc),Object(a["j"])("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer",color:"white"},onClick:e=>s.deleteImage(t.id)}," X ",8,Yc)])]))),128))])])]),Object(a["j"])("div",ta,[Object(a["j"])("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[3]||(e[3]=(...t)=>s.goToList&&s.goToList(...t))},"확인")])])])}var ca={data(){return{productId:0,productName:"",productDetail:{},productImage:[]}},computed:{user(){return this.$store.state.user}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])},async getProductImage(){this.productImage=await this.$api("/api/imageList",{param:[this.productId]}),console.log("this.productImage",this.productImage)},deleteImage(t){this.$swal.fire({title:"정말 삭제 하시겠습니까?",showCancelButton:!0,confirmButtonText:"삭제",cancelButtonText:"취소"}).then(async e=>{e.isConfirmed&&(await this.$api("/api/imageDelete",{param:[t]}),this.getProductImage(),this.$swal.fire("삭제되었습니다!","","success"))})},async uploadFile(t,e){let c="",a=null;t&&(c=t[0].name,a=await this.$base64(t[0]));const{error:o}=await this.$api(`/upload/${this.productId}/${e}/${c}`,{data:a});if(o)return this.$swal("이미지 업로드 실패했습니다. 다시 시도하세요.");this.$swal("이미지가 업로드 되었습니다."),setTimeout(()=>{this.getProductImage()},1e3)}}};const aa=i()(ca,[["render",ea]]);var oa=aa;const la=[{path:"/",name:"Home",component:B},{path:"/detail",name:"ProductDetail",component:yt},{path:"/create",name:"ProductCreate",component:je},{path:"/update",name:"ProductUpdate",component:sc},{path:"/sales",name:"SalesList",component:vc},{path:"/image_insert",name:"ImageInsert",component:oa}],sa=Object(v["a"])({history:Object(v["b"])("/"),routes:la});var ra=sa,ia={methods:{async $api(t,e){return(await ac()({method:"post",url:t,data:e}).catch(t=>{console.log(t)})).data},$base64(t){return new Promise(e=>{var c=new FileReader;c.onload=t=>e(t.target.result),c.readAsDataURL(t)})},$currencyFormat(t,e="#,###"){if(0==t||null==t)return 0;var c=e.substring(0,1);"$"===c||"₩"===c?e=e.substring(1,e.length):c="";var a=",",o=0,l=".";-1==e.indexOf(".")?a=",":e.indexOf(",")<e.indexOf(".")?(a=",",l=".",o=e.length-e.indexOf(".")-1):(a=".",l=",",o=e.length-e.indexOf(",")-1);for(var s="",r="",i=1,n=0;n<o;n++)i*=10;var d=String(Math.round(parseFloat(t)*i)/i);d.indexOf("-")>-1&&(s="-",d=d.substring(1)),o>0&&"0"==e.substring(e.length-1,e.length)&&(d=String(parseFloat(d).toFixed(o))),o>0&&d.indexOf(".")>-1&&(r=d.substring(d.indexOf(".")),r=r.replace(".",l),d=d.substring(0,d.indexOf(".")));var b=/\D/g;d=d.replace(b,"");var u=/(\d+)(\d{3})/;while(u.test(d))d=d.replace(u,"$1"+a+"$2");return s+c+String(d)+String(r)}}},na=c("5502"),da=c("0e44");const ba=Object(na["a"])({state(){return{user:{}}},mutations:{user(t,e){t.user=e}},plugins:[Object(da["a"])({paths:["user"]})]});var ua=ba,ja=c("5886"),pa=(c("4413"),c("b80d"));c("7b17"),c("ab8b"),c("f9e3"),c("1a26");const Oa=Object(a["f"])(h);Oa.use(ra),Oa.mixin(ia),Oa.use(ua),Oa.use(ja["a"]),Oa.use(pa["a"]),Oa.mount("#app"),window.Kakao.init("12ecc1a13dbe01f4abcde8e95d9657af")},"97f6":function(t,e,c){},afc7:function(t,e,c){"use strict";c("f725")},b990:function(t,e,c){"use strict";c("97f6")},f725:function(t,e,c){}});
//# sourceMappingURL=app.31ca54ec.js.map