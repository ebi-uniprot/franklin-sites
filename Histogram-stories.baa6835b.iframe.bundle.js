"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[8503],{"./stories/Histogram.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingGaussian:function(){return ChangingGaussian},Gaussian:function(){return Gaussian},Uniform:function(){return Uniform},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/histogram.tsx"),_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/mock-data/probability-distribution-sample.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const gaussianSample=(0,_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_2__.e)(0,1,1e3),uniformSample=(0,_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_2__.R)(-10,10,1e3),gaussianMin=Math.min(...gaussianSample),gaussianMax=Math.max(...gaussianSample),randomFilter=()=>Math.random()>.5,meta={component:_src_components__WEBPACK_IMPORTED_MODULE_3__.A,title:"Visualisation/Histogram",argTypes:{color:{control:"select",name:"--main-histogram-color",options:["var(--fr--color-sapphire-blue)","var(--fr--color-sea-blue)","var(--fr--color-vivid-cerulean)","var(--fr--color-medium-turquoise)","var(--fr--color-gainsborough)","white","blue"]}},args:{xLabel:"X label",yLabel:"Y label",barGap:"-1px"},render:({values:values,nBins:nBins,binSize:binSize,xLabel:xLabel,yLabel:yLabel,barGap:barGap,color:color})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_3__.A,{values:values,nBins:nBins,binSize:binSize,xLabel:xLabel,yLabel:yLabel,style:{"--main-histogram-color":color,"--histogram-bar-gap":barGap}})},Gaussian={argTypes:{...meta.argTypes,nBins:{control:"number",min:1,step:1,name:"Number of bins"}},args:{...meta.args,values:gaussianSample,nBins:20}},Uniform={argTypes:{...meta.argTypes,binSize:{control:"number",min:1,step:1}},args:{...meta.args,values:uniformSample,binSize:1}},ChangingGaussian={argTypes:{...meta.argTypes,nBins:{control:"number",min:1,step:1,name:"Number of bins"}},args:{...meta.args,nBins:20},render:({nBins:nBins,xLabel:xLabel,yLabel:yLabel,barGap:barGap,color:color})=>{const interval=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[filteredSample,setFilteredSample]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(gaussianSample.filter(randomFilter));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(interval.current=window.setInterval((()=>{setFilteredSample(gaussianSample.filter(randomFilter))}),3e3),()=>window.clearInterval(interval.current))),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_3__.A,{values:filteredSample,unfilteredValues:gaussianSample,nBins:nBins,xLabel:xLabel,yLabel:yLabel,min:gaussianMin,max:gaussianMax,unfilteredValuesShadow:.1,style:{"--main-histogram-color":color,"--histogram-bar-gap":barGap}})}};__webpack_exports__.default=meta;const __namedExportsOrder=["Gaussian","Uniform","ChangingGaussian"];Gaussian.parameters={...Gaussian.parameters,docs:{...Gaussian.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    nBins: {\n      control: 'number',\n      min: 1,\n      step: 1,\n      name: 'Number of bins'\n    }\n  },\n  args: {\n    ...meta.args,\n    values: gaussianSample,\n    nBins: 20\n  }\n}",...Gaussian.parameters?.docs?.source}}},Uniform.parameters={...Uniform.parameters,docs:{...Uniform.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    binSize: {\n      control: 'number',\n      min: 1,\n      step: 1\n    }\n  },\n  args: {\n    ...meta.args,\n    values: uniformSample,\n    binSize: 1\n  }\n}",...Uniform.parameters?.docs?.source}}},ChangingGaussian.parameters={...ChangingGaussian.parameters,docs:{...ChangingGaussian.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    nBins: {\n      control: 'number',\n      min: 1,\n      step: 1,\n      name: 'Number of bins'\n    }\n  },\n  args: {\n    ...meta.args,\n    nBins: 20\n  },\n  render: ChangingGaussianRender\n}",...ChangingGaussian.parameters?.docs?.source}}}}}]);