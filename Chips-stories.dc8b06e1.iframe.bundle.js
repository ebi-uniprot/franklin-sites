/*! For license information please see Chips-stories.dc8b06e1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[4204],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./stories/Chips.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Chip:function(){return Chips_stories_Chip},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Chips_stories}});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/react/index.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),times=__webpack_require__("./src/svg/times.svg"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),components_chip=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/chip.scss"),chip_default=__webpack_require__.n(components_chip),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(chip_default(),options),chip_default()&&chip_default().locals&&chip_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","onRemove","className","disabled","compact","title","onClick","onKeyPress"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Chip=_ref=>{let{children:children,onRemove:onRemove,className:className="",disabled:disabled,compact:compact=!1,title:title,onClick:onClick,onKeyPress:onKeyPress}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const onRemoveRef=(0,react.useRef)(onRemove);onRemoveRef.current=onRemove;const handleRemove=(0,react.useCallback)((event=>{var _onRemoveRef$current;event.stopPropagation(),null===(_onRemoveRef$current=onRemoveRef.current)||void 0===_onRemoveRef$current||_onRemoveRef$current.call(onRemoveRef,event)}),[]),props=_objectSpread({},rest);let element="button";onRemove&&(element="span",(onClick||onKeyPress)&&(props.role="button",props.tabIndex=0));const Element=element;return(0,jsx_runtime.jsxs)(Element,_objectSpread(_objectSpread({className:classnames_default()("chip",{"chip--disabled":disabled,"chip--compact":compact},className),type:"button"===element?"button":void 0,onKeyPress:onKeyPress,onClick:onClick},props),{},{children:[children,onRemove&&!disabled&&(0,jsx_runtime.jsx)(times.A,{"data-testid":"remove-icon",onClick:handleRemove})]}))};var src_components_chip=Chip;try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{children:{defaultValue:null,description:"What is displayed within the chip",name:"children",required:!1,type:{name:"ReactNode"}},onRemove:{defaultValue:null,description:"Call back which, if present, will display a remove icon and is fired when this is clicked",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<SVGElement, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"If true will opacify the chip and prevent the remove from being clickable",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classnames to apply (eg secondary, tertiary)",name:"className",required:!1,type:{name:"string"}},compact:{defaultValue:{value:"false"},description:"Compact styling for chip",name:"compact",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Title to display on mouse over",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"click event listener on the component (except on the close button if present)",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement | HTMLSpanElement>)"}},onKeyPress:{defaultValue:null,description:"key press event listener on the component\n@deprecated Use `onKeyUp` or `onKeyDown` instead",name:"onKeyPress",required:!1,type:{name:"((() => void) & KeyboardEventHandler<HTMLButtonElement | HTMLSpanElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}try{chip.displayName="chip",chip.__docgenInfo={description:"",displayName:"chip",props:{children:{defaultValue:null,description:"What is displayed within the chip",name:"children",required:!1,type:{name:"ReactNode"}},onRemove:{defaultValue:null,description:"Call back which, if present, will display a remove icon and is fired when this is clicked",name:"onRemove",required:!1,type:{name:"((event: MouseEvent<SVGElement, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"If true will opacify the chip and prevent the remove from being clickable",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classnames to apply (eg secondary, tertiary)",name:"className",required:!1,type:{name:"string"}},compact:{defaultValue:{value:"false"},description:"Compact styling for chip",name:"compact",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Title to display on mouse over",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"click event listener on the component (except on the close button if present)",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLButtonElement | HTMLSpanElement>)"}},onKeyPress:{defaultValue:null,description:"key press event listener on the component\n@deprecated Use `onKeyUp` or `onKeyDown` instead",name:"onKeyPress",required:!1,type:{name:"((() => void) & KeyboardEventHandler<HTMLButtonElement | HTMLSpanElement>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chip.tsx#chip"]={docgenInfo:chip.__docgenInfo,name:"chip",path:"src/components/chip.tsx#chip"})}catch(__react_docgen_typescript_loader_error){}var Chips_stories={component:src_components_chip,title:"Core/Chip",argTypes:{className:{options:["primary","secondary"],control:{type:"select"}},color:{control:"select",name:"--main-chip-color",options:["var(--fr--color-sapphire-blue)","var(--fr--color-sea-blue)","var(--fr--color-vivid-cerulean)","var(--fr--color-medium-turquoise)","var(--fr--color-gainsborough)","white","blue"]}},args:{title:"this is a chip",compact:!1,disabled:!1,className:"primary",removable:!1},render:({title:title,compact:compact,className:className,disabled:disabled,color:color,removable:removable})=>(0,jsx_runtime.jsx)(src_components_chip,{title:title,compact:compact,disabled:disabled,className:className,onClick:(0,dist.XI)("click on chip"),onKeyPress:(0,dist.XI)("key press on primary"),onRemove:removable?(0,dist.XI)("Remove chip"):void 0,style:{"--main-chip-color":color},children:"Chip content"})};const Chips_stories_Chip={},__namedExportsOrder=["Chip"];Chips_stories_Chip.parameters={...Chips_stories_Chip.parameters,docs:{...Chips_stories_Chip.parameters?.docs,source:{originalSource:"{}",...Chips_stories_Chip.parameters?.docs?.source}}}},"./src/svg/times.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_exports__.A=function SvgTimes(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 352 512"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m243 256 100-100c12-12 12-32 0-45l-22-22a31 31 0 0 0-45 0L176 189 76 89a31 31 0 0 0-45 0L9 111a31 31 0 0 0 0 45l100 100L9 356a31 31 0 0 0 0 45l22 22c13 12 33 12 45 0l100-100 100 100c12 12 32 12 45 0l22-22c12-13 12-33 0-45z"})))}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/chip.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.visually-hidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.chip{--main-color: var(--main-chip-color, #00639a);line-height:1;user-select:none;display:inline-block;vertical-align:middle;margin:.25rem;padding:2px 5px;background-color:#00639a;background-color:var(--main-color);color:#fbfeff;border-radius:4px;border:1px solid #00639a;border:1px solid var(--main-color);cursor:default;white-space:nowrap}.chip svg{margin-top:-0.2rem;margin-left:.2rem;margin-right:0;width:.7rem;height:.7rem;vertical-align:middle;fill:currentColor;cursor:pointer}.chip--disabled{opacity:.25;cursor:not-allowed}.chip--compact{font-size:12px;border-radius:3px;padding:1px 2px;line-height:12px}.chip.secondary{background-color:#fff;color:#00639a;color:var(--main-color)}.chip.secondary svg{fill:currentColor}","",{version:3,sources:["webpack://./src/styles/_colours.scss","webpack://./src/styles/common/_utils.scss","webpack://./src/styles/components/chip.scss","webpack://./src/styles/_franklin-settings.scss"],names:[],mappings:"AAyDA,MAEE,kCAAA,CACA,6BAAA,CACA,mCAAA,CACA,qCAAA,CACA,iCAAA,CAGA,iCAAA,CACA,iCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,8BAAA,CAGA,6BAAA,CACA,+BAAA,CACA,uCAAA,CAGA,gDAAA,CACA,2BAAA,CACA,4BAAA,CACA,8BAAA,CAGA,mCAAA,CACA,+BAAA,CACA,0BAAA,CACA,0BAAA,CAGA,+BAAA,CAGA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGA,iCAAA,CACA,gCAAA,CACA,2BAAA,CAGA,gDAAA,CACA,mDAAA,CACA,yEAAA,CAEA,0BAAA,CCjFF,0CACE,kBAAA,CACA,oBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,SAAA,CC9BF,MACE,6CAAA,CACA,aAAA,CACA,gBAAA,CACA,oBAAA,CACA,qBAAA,CACA,aAAA,CACA,eAAA,CACA,wBFJgB,CEKhB,kCAAA,CACA,aFKiB,CEJjB,iBAAA,CACA,wBAAA,CACA,kCAAA,CACA,cAAA,CACA,kBAAA,CAEA,UACE,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CAGF,gBACE,WAAA,CACA,kBAAA,CAGF,eACE,cClCc,CDmCd,iBAAA,CACA,eAAA,CACA,gBCrCc,CDwChB,gBACE,qBAAA,CACA,aFtCc,CEuCd,uBAAA,CAEA,oBACE,iBAAA",sourcesContent:["/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","@use 'sass:math';\n@import '../settings';\n\n$small-bubble: 1.6rem;\n$medium-bubble: 3rem;\n$large-bubble: 5rem;\n\n$rootPx: 16px;\n\n@function remToPx($rem) {\n  @return unitless-calc($rem) * $rootPx;\n}\n\n@function pxToRem($px) {\n  @return math.div(unitless-calc($px), unitless-calc($rootPx)) + 0px;\n}\n\n@function bubbleFontSize($size) {\n  @return $size * 0.25 + 0.3333333333;\n}\n\n/******************************************************************************\\\n *                                                                            *\n * Visually hide any element (mostly text) accessibly.                        *\n * Support includes IE9+                                                      *\n * Source: https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html  *\n *                                                                            *\n ******************************************************************************/\n.visually-hidden:not(:focus):not(:active) {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n","@import '../colours';\n@import '../common/utils';\n@import '../settings';\n@import '../franklin-settings';\n\n.chip {\n  --main-color: var(--main-chip-color, #{$colour-sea-blue});\n  line-height: 1;\n  user-select: none;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0.25rem;\n  padding: pxToRem(2) pxToRem(5);\n  background-color: $colour-sea-blue;\n  background-color: var(--main-color);\n  color: $colour-sky-white;\n  border-radius: pxToRem(4);\n  border: pxToRem(1) solid $colour-sea-blue;\n  border: pxToRem(1) solid var(--main-color);\n  cursor: default;\n  white-space: nowrap;\n\n  svg {\n    margin-top: -0.2rem;\n    margin-left: 0.2rem;\n    margin-right: 0;\n    width: 0.7rem;\n    height: 0.7rem;\n    vertical-align: middle;\n    fill: currentColor;\n    cursor: pointer;\n  }\n\n  &--disabled {\n    opacity: 0.25;\n    cursor: not-allowed;\n  }\n\n  &--compact {\n    font-size: $font-size-small;\n    border-radius: pxToRem(3);\n    padding: pxToRem(1) pxToRem(2);\n    line-height: $font-size-small;\n  }\n\n  &.secondary {\n    background-color: map-get($foundation-palette, secondary);\n    color: $colour-sea-blue;\n    color: var(--main-color);\n\n    svg {\n      fill: currentColor;\n    }\n  }\n}\n","// Font families\n$fs-base-font-face: 'Lato', sans-serif;\n$fs-headers-font-face: 'Source Sans Pro', sans-serif;\n\n// Base font sizes\n$font-size-small: 12px;\n$font-size-medium: 14px;\n$font-size-large: 16px;\n\n// Font sizes\n$fs-base-font-size: $font-size-large;\n\n// Font weights\n$fs-font-weight-regular: 400;\n$fs-font-weight-semi-bold: 600;\n$fs-font-weight-bold: 700;\n$fs-font-weight-extra-bold: 900;\n\n// Breakpoints\n$fs-breakpoint-values: (\n  'small': (\n    min-width: 0,\n  ),\n  'medium': (\n    min-width: 640px,\n  ),\n  'large': (\n    min-width: 1024px,\n  ),\n);\n\n$gutter-size: 1rem;\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);