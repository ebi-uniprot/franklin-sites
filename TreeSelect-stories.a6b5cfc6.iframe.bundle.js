(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[7323],{"./stories/TreeSelect.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TreeSelect:function(){return TreeSelect_stories_TreeSelect},TreeSelectWithAutocomplete:function(){return TreeSelectWithAutocomplete},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return TreeSelect_stories}});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/react/index.js")),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dropdown_button=__webpack_require__("./src/components/dropdown-button.tsx"),components_button=__webpack_require__("./src/components/button.tsx"),components_autocomplete=__webpack_require__("./src/components/autocomplete.tsx"),utils=__webpack_require__("./src/utils.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tree_select=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/tree-select.scss"),tree_select_default=__webpack_require__.n(tree_select),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tree_select_default(),options),tree_select_default()&&tree_select_default().locals&&tree_select_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["data","onSelect","autocomplete","autocompletePlaceholder","autocompleteFilter","defaultActiveNodes","label"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var src_components_tree_select=_ref=>{let{data:data,onSelect:onSelect,autocomplete:autocomplete=!1,autocompletePlaceholder:autocompletePlaceholder="",autocompleteFilter:autocompleteFilter=!0,defaultActiveNodes:defaultActiveNodes=[],label:label}=_ref,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const[activeNodes,setActiveNodes]=(0,react.useState)(defaultActiveNodes),[openNodes,setOpenNodes]=(0,react.useState)([]);(0,react.useEffect)((()=>{setOpenNodes(Array.from((0,utils._w)(data)))}),[data]);const[autocompleteShowDropdown,setAutocompleteShowDropdown]=(0,react.useState)(!1),autocompleteData=(0,react.useMemo)((()=>(0,utils.f4)((0,utils.PR)(data))),[data]),toggleNode=(0,react.useCallback)((node=>setOpenNodes((openNodes=>openNodes.includes(node.id)?openNodes.filter((id=>id!==node.id)):[...openNodes,node.id]))),[]),handleNodeClick=(0,react.useCallback)(((node,setShowDropdownMenu)=>{if("string"!=typeof node)if(node.items)toggleNode(node);else{const path=(0,utils.PR)(data,node.id)[0],leafNode=path[path.length-1];setActiveNodes(path.map((d=>d.id))),setOpenNodes(path.map((d=>d.id))),onSelect(leafNode),setShowDropdownMenu(!1)}}),[data,onSelect,toggleNode]),buildTree=(0,react.useCallback)((function(items,setShowDropdownMenu){let first=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,jsx_runtime.jsx)("ul",{role:first?"tree":"group",children:items.map((node=>{var _node$items;let ariaExpanded;return node.items&&(ariaExpanded=openNodes.includes(node.id)?"true":"false"),(0,jsx_runtime.jsxs)("li",{role:"treeitem","aria-expanded":ariaExpanded,"aria-selected":ariaExpanded,className:classnames_default()({branch:node.items}),children:[(0,jsx_runtime.jsx)(components_button.A,{onClick:()=>handleNodeClick(node,setShowDropdownMenu),className:classnames_default()({active:activeNodes.includes(node.id)}),variant:"secondary","aria-label":null!==(_node$items=node.items)&&void 0!==_node$items&&_node$items.length?`${node.label} (${node.items.length} nested option${1===node.items.length?"":"s"})`:void 0,children:node.label}),node.items&&buildTree(node.items,setShowDropdownMenu)]},node.id)}))})}),[activeNodes,handleNodeClick,openNodes]);return(0,jsx_runtime.jsx)(dropdown_button.Ay,_objectSpread(_objectSpread({label:label||"Select"},props),{},{children:setShowDropdownMenu=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[autocomplete&&(0,jsx_runtime.jsx)(components_autocomplete.Ay,{data:autocompleteData,onDropdownChange:setAutocompleteShowDropdown,onSelect:node=>handleNodeClick(node,setShowDropdownMenu),placeholder:autocompletePlaceholder,filter:autocompleteFilter,clearOnSelect:!0,autoFocus:!0}),!autocompleteShowDropdown&&(0,jsx_runtime.jsx)("div",{className:"dropdown-menu__panel",children:buildTree(data,setShowDropdownMenu,!0)})]})}))};try{treeselect.displayName="treeselect",treeselect.__docgenInfo={description:"",displayName:"treeselect",props:{openOnHover:{defaultValue:null,description:"Open on pointer over (useful for dropdowns in header)",name:"openOnHover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Flag to disable the button",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type to pass to the underlying <button></button>",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:null,description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"Classnames to be added to the button",name:"className",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"The tree structure",name:"data",required:!0,type:{name:"Item[]"}},onSelect:{defaultValue:null,description:"What happens when something is selected",name:"onSelect",required:!0,type:{name:'(item: Omit<Item, "items">) => void'}},autocomplete:{defaultValue:{value:"false"},description:"Contains autocomplete functionality to search through tree",name:"autocomplete",required:!1,type:{name:"boolean"}},autocompletePlaceholder:{defaultValue:{value:""},description:"Placeholder for the autocomplete input box",name:"autocompletePlaceholder",required:!1,type:{name:"string"}},autocompleteFilter:{defaultValue:{value:"true"},description:"",name:"autocompleteFilter",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The displayed label on the button",name:"label",required:!1,type:{name:"ReactNode"}},defaultActiveNodes:{defaultValue:{value:"[]"},description:"Array of default active nodes for initialisation",name:"defaultActiveNodes",required:!1,type:{name:'Item["id"][]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tree-select.tsx#treeselect"]={docgenInfo:treeselect.__docgenInfo,name:"treeselect",path:"src/components/tree-select.tsx#treeselect"})}catch(__react_docgen_typescript_loader_error){}var tree_data=__webpack_require__("./src/mock-data/tree-data.ts");var TreeSelect_stories={title:"Forms/Tree Select",component:src_components_tree_select,argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]}},args:{label:"Select",variant:"primary"}};const TreeSelect_stories_TreeSelect={render:({label:label,variant:variant})=>(0,jsx_runtime.jsx)(src_components_tree_select,{label:label,data:tree_data.L,onSelect:(0,dist.XI)("onSelect"),variant:variant})},TreeSelectWithAutocomplete={render:({label:label,variant:variant})=>(0,jsx_runtime.jsx)(src_components_tree_select,{label:label,data:tree_data.L,onSelect:(0,dist.XI)("onSelect"),autocomplete:!0,autocompletePlaceholder:"Search for item",autocompleteFilter:!0,variant:variant})},__namedExportsOrder=["TreeSelect","TreeSelectWithAutocomplete"];TreeSelect_stories_TreeSelect.parameters={...TreeSelect_stories_TreeSelect.parameters,docs:{...TreeSelect_stories_TreeSelect.parameters?.docs,source:{originalSource:"{\n  render: ({\n    label,\n    variant\n  }) => <TS label={label} data={treeData} onSelect={action('onSelect')} variant={variant} />\n}",...TreeSelect_stories_TreeSelect.parameters?.docs?.source}}},TreeSelectWithAutocomplete.parameters={...TreeSelectWithAutocomplete.parameters,docs:{...TreeSelectWithAutocomplete.parameters?.docs,source:{originalSource:"{\n  render: ({\n    label,\n    variant\n  }) => <TS label={label} data={treeData} onSelect={action('onSelect')} autocomplete autocompletePlaceholder=\"Search for item\" autocompleteFilter variant={variant} />\n}",...TreeSelectWithAutocomplete.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/tree-select.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}:root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.button.dropdown::after{border-top-color:currentColor}.dropdown{position:relative;display:inline-block;white-space:nowrap}.dropdown>button.button:first-child{margin-inline-end:1rem;padding-inline-end:1.5ch}.dropdown>button.button.primary:first-child,.dropdown>button.button.secondary:first-child{padding-inline-end:2.5ch}.dropdown>:first-child::after{content:"▾";position:absolute;margin-inline-start:.5ch}.dropdown .button{margin-block-end:0;margin-inline-end:0}.dropdown ul{margin-inline-start:0;margin-block-end:0}.dropdown__content{box-shadow:0 .125rem .25rem .125rem rgba(22,29,57,.2);overflow-y:auto;width:max-content;z-index:9000;animation:200ms reveal;background:#fff;position:absolute;padding:.5rem;border-radius:0 0 .2rem .2rem}.dropdown__content button.button,.dropdown__content a,.dropdown__content a.button{display:inline-block;color:#161d39;margin:0;padding:.25em 1ch;width:100%;line-height:2;border:none;font-weight:normal}.dropdown__content button.button:hover,.dropdown__content button.button:focus-visible,.dropdown__content a:hover,.dropdown__content a:focus-visible,.dropdown__content a.button:hover,.dropdown__content a.button:focus-visible{background:#e4e8eb}.dropdown-container{position:relative;display:inline-block}.hover,.dropdown-content ul li button:hover,.dropdown-content ul li button.primary:hover,.dropdown-content ul li button.secondary:hover,.dropdown-content ul li button.tertiary:hover,.dropdown-content ul li a:hover,.dropdown-content ul li a.primary:hover,.dropdown-content ul li a.secondary:hover,.dropdown-content ul li a.tertiary:hover,.dropdown-menu ul li button:hover,.dropdown-menu ul li button.primary:hover,.dropdown-menu ul li button.secondary:hover,.dropdown-menu ul li button.tertiary:hover,.dropdown-menu ul li a:hover,.dropdown-menu ul li a.primary:hover,.dropdown-menu ul li a.secondary:hover,.dropdown-menu ul li a.tertiary:hover{color:#161d39;border:none;background:#e4e8eb}.dropdown-content,.dropdown-menu{--main-button-color: black;box-shadow:0 .125rem .25rem .125rem rgba(22,29,57,.2);display:none;overflow-y:auto;white-space:nowrap;position:absolute;background:#fff;z-index:9000}.dropdown-content input,.dropdown-menu input{margin:0}.dropdown-content .dropdown-menu__content,.dropdown-menu .dropdown-menu__content{padding:1rem}.dropdown-content .dropdown-menu__panel,.dropdown-menu .dropdown-menu__panel{overflow-y:auto}.dropdown-content ul,.dropdown-menu ul{display:block;list-style:none;margin:0;padding:0}.dropdown-content ul li,.dropdown-menu ul li{float:none !important;display:block;line-height:1.6rem;background-color:#fefefe !important}.dropdown-content ul li button,.dropdown-content ul li button.primary,.dropdown-content ul li button.secondary,.dropdown-content ul li button.tertiary,.dropdown-content ul li a,.dropdown-content ul li a.primary,.dropdown-content ul li a.secondary,.dropdown-content ul li a.tertiary,.dropdown-menu ul li button,.dropdown-menu ul li button.primary,.dropdown-menu ul li button.secondary,.dropdown-menu ul li button.tertiary,.dropdown-menu ul li a,.dropdown-menu ul li a.primary,.dropdown-menu ul li a.secondary,.dropdown-menu ul li a.tertiary{cursor:pointer;line-height:1.6rem;width:100%;text-align:left;font-weight:normal;padding:.5rem !important;margin:0 !important;position:relative;display:block;border:none;padding-right:1rem;text-decoration:none;white-space:nowrap}.dropdown-content ul li button.active,.dropdown-content ul li button.primary.active,.dropdown-content ul li button.secondary.active,.dropdown-content ul li button.tertiary.active,.dropdown-content ul li a.active,.dropdown-content ul li a.primary.active,.dropdown-content ul li a.secondary.active,.dropdown-content ul li a.tertiary.active,.dropdown-menu ul li button.active,.dropdown-menu ul li button.primary.active,.dropdown-menu ul li button.secondary.active,.dropdown-menu ul li button.tertiary.active,.dropdown-menu ul li a.active,.dropdown-menu ul li a.primary.active,.dropdown-menu ul li a.secondary.active,.dropdown-menu ul li a.tertiary.active{font-weight:bold}.dropdown-content .dropdown-menu,.dropdown-menu .dropdown-menu{position:relative;top:0}.dropdown-menu-open{display:block;animation:200ms reveal}@keyframes reveal{from{clip-path:circle(0% at 50% 0%)}to{clip-path:circle(100% at 50% 0%)}}.dropdown-menu__panel ul li[aria-expanded]>button{margin-right:2ch !important}.dropdown-menu__panel ul li[aria-expanded]>button::after{content:"►";float:right;transition:transform .25s ease-out}@media(prefers-reduced-motion: reduce){.dropdown-menu__panel ul li[aria-expanded]>button::after{transition-duration:0s}}.dropdown-menu__panel ul li[aria-expanded]>button:hover::after{will-change:transform}.dropdown-menu__panel ul li[aria-expanded=true]>button::after{transform:rotateZ(90deg)}.dropdown-menu__panel ul li[aria-expanded] ul{display:none}.dropdown-menu__panel ul li[aria-expanded][aria-expanded=true]>ul{display:block;animation:fade-in-from-none .5s ease-out}.dropdown-menu__panel ul li[aria-expanded] li{padding-left:1rem}@keyframes fade-in-from-none{0%{opacity:0;display:none}1%{opacity:0;display:block}100%{opacity:1;display:block}}',"",{version:3,sources:["webpack://./src/styles/components/tree-select.scss","webpack://./src/styles/_colours.scss","webpack://./src/styles/components/dropdown.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/common/_z-index.scss"],names:[],mappings:"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",sourcesContent:["@import './dropdown';\n\n.dropdown-menu__panel ul {\n  li {\n    &[aria-expanded] > button {\n      margin-right: 2ch !important;\n\n      &::after {\n        content: '►';\n        float: right;\n        transition: transform 0.25s ease-out;\n\n        @media (prefers-reduced-motion: reduce) {\n          transition-duration: 0s;\n        }\n      }\n\n      &:hover::after {\n        will-change: transform;\n      }\n    }\n\n    &[aria-expanded='true'] > button::after {\n      transform: rotateZ(90deg);\n    }\n\n    &[aria-expanded] {\n      ul {\n        display: none;\n      }\n\n      &[aria-expanded='true'] > ul {\n        display: block;\n        animation: fade-in-from-none 0.5s ease-out;\n      }\n\n      li {\n        padding-left: 1rem;\n      }\n    }\n  }\n}\n\n// Can't animate opacity and transform together, so we need to use keyframes\n@keyframes fade-in-from-none {\n  0% {\n    opacity: 0;\n    display: none;\n  }\n\n  1% {\n    opacity: 0;\n    display: block;\n  }\n\n  100% {\n    opacity: 1;\n    display: block;\n  }\n}\n","/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","@import '../settings';\n@import '../colours';\n@import '../common/z-index';\n@import '../mixins';\n\n// For legacy dropdown (using borders)\n.button.dropdown::after {\n  border-top-color: currentColor;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n\n  /* Specificity fight with foundation */\n  & > button.button {\n    &:first-child {\n      margin-inline-end: 1rem;\n      /* A bit of space for the dropdown indicator */\n      padding-inline-end: 1.5ch;\n    }\n\n    &.primary,\n    &.secondary {\n      &:first-child {\n        /* A bit more space for the dropdown indicator for non-tertiary */\n        padding-inline-end: 2.5ch;\n      }\n    }\n  }\n\n  & > :first-child::after {\n    content: '▾';\n    position: absolute;\n    margin-inline-start: 0.5ch;\n  }\n\n  /* Override of franklin patterns when used within */\n  /* try to keep as little as possible, watch out of specificity wars */\n  .button {\n    margin-block-end: 0;\n    margin-inline-end: 0;\n  }\n\n  ul {\n    margin-inline-start: 0;\n    margin-block-end: 0;\n  }\n}\n\n.dropdown__content {\n  @include box-shadow();\n  overflow-y: auto;\n  width: max-content;\n  z-index: $z-index-high;\n  animation: 200ms reveal;\n  background: #fff;\n  position: absolute;\n  padding: 0.5 * $global-padding;\n  border-radius: 0 0 0.2rem 0.2rem;\n\n  button.button,\n  a,\n  a.button {\n    display: inline-block;\n    color: $colour-yankees-blue;\n    margin: 0;\n    padding: 0.25em 1ch;\n    width: 100%;\n    line-height: 2;\n    border: none;\n    font-weight: normal;\n\n    &:hover,\n    &:focus-visible {\n      background: $colour-platinum;\n    }\n  }\n}\n\n.dropdown-container {\n  position: relative;\n  display: inline-block;\n}\n\n.hover {\n  color: $colour-yankees-blue;\n  border: none;\n  background: $colour-platinum;\n}\n\n.dropdown-content,\n.dropdown-menu {\n  --main-button-color: black;\n\n  input {\n    margin: 0;\n  }\n\n  @include box-shadow();\n  display: none;\n  overflow-y: auto;\n  white-space: nowrap;\n  position: absolute;\n  background: #fff;\n  z-index: $z-index-high;\n\n  .dropdown-menu__content {\n    padding: 1rem;\n  }\n\n  .dropdown-menu__panel {\n    overflow-y: auto;\n  }\n\n  ul {\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    // overflow-y: hidden;\n    // height: auto !important;\n    li {\n      float: none !important;\n      display: block;\n      line-height: 1.6rem;\n      background-color: $white !important;\n\n      button,\n      a {\n        &,\n        &.primary,\n        &.secondary,\n        &.tertiary {\n          cursor: pointer;\n          line-height: 1.6rem;\n          width: 100%;\n          text-align: left;\n          font-weight: normal;\n          padding: 0.5rem !important; // These two !important's are required to ensure the BLAST button is ...\n          margin: 0 !important; // styled in the same way as the <a> tags in the Sequence component\n          position: relative;\n          display: block;\n          border: none;\n          padding-right: 1rem;\n          text-decoration: none;\n          white-space: nowrap;\n\n          &:hover {\n            @extend .hover;\n          }\n\n          &.active {\n            font-weight: bold;\n          }\n        }\n      }\n    }\n  }\n\n  // The autocomplete has a dropdown-menu inside a dropdown-menu\n  // so needs to have position set to relative so its width can\n  // follow its container's\n  .dropdown-menu {\n    position: relative;\n    top: 0;\n  }\n}\n\n.dropdown-menu-open {\n  display: block;\n  animation: 200ms reveal;\n}\n\n@keyframes reveal {\n  from {\n    clip-path: circle(0% at 50% 0%);\n  }\n  to {\n    clip-path: circle(100% at 50% 0%);\n  }\n}\n","@use 'sass:math';\n\n@import './settings';\n@import './colours';\n@import './franklin-settings';\n\n@mixin columns($base-class, $number) {\n  .#{$base-class}--columns {\n    column-count: $number;\n    column-width: percentage(math.div(1, $number));\n\n    & > * {\n      break-inside: avoid;\n    }\n  }\n}\n\n@mixin box-shadow($spread: 0.125rem) {\n  box-shadow: 0 0.125rem 0.25rem $spread rgba($colour-yankees-blue, 0.2);\n}\n\n@mixin fs-breakpoints($size) {\n  @if map-has-key($fs-breakpoint-values, $size) {\n    @media #{inspect(map-get($fs-breakpoint-values, $size))} {\n      @content;\n    }\n  }\n}\n\n@mixin ellipsis() {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n","$z-index-low: 2000;\n$z-index-medium: 5000;\n$z-index-high: 9000;\n//previous: $z-index-highest: 10000; current: max possible z-index\n$z-index-highest: 2147483641;\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);