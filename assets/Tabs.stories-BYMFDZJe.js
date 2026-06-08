import{l as e,o as t}from"./preload-helper-BKhVKv2_.js";import{W as n,t as r}from"./iframe-BfRUjcDD.js";import{n as i,r as a}from"./dist-CIQagKCY.js";import{J as o,Y as s,j as c,t as l}from"./components-xiFd1cbH.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;t((()=>{u=e(n(),1),i(),l(),d=r(),w={title:`Layout/Tabs`},T=()=>(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{title:(0,d.jsxs)(d.Fragment,{children:[`Title 1`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,d.jsx)(o,{title:`Title 2`,children:a({count:2})}),(0,d.jsx)(o,{disabled:!0,title:`Title 3 (disabled)`,children:a({count:2})})]}),E=()=>(0,d.jsxs)(s,{bordered:!0,children:[(0,d.jsx)(o,{title:(0,d.jsxs)(d.Fragment,{children:[`Title 1`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,d.jsx)(o,{title:`Title 2`,children:a({count:2})}),(0,d.jsx)(o,{title:`Title 3`,children:a({count:2})})]}),D=()=>(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{title:(0,d.jsxs)(d.Fragment,{children:[`Title 1`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,d.jsx)(o,{title:`Title 2`,children:a({count:2})}),(0,d.jsx)(o,{title:`Title 3 (default)`,defaultSelected:!0,children:a({count:2})})]}),O=[`option a`,`option 2`,`option III`],k=()=>{let e=(0,u.useRef)(void 0),[t,n]=(0,u.useState)(O[0]);return(0,u.useEffect)(()=>(e.current=window.setInterval(()=>{n(O[Math.floor(Math.random()*O.length)])},3e3),()=>clearInterval(e.current)),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[`Selected: "`,t,`"`]}),(0,d.jsx)(`p`,{children:`Will change automatically every 3 seconds`}),(0,d.jsxs)(s,{active:t,children:[(0,d.jsx)(o,{title:(0,d.jsxs)(d.Fragment,{children:[`Title 1 (not interactive)`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),id:O[0],children:a({count:2})}),(0,d.jsx)(o,{title:`Title 2 (not interactive)`,id:O[1],children:a({count:2})}),(0,d.jsx)(o,{title:`Title 3 (not interactive)`,id:O[2],children:a({count:2})})]})]})},A=()=>{let e=(0,u.useRef)(void 0),[t,n]=(0,u.useState)(O[0]);return(0,u.useEffect)(()=>(e.current=window.setInterval(()=>{n(O[Math.floor(Math.random()*(O.length-1))])},3e3),()=>clearInterval(e.current)),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`p`,{children:[`Selected: "`,t,`"`]}),(0,d.jsx)(`p`,{children:`Will change automatically every 3 seconds`}),(0,d.jsxs)(s,{active:t,children:[(0,d.jsx)(o,{id:O[0],title:(0,d.jsxs)(`a`,{href:`https://www.uniprot.org`,children:[`Title 1 (not interactive)`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,d.jsx)(o,{id:O[1],title:(0,d.jsx)(`a`,{href:`https://www.uniprot.org`,children:`Title 2 (not interactive)`}),children:a({count:2})}),(0,d.jsx)(o,{id:O[2],disabled:!0,title:(0,d.jsx)(`a`,{href:`https://www.uniprot.org`,children:`Title 3 (disabled)`}),children:a({count:2})})]})]})},j=()=>(0,d.jsx)(k,{}),M=()=>(0,d.jsx)(A,{}),N=()=>(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{cache:!0,title:(0,d.jsxs)(d.Fragment,{children:[`Title 1`,(0,d.jsx)(c,{style:{verticalAlign:`text-top`},width:16,height:16})]}),children:a({count:2})}),(0,d.jsx)(o,{title:`Title 2`,children:a({count:2})}),(0,d.jsx)(o,{cache:!0,title:`Title 3`,children:a({count:2})})]}),T.parameters={...T.parameters,docs:{...(f=T.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(p=T.parameters)==null||(p=p.docs)==null?void 0:p.source}}},E.parameters={...E.parameters,docs:{...(m=E.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Tabs bordered>
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
  </Tabs>`,...(h=E.parameters)==null||(h=h.docs)==null?void 0:h.source}}},D.parameters={...D.parameters,docs:{...(g=D.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(_=D.parameters)==null||(_=_.docs)==null?void 0:_.source}}},j.parameters={...j.parameters,docs:{...(v=j.parameters)==null?void 0:v.docs,source:{originalSource:`() => <ManagedTabsComponent />`,...(y=j.parameters)==null||(y=y.docs)==null?void 0:y.source}}},M.parameters={...M.parameters,docs:{...(b=M.parameters)==null?void 0:b.docs,source:{originalSource:`() => <ManagedTabsWithLinksComponent />`,...(x=M.parameters)==null||(x=x.docs)==null?void 0:x.source}}},N.parameters={...N.parameters,docs:{...(S=N.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(C=N.parameters)==null||(C=C.docs)==null?void 0:C.source}}},P=[`UnmanagedTabs`,`UnmanagedTabsBoxStyling`,`UnmanagedTabsWithDifferentDefault`,`ManagedTabs`,`ManagedTabsWithLinks`,`CachedTabs`]}))();export{N as CachedTabs,j as ManagedTabs,M as ManagedTabsWithLinks,T as UnmanagedTabs,E as UnmanagedTabsBoxStyling,D as UnmanagedTabsWithDifferentDefault,P as __namedExportsOrder,w as default};