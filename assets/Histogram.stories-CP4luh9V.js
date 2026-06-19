import{l as e,o as t}from"./preload-helper-BKhVKv2_.js";import{W as n,t as r}from"./iframe-B_Bti3oz.js";import{at as i,t as a}from"./components-CXdGP71K.js";import{n as o,r as s,t as c}from"./probability-distribution-sample-BVZl322s.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{l=e(n(),1),a(),s(),u=r(),_=1e3,v=c(0,1,_),y=o(-10,10,_),b=Math.min(...v),x=Math.max(...v),S=()=>Math.random()>.5,C={component:i,title:`Visualisation/Histogram`,argTypes:{color:{control:`select`,name:`--main-histogram-color`,options:[`var(--fr--color-sapphire-blue)`,`var(--fr--color-sea-blue)`,`var(--fr--color-vivid-cerulean)`,`var(--fr--color-medium-turquoise)`,`var(--fr--color-gainsborough)`,`white`,`blue`]}},args:{xLabel:`X label`,yLabel:`Y label`,barGap:`-1px`},render:({values:e,nBins:t,binSize:n,xLabel:r,yLabel:a,barGap:o,color:s})=>(0,u.jsx)(i,{values:e,nBins:t,binSize:n,xLabel:r,yLabel:a,style:{"--main-histogram-color":s,"--histogram-bar-gap":o}})},w={argTypes:{...C.argTypes,nBins:{control:`number`,min:1,step:1,name:`Number of bins`}},args:{...C.args,values:v,nBins:20}},T={argTypes:{...C.argTypes,binSize:{control:`number`,min:1,step:1}},args:{...C.args,values:y,binSize:1}},E=({nBins:e,xLabel:t,yLabel:n,barGap:r,color:a})=>{let o=(0,l.useRef)(void 0),[s,c]=(0,l.useState)(v.filter(S));return(0,l.useEffect)(()=>(o.current=window.setInterval(()=>{c(v.filter(S))},3e3),()=>window.clearInterval(o.current)),[]),(0,u.jsx)(i,{values:s,unfilteredValues:v,nBins:e,xLabel:t,yLabel:n,min:b,max:x,unfilteredValuesShadow:.1,style:{"--main-histogram-color":a,"--histogram-bar-gap":r}})},D={argTypes:{...C.argTypes,nBins:{control:`number`,min:1,step:1,name:`Number of bins`}},args:{...C.args,nBins:20},render:E},w.parameters={...w.parameters,docs:{...(d=w.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=w.parameters)==null||(f=f.docs)==null?void 0:f.source}}},T.parameters={...T.parameters,docs:{...(p=T.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=T.parameters)==null||(m=m.docs)==null?void 0:m.source}}},D.parameters={...D.parameters,docs:{...(h=D.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=D.parameters)==null||(g=g.docs)==null?void 0:g.source}}},O=[`Gaussian`,`Uniform`,`ChangingGaussian`]}))();export{D as ChangingGaussian,w as Gaussian,T as Uniform,O as __namedExportsOrder,C as default};