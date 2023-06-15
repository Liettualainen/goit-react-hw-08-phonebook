"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[404],{7404:function(e,t,n){n.r(t),n.d(t,{default:function(){return qe}});var r=n(2791),o=n(9434),a=n(4270),i=n(8427),s="NOT_FOUND";var c=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?c:r,a=n.maxSize,i=void 0===a?1:a,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),d=1===i?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:s},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return s}return{get:r,put:function(t,o){r(t)===s&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,u);function f(){var t=d.get(arguments);if(t===s){if(t=e.apply(null,arguments),l){var n=d.getEntries(),r=n.find((function(e){return l(e.value,t)}));r&&(t=r.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function d(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=s,d=l.memoizeOptions,f=void 0===d?n:d,p=Array.isArray(f)?f:[f],m=u(r),v=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var f=d(l),p=function(e){return e.task.isLoading},m=function(e){return e.task.items},v=f([m,function(e){return e.filter.value}],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),h=n(9983);function g(e){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}var y=n(8820),x=n(4942),E=n(9439),b=n(1413),T=n(4925),C=n(3433);function I(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=I(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=I(e))&&(r&&(r+=" "),r+=t);return r},_=["theme","type"],j=["delay","staleId"],N=function(e){return"number"==typeof e&&!isNaN(e)},L=function(e){return"string"==typeof e},w=function(e){return"function"==typeof e},z=function(e){return L(e)||w(e)?e:null},k=function(e){return(0,r.isValidElement)(e)||L(e)||w(e)||N(e)};function O(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=a?"".concat(t,"--").concat(i):t,m=a?"".concat(n,"--").concat(i):n,v=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),r=function e(r){var o;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,C.Z)(n)))};(e=t.classList).add.apply(e,(0,C.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,o)}}function R(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var S={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,C.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},A=function(e){var t=e.theme,n=e.type,o=(0,T.Z)(e,_);return r.createElement("svg",(0,b.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},B={info:function(e){return r.createElement(A,(0,b.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(A,(0,b.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(A,(0,b.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(A,(0,b.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function M(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,E.Z)(t,2)[1],o=(0,r.useState)([]),a=(0,E.Z)(o,2),i=a[0],s=a[1],c=(0,r.useRef)(null),l=(0,r.useRef)(new Map).current,u=function(e){return-1!==i.indexOf(e)},d=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:u,getToast:function(e){return l.get(e)}}).current;function f(e){var t=e.containerId;!d.props.limit||t&&d.containerId!==t||(d.count-=d.queue.length,d.queue=[])}function p(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function m(){var e=d.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function v(e,t){var o=t.delay,a=t.staleId,i=(0,T.Z)(t,j);if(k(e)&&!function(e){return!c.current||d.props.enableMultiContainer&&e.containerId!==d.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,u=i.updateId,f=i.data,v=d.props,g=function(){return p(s)},y=null==u;y&&d.count++;var x,C,I=(0,b.Z)((0,b.Z)((0,b.Z)({},v),{},{style:v.toastStyle,key:d.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,E.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:u,data:f,closeToast:g,isIn:!1,className:z(i.className||v.toastClassName),bodyClassName:z(i.bodyClassName||v.bodyClassName),progressClassName:z(i.progressClassName||v.progressClassName),autoClose:!i.isLoading&&(x=i.autoClose,C=v.autoClose,!1===x||N(x)&&x>0?x:C),deleteToast:function(){var e=R(l.get(s),"removed");l.delete(s),S.emit(4,e);var t=d.queue.length;if(d.count=null==s?d.count-d.displayedToast:d.count-1,d.count<0&&(d.count=0),t>0){var r=null==s?d.props.limit:1;if(1===t||1===r)d.displayedToast++,m();else{var o=r>t?t:r;d.displayedToast=o;for(var a=0;a<o;a++)m()}}else n()}});I.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(w(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):L(a)||N(a)?i=a:o?i=B.spinner():function(e){return e in B}(n)&&(i=B[n](s))),i}(I),w(i.onOpen)&&(I.onOpen=i.onOpen),w(i.onClose)&&(I.onClose=i.onClose),I.closeButton=v.closeButton,!1===i.closeButton||k(i.closeButton)?I.closeButton=i.closeButton:!0===i.closeButton&&(I.closeButton=!k(v.closeButton)||v.closeButton);var Z=e;(0,r.isValidElement)(e)&&!L(e.type)?Z=(0,r.cloneElement)(e,{closeToast:g,toastProps:I,data:f}):w(e)&&(Z=e({closeToast:g,toastProps:I,data:f})),v.limit&&v.limit>0&&d.count>v.limit&&y?d.queue.push({toastContent:Z,toastProps:I,staleId:a}):N(o)?setTimeout((function(){h(Z,I,a)}),o):h(Z,I,a)}}function h(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),s((function(e){return[].concat((0,C.Z)(e),[r]).filter((function(e){return e!==n}))})),S.emit(4,R(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return d.containerId=e.containerId,S.cancelEmit(3).on(0,v).on(1,(function(e){return c.current&&p(e)})).on(5,f).emit(2,d),function(){l.clear(),S.emit(3,d)}}),[]),(0,r.useEffect)((function(){d.props=e,d.isToastActive=u,d.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:u}}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function F(e){var t=(0,r.useState)(!1),n=(0,E.Z)(t,2),o=n[0],a=n[1],i=(0,r.useState)(!1),s=(0,E.Z)(i,2),c=s[0],l=s[1],u=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,r.useRef)(e),p=e.autoClose,m=e.pauseOnHover,v=e.closeToast,h=e.onClick,g=e.closeOnClick;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=u.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=P(t.nativeEvent),d.y=D(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?T():b()}}function b(){a(!0)}function T(){a(!1)}function C(t){var n=u.current;d.canDrag&&n&&(d.didMove=!0,o&&T(),d.x=P(t),d.y=D(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=u.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){f.current=e})),(0,r.useEffect)((function(){return u.current&&u.current.addEventListener("d",b,{once:!0}),w(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;w(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",b),window.addEventListener("blur",T)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var Z={onMouseDown:y,onTouchStart:y,onMouseUp:x,onTouchEnd:x};return p&&m&&(Z.onMouseEnter=T,Z.onMouseLeave=b),g&&(Z.onClick=function(e){h&&h(e),d.canCloseOnClick&&v()}),{playToast:b,pauseToast:T,isRunning:o,preventExitTransition:c,toastRef:u,eventHandlers:Z}}function q(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function H(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=s||u&&0===d,h=(0,b.Z)((0,b.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});u&&(h.transform="scaleX(".concat(d,")"));var g=Z("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":f}),y=w(c)?c({rtl:f,type:i,defaultClassName:g}):Z(g,c);return r.createElement("div",(0,x.Z)({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:y,style:h},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){p&&o()}))}var G=function(e){var t=F(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,h=e.className,g=e.style,y=e.bodyClassName,x=e.bodyStyle,E=e.progressClassName,T=e.progressStyle,C=e.updateId,I=e.role,_=e.progress,j=e.rtl,N=e.toastId,L=e.deleteToast,z=e.isIn,k=e.isLoading,O=e.iconOut,R=e.closeOnClick,S=e.theme,A=Z("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":R}),B=w(h)?h({rtl:j,position:v,type:d,defaultClassName:A}):Z(A,h),M=!!_||!l,P={closeToast:p,type:d,theme:S},D=null;return!1===s||(D=w(s)?s(P):(0,r.isValidElement)(s)?(0,r.cloneElement)(s,P):q(P)),r.createElement(m,{isIn:z,done:L,position:v,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,b.Z)((0,b.Z)({id:N,onClick:u,className:B},i),{},{style:g,ref:a}),r.createElement("div",(0,b.Z)((0,b.Z)({},z&&{role:I}),{},{className:w(y)?y({type:d}):Z("Toastify__toast-body",y),style:x}),null!=O&&r.createElement("div",{className:Z("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},O),r.createElement("div",null,c)),D,r.createElement(H,(0,b.Z)((0,b.Z)({},C&&!M?{key:"pb-".concat(C)}:{}),{},{rtl:j,theme:S,delay:l,isRunning:n,isIn:z,closeToast:p,hide:f,type:d,style:T,className:E,controlledProgress:M,progress:_||0}))))},Q=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},V=O(Q("bounce",!0)),W=(O(Q("slide",!0)),O(Q("zoom")),O(Q("flip")),(0,r.forwardRef)((function(e,t){var n=M(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=Z("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return w(s)?s({position:e,rtl:l,defaultClassName:t}):Z(t,z(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:u},o((function(e,t){var n=t.length?(0,b.Z)({},c):(0,b.Z)((0,b.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(G,(0,b.Z)((0,b.Z)({},a),{},{isIn:i(a.toastId),style:(0,b.Z)((0,b.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));W.displayName="ToastContainer",W.defaultProps={position:"top-right",transition:V,autoClose:5e3,closeButton:q,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var U,X=new Map,Y=[],J=1;function K(){return""+J++}function $(e){return e&&(L(e.toastId)||N(e.toastId))?e.toastId:K()}function ee(e,t){return X.size>0?S.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function te(e,t){return(0,b.Z)((0,b.Z)({},t),{},{type:t&&t.type||e,toastId:$(t)})}function ne(e){return function(t,n){return ee(t,te(e,n))}}function re(e,t){return ee(e,te("default",t))}re.loading=function(e,t){return ee(e,te("default",(0,b.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},re.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=L(o)?re.loading(o,n):re.loading(o.render,(0,b.Z)((0,b.Z)({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=(0,b.Z)((0,b.Z)((0,b.Z)({type:e},s),n),{},{data:o}),i=L(t)?{render:t}:t;return r?re.update(r,(0,b.Z)((0,b.Z)({},a),i)):re(i.render,(0,b.Z)((0,b.Z)({},a),i)),o}re.dismiss(r)},l=w(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},re.success=ne("success"),re.info=ne("info"),re.error=ne("error"),re.warning=ne("warning"),re.warn=re.warning,re.dark=function(e,t){return ee(e,te("default",(0,b.Z)({theme:"dark"},t)))},re.dismiss=function(e){X.size>0?S.emit(1,e):Y=Y.filter((function(t){return null!=e&&t.options.toastId!==e}))},re.clearWaitingQueue=function(e){return void 0===e&&(e={}),S.emit(5,e)},re.isActive=function(e){var t=!1;return X.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},re.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=X.get(n||U);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=(0,b.Z)((0,b.Z)((0,b.Z)({delay:100},r),t),{},{toastId:t.toastId||e,updateId:K()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,ee(i,a)}}),0)},re.done=function(e){re.update(e,{progress:1})},re.onChange=function(e){return S.on(4,e),function(){S.off(4,e)}},re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},S.on(2,(function(e){U=e.containerId||e,X.set(U,e),Y.forEach((function(e){S.emit(0,e.content,e.options)})),Y=[]})).on(3,(function(e){X.delete(e.containerId||e),0===X.size&&S.off(0).off(1).off(5)}));var oe=n(2392),ae=n(8208),ie=n(311),se=n(5715),ce=n(7872),le=n(6992),ue=n(3329),de=["placement"],fe=["className"],pe=["className"],me=(0,se.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ve=(0,ce.G)((function(e,t){var n,r,o,a=e.placement,i=void 0===a?"left":a,s=(0,T.Z)(e,de),c=(0,ie.m)(),l=c.field,u="left"===i?"insetStart":"insetEnd",d=(0,b.Z)((n={},(0,x.Z)(n,u,"0"),(0,x.Z)(n,"width",null!=(r=null==l?void 0:l.height)?r:null==l?void 0:l.h),(0,x.Z)(n,"height",null!=(o=null==l?void 0:l.height)?o:null==l?void 0:l.h),(0,x.Z)(n,"fontSize",null==l?void 0:l.fontSize),n),c.element);return(0,ue.jsx)(me,(0,b.Z)({ref:t,__css:d},s))}));ve.id="InputElement",ve.displayName="InputElement";var he=(0,ce.G)((function(e,t){var n=e.className,r=(0,T.Z)(e,fe),o=(0,le.cx)("chakra-input__left-element",n);return(0,ue.jsx)(ve,(0,b.Z)({ref:t,placement:"left",className:o},r))}));he.id="InputLeftElement",he.displayName="InputLeftElement";var ge=(0,ce.G)((function(e,t){var n=e.className,r=(0,T.Z)(e,pe),o=(0,le.cx)("chakra-input__right-element",n);return(0,ue.jsx)(ve,(0,b.Z)({ref:t,placement:"right",className:o},r))}));ge.id="InputRightElement",ge.displayName="InputRightElement";var ye=n(5442),xe=n(4224),Ee=function(){var e=(0,o.v9)(m),t=(0,o.I0)();return(0,ue.jsx)(oe.NI,{children:(0,ue.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget,o=r.elements.name.value,a=r.elements.number.value,s={name:o,number:a};return e.find((function(e){return e.name.toLowerCase()===o.toLowerCase()}))?(r.reset(),re.error("".concat(o," is already in the contact list"),{position:re.POSITION.TOP_LEFT,autoClose:2e3,pauseOnHover:!0,draggable:!0})):""!==o&&""!==a?(t((0,i.gI)(s)),void r.reset()):void alert("Task cannot be empty. Enter some text!")},children:[(0,ue.jsx)(ae.l,{fontSize:"40px",marginTop:"10px",children:"Phone book"}),(0,ue.jsx)(ae.l,{fontSize:"20px",fontWeight:"500",children:"Name:"}),(0,ue.jsxs)(ie.B,{children:[(0,ue.jsx)(he,{pointerEvents:"none",children:(0,ue.jsx)(y.nf1,{size:"20px",color:"black"})}),(0,ue.jsx)(ye.I,{paddingLeft:"40px",width:"300px",variant:"outline",placeholder:"Name",size:"md",border:"0.1rem solid",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"})]}),(0,ue.jsx)(ae.l,{marginTop:"10px",fontSize:"20px",fontWeight:"500",children:"Number:"}),(0,ue.jsxs)(ie.B,{children:[(0,ue.jsx)(he,{pointerEvents:"none",children:(0,ue.jsx)(g,{color:"gray.300"})}),(0,ue.jsx)(ye.I,{paddingLeft:"40px",width:"300px",variant:"outline",placeholder:"Phone number",size:"md",border:"0.1rem solid",type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"})]}),(0,ue.jsx)(ae.l,{children:(0,ue.jsx)(xe.z,{marginBottom:"50px",marginTop:"10px",type:"submit",colorScheme:"blue",size:"md",children:"Add Contact"})})]})})},be=n(2956),Te=n(176),Ce=["size","centerContent"],Ie=["size"],Ze=(0,se.m)("div");Ze.displayName="Box";var _e=(0,ce.G)((function(e,t){var n=e.size,r=e.centerContent,o=void 0===r||r,a=(0,T.Z)(e,Ce),i=o?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,ue.jsx)(Ze,(0,b.Z)({ref:t,boxSize:n,__css:(0,b.Z)((0,b.Z)({},i),{},{flexShrink:0,flexGrow:0})},a))}));_e.displayName="Square",(0,ce.G)((function(e,t){var n=e.size,r=(0,T.Z)(e,Ie);return(0,ue.jsx)(_e,(0,b.Z)({size:n,ref:t,borderRadius:"9999px"},r))})).displayName="Circle";var je=n(2996),Ne=n(9219),Le=["className","centerContent"],we=(0,ce.G)((function(e,t){var n=(0,je.Lr)(e),r=n.className,o=n.centerContent,a=(0,T.Z)(n,Le),i=(0,Ne.mq)("Container",e);return(0,ue.jsx)(se.m.div,(0,b.Z)((0,b.Z)({ref:t,className:(0,le.cx)("chakra-container",r)},a),{},{__css:(0,b.Z)((0,b.Z)({},i),o&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));we.displayName="Container";var ze=n(9229),ke=(0,se.m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});ke.displayName="Spacer";var Oe=function(e){var t=e.id,n=e.name,r=e.number,a=(0,o.I0)();return(0,ue.jsxs)(Te.k,{display:"flex",alignItems:"center",color:"balck",width:"100%",height:"20",bg:"gray.50",border:"1px",borderRadius:"10",mt:"3",children:[(0,ue.jsx)(Ze,{p:"4",children:(0,ue.jsxs)(we,{children:[" ",(0,ue.jsxs)(ze.x,{children:[" ",n,": +",r]}),"   "]})}),(0,ue.jsx)(ke,{}),(0,ue.jsx)(Ze,{p:"4",children:(0,ue.jsx)(xe.z,{height:"60px",width:"250px",border:"2px",size:"lg",colorScheme:"blue",fontSize:"20px",_hover:{bg:"red"},_active:{bg:"#dddfe2",transform:"scale(0.98)",borderColor:"#bec3c9"},_focus:{boxShadow:"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"},onClick:function(){return a((0,i._5)(t))},children:"Delete Contact"})})]})},Re=function(){var e=(0,o.v9)(v);return(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsxs)(ae.l,{fontSize:"30px",marginTop:"10px",children:["Contacts:",e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,ue.jsx)("div",{children:(0,ue.jsx)(Oe,{id:t,name:n,number:r})},t)}))]})})};function Se(e){return(0,h.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"}}]})(e)}var Ae=n(3452),Be=n(7277),Me=n(7195),Pe=n(8732),De=function(){var e=(0,o.I0)(),t=(0,o.v9)(v);return(0,ue.jsxs)(oe.NI,{children:[(0,ue.jsx)(ae.l,{fontSize:"20px",fontWeight:"400",marginTop:"10px",children:"Find contacts by name:"}),(0,ue.jsxs)(ie.B,{children:[(0,ue.jsx)(he,{pointerEvents:"none",children:(0,ue.jsx)(Se,{size:"20px",color:"black"})}),(0,ue.jsx)(ye.I,{paddingLeft:"40px",marginBottom:"50px",width:"300px",variant:"outline",placeholder:"Enter name to find",size:"md",border:"darkblue solid",type:"text",name:"name",onChange:function(t){var n=t.target.value;e((0,be.f)(n))}})]}),0!==t.length?(0,ue.jsx)(Re,{}):(0,ue.jsxs)(Ae.b,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"120px",children:[(0,ue.jsx)(Be.z,{}),(0,ue.jsx)(Me.C,{children:"There are no phone numbers that match your search!"}),(0,ue.jsx)(Pe.X,{children:"Please search again."})]})]})},Fe=n(3204);function qe(){var e=(0,o.I0)(),t=(0,o.v9)(p),n=(0,o.v9)(m);return(0,r.useEffect)((function(){e((0,i.Jv)())}),[e]),(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(a.q,{children:(0,ue.jsx)("title",{children:"Your Contacts List"})}),(0,ue.jsx)(W,{}),(0,ue.jsx)(Ee,{}),(0,ue.jsx)("div",{children:t&&(0,ue.jsx)(Fe.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})}),(0,ue.jsxs)("div",{children:[" ",0!==n.length&&(0,ue.jsx)(De,{})]})]})}}}]);
//# sourceMappingURL=404.22d60470.chunk.js.map