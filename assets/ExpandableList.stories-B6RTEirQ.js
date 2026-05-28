import{o as e}from"./preload-helper-BKhVKv2_.js";import{t}from"./iframe-D-mTk88w.js";import{t as n,ut as r}from"./components-DoNN6ors.js";import{r as i,t as a}from"./lipsum-BkdLQjZU.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),i(),o=t(),d={component:r,title:`Data/Expandable List`,argTypes:{numberCollapsedItems:{name:`Number of displayed items`,control:{type:`number`,min:0,step:1}}},args:{numberCollapsedItems:5,descriptionString:`lorem ipsum items`,displayNumberOfHiddenItems:!1}},f={render:({numberCollapsedItems:e,descriptionString:t,displayNumberOfHiddenItems:n})=>(0,o.jsx)(r,{numberCollapsedItems:e,descriptionString:t,displayNumberOfHiddenItems:n,children:a({numberElements:10,keys:[`content`],type:`words`}).map(({content:e},t)=>(0,o.jsx)(`span`,{children:e},t))})},p={render:({numberCollapsedItems:e,descriptionString:t,displayNumberOfHiddenItems:n})=>(0,o.jsx)(r,{numberCollapsedItems:e,descriptionString:t,displayNumberOfHiddenItems:n,extraActions:(0,o.jsx)(`a`,{className:`button tertiary expandable-list__action`,children:`some link`}),children:a({numberElements:10,keys:[`content`],type:`words`}).map(({content:e},t)=>(0,o.jsx)(`span`,{children:e},t))})},f.parameters={...f.parameters,docs:{...(s=f.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    numberCollapsedItems,
    descriptionString,
    displayNumberOfHiddenItems
  }) => <ExpandableListComponent numberCollapsedItems={numberCollapsedItems} descriptionString={descriptionString} displayNumberOfHiddenItems={displayNumberOfHiddenItems}>
      {getLipsumObjectArray({
      numberElements: 10,
      keys: ['content'],
      type: 'words'
    }).map(({
      content
    }, index) => <span key={index}>{content}</span>)}
    </ExpandableListComponent>
}`,...(c=f.parameters)==null||(c=c.docs)==null?void 0:c.source}}},p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    numberCollapsedItems,
    descriptionString,
    displayNumberOfHiddenItems
  }) => <ExpandableListComponent numberCollapsedItems={numberCollapsedItems} descriptionString={descriptionString} displayNumberOfHiddenItems={displayNumberOfHiddenItems} extraActions={
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className="button tertiary expandable-list__action">some link</a>}>
      {getLipsumObjectArray({
      numberElements: 10,
      keys: ['content'],
      type: 'words'
    }).map(({
      content
    }, index) => <span key={index}>{content}</span>)}
    </ExpandableListComponent>
}`,...(u=p.parameters)==null||(u=u.docs)==null?void 0:u.source}}},m=[`ExpandableList`,`ExpandableListWithExtraAction`]}))();export{f as ExpandableList,p as ExpandableListWithExtraAction,m as __namedExportsOrder,d as default};