/*! For license information please see Dropdown-stories.3268037a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[4248],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:function(){return _defineProperty}})},"./stories/Dropdown.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:function(){return Dropdown},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/dropdown-button.tsx"),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const variants=["primary","secondary","tertiary"],meta={component:_src_components__WEBPACK_IMPORTED_MODULE_2__.ms,title:"Forms/Dropdown",render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Uncontrolled/automatic dropdowns"}),variants.map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_2__.ms,{visibleElement:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_3__.A,{variant:variant,children:"Download"}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Download content from:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"no-bullet",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"//www.uniprot.org",children:"UniProt"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"//www.ensembl.org",children:"Ensembl"})})]})]})})},variant)))]})};__webpack_exports__.default=meta;const Dropdown={};Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:"{}",...Dropdown.parameters?.docs?.source}}};const __namedExportsOrder=["Dropdown"]},"./src/components/dropdown-button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ci:function(){return ControlledDropdown},ms:function(){return Dropdown}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js")),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/styles/components/dropdown.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const _excluded=["children","label","className","openOnHover"],_excluded2=["visibleElement","expanded","children","className","aria-haspopup"],_excluded3=["visibleElement","propChangeToClose"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DropdownButton=_ref=>{let{children:children,label:label,className:className,openOnHover:openOnHover=!1}=_ref,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,_excluded);const[showMenu,setShowMenu]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),childType=typeof children;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{if(!showMenu)return;const listener=event=>{var _ref$current,_dropdownRef$current;!ref.current||null!==(_ref$current=ref.current)&&void 0!==_ref$current&&null!==(_ref$current=_ref$current.parentElement)&&void 0!==_ref$current&&_ref$current.contains(event.target)||"function"===childType&&null!==(_dropdownRef$current=dropdownRef.current)&&void 0!==_dropdownRef$current&&_dropdownRef$current.contains(event.target)||setShowMenu(!1)};return window.document.addEventListener("mouseup",listener),window.document.addEventListener("touchend",listener),()=>{window.document.removeEventListener("mouseup",listener),window.document.removeEventListener("touchend",listener)}}),[showMenu,childType]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{ref.current&&showMenu&&setSize(ref.current.getBoundingClientRect())}),[showMenu]);const style=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>{if(!size)return;const availableHeight=window.innerHeight-size.bottom;return{top:size.height,maxHeight:availableHeight}}),[size]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"dropdown-container",onPointerEnter:openOnHover?()=>setShowMenu(!0):void 0,onPointerLeave:openOnHover?()=>setShowMenu(!1):void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.A,_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("dropdown",className),onClick:()=>setShowMenu((showMenu=>!showMenu)),ref:ref},props),{},{children:label})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("dropdown-menu",{"dropdown-menu-open":showMenu}),ref:dropdownRef,style:style,children:showMenu&&("function"==typeof children?children(setShowMenu):children)})]})};DropdownButton.displayName="DropdownButton";const ControlledDropdown=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(((_ref2,ref)=>{let{visibleElement:visibleElement,expanded:expanded,children:children,className:className,"aria-haspopup":ariaHaspopup}=_ref2,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.A)(_ref2,_excluded2);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_3___default()(className,"dropdown")},props),{},{"aria-expanded":expanded,"aria-haspopup":ariaHaspopup||!0,ref:ref,children:[visibleElement,expanded&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"dropdown__content",children:children})]}))})),Dropdown=_ref3=>{let{visibleElement:visibleElement,propChangeToClose:propChangeToClose}=_ref3,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.A)(_ref3,_excluded3);const[expanded,setExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{setExpanded(!1)}),[propChangeToClose]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{if(!expanded)return;const listener=event=>{var _ref$current2;!ref.current||event.target&&null!==(_ref$current2=ref.current)&&void 0!==_ref$current2&&_ref$current2.contains(event.target)||setExpanded(!1)};return window.document.addEventListener("mouseup",listener,{passive:!0}),window.document.addEventListener("touchend",listener,{passive:!0}),()=>{window.document.removeEventListener("mouseup",listener),window.document.removeEventListener("touchend",listener)}}),[expanded]);const handleClick=(0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((()=>setExpanded((expanded=>!expanded))),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ControlledDropdown,_objectSpread(_objectSpread({visibleElement:(0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(visibleElement,{onClick:handleClick})},props),{},{expanded:expanded,ref:ref}))};Dropdown.displayName="Dropdown",__webpack_exports__.Ay=DropdownButton;try{ControlledDropdown.displayName="ControlledDropdown",ControlledDropdown.__docgenInfo={description:"",displayName:"ControlledDropdown",props:{visibleElement:{defaultValue:null,description:"Element always visible used to open and close the dropdown",name:"visibleElement",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},expanded:{defaultValue:null,description:"Whether the dropdown is open or closed",name:"expanded",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dropdown-button.tsx#ControlledDropdown"]={docgenInfo:ControlledDropdown.__docgenInfo,name:"ControlledDropdown",path:"src/components/dropdown-button.tsx#ControlledDropdown"})}catch(__react_docgen_typescript_loader_error){}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{visibleElement:{defaultValue:null,description:"Element always visible used to open and close the dropdown",name:"visibleElement",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},propChangeToClose:{defaultValue:null,description:"Prop that, when it changes, will cause the dropdown to close",name:"propChangeToClose",required:!1,type:{name:"unknown"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dropdown-button.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/dropdown-button.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}try{dropdownbutton.displayName="dropdownbutton",dropdownbutton.__docgenInfo={description:"",displayName:"dropdownbutton",props:{children:{defaultValue:null,description:"Content revealed on click.",name:"children",required:!0,type:{name:"ReactNode | ((showMenu: Dispatch<SetStateAction<boolean>>) => ReactNode)"}},label:{defaultValue:null,description:"Label to be display by the button",name:"label",required:!0,type:{name:"ReactNode"}},openOnHover:{defaultValue:{value:"false"},description:"Open on pointer over (useful for dropdowns in header)",name:"openOnHover",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:"The element to use as a button",name:"element",required:!1,type:{name:'"button" | "a" | FunctionComponent<{}> | ComponentClass<{}, any>'}},disabled:{defaultValue:null,description:"Flag to disable the button",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type to pass to the underlying <button></button>",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:null,description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"Classnames to be added to the button",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dropdown-button.tsx#dropdownbutton"]={docgenInfo:dropdownbutton.__docgenInfo,name:"dropdownbutton",path:"src/components/dropdown-button.tsx#dropdownbutton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/dropdown.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.button.dropdown::after{border-top-color:currentColor}.dropdown{position:relative;display:inline-block;white-space:nowrap}.dropdown>button.button:first-child{margin-inline-end:1rem;padding-inline-end:1.5ch}.dropdown>button.button.primary:first-child,.dropdown>button.button.secondary:first-child{padding-inline-end:2.5ch}.dropdown>:first-child::after{content:"▾";position:absolute;margin-inline-start:.5ch}.dropdown .button{margin-block-end:0;margin-inline-end:0}.dropdown ul{margin-inline-start:0;margin-block-end:0}.dropdown__content{box-shadow:0 .125rem .25rem .125rem rgba(22,29,57,.2);overflow-y:auto;width:max-content;z-index:9000;animation:200ms reveal;background:#fff;position:absolute;padding:.5rem;border-radius:0 0 .2rem .2rem}.dropdown__content button.button,.dropdown__content a,.dropdown__content a.button{display:inline-block;color:#161d39;margin:0;padding:.25em 1ch;width:100%;line-height:2;border:none;font-weight:normal}.dropdown__content button.button:hover,.dropdown__content button.button:focus-visible,.dropdown__content a:hover,.dropdown__content a:focus-visible,.dropdown__content a.button:hover,.dropdown__content a.button:focus-visible{background:#e4e8eb}.dropdown-container{position:relative;display:inline-block}.hover,.dropdown-content ul li button:hover,.dropdown-content ul li button.primary:hover,.dropdown-content ul li button.secondary:hover,.dropdown-content ul li button.tertiary:hover,.dropdown-content ul li a:hover,.dropdown-content ul li a.primary:hover,.dropdown-content ul li a.secondary:hover,.dropdown-content ul li a.tertiary:hover,.dropdown-menu ul li button:hover,.dropdown-menu ul li button.primary:hover,.dropdown-menu ul li button.secondary:hover,.dropdown-menu ul li button.tertiary:hover,.dropdown-menu ul li a:hover,.dropdown-menu ul li a.primary:hover,.dropdown-menu ul li a.secondary:hover,.dropdown-menu ul li a.tertiary:hover{color:#161d39;border:none;background:#e4e8eb}.dropdown-content,.dropdown-menu{--main-button-color: black;box-shadow:0 .125rem .25rem .125rem rgba(22,29,57,.2);display:none;overflow-y:auto;white-space:nowrap;position:absolute;background:#fff;z-index:9000}.dropdown-content input,.dropdown-menu input{margin:0}.dropdown-content .dropdown-menu__content,.dropdown-menu .dropdown-menu__content{padding:1rem}.dropdown-content .dropdown-menu__panel,.dropdown-menu .dropdown-menu__panel{overflow-y:auto}.dropdown-content ul,.dropdown-menu ul{display:block;list-style:none;margin:0;padding:0}.dropdown-content ul li,.dropdown-menu ul li{float:none !important;display:block;line-height:1.6rem;background-color:#fefefe !important}.dropdown-content ul li button,.dropdown-content ul li button.primary,.dropdown-content ul li button.secondary,.dropdown-content ul li button.tertiary,.dropdown-content ul li a,.dropdown-content ul li a.primary,.dropdown-content ul li a.secondary,.dropdown-content ul li a.tertiary,.dropdown-menu ul li button,.dropdown-menu ul li button.primary,.dropdown-menu ul li button.secondary,.dropdown-menu ul li button.tertiary,.dropdown-menu ul li a,.dropdown-menu ul li a.primary,.dropdown-menu ul li a.secondary,.dropdown-menu ul li a.tertiary{cursor:pointer;line-height:1.6rem;width:100%;text-align:left;font-weight:normal;padding:.5rem !important;margin:0 !important;position:relative;display:block;border:none;padding-right:1rem;text-decoration:none;white-space:nowrap}.dropdown-content ul li button.active,.dropdown-content ul li button.primary.active,.dropdown-content ul li button.secondary.active,.dropdown-content ul li button.tertiary.active,.dropdown-content ul li a.active,.dropdown-content ul li a.primary.active,.dropdown-content ul li a.secondary.active,.dropdown-content ul li a.tertiary.active,.dropdown-menu ul li button.active,.dropdown-menu ul li button.primary.active,.dropdown-menu ul li button.secondary.active,.dropdown-menu ul li button.tertiary.active,.dropdown-menu ul li a.active,.dropdown-menu ul li a.primary.active,.dropdown-menu ul li a.secondary.active,.dropdown-menu ul li a.tertiary.active{font-weight:bold}.dropdown-content .dropdown-menu,.dropdown-menu .dropdown-menu{position:relative;top:0}.dropdown-menu-open{display:block;animation:200ms reveal}@keyframes reveal{from{clip-path:circle(0% at 50% 0%)}to{clip-path:circle(100% at 50% 0%)}}',"",{version:3,sources:["webpack://./src/styles/components/dropdown.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/common/_z-index.scss","webpack://./colours.json"],names:[],mappings:"AAAA,wBAMA,6BACE,CAAA,UAGF,iBACE,CAAA,oBACA,CAAA,kBACA,CAAA,oCAIE,sBACE,CAAA,wBAEA,CAAA,0FAKA,wBAEE,CAAA,8BAKN,WACE,CAAA,iBACA,CAAA,wBACA,CAAA,kBAKF,kBACE,CAAA,mBACA,CAAA,aAGF,qBACE,CAAA,kBACA,CAAA,mBAIJ,qDCjCE,CAAA,eDmCA,CAAA,iBACA,CAAA,YEpDa,CAAA,sBFsDb,CAAA,eACA,CAAA,iBACA,CAAA,aACA,CAAA,6BACA,CAAA,kFAEA,oBAGE,CAAA,aG5DW,CAAA,QH8DX,CAAA,iBACA,CAAA,UACA,CAAA,aACA,CAAA,WACA,CAAA,kBACA,CAAA,gOAEA,kBGjEO,CAAA,oBHwEX,iBACE,CAAA,oBACA,CAAA,moBAGF,aGjFe,CAAA,WHmFb,CAAA,kBG/ES,CAAA,iCHmFX,0BAEE,CAAA,qDC5EA,CAAA,YDmFA,CAAA,eACA,CAAA,kBACA,CAAA,iBACA,CAAA,eACA,CAAA,YEvGa,CAAA,6CF8Fb,QACE,CAAA,iFAWF,YACE,CAAA,6EAGF,eACE,CAAA,uCAGF,aACE,CAAA,eACA,CAAA,QACA,CAAA,SACA,CAAA,6CAIA,qBACE,CAAA,aACA,CAAA,kBACA,CAAA,mCACA,CAAA,4hBAIE,cAIE,CAAA,kBACA,CAAA,UACA,CAAA,eACA,CAAA,kBACA,CAAA,wBACA,CAAA,mBACA,CAAA,iBACA,CAAA,aACA,CAAA,WACA,CAAA,kBACA,CAAA,oBACA,CAAA,kBACA,CAAA,4oBAMA,gBACE,CAAA,+DAUV,iBACE,CAAA,KACA,CAAA,oBAIJ,aACE,CAAA,sBACA,CAAA,kBAGF,KACE,8BACE,CAAA,GAEF,gCACE,CAAA",sourcesContent:["@import '../settings';\n@import '../colours';\n@import '../common/z-index';\n@import '../mixins';\n\n// For legacy dropdown (using borders)\n.button.dropdown::after {\n  border-top-color: currentColor;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n\n  /* Specificity fight with foundation */\n  & > button.button {\n    &:first-child {\n      margin-inline-end: 1rem;\n      /* A bit of space for the dropdown indicator */\n      padding-inline-end: 1.5ch;\n    }\n\n    &.primary,\n    &.secondary {\n      &:first-child {\n        /* A bit more space for the dropdown indicator for non-tertiary */\n        padding-inline-end: 2.5ch;\n      }\n    }\n  }\n\n  & > :first-child::after {\n    content: '▾';\n    position: absolute;\n    margin-inline-start: 0.5ch;\n  }\n\n  /* Override of franklin patterns when used within */\n  /* try to keep as little as possible, watch out of specificity wars */\n  .button {\n    margin-block-end: 0;\n    margin-inline-end: 0;\n  }\n\n  ul {\n    margin-inline-start: 0;\n    margin-block-end: 0;\n  }\n}\n\n.dropdown__content {\n  @include box-shadow();\n  overflow-y: auto;\n  width: max-content;\n  z-index: $z-index-high;\n  animation: 200ms reveal;\n  background: #fff;\n  position: absolute;\n  padding: 0.5 * $global-padding;\n  border-radius: 0 0 0.2rem 0.2rem;\n\n  button.button,\n  a,\n  a.button {\n    display: inline-block;\n    color: $colour-yankees-blue;\n    margin: 0;\n    padding: 0.25em 1ch;\n    width: 100%;\n    line-height: 2;\n    border: none;\n    font-weight: normal;\n\n    &:hover,\n    &:focus-visible {\n      background: $colour-platinum;\n    }\n  }\n}\n\n.dropdown-container {\n  position: relative;\n  display: inline-block;\n}\n\n.hover {\n  color: $colour-yankees-blue;\n  border: none;\n  background: $colour-platinum;\n}\n\n.dropdown-content,\n.dropdown-menu {\n  --main-button-color: black;\n\n  input {\n    margin: 0;\n  }\n\n  @include box-shadow();\n  display: none;\n  overflow-y: auto;\n  white-space: nowrap;\n  position: absolute;\n  background: #fff;\n  z-index: $z-index-high;\n\n  .dropdown-menu__content {\n    padding: 1rem;\n  }\n\n  .dropdown-menu__panel {\n    overflow-y: auto;\n  }\n\n  ul {\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    // overflow-y: hidden;\n    // height: auto !important;\n    li {\n      float: none !important;\n      display: block;\n      line-height: 1.6rem;\n      background-color: $white !important;\n\n      button,\n      a {\n        &,\n        &.primary,\n        &.secondary,\n        &.tertiary {\n          cursor: pointer;\n          line-height: 1.6rem;\n          width: 100%;\n          text-align: left;\n          font-weight: normal;\n          padding: 0.5rem !important; // These two !important's are required to ensure the BLAST button is ...\n          margin: 0 !important; // styled in the same way as the <a> tags in the Sequence component\n          position: relative;\n          display: block;\n          border: none;\n          padding-right: 1rem;\n          text-decoration: none;\n          white-space: nowrap;\n\n          &:hover {\n            @extend .hover;\n          }\n\n          &.active {\n            font-weight: bold;\n          }\n        }\n      }\n    }\n  }\n\n  // The autocomplete has a dropdown-menu inside a dropdown-menu\n  // so needs to have position set to relative so its width can\n  // follow its container's\n  .dropdown-menu {\n    position: relative;\n    top: 0;\n  }\n}\n\n.dropdown-menu-open {\n  display: block;\n  animation: 200ms reveal;\n}\n\n@keyframes reveal {\n  from {\n    clip-path: circle(0% at 50% 0%);\n  }\n  to {\n    clip-path: circle(100% at 50% 0%);\n  }\n}\n","@use 'sass:math';\n\n@import './settings';\n@import './colours';\n@import './franklin-settings';\n\n@mixin columns($base-class, $number) {\n  .#{$base-class}--columns {\n    column-count: $number;\n    column-width: percentage(math.div(1, $number));\n\n    & > * {\n      break-inside: avoid;\n    }\n  }\n}\n\n@mixin box-shadow($spread: 0.125rem) {\n  box-shadow: 0 0.125rem 0.25rem $spread rgba($colour-yankees-blue, 0.2);\n}\n\n@mixin fs-breakpoints($size) {\n  @if map-has-key($fs-breakpoint-values, $size) {\n    @media #{inspect(map-get($fs-breakpoint-values, $size))} {\n      @content;\n    }\n  }\n}\n\n@mixin ellipsis() {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n","$z-index-low: 2000;\n$z-index-medium: 5000;\n$z-index-high: 9000;\n//previous: $z-index-highest: 10000; current: max possible z-index\n$z-index-highest: 2147483641;\n","$sapphire-blue: #014371;\n$sea-blue: #00639a;\n$vivid-cerulean: #00a6d5;\n$medium-turquoise: #46d6fa;\n$gainsborough: #d2dce3;\n$yankees-blue: #161d39;\n$independence: #4e5a71;\n$weldon-blue: #8194a1;\n$pastel-blue: #abc7d6;\n$platinum: #e4e8eb;\n$sky-white: #fbfeff;\n$bronze: #a65708;\n$reviewed: #c39b00;\n$unreviewed: #c0c0c0;\n$uniref: #f2994c;\n$uniparc: #88c19d;\n$proteomes: #e56358;\n$reference-proteome: #9d4a4d;\n$peptide-search: #A748BD;\n$id-mapping: #357B92;\n$blast: #00A6D5;\n$align: #B8CE48;\n$warning: #ffcc33;\n$failure: #f36968;\n$success: #108f3b;\n$info: #79cbf8;\n$help-green: #28aa50;\n$coyote-brown: #966336;\n$outer-space: #374343;\n$tool-results: #622E81;"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___},"./src/styles/components/dropdown.scss":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/dropdown.scss"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6__),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6___default(),options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6___default()&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6___default().locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_2_dropdown_scss__WEBPACK_IMPORTED_MODULE_6___default().locals}}]);