import{r as t,j as v}from"./iframe-DO3T59VR.js";import{M as l}from"./main-search-B1gP8U0C.js";import"./preload-helper-BDBacUwf.js";import"./dropdown-button-DBrcbbH0.js";import"./index-Cm7o6AEv.js";import"./button-BTwgKx7Q.js";/* empty css                 */const{fn:r}=__STORYBOOK_MODULE_TEST__,w={uniprotkb:"UniProtKB",uniref:"UniRef",uniparc:"UniParc",proteomes:"Proteomes",publications:"Publications",keywords:"Keywords",toolResults:"Tool results"},a=({withNamespace:d,withSecondaryButtons:S,onAdvancedClick:h,onListClick:b,onSubmit:T})=>{const[f,C]=t.useState(""),[k,N]=t.useState("uniprotkb"),e={};return d&&(e.namespaces=w,e.selectedNamespace=k,e.onNamespaceChange=n=>N(n)),S&&(e.secondaryButtons=[{label:"Advanced",action:h},{label:"List",action:b}]),v.jsx(l,{searchTerm:f,onTextChange:n=>C(n),onSubmit:T,...e})},L={title:"Forms/Main Search",component:l,args:{withNamespace:!1,withSecondaryButtons:!1,onAdvancedClick:r(),onListClick:r(),onSubmit:r()},render:a},s={};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["MainSearch","HeroHeader"];export{s as HeroHeader,a as MainSearch,A as __namedExportsOrder,L as default};
