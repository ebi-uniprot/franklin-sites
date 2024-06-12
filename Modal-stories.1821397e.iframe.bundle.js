(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[4258],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:function(){return _defineProperty}})},"./stories/Modal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:function(){return Modal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Modal_stories}});var dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","handleExitModal","onWindowOpen"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const ModalBackdrop=_ref=>{let{className:className,handleExitModal:handleExitModal,onWindowOpen:onWindowOpen}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const bodyTag=document.body;return bodyTag.classList.add("modal__body"),(0,react.useEffect)((()=>()=>bodyTag.classList.remove("modal__body"))),(0,jsx_runtime.jsx)("div",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:classnames_default()("modal__backdrop",className),onClick:handleExitModal,role:"dialog","aria-hidden":!0},props))};ModalBackdrop.displayName="ModalBackdrop";var modal_backdrop=ModalBackdrop;try{modalbackdrop.displayName="modalbackdrop",modalbackdrop.__docgenInfo={description:"",displayName:"modalbackdrop",props:{handleExitModal:{defaultValue:null,description:"",name:"handleExitModal",required:!0,type:{name:"() => void"}},onWindowOpen:{defaultValue:null,description:"",name:"onWindowOpen",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal-backdrop.tsx#modalbackdrop"]={docgenInfo:modalbackdrop.__docgenInfo,name:"modalbackdrop",path:"src/components/modal-backdrop.tsx#modalbackdrop"})}catch(__react_docgen_typescript_loader_error){}var window_window=__webpack_require__("./src/components/window/window.tsx"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/modal.scss"),modal_default=__webpack_require__.n(modal),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(modal_default(),options),modal_default()&&modal_default().locals&&modal_default().locals;const modal_excluded=["children","title","width","height","handleExitModal","withHeaderCloseButton","withFooterCloseButton"];function modal_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function modal_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?modal_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):modal_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DialogWindow=_ref=>{let{title:title,width:width,height:height,className:className,handleExitModal:handleExitModal,onWindowOpen:onWindowOpen,withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton,children:children}=_ref;return(0,jsx_runtime.jsx)(window_window.A,{width:width,height:height,title:title,withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton,onWindowOpen:onWindowOpen,onWindowClose:handleExitModal,withShadow:!0,className:className,children:children})};DialogWindow.displayName="DialogWindow";const ButtonModal=_ref2=>{let{buttonText:buttonText,title:title,width:width="70vw",height:height="70vh",withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton=!0,children:children}=_ref2;const{displayModal:displayModal,setDisplayModal:setDisplayModal,Modal:Modal}=function useModal(Backdrop,Content){const[displayModal,setDisplayModal]=(0,react.useState)(!1);return{displayModal:displayModal,setDisplayModal:setDisplayModal,Modal:_ref=>{let{children:children,title:title,width:width="50vw",height:height="50vh",handleExitModal:handleExitModal,withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton}=_ref,rest=(0,objectWithoutProperties.A)(_ref,modal_excluded);return(0,jsx_runtime.jsxs)("div",{className:"modal",children:[(0,jsx_runtime.jsx)(Backdrop,modal_objectSpread({className:"modal__backdrop--visible",handleExitModal:handleExitModal},rest)),(0,jsx_runtime.jsx)(Content,modal_objectSpread(modal_objectSpread({className:"modal__content",title:title,width:width,height:height,handleExitModal:handleExitModal,withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton},rest),{},{children:children}))]})}}}(modal_backdrop,DialogWindow);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>setDisplayModal(!0),className:"button",type:"button",children:buttonText}),displayModal&&(0,jsx_runtime.jsx)(Modal,{handleExitModal:()=>setDisplayModal(!1),title:title,width:width,height:height,withHeaderCloseButton:withHeaderCloseButton,withFooterCloseButton:withFooterCloseButton,children:children})]})};ButtonModal.displayName="ButtonModal";var button_modal=ButtonModal;try{buttonmodal.displayName="buttonmodal",buttonmodal.__docgenInfo={description:"",displayName:"buttonmodal",props:{buttonText:{defaultValue:null,description:"The button label",name:"buttonText",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"The modal title",name:"title",required:!0,type:{name:"string"}},width:{defaultValue:{value:"70vw"},description:"The width of the modal window",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"70vh"},description:"The height of the modal window",name:"height",required:!1,type:{name:"string"}},withHeaderCloseButton:{defaultValue:null,description:"Display the close icon in the header",name:"withHeaderCloseButton",required:!1,type:{name:"boolean"}},withFooterCloseButton:{defaultValue:{value:"true"},description:"Display the close button in the footer",name:"withFooterCloseButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button-modal.tsx#buttonmodal"]={docgenInfo:buttonmodal.__docgenInfo,name:"buttonmodal",path:"src/components/button-modal.tsx#buttonmodal"})}catch(__react_docgen_typescript_loader_error){}var Modal_stories={title:"Layout/Modal"};const Modal=()=>(0,jsx_runtime.jsx)(button_modal,{buttonText:"click me",title:"Example modal window",children:(0,dist.Ok)({count:45})});Modal.displayName="Modal",Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:'() => <ButtonModal buttonText="click me" title="Example modal window">\n    {loremIpsum({\n    count: 45\n  })}\n  </ButtonModal>',...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Modal"]},"./src/svg/times.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_exports__.A=function SvgTimes(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 352 512"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m243 256 100-100c12-12 12-32 0-45l-22-22a31 31 0 0 0-45 0L176 189 76 89a31 31 0 0 0-45 0L9 111a31 31 0 0 0 0 45l100 100L9 356a31 31 0 0 0 0 45l22 22c13 12 33 12 45 0l100-100 100 100c12 12 32 12 45 0l22-22c12-13 12-33 0-45z"})))}},"./src/components/window/window.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return window_window}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),times=__webpack_require__("./src/svg/times.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["iconOnly","text","onClick"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}const WindowActionButton=_ref=>{let{icon:icon,text:text,onClick:onClick,primary:primary=!1,className:className}=_ref;const iconOnly=icon&&!text;return(0,jsx_runtime.jsxs)("button",{className:classnames_default()("window__action-button",className,{"window__action-button--icon-only":!!iconOnly,button:!iconOnly,secondary:!iconOnly&&!primary}),onClick:onClick,type:"button",children:[icon&&icon,text&&text]})};WindowActionButton.displayName="WindowActionButton";const DefaultCloseButton=_ref2=>{let{iconOnly:iconOnly=!1,text:text,onClick:onClick}=_ref2,otherProps=(0,objectWithoutProperties.A)(_ref2,_excluded);const iconOnlyClass="window__default-close-button--icon-only";return(0,jsx_runtime.jsx)(WindowActionButton,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:classnames_default()("window__default-close-button",{[iconOnlyClass]:!!iconOnly}),icon:iconOnly?(0,jsx_runtime.jsx)(times.A,{width:"10",height:"10"}):null,text:iconOnly?void 0:"Close",primary:!iconOnly,onClick:onClick},otherProps))};DefaultCloseButton.displayName="DefaultCloseButton";try{WindowActionButton.displayName="WindowActionButton",WindowActionButton.__docgenInfo={description:"",displayName:"WindowActionButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/window/window-buttons.tsx#WindowActionButton"]={docgenInfo:WindowActionButton.__docgenInfo,name:"WindowActionButton",path:"src/components/window/window-buttons.tsx#WindowActionButton"})}catch(__react_docgen_typescript_loader_error){}try{DefaultCloseButton.displayName="DefaultCloseButton",DefaultCloseButton.__docgenInfo={description:"",displayName:"DefaultCloseButton",props:{iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/window/window-buttons.tsx#DefaultCloseButton"]={docgenInfo:DefaultCloseButton.__docgenInfo,name:"DefaultCloseButton",path:"src/components/window/window-buttons.tsx#DefaultCloseButton"})}catch(__react_docgen_typescript_loader_error){}const WindowHeader=_ref=>{let{title:title,withCloseButton:withCloseButton,onWindowClose:onWindowClose}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"window__header",children:[(0,jsx_runtime.jsx)("span",{className:"window__header__title",children:title}),withCloseButton&&onWindowClose&&(0,jsx_runtime.jsx)(DefaultCloseButton,{onClick:onWindowClose,iconOnly:!0})]})};WindowHeader.displayName="WindowHeader";var window_header=WindowHeader;try{windowheader.displayName="windowheader",windowheader.__docgenInfo={description:"",displayName:"windowheader",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},withCloseButton:{defaultValue:null,description:"",name:"withCloseButton",required:!1,type:{name:"boolean"}},onWindowClose:{defaultValue:null,description:"",name:"onWindowClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/window/window-header.tsx#windowheader"]={docgenInfo:windowheader.__docgenInfo,name:"windowheader",path:"src/components/window/window-header.tsx#windowheader"})}catch(__react_docgen_typescript_loader_error){}const WindowFooter=_ref=>{let{withCloseButton:withCloseButton,onWindowClose:onWindowClose,children:children}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"window__footer",children:[children,withCloseButton&&onWindowClose&&(0,jsx_runtime.jsx)(DefaultCloseButton,{onClick:onWindowClose,text:"Close"})]})};WindowFooter.displayName="WindowFooter";var window_footer=WindowFooter;try{windowfooter.displayName="windowfooter",windowfooter.__docgenInfo={description:"",displayName:"windowfooter",props:{withCloseButton:{defaultValue:null,description:"",name:"withCloseButton",required:!1,type:{name:"boolean"}},onWindowClose:{defaultValue:null,description:"",name:"onWindowClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/window/window-footer.tsx#windowfooter"]={docgenInfo:windowfooter.__docgenInfo,name:"windowfooter",path:"src/components/window/window-footer.tsx#windowfooter"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),components_window=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/window.scss"),window_default=__webpack_require__.n(components_window),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(window_default(),options),window_default()&&window_default().locals&&window_default().locals;const Window=_ref=>{let{width:width="50vw",height:height="50vh",title:title,withHeaderCloseButton:withHeaderCloseButton=!1,withFooterCloseButton:withFooterCloseButton=!1,onWindowOpen:onWindowOpen,onWindowClose:onWindowClose,actionButtons:actionButtons,withShadow:withShadow=!1,className:className,children:children}=_ref;const styles={width:width,minHeight:height,top:`calc((80vh - ${height}) / 2)`,left:`calc((100vw - ${width}) / 2)`},cssClasses=classnames_default()("window",className,{"window--with-shadow":!!withShadow});return null==onWindowOpen||onWindowOpen(),(0,jsx_runtime.jsxs)("div",{className:cssClasses,style:styles,children:[title&&(0,jsx_runtime.jsx)(window_header,{title:title,withCloseButton:withHeaderCloseButton,onWindowClose:onWindowClose}),(0,jsx_runtime.jsx)("div",{className:"window__content",children:children}),(withFooterCloseButton||actionButtons)&&(0,jsx_runtime.jsx)(window_footer,{withCloseButton:withFooterCloseButton,onWindowClose:onWindowClose,children:actionButtons&&actionButtons})]})};Window.displayName="Window";var window_window=Window;try{window.displayName="window",window.__docgenInfo={description:"",displayName:"window",props:{width:{defaultValue:{value:"50vw"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"50vh"},description:"",name:"height",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},withHeaderCloseButton:{defaultValue:{value:"false"},description:"",name:"withHeaderCloseButton",required:!1,type:{name:"boolean"}},withFooterCloseButton:{defaultValue:{value:"false"},description:"",name:"withFooterCloseButton",required:!1,type:{name:"boolean"}},onWindowOpen:{defaultValue:null,description:"",name:"onWindowOpen",required:!1,type:{name:"(() => void)"}},onWindowClose:{defaultValue:null,description:"",name:"onWindowClose",required:!1,type:{name:"(() => void)"}},withShadow:{defaultValue:{value:"false"},description:"",name:"withShadow",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},actionButtons:{defaultValue:null,description:"",name:"actionButtons",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/window/window.tsx#window"]={docgenInfo:window.__docgenInfo,name:"window",path:"src/components/window/window.tsx#window"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/modal.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".modal__content{position:fixed;z-index:1000}.modal__backdrop{position:fixed;width:100%;height:100%;background-color:#00639a;opacity:.7;top:0;left:0;display:none;z-index:999}.modal__backdrop--visible{display:block}.modal__body{overflow:hidden}","",{version:3,sources:["webpack://./src/styles/components/modal.scss","webpack://./colours.json"],names:[],mappings:"AAGE,gBACE,cAAA,CACA,YAAA,CAGF,iBACE,cAAA,CACA,UAAA,CACA,WAAA,CACA,wBCXO,CDYP,UAAA,CACA,KAAA,CACA,MAAA,CACA,YAAA,CACA,WAAA,CAEA,0BACE,aAAA,CAIJ,aACE,eAAA",sourcesContent:["@import '../colours';\n\n.modal {\n  &__content {\n    position: fixed;\n    z-index: 1000;\n  }\n\n  &__backdrop {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: $colour-sea-blue;\n    opacity: 0.7;\n    top: 0;\n    left: 0;\n    display: none;\n    z-index: 999;\n\n    &--visible {\n      display: block;\n    }\n  }\n\n  &__body {\n    overflow: hidden;\n  }\n}\n","$sapphire-blue: #014371;\n$sea-blue: #00639a;\n$vivid-cerulean: #00a6d5;\n$medium-turquoise: #46d6fa;\n$gainsborough: #d2dce3;\n$yankees-blue: #161d39;\n$independence: #4e5a71;\n$weldon-blue: #8194a1;\n$pastel-blue: #abc7d6;\n$platinum: #e4e8eb;\n$sky-white: #fbfeff;\n$bronze: #a65708;\n$reviewed: #c39b00;\n$unreviewed: #c0c0c0;\n$uniref: #f2994c;\n$uniparc: #88c19d;\n$proteomes: #e56358;\n$reference-proteome: #9d4a4d;\n$peptide-search: #A748BD;\n$id-mapping: #357B92;\n$blast: #00A6D5;\n$align: #B8CE48;\n$warning: #ffcc33;\n$failure: #f36968;\n$success: #108f3b;\n$info: #79cbf8;\n$help-green: #28aa50;\n$coyote-brown: #966336;\n$outer-space: #374343;\n$tool-results: #622E81;"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/window.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".window{display:flex;flex-direction:column;border:.1rem solid #161d39}.window--with-shadow{box-shadow:0 .125rem .25rem .3rem rgba(22,29,57,.2)}.window__header{width:100%;height:2rem;color:#fbfeff;background-color:#161d39;font-weight:700;padding:0 .5rem;display:flex;line-height:2rem;justify-content:center;align-items:center}.window__header__title{margin-right:auto}.window__content{width:100%;flex-grow:1;padding:.5rem;background-color:#fbfeff}.window__footer{width:100%;background-color:#fbfeff;display:flex;justify-content:flex-end;padding:.5rem}.window__footer .button{margin-bottom:0;margin-left:.5rem;padding:.5rem 1rem}.window__default-close-button{margin-left:auto}.window__default-close-button--icon-only{width:1rem;height:1rem;background-color:#fbfeff;color:#00639a;cursor:pointer;border-radius:.5rem}","",{version:3,sources:["webpack://./src/styles/components/window.scss","webpack://./src/styles/_mixins.scss","webpack://./colours.json"],names:[],mappings:"AAIA,QACE,YAAA,CACA,qBAAA,CACA,0BAAA,CAEA,qBCSA,mDAAA,CDLA,gBACE,UAAA,CACA,WAAA,CACA,aENQ,CFOR,wBEZW,CFaX,eAAA,CACA,eAAA,CACA,YAAA,CACA,gBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,uBACE,iBAAA,CAIJ,iBACE,UAAA,CACA,WAAA,CACA,aAAA,CACA,wBExBQ,CF2BV,gBACE,UAAA,CACA,wBE7BQ,CF8BR,YAAA,CACA,wBAAA,CACA,aAAA,CAEA,wBACE,eAAA,CACA,iBAAA,CACA,kBAAA,CAIJ,8BACE,gBAAA,CAEA,yCACE,UAAA,CACA,WAAA,CACA,wBE/CM,CFgDN,aEzDK,CF0DL,cAAA,CACA,mBAAA",sourcesContent:["@import '../settings';\n@import '../colours';\n@import '../mixins';\n\n.window {\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid $colour-yankees-blue;\n\n  &--with-shadow {\n    @include box-shadow(0.3rem);\n  }\n\n  &__header {\n    width: 100%;\n    height: 2rem;\n    color: $colour-sky-white;\n    background-color: $colour-yankees-blue;\n    font-weight: 700;\n    padding: 0 $global-padding * 0.5;\n    display: flex;\n    line-height: 2rem;\n    justify-content: center;\n    align-items: center;\n\n    &__title {\n      margin-right: auto;\n    }\n  }\n\n  &__content {\n    width: 100%;\n    flex-grow: 1;\n    padding: $global-padding * 0.5;\n    background-color: $colour-sky-white;\n  }\n\n  &__footer {\n    width: 100%;\n    background-color: $colour-sky-white;\n    display: flex;\n    justify-content: flex-end;\n    padding: $global-padding * 0.5;\n\n    .button {\n      margin-bottom: 0;\n      margin-left: $global-padding * 0.5;\n      padding: 0.5rem 1rem;\n    }\n  }\n\n  &__default-close-button {\n    margin-left: auto;\n\n    &--icon-only {\n      width: 1rem;\n      height: 1rem;\n      background-color: $colour-sky-white;\n      color: $colour-sea-blue;\n      cursor: pointer;\n      border-radius: 0.5rem;\n    }\n  }\n}\n","@use 'sass:math';\n\n@import './settings';\n@import './colours';\n@import './franklin-settings';\n\n@mixin columns($base-class, $number) {\n  .#{$base-class}--columns {\n    column-count: $number;\n    column-width: percentage(math.div(1, $number));\n\n    & > * {\n      break-inside: avoid;\n    }\n  }\n}\n\n@mixin box-shadow($spread: 0.125rem) {\n  box-shadow: 0 0.125rem 0.25rem $spread rgba($colour-yankees-blue, 0.2);\n}\n\n@mixin fs-breakpoints($size) {\n  @if map-has-key($fs-breakpoint-values, $size) {\n    @media #{inspect(map-get($fs-breakpoint-values, $size))} {\n      @content;\n    }\n  }\n}\n\n@mixin ellipsis() {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n","$sapphire-blue: #014371;\n$sea-blue: #00639a;\n$vivid-cerulean: #00a6d5;\n$medium-turquoise: #46d6fa;\n$gainsborough: #d2dce3;\n$yankees-blue: #161d39;\n$independence: #4e5a71;\n$weldon-blue: #8194a1;\n$pastel-blue: #abc7d6;\n$platinum: #e4e8eb;\n$sky-white: #fbfeff;\n$bronze: #a65708;\n$reviewed: #c39b00;\n$unreviewed: #c0c0c0;\n$uniref: #f2994c;\n$uniparc: #88c19d;\n$proteomes: #e56358;\n$reference-proteome: #9d4a4d;\n$peptide-search: #A748BD;\n$id-mapping: #357B92;\n$blast: #00A6D5;\n$align: #B8CE48;\n$warning: #ffcc33;\n$failure: #f36968;\n$success: #108f3b;\n$info: #79cbf8;\n$help-green: #28aa50;\n$coyote-brown: #966336;\n$outer-space: #374343;\n$tool-results: #622E81;"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);