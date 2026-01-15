import{j as G,r as g}from"./iframe-PpvKiT-0.js";import{g as j,a as z,H as p}from"./probability-distribution-sample-CCugPh2S.js";import"./preload-helper-BDBacUwf.js";import"./index-B72jJjoP.js";const w=1e3,n=j(0,1,w),C=z(-10,10,w),E=Math.min(...n),N=Math.max(...n),b=()=>Math.random()>.5,a={component:p,title:"Visualisation/Histogram",argTypes:{color:{control:"select",name:"--main-histogram-color",options:["var(--fr--color-sapphire-blue)","var(--fr--color-sea-blue)","var(--fr--color-vivid-cerulean)","var(--fr--color-medium-turquoise)","var(--fr--color-gainsborough)","white","blue"]}},args:{xLabel:"X label",yLabel:"Y label",barGap:"-1px"},render:({values:t,nBins:i,binSize:m,xLabel:l,yLabel:u,barGap:e,color:c})=>G.jsx(p,{values:t,nBins:i,binSize:m,xLabel:l,yLabel:u,style:{"--main-histogram-color":c,"--histogram-bar-gap":e}})},r={argTypes:{...a.argTypes,nBins:{control:"number",min:1,step:1,name:"Number of bins"}},args:{...a.args,values:n,nBins:20}},s={argTypes:{...a.argTypes,binSize:{control:"number",min:1,step:1}},args:{...a.args,values:C,binSize:1}},R=({nBins:t,xLabel:i,yLabel:m,barGap:l,color:u})=>{const e=g.useRef(void 0),[c,M]=g.useState(n.filter(b));return g.useEffect(()=>(e.current=window.setInterval(()=>{M(n.filter(b))},3e3),()=>window.clearInterval(e.current)),[]),G.jsx(p,{values:c,unfilteredValues:n,nBins:t,xLabel:i,yLabel:m,min:E,max:N,unfilteredValuesShadow:.1,style:{"--main-histogram-color":u,"--histogram-bar-gap":l}})},o={argTypes:{...a.argTypes,nBins:{control:"number",min:1,step:1,name:"Number of bins"}},args:{...a.args,nBins:20},render:R};var d,f,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,v,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,x,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const I=["Gaussian","Uniform","ChangingGaussian"];export{o as ChangingGaussian,r as Gaussian,s as Uniform,I as __namedExportsOrder,a as default};
