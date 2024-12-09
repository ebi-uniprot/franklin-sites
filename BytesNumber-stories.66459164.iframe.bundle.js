"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[1363],{"./stories/BytesNumber.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BytesNumber:function(){return BytesNumber_stories_BytesNumber},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return BytesNumber_stories}});var utils=__webpack_require__("./src/utils.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var bytes_number=_ref=>{let{children:children,decimals:decimals=0}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,utils.w1)(children,decimals)})};try{bytesnumber.displayName="bytesnumber",bytesnumber.__docgenInfo={description:"",displayName:"bytesnumber",props:{children:{defaultValue:null,description:"The number to format",name:"children",required:!0,type:{name:"string | number"}},decimals:{defaultValue:{value:"0"},description:"",name:"decimals",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/bytes-number.tsx#bytesnumber"]={docgenInfo:bytesnumber.__docgenInfo,name:"bytesnumber",path:"src/components/bytes-number.tsx#bytesnumber"})}catch(__react_docgen_typescript_loader_error){}var BytesNumber_stories={component:bytes_number,title:"Visualisation",args:{children:1024,decimals:0},render:({decimals:decimals,children:children})=>(0,jsx_runtime.jsx)(bytes_number,{decimals:decimals,children:children})};const BytesNumber_stories_BytesNumber={},__namedExportsOrder=["BytesNumber"];BytesNumber_stories_BytesNumber.parameters={...BytesNumber_stories_BytesNumber.parameters,docs:{...BytesNumber_stories_BytesNumber.parameters?.docs,source:{originalSource:"{}",...BytesNumber_stories_BytesNumber.parameters?.docs?.source}}}},"./src/utils.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Lx:function(){return getLastIndexOfSubstringIgnoreCase},PR:function(){return _getNodePaths},_w:function(){return getSingleChildren},f4:function(){return prepareTreeDataForAutocomplete},hb:function(){return tidyUrlString},sz:function(){return formatLargeNumber},w1:function(){return formatBytesNumber}});__webpack_require__("./node_modules/core-js/modules/es.array.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.unscopables.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");const _excluded=["items"];function getLastIndexOfSubstringIgnoreCase(string,substring){return string.toLowerCase().lastIndexOf(substring.toLowerCase())}const _getNodePaths=function getNodePaths(items,id){let path=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],nodePaths=[];return items.forEach((node=>{const{items:items}=node,thisNode=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(node,_excluded),nodePath=[...path,thisNode];if(items){const result=_getNodePaths(items,id,nodePath);result.length&&(nodePaths=[...nodePaths,...result])}else id&&thisNode.id!==id||(nodePaths=[...nodePaths,nodePath])})),nodePaths};function prepareTreeDataForAutocomplete(flattenedTreeData){return flattenedTreeData.map((items=>{const autocompleteItem={id:items[items.length-1].id,pathLabel:items.map((item=>item.label)).join(" / "),itemLabel:items[items.length-1].label},tags=items.flatMap((item=>item.tags||[]));return tags.length&&(autocompleteItem.tags=tags),autocompleteItem}))}function*getSingleChildren(children){1===children.length&&(yield children[0].id);for(const child of children)child.items&&(yield*getSingleChildren(child.items))}function formatLargeNumber(x){const string=x.toString();if(string.includes("e"))return string;const[integer,decimal]=x.toString().split(".");return[integer.replace(/\B(?=(\d{3})+(?!\d))/g,","),decimal].filter((el=>void 0!==el)).join(".")}function formatBytesNumber(bytes){let decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const bytesNumber=+bytes;if(!bytesNumber)return"0 Bytes";const positiveDecimals=decimals<0?0:decimals,units=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],unitsIndex=Math.min(Math.floor(Math.log(bytesNumber)/Math.log(1024)),units.length-1),number=(bytesNumber/1024**unitsIndex).toFixed(positiveDecimals),unit=units[unitsIndex];return`${formatLargeNumber(parseFloat(number))} ${unit}`}const reProtocol=/^(https?:)?(\/\/)?/,reTrailingSlashes=/(\/+$)/,tidyUrlString=url=>url.replace(reProtocol,"").replace(reTrailingSlashes,"");try{prepareTreeDataForAutocomplete.displayName="prepareTreeDataForAutocomplete",prepareTreeDataForAutocomplete.__docgenInfo={description:"",displayName:"prepareTreeDataForAutocomplete",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#prepareTreeDataForAutocomplete"]={docgenInfo:prepareTreeDataForAutocomplete.__docgenInfo,name:"prepareTreeDataForAutocomplete",path:"src/utils.tsx#prepareTreeDataForAutocomplete"})}catch(__react_docgen_typescript_loader_error){}try{getSingleChildren.displayName="getSingleChildren",getSingleChildren.__docgenInfo={description:"",displayName:"getSingleChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getSingleChildren"]={docgenInfo:getSingleChildren.__docgenInfo,name:"getSingleChildren",path:"src/utils.tsx#getSingleChildren"})}catch(__react_docgen_typescript_loader_error){}try{formatLargeNumber.displayName="formatLargeNumber",formatLargeNumber.__docgenInfo={description:"",displayName:"formatLargeNumber",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#formatLargeNumber"]={docgenInfo:formatLargeNumber.__docgenInfo,name:"formatLargeNumber",path:"src/utils.tsx#formatLargeNumber"})}catch(__react_docgen_typescript_loader_error){}try{tidyUrlString.displayName="tidyUrlString",tidyUrlString.__docgenInfo={description:"",displayName:"tidyUrlString",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#tidyUrlString"]={docgenInfo:tidyUrlString.__docgenInfo,name:"tidyUrlString",path:"src/utils.tsx#tidyUrlString"})}catch(__react_docgen_typescript_loader_error){}}}]);