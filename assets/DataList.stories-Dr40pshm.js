import{o as e}from"./preload-helper-BKhVKv2_.js";import{W as t,t as n}from"./iframe-BE2qzWq5.js";import{t as r,vt as i,wt as a,yt as o}from"./components-zszejkVd.js";import{i as s,n as c,t as l}from"./DataDecorator-Dn4k7-_5.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{t(),r(),s(),u=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v=(e,t=!1)=>n=>{let r=(0,u.jsxs)(u.Fragment,{children:[e&&(0,u.jsx)(`input`,{type:`checkbox`,style:{margin:`15px 5px 0 0`}}),Object.values(n)]});return t?(0,u.jsx)(a,{children:r}):r},y={component:i,title:`Data/Data List`,argTypes:{onSelectionChange:{table:{disable:!0}},isSelectable:{name:`Selectable (onSelectionChange)`,control:`boolean`,description:`Toggle to enable selection checkbox`},clickToLoad:{control:`boolean`,description:`Require a click to load data (when using loader)`}},args:{onSelectionChange:_(),isSelectable:!0,clickToLoad:!1}},b={argTypes:{clickToLoad:{table:{disable:!0}}},render:e=>{let{isSelectable:t,onSelectionChange:n,clickToLoad:r,...a}=e,o=t?n:void 0,s=v(!!o);return(0,u.jsx)(l,{children:e=>(0,u.jsx)(i,{...e,...a,onSelectionChange:o,dataRenderer:s})})}},x=({props:e,dataRenderer:t})=>(0,u.jsx)(o,{...e,dataRenderer:t,clickToLoad:e.clickToLoad}),S={render:e=>{let{isSelectable:t,onSelectionChange:n,...r}=e,i=t?n:void 0,a=v(!!i);return(0,u.jsx)(c,{children:e=>(0,u.jsx)(x,{props:{...e,...r,onSelectionChange:i},dataRenderer:a})})}},C={render:e=>{let{isSelectable:t,onSelectionChange:n,...r}=e,i=t?n:void 0,a=v(!!i,!0);return(0,u.jsx)(c,{children:e=>(0,u.jsx)(x,{props:{...e,...r,onSelectionChange:i},dataRenderer:a})})}},b.parameters={...b.parameters,docs:{...(d=b.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=b.parameters)==null||(f=f.docs)==null?void 0:f.source}}},S.parameters={...S.parameters,docs:{...(p=S.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=S.parameters)==null||(m=m.docs)==null?void 0:m.source}}},C.parameters={...C.parameters,docs:{...(h=C.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=C.parameters)==null||(g=g.docs)==null?void 0:g.source}}},w=[`DataList`,`DataListWithLoader`,`DataListWithLoaderAndCards`]}))();export{b as DataList,S as DataListWithLoader,C as DataListWithLoaderAndCards,w as __namedExportsOrder,y as default};