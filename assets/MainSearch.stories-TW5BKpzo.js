import{l as e,o as t}from"./preload-helper-BKhVKv2_.js";import{W as n,t as r}from"./iframe-rpOogSoL.js";import{n as i,t as a}from"./main-search-rG1mliCW.js";var o,s,c,l,u,d,f,p,m,h,g,_;t((()=>{o=e(n(),1),i(),s=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={uniprotkb:`UniProtKB`,uniref:`UniRef`,uniparc:`UniParc`,proteomes:`Proteomes`,publications:`Publications`,keywords:`Keywords`,toolResults:`Tool results`},m=({withNamespace:e,withSecondaryButtons:t,onAdvancedClick:n,onListClick:r,onSubmit:i})=>{let[c,l]=(0,o.useState)(``),[u,d]=(0,o.useState)(`uniprotkb`),f={};return e&&(f.namespaces=p,f.selectedNamespace=u,f.onNamespaceChange=e=>d(e)),t&&(f.secondaryButtons=[{label:`Advanced`,action:n},{label:`List`,action:r}]),(0,s.jsx)(a,{searchTerm:c,onTextChange:e=>l(e),onSubmit:i,...f})},h={title:`Forms/Main Search`,component:a,args:{withNamespace:!1,withSecondaryButtons:!1,onAdvancedClick:f(),onListClick:f(),onSubmit:f()},render:m},g={},m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`({
  withNamespace,
  withSecondaryButtons,
  onAdvancedClick,
  onListClick,
  onSubmit
}: StoryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [namespace, setNamespace] = useState('uniprotkb');
  const props: Partial<MainSearchProps> = {};
  if (withNamespace) {
    props.namespaces = namespaces;
    props.selectedNamespace = namespace;
    props.onNamespaceChange = value => setNamespace(value);
  }
  if (withSecondaryButtons) {
    props.secondaryButtons = [{
      label: 'Advanced',
      action: onAdvancedClick
    }, {
      label: 'List',
      action: onListClick
    }];
  }
  return <MainSearchComponent searchTerm={searchTerm} onTextChange={value => setSearchTerm(value)} onSubmit={onSubmit} {...props} />;
}`,...(l=m.parameters)==null||(l=l.docs)==null?void 0:l.source}}},g.parameters={...g.parameters,docs:{...(u=g.parameters)==null?void 0:u.docs,source:{originalSource:`{}`,...(d=g.parameters)==null||(d=d.docs)==null?void 0:d.source}}},_=[`MainSearch`,`HeroHeader`]}))();export{g as HeroHeader,m as MainSearch,_ as __namedExportsOrder,h as default};