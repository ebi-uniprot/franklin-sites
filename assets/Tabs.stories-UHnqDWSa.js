import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{M as n,n as r}from"./iframe-Dc272sxP.js";import{n as i,r as a}from"./dist-D4P6C2Np.js";import{t as o}from"./classnames-DQoS6hca.js";import{n as s,t as c}from"./cog-BR6aw6bS.js";var l,u,d,f,p;function m(){return(m=t((()=>{l=n(),u=e(o(),1),d=r(),f=e=>null,p=({children:e,active:t,className:n,bordered:r=!1,...i})=>{let a=(0,l.useId)(),o=t!==void 0,s=l.Children.toArray(e).filter(Boolean).map(({props:{id:e,...t}},n)=>({id:e===void 0?`${n}`:e,...t})),[c,f]=(0,l.useState)(()=>{if(o)return t;let e=s.filter(e=>e.defaultSelected);return e.length?(e.length>1&&console.warn(`a <Tabs> component has been rendered with ${e.length} <Tab defaultSelected> children. There should be a maximum of 1 default selected child.`),e[0].id):s[0].id}),p=(0,l.useCallback)(e=>{if(o||!(e.currentTarget instanceof HTMLElement))return;let{target:t}=e.currentTarget.dataset;e&&t!==void 0&&(!(`key`in e)||e.key===`Enter`||e.key===` `)&&f(t)},[o]),m=o?t:c,h=s.find(e=>e.id===m);if(!h)throw Error(`Could not find a tab with the id: "${c}"`);let g;g=s.some(({cache:e})=>e)?s.map(e=>{let t=e.id===h.id;return(e.cache||t)&&(0,d.jsx)(`div`,{style:{display:t?`block`:`none`},children:e.children},e.id)}):h.children;let _={};return o||(_={onClick:p,onKeyPress:p,tabIndex:0}),(0,d.jsxs)(`div`,{className:(0,u.default)(`tabs`,n),...i,children:[(0,d.jsx)(`div`,{className:`tabs__header`,role:`tablist`,children:s.map(({title:e,id:t,className:n,disabled:i=!1,children:o,defaultSelected:s,cache:c,...l})=>e&&(0,d.jsx)(`div`,{"data-testid":`tab-title`,"data-target":t,role:`tab`,"aria-controls":a,className:(0,u.default)(`tabs__header__item`,{"tabs__header__item--bordered":r,"tabs__header__item--disabled":i,"tabs__header__item--active":t===m},n),"aria-disabled":i?!0:void 0,...i?{}:_,...l,children:e},t))}),(0,d.jsx)(`div`,{role:`tabpanel`,id:a,"data-testid":`tab-content`,children:g})]})};try{f.displayName=`Tab`,f.__docgenInfo={description:``,displayName:`Tab`,filePath:`/builds/uniprot/front-end/franklin-sites/src/components/tabs.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Title of that tab`,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Optional ID for that tab, one of the expected options for the parent <Tabs> component`,name:`id`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`},{fileName:`franklin-sites/node_modules/.pnpm/@types+react@19.3.0/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`Content of that tab`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},defaultSelected:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Choose that tab as the default to be displayed`,name:`defaultSelected`,required:!1,tags:{},type:{name:`boolean`}},cache:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Option to render and hide tab (display:none) rather than remove from the DOM`,name:`cache`,required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Option to disable selection of tab`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{p.displayName=`Tabs`,p.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/builds/uniprot/front-end/franklin-sites/src/components/tabs.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`<Tab> elements defining the content and title of each tab`,name:`children`,required:!0,tags:{},type:{name:`ReactElement<TabProps, string | JSXElementConstructor<any>> | (ReactElement<TabProps, string | JSXElementConstructor<any>> | null)[] | null`}},active:{defaultValue:null,declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Optional way of controling the tabs from the outside of this component by
assigning here a value corresponding to an 'id' prop of one of the child
<Tab>`,name:`active`,required:!1,tags:{},type:{name:`string | number`}},bordered:{defaultValue:{value:`false`},declarations:[{fileName:`franklin-sites/src/components/tabs.tsx`,name:`TypeLiteral`}],description:`Optional bordered styling of tab headers`,name:`bordered`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{h=n(),i(),m(),s(),g=r(),k={title:`Layout/Tabs`},A=()=>(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{title:(0,g.jsxs)(g.Fragment,{children:[`Title 1`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,g.jsx)(f,{title:`Title 2`,children:a({count:2})}),(0,g.jsx)(f,{disabled:!0,title:`Title 3 (disabled)`,children:a({count:2})})]}),j=()=>(0,g.jsxs)(p,{bordered:!0,children:[(0,g.jsx)(f,{title:(0,g.jsxs)(g.Fragment,{children:[`Title 1`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,g.jsx)(f,{title:`Title 2`,children:a({count:2})}),(0,g.jsx)(f,{title:`Title 3`,children:a({count:2})})]}),M=()=>(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{title:(0,g.jsxs)(g.Fragment,{children:[`Title 1`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,g.jsx)(f,{title:`Title 2`,children:a({count:2})}),(0,g.jsx)(f,{title:`Title 3 (default)`,defaultSelected:!0,children:a({count:2})})]}),N=[`option a`,`option 2`,`option III`],P=()=>{let e=(0,h.useRef)(void 0),[t,n]=(0,h.useState)(N[0]);return(0,h.useEffect)(()=>(e.current=window.setInterval(()=>{n(N[Math.floor(Math.random()*N.length)])},3e3),()=>clearInterval(e.current)),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`p`,{children:[`Selected: "`,t,`"`]}),(0,g.jsx)(`p`,{children:`Will change automatically every 3 seconds`}),(0,g.jsxs)(p,{active:t,children:[(0,g.jsx)(f,{title:(0,g.jsxs)(g.Fragment,{children:[`Title 1 (not interactive)`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),id:N[0],children:a({count:2})}),(0,g.jsx)(f,{title:`Title 2 (not interactive)`,id:N[1],children:a({count:2})}),(0,g.jsx)(f,{title:`Title 3 (not interactive)`,id:N[2],children:a({count:2})})]})]})},F=()=>{let e=(0,h.useRef)(void 0),[t,n]=(0,h.useState)(N[0]);return(0,h.useEffect)(()=>(e.current=window.setInterval(()=>{n(N[Math.floor(Math.random()*(N.length-1))])},3e3),()=>clearInterval(e.current)),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`p`,{children:[`Selected: "`,t,`"`]}),(0,g.jsx)(`p`,{children:`Will change automatically every 3 seconds`}),(0,g.jsxs)(p,{active:t,children:[(0,g.jsx)(f,{id:N[0],title:(0,g.jsxs)(`a`,{href:`https://www.uniprot.org`,children:[`Title 1 (not interactive)`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,g.jsx)(f,{id:N[1],title:(0,g.jsx)(`a`,{href:`https://www.uniprot.org`,children:`Title 2 (not interactive)`}),children:a({count:2})}),(0,g.jsx)(f,{id:N[2],disabled:!0,title:(0,g.jsx)(`a`,{href:`https://www.uniprot.org`,children:`Title 3 (disabled)`}),children:a({count:2})})]})]})},I=()=>(0,g.jsx)(P,{}),L=()=>(0,g.jsx)(F,{}),R=()=>(0,g.jsxs)(p,{children:[(0,g.jsx)(f,{cache:!0,title:(0,g.jsxs)(g.Fragment,{children:[`Title 1`,(0,g.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,g.jsx)(f,{title:`Title 2`,children:a({count:2})}),(0,g.jsx)(f,{cache:!0,title:`Title 3`,children:a({count:2})})]}),z=[`UnmanagedTabs`,`UnmanagedTabsBoxStyling`,`UnmanagedTabsWithDifferentDefault`,`ManagedTabs`,`ManagedTabsWithLinks`,`CachedTabs`],A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Tabs>
    <Tab title={<>
          Title 1
          <ConfigureIcon style={{
      verticalAlign: 'text-top'
    }} width={16} height={16} />
        </>}>
      {loremIpsum({
      count: 2
    })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({
      count: 2
    })}</Tab>
    <Tab disabled title="Title 3 (disabled)">
      {loremIpsum({
      count: 2
    })}
    </Tab>
  </Tabs>`,...(v=A.parameters)==null||(v=v.docs)==null?void 0:v.source}}},j.parameters={...j.parameters,docs:{...(y=j.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Tabs bordered>
    <Tab title={<>
          Title 1
          <ConfigureIcon style={{
      verticalAlign: 'text-top'
    }} width={16} height={16} />
        </>}>
      {loremIpsum({
      count: 2
    })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({
      count: 2
    })}</Tab>
    <Tab title="Title 3">{loremIpsum({
      count: 2
    })}</Tab>
  </Tabs>`,...(b=j.parameters)==null||(b=b.docs)==null?void 0:b.source}}},M.parameters={...M.parameters,docs:{...(x=M.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Tabs>
    <Tab title={<>
          Title 1
          <ConfigureIcon style={{
      verticalAlign: 'text-top'
    }} width={16} height={16} />
        </>}>
      {loremIpsum({
      count: 2
    })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({
      count: 2
    })}</Tab>
    <Tab title="Title 3 (default)" defaultSelected>
      {loremIpsum({
      count: 2
    })}
    </Tab>
  </Tabs>`,...(S=M.parameters)==null||(S=S.docs)==null?void 0:S.source}}},I.parameters={...I.parameters,docs:{...(C=I.parameters)==null?void 0:C.docs,source:{originalSource:`() => <ManagedTabsComponent />`,...(w=I.parameters)==null||(w=w.docs)==null?void 0:w.source}}},L.parameters={...L.parameters,docs:{...(T=L.parameters)==null?void 0:T.docs,source:{originalSource:`() => <ManagedTabsWithLinksComponent />`,...(E=L.parameters)==null||(E=E.docs)==null?void 0:E.source}}},R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Tabs>
    <Tab cache title={<>
          Title 1
          <ConfigureIcon style={{
      verticalAlign: 'text-top'
    }} width={16} height={16} />
        </>}>
      {loremIpsum({
      count: 2
    })}
    </Tab>
    <Tab title="Title 2">{loremIpsum({
      count: 2
    })}</Tab>
    <Tab cache title="Title 3">
      {loremIpsum({
      count: 2
    })}
    </Tab>
  </Tabs>`,...(O=R.parameters)==null||(O=O.docs)==null?void 0:O.source}}}})))()}B();export{R as CachedTabs,I as ManagedTabs,L as ManagedTabsWithLinks,A as UnmanagedTabs,j as UnmanagedTabsBoxStyling,M as UnmanagedTabsWithDifferentDefault,z as __namedExportsOrder,k as default};