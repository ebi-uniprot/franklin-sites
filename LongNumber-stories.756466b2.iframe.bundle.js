"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[6542],{"./src/utils.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Lx:function(){return getLastIndexOfSubstringIgnoreCase},PR:function(){return _getNodePaths},_w:function(){return getSingleChildren},f4:function(){return prepareTreeDataForAutocomplete},hb:function(){return tidyUrlString},sz:function(){return formatLargeNumber},w1:function(){return formatBytesNumber}});__webpack_require__("./node_modules/core-js/modules/es.array.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.unscopables.flat-map.js"),__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");const _excluded=["items"];function getLastIndexOfSubstringIgnoreCase(string,substring){return string.toLowerCase().lastIndexOf(substring.toLowerCase())}const _getNodePaths=function getNodePaths(items,id){let path=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],nodePaths=[];return items.forEach((node=>{const{items:items}=node,thisNode=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(node,_excluded),nodePath=[...path,thisNode];if(items){const result=_getNodePaths(items,id,nodePath);result.length&&(nodePaths=[...nodePaths,...result])}else id&&thisNode.id!==id||(nodePaths=[...nodePaths,nodePath])})),nodePaths};function prepareTreeDataForAutocomplete(flattenedTreeData){return flattenedTreeData.map((items=>{const autocompleteItem={id:items[items.length-1].id,pathLabel:items.map((item=>item.label)).join(" / "),itemLabel:items[items.length-1].label},tags=items.flatMap((item=>item.tags||[]));return tags.length&&(autocompleteItem.tags=tags),autocompleteItem}))}function*getSingleChildren(children){1===children.length&&(yield children[0].id);for(const child of children)child.items&&(yield*getSingleChildren(child.items))}function formatLargeNumber(x){const string=x.toString();if(string.includes("e"))return string;const[integer,decimal]=x.toString().split(".");return[integer.replace(/\B(?=(\d{3})+(?!\d))/g,","),decimal].filter((el=>void 0!==el)).join(".")}function formatBytesNumber(bytes){let decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const bytesNumber=+bytes;if(!bytesNumber)return"0 Bytes";const positiveDecimals=decimals<0?0:decimals,units=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],unitsIndex=Math.min(Math.floor(Math.log(bytesNumber)/Math.log(1024)),units.length-1),number=(bytesNumber/1024**unitsIndex).toFixed(positiveDecimals),unit=units[unitsIndex];return`${formatLargeNumber(parseFloat(number))} ${unit}`}const reProtocol=/^(https?:)?(\/\/)?/,reTrailingSlashes=/(\/+$)/,tidyUrlString=url=>url.replace(reProtocol,"").replace(reTrailingSlashes,"");try{prepareTreeDataForAutocomplete.displayName="prepareTreeDataForAutocomplete",prepareTreeDataForAutocomplete.__docgenInfo={description:"",displayName:"prepareTreeDataForAutocomplete",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#prepareTreeDataForAutocomplete"]={docgenInfo:prepareTreeDataForAutocomplete.__docgenInfo,name:"prepareTreeDataForAutocomplete",path:"src/utils.tsx#prepareTreeDataForAutocomplete"})}catch(__react_docgen_typescript_loader_error){}try{getSingleChildren.displayName="getSingleChildren",getSingleChildren.__docgenInfo={description:"",displayName:"getSingleChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#getSingleChildren"]={docgenInfo:getSingleChildren.__docgenInfo,name:"getSingleChildren",path:"src/utils.tsx#getSingleChildren"})}catch(__react_docgen_typescript_loader_error){}try{formatLargeNumber.displayName="formatLargeNumber",formatLargeNumber.__docgenInfo={description:"",displayName:"formatLargeNumber",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#formatLargeNumber"]={docgenInfo:formatLargeNumber.__docgenInfo,name:"formatLargeNumber",path:"src/utils.tsx#formatLargeNumber"})}catch(__react_docgen_typescript_loader_error){}try{tidyUrlString.displayName="tidyUrlString",tidyUrlString.__docgenInfo={description:"",displayName:"tidyUrlString",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils.tsx#tidyUrlString"]={docgenInfo:tidyUrlString.__docgenInfo,name:"tidyUrlString",path:"src/utils.tsx#tidyUrlString"})}catch(__react_docgen_typescript_loader_error){}},"./stories/LongNumber.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongNumber:function(){return LongNumber_stories_LongNumber},ShortNumber:function(){return ShortNumber},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LongNumber_stories}});var utils=__webpack_require__("./src/utils.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var long_number=_ref=>{let{children:children}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,utils.sz)(children)})};try{longnumber.displayName="longnumber",longnumber.__docgenInfo={description:"",displayName:"longnumber",props:{children:{defaultValue:null,description:"The number to format",name:"children",required:!0,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/long-number.tsx#longnumber"]={docgenInfo:longnumber.__docgenInfo,name:"longnumber",path:"src/components/long-number.tsx#longnumber"})}catch(__react_docgen_typescript_loader_error){}var LongNumber_stories={title:"Visualisation/Long number"};const LongNumber_stories_LongNumber=()=>(0,jsx_runtime.jsx)(long_number,{children:1e9}),ShortNumber=()=>(0,jsx_runtime.jsx)(long_number,{children:100}),__namedExportsOrder=["LongNumber","ShortNumber"];LongNumber_stories_LongNumber.parameters={...LongNumber_stories_LongNumber.parameters,docs:{...LongNumber_stories_LongNumber.parameters?.docs,source:{originalSource:"() => <LongNumberComponent>{1000000000}</LongNumberComponent>",...LongNumber_stories_LongNumber.parameters?.docs?.source}}},ShortNumber.parameters={...ShortNumber.parameters,docs:{...ShortNumber.parameters?.docs,source:{originalSource:"() => <LongNumberComponent>{100}</LongNumberComponent>",...ShortNumber.parameters?.docs?.source}}}}}]);