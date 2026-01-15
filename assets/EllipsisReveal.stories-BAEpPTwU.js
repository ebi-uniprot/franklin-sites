import{r as a,j as e}from"./iframe-PpvKiT-0.js";import{g as n}from"./lipsum-Bi7KVxrj.js";import{c as f}from"./index-B72jJjoP.js";import{B as y}from"./button-B6k-rT8i.js";import"./preload-helper-BDBacUwf.js";import"./index-BUaT88Mv.js";const c=a.createContext(null);c.displayName="EllipsisRevealContext";const _=({children:t})=>{const p=a.useState(new Set);return e.jsx(c.Provider,{value:p,children:t})},s=({children:t,className:p,title:E,contextKey:o,...S})=>{const r=a.useContext(c),R=r&&o&&r[0].has(o),[h,C]=a.useState(!1);return h||R?e.jsx(e.Fragment,{children:t}):e.jsx(y,{variant:"tertiary",onClick:()=>{C(!0),o&&r&&r[1](j=>new Set([...j,o]))},className:f(p,"ellipsis-reveal"),title:E||"Show more","aria-expanded":"false",...S,children:"[...]"})};s.Provider=_;try{ellipsisreveal.displayName="ellipsisreveal",ellipsisreveal.__docgenInfo={description:"",displayName:"ellipsisreveal",props:{contextKey:{defaultValue:null,description:"",name:"contextKey",required:!1,type:{name:"string"}}}}}catch{}const I={title:"Data/Ellipsis Reveal",decorators:[]},l=()=>e.jsxs(e.Fragment,{children:["Some text"," ",e.jsx(s,{children:n()})]}),i=()=>e.jsxs(s.Provider,{children:[e.jsxs("p",{children:["Some text"," ",e.jsx(s,{contextKey:"group",children:n()})]}),e.jsxs("p",{children:["Some other text"," ",e.jsx(s,{contextKey:"group",children:n()})]}),e.jsxs("p",{children:["Some other text again"," ",e.jsx(s,{contextKey:"group",children:n()})]})]});var m,d,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => <>
    Some text{' '}
    <EllipsisRevealComponent>{getLipsumSentences()}</EllipsisRevealComponent>
  </>`,...(x=(d=l.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var u,v,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => <EllipsisRevealComponent.Provider>
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
  </EllipsisRevealComponent.Provider>`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const B=["EllipsisReveal","EllipsisRevealInGroup"];export{l as EllipsisReveal,i as EllipsisRevealInGroup,B as __namedExportsOrder,I as default};
