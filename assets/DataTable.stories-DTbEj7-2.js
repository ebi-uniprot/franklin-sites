import{o as e}from"./preload-helper-BKhVKv2_.js";import{t}from"./iframe-Dw4XAZOm.js";import{_t as n,gt as r,t as i}from"./components-BXRiKLRr.js";import{i as a,n as o,r as s,t as c}from"./DataDecorator-BTNQ7CVI.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{i(),a(),l=t(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={component:r,title:`Data/Data Table`,argTypes:{onSelectionChange:{table:{disable:!0}},isSelectable:{name:`Selectable (onSelectionChange)`,control:`boolean`,description:`Toggle to enable selection checkboxes`},clickToLoad:{control:`boolean`,description:`Require a click to load data (when using loader)`}},args:{onHeaderClick:g(),onSelectionChange:g(),isSelectable:!0,clickToLoad:!1}},v={argTypes:{clickToLoad:{table:{disable:!0}}},render:e=>{let{isSelectable:t,onSelectionChange:n,clickToLoad:i,...a}=e,o=t?n:void 0;return(0,l.jsx)(c,{children:e=>(0,l.jsx)(r,{...e,...a,onSelectionChange:o,columns:s})})}},y={render:e=>{let{isSelectable:t,onSelectionChange:r,...i}=e,a=t?r:void 0;return(0,l.jsx)(o,{children:e=>(0,l.jsx)(n,{...e,...i,onSelectionChange:a,columns:s})})}},b={render:e=>{let{isSelectable:t,onSelectionChange:r,...i}=e,a=t?r:void 0;return(0,l.jsx)(o,{children:e=>(0,l.jsx)(n,{...e,...i,onSelectionChange:a,loading:!0,columns:[...s,{label:`Column 6`,name:`content6`,render:e=>e.content6.complexValue}]})})}},v.parameters={...v.parameters,docs:{...(u=v.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=v.parameters)==null||(d=d.docs)==null?void 0:d.source}}},y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(p=y.parameters)==null||(p=p.docs)==null?void 0:p.source}}},b.parameters={...b.parameters,docs:{...(m=b.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=b.parameters)==null||(h=h.docs)==null?void 0:h.source}}},x=[`DataTable`,`DataTableWithLoader`,`DataTableColumnLoading`]}))();export{v as DataTable,b as DataTableColumnLoading,y as DataTableWithLoader,x as __namedExportsOrder,_ as default};