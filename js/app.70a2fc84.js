(function(){"use strict";var e={663:function(e,t,r){var s=r(751),o=r(641);const n={id:"app"};function i(e,t,r,s,i,a){const u=(0,o.g2)("SurpriseComponent");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(u)])}const a={id:"app",class:"container"},u={key:0},c={key:0,class:"hearts"},h={key:1,class:"surprise-image"},p={key:2,class:"surprise-text"},l={key:4,class:"appreciation-message"},f=["innerHTML"];function w(e,t,r,s,n,i){return(0,o.uX)(),(0,o.CE)("div",a,[t[6]||(t[6]=(0,o.Lk)("h1",null,"Hi Jeia! 💕",-1)),t[7]||(t[7]=(0,o.Lk)("p",{class:"sweet-text"}," You’re the sweetest person I know, and I’m so lucky to have you! ",-1)),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.showSurprise&&i.showSurprise(...e)),class:"cute-button"}," Click Me for a Surprise! "),n.showFirstMessage?((0,o.uX)(),(0,o.CE)("div",u,[t[3]||(t[3]=(0,o.Lk)("p",{class:"surprise-text"},"You always make my heart so happy!",-1)),n.showHeartsBelow?((0,o.uX)(),(0,o.CE)("div",c,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(5,(e=>(0,o.Lk)("span",{key:e,class:"heart"},"💖"))),64))])):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.anotherSurprise&&i.anotherSurprise(...e)),class:"cute-button"}," Another Surprise! ")])):(0,o.Q3)("",!0),n.showSurpriseImage?((0,o.uX)(),(0,o.CE)("div",h,t[4]||(t[4]=[(0,o.Lk)("img",{class:"surprise-img",src:"https://c.tenor.com/tLX14hqgV4kAAAAd/tenor.gif"},null,-1)]))):(0,o.Q3)("",!0),n.showSecondMessage?((0,o.uX)(),(0,o.CE)("p",p,t[5]||(t[5]=[(0,o.eW)(" You make everything brighter "),(0,o.Lk)("span",{class:"sun-animation"},"☀️",-1)]))):(0,o.Q3)("",!0),n.showButtonAfterDelay?((0,o.uX)(),(0,o.CE)("button",{key:3,onClick:t[2]||(t[2]=(...e)=>i.showAppreciation&&i.showAppreciation(...e)),class:"cute-button jeia-button"}," Jeia, 🌸 ")):(0,o.Q3)("",!0),n.showAppreciationMessage?((0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("p",{innerHTML:n.currentMessage},null,8,f)])):(0,o.Q3)("",!0)])}var d={name:"SurpriseComponent",data(){return{showFirstMessage:!1,showSecondMessage:!1,showHeartsBelow:!1,showButtonAfterDelay:!1,showAppreciationMessage:!1,showSurpriseImage:!1,words:[],currentWordIndex:0,currentMessage:""}},methods:{showSurprise(){this.showFirstMessage=!0,this.showHeartsBelow=!0},anotherSurprise(){this.showSecondMessage=!1,this.showSurpriseImage=!0,setTimeout((()=>{this.showSurpriseImage=!1,this.showSecondMessage=!0}),3e3),setTimeout((()=>{this.showButtonAfterDelay=!0}),4e3)},showAppreciation(){const e="I appreciate you so much for your love, for taking care of me, and for always looking out for me. 💖 I hope we get to live a long, happy life together, and that I can spoil you endlessly. 🎁 I can't wait for us to travel the world and create meaningful photos and memories. ✈️";this.words=e.split(" "),this.currentWordIndex=0,this.showAppreciationMessage=!0,this.currentMessage="",this.showWord()},showWord(){this.currentWordIndex<this.words.length&&(this.currentMessage+=this.words[this.currentWordIndex]+" ",this.currentWordIndex++,setTimeout((()=>{this.showWord()}),300))}}},g=r(262);const m=(0,g.A)(d,[["render",w]]);var v=m,k={name:"App",components:{SurpriseComponent:v}};const y=(0,g.A)(k,[["render",i]]);var b=y;(0,s.Ef)(b).mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,s,o,n){if(!s){var i=1/0;for(h=0;h<e.length;h++){s=e[h][0],o=e[h][1],n=e[h][2];for(var a=!0,u=0;u<s.length;u++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](s[u])}))?s.splice(u--,1):(a=!1,n<i&&(i=n));if(a){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[s,o,n]}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,i=s[0],a=s[1],u=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var h=u(r)}for(t&&t(s);c<i.length;c++)n=i[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(h)},s=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(663)}));s=r.O(s)})();
//# sourceMappingURL=app.70a2fc84.js.map