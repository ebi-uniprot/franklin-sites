import{r as d,j as e}from"./iframe-DIu4I_i1.js";import{u as K,w as P,D as B,c as D,a as N}from"./DataDecorator-BZtlDPBO.js";import{c as R}from"./index-B6UWKw4u.js";import{L as F}from"./loader-DWtNiAAa.js";import"./preload-helper-BDBacUwf.js";import"./timing-functions.es-CZdVE6Va.js";import"./button-CHhBuv40.js";import"./lipsum-Bi7KVxrj.js";import"./index-BUaT88Mv.js";import"./external-link-DmGRR73f.js";import"./utils-pBtDpbI-.js";import"./external-link-BeYG8C2I.js";import"./protein-CYwHXkw9.js";const c="data-table",H=({columns:a,onHeaderClick:o,checkbox:l})=>e.jsx("thead",{children:e.jsxs("tr",{children:[l&&e.jsx("th",{className:`${c}__header-cell--checkbox`,children:e.jsx("div",{className:"checkbox-cell",children:l})}),a.map(({sorted:r,name:t,label:n,sortable:i,width:s})=>e.jsx("th",{className:R({[`${c}__header-cell--sortable`]:i,[`${c}__header-cell--${r||"ascend"}`]:i&&r}),onClick:i?()=>o==null?void 0:o(t):void 0,style:s?{width:s}:void 0,"data-column-name":t,children:typeof n=="function"?n():n},t))]})}),z=d.memo(H),U=({column:a,datum:o,loading:l,fixedLayout:r,firstColumn:t})=>{let n;try{n=a.render(o)}catch(i){if(l)n=t&&e.jsx(F,{});else throw i}return e.jsx("td",{className:r?`${c}__cell--ellipsis`:void 0,children:n})},Y=({datum:a,loading:o,columns:l,selectable:r,id:t,fixedLayout:n,firstColumn:i})=>{const s=d.useId();return e.jsxs("tr",{children:[r&&e.jsxs("td",{className:"checkbox-cell",children:[e.jsx("input",{type:"checkbox","data-id":t,id:s}),e.jsx("label",{htmlFor:s,"aria-label":t,title:"click to select, shift+click for multiple selection"})]}),l.map(m=>e.jsx(U,{column:m,datum:a,loading:o,fixedLayout:n,firstColumn:i},`${t}-${m.name}`))]})},G=d.memo(Y),u=({data:a,loading:o,columns:l,getIdKey:r,onHeaderClick:t,onSelectionChange:n,density:i="normal",fixedLayout:s,optimisedRendering:m,className:E,...M})=>{const g=d.useId(),{selectAllRef:C,checkboxContainerRef:$,checkSelectAllSync:S}=K(n);d.useEffect(S,[a,S]);const y=!!n,W=d.useMemo(()=>y&&e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"checkbox",id:g,ref:C}),e.jsx("label",{htmlFor:g,"aria-label":"Selection control for all visible items"})]}),[g,C,y]);return e.jsxs("table",{className:R(E,c,{[`${c}--compact`]:i==="compact",[`${c}--fixed`]:s,[`${c}--optimised-rendering`]:m}),...M,children:[e.jsx(z,{columns:l,onHeaderClick:t,checkbox:W}),e.jsx("tbody",{ref:$,translate:"no",children:a.map((x,T)=>{const v=r(x,T,a);return e.jsx(G,{datum:x,loading:o,id:v,selectable:y,firstColumn:T===0,columns:l,fixedLayout:s},v)})})]})},f=a=>e.jsx(e.Fragment,{children:P(u)(a)});try{u.displayName="DataTable",u.__docgenInfo={description:"",displayName:"DataTable",props:{density:{defaultValue:{value:"normal"},description:"Display density of the table (default is 'normal')",name:"density",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},optimisedRendering:{defaultValue:null,description:`Choose to activate optimised rendering (default: false). Do not use if
 - height of row is really tall or variable (scroll bar will jump)
 - column width changes (should be fine with "fixedLayout")`,name:"optimisedRendering",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"The data to be displayed",name:"data",required:!0,type:{name:"Datum[]"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},onHeaderClick:{defaultValue:null,description:`Optional event handler called when a sortable column header gets clicked
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:"onHeaderClick",required:!1,type:{name:"((columnName: string) => void)"}},columns:{defaultValue:null,description:`An array of objects which specifies attributes about each column of your
data. Each object has label, name and render attributes.`,name:"columns",required:!0,type:{name:"(SortableColumn<Datum> | NonSortableColumn<Datum>)[]"}},fixedLayout:{defaultValue:null,description:"Table fixed layout",name:"fixedLayout",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="DataTableWithLoader",f.__docgenInfo={description:"",displayName:"DataTableWithLoader",props:{onLoadMoreItems:{defaultValue:null,description:`Callback to request more items if user scrolled to the bottom of the scroll-container or if
the scroll-container isn't scrollable yet because not enough items have been loaded yet. If
not provided this component will simply pass the data prop to the BaseComponent to be rendered
without observing scroll or triggering more data loading.`,name:"onLoadMoreItems",required:!0,type:{name:"() => void"}},hasMoreData:{defaultValue:null,description:"A boolean to indicate that the parent has more items to provide.",name:"hasMoreData",required:!0,type:{name:"boolean"}},loaderComponent:{defaultValue:null,description:"A custom loader component",name:"loaderComponent",required:!1,type:{name:"ReactNode"}},data:{defaultValue:null,description:`Data that is being represented in the wrapped component
The data to be displayed`,name:"data",required:!0,type:{name:"Datum[]"}},clickToLoad:{defaultValue:null,description:`Use a button to load more data instead of having infinite scrolling.
If this prop is a string or a node, it will render this within the button`,name:"clickToLoad",required:!1,type:{name:"ReactNode"}},density:{defaultValue:{value:"normal"},description:"Display density of the table (default is 'normal')",name:"density",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},optimisedRendering:{defaultValue:null,description:`Choose to activate optimised rendering (default: false). Do not use if
 - height of row is really tall or variable (scroll bar will jump)
 - column width changes (should be fine with "fixedLayout")`,name:"optimisedRendering",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},getIdKey:{defaultValue:null,description:`A function that returns a unique ID for each of the data objects.
Same function signature as a map function.`,name:"getIdKey",required:!0,type:{name:"(datum: Datum, index: number, data: Datum[]) => string"}},onSelectionChange:{defaultValue:null,description:"A callback that is called whenever a user selects or unselects a row.",name:"onSelectionChange",required:!1,type:{name:"((event: MouseEvent | KeyboardEvent) => void)"}},onHeaderClick:{defaultValue:null,description:`Optional event handler called when a sortable column header gets clicked
Make sure that it doesn't change unecessarily by wrapping it in useCallback`,name:"onHeaderClick",required:!1,type:{name:"((columnName: string) => void)"}},columns:{defaultValue:null,description:`An array of objects which specifies attributes about each column of your
data. Each object has label, name and render attributes.`,name:"columns",required:!0,type:{name:"(SortableColumn<Datum> | NonSortableColumn<Datum>)[]"}},fixedLayout:{defaultValue:null,description:"Table fixed layout",name:"fixedLayout",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:j}=__STORYBOOK_MODULE_TEST__,ce={component:u,title:"Data/Data Table",argTypes:{onSelectionChange:{table:{disable:!0}},isSelectable:{name:"Selectable (onSelectionChange)",control:"boolean",description:"Toggle to enable selection checkboxes"},clickToLoad:{control:"boolean",description:"Require a click to load data (when using loader)"}},args:{onHeaderClick:j(),onSelectionChange:j(),isSelectable:!0,clickToLoad:!1}},p={argTypes:{clickToLoad:{table:{disable:!0}}},render:a=>{const{isSelectable:o,onSelectionChange:l,clickToLoad:r,...t}=a,n=o?l:void 0;return e.jsx(B,{children:i=>e.jsx(u,{...i,...t,onSelectionChange:n,columns:D})})}},h={render:a=>{const{isSelectable:o,onSelectionChange:l,...r}=a,t=o?l:void 0;return e.jsx(N,{children:n=>e.jsx(f,{...n,...r,onSelectionChange:t,columns:D})})}},b={render:a=>{const{isSelectable:o,onSelectionChange:l,...r}=a,t=o?l:void 0;return e.jsx(N,{children:n=>e.jsx(f,{...n,...r,onSelectionChange:t,loading:!0,columns:[...D,{label:"Column 6",name:"content6",render:i=>i.content6.complexValue}]})})}};var L,k,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    return <DataDecorator>
        {(props: CommonProps) => <DataTableComponent {...props} {...restArgs} onSelectionChange={finalOnSelectionChange} columns={columns} />}
      </DataDecorator>;
  }
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,q,V;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const {
      isSelectable,
      onSelectionChange,
      ...restArgs
    } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    return <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => <DataTableWithLoaderComponent {...props} {...restArgs} onSelectionChange={finalOnSelectionChange} columns={columns} />}
      </DataLoaderDecorator>;
  }
}`,...(V=(q=h.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var A,O,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const {
      isSelectable,
      onSelectionChange,
      ...restArgs
    } = args;
    const finalOnSelectionChange = isSelectable ? onSelectionChange : undefined;
    return <DataLoaderDecorator>
        {(props: CommonProps & WrapperProps<DataType>) => <DataTableWithLoaderComponent {...props} {...restArgs} onSelectionChange={finalOnSelectionChange} loading columns={[...columns, {
        label: 'Column 6',
        name: 'content6',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore we know it doesn't exist, it's on purpose
        render: row => row.content6.complexValue
      }]} />}
      </DataLoaderDecorator>;
  }
}`,...(I=(O=b.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const de=["DataTable","DataTableWithLoader","DataTableColumnLoading"];export{p as DataTable,b as DataTableColumnLoading,h as DataTableWithLoader,de as __namedExportsOrder,ce as default};
