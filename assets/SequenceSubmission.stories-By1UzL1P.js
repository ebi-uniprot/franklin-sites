import{l as e,o as t}from"./preload-helper-BKhVKv2_.js";import{W as n,t as r}from"./iframe-BfRUjcDD.js";import{Z as i,t as a}from"./components-xiFd1cbH.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{o=e(n(),1),a(),s=r(),w={title:`Forms/Sequence Submission`,component:i},T={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`})},E={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:`ACTGUACTGUACTGU+`})},D=`> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
`,O={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:D})},k=`> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
> sequence_3
ACTGUACTGUACTGU
`,A={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:k})},j=`> sequence_1
ACTGUACTGUACTGU`,M={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:j,minimumSequences:2})},N=`> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
> sequence_3
ACTGCTGUAGU
> sequence_4
GUACTGU
`,P={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:N,maximumSequences:3})},F=`> sequence 1
ACTGUACTGUACTGU
> sequence 2
ACTGAUTTGUATTGUUUGU
> sequence 3
ACTGCTGUAGU
> sequence_4
GUACTGU
`,I={render:()=>(0,s.jsx)(i,{placeholder:`Enter a sequence...`,defaultValue:F,noDuplicateID:!0})},L=()=>{let[e,t]=(0,o.useState)(`ACTG`),[n,r]=(0,o.useState)();return(0,s.jsxs)(`form`,{children:[(0,s.jsx)(i,{placeholder:`Enter a sequence...`,value:e,onChange:e=>{var n,i;t((n=e[0])==null?void 0:n.sequence),r((i=e[0])==null?void 0:i.likelyType)}}),(0,s.jsxs)(`p`,{children:[`Sequence:`,(0,s.jsx)(`output`,{children:e})]}),(0,s.jsxs)(`p`,{children:[`Likely type:`,(0,s.jsx)(`output`,{children:n})]}),(0,s.jsx)(`input`,{type:`reset`,onClick:e=>{e.preventDefault(),t(``)}}),(0,s.jsx)(`input`,{type:`button`,value:`async load sequence`,onClick:()=>t(`ACTGUACTGUACTGU`)})]})},R={render:L},T.parameters={...T.parameters,docs:{...(c=T.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." />
}`,...(l=T.parameters)==null||(l=l.docs)==null?void 0:l.source}}},E.parameters={...E.parameters,docs:{...(u=E.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue="ACTGUACTGUACTGU+" />
}`,...(d=E.parameters)==null||(d=d.docs)==null?void 0:d.source}}},O.parameters={...O.parameters,docs:{...(f=O.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue={multipleSequences1} />
}`,...(p=O.parameters)==null||(p=p.docs)==null?void 0:p.source}}},A.parameters={...A.parameters,docs:{...(m=A.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue={multipleSequences2} />
}`,...(h=A.parameters)==null||(h=h.docs)==null?void 0:h.source}}},M.parameters={...M.parameters,docs:{...(g=M.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue={multipleSequences3} minimumSequences={2} />
}`,...(_=M.parameters)==null||(_=_.docs)==null?void 0:_.source}}},P.parameters={...P.parameters,docs:{...(v=P.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue={multipleSequences4} maximumSequences={3} />
}`,...(y=P.parameters)==null||(y=y.docs)==null?void 0:y.source}}},I.parameters={...I.parameters,docs:{...(b=I.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <SequenceSubmissionComponent placeholder="Enter a sequence..." defaultValue={multipleSequences5} noDuplicateID />
}`,...(x=I.parameters)==null||(x=x.docs)==null?void 0:x.source}}},R.parameters={...R.parameters,docs:{...(S=R.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: DynamicallyChangeValueRender
}`,...(C=R.parameters)==null||(C=C.docs)==null?void 0:C.source}}},z=[`SequenceSubmission`,`WithInvalidSequenceError`,`WithMultipleSequences`,`WithMultipleSequencesWarning`,`WithTooFewSequencesError`,`WithTooManySequencesError`,`WithDuplicateIdentifiersError`,`DynamicallyChangeValue`]}))();export{R as DynamicallyChangeValue,T as SequenceSubmission,I as WithDuplicateIdentifiersError,E as WithInvalidSequenceError,O as WithMultipleSequences,A as WithMultipleSequencesWarning,M as WithTooFewSequencesError,P as WithTooManySequencesError,z as __namedExportsOrder,w as default};