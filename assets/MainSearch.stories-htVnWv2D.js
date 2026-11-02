import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{M as t,n}from"./iframe-DP8P0iO7.js";import{n as r,t as i}from"./main-search-vAeEsKKA.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),r(),o=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={uniprotkb:`UniProtKB`,uniref:`UniRef`,uniparc:`UniParc`,proteomes:`Proteomes`,publications:`Publications`,keywords:`Keywords`,toolResults:`Tool results`},p=({withNamespace:e,withSecondaryButtons:t,onAdvancedClick:n,onListClick:r,onSubmit:s})=>{let[c,l]=(0,a.useState)(``),[u,d]=(0,a.useState)(`uniprotkb`),p={};return e&&(p.namespaces=f,p.selectedNamespace=u,p.onNamespaceChange=e=>d(e)),t&&(p.secondaryButtons=[{label:`Advanced`,action:n},{label:`List`,action:r}]),(0,o.jsx)(i,{searchTerm:c,onTextChange:e=>l(e),onSubmit:s,...p})},m={title:`Forms/Main Search`,component:i,args:{withNamespace:!1,withSecondaryButtons:!1,onAdvancedClick:d(),onListClick:d(),onSubmit:d()},render:p},h={},g=[`MainSearch`,`HeroHeader`],p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(c=p.parameters)==null||(c=c.docs)==null?void 0:c.source}}},h.parameters={...h.parameters,docs:{...(l=h.parameters)==null?void 0:l.docs,source:{originalSource:`{}`,...(u=h.parameters)==null||(u=u.docs)==null?void 0:u.source}}}})))()}_();export{h as HeroHeader,p as MainSearch,g as __namedExportsOrder,m as default};