"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[5586],{"./stories/SlidingPanelInSlidingPanel.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SlidingPanelInSlidingPanel:function(){return SlidingPanelInSlidingPanel},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),lorem_ipsum__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/button.tsx"),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/sliding-panel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SlidingPanelInSlidingPanelRender=({title:title,position:position,size:size})=>{const[showPanel,setShowPanel]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[showPanel2,setShowPanel2]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.A,{onClick:()=>setShowPanel(!0),style:{position:"absolute",top:"1rem",left:"left"===position?"1rem":"",right:"right"===position?"1rem":""},children:"Click me"}),showPanel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.A,{title:`Sliding panel 1: ${title}`,position:position,size:size,onClose:reason=>{setShowPanel(!1),setShowPanel2(!1),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onClose 1")(reason)},pathname:"#",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_4__.A,{onClick:()=>setShowPanel2(!0),children:"Click me too"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_1__.Ok)({count:25}),showPanel2&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.A,{title:`Sliding panel 2: ${title}`,position:position,size:size,onClose:reason=>{setShowPanel2(!1),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onClose 2")(reason)},pathname:"#",children:(0,lorem_ipsum__WEBPACK_IMPORTED_MODULE_1__.Ok)({count:25})})]})})]})},meta={title:"Layout/Sliding Panel",component:_src_components__WEBPACK_IMPORTED_MODULE_5__.A,argTypes:{size:{control:"select",options:["small","medium","large","full-screen"],position:{control:"select",options:["top","right","bottom","left"]}}},args:{title:"Title",size:"medium",position:"left"},render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SlidingPanelInSlidingPanelRender,{...props})};__webpack_exports__.default=meta;const SlidingPanelInSlidingPanel={},__namedExportsOrder=["SlidingPanelInSlidingPanel"];SlidingPanelInSlidingPanel.parameters={...SlidingPanelInSlidingPanel.parameters,docs:{...SlidingPanelInSlidingPanel.parameters?.docs,source:{originalSource:"{}",...SlidingPanelInSlidingPanel.parameters?.docs?.source}}}}}]);