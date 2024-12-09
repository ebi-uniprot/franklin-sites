(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[937],{"./stories/DataTable.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataTable:function(){return DataTable_stories_DataTable},DataTableColumnLoading:function(){return DataTableColumnLoading},DataTableWithLoader:function(){return DataTable_stories_DataTableWithLoader},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DataTable_stories}});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/react/index.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),loader=__webpack_require__("./src/components/loader.tsx"),useDataCheckboxes=__webpack_require__("./src/hooks/useDataCheckboxes.ts"),data_loader=__webpack_require__("./src/components/data-loader.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),data_table=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/data-table.scss"),data_table_default=__webpack_require__.n(data_table),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(data_table_default(),options),data_table_default()&&data_table_default().locals&&data_table_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["data","loading","columns","getIdKey","onHeaderClick","onSelectionChange","density","fixedLayout","optimisedRendering","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const BLOCK="data-table",DataTableHead=_ref=>{let{columns:columns,onHeaderClick:onHeaderClick,checkbox:checkbox}=_ref;return(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[checkbox&&(0,jsx_runtime.jsx)("th",{className:`${BLOCK}__header-cell--checkbox`,children:(0,jsx_runtime.jsx)("div",{className:"checkbox-cell",children:checkbox})}),columns.map((_ref2=>{let{sorted:sorted,name:name,label:label,sortable:sortable,width:width}=_ref2;return(0,jsx_runtime.jsx)("th",{className:classnames_default()({[`${BLOCK}__header-cell--sortable`]:sortable,[`${BLOCK}__header-cell--${sorted||"ascend"}`]:sortable&&sorted}),onClick:sortable?()=>null==onHeaderClick?void 0:onHeaderClick(name):void 0,style:width?{width:width}:void 0,"data-column-name":name,children:"function"==typeof label?label():label},name)}))]})})},MemoizedDataTableHead=(0,react.memo)(DataTableHead),Cell=_ref3=>{let rendered,{column:column,datum:datum,loading:loading,fixedLayout:fixedLayout,firstColumn:firstColumn}=_ref3;try{rendered=column.render(datum)}catch(error){if(!loading)throw error;rendered=firstColumn&&(0,jsx_runtime.jsx)(loader.A,{})}return(0,jsx_runtime.jsx)("td",{className:fixedLayout?`${BLOCK}__cell--ellipsis`:void 0,children:rendered})},DataTableRow=_ref4=>{let{datum:datum,loading:loading,columns:columns,selectable:selectable,id:id,fixedLayout:fixedLayout,firstColumn:firstColumn}=_ref4;const labelId=(0,react.useId)();return(0,jsx_runtime.jsxs)("tr",{children:[selectable&&(0,jsx_runtime.jsxs)("td",{className:"checkbox-cell",children:[(0,jsx_runtime.jsx)("input",{type:"checkbox","data-id":id,id:labelId}),(0,jsx_runtime.jsx)("label",{htmlFor:labelId,"aria-label":id,title:"click to select, shift+click for multiple selection"})]}),columns.map((column=>(0,jsx_runtime.jsx)(Cell,{column:column,datum:datum,loading:loading,fixedLayout:fixedLayout,firstColumn:firstColumn},`${id}-${column.name}`)))]})},MemoizedDataTableRow=(0,react.memo)(DataTableRow),DataTable=_ref5=>{let{data:data,loading:loading,columns:columns,getIdKey:getIdKey,onHeaderClick:onHeaderClick,onSelectionChange:onSelectionChange,density:density="normal",fixedLayout:fixedLayout,optimisedRendering:optimisedRendering,className:className}=_ref5,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref5,_excluded);const labelId=(0,react.useId)(),{selectAllRef:selectAllRef,checkboxContainerRef:checkboxContainerRef,checkSelectAllSync:checkSelectAllSync}=(0,useDataCheckboxes.Ay)(onSelectionChange);(0,react.useEffect)(checkSelectAllSync,[data,checkSelectAllSync]);const selectable=Boolean(onSelectionChange),selectAllCheckbox=(0,react.useMemo)((()=>selectable&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",id:labelId,ref:selectAllRef}),(0,jsx_runtime.jsx)("label",{htmlFor:labelId,"aria-label":"Selection control for all visible items"})]})),[labelId,selectAllRef,selectable]);return(0,jsx_runtime.jsxs)("table",_objectSpread(_objectSpread({className:classnames_default()(className,BLOCK,{[`${BLOCK}--compact`]:"compact"===density,[`${BLOCK}--fixed`]:fixedLayout,[`${BLOCK}--optimised-rendering`]:optimisedRendering})},props),{},{children:[(0,jsx_runtime.jsx)(MemoizedDataTableHead,{columns:columns,onHeaderClick:onHeaderClick,checkbox:selectAllCheckbox}),(0,jsx_runtime.jsx)("tbody",{ref:checkboxContainerRef,translate:"no",children:data.map(((datum,index)=>{const id=getIdKey(datum,index,data);return(0,jsx_runtime.jsx)(MemoizedDataTableRow,{datum:datum,loading:loading,id:id,selectable:selectable,firstColumn:0===index,columns:columns,fixedLayout:fixedLayout},id)}))})]}))},DataTableWithLoader=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,data_loader.A)(DataTable)(props)});try{DataTable.displayName="DataTable",DataTable.__docgenInfo={description:"",displayName:"DataTable",props:{density:{defaultValue:{value:"normal"},description:"Display density of the table (default is 'normal')",name:"density",required:!1,type:{name:"enum",value:[{value:'"compact"'},{value:'"normal"'}]}},optimisedRendering:{defaultValue:null,description:'Choose to activate optimised rendering (default: false). Do not use if\n - height of row is really tall or variable (scroll bar will jump)\n - column width changes (should be fine with "fixedLayout")',name:"optimisedRendering",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"The data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:"A function that returns a unique ID for each of the data objects.\nSame function signature as a map function.",name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},onHeaderClick:{defaultValue:null,description:"Optional event handler called when a sortable column header gets clicked\nMake sure that it doesn't change unecessarily by wrapping it in useCallback",name:"onHeaderClick",required:!1,type:{name:"((columnName: string) => void)"}},columns:{defaultValue:null,description:"An array of objects which specifies attributes about each column of your\ndata. Each object has label, name and render attributes.",name:"columns",required:!0,type:{name:"(SortableColumn<Datum> | NonSortableColumn<Datum>)[]"}},fixedLayout:{defaultValue:null,description:"Table fixed layout",name:"fixedLayout",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/data-table.tsx#DataTable"]={docgenInfo:DataTable.__docgenInfo,name:"DataTable",path:"src/components/data-table.tsx#DataTable"})}catch(__react_docgen_typescript_loader_error){}try{DataTableWithLoader.displayName="DataTableWithLoader",DataTableWithLoader.__docgenInfo={description:"",displayName:"DataTableWithLoader",props:{onLoadMoreItems:{defaultValue:null,description:"Callback to request more items if user scrolled to the bottom of the scroll-container or if\nthe scroll-container isn't scrollable yet because not enough items have been loaded yet. If\nnot provided this component will simply pass the data prop to the BaseComponent to be rendered\nwithout observing scroll or triggering more data loading.",name:"onLoadMoreItems",required:!0,type:{name:"() => void"}},hasMoreData:{defaultValue:null,description:"A boolean to indicate that the parent has more items to provide.",name:"hasMoreData",required:!0,type:{name:"boolean"}},loaderComponent:{defaultValue:null,description:"A custom loader component",name:"loaderComponent",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Data that is being represented in the wrapped component\nThe data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},clickToLoad:{defaultValue:null,description:"Use a button to load more data instead of having infinite scrolling.\nIf this prop is a string or a node, it will render this within the button",name:"clickToLoad",required:!1,type:{name:"ReactNode"}},density:{defaultValue:{value:"normal"},description:"Display density of the table (default is 'normal')",name:"density",required:!1,type:{name:"enum",value:[{value:'"compact"'},{value:'"normal"'}]}},optimisedRendering:{defaultValue:null,description:'Choose to activate optimised rendering (default: false). Do not use if\n - height of row is really tall or variable (scroll bar will jump)\n - column width changes (should be fine with "fixedLayout")',name:"optimisedRendering",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:"A function that returns a unique ID for each of the data objects.\nSame function signature as a map function.",name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},onHeaderClick:{defaultValue:null,description:"Optional event handler called when a sortable column header gets clicked\nMake sure that it doesn't change unecessarily by wrapping it in useCallback",name:"onHeaderClick",required:!1,type:{name:"((columnName: string) => void)"}},columns:{defaultValue:null,description:"An array of objects which specifies attributes about each column of your\ndata. Each object has label, name and render attributes.",name:"columns",required:!0,type:{name:"(SortableColumn<Datum> | NonSortableColumn<Datum>)[]"}},fixedLayout:{defaultValue:null,description:"Table fixed layout",name:"fixedLayout",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/data-table.tsx#DataTableWithLoader"]={docgenInfo:DataTableWithLoader.__docgenInfo,name:"DataTableWithLoader",path:"src/components/data-table.tsx#DataTableWithLoader"})}catch(__react_docgen_typescript_loader_error){}var DataDecorator=__webpack_require__("./src/decorators/DataDecorator.tsx");var DataTable_stories={component:DataTable,title:"Data/Data Table",argTypes:{onSelectionChange:{name:"Selectable (onSelectionChange)",mapping:{true:(0,dist.XI)("selectChange"),false:null},control:"boolean"},clickToLoad:{control:"boolean"}},args:{onHeaderClick:(0,dist.XI)("headerClick")}};const DataTable_stories_DataTable={render:storyProps=>(0,jsx_runtime.jsx)(DataDecorator.IC,{children:props=>(0,jsx_runtime.jsx)(DataTable,{...props,...storyProps,columns:DataDecorator.YB})})},DataTable_stories_DataTableWithLoader={render:storyProps=>(0,jsx_runtime.jsx)(DataDecorator.RN,{children:props=>(0,jsx_runtime.jsx)(DataTableWithLoader,{...props,...storyProps,columns:DataDecorator.YB})})},DataTableColumnLoading={render:storyProps=>(0,jsx_runtime.jsx)(DataDecorator.RN,{children:props=>(0,jsx_runtime.jsx)(DataTableWithLoader,{...props,...storyProps,loading:!0,columns:[...DataDecorator.YB,{label:"Column 6",name:"content6",render:row=>row.content6.complexValue}]})})},__namedExportsOrder=["DataTable","DataTableWithLoader","DataTableColumnLoading"];DataTable_stories_DataTable.parameters={...DataTable_stories_DataTable.parameters,docs:{...DataTable_stories_DataTable.parameters?.docs,source:{originalSource:"{\n  render: storyProps => <DataDecorator>\n      {(props: CommonProps) => <DataTableComponent {...props} {...storyProps} columns={columns} />}\n    </DataDecorator>\n}",...DataTable_stories_DataTable.parameters?.docs?.source}}},DataTable_stories_DataTableWithLoader.parameters={...DataTable_stories_DataTableWithLoader.parameters,docs:{...DataTable_stories_DataTableWithLoader.parameters?.docs,source:{originalSource:"{\n  render: storyProps => <DataLoaderDecorator>\n      {(props: CommonProps & WrapperProps<DataType>) => <DataTableWithLoaderComponent {...props} {...storyProps} columns={columns} />}\n    </DataLoaderDecorator>\n}",...DataTable_stories_DataTableWithLoader.parameters?.docs?.source}}},DataTableColumnLoading.parameters={...DataTableColumnLoading.parameters,docs:{...DataTableColumnLoading.parameters?.docs,source:{originalSource:"{\n  render: storyProps => <DataLoaderDecorator>\n      {(props: CommonProps & WrapperProps<DataType>) => <DataTableWithLoaderComponent {...props} {...storyProps} loading columns={[...columns, {\n      label: 'Column 6',\n      name: 'content6',\n      // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n      // @ts-ignore we know it doesn't exist, it's on purpose\n      render: row => row.content6.complexValue\n    }]} />}\n    </DataLoaderDecorator>\n}",...DataTableColumnLoading.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/data-table.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}:root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.data-table{border:0;border-collapse:collapse;text-align:left;width:100%}.data-table input[type=checkbox]{margin:0}.data-table--fixed{table-layout:fixed}.data-table thead{background-color:#00639a}.data-table th{width:auto;border:0;padding:.25rem .5rem;font-weight:bold;white-space:nowrap;color:#fbfeff;background-color:#00639a;top:0;z-index:2000;position:sticky}.data-table th.data-table__header-cell--sortable{cursor:pointer}.data-table th.data-table__header-cell--sortable::after{content:"▲";display:inline-block;font-size:.6em;margin:0 .8em;opacity:.7;transition:transform ease-out .5s;transform:rotateX(0)}@media(prefers-reduced-motion: reduce){.data-table th.data-table__header-cell--sortable::after{transition-duration:0s}}.data-table th.data-table__header-cell--sortable:hover::after{opacity:1;transform:rotateX(0.5turn)}.data-table th.data-table__header-cell--ascend::after,.data-table th.data-table__header-cell--descend::after{opacity:1}.data-table th.data-table__header-cell--descend::after{transform:rotateX(0.5turn)}.data-table th.data-table__header-cell--descend:hover::after{transform:rotateX(0)}.data-table th.data-table__header-cell--checkbox{width:1.5rem;padding:0}.data-table th.data-table__header-cell--checkbox input[type=checkbox]{margin-top:.5em}.data-table tr:nth-of-type(2n){background-color:#e4e8eb}.data-table td{padding:.5rem;border:0;vertical-align:top;border-bottom:1px solid #fbfeff}.data-table .checkbox-cell{position:relative;padding:0}.data-table .checkbox-cell>input[type=checkbox]{margin:.9em .75ch 0 1.25ch}.data-table .checkbox-cell>input[type=checkbox]+label{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;border-left:1ch solid #00639a;opacity:0;transition:opacity ease-in-out .1s}.data-table .checkbox-cell>input[type=checkbox]:hover+label,.data-table .checkbox-cell>input[type=checkbox]:focus+label{opacity:.2}.data-table .checkbox-cell>input[type=checkbox]:checked+label{opacity:1}.data-table--optimised-rendering td{content-visibility:auto;contain-intrinsic-size:1px 2em}.data-table__cell--warning{background-color:#ffae00}.data-table__cell--loading{text-align:center}.data-table__cell--ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.data-table--compact{font-size:14px}.data-table--compact .data-table__header-cell,.data-table--compact .data-table__cell{padding:.25}.data-table .expandable-list button,.data-table .expandable-list a{white-space:nowrap}',"",{version:3,sources:["webpack://./src/styles/components/data-table.scss","webpack://./src/styles/_colours.scss","webpack://./src/styles/common/_z-index.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_franklin-settings.scss"],names:[],mappings:"AAAA,MCyDA,kCAEE,CAAA,6BACA,CAAA,mCACA,CAAA,qCACA,CAAA,iCACA,CAAA,iCAGA,CAAA,iCACA,CAAA,gCACA,CAAA,gCACA,CAAA,6BACA,CAAA,8BACA,CAAA,6BAGA,CAAA,+BACA,CAAA,uCACA,CAAA,gDAGA,CAAA,2BACA,CAAA,4BACA,CAAA,8BACA,CAAA,mCAGA,CAAA,+BACA,CAAA,0BACA,CAAA,0BACA,CAAA,+BAGA,CAAA,4BAGA,CAAA,4BACA,CAAA,4BACA,CAAA,yBACA,CAAA,iCAGA,CAAA,gCACA,CAAA,2BACA,CAAA,gDAGA,CAAA,mDACA,CAAA,yEACA,CAAA,0BAEA,CAAA,MApDF,kCAEE,CAAA,6BACA,CAAA,mCACA,CAAA,qCACA,CAAA,iCACA,CAAA,iCAGA,CAAA,iCACA,CAAA,gCACA,CAAA,gCACA,CAAA,6BACA,CAAA,8BACA,CAAA,6BAGA,CAAA,+BACA,CAAA,uCACA,CAAA,gDAGA,CAAA,2BACA,CAAA,4BACA,CAAA,8BACA,CAAA,mCAGA,CAAA,+BACA,CAAA,0BACA,CAAA,0BACA,CAAA,+BAGA,CAAA,4BAGA,CAAA,4BACA,CAAA,4BACA,CAAA,yBACA,CAAA,iCAGA,CAAA,gCACA,CAAA,2BACA,CAAA,gDAGA,CAAA,mDACA,CAAA,yEACA,CAAA,0BAEA,CAAA,YDvGF,QAEE,CAAA,wBACA,CAAA,eACA,CAAA,UACA,CAAA,iCAEA,QACE,CAAA,mBAGF,kBACE,CAAA,kBAGF,wBCZgB,CAAA,eDiBhB,UACE,CAAA,QACA,CAAA,oBACA,CAAA,gBACA,CAAA,kBACA,CAAA,aCXe,CAAA,wBAXD,CAAA,KDyBd,CAAA,YElCU,CAAA,eFoCV,CAAA,iDAGE,cACE,CAAA,wDAEA,WACE,CAAA,oBACA,CAAA,cACA,CAAA,aACA,CAAA,UACA,CAAA,iCACA,CAAA,oBACA,CAAA,uCAEA,wDATF,sBAUI,CAAA,CAAA,8DAIJ,SACE,CAAA,0BACA,CAAA,6GAMF,SACE,CAAA,uDAKF,0BACE,CAAA,6DAEF,oBACE,CAAA,iDAIJ,YAEE,CAAA,SAEA,CAAA,sEAEA,eACE,CAAA,+BAON,wBCzEc,CAAA,eD+EhB,aACE,CAAA,QACA,CAAA,kBACA,CAAA,+BACA,CAAA,2BAGF,iBACE,CAAA,SACA,CAAA,gDAEA,0BACE,CAAA,sDAEA,iBACE,CAAA,KACA,CAAA,OACA,CAAA,QACA,CAAA,MACA,CAAA,QACA,CAAA,6BACA,CAAA,SACA,CAAA,kCAEA,CAAA,wHAKA,UACE,CAAA,8DAIJ,SACE,CAAA,oCAKN,uBAKE,CAAA,8BACA,CAAA,2BAIA,wBACE,CAAA,2BAGF,iBACE,CAAA,4BAGF,kBG9HF,CAAA,eACA,CAAA,sBACA,CAAA,qBHiIA,cI3JiB,CAAA,qFJ6Jf,WAEE,CAAA,mEAKF,kBAEE",sourcesContent:["@import '../settings';\n@import '../colours';\n@import '../mixins';\n@import '../franklin-settings';\n@import '../common/z-index';\n\n.data-table {\n  $self: &;\n  border: 0;\n  border-collapse: collapse;\n  text-align: left;\n  width: 100%;\n\n  input[type='checkbox'] {\n    margin: 0;\n  }\n\n  &--fixed {\n    table-layout: fixed;\n  }\n\n  & thead {\n    background-color: $colour-sea-blue;\n  }\n\n  // table header cell, without any specific modifier applied\n  & th {\n    width: auto;\n    border: 0;\n    padding: 0.25rem 0.5rem;\n    font-weight: bold;\n    white-space: nowrap;\n    color: $colour-sky-white;\n    background-color: $colour-sea-blue;\n    top: 0;\n    z-index: $z-index-low;\n    position: sticky;\n\n    &.data-table__header-cell {\n      &--sortable {\n        cursor: pointer;\n\n        &::after {\n          content: '▲';\n          display: inline-block;\n          font-size: 0.6em;\n          margin: 0 0.8em;\n          opacity: 0.7;\n          transition: transform ease-out 0.5s;\n          transform: rotateX(0);\n\n          @media (prefers-reduced-motion: reduce) {\n            transition-duration: 0s;\n          }\n        }\n\n        &:hover::after {\n          opacity: 1;\n          transform: rotateX(0.5turn);\n        }\n      }\n\n      &--ascend,\n      &--descend {\n        &::after {\n          opacity: 1;\n        }\n      }\n\n      &--descend {\n        &::after {\n          transform: rotateX(0.5turn);\n        }\n        &:hover::after {\n          transform: rotateX(0);\n        }\n      }\n\n      &--checkbox {\n        // This doesn't have an effect unless `table-layout: fixed`\n        width: 1.5rem;\n\n        padding: 0;\n\n        & input[type='checkbox'] {\n          margin-top: 0.5em;\n        }\n      }\n    }\n  }\n  // table row, without any specific modifier applied\n  & tr {\n    &:nth-of-type(2n) {\n      background-color: $colour-platinum;\n    }\n  }\n\n  // table body cell, without any specific modifier applied\n  & td {\n    padding: 0.5rem;\n    border: 0;\n    vertical-align: top;\n    border-bottom: 1px solid $colour-sky-white;\n  }\n\n  & .checkbox-cell {\n    position: relative;\n    padding: 0;\n\n    & > input[type='checkbox'] {\n      margin: 0.9em 0.75ch 0 1.25ch;\n\n      & + label {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: 0;\n        border-left: 1ch solid $colour-sea-blue;\n        opacity: 0;\n\n        transition: opacity ease-in-out 0.1s;\n      }\n\n      &:hover,\n      &:focus {\n        & + label {\n          opacity: 0.2;\n        }\n      }\n\n      &:checked + label {\n        opacity: 1;\n      }\n    }\n  }\n\n  &--optimised-rendering td {\n    /** notes: do not use if:\n      *  - height of row is really tall or variable (scroll bar will jump)\n      *  - column width changes (should be fine with \"fixedLayout\")\n      */\n    content-visibility: auto; // avoid rendering rows that are out of view\n    contain-intrinsic-size: 1px 2em; // assume minimum size of one line + margin\n  }\n\n  &__cell {\n    &--warning {\n      background-color: map-get($foundation-palette, warning);\n    }\n\n    &--loading {\n      text-align: center;\n    }\n\n    &--ellipsis {\n      @include ellipsis();\n    }\n  }\n\n  &--compact {\n    font-size: $font-size-medium;\n    #{ $self }__header-cell,\n    #{ $self }__cell {\n      padding: 0.25;\n    }\n  }\n\n  & .expandable-list {\n    button,\n    a {\n      white-space: nowrap;\n    }\n  }\n}\n","/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","$z-index-low: 2000;\n$z-index-medium: 5000;\n$z-index-high: 9000;\n//previous: $z-index-highest: 10000; current: max possible z-index\n$z-index-highest: 2147483641;\n","@use 'sass:math';\n\n@import './settings';\n@import './colours';\n@import './franklin-settings';\n\n@mixin columns($base-class, $number) {\n  .#{$base-class}--columns {\n    column-count: $number;\n    column-width: percentage(math.div(1, $number));\n\n    & > * {\n      break-inside: avoid;\n    }\n  }\n}\n\n@mixin box-shadow($spread: 0.125rem) {\n  box-shadow: 0 0.125rem 0.25rem $spread rgba($colour-yankees-blue, 0.2);\n}\n\n@mixin fs-breakpoints($size) {\n  @if map-has-key($fs-breakpoint-values, $size) {\n    @media #{inspect(map-get($fs-breakpoint-values, $size))} {\n      @content;\n    }\n  }\n}\n\n@mixin ellipsis() {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n","// Font families\n$fs-base-font-face: 'Lato', sans-serif;\n$fs-headers-font-face: 'Source Sans Pro', sans-serif;\n\n// Base font sizes\n$font-size-small: 12px;\n$font-size-medium: 14px;\n$font-size-large: 16px;\n\n// Font sizes\n$fs-base-font-size: $font-size-large;\n\n// Font weights\n$fs-font-weight-regular: 400;\n$fs-font-weight-semi-bold: 600;\n$fs-font-weight-bold: 700;\n$fs-font-weight-extra-bold: 900;\n\n// Breakpoints\n$fs-breakpoint-values: (\n  'small': (\n    min-width: 0,\n  ),\n  'medium': (\n    min-width: 640px,\n  ),\n  'large': (\n    min-width: 1024px,\n  ),\n);\n\n$gutter-size: 1rem;\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);