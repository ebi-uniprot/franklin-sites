"use strict";(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[2759],{"./stories/DataList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataList:function(){return DataList_stories_DataList},DataListWithLoader:function(){return DataList_stories_DataListWithLoader},DataListWithLoaderAndCards:function(){return DataListWithLoaderAndCards},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DataList_stories}});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/react/index.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),loader=__webpack_require__("./src/components/loader.tsx"),useDataCheckboxes=__webpack_require__("./src/hooks/useDataCheckboxes.ts"),data_loader=__webpack_require__("./src/components/data-loader.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["data","getIdKey","dataRenderer","loading","onSelectionChange","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const DataListItem=_ref=>{let rendered,{datum:datum,id:id,dataRenderer:dataRenderer,loading:loading,firstItem:firstItem}=_ref;try{rendered=dataRenderer(datum)}catch(error){if(!loading)throw error;rendered=firstItem&&(0,jsx_runtime.jsx)(loader.A,{})}return(0,jsx_runtime.jsx)("li",{children:rendered},id)},MemoizedDataListItem=(0,react.memo)(DataListItem),DataList=_ref2=>{let{data:data,getIdKey:getIdKey,dataRenderer:dataRenderer,loading:loading=!1,onSelectionChange:onSelectionChange,className:className}=_ref2,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref2,_excluded);const{checkboxContainerRef:checkboxContainerRef}=(0,useDataCheckboxes.Ay)(onSelectionChange);return(0,jsx_runtime.jsx)("ul",_objectSpread(_objectSpread({},props),{},{className:classnames_default()("data-list","no-bullet",className),ref:checkboxContainerRef,children:data.map(((datum,index)=>{const id=getIdKey(datum,index,data);return(0,jsx_runtime.jsx)(MemoizedDataListItem,{datum:datum,id:id,dataRenderer:dataRenderer,loading:loading,firstItem:0===index},id)}))}))},DataListWithLoader=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,data_loader.A)(DataList)(props)});try{DataList.displayName="DataList",DataList.__docgenInfo={description:"",displayName:"DataList",props:{data:{defaultValue:null,description:"The data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},loading:{defaultValue:{value:"false"},description:"Flag saying that data is loading, so we might be showing stale data",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:"A function that returns a unique ID for each of the data objects.\nSame function signature as a map function.",name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},dataRenderer:{defaultValue:null,description:"A renderer function for each item of the list.\nMake sure that it doesn't change unecessarily by wrapping it in useCallback",name:"dataRenderer",required:!0,type:{name:"(datum: Datum) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/data-list.tsx#DataList"]={docgenInfo:DataList.__docgenInfo,name:"DataList",path:"src/components/data-list.tsx#DataList"})}catch(__react_docgen_typescript_loader_error){}try{DataListWithLoader.displayName="DataListWithLoader",DataListWithLoader.__docgenInfo={description:"",displayName:"DataListWithLoader",props:{onLoadMoreItems:{defaultValue:null,description:"Callback to request more items if user scrolled to the bottom of the scroll-container or if\nthe scroll-container isn't scrollable yet because not enough items have been loaded yet. If\nnot provided this component will simply pass the data prop to the BaseComponent to be rendered\nwithout observing scroll or triggering more data loading.",name:"onLoadMoreItems",required:!0,type:{name:"() => void"}},hasMoreData:{defaultValue:null,description:"A boolean to indicate that the parent has more items to provide.",name:"hasMoreData",required:!0,type:{name:"boolean"}},loaderComponent:{defaultValue:null,description:"A custom loader component",name:"loaderComponent",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:"Data that is being represented in the wrapped component\nThe data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},clickToLoad:{defaultValue:null,description:"Use a button to load more data instead of having infinite scrolling.\nIf this prop is a string or a node, it will render this within the button",name:"clickToLoad",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"Flag saying that data is loading, so we might be showing stale data",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:"A function that returns a unique ID for each of the data objects.\nSame function signature as a map function.",name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},dataRenderer:{defaultValue:null,description:"A renderer function for each item of the list.\nMake sure that it doesn't change unecessarily by wrapping it in useCallback",name:"dataRenderer",required:!0,type:{name:"(datum: Datum) => ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/data-list.tsx#DataListWithLoader"]={docgenInfo:DataListWithLoader.__docgenInfo,name:"DataListWithLoader",path:"src/components/data-list.tsx#DataListWithLoader"})}catch(__react_docgen_typescript_loader_error){}var card=__webpack_require__("./src/components/card.tsx"),DataDecorator=__webpack_require__("./src/decorators/DataDecorator.tsx");var DataList_stories={component:DataList,title:"Data/Data List"};const DataList_stories_DataList={render:()=>{const dataRenderer=content=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.values(content)});return(0,jsx_runtime.jsx)(DataDecorator.IC,{children:props=>(0,jsx_runtime.jsx)(DataList,{...props,dataRenderer:dataRenderer})})}},DataListWithLoaderChildren=({props:props})=>(0,jsx_runtime.jsx)(DataListWithLoader,{...props,dataRenderer:content=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object.values(content)}),clickToLoad:props.clickToLoad}),DataList_stories_DataListWithLoader={args:{clickToLoad:!1},render:({clickToLoad:clickToLoad})=>(0,jsx_runtime.jsx)(DataDecorator.RN,{children:props=>(0,jsx_runtime.jsx)(DataListWithLoaderChildren,{props:{...props,clickToLoad:clickToLoad}})})},DataListWithLoaderAndCardsChildren=props=>(0,jsx_runtime.jsx)(DataListWithLoader,{...props,dataRenderer:content=>(0,jsx_runtime.jsxs)(card.A,{children:[props?.onSelectionChange&&(0,jsx_runtime.jsx)("div",{className:"checkbox-cell",children:(0,jsx_runtime.jsx)("input",{type:"checkbox"})}),Object.values(content)]})}),DataListWithLoaderAndCards={argTypes:{onSelectionChange:{name:"Selectable (onSelectionChange)",options:[!0,!1],mapping:{true:(0,dist.XI)("selectChange"),false:null},control:"boolean"},clickToLoad:{control:"boolean"}},render:storyProps=>(0,jsx_runtime.jsx)(DataDecorator.RN,{children:props=>(0,jsx_runtime.jsx)(DataListWithLoaderAndCardsChildren,{...props,...storyProps})})},__namedExportsOrder=["DataList","DataListWithLoader","DataListWithLoaderAndCards"];DataList_stories_DataList.parameters={...DataList_stories_DataList.parameters,docs:{...DataList_stories_DataList.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const dataRenderer = (content: DataType) => <>{Object.values(content)}</>;\n    return <DataDecorator>\n        {(props: CommonProps) => <DataListComponent {...props} dataRenderer={dataRenderer} />}\n      </DataDecorator>;\n  }\n}",...DataList_stories_DataList.parameters?.docs?.source}}},DataList_stories_DataListWithLoader.parameters={...DataList_stories_DataListWithLoader.parameters,docs:{...DataList_stories_DataListWithLoader.parameters?.docs,source:{originalSource:"{\n  args: {\n    clickToLoad: false\n  },\n  render: ({\n    clickToLoad\n  }) => <DataLoaderDecorator>\n      {(props: CommonProps & WrapperProps<DataType>) => <DataListWithLoaderChildren props={{\n      ...props,\n      clickToLoad\n    }} />}\n    </DataLoaderDecorator>\n}",...DataList_stories_DataListWithLoader.parameters?.docs?.source}}},DataListWithLoaderAndCards.parameters={...DataListWithLoaderAndCards.parameters,docs:{...DataListWithLoaderAndCards.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    onSelectionChange: {\n      name: 'Selectable (onSelectionChange)',\n      options: [true, false],\n      mapping: {\n        true: action('selectChange'),\n        false: null\n      },\n      control: 'boolean'\n    },\n    clickToLoad: {\n      control: 'boolean'\n    }\n  },\n  render: storyProps => <DataLoaderDecorator>\n      {(props: CommonProps & WrapperProps<DataType>) => <DataListWithLoaderAndCardsChildren {...props} {...storyProps} />}\n    </DataLoaderDecorator>\n}",...DataListWithLoaderAndCards.parameters?.docs?.source}}}}}]);