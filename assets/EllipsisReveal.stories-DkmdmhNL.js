import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{M as n,n as r}from"./iframe-DP8P0iO7.js";import{t as i}from"./classnames-DQoS6hca.js";import{n as a,t as o}from"./button-B0qIjWyP.js";import{n as s,r as c}from"./lipsum-D9yW8jpe.js";var l,u,d,f,p,m;function h(){return(h=t((()=>{l=n(),u=e(i(),1),a(),d=r(),f=(0,l.createContext)(null),f.displayName=`EllipsisRevealContext`,p=({children:e})=>{let t=(0,l.useState)(new Set);return(0,d.jsx)(f.Provider,{value:t,children:e})},m=({children:e,className:t,title:n,contextKey:r,...i})=>{let a=(0,l.useContext)(f),s=a&&r&&a[0].has(r),[c,p]=(0,l.useState)(!1);return c||s?(0,d.jsx)(d.Fragment,{children:e}):(0,d.jsx)(o,{variant:`tertiary`,onClick:()=>{p(!0),r&&a&&a[1](e=>new Set([...e,r]))},className:(0,u.default)(t,`ellipsis-reveal`),title:n||`Show more`,"aria-expanded":`false`,...i,children:`[...]`})},m.Provider=p;try{m.displayName=`ellipsisreveal`,m.__docgenInfo={description:``,displayName:`ellipsisreveal`,filePath:`/builds/uniprot/front-end/franklin-sites/src/components/ellipsis-reveal.tsx`,methods:[],props:{contextKey:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/ellipsis-reveal.tsx`,name:`TypeLiteral`}],description:``,name:`contextKey`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{h(),c(),g=r(),x={title:`Data/Ellipsis Reveal`,decorators:[]},S=()=>(0,g.jsxs)(g.Fragment,{children:[`Some text`,` `,(0,g.jsx)(m,{children:s()})]}),C=()=>(0,g.jsxs)(m.Provider,{children:[(0,g.jsxs)(`p`,{children:[`Some text`,` `,(0,g.jsx)(m,{contextKey:`group`,children:s()})]}),(0,g.jsxs)(`p`,{children:[`Some other text`,` `,(0,g.jsx)(m,{contextKey:`group`,children:s()})]}),(0,g.jsxs)(`p`,{children:[`Some other text again`,` `,(0,g.jsx)(m,{contextKey:`group`,children:s()})]})]}),w=[`EllipsisReveal`,`EllipsisRevealInGroup`],S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`() => <>
    Some text{' '}
    <EllipsisRevealComponent>{getLipsumSentences()}</EllipsisRevealComponent>
  </>`,...(v=S.parameters)==null||(v=v.docs)==null?void 0:v.source}}},C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`() => <EllipsisRevealComponent.Provider>
    <p>
      Some text{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
    <p>
      Some other text{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
    <p>
      Some other text again{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
  </EllipsisRevealComponent.Provider>`,...(b=C.parameters)==null||(b=b.docs)==null?void 0:b.source}}}})))()}T();export{S as EllipsisReveal,C as EllipsisRevealInGroup,w as __namedExportsOrder,x as default};