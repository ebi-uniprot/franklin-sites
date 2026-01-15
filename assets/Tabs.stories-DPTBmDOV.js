import{r as i,j as e}from"./iframe-PpvKiT-0.js";import{d as r}from"./index-BUaT88Mv.js";import{c as A}from"./index-B72jJjoP.js";import{S as u}from"./cog-BZAycDk9.js";import"./preload-helper-BDBacUwf.js";const a=l=>null,c=({children:l,active:o,className:m,bordered:K=!1,...z})=>{const v=i.useId(),h=typeof o!="undefined",d=i.Children.toArray(l).filter(Boolean).map(({props:{id:t,...s}},I)=>({id:t===void 0?`${I}`:t,...s})),[S,G]=i.useState(()=>{if(h)return o;const t=d.filter(s=>s.defaultSelected);return t.length?(t.length>1&&console.warn(`a <Tabs> component has been rendered with ${t.length} <Tab defaultSelected> children. There should be a maximum of 1 default selected child.`),t[0].id):d[0].id}),w=i.useCallback(t=>{if(h||!(t.currentTarget instanceof HTMLElement))return;const{target:s}=t.currentTarget.dataset;t&&s!==void 0&&(!("key"in t)||t.key==="Enter"||t.key===" ")&&G(s)},[h]),C=h?o:S,j=d.find(t=>t.id===C);if(!j)throw new Error(`Could not find a tab with the id: "${S}"`);let y;d.some(({cache:t})=>t)?y=d.map(t=>{const s=t.id===j.id;return(t.cache||s)&&e.jsx("div",{style:{display:s?"block":"none"},children:t.children},t.id)}):y=j.children;let M={};return h||(M={onClick:w,onKeyPress:w,tabIndex:0}),e.jsxs("div",{className:A("tabs",m),...z,children:[e.jsx("div",{className:"tabs__header",role:"tablist",children:d.map(({title:t,id:s,className:I,disabled:_=!1,children:ae,defaultSelected:re,cache:se,...Q})=>t&&e.jsx("div",{"data-testid":"tab-title","data-target":s,role:"tab","aria-controls":v,className:A("tabs__header__item",{"tabs__header__item--bordered":K,"tabs__header__item--disabled":_,"tabs__header__item--active":s===C},I),"aria-disabled":_?!0:void 0,..._?{}:M,...Q,children:t},s))}),e.jsx("div",{role:"tabpanel",id:v,"data-testid":"tab-content",children:y})]})};try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{title:{defaultValue:null,description:"Title of that tab",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Optional ID for that tab, one of the expected options for the parent <Tabs> component",name:"id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content of that tab",name:"children",required:!1,type:{name:"ReactNode"}},defaultSelected:{defaultValue:null,description:"Choose that tab as the default to be displayed",name:"defaultSelected",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"Option to render and hide tab (display:none) rather than remove from the DOM",name:"cache",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Option to disable selection of tab",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="Tabs",c.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"<Tab> elements defining the content and title of each tab",name:"children",required:!0,type:{name:"ReactElement<TabProps, string | JSXElementConstructor<any>> | (ReactElement<TabProps, string | JSXElementConstructor<any>> | null)[] | null"}},active:{defaultValue:null,description:`Optional way of controling the tabs from the outside of this component by
assigning here a value corresponding to an 'id' prop of one of the child
<Tab>`,name:"active",required:!1,type:{name:"string | number"}},bordered:{defaultValue:{value:"false"},description:"Optional bordered styling of tab headers",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const de={title:"Layout/Tabs"},p=()=>e.jsxs(c,{children:[e.jsx(a,{title:e.jsxs(e.Fragment,{children:["Title 1",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 2",children:r.loremIpsum({count:2})}),e.jsx(a,{disabled:!0,title:"Title 3 (disabled)",children:r.loremIpsum({count:2})})]}),b=()=>e.jsxs(c,{bordered:!0,children:[e.jsx(a,{title:e.jsxs(e.Fragment,{children:["Title 1",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 2",children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 3",children:r.loremIpsum({count:2})})]}),T=()=>e.jsxs(c,{children:[e.jsx(a,{title:e.jsxs(e.Fragment,{children:["Title 1",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 2",children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 3 (default)",defaultSelected:!0,children:r.loremIpsum({count:2})})]}),n=["option a","option 2","option III"],Y=()=>{const l=i.useRef(void 0),[o,m]=i.useState(n[0]);return i.useEffect(()=>(l.current=window.setInterval(()=>{m(n[Math.floor(Math.random()*n.length)])},3e3),()=>clearInterval(l.current)),[]),e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:['Selected: "',o,'"']}),e.jsx("p",{children:"Will change automatically every 3 seconds"}),e.jsxs(c,{active:o,children:[e.jsx(a,{title:e.jsxs(e.Fragment,{children:["Title 1 (not interactive)",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),id:n[0],children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 2 (not interactive)",id:n[1],children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 3 (not interactive)",id:n[2],children:r.loremIpsum({count:2})})]})]})},Z=()=>{const l=i.useRef(void 0),[o,m]=i.useState(n[0]);return i.useEffect(()=>(l.current=window.setInterval(()=>{m(n[Math.floor(Math.random()*(n.length-1))])},3e3),()=>clearInterval(l.current)),[]),e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:['Selected: "',o,'"']}),e.jsx("p",{children:"Will change automatically every 3 seconds"}),e.jsxs(c,{active:o,children:[e.jsx(a,{id:n[0],title:e.jsxs("a",{href:"https://www.uniprot.org",children:["Title 1 (not interactive)",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),children:r.loremIpsum({count:2})}),e.jsx(a,{id:n[1],title:e.jsx("a",{href:"https://www.uniprot.org",children:"Title 2 (not interactive)"}),children:r.loremIpsum({count:2})}),e.jsx(a,{id:n[2],disabled:!0,title:e.jsx("a",{href:"https://www.uniprot.org",children:"Title 3 (disabled)"}),children:r.loremIpsum({count:2})})]})]})},f=()=>e.jsx(Y,{}),g=()=>e.jsx(Z,{}),x=()=>e.jsxs(c,{children:[e.jsx(a,{cache:!0,title:e.jsxs(e.Fragment,{children:["Title 1",e.jsx(u,{style:{verticalAlign:"text-top"},width:16,height:16})]}),children:r.loremIpsum({count:2})}),e.jsx(a,{title:"Title 2",children:r.loremIpsum({count:2})}),e.jsx(a,{cache:!0,title:"Title 3",children:r.loremIpsum({count:2})})]});var E,k,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(N=(k=p.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var q,V,F;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Tabs bordered>
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
  </Tabs>`,...(F=(V=b.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var O,W,R;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(R=(W=T.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,L,U;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:"() => <ManagedTabsComponent />",...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var P,B,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:"() => <ManagedTabsWithLinksComponent />",...($=(B=g.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var J,X,H;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => <Tabs>
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
  </Tabs>`,...(H=(X=x.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const ue=["UnmanagedTabs","UnmanagedTabsBoxStyling","UnmanagedTabsWithDifferentDefault","ManagedTabs","ManagedTabsWithLinks","CachedTabs"];export{x as CachedTabs,f as ManagedTabs,g as ManagedTabsWithLinks,p as UnmanagedTabs,b as UnmanagedTabsBoxStyling,T as UnmanagedTabsWithDifferentDefault,ue as __namedExportsOrder,de as default};
