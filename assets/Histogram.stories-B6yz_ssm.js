import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{M as t,n}from"./iframe-Dc272sxP.js";import{a as r,i,n as a,r as o,t as s}from"./probability-distribution-sample-CtvZ684I.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{c=t(),r(),o(),l=n(),g=1e3,_=s(0,1,g),v=a(-10,10,g),y=Math.min(..._),b=Math.max(..._),x=()=>Math.random()>.5,S={component:i,title:`Visualisation/Histogram`,argTypes:{color:{control:`select`,name:`--main-histogram-color`,options:[`var(--fr--color-sapphire-blue)`,`var(--fr--color-sea-blue)`,`var(--fr--color-vivid-cerulean)`,`var(--fr--color-medium-turquoise)`,`var(--fr--color-gainsborough)`,`white`,`blue`]}},args:{xLabel:`X label`,yLabel:`Y label`,barGap:`-1px`},render:({values:e,nBins:t,binSize:n,xLabel:r,yLabel:a,barGap:o,color:s})=>(0,l.jsx)(i,{values:e,nBins:t,binSize:n,xLabel:r,yLabel:a,style:{"--main-histogram-color":s,"--histogram-bar-gap":o}})},C={argTypes:{...S.argTypes,nBins:{control:`number`,min:1,step:1,name:`Number of bins`}},args:{...S.args,values:_,nBins:20}},w={argTypes:{...S.argTypes,binSize:{control:`number`,min:1,step:1}},args:{...S.args,values:v,binSize:1}},T=({nBins:e,xLabel:t,yLabel:n,barGap:r,color:a})=>{let o=(0,c.useRef)(void 0),[s,u]=(0,c.useState)(_.filter(x));return(0,c.useEffect)(()=>(o.current=window.setInterval(()=>{u(_.filter(x))},3e3),()=>window.clearInterval(o.current)),[]),(0,l.jsx)(i,{values:s,unfilteredValues:_,nBins:e,xLabel:t,yLabel:n,min:y,max:b,unfilteredValuesShadow:.1,style:{"--main-histogram-color":a,"--histogram-bar-gap":r}})},E={argTypes:{...S.argTypes,nBins:{control:`number`,min:1,step:1,name:`Number of bins`}},args:{...S.args,nBins:20},render:T},D=[`Gaussian`,`Uniform`,`ChangingGaussian`],C.parameters={...C.parameters,docs:{...(u=C.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    nBins: {
      control: 'number',
      min: 1,
      step: 1,
      name: 'Number of bins'
    }
  },
  args: {
    ...meta.args,
    values: gaussianSample,
    nBins: 20
  }
}`,...(d=C.parameters)==null||(d=d.docs)==null?void 0:d.source}}},w.parameters={...w.parameters,docs:{...(f=w.parameters)==null?void 0:f.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    binSize: {
      control: 'number',
      min: 1,
      step: 1
    }
  },
  args: {
    ...meta.args,
    values: uniformSample,
    binSize: 1
  }
}`,...(p=w.parameters)==null||(p=p.docs)==null?void 0:p.source}}},E.parameters={...E.parameters,docs:{...(m=E.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    ...meta.argTypes,
    nBins: {
      control: 'number',
      min: 1,
      step: 1,
      name: 'Number of bins'
    }
  },
  args: {
    ...meta.args,
    nBins: 20
  },
  render: ChangingGaussianRender
}`,...(h=E.parameters)==null||(h=h.docs)==null?void 0:h.source}}}})))()}O();export{E as ChangingGaussian,C as Gaussian,w as Uniform,D as __namedExportsOrder,S as default};