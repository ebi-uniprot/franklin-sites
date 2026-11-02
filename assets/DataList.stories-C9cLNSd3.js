import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{M as n,n as r}from"./iframe-DP8P0iO7.js";import{t as i}from"./classnames-DQoS6hca.js";import{n as a,t as o}from"./loader-LmvHEU5x.js";import{n as s,t as c}from"./card-DD1OeDlp.js";import{a as l,c as u,i as d,n as f,o as p,s as m,t as h}from"./DataDecorator-CX9hRJLL.js";var g,_,v,y,b,x,S;function C(){return(C=t((()=>{g=n(),_=e(i(),1),a(),m(),l(),v=r(),y=({datum:e,id:t,dataRenderer:n,loading:r,firstItem:i})=>{let a;try{a=n(e)}catch(e){if(r)a=i&&(0,v.jsx)(o,{});else throw e}return(0,v.jsx)(`li`,{children:a},t)},b=(0,g.memo)(y),x=({data:e,getIdKey:t,dataRenderer:n,loading:r=!1,onSelectionChange:i,className:a,...o})=>{let{checkboxContainerRef:s}=u(i);return(0,v.jsx)(`ul`,{...o,className:(0,_.default)(`data-list`,`no-bullet`,a),ref:s,children:e.map((i,a)=>{let o=t(i,a,e);return(0,v.jsx)(b,{datum:i,id:o,dataRenderer:n,loading:r,firstItem:a===0},o)})})},S=e=>(0,v.jsx)(v.Fragment,{children:p(x)(e)});try{x.displayName=`DataList`,x.__docgenInfo={description:``,displayName:`DataList`,filePath:`/builds/uniprot/front-end/franklin-sites/src/components/data-list.tsx`,methods:[],props:{data:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`The data to be displayed`,name:`data`,required:!0,tags:{},type:{name:`Datum[]`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`Flag saying that data is loading, so we might be showing stale data`,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},getIdKey:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:`getIdKey`,required:!0,tags:{},type:{name:`(datum: Datum, index: number, data: Datum[]) => string`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A callback that is called whenever a user selects or unselects a row.`,name:`onSelectionChange`,required:!1,tags:{},type:{name:`((event: MouseEvent | KeyboardEvent) => void)`}},dataRenderer:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A renderer function for each item of the list.
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:`dataRenderer`,required:!0,tags:{},type:{name:`(datum: Datum) => ReactNode`}}},tags:{}}}catch{}try{S.displayName=`DataListWithLoader`,S.__docgenInfo={description:``,displayName:`DataListWithLoader`,filePath:`/builds/uniprot/front-end/franklin-sites/src/components/data-list.tsx`,methods:[],props:{onLoadMoreItems:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-loader.tsx`,name:`TypeLiteral`}],description:`Callback to request more items if user scrolled to the bottom of the scroll-container or if
the scroll-container isn't scrollable yet because not enough items have been loaded yet. If
not provided this component will simply pass the data prop to the BaseComponent to be rendered
without observing scroll or triggering more data loading.`,name:`onLoadMoreItems`,required:!0,tags:{},type:{name:`() => void`}},hasMoreData:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-loader.tsx`,name:`TypeLiteral`}],description:`A boolean to indicate that the parent has more items to provide.`,name:`hasMoreData`,required:!0,tags:{},type:{name:`boolean`}},loaderComponent:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-loader.tsx`,name:`TypeLiteral`}],description:`A custom loader component`,name:`loaderComponent`,required:!1,tags:{},type:{name:`ReactNode`}},data:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-loader.tsx`,name:`TypeLiteral`},{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`Data that is being represented in the wrapped component
The data to be displayed`,name:`data`,required:!0,tags:{},type:{name:`Datum[]`}},clickToLoad:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-loader.tsx`,name:`TypeLiteral`}],description:`Use a button to load more data instead of having infinite scrolling.
If this prop is a string or a node, it will render this within the button`,name:`clickToLoad`,required:!1,tags:{},type:{name:`ReactNode`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`Flag saying that data is loading, so we might be showing stale data`,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},getIdKey:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:`getIdKey`,required:!0,tags:{},type:{name:`(datum: Datum, index: number, data: Datum[]) => string`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A callback that is called whenever a user selects or unselects a row.`,name:`onSelectionChange`,required:!1,tags:{},type:{name:`((event: MouseEvent | KeyboardEvent) => void)`}},dataRenderer:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/data-list.tsx`,name:`TypeLiteral`}],description:`A renderer function for each item of the list.
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:`dataRenderer`,required:!0,tags:{},type:{name:`(datum: Datum) => ReactNode`}}},tags:{}}}catch{}})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{n(),C(),s(),d(),w=r(),{fn:j}=__STORYBOOK_MODULE_TEST__,M=(e,t=!1)=>n=>{let r=(0,w.jsxs)(w.Fragment,{children:[e&&(0,w.jsx)(`input`,{type:`checkbox`,style:{margin:`15px 5px 0 0`}}),Object.values(n)]});return t?(0,w.jsx)(c,{children:r}):r},N={component:x,title:`Data/Data List`,argTypes:{onSelectionChange:{table:{disable:!0}},isSelectable:{name:`Selectable (onSelectionChange)`,control:`boolean`,description:`Toggle to enable selection checkbox`},clickToLoad:{control:`boolean`,description:`Require a click to load data (when using loader)`}},args:{onSelectionChange:j(),isSelectable:!0,clickToLoad:!1}},P={argTypes:{clickToLoad:{table:{disable:!0}}},render:e=>{let{isSelectable:t,onSelectionChange:n,clickToLoad:r,...i}=e,a=t?n:void 0,o=M(!!a);return(0,w.jsx)(h,{children:e=>(0,w.jsx)(x,{...e,...i,onSelectionChange:a,dataRenderer:o})})}},F=({props:e,dataRenderer:t})=>(0,w.jsx)(S,{...e,dataRenderer:t,clickToLoad:e.clickToLoad}),I={render:e=>{let{isSelectable:t,onSelectionChange:n,...r}=e,i=t?n:void 0,a=M(!!i);return(0,w.jsx)(f,{children:e=>(0,w.jsx)(F,{props:{...e,...r,onSelectionChange:i},dataRenderer:a})})}},L={render:e=>{let{isSelectable:t,onSelectionChange:n,...r}=e,i=t?n:void 0,a=M(!!i,!0);return(0,w.jsx)(f,{children:e=>(0,w.jsx)(F,{props:{...e,...r,onSelectionChange:i},dataRenderer:a})})}},R=[`DataList`,`DataListWithLoader`,`DataListWithLoaderAndCards`],P.parameters={...P.parameters,docs:{...(T=P.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    clickToLoad: {
      table: {
        disable: true
      }
    }
  },
  render: args => {
    const {
      isSelectable,
      onSelectionChange,
      clickToLoad,
      ...restArgs
    } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange);
    return <DataDecorator>
        {(props: CommonProps) => <DataListComponent {...props} {...restArgs} onSelectionChange={finalOnSelectionChange} dataRenderer={dataRenderer} />}
      </DataDecorator>;
  }
}`,...(E=P.parameters)==null||(E=E.docs)==null?void 0:E.source}}},I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const {
      isSelectable,
      onSelectionChange,
      ...restArgs
    } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange);
    return <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => <DataListWithLoaderWrapper props={{
        ...props,
        ...restArgs,
        onSelectionChange: finalOnSelectionChange
      }} dataRenderer={dataRenderer} />}
      </DataLoaderDecorator>;
  }
}`,...(O=I.parameters)==null||(O=O.docs)==null?void 0:O.source}}},L.parameters={...L.parameters,docs:{...(k=L.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const {
      isSelectable,
      onSelectionChange,
      ...restArgs
    } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    const dataRenderer = createDataRenderer(!!finalOnSelectionChange, true);
    return <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => <DataListWithLoaderWrapper props={{
        ...props,
        ...restArgs,
        onSelectionChange: finalOnSelectionChange
      }} dataRenderer={dataRenderer} />}
      </DataLoaderDecorator>;
  }
}`,...(A=L.parameters)==null||(A=A.docs)==null?void 0:A.source}}}})))()}z();export{P as DataList,I as DataListWithLoader,L as DataListWithLoaderAndCards,R as __namedExportsOrder,N as default};