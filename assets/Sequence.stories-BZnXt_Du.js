import{l as e,o as t}from"./preload-helper-BKhVKv2_.js";import{W as n,t as r}from"./iframe-Dw4XAZOm.js";import{s as i}from"./main-search-BUYRuUv8.js";import{$ as a,Z as o,bt as s,t as c,xt as l}from"./components-BXRiKLRr.js";var u,d=t((()=>{u=`MFNFPHPAIDLASRMKSSPLMAGGSSSASSEDLFSPPMMEDLDTPMTEYPMGSPPRMPYRGEDIEIAFLRSEASIKKSSLFNDKFAATLDDLSARPIDSASLIGKLQSMTRSVREILDSGGEDIEIAFLRSEASIKKSSLFNDKFAATLDDLSARPIDSASLIGKLQSMTRSVREILDSGDQLVHEDGPQEILKQFVRVVNKHLCQDEDIHTVLAPLALEPEEKFHIIQTYYQAISMTQFDQLVHEDGPQEILKQFVRVVNKHLCQDEDIHTVLAPLALEPEEKFHIIQTYYQAISMTQFVSPKWTSSLLSDALCRRANIVTVFNGQGVEGYFSELQHLYDTYGGLLAEPLYALSKQLKGVSPKWTSSLLSDALCRRANIVTVFNGQGVEGYFSELQHLYDTYGGLLAEPLYALSKQLKGLASDVRAQDMYPHGLDVIGWLENPEARPSTDYLLSAPVSQPLIGLVQLLNYAITCKILNKLASDVRAQDMYPHGLDVIGWLENPEARPSTDYLLSAPVSQPLIGLVQLLNYAITCKILNKSPGEFARHLSGSAGHSQGIVVAAMLATVVSWPTFFDAASTALQVLFWIGCRSQQCYPSHSSPGEFARHLSGSAGHSQGIVVAAMLATVVSWPTFFDAASTALQVLFWIGCRSQQCYPSHSIPPSLVDQSERLSPMLSVKGASRESLLKYLDEHNRHLPPAQQGSLALINGRQQFVVAGNPIPPSLVDQSERLSPMLSVKGASRESLLKYLDEHNRHLPPAQQGSLALINGRQQFVVAGNPLSLYAFANKLRAASNNSSTTNTARVPFSQRPLLITARFLPISVPFHTSLLEDAEAQILEDED`})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{f=e(n(),1),s(),c(),d(),p=r(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={component:o,title:`Biocomponents/Sequence`,args:{onBlastClick:w(),onCopy:w()}},E={render:({onBlastClick:e,onCopy:t})=>(0,p.jsx)(o,{sequence:u,accession:`P05067`,downloadUrl:`https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta`,onBlastClick:e,onCopy:t,addToBasketButton:(0,p.jsx)(i,{variant:`tertiary`,onClick:w(),children:`Add To Basket`})})},D={render:()=>(0,p.jsx)(o,{sequence:u,showActionBar:!1})},O={render:()=>(0,p.jsx)(o,{sequence:u,infoData:[{title:`Item 1`,content:(0,p.jsx)(`div`,{children:`Some content`})},{title:`Another item`,content:(0,p.jsx)(`div`,{children:`Some more content`})}],isCollapsible:!0})},k=()=>{let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(!1);return(0,p.jsx)(o,{sequence:e,isLoading:n,onShowSequence:async()=>{r(!0),await l(2e3),t(u),r(!1)}})},A={render:k},j={render:({onBlastClick:e})=>(0,p.jsx)(a,{accession:`P05067`,onBlastClick:e})},E.parameters={...E.parameters,docs:{...(m=E.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    onBlastClick,
    onCopy
  }) => <SequenceComponent sequence={sequenceData} accession="P05067" downloadUrl="https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta" onBlastClick={onBlastClick} onCopy={onCopy} addToBasketButton={<Button variant="tertiary" onClick={fn()}>
          Add To Basket
        </Button>} />
}`,...(h=E.parameters)==null||(h=h.docs)==null?void 0:h.source}}},D.parameters={...D.parameters,docs:{...(g=D.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <SequenceComponent sequence={sequenceData} showActionBar={false} />
}`,...(_=D.parameters)==null||(_=_.docs)==null?void 0:_.source}}},O.parameters={...O.parameters,docs:{...(v=O.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      title: 'Item 1',
      content: <div>Some content</div>
    }, {
      title: 'Another item',
      content: <div>Some more content</div>
    }];
    return <SequenceComponent sequence={sequenceData} infoData={data} isCollapsible />;
  }
}`,...(y=O.parameters)==null||(y=y.docs)==null?void 0:y.source}}},A.parameters={...A.parameters,docs:{...(b=A.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: SequenceAsyncLoadRender
}`,...(x=A.parameters)==null||(x=x.docs)==null?void 0:x.source}}},j.parameters={...j.parameters,docs:{...(S=j.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    onBlastClick
  }) => <SequenceToolsComponent accession="P05067" onBlastClick={onBlastClick} />
}`,...(C=j.parameters)==null||(C=C.docs)==null?void 0:C.source}}},M=[`Sequence`,`SequenceWithoutActionBar`,`SequenceCollapsableWithInfoData`,`SequenceAsyncLoad`,`SequenceTools`]}))();export{E as Sequence,A as SequenceAsyncLoad,O as SequenceCollapsableWithInfoData,j as SequenceTools,D as SequenceWithoutActionBar,M as __namedExportsOrder,T as default};