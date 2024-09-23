"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[633],{"./src/mock-data/lipsum.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{FZ:function(){return getLipsumSentences},Td:function(){return getLipsumObjectArray}});__webpack_require__("./node_modules/core-js/modules/es.object.from-entries.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js");const getLipsumSentences=()=>(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__.Ok)({sentenceLowerBound:2,sentenceUpperBound:30}),getLipsumObjectArray=_ref=>{let{numberElements:numberElements,keys:keys,type:type="sentences"}=_ref;return Array.from({length:numberElements},(()=>Object.fromEntries(keys.map((key=>[key,"sentences"===type?getLipsumSentences():(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_2__.Ok)({count:2,units:"words"})])))))};try{getLipsumObjectArray.displayName="getLipsumObjectArray",getLipsumObjectArray.__docgenInfo={description:"",displayName:"getLipsumObjectArray",props:{numberElements:{defaultValue:null,description:"",name:"numberElements",required:!0,type:{name:"number"}},keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},idKey:{defaultValue:null,description:"",name:"idKey",required:!1,type:{name:"string"}},type:{defaultValue:{value:"sentences"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"sentences"'},{value:'"words"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mock-data/lipsum.tsx#getLipsumObjectArray"]={docgenInfo:getLipsumObjectArray.__docgenInfo,name:"getLipsumObjectArray",path:"src/mock-data/lipsum.tsx#getLipsumObjectArray"})}catch(__react_docgen_typescript_loader_error){}try{lipsum.displayName="lipsum",lipsum.__docgenInfo={description:"",displayName:"lipsum",props:{numberElements:{defaultValue:null,description:"",name:"numberElements",required:!0,type:{name:"number"}},keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},idKey:{defaultValue:null,description:"",name:"idKey",required:!1,type:{name:"string"}},type:{defaultValue:{value:"sentences"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"sentences"'},{value:'"words"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mock-data/lipsum.tsx#lipsum"]={docgenInfo:lipsum.__docgenInfo,name:"lipsum",path:"src/mock-data/lipsum.tsx#lipsum"})}catch(__react_docgen_typescript_loader_error){}},"./stories/Card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Card:function(){return Card},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/svg/swissprot.svg"),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/card.tsx"),_src_mock_data_lipsum__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/mock-data/lipsum.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActionLink=({name:name,link:link,color:color})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:link,style:{borderBottom:color?`0.125rem solid ${color}`:void 0},children:name},link),links=[{name:"10 Protein Interactions",link:"#red",color:"red"},{name:"9 Pathways",link:"#blue",color:"blue"},{name:"5 Diseases",link:"#diseases",color:"#bada55"},{name:"72 Variants",link:"#burlywood",color:"burlywood"},{key:"swissprot",name:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_2__.A,{width:"1.5ch"})," Reviewed"]}),link:"#reviewed"}],meta={component:_src_components__WEBPACK_IMPORTED_MODULE_3__.A,title:"Layout/Card",argTypes:{hasHeader:{control:{type:"boolean"},name:"header"},hasCheckbox:{control:{type:"boolean"},name:"checkbox (only if header)"},hasHeaderSeparator:{control:{type:"boolean"},name:"header separator"},hasLinks:{control:{type:"boolean"},name:"links"}},args:{hasHeader:!0,hasHeaderSeparator:!0},render:({hasHeader:hasHeader,hasCheckbox:hasCheckbox,hasHeaderSeparator:hasHeaderSeparator,hasLinks:hasLinks})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_3__.A,{header:hasHeader?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[hasCheckbox&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2",{children:["Title"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{className:"medium",href:"/#",children:"APOE_HUMAN - P02649"})]})]}):void 0,headerSeparator:hasHeaderSeparator,links:hasLinks?links.map((({name:name,color:color,link:link})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ActionLink,{name:name,color:color,link:`${window.parent.location.href.split("#")[0]}${link}`}))):void 0,children:(0,_src_mock_data_lipsum__WEBPACK_IMPORTED_MODULE_4__.FZ)()})};__webpack_exports__.default=meta;const Card={},__namedExportsOrder=["Card"];Card.parameters={...Card.parameters,docs:{...Card.parameters?.docs,source:{originalSource:"{}",...Card.parameters?.docs?.source}}}},"./src/svg/swissprot.svg":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _path,_path2,_path3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_exports__.A=function SvgSwissprot(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 40 40"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M36.57 14.2v25.22H17.85l-1.7-10 7.2-7.07-9.96-1.47-4.45-9.1-3.6 7.36V.98h18.01v13.21h13.22zM17.85 39.42H5.33v-2.81l3.6-1.91z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M25.76 11.79h10.81L25.76.98v10.8z"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m8.94 18.44 2.6 5.27 5.8.85-4.2 4.1 1 5.79-5.2-2.74-5.2 2.74 1-5.8-4.21-4.1 5.81-.84z",className:"star"})))}}}]);