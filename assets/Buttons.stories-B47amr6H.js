import{o as e}from"./preload-helper-IeJ1kGxu.js";import{G as t,t as n}from"./iframe-DlVM4iNb.js";import{s as r}from"./main-search-DQ4J1z2q.js";import{Gt as i,t as a}from"./components-DEFvvLNh.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{t(),a(),o=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={component:r,title:`Forms/Button`,args:{onClick:p()},argTypes:{color:{control:`select`,name:`--main-bubble-color`,options:[`var(--fr--color-sapphire-blue)`,`var(--fr--color-sea-blue)`,`var(--fr--color-vivid-cerulean)`,`var(--fr--color-medium-turquoise)`,`var(--fr--color-gainsborough)`,`white`,`blue`]},disabled:{control:`boolean`}}},h={render:({color:e,disabled:t,onClick:n})=>(0,o.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{disabled:t,onClick:n,children:`Primary`})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{variant:`secondary`,disabled:t,onClick:n,children:`Secondary`})}),(0,o.jsx)(`div`,{children:(0,o.jsx)(r,{variant:`tertiary`,disabled:t,onClick:n,children:`Tertiary`})})]})},g={render:({color:e,disabled:t,onClick:n})=>(0,o.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,o.jsxs)(`div`,{className:`button-group`,children:[(0,o.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`One`}),(0,o.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`Two`}),(0,o.jsx)(`button`,{className:`button tertiary`,type:`button`,onClick:n,children:`Three`})]}),(0,o.jsxs)(`div`,{className:`button-group`,children:[(0,o.jsx)(r,{disabled:t,onClick:n,children:`One`}),(0,o.jsx)(r,{disabled:t,onClick:n,children:`Two`}),(0,o.jsx)(r,{disabled:t,onClick:n,children:`Three`})]}),(0,o.jsxs)(`div`,{className:`button-group`,children:[(0,o.jsx)(r,{variant:`secondary`,disabled:t,onClick:n,children:`One`}),(0,o.jsx)(r,{variant:`secondary`,disabled:t,onClick:n,children:`Two`}),(0,o.jsx)(r,{variant:`secondary`,disabled:t,onClick:n,children:`Three`})]}),(0,o.jsxs)(`div`,{className:`button-group`,children:[(0,o.jsx)(r,{variant:`tertiary`,disabled:t,onClick:n,children:`One`}),(0,o.jsx)(r,{variant:`tertiary`,disabled:t,onClick:n,children:`Two`}),(0,o.jsx)(r,{variant:`tertiary`,disabled:t,onClick:n,children:`Three`})]})]})},_={render:({color:e,disabled:t,onClick:n})=>(0,o.jsxs)(`div`,{style:{"--main-button-color":e},children:[(0,o.jsx)(`div`,{children:(0,o.jsxs)(r,{disabled:t,onClick:n,children:[(0,o.jsx)(i,{}),`Primary`]})}),(0,o.jsx)(`div`,{children:(0,o.jsxs)(r,{variant:`secondary`,disabled:t,onClick:n,children:[(0,o.jsx)(i,{}),`Secondary`]})}),(0,o.jsx)(`div`,{children:(0,o.jsxs)(r,{variant:`tertiary`,disabled:t,onClick:n,children:[(0,o.jsx)(i,{}),`Tertiary`]})})]})},h.parameters={...h.parameters,docs:{...(s=h.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=h.parameters)==null||(c=c.docs)==null?void 0:c.source}}},g.parameters={...g.parameters,docs:{...(l=g.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=g.parameters)==null||(u=u.docs)==null?void 0:u.source}}},_.parameters={..._.parameters,docs:{...(d=_.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=_.parameters)==null||(f=f.docs)==null?void 0:f.source}}},v=[`Button`,`ButtonGroups`,`WithIcon`]}))();export{h as Button,g as ButtonGroups,_ as WithIcon,v as __namedExportsOrder,m as default};