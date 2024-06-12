(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[8503],{"./stories/Histogram.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChangingGaussian:function(){return ChangingGaussian},Gaussian:function(){return Gaussian},Uniform:function(){return Uniform},__namedExportsOrder:function(){return __namedExportsOrder}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js")),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/histogram.tsx"),_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/mock-data/probability-distribution-sample.ts"),_src_styles_colours_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/styles/colours.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const gaussianSample=(0,_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_4__.e)(0,1,1e3),uniformSample=(0,_src_mock_data_probability_distribution_sample__WEBPACK_IMPORTED_MODULE_4__.R)(-10,10,1e3),gaussianMin=Math.min(...gaussianSample),gaussianMax=Math.max(...gaussianSample),randomFilter=()=>Math.random()>.5,meta={component:_src_components__WEBPACK_IMPORTED_MODULE_5__.A,title:"Visualisation/Histogram",argTypes:{color:{control:"select",name:"--main-histogram-color",options:_src_styles_colours_json__WEBPACK_IMPORTED_MODULE_6__}},args:{xLabel:"X label",yLabel:"Y label",barGap:"-1px"},render:_ref=>{let{values:values,nBins:nBins,binSize:binSize,xLabel:xLabel,yLabel:yLabel,barGap:barGap,color:color}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.A,{values:values,nBins:nBins,binSize:binSize,xLabel:xLabel,yLabel:yLabel,style:{"--main-histogram-color":color,"--histogram-bar-gap":barGap}})}},Gaussian={argTypes:_objectSpread(_objectSpread({},meta.argTypes),{},{nBins:{control:"number",min:1,step:1,name:"Number of bins"}}),args:_objectSpread(_objectSpread({},meta.args),{},{values:gaussianSample,nBins:20})},Uniform={argTypes:_objectSpread(_objectSpread({},meta.argTypes),{},{binSize:{control:"number",min:1,step:1}}),args:_objectSpread(_objectSpread({},meta.args),{},{values:uniformSample,binSize:1})},ChangingGaussianRender=_ref2=>{let{nBins:nBins,xLabel:xLabel,yLabel:yLabel,barGap:barGap,color:color}=_ref2;const interval=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),[filteredSample,setFilteredSample]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(gaussianSample.filter(randomFilter));return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>(interval.current=window.setInterval((()=>{setFilteredSample(gaussianSample.filter(randomFilter))}),3e3),()=>window.clearInterval(interval.current))),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components__WEBPACK_IMPORTED_MODULE_5__.A,{values:filteredSample,unfilteredValues:gaussianSample,nBins:nBins,xLabel:xLabel,yLabel:yLabel,min:gaussianMin,max:gaussianMax,unfilteredValuesShadow:.1,style:{"--main-histogram-color":color,"--histogram-bar-gap":barGap}})};ChangingGaussianRender.displayName="ChangingGaussianRender";const ChangingGaussian={argTypes:_objectSpread(_objectSpread({},meta.argTypes),{},{nBins:{control:"number",min:1,step:1,name:"Number of bins"}}),args:_objectSpread(_objectSpread({},meta.args),{},{nBins:20}),render:ChangingGaussianRender};__webpack_exports__.default=meta,Gaussian.parameters={...Gaussian.parameters,docs:{...Gaussian.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    nBins: {\n      control: 'number',\n      min: 1,\n      step: 1,\n      name: 'Number of bins'\n    }\n  },\n  args: {\n    ...meta.args,\n    values: gaussianSample,\n    nBins: 20\n  }\n}",...Gaussian.parameters?.docs?.source}}},Uniform.parameters={...Uniform.parameters,docs:{...Uniform.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    binSize: {\n      control: 'number',\n      min: 1,\n      step: 1\n    }\n  },\n  args: {\n    ...meta.args,\n    values: uniformSample,\n    binSize: 1\n  }\n}",...Uniform.parameters?.docs?.source}}},ChangingGaussian.parameters={...ChangingGaussian.parameters,docs:{...ChangingGaussian.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...meta.argTypes,\n    nBins: {\n      control: 'number',\n      min: 1,\n      step: 1,\n      name: 'Number of bins'\n    }\n  },\n  args: {\n    ...meta.args,\n    nBins: 20\n  },\n  render: ChangingGaussianRender\n}",...ChangingGaussian.parameters?.docs?.source}}};const __namedExportsOrder=["Gaussian","Uniform","ChangingGaussian"]},"./src/components/histogram.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return src_components_histogram}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=(__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js")),d3=__webpack_require__("./node_modules/d3/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useSize=__webpack_require__("./src/hooks/useSize.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const XAxis=_ref=>{let{min:min,max:max,interval:interval,yPos:yPos,label:label}=_ref;const d3Container=(0,react.useRef)(null),[size]=(0,useSize.A)(d3Container);(0,react.useEffect)((()=>{if(null!=size&&size.width&&d3Container.current){const scale=(0,d3.m4Y)().domain([min,max]).range([0,size.width]),axis=(0,d3.l78)(scale).tickValues((0,d3.y17)(min,max+interval,interval)).tickPadding(6);axis.tickSize(0);const svg=(0,d3.Ltv)(d3Container.current);svg.selectAll("*").remove(),svg.append("g").call(axis),svg.append("text").attr("transform",`translate(${size.width/2}, 40)`).style("text-anchor","middle").text(label)}}),[interval,label,max,min,null==size?void 0:size.width]);const style=(0,react.useMemo)((()=>({top:yPos})),[yPos]);return(0,jsx_runtime.jsx)("svg",{style:style,width:"100%",height:80,ref:d3Container})};XAxis.displayName="XAxis";var histogram_x_axis=XAxis;try{histogramxaxis.displayName="histogramxaxis",histogramxaxis.__docgenInfo={description:"",displayName:"histogramxaxis",props:{min:{defaultValue:null,description:"The start point of the axis",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"The end point of the axis",name:"max",required:!0,type:{name:"number"}},interval:{defaultValue:null,description:"Interval size between each tick",name:"interval",required:!0,type:{name:"number"}},yPos:{defaultValue:null,description:"The top offset to vertically shift the axis",name:"yPos",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"Label to appear under the axis",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/histogram-x-axis.tsx#histogramxaxis"]={docgenInfo:histogramxaxis.__docgenInfo,name:"histogramxaxis",path:"src/components/histogram-x-axis.tsx#histogramxaxis"})}catch(__react_docgen_typescript_loader_error){}const YAxis=_ref=>{let{scale:scale,height:height,label:label}=_ref;const d3Container=(0,react.useRef)(null);return(0,react.useEffect)((()=>{if(d3Container.current){const axis=(0,d3.V4s)(scale).tickPadding(6);axis.tickSize(0);const svg=(0,d3.Ltv)(d3Container.current);svg.selectAll("*").remove(),svg.append("g").attr("transform","translate(50, 0)").call(axis),svg.append("text").attr("transform","rotate(-90)").attr("y",20).attr("x",-height/2).style("text-anchor","middle").text(label)}}),[height,label,scale]),(0,jsx_runtime.jsx)("svg",{width:80,height:height,ref:d3Container,className:"y-axis"})};YAxis.displayName="YAxis";var histogram_y_axis=YAxis;try{histogramyaxis.displayName="histogramyaxis",histogramyaxis.__docgenInfo={description:"",displayName:"histogramyaxis",props:{scale:{defaultValue:null,description:"D3 scale function",name:"scale",required:!0,type:{name:"ScaleLinear<number, number>"}},height:{defaultValue:null,description:"The height of axis component",name:"height",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"Label to appear to the left of the axis",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/histogram-y-axis.tsx#histogramyaxis"]={docgenInfo:histogramyaxis.__docgenInfo,name:"histogramyaxis",path:"src/components/histogram-y-axis.tsx#histogramyaxis"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),components_histogram=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/histogram.scss"),histogram_default=__webpack_require__.n(components_histogram),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(histogram_default(),options),histogram_default()&&histogram_default().locals&&histogram_default().locals;const _excluded=["selectedRange","values","unfilteredValues","nBins","min","max","height","binSize","xLabel","yLabel","unfilteredValuesShadow","className","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Histogram=_ref=>{var _selectedRange$,_selectedRange$2;let{selectedRange:selectedRange,values:values,unfilteredValues:unfilteredValues,nBins:nBinsOrUndef,min:minOrUndef,max:maxOrUndef,height:height=300,binSize:binSizeOrUndef,xLabel:xLabel,yLabel:yLabel,unfilteredValuesShadow:unfilteredValuesShadow=0,className:className,children:children}=_ref,props=(0,objectWithoutProperties.A)(_ref,_excluded);const allValues=unfilteredValues||values,[getIndex,nBins,binSize,min,max]=(0,react.useMemo)((()=>{const innerMin=void 0===minOrUndef?Math.min(...values):minOrUndef,innerMax=void 0===maxOrUndef?Math.max(...values):maxOrUndef;let innerBinSize=0,innerNBins=0;!nBinsOrUndef&&binSizeOrUndef?(innerBinSize=binSizeOrUndef,innerNBins=Math.ceil((innerMax-innerMin)/innerBinSize)):nBinsOrUndef&&!binSizeOrUndef&&(innerNBins=nBinsOrUndef,innerBinSize=(innerMax-innerMin)/innerNBins);return[value=>Math.min(Math.floor((value-innerMin)/innerBinSize),nBins-1),innerNBins,innerBinSize,innerMin,innerMax]}),[binSizeOrUndef,maxOrUndef,minOrUndef,nBinsOrUndef,values]),[bins,allBins,yScale,transformScaleY]=(0,react.useMemo)((()=>{const innerBins=Array(nBins).fill(0),allDataBins=Array(nBins).fill(0);for(const value of values)innerBins[getIndex(value)]+=1;for(const value of allValues)allDataBins[getIndex(value)]+=1;const maxCount=Math.max(...allDataBins),domainMax=5*Math.ceil(maxCount/5),innerYScale=(0,d3.m4Y)().domain([0,domainMax]).range([height,0]);return[innerBins,allDataBins,innerYScale,count=>(innerYScale(domainMax-count)||0)/height]}),[getIndex,height,nBins,values,allValues]),[startIndex,endIndex]=[getIndex(null!==(_selectedRange$=null==selectedRange?void 0:selectedRange[0])&&void 0!==_selectedRange$?_selectedRange$:min),getIndex(null!==(_selectedRange$2=null==selectedRange?void 0:selectedRange[1])&&void 0!==_selectedRange$2?_selectedRange$2:max)];return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({className:classnames_default()("histogram",className),"data-testid":"histogram"},props),{},{children:[unfilteredValuesShadow?(0,jsx_runtime.jsx)("div",{className:"histogram__bar-shadow-container",style:{height:height,opacity:unfilteredValuesShadow},children:allBins.map(((count,index)=>{const withinRange=startIndex<=index&&index<=endIndex;return(0,jsx_runtime.jsx)("div",{"data-testid":"histogram-bar",className:classnames_default()("histogram histogram__bar",withinRange&&"histogram__bar--within-range"),style:{transform:`scaleY(${transformScaleY(count)})`}},index)}))}):null,(0,jsx_runtime.jsx)("div",{className:"histogram__bar-container",style:{height:height},children:bins.map(((count,index)=>{const withinRange=startIndex<=index&&index<=endIndex;return(0,jsx_runtime.jsx)("div",{"data-testid":"histogram-bar",className:classnames_default()("histogram histogram__bar",withinRange&&"histogram__bar--within-range"),style:{transform:`scaleY(${transformScaleY(count)})`,transitionDelay:`${Math.floor(500*index/nBins)}ms`}},index)}))}),xLabel&&(0,jsx_runtime.jsx)(histogram_x_axis,{min:min,max:max,interval:binSize,yPos:height,label:xLabel}),yLabel&&(0,jsx_runtime.jsx)(histogram_y_axis,{scale:yScale,height:height,label:yLabel}),children]}))};Histogram.displayName="Histogram";var src_components_histogram=Histogram;try{histogram.displayName="histogram",histogram.__docgenInfo={description:"",displayName:"histogram",props:{min:{defaultValue:null,description:"The left-most, smallest, value the histogram starts at irrespective of the array values. Defaults to min(values).",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"The right-most, largest, value the histogram ends at irrespective of the array values. Defaults to max(values).",name:"max",required:!1,type:{name:"number"}},values:{defaultValue:null,description:"An array of values which the histogram is based on.",name:"values",required:!0,type:{name:"number[]"}},unfilteredValues:{defaultValue:null,description:"An array of unfiltered values which the histogram is based on.\n(useful to calculated max bin height)",name:"unfilteredValues",required:!1,type:{name:"number[]"}},selectedRange:{defaultValue:null,description:"A value which specifies the start and end points selected by the user.",name:"selectedRange",required:!1,type:{name:"Range"}},height:{defaultValue:{value:"300"},description:"The height in pixels of the bin with the most values.",name:"height",required:!1,type:{name:"number"}},yLabel:{defaultValue:null,description:"Label to appear to the left of the axis",name:"yLabel",required:!1,type:{name:"string"}},xLabel:{defaultValue:null,description:"Label to appear under the axis",name:"xLabel",required:!1,type:{name:"string"}},unfilteredValuesShadow:{defaultValue:{value:"0"},description:"Display a shadow of the unfiltered data (opacity value)",name:"unfilteredValuesShadow",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Additional CSS classnames to apply (eg secondary, tertiary)",name:"className",required:!1,type:{name:"string"}},nBins:{defaultValue:null,description:"Number of bins (intervals) which the values are allocated to.\nOne of either binSize or nBins must be provided.",name:"nBins",required:!1,type:{name:"number"}},binSize:{defaultValue:null,description:"The interval size of each bin.\nOne of either binSize or nBins must be provided.",name:"binSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/histogram.tsx#histogram"]={docgenInfo:histogram.__docgenInfo,name:"histogram",path:"src/components/histogram.tsx#histogram"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useSize.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.A=function useSize(ref){const[rect,setRect]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),onResize=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{ref.current&&setRect(ref.current.getBoundingClientRect())}),[ref,setRect]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{rect||onResize()})),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(onResize(),window.addEventListener("resize",onResize),()=>window.removeEventListener("resize",onResize))),[ref,onResize]),[rect,onResize]}},"./src/mock-data/probability-distribution-sample.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{R:function(){return getUniformSample},e:function(){return getGaussianSample}});const getGaussianSample=(mu,sigma,n,min,max)=>{const values=Array.from({length:n},(()=>((mu,sigma)=>{let x,y,r;do{x=2*Math.random()-1,y=2*Math.random()-1,r=x*x+y*y}while(!r||r>1);return mu+sigma*y*Math.sqrt(-2*Math.log(r)/r)})(mu,sigma)));return void 0!==min||void 0!==max?values.map((number=>void 0!==min&&number<min?min:void 0!==max&&number>max?max:number)):values},getUniformSample=(min,max,n)=>Array.from({length:n},(()=>Math.random()*(max-min)+min))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/styles/components/histogram.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".histogram{--main-color: var(--main-histogram-color, #8194a1);--out-range-color: var(--out-range-histogram-color, #e4e8eb);--bar-margin: calc(var(--histogram-bar-gap, -1px) * 0.5);position:relative;display:flex;justify-content:space-between;align-items:flex-end}.histogram svg{position:absolute;overflow:visible}.histogram svg.y-axis{left:-50px}.histogram__bar-container,.histogram__bar-shadow-container{display:flex;width:100%;overflow:hidden}.histogram__bar-shadow-container{opacity:0;position:absolute}.histogram__bar{background-color:#e4e8eb;background-color:var(--out-range-color);display:inline-block;border-top-left-radius:1px;border-top-right-radius:1px;margin:0 -0.5px;margin:0 var(--bar-margin);flex:1 1 0%;transform-origin:bottom left;transform:scaleY(0);transition:transform cubic-bezier(0.47, 2, 0.41, 0.8) 250ms}.histogram__bar--within-range{background-color:#8194a1;background-color:var(--main-color)}","",{version:3,sources:["webpack://./src/styles/components/histogram.scss","webpack://./colours.json"],names:[],mappings:"AAEA,WACE,kDAAA,CACA,4DAAA,CAEA,wDAAA,CAEA,iBAAA,CACA,YAAA,CACA,6BAAA,CACA,oBAAA,CAEA,eACE,iBAAA,CACA,gBAAA,CAEA,sBACE,UAAA,CAIJ,2DAEE,YAAA,CACA,UAAA,CACA,eAAA,CAGF,iCACE,SAAA,CACA,iBAAA,CAGF,gBACE,wBC1BO,CD2BP,uCAAA,CACA,oBAAA,CACA,0BAAA,CACA,2BAAA,CACA,eAAA,CACA,0BAAA,CACA,WAAA,CACA,4BAAA,CACA,mBAAA,CACA,2DAAA,CAEA,8BACE,wBCzCQ,CD0CR,kCAAA",sourcesContent:["@import '../colours';\n\n.histogram {\n  --main-color: var(--main-histogram-color, #{$colour-weldon-blue});\n  --out-range-color: var(--out-range-histogram-color, #{$colour-platinum});\n  // -1px to avoid artifacts by overlapping a bit\n  --bar-margin: calc(var(--histogram-bar-gap, -1px) * 0.5);\n\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  & svg {\n    position: absolute;\n    overflow: visible;\n\n    &.y-axis {\n      left: -50px;\n    }\n  }\n\n  &__bar-container,\n  &__bar-shadow-container {\n    display: flex;\n    width: 100%;\n    overflow: hidden; // hide overflow caused by the \"bouncy\" transition\n  }\n\n  &__bar-shadow-container {\n    opacity: 0;\n    position: absolute;\n  }\n\n  &__bar {\n    background-color: $colour-platinum;\n    background-color: var(--out-range-color);\n    display: inline-block;\n    border-top-left-radius: 1px;\n    border-top-right-radius: 1px;\n    margin: 0 -0.5px;\n    margin: 0 var(--bar-margin);\n    flex: 1 1 0%;\n    transform-origin: bottom left;\n    transform: scaleY(0);\n    transition: transform cubic-bezier(0.47, 2, 0.41, 0.8) 250ms;\n\n    &--within-range {\n      background-color: $colour-weldon-blue;\n      background-color: var(--main-color);\n    }\n  }\n}\n","$sapphire-blue: #014371;\n$sea-blue: #00639a;\n$vivid-cerulean: #00a6d5;\n$medium-turquoise: #46d6fa;\n$gainsborough: #d2dce3;\n$yankees-blue: #161d39;\n$independence: #4e5a71;\n$weldon-blue: #8194a1;\n$pastel-blue: #abc7d6;\n$platinum: #e4e8eb;\n$sky-white: #fbfeff;\n$bronze: #a65708;\n$reviewed: #c39b00;\n$unreviewed: #c0c0c0;\n$uniref: #f2994c;\n$uniparc: #88c19d;\n$proteomes: #e56358;\n$reference-proteome: #9d4a4d;\n$peptide-search: #A748BD;\n$id-mapping: #357B92;\n$blast: #00A6D5;\n$align: #B8CE48;\n$warning: #ffcc33;\n$failure: #f36968;\n$success: #108f3b;\n$info: #79cbf8;\n$help-green: #28aa50;\n$coyote-brown: #966336;\n$outer-space: #374343;\n$tool-results: #622E81;"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___},"./src/styles/colours.json":function(module){"use strict";module.exports=JSON.parse('{"sapphireBlue":"#014371","seaBlue":"#00639a","vividCerulean":"#00a6d5","mediumTurquoise":"#46d6fa","gainsborough":"#d2dce3","yankeesBlue":"#161d39","independence":"#4e5a71","weldonBlue":"#8194a1","pastelBlue":"#abc7d6","platinum":"#e4e8eb","skyWhite":"#fbfeff","bronze":"#a65708","reviewed":"#c39b00","unreviewed":"#c0c0c0","uniref":"#f2994c","uniparc":"#88c19d","proteomes":"#e56358","referenceProteome":"#9d4a4d","peptideSearch":"#A748BD","idMapping":"#357B92","blast":"#00A6D5","align":"#B8CE48","warning":"#ffcc33","failure":"#f36968","success":"#108f3b","info":"#79cbf8","helpGreen":"#28aa50","coyoteBrown":"#966336","outerSpace":"#374343","toolResults":"#622E81"}')}}]);