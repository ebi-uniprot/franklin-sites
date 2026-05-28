import{o as e}from"./preload-helper-BKhVKv2_.js";import{t}from"./iframe-D-mTk88w.js";import{U as n,t as r}from"./components-DoNN6ors.js";import{n as i,r as a}from"./tree-data-qFdNmP9X.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{r(),i(),o=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Forms/Tree Select`,component:n,argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]}},args:{label:`Select`,variant:`primary`,onSelect:d()}},p={render:({label:e,variant:t,onSelect:r})=>(0,o.jsx)(n,{label:e,data:a,onSelect:r,variant:t})},m={render:({label:e,variant:t,onSelect:r})=>(0,o.jsx)(n,{label:e,data:a,onSelect:r,autocomplete:!0,autocompletePlaceholder:`Search for item`,autocompleteFilter:!0,variant:t})},p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    label,
    variant,
    onSelect
  }) => <TS label={label} data={treeData} onSelect={onSelect} variant={variant} />
}`,...(c=p.parameters)==null||(c=c.docs)==null?void 0:c.source}}},m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    label,
    variant,
    onSelect
  }) => <TS label={label} data={treeData} onSelect={onSelect} autocomplete autocompletePlaceholder="Search for item" autocompleteFilter variant={variant} />
}`,...(u=m.parameters)==null||(u=u.docs)==null?void 0:u.source}}},h=[`TreeSelect`,`TreeSelectWithAutocomplete`]}))();export{p as TreeSelect,m as TreeSelectWithAutocomplete,h as __namedExportsOrder,f as default};