import{j as o}from"./iframe-DO3T59VR.js";import{B as e}from"./button-BTwgKx7Q.js";import{S as d}from"./download-DXkTYLbM.js";import"./preload-helper-BDBacUwf.js";import"./index-Cm7o6AEv.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,S={component:e,title:"Forms/Button",args:{onClick:h()},argTypes:{color:{control:"select",name:"--main-bubble-color",options:["var(--fr--color-sapphire-blue)","var(--fr--color-sea-blue)","var(--fr--color-vivid-cerulean)","var(--fr--color-medium-turquoise)","var(--fr--color-gainsborough)","white","blue"]},disabled:{control:"boolean"}}},i={render:({color:r,disabled:n,onClick:t})=>o.jsxs("div",{style:{"--main-button-color":r},children:[o.jsx("div",{children:o.jsx(e,{disabled:n,onClick:t,children:"Primary"})}),o.jsx("div",{children:o.jsx(e,{variant:"secondary",disabled:n,onClick:t,children:"Secondary"})}),o.jsx("div",{children:o.jsx(e,{variant:"tertiary",disabled:n,onClick:t,children:"Tertiary"})})]})},a={render:({color:r,disabled:n,onClick:t})=>o.jsxs("div",{style:{"--main-button-color":r},children:[o.jsxs("div",{className:"button-group",children:[o.jsx("button",{className:"button tertiary",type:"button",onClick:t,children:"One"}),o.jsx("button",{className:"button tertiary",type:"button",onClick:t,children:"Two"}),o.jsx("button",{className:"button tertiary",type:"button",onClick:t,children:"Three"})]}),o.jsxs("div",{className:"button-group",children:[o.jsx(e,{disabled:n,onClick:t,children:"One"}),o.jsx(e,{disabled:n,onClick:t,children:"Two"}),o.jsx(e,{disabled:n,onClick:t,children:"Three"})]}),o.jsxs("div",{className:"button-group",children:[o.jsx(e,{variant:"secondary",disabled:n,onClick:t,children:"One"}),o.jsx(e,{variant:"secondary",disabled:n,onClick:t,children:"Two"}),o.jsx(e,{variant:"secondary",disabled:n,onClick:t,children:"Three"})]}),o.jsxs("div",{className:"button-group",children:[o.jsx(e,{variant:"tertiary",disabled:n,onClick:t,children:"One"}),o.jsx(e,{variant:"tertiary",disabled:n,onClick:t,children:"Two"}),o.jsx(e,{variant:"tertiary",disabled:n,onClick:t,children:"Three"})]})]})},s={render:({color:r,disabled:n,onClick:t})=>o.jsxs("div",{style:{"--main-button-color":r},children:[o.jsx("div",{children:o.jsxs(e,{disabled:n,onClick:t,children:[o.jsx(d,{}),"Primary"]})}),o.jsx("div",{children:o.jsxs(e,{variant:"secondary",disabled:n,onClick:t,children:[o.jsx(d,{}),"Secondary"]})}),o.jsx("div",{children:o.jsxs(e,{variant:"tertiary",disabled:n,onClick:t,children:[o.jsx(d,{}),"Tertiary"]})})]})};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(p=a.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var b,C,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const g=["Button","ButtonGroups","WithIcon"];export{i as Button,a as ButtonGroups,s as WithIcon,g as __namedExportsOrder,S as default};
