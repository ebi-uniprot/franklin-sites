(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[2449],{"./stories/EllipsisReveal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EllipsisReveal:function(){return EllipsisReveal_stories_EllipsisReveal},EllipsisRevealInGroup:function(){return EllipsisRevealInGroup},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return EllipsisReveal_stories}});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),components_button=__webpack_require__("./src/components/button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ellipsis_reveal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/ellipsis-reveal.scss"),ellipsis_reveal_default=__webpack_require__.n(ellipsis_reveal),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ellipsis_reveal_default(),options),ellipsis_reveal_default()&&ellipsis_reveal_default().locals&&ellipsis_reveal_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","title","contextKey"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Context=(0,react.createContext)(null);Context.displayName="EllipsisRevealContext";const EllipsisReveal=_ref2=>{let{children:children,className:className,title:title,contextKey:contextKey}=_ref2,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref2,_excluded);const contextState=(0,react.useContext)(Context),openFromContext=contextState&&contextKey&&contextState[0].has(contextKey),[open,setOpen]=(0,react.useState)(!1);return open||openFromContext?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children}):(0,jsx_runtime.jsx)(components_button.$,_objectSpread(_objectSpread({variant:"tertiary",onClick:()=>{setOpen(!0),contextKey&&contextState&&contextState[1]((previousSet=>new Set([...previousSet,contextKey])))},className:classnames_default()(className,"ellipsis-reveal"),title:title||"Show more","aria-expanded":"false"},props),{},{children:"[...]"}))};EllipsisReveal.Provider=_ref=>{let{children:children}=_ref;const state=(0,react.useState)(new Set);return(0,jsx_runtime.jsx)(Context.Provider,{value:state,children:children})};var src_components_ellipsis_reveal=EllipsisReveal;try{EllipsisRevealContext.displayName="EllipsisRevealContext",EllipsisRevealContext.__docgenInfo={description:"",displayName:"EllipsisRevealContext",props:{contextKey:{defaultValue:null,description:"",name:"contextKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ellipsis-reveal.tsx#EllipsisRevealContext"]={docgenInfo:EllipsisRevealContext.__docgenInfo,name:"EllipsisRevealContext",path:"src/components/ellipsis-reveal.tsx#EllipsisRevealContext"})}catch(__react_docgen_typescript_loader_error){}var lipsum=__webpack_require__("./src/mock-data/lipsum.tsx"),EllipsisReveal_stories={title:"Data/Ellipsis Reveal",decorators:[]};const EllipsisReveal_stories_EllipsisReveal=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Some text"," ",(0,jsx_runtime.jsx)(src_components_ellipsis_reveal,{children:(0,lipsum.FZ)()})]}),EllipsisRevealInGroup=()=>(0,jsx_runtime.jsxs)(src_components_ellipsis_reveal.Provider,{children:[(0,jsx_runtime.jsxs)("p",{children:["Some text"," ",(0,jsx_runtime.jsx)(src_components_ellipsis_reveal,{contextKey:"group",children:(0,lipsum.FZ)()})]}),(0,jsx_runtime.jsxs)("p",{children:["Some other text"," ",(0,jsx_runtime.jsx)(src_components_ellipsis_reveal,{contextKey:"group",children:(0,lipsum.FZ)()})]}),(0,jsx_runtime.jsxs)("p",{children:["Some other text again"," ",(0,jsx_runtime.jsx)(src_components_ellipsis_reveal,{contextKey:"group",children:(0,lipsum.FZ)()})]})]}),__namedExportsOrder=["EllipsisReveal","EllipsisRevealInGroup"];EllipsisReveal_stories_EllipsisReveal.parameters={...EllipsisReveal_stories_EllipsisReveal.parameters,docs:{...EllipsisReveal_stories_EllipsisReveal.parameters?.docs,source:{originalSource:"() => <>\n    Some text{' '}\n    <EllipsisRevealComponent>{getLipsumSentences()}</EllipsisRevealComponent>\n  </>",...EllipsisReveal_stories_EllipsisReveal.parameters?.docs?.source}}},EllipsisRevealInGroup.parameters={...EllipsisRevealInGroup.parameters,docs:{...EllipsisRevealInGroup.parameters?.docs,source:{originalSource:"() => <EllipsisRevealComponent.Provider>\n    <p>\n      Some text{' '}\n      <EllipsisRevealComponent contextKey=\"group\">\n        {getLipsumSentences()}\n      </EllipsisRevealComponent>\n    </p>\n    <p>\n      Some other text{' '}\n      <EllipsisRevealComponent contextKey=\"group\">\n        {getLipsumSentences()}\n      </EllipsisRevealComponent>\n    </p>\n    <p>\n      Some other text again{' '}\n      <EllipsisRevealComponent contextKey=\"group\">\n        {getLipsumSentences()}\n      </EllipsisRevealComponent>\n    </p>\n  </EllipsisRevealComponent.Provider>",...EllipsisRevealInGroup.parameters?.docs?.source}}}},"./src/mock-data/lipsum.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{FZ:function(){return getLipsumSentences},Td:function(){return getLipsumObjectArray}});__webpack_require__("./node_modules/core-js/modules/es.object.from-entries.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js");const getLipsumSentences=()=>(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__.Ok)({sentenceLowerBound:2,sentenceUpperBound:30}),getLipsumObjectArray=_ref=>{let{numberElements:numberElements,keys:keys,type:type="sentences"}=_ref;return Array.from({length:numberElements},(()=>Object.fromEntries(keys.map((key=>[key,"sentences"===type?getLipsumSentences():(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__.Ok)({count:2,units:"words"})])))))};try{getLipsumObjectArray.displayName="getLipsumObjectArray",getLipsumObjectArray.__docgenInfo={description:"",displayName:"getLipsumObjectArray",props:{numberElements:{defaultValue:null,description:"",name:"numberElements",required:!0,type:{name:"number"}},keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},idKey:{defaultValue:null,description:"",name:"idKey",required:!1,type:{name:"string"}},type:{defaultValue:{value:"sentences"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"sentences"'},{value:'"words"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mock-data/lipsum.tsx#getLipsumObjectArray"]={docgenInfo:getLipsumObjectArray.__docgenInfo,name:"getLipsumObjectArray",path:"src/mock-data/lipsum.tsx#getLipsumObjectArray"})}catch(__react_docgen_typescript_loader_error){}try{lipsum.displayName="lipsum",lipsum.__docgenInfo={description:"",displayName:"lipsum",props:{numberElements:{defaultValue:null,description:"",name:"numberElements",required:!0,type:{name:"number"}},keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},idKey:{defaultValue:null,description:"",name:"idKey",required:!1,type:{name:"string"}},type:{defaultValue:{value:"sentences"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"sentences"'},{value:'"words"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mock-data/lipsum.tsx#lipsum"]={docgenInfo:lipsum.__docgenInfo,name:"lipsum",path:"src/mock-data/lipsum.tsx#lipsum"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/ellipsis-reveal.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".button.ellipsis-reveal{vertical-align:baseline;margin:0}","",{version:3,sources:["webpack://./src/styles/components/ellipsis-reveal.scss"],names:[],mappings:"AAAA,wBAEE,uBAAA,CACA,QAAA",sourcesContent:[".button.ellipsis-reveal {\n  // Make sure it's all aligned with the rest of the text\n  vertical-align: baseline;\n  margin: 0;\n}\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);