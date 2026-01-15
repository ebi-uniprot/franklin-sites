import{j as a,r as j}from"./iframe-PpvKiT-0.js";import{u as w,w as A,D as q,a as v}from"./DataDecorator-TqHn_QT2.js";import{c as O}from"./index-B72jJjoP.js";import{L as I}from"./loader-CRYM6SBI.js";import{C as W}from"./card-C7LDLQYp.js";import"./preload-helper-BDBacUwf.js";import"./timing-functions.es-CZdVE6Va.js";import"./button-B6k-rT8i.js";import"./lipsum-Bi7KVxrj.js";import"./index-BUaT88Mv.js";import"./external-link-7sJ3DMk2.js";import"./utils-pBtDpbI-.js";import"./external-link-B5Z4Q5_Z.js";import"./protein-epM2bxxO.js";const V=({datum:e,id:t,dataRenderer:r,loading:o,firstItem:s})=>{let n;try{n=r(e)}catch(i){if(o)n=s&&a.jsx(I,{});else throw i}return a.jsx("li",{children:n},t)},M=j.memo(V),l=({data:e,getIdKey:t,dataRenderer:r,loading:o=!1,onSelectionChange:s,className:n,...i})=>{const{checkboxContainerRef:p}=w(s);return a.jsx("ul",{...i,className:O("data-list","no-bullet",n),ref:p,children:e.map((g,f)=>{const D=t(g,f,e);return a.jsx(M,{datum:g,id:D,dataRenderer:r,loading:o,firstItem:f===0},D)})})},m=e=>a.jsx(a.Fragment,{children:A(l)(e)});try{l.displayName="DataList",l.__docgenInfo={description:"",displayName:"DataList",props:{data:{defaultValue:null,description:"The data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},loading:{defaultValue:{value:"false"},description:"Flag saying that data is loading, so we might be showing stale data",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},dataRenderer:{defaultValue:null,description:`A renderer function for each item of the list.
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:"dataRenderer",required:!0,type:{name:"(datum: Datum) => ReactNode"}}}}}catch{}try{m.displayName="DataListWithLoader",m.__docgenInfo={description:"",displayName:"DataListWithLoader",props:{onLoadMoreItems:{defaultValue:null,description:`Callback to request more items if user scrolled to the bottom of the scroll-container or if
the scroll-container isn't scrollable yet because not enough items have been loaded yet. If
not provided this component will simply pass the data prop to the BaseComponent to be rendered
without observing scroll or triggering more data loading.`,name:"onLoadMoreItems",required:!0,type:{name:"() => void"}},hasMoreData:{defaultValue:null,description:"A boolean to indicate that the parent has more items to provide.",name:"hasMoreData",required:!0,type:{name:"boolean"}},loaderComponent:{defaultValue:null,description:"A custom loader component",name:"loaderComponent",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:`Data that is being represented in the wrapped component
The data to be displayed`,name:"data",required:!0,type:{name:"Datum[]"}},clickToLoad:{defaultValue:null,description:`Use a button to load more data instead of having infinite scrolling.
If this prop is a string or a node, it will render this within the button`,name:"clickToLoad",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"Flag saying that data is loading, so we might be showing stale data",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},dataRenderer:{defaultValue:null,description:`A renderer function for each item of the list.
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:"dataRenderer",required:!0,type:{name:"(datum: Datum) => ReactNode"}}}}}catch{}const{fn:N}=__STORYBOOK_MODULE_TEST__,h=(e,t=!1)=>r=>{const o=a.jsxs(a.Fragment,{children:[e&&a.jsx("input",{type:"checkbox",style:{margin:"15px 5px 0 0"}}),Object.values(r)]});return t?a.jsx(W,{children:o}):o},Z={component:l,title:"Data/Data List",argTypes:{onSelectionChange:{table:{disable:!0}},isSelectable:{name:"Selectable (onSelectionChange)",control:"boolean",description:"Toggle to enable selection checkbox"},clickToLoad:{control:"boolean",description:"Require a click to load data (when using loader)"}},args:{onSelectionChange:N(),isSelectable:!0,clickToLoad:!1}},d={argTypes:{clickToLoad:{table:{disable:!0}}},render:e=>{const{isSelectable:t,onSelectionChange:r,clickToLoad:o,...s}=e,n=t?r:void 0,i=h(!!n);return a.jsx(q,{children:p=>a.jsx(l,{...p,...s,onSelectionChange:n,dataRenderer:i})})}},T=({props:e,dataRenderer:t})=>a.jsx(m,{...e,dataRenderer:t,clickToLoad:e.clickToLoad}),c={render:e=>{const{isSelectable:t,onSelectionChange:r,...o}=e,s=t?r:void 0,n=h(!!s);return a.jsx(v,{children:i=>a.jsx(T,{props:{...i,...o,onSelectionChange:s},dataRenderer:n})})}},u={render:e=>{const{isSelectable:t,onSelectionChange:r,...o}=e,s=t?r:void 0,n=h(!!s,!0);return a.jsx(v,{children:i=>a.jsx(T,{props:{...i,...o,onSelectionChange:s},dataRenderer:n})})}};var b,S,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var L,y,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(y=c.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var x,_,k;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ee=["DataList","DataListWithLoader","DataListWithLoaderAndCards"];export{d as DataList,c as DataListWithLoader,u as DataListWithLoaderAndCards,ee as __namedExportsOrder,Z as default};
