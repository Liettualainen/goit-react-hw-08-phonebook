"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[977],{8820:function(e,n,r){r.d(n,{nf1:function(){return i}});var t=r(9983);function i(e){return(0,t.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]})(e)}},9983:function(e,n,r){r.d(n,{w_:function(){return d}});var t=r(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=t.createContext&&t.createContext(i),a=function(){return a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},a.apply(this,arguments)},o=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]])}return r};function s(e){return e&&e.map((function(e,n){return t.createElement(e.tag,a({key:n},e.attr),s(e.child))}))}function d(e){return function(n){return t.createElement(u,a({attr:a({},e.attr)},n),s(e.child))}}function u(e){var n=function(n){var r,i=e.attr,l=e.size,s=e.title,d=o(e,["attr","size","title"]),u=l||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,d,{className:r,style:a(a({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),e.children)};return void 0!==l?t.createElement(l.Consumer,null,(function(e){return n(e)})):n(i)}},5462:function(){},2392:function(e,n,r){r.d(n,{NI:function(){return R},NJ:function(){return k},e:function(){return Z}});var t=r(1413),i=r(4925),l=r(9439),a=r(9886),o=r(4591),s=r(7872),d=r(9219),u=r(2996),c=r(5715),p=r(6992),v=r(2791),f=r(3329),m=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,l.Z)(b,2),g=y[0],Z=y[1],x=(0,a.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(x,2),N=I[0],k=I[1];var R=(0,s.G)((function(e,n){var r=(0,d.jC)("Form",e),a=function(e){var n=e.id,r=e.isRequired,a=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,i.Z)(e,m),c=(0,v.useId)(),f=n||"field-".concat(c),h="".concat(f,"-label"),b="".concat(f,"-feedback"),y="".concat(f,"-helptext"),g=(0,v.useState)(!1),Z=(0,l.Z)(g,2),x=Z[0],I=Z[1],N=(0,v.useState)(!1),k=(0,l.Z)(N,2),R=k[0],_=k[1],q=(0,v.useState)(!1),C=(0,l.Z)(q,2),O=C[0],j=C[1],F=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:y},e),{},{ref:(0,o.lq)(n,(function(e){e&&_(!0)}))})}),[y]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(O),"data-disabled":(0,p.PB)(s),"data-invalid":(0,p.PB)(a),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,s,O,a,d,h]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),E=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!a,isReadOnly:!!d,isDisabled:!!s,isFocused:!!O,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:x,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:_,id:f,labelId:h,feedbackId:b,helpTextId:y,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:S,getRootProps:w,getLabelProps:P,getRequiredIndicatorProps:E}}((0,u.Lr)(e)),s=a.getRootProps,b=(a.htmlProps,(0,i.Z)(a,h)),y=(0,p.cx)("chakra-form-control",e.className);return(0,f.jsx)(N,{value:b,children:(0,f.jsx)(g,{value:r,children:(0,f.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},s({},n)),{},{className:y,__css:r.container}))})})}));R.displayName="FormControl",(0,s.G)((function(e,n){var r=k(),i=Z(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:i.helperText,className:l}))})).displayName="FormHelperText"},8208:function(e,n,r){r.d(n,{l:function(){return v}});var t=r(1413),i=r(4925),l=r(2392),a=r(7872),o=r(9219),s=r(2996),d=r(5715),u=r(6992),c=r(3329),p=["className","children","requiredIndicator","optionalIndicator"],v=(0,a.G)((function(e,n){var r,a=(0,o.mq)("FormLabel",e),v=(0,s.Lr)(e),m=(v.className,v.children),h=v.requiredIndicator,b=void 0===h?(0,c.jsx)(f,{}):h,y=v.optionalIndicator,g=void 0===y?null:y,Z=(0,i.Z)(v,p),x=(0,l.NJ)(),I=null!=(r=null==x?void 0:x.getLabelProps(Z,n))?r:(0,t.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,t.Z)((0,t.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,t.Z)({display:"block",textAlign:"start"},a),children:[m,(null==x?void 0:x.isRequired)?b:g]}))}));v.displayName="FormLabel";var f=(0,a.G)((function(e,n){var r=(0,l.NJ)(),i=(0,l.e)();if(!(null==r?void 0:r.isRequired))return null;var a=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:a}))}));f.displayName="RequiredIndicator"},311:function(e,n,r){r.d(n,{B:function(){return x},m:function(){return Z}});var t=r(1413),i=r(4925),l=r(9439),a=r(9886),o=r(7200),s=r(7872),d=r(9219),u=r(2996),c=r(5715),p=r(6992),v=r(2796),f=r(2791),m=r(3329),h=["children","className"],b=(0,a.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),y=(0,l.Z)(b,2),g=y[0],Z=y[1],x=(0,s.G)((function(e,n){var r=(0,d.jC)("Input",e),l=(0,u.Lr)(e),a=l.children,s=l.className,b=(0,i.Z)(l,h),y=(0,p.cx)("chakra-input__group",s),Z={},x=(0,o.W)(a),I=r.field;x.forEach((function(e){var n,t;r&&(I&&"InputLeftElement"===e.type.id&&(Z.paddingStart=null!=(n=I.height)?n:I.h),I&&"InputRightElement"===e.type.id&&(Z.paddingEnd=null!=(t=I.height)?t:I.h),"InputRightAddon"===e.type.id&&(Z.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(Z.borderStartRadius=0))}));var N=x.map((function(n){var r,t,i=(0,v.o)({size:(null==(r=n.props)?void 0:r.size)||e.size,variant:(null==(t=n.props)?void 0:t.variant)||e.variant});return"Input"!==n.type.id?(0,f.cloneElement)(n,i):(0,f.cloneElement)(n,Object.assign(i,Z,n.props))}));return(0,m.jsx)(c.m.div,(0,t.Z)((0,t.Z)({className:y,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},b),{},{children:(0,m.jsx)(g,{value:r,children:N})}))}));x.displayName="InputGroup"},5442:function(e,n,r){r.d(n,{I:function(){return h}});var t=r(1413),i=r(4925),l=r(2392),a=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,o,d=(0,l.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,v=e.required,f=e.isRequired,m=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,y=e.onFocus,g=e.onBlur,Z=(0,i.Z)(e,s),x=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&x.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&x.push(d.helpTextId);return(0,t.Z)((0,t.Z)({},Z),{},{"aria-describedby":x.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:b)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=p?p:h)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=v?v:f)?o:null==d?void 0:d.isRequired,isInvalid:null!=m?m:null==d?void 0:d.isInvalid,onFocus:(0,a.v0)(null==d?void 0:d.onFocus,y),onBlur:(0,a.v0)(null==d?void 0:d.onBlur,g)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,i.Z)(n,o);return(0,t.Z)((0,t.Z)({},p),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,a.Qm)(d),"aria-required":(0,a.Qm)(c),"aria-readonly":(0,a.Qm)(u)})}var u=r(7872),c=r(9219),p=r(2996),v=r(5715),f=r(3329),m=["htmlSize"],h=(0,u.G)((function(e,n){var r=e.htmlSize,l=(0,i.Z)(e,m),o=(0,c.jC)("Input",l),s=d((0,p.Lr)(l)),u=(0,a.cx)("chakra-input",e.className);return(0,f.jsx)(v.m.input,(0,t.Z)((0,t.Z)({size:r},s),{},{__css:o.field,ref:n,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=977.cf97abe4.chunk.js.map