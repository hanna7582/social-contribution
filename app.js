(function(e){function t(t){for(var o,i,s=t[0],c=t[1],p=t[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/social-contribution/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Map")]),n("KakaoMap")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},[n("div",{staticClass:"row"},[n("div",{staticClass:"map-area"},[n("div",{attrs:{id:"map"}}),n("button",{attrs:{id:"reset"},on:{click:e.reset}},[n("i",{staticClass:"fas fa-sync-alt"})])]),n("div",{staticClass:"map-contents"},[n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[e._v(e._s(e.member.ctpName))]),n("div",{staticClass:"body"},[n("div",{staticClass:"desc"},[n("ul",[n("li",[n("b",[e._v("전체회원")]),n("span",[e._v(e._s(e.member.totalStudCnt))]),e._v("명")]),n("li",[n("b",[e._v("평균 출석률")]),n("span",[e._v(e._s(e.member.wkAttRt))]),e._v("%")]),n("li",[n("b",[e._v("평균 수행률")]),n("span",[e._v(e._s(e.member.wkExRt))]),e._v("%")]),n("li",[n("b",[e._v("평균 정답률")]),n("span",[e._v(e._s(e.member.wkAvgScore))]),e._v("%")]),n("li",[n("b",[e._v("평균 일일학습시간")]),n("span",[e._v(e._s(e.member.wkAvgLrnSec))]),e._v("분")])]),n("a",{attrs:{href:"#"}},[e._v("회원 상세보기")])])])]),n("div",{staticClass:"btn-group-avg"},e._l(e.avgMenu,(function(t,o){return n("button",{key:o,class:[t.type,{active:e.isAvgMenuActive(t.value)}],on:{click:function(n){return e.avgFilter(t.value)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])])])},s=[],c=(n("4de4"),n("4160"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),{wkAttRt:["#a20d1e","#bc0d35","#de264c","#f0788c","#f6b1c3"],wkExRt:["#ff6d00","#ff8a00","#ffc100","#ffe519","#ffff41"],wkAvgScore:["#022601","#0a4001","#3b7302","#79bf34","#a8f238"],wkAvgLrnSec:["#184675","#0072bc","#2481c1","#1d90d0","#29a4e2"]}),p=c,l={전국:{ctpCode:0,centroids:[35.87,127.65],zoom:13},서울특별시:{ctpCode:11,centroids:[37.57,126.98],zoom:9},부산광역시:{ctpCode:26,centroids:[35.18,129.06],zoom:10},대구광역시:{ctpCode:27,centroids:[35.8,128.55],zoom:10},인천광역시:{ctpCode:28,centroids:[37.49,126.4],zoom:10},광주광역시:{ctpCode:29,centroids:[35.15,126.83],zoom:9},대전광역시:{ctpCode:30,centroids:[36.33,127.39],zoom:9},울산광역시:{ctpCode:31,centroids:[35.53,129.23],zoom:10},세종특별자치시:{ctpCode:36,centroids:[36.56,127.25],zoom:9},경기도:{ctpCode:41,centroids:[37.57,127.1],zoom:11},강원도:{ctpCode:42,centroids:[37.71,128.29],zoom:12},충청북도:{ctpCode:43,centroids:[36.6,128],zoom:11},충청남도:{ctpCode:44,centroids:[36.52,126.9],zoom:11},전라북도:{ctpCode:45,centroids:[35.72,127.08],zoom:11},전라남도:{ctpCode:46,centroids:[34.8,126.9],zoom:11},경상북도:{ctpCode:47,centroids:[36.31,128.63],zoom:12},경상남도:{ctpCode:48,centroids:[35.2,128.4],zoom:11},제주특별자치도:{ctpCode:50,centroids:[33.39,126.56],zoom:10}},m=l,d=n("bc3a"),f=n.n(d),u=n("1157"),v=n.n(u),g=window.kakao,h="https://hanna7582.github.io/social-contribution",b={data:function(){return{avgMenu:[{type:"type1",value:"wkAttRt",name:"평균 출석률"},{type:"type2",value:"wkExRt",name:"평균 수행률"},{type:"type3",value:"wkAvgScore",name:"평균 정답률"},{type:"type4",value:"wkAvgLrnSec",name:"평균 일일학습시간"}],activeAvgMenu:"wkAttRt",loginInfo:{},membersInfo:{},member:{ctpName:"지역이름",wkAttRt:50,wkExRt:43,wkAvgScore:80,wkAvgLrnSec:111,totalStudCnt:6206},initAvgType:"wkAttRt",initColor:p["wkAttRt"],changeAvgType:"wkAttRt",changeColor:p["wkAttRt"]}},mounted:function(){this.initInfo()},methods:{initInfo:function(){var e=this;f.a.get(h+"/assets/js/loginInfo.json").then((function(t){e.loginInfo=t.data,f.a.get(h+"/assets/js/members/level"+t.data.level+"_members.json").then((function(n){var o=n.data[0];0!==e.loginInfo.grade&&(o=n.data.filter((function(e){return e.ctpName==t.data.ctpName}))[0]),e.member=o})),f.a.get(h+"/assets/js/members/level"+(t.data.grade+1)+"_members.json").then((function(n){e.membersInfo=n.data,e.geoJsonInfo(t.data)}))}))},geoJsonInfo:function(e){var t=this;v()("#map").empty();var n=[];f.a.get(h+"/assets/js/geojson/"+e.ctpCode+".json").then((function(e){e.data.features.forEach((function(e){var t={name:e.properties.name,code:e.properties.code,path:[]},o=e.geometry.coordinates,a=e.geometry.type;"Polygon"==a?o.forEach((function(e){var n=[];e.forEach((function(e){n.push(new g.maps.LatLng(e[1],e[0]))})),t.path.push(n)})):o.forEach((function(e){e.forEach((function(e){var n=[];e.forEach((function(e){n.push(new g.maps.LatLng(e[1],e[0]))})),t.path.push(n)}))})),n.push(t)}))})).then((function(){t.kakaoMapLoad(n,e)}))},kakaoMapLoad:function(e,t){var n,o=this,a=m[t.ctpName.split(" ")[0]],r=document.getElementById("map"),i={center:new g.maps.LatLng(a.centroids[0],a.centroids[1]),level:a.zoom},s=new g.maps.Map(r,i);s.setCopyrightPosition(g.maps.CopyrightPosition.BOTTOMRIGHT,!0);var c=new g.maps.ZoomControl;s.addControl(c,g.maps.ControlPosition.RIGHT),g.maps.event.addListener(s,"zoom_changed",(function(){var e=s.getLevel();e<13?b.addMarkers(n):b.clear()}));for(var p=0;p<e.length;p++){for(var l=!1,d=0;d<this.membersInfo.length;d++)if(e[p].name==this.membersInfo[d].ctpName.split(" ")[t.grade]){l=!0,u(e[p],this.membersInfo[d]);break}l||u(e[p],null)}function u(e,n){var a=new g.maps.Polygon({map:s,path:e.path,strokeWeight:2,strokeColor:"#fff",strokeOpacity:1,fillColor:"#ccc",fillOpacity:.8}),r="";n&&(r=n[o.changeAvgType]>=80?o.changeColor[0]:n[o.changeAvgType]>=60?o.changeColor[1]:n[o.changeAvgType]>=40?o.changeColor[2]:n[o.changeAvgType]>=20?o.changeColor[3]:o.changeColor[4],a.setOptions({fillColor:r}));var i=t.ctpName.split(" ");if(2==i.length){var c=i[i.length-1];e.name==c&&(v()(a.Bc[0]).addClass("twinkle"),o.member=n)}g.maps.event.addListener(a,"click",(function(){if(n&&(v()("#map *").removeClass("twinkle"),v()(a.Bc[0]).addClass("twinkle"),o.member=n,0==t.grade)){var r={grade:1,ctpCode:e.code,ctpName:e.name};f.a.get(h+"/assets/js/members/level2_members.json").then((function(e){o.membersInfo=e.data,o.geoJsonInfo(r)}))}}))}var b=new g.maps.MarkerClusterer({map:s,averageCenter:!0,minLevel:12,texts:k,styles:[{width:"40px",height:"40px",background:"rgba(0, 0, 0, .8)",borderRadius:"50%",color:"#fff",textAlign:"center",fontWeight:"bold",lineHeight:"41px"}]});function k(){return"click"}v.a.get(h+"/assets/js/members/level3_members.json",(function(e){1==t.grade&&(e=e.filter((function(e){return e.ctpName.split(" ")[0]==t.ctpName.split(" ")[0]}))),n=v()(e).map((function(t,n){var a,r=0;a=n[o.changeAvgType]>=80?0:n[o.changeAvgType]>=60?30:n[o.changeAvgType]>=40?60:n[o.changeAvgType]>=20?90:120,r="wkAttRt"==o.changeAvgType?0:"wkExRt"==o.changeAvgType?30:"wkAvgScore"==o.changeAvgType?60:90;var i=e[t].ctpName.split(" "),s=i[i.length-1],c=h+"/assets/img/level3.png",p=new g.maps.Size(30,30),l={spriteOrigin:new g.maps.Point(a,r),spriteSize:new g.maps.Size(150,120),alt:s};return new g.maps.Marker({position:new g.maps.LatLng(n.lat,n.lng),clickable:!0,image:new g.maps.MarkerImage(c,p,l)})}));var a=s.getLevel();a<13?b.addMarkers(n):b.clear();for(var r=0;r<n.length;r++){var i=e[r];g.maps.event.addListener(n[r],"click",c(i)),o.loginInfo.ctpName==i.ctpName&&(o.twinkle(i),o.member=i)}function c(e){return function(){o.twinkle(e),o.member=e}}g.maps.event.addListener(b,"clusterclick",(function(){for(var t=0;t<n.length;t++){var a=e[t];o.loginInfo.ctpName==a.ctpName&&o.twinkle(a)}}))}))},twinkle:function(e){var t=e.ctpName.split(" "),n=t[t.length-1];v()("#map *").removeClass("twinkle"),v()("#map img").parent().css("zIndex",0),v()('img[alt="'+n+'"]').parent().css("zIndex",100),v()('img[alt="'+n+'"]').addClass("twinkle")},reset:function(){this.changeAvgType=this.initAvgType,this.changeColor=p[this.initAvgType],this.initInfo()},avgFilter:function(e){this.activeAvgMenu=e,this.changeAvgType=e,this.changeColor=p[e],this.initInfo()},isAvgMenuActive:function(e){return e==this.activeAvgMenu}}},k=b,w=n("2877"),y=Object(w["a"])(k,i,s,!1,null,null,null),C=y.exports,A={components:{KakaoMap:C}},_=A,z=(n("5c0b"),Object(w["a"])(_,a,r,!1,null,null,null)),I=z.exports,j=n("2f62"),T={},M=T,x={},L=x,S={},O=S,R={},N=R;o["a"].use(j["a"]);var E=new j["a"].Store({state:M,getters:L,mutations:O,actions:N}),P=E,J=n("1368"),B=n.n(J);o["a"].config.productionTip=!1,o["a"].prototype.$axios=f.a,B.a.polyfill(),o["a"].use(j["a"]),new o["a"]({store:P,render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.js.map