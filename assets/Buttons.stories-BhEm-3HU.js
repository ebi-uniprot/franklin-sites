import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{M as t,n}from"./iframe-Dc272sxP.js";import{n as r,t as i}from"./button-Sh1kAD4z.js";import{n as a,t as o}from"./download-Cem7VRvE.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),r(),a(),s=n(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={component:i,title:`Forms/Button`,args:{onClick:m()},argTypes:{color:{control:`select`,name:`--main-bubble-color`,options:[`var(--fr--color-sapphire-blue)`,`var(--fr--color-sea-blue)`,`var(--fr--color-vivid-cerulean)`,`var(--fr--color-medium-turquoise)`,`var(--fr--color-gainsborough)`,`white`,`blue`]},disabled:{control:`boolean`}}},g={render:({color:e,disabled:t,onClick:n})=>(0,s.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,s.jsx)(`div`,{children:(0,s.jsx)(i,{disabled:t,onClick:n,children:`Primary`})}),(0,s.jsx)(`div`,{children:(0,s.jsx)(i,{variant:`secondary`,disabled:t,onClick:n,children:`Secondary`})}),(0,s.jsx)(`div`,{children:(0,s.jsx)(i,{variant:`tertiary`,disabled:t,onClick:n,children:`Tertiary`})})]})},_={render:({color:e,disabled:t,onClick:n})=>(0,s.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,s.jsxs)(`div`,{className:`button-group`,children:[(0,s.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`One`}),(0,s.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`Two`}),(0,s.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`Three`})]}),(0,s.jsxs)(`div`,{className:`button-group`,children:[(0,s.jsx)(i,{disabled:t,onClick:n,children:`One`}),(0,s.jsx)(i,{disabled:t,onClick:n,children:`Two`}),(0,s.jsx)(i,{disabled:t,onClick:n,children:`Three`})]}),(0,s.jsxs)(`div`,{className:`button-group`,children:[(0,s.jsx)(i,{variant:`secondary`,disabled:t,onClick:n,children:`One`}),(0,s.jsx)(i,{variant:`secondary`,disabled:t,onClick:n,children:`Two`}),(0,s.jsx)(i,{variant:`secondary`,disabled:t,onClick:n,children:`Three`})]}),(0,s.jsxs)(`div`,{className:`button-group`,children:[(0,s.jsx)(i,{variant:`tertiary`,disabled:t,onClick:n,children:`One`}),(0,s.jsx)(i,{variant:`tertiary`,disabled:t,onClick:n,children:`Two`}),(0,s.jsx)(i,{variant:`tertiary`,disabled:t,onClick:n,children:`Three`})]})]})},v={render:({color:e,disabled:t,onClick:n})=>(0,s.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,s.jsx)(`div`,{children:(0,s.jsxs)(i,{disabled:t,onClick:n,children:[(0,s.jsx)(o,{}),`Primary`]})}),(0,s.jsx)(`div`,{children:(0,s.jsxs)(i,{variant:`secondary`,disabled:t,onClick:n,children:[(0,s.jsx)(o,{}),`Secondary`]})}),(0,s.jsx)(`div`,{children:(0,s.jsxs)(i,{variant:`tertiary`,disabled:t,onClick:n,children:[(0,s.jsx)(o,{}),`Tertiary`]})})]})},y=[`Button`,`ButtonGroups`,`WithIcon`],g.parameters={...g.parameters,docs:{...(c=g.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    color,
    disabled,
    onClick
  }) => <div style={{
    '--main-button-color': color
  } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent variant="secondary" disabled={disabled} onClick={onClick}>
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent variant="tertiary" disabled={disabled} onClick={onClick}>
          Tertiary
        </ButtonComponent>
      </div>
    </div>
}`,...(l=g.parameters)==null||(l=l.docs)==null?void 0:l.source}}},_.parameters={..._.parameters,docs:{...(u=_.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    color,
    disabled,
    onClick
  }) => <div style={{
    '--main-button-color': color
  } as CSSProperties}>
      <div className="button-group">
        <button className="button tertiary" type="button" onClick={onClick}>
          One
        </button>
        <button className="button tertiary" type="button" onClick={onClick}>
          Two
        </button>
        <button className="button tertiary" type="button" onClick={onClick}>
          Three
        </button>
      </div>
      <div className="button-group">
        <ButtonComponent disabled={disabled} onClick={onClick}>
          One
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Two
        </ButtonComponent>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent variant="secondary" disabled={disabled} onClick={onClick}>
          One
        </ButtonComponent>
        <ButtonComponent variant="secondary" disabled={disabled} onClick={onClick}>
          Two
        </ButtonComponent>
        <ButtonComponent variant="secondary" disabled={disabled} onClick={onClick}>
          Three
        </ButtonComponent>
      </div>
      <div className="button-group">
        <ButtonComponent variant="tertiary" disabled={disabled} onClick={onClick}>
          One
        </ButtonComponent>
        <ButtonComponent variant="tertiary" disabled={disabled} onClick={onClick}>
          Two
        </ButtonComponent>
        <ButtonComponent variant="tertiary" disabled={disabled} onClick={onClick}>
          Three
        </ButtonComponent>
      </div>
    </div>
}`,...(d=_.parameters)==null||(d=d.docs)==null?void 0:d.source}}},v.parameters={...v.parameters,docs:{...(f=v.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    color,
    disabled,
    onClick
  }) => <div style={{
    '--main-button-color': color
  } as CSSProperties}>
      <div>
        <ButtonComponent disabled={disabled} onClick={onClick}>
          <DownloadIcon />
          Primary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent variant="secondary" disabled={disabled} onClick={onClick}>
          <DownloadIcon />
          Secondary
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent variant="tertiary" disabled={disabled} onClick={onClick}>
          <DownloadIcon />
          Tertiary
        </ButtonComponent>
      </div>
    </div>
}`,...(p=v.parameters)==null||(p=p.docs)==null?void 0:p.source}}}})))()}b();export{g as Button,_ as ButtonGroups,v as WithIcon,y as __namedExportsOrder,h as default};