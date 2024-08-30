(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[9797],{"./src/components/button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return Button},A:function(){return components_button}});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_buttons=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/common/_buttons.scss"),_buttons_default=__webpack_require__.n(_buttons),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(_buttons_default(),options),_buttons_default()&&_buttons_default().locals&&_buttons_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["element","className","variant","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Button=(0,react.forwardRef)(((_ref,ref)=>{let{element:element="button",className:className,variant:variant="primary",children:children}=_ref,props=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);"button"===element&&(props.type=props.type||"button");const Element=element;return(0,jsx_runtime.jsx)(Element,_objectSpread(_objectSpread({className:classnames_default()("button",variant,{disabled:props.disabled},className),ref:ref},props),{},{children:children}))}));var components_button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{element:{defaultValue:{value:"button"},description:"The element to use as a button",name:"element",required:!1,type:{name:'"button" | "a" | FunctionComponent<{}> | ComponentClass<{}, any>'}},disabled:{defaultValue:null,description:"Flag to disable the button",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type to pass to the underlying <button></button>",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"primary"},description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"Classnames to be added to the button",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{element:{defaultValue:{value:"button"},description:"The element to use as a button",name:"element",required:!1,type:{name:'"button" | "a" | FunctionComponent<{}> | ComponentClass<{}, any>'}},disabled:{defaultValue:null,description:"Flag to disable the button",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"Type to pass to the underlying <button></button>",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"primary"},description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},className:{defaultValue:null,description:"Classnames to be added to the button",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/common/_buttons.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.button{--main-color: var(--main-button-color, #00639a);white-space:nowrap;user-select:none}.button svg{width:.9rem;height:.9rem;margin-top:-0.2rem;margin-right:.5rem;vertical-align:middle;fill:#fbfeff}.button.large-icon svg{width:1.2rem;height:1.2rem;margin-top:-0.2rem;margin-right:.5rem}.button.primary,.button.primary.disabled{background-color:#00639a;background-color:var(--main-color)}.button.primary:hover,.button.primary:focus,.button.primary:focus-within{background-color:#00639a;background-color:var(--main-color);filter:brightness(90%)}.button.secondary,.button.secondary.disabled{color:#00639a;color:var(--main-color);border:.1rem solid currentColor;font-weight:700}.button.secondary svg,.button.secondary.disabled svg{fill:currentColor}.button.tertiary{background:none;color:#00639a;color:var(--main-color);font-weight:bold;padding:0;line-height:1.6;text-align:left}.button.tertiary:hover:disabled{color:#00639a;color:var(--main-color);background-color:#fbfeff}.button.tertiary svg{fill:currentColor}.button.tertiary.tertiary-icon__active svg{fill:#e4e8eb}.button-group{align-items:baseline;margin-bottom:.5rem}.button-group .tertiary{margin-right:1rem}","",{version:3,sources:["webpack://./src/styles/_colours.scss","webpack://./src/styles/common/_buttons.scss","webpack://./src/styles/_settings.scss"],names:[],mappings:"AAyDA,MAEE,kCAAA,CACA,6BAAA,CACA,mCAAA,CACA,qCAAA,CACA,iCAAA,CAGA,iCAAA,CACA,iCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,8BAAA,CAGA,6BAAA,CACA,+BAAA,CACA,uCAAA,CAGA,gDAAA,CACA,2BAAA,CACA,4BAAA,CACA,8BAAA,CAGA,mCAAA,CACA,+BAAA,CACA,0BAAA,CACA,0BAAA,CAGA,+BAAA,CAGA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGA,iCAAA,CACA,gCAAA,CACA,2BAAA,CAGA,gDAAA,CACA,mDAAA,CACA,yEAAA,CAEA,0BAAA,CC1GF,QACE,+CAAA,CACA,kBAAA,CAEA,gBAAA,CAEA,YACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,qBAAA,CACA,YDKe,CCFjB,uBACE,YAAA,CACA,aAAA,CACA,kBAAA,CACA,kBAAA,CAIA,yCAEE,wBDnBY,CCoBZ,kCAAA,CAGF,yEAGE,wBD1BY,CC2BZ,kCAAA,CACA,sBAAA,CAKF,6CAEE,aDnCY,CCoCZ,uBAAA,CACA,+BAAA,CACA,eAAA,CAEA,qDACE,iBAAA,CAKN,iBACE,eAAA,CACA,aDhDc,CCiDd,uBAAA,CACA,gBC+BiB,CD9BjB,SAAA,CACA,eAAA,CACA,eAAA,CAEA,gCACE,aDxDY,CCyDZ,uBAAA,CACA,wBD/Ca,CCkDf,qBACE,iBAAA,CAIA,2CACE,YDzDU,CCgElB,cACE,oBAAA,CACA,mBAAA,CAEA,wBACE,iBAAA",sourcesContent:["/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","@import '../settings';\n@import '../colours';\n\n.button {\n  --main-color: var(--main-button-color, #{$colour-sea-blue});\n  white-space: nowrap;\n\n  user-select: none;\n\n  svg {\n    width: 0.9rem;\n    height: 0.9rem;\n    margin-top: -0.2rem;\n    margin-right: 0.5rem;\n    vertical-align: middle;\n    fill: $colour-sky-white;\n  }\n\n  &.large-icon svg {\n    width: 1.2rem;\n    height: 1.2rem;\n    margin-top: -0.2rem;\n    margin-right: 0.5rem;\n  }\n\n  &.primary {\n    &,\n    &.disabled {\n      background-color: $colour-sea-blue;\n      background-color: var(--main-color);\n    }\n\n    &:hover,\n    &:focus,\n    &:focus-within {\n      background-color: $colour-sea-blue;\n      background-color: var(--main-color);\n      filter: brightness(90%);\n    }\n  }\n\n  &.secondary {\n    &,\n    &.disabled {\n      color: $colour-sea-blue;\n      color: var(--main-color);\n      border: 0.1rem solid currentColor;\n      font-weight: 700;\n\n      svg {\n        fill: currentColor;\n      }\n    }\n  }\n\n  &.tertiary {\n    background: none;\n    color: $colour-sea-blue;\n    color: var(--main-color);\n    font-weight: $global-weight-bold;\n    padding: 0;\n    line-height: 1.6;\n    text-align: left;\n\n    &:hover:disabled {\n      color: $colour-sea-blue;\n      color: var(--main-color);\n      background-color: $colour-sky-white;\n    }\n\n    svg {\n      fill: currentColor;\n    }\n\n    &.tertiary-icon__active {\n      svg {\n        fill: $colour-platinum;\n      }\n    }\n  }\n}\n\n/* overriding Foundation */\n.button-group {\n  align-items: baseline;\n  margin-bottom: $global-margin * 0.5;\n\n  .tertiary {\n    margin-right: 1rem;\n  }\n}\n","//  Foundation for Sites Settings\n//  -----------------------------\n//\n//  Table of Contents:\n//\n//   1. Global\n//   2. Breakpoints\n//   3. The Grid\n//   4. Base Typography\n//   5. Typography Helpers\n//   6. Abide\n//   7. Accordion\n//   8. Accordion Menu\n//   9. Badge\n//  10. Breadcrumbs\n//  11. Button\n//  12. Button Group\n//  13. Callout\n//  14. Card\n//  15. Close Button\n//  16. Drilldown\n//  17. Dropdown\n//  18. Dropdown Menu\n//  19. Flexbox Utilities\n//  20. Forms\n//  21. Label\n//  22. Media Object\n//  23. Menu\n//  24. Meter\n//  25. Off-canvas\n//  26. Orbit\n//  27. Pagination\n//  28. Progress Bar\n//  29. Prototype Arrow\n//  30. Prototype Border-Box\n//  31. Prototype Border-None\n//  32. Prototype Bordered\n//  33. Prototype Display\n//  34. Prototype Font-Styling\n//  35. Prototype List-Style-Type\n//  36. Prototype Overflow\n//  37. Prototype Position\n//  38. Prototype Rounded\n//  39. Prototype Separator\n//  40. Prototype Shadow\n//  41. Prototype Sizing\n//  42. Prototype Spacing\n//  43. Prototype Text-Decoration\n//  44. Prototype Text-Transformation\n//  45. Prototype Text-Utilities\n//  46. Responsive Embed\n//  47. Reveal\n//  48. Slider\n//  49. Switch\n//  50. Table\n//  51. Tabs\n//  52. Thumbnail\n//  53. Title Bar\n//  54. Tooltip\n//  55. Top Bar\n//  56. Xy Grid\n\n@import 'foundation-sites/scss/util/util';\n\n// 1. Global\n// ---------\n\n$global-font-size: 100%;\n$global-width: rem-calc(1200);\n$global-lineheight: 1.5;\n$foundation-palette: (\n  primary: #1779ba,\n  secondary: #ffffff,\n  success: #3adb76,\n  warning: #ffae00,\n  alert: #cc4b37,\n);\n$light-gray: #e6e6e6;\n$medium-gray: #cacaca;\n$dark-gray: #8a8a8a;\n$black: #0a0a0a;\n$white: #fefefe;\n$body-background: $white;\n$body-font-color: $black;\n$body-font-family: Lato, Helvetica, Roboto, Arial, sans-serif;\n$body-antialiased: true;\n$global-margin: 1rem;\n$global-padding: 1rem;\n$global-position: 1rem;\n$global-weight-normal: normal;\n$global-weight-bold: bold;\n$global-radius: 0;\n$global-menu-padding: 0.7rem 1rem;\n$global-menu-nested-margin: 1rem;\n$global-text-direction: ltr;\n$global-flexbox: true;\n$global-prototype-breakpoints: false;\n$global-button-cursor: auto;\n$global-color-pick-contrast-tolerance: 0;\n$print-transparent-backgrounds: true;\n\n@include add-foundation-colors;\n\n// 2. Breakpoints\n// --------------\n\n$breakpoints: (\n  small: 0,\n  medium: 640px,\n  large: 1024px,\n  xlarge: 1200px,\n  xxlarge: 1440px,\n);\n$print-breakpoint: large;\n$breakpoint-classes: (small medium large);\n\n// 3. The Grid\n// -----------\n\n$grid-row-width: $global-width;\n$grid-column-count: 12;\n$grid-column-gutter: (\n  small: 20px,\n  medium: 30px,\n);\n$grid-column-align-edge: true;\n$grid-column-alias: 'columns';\n$block-grid-max: 8;\n\n// 4. Base Typography\n// ------------------\n\n$header-font-family: $body-font-family;\n$header-font-weight: $global-weight-normal;\n$header-font-style: normal;\n$font-family-monospace: Consolas, 'Liberation Mono', Courier, monospace;\n$header-color: inherit;\n$header-lineheight: 1.4;\n$header-margin-bottom: 0.5rem;\n$header-styles: (\n  small: (\n    'h1': (\n      'font-size': 24,\n    ),\n    'h2': (\n      'font-size': 20,\n    ),\n    'h3': (\n      'font-size': 19,\n    ),\n    'h4': (\n      'font-size': 18,\n    ),\n    'h5': (\n      'font-size': 17,\n    ),\n    'h6': (\n      'font-size': 16,\n    ),\n  ),\n  medium: (\n    'h1': (\n      'font-size': 48,\n    ),\n    'h2': (\n      'font-size': 40,\n    ),\n    'h3': (\n      'font-size': 31,\n    ),\n    'h4': (\n      'font-size': 25,\n    ),\n    'h5': (\n      'font-size': 20,\n    ),\n    'h6': (\n      'font-size': 16,\n    ),\n  ),\n);\n$header-text-rendering: optimizeLegibility;\n$small-font-size: 80%;\n$header-small-font-color: $black;\n$paragraph-lineheight: 1.6;\n$paragraph-margin-bottom: 1rem;\n$paragraph-text-rendering: optimizeLegibility;\n$code-color: $black;\n$code-font-family: $font-family-monospace;\n$code-font-weight: $global-weight-normal;\n$code-background: $light-gray;\n$code-border: 1px solid $medium-gray;\n$code-padding: rem-calc(2 5 1);\n$anchor-color: $primary-color;\n$anchor-color-hover: scale-color($anchor-color, $lightness: -14%);\n$anchor-text-decoration: none;\n$anchor-text-decoration-hover: none;\n$hr-width: $global-width;\n$hr-border: 1px solid $medium-gray;\n$hr-margin: rem-calc(20) auto;\n$list-lineheight: $paragraph-lineheight;\n$list-margin-bottom: $paragraph-margin-bottom;\n$list-style-type: disc;\n$list-style-position: outside;\n$list-side-margin: 1.25rem;\n$list-nested-side-margin: 1.25rem;\n$defnlist-margin-bottom: 1rem;\n$defnlist-term-weight: $global-weight-bold;\n$defnlist-term-margin-bottom: 0.3rem;\n$blockquote-color: $dark-gray;\n$blockquote-padding: rem-calc(9 20 0 19);\n$blockquote-border: 1px solid $medium-gray;\n$cite-font-size: rem-calc(13);\n$cite-color: $dark-gray;\n$cite-pseudo-content: '\\2014 \\0020';\n$keystroke-font: $font-family-monospace;\n$keystroke-color: $black;\n$keystroke-background: $light-gray;\n$keystroke-padding: rem-calc(2 4 0);\n$keystroke-radius: $global-radius;\n$abbr-underline: 1px dotted $black;\n\n// 5. Typography Helpers\n// ---------------------\n\n$lead-font-size: $global-font-size * 1.25;\n$lead-lineheight: 1.6;\n$subheader-lineheight: 1.4;\n$subheader-color: $dark-gray;\n$subheader-font-weight: $global-weight-normal;\n$subheader-margin-top: 0.2rem;\n$subheader-margin-bottom: 0.5rem;\n$stat-font-size: 2.5rem;\n\n// 6. Abide\n// --------\n\n$abide-inputs: true;\n$abide-labels: true;\n$input-background-invalid: get-color(alert);\n$form-label-color-invalid: get-color(alert);\n$input-error-color: get-color(alert);\n$input-error-font-size: rem-calc(12);\n$input-error-font-weight: $global-weight-bold;\n\n// 7. Accordion\n// ------------\n\n$accordion-background: $white;\n$accordion-plusminus: true;\n$accordion-title-font-size: rem-calc(12);\n$accordion-item-color: $primary-color;\n$accordion-item-background-hover: $light-gray;\n$accordion-item-padding: 1.25rem 1rem;\n$accordion-content-background: $white;\n$accordion-content-border: 1px solid $light-gray;\n$accordion-content-color: $body-font-color;\n$accordion-content-padding: 1rem;\n\n// 8. Accordion Menu\n// -----------------\n\n$accordionmenu-padding: $global-menu-padding;\n$accordionmenu-nested-margin: $global-menu-nested-margin;\n$accordionmenu-submenu-padding: $accordionmenu-padding;\n$accordionmenu-arrows: true;\n$accordionmenu-arrow-color: $primary-color;\n$accordionmenu-item-background: null;\n$accordionmenu-border: null;\n$accordionmenu-submenu-toggle-background: null;\n$accordion-submenu-toggle-border: $accordionmenu-border;\n$accordionmenu-submenu-toggle-width: 40px;\n$accordionmenu-submenu-toggle-height: $accordionmenu-submenu-toggle-width;\n$accordionmenu-arrow-size: 6px;\n\n// 9. Badge\n// --------\n\n$badge-background: $primary-color;\n$badge-color: $white;\n$badge-color-alt: $black;\n$badge-palette: $foundation-palette;\n$badge-padding: 0.3em;\n$badge-minwidth: 2.1em;\n$badge-font-size: 0.6rem;\n\n// 10. Breadcrumbs\n// ---------------\n\n$breadcrumbs-margin: 0 0 $global-margin 0;\n$breadcrumbs-item-font-size: rem-calc(11);\n$breadcrumbs-item-color: $primary-color;\n$breadcrumbs-item-color-current: $black;\n$breadcrumbs-item-color-disabled: $medium-gray;\n$breadcrumbs-item-margin: 0.75rem;\n$breadcrumbs-item-uppercase: true;\n$breadcrumbs-item-separator: true;\n$breadcrumbs-item-separator-item: '/';\n$breadcrumbs-item-separator-item-rtl: '\\\\';\n$breadcrumbs-item-separator-color: $medium-gray;\n\n// 11. Button\n// ----------\n\n$button-font-family: inherit;\n$button-padding: 0.85em 1em;\n$button-margin: 0 0 $global-margin 0;\n$button-fill: solid;\n$button-background: $primary-color;\n$button-background-hover: scale-color($button-background, $lightness: -15%);\n$button-color: $white;\n$button-color-alt: $black;\n$button-radius: $global-radius;\n$button-hollow-border-width: 1px;\n$button-sizes: (\n  tiny: 0.6rem,\n  small: 0.75rem,\n  default: 0.9rem,\n  large: 1.25rem,\n);\n$button-palette: $foundation-palette;\n$button-opacity-disabled: 0.25;\n$button-background-hover-lightness: -20%;\n$button-hollow-hover-lightness: -50%;\n$button-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n$button-responsive-expanded: false;\n\n// 12. Button Group\n// ----------------\n\n$buttongroup-margin: 1rem;\n$buttongroup-spacing: 1px;\n$buttongroup-child-selector: '.button';\n$buttongroup-expand-max: 6;\n$buttongroup-radius-on-each: true;\n\n// 13. Callout\n// -----------\n\n$callout-background: $white;\n$callout-background-fade: 85%;\n$callout-border: 1px solid rgba($black, 0.25);\n$callout-margin: 0 0 1rem 0;\n$callout-padding: 1rem;\n$callout-font-color: $body-font-color;\n$callout-font-color-alt: $body-background;\n$callout-radius: $global-radius;\n$callout-link-tint: 30%;\n\n// 14. Card\n// --------\n\n$card-background: $white;\n$card-font-color: $body-font-color;\n$card-divider-background: $light-gray;\n$card-border: 1px solid $light-gray;\n$card-shadow: none;\n$card-border-radius: $global-radius;\n$card-padding: $global-padding;\n$card-margin-bottom: $global-margin;\n\n// 15. Close Button\n// ----------------\n\n$closebutton-position: right top;\n$closebutton-offset-horizontal: (\n  small: 0.66rem,\n  medium: 1rem,\n);\n$closebutton-offset-vertical: (\n  small: 0.33em,\n  medium: 0.5rem,\n);\n$closebutton-size: (\n  small: 1.5em,\n  medium: 2em,\n);\n$closebutton-lineheight: 1;\n$closebutton-color: $dark-gray;\n$closebutton-color-hover: $black;\n\n// 16. Drilldown\n// -------------\n\n$drilldown-transition: transform 0.15s linear;\n$drilldown-arrows: true;\n$drilldown-padding: $global-menu-padding;\n$drilldown-nested-margin: 0;\n$drilldown-background: $white;\n$drilldown-submenu-padding: $drilldown-padding;\n$drilldown-submenu-background: $white;\n$drilldown-arrow-color: $primary-color;\n$drilldown-arrow-size: 6px;\n\n// 17. Dropdown\n// ------------\n\n$dropdown-padding: 1rem;\n$dropdown-background: $body-background;\n$dropdown-border: 1px solid $medium-gray;\n$dropdown-font-size: 1rem;\n$dropdown-width: 300px;\n$dropdown-radius: $global-radius;\n$dropdown-sizes: (\n  tiny: 100px,\n  small: 200px,\n  large: 400px,\n);\n\n// 18. Dropdown Menu\n// -----------------\n\n$dropdownmenu-arrows: true;\n$dropdownmenu-arrow-color: $anchor-color;\n$dropdownmenu-arrow-size: 6px;\n$dropdownmenu-arrow-padding: 1.5rem;\n$dropdownmenu-min-width: 200px;\n$dropdownmenu-background: $white;\n$dropdownmenu-submenu-background: $dropdownmenu-background;\n$dropdownmenu-padding: $global-menu-padding;\n$dropdownmenu-nested-margin: 0;\n$dropdownmenu-submenu-padding: $dropdownmenu-padding;\n$dropdownmenu-border: 1px solid $medium-gray;\n$dropdown-menu-item-color-active: get-color(primary);\n$dropdown-menu-item-background-active: transparent;\n\n// 19. Flexbox Utilities\n// ---------------------\n\n$flex-source-ordering-count: 6;\n$flexbox-responsive-breakpoints: true;\n\n// 20. Forms\n// ---------\n\n$fieldset-border: 1px solid $medium-gray;\n$fieldset-padding: rem-calc(20);\n$fieldset-margin: rem-calc(18 0);\n$legend-padding: rem-calc(0 3);\n$form-spacing: rem-calc(16);\n$helptext-color: $black;\n$helptext-font-size: rem-calc(13);\n$helptext-font-style: italic;\n$input-prefix-color: $black;\n$input-prefix-background: $light-gray;\n$input-prefix-border: 1px solid $medium-gray;\n$input-prefix-padding: 1rem;\n$form-label-color: $black;\n$form-label-font-size: rem-calc(14);\n$form-label-font-weight: $global-weight-normal;\n$form-label-line-height: 1.8;\n$select-background: $white;\n$select-triangle-color: $dark-gray;\n$select-radius: $global-radius;\n$input-color: $black;\n$input-placeholder-color: $medium-gray;\n$input-font-family: inherit;\n$input-font-size: rem-calc(16);\n$input-font-weight: $global-weight-normal;\n$input-line-height: $global-lineheight;\n$input-background: $white;\n$input-background-focus: $white;\n$input-background-disabled: $light-gray;\n$input-border: 1px solid $medium-gray;\n$input-border-focus: 1px solid $dark-gray;\n$input-padding: $form-spacing * 0.5;\n$input-shadow: inset 0 1px 2px rgba($black, 0.1);\n$input-shadow-focus: 0 0 5px $medium-gray;\n$input-cursor-disabled: not-allowed;\n$input-transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n$input-number-spinners: true;\n$input-radius: $global-radius;\n$form-button-radius: $global-radius;\n\n// 21. Label\n// ---------\n\n$label-background: $primary-color;\n$label-color: $white;\n$label-color-alt: $black;\n$label-palette: $foundation-palette;\n$label-font-size: 0.8rem;\n$label-padding: 0.33333rem 0.5rem;\n$label-radius: $global-radius;\n\n// 22. Media Object\n// ----------------\n\n$mediaobject-margin-bottom: $global-margin;\n$mediaobject-section-padding: $global-padding;\n$mediaobject-image-width-stacked: 100%;\n\n// 23. Menu\n// --------\n\n$menu-margin: 0;\n$menu-nested-margin: $global-menu-nested-margin;\n$menu-items-padding: $global-menu-padding;\n$menu-simple-margin: 1rem;\n$menu-item-color-active: $white;\n$menu-item-background-active: get-color(primary);\n$menu-icon-spacing: 0.25rem;\n$menu-item-background-hover: $light-gray;\n$menu-state-back-compat: true;\n$menu-centered-back-compat: true;\n$menu-icons-back-compat: true;\n\n// 24. Meter\n// ---------\n\n$meter-height: 1rem;\n$meter-radius: $global-radius;\n$meter-background: $medium-gray;\n$meter-fill-good: $success-color;\n$meter-fill-medium: $warning-color;\n$meter-fill-bad: $alert-color;\n\n// 25. Off-canvas\n// --------------\n\n$offcanvas-sizes: (\n  small: 250px,\n);\n$offcanvas-vertical-sizes: (\n  small: 250px,\n);\n$offcanvas-background: $light-gray;\n$offcanvas-shadow: 0 0 10px rgba($black, 0.7);\n$offcanvas-inner-shadow-size: 20px;\n$offcanvas-inner-shadow-color: rgba($black, 0.25);\n$offcanvas-overlay-zindex: 11;\n$offcanvas-push-zindex: 12;\n$offcanvas-overlap-zindex: 13;\n$offcanvas-reveal-zindex: 12;\n$offcanvas-transition-length: 0.5s;\n$offcanvas-transition-timing: ease;\n$offcanvas-fixed-reveal: true;\n$offcanvas-exit-background: rgba($white, 0.25);\n$maincontent-class: 'off-canvas-content';\n\n// 26. Orbit\n// ---------\n\n$orbit-bullet-background: $medium-gray;\n$orbit-bullet-background-active: $dark-gray;\n$orbit-bullet-diameter: 1.2rem;\n$orbit-bullet-margin: 0.1rem;\n$orbit-bullet-margin-top: 0.8rem;\n$orbit-bullet-margin-bottom: 0.8rem;\n$orbit-caption-background: rgba($black, 0.5);\n$orbit-caption-padding: 1rem;\n$orbit-control-background-hover: rgba($black, 0.5);\n$orbit-control-padding: 1rem;\n$orbit-control-zindex: 10;\n\n// 27. Pagination\n// --------------\n\n$pagination-font-size: rem-calc(14);\n$pagination-margin-bottom: $global-margin;\n$pagination-item-color: $black;\n$pagination-item-padding: rem-calc(3 10);\n$pagination-item-spacing: rem-calc(1);\n$pagination-radius: $global-radius;\n$pagination-item-background-hover: $light-gray;\n$pagination-item-background-current: $primary-color;\n$pagination-item-color-current: $white;\n$pagination-item-color-disabled: $medium-gray;\n$pagination-ellipsis-color: $black;\n$pagination-mobile-items: false;\n$pagination-mobile-current-item: false;\n$pagination-arrows: true;\n\n// 28. Progress Bar\n// ----------------\n\n$progress-height: 1rem;\n$progress-background: $medium-gray;\n$progress-margin-bottom: $global-margin;\n$progress-meter-background: $primary-color;\n$progress-radius: $global-radius;\n\n// 29. Prototype Arrow\n// -------------------\n\n$prototype-arrow-directions: (down, up, right, left);\n$prototype-arrow-size: 0.4375rem;\n$prototype-arrow-color: $black;\n\n// 30. Prototype Border-Box\n// ------------------------\n\n$prototype-border-box-breakpoints: $global-prototype-breakpoints;\n\n// 31. Prototype Border-None\n// -------------------------\n\n$prototype-border-none-breakpoints: $global-prototype-breakpoints;\n\n// 32. Prototype Bordered\n// ----------------------\n\n$prototype-bordered-breakpoints: $global-prototype-breakpoints;\n$prototype-border-width: rem-calc(1);\n$prototype-border-type: solid;\n$prototype-border-color: $medium-gray;\n\n// 33. Prototype Display\n// ---------------------\n\n$prototype-display-breakpoints: $global-prototype-breakpoints;\n$prototype-display: (inline, inline-block, block, table, table-cell);\n\n// 34. Prototype Font-Styling\n// --------------------------\n\n$prototype-font-breakpoints: $global-prototype-breakpoints;\n$prototype-wide-letter-spacing: rem-calc(4);\n$prototype-font-normal: $global-weight-normal;\n$prototype-font-bold: $global-weight-bold;\n\n// 35. Prototype List-Style-Type\n// -----------------------------\n\n$prototype-list-breakpoints: $global-prototype-breakpoints;\n$prototype-style-type-unordered: (disc, circle, square);\n$prototype-style-type-ordered: (\n  decimal,\n  lower-alpha,\n  lower-latin,\n  lower-roman,\n  upper-alpha,\n  upper-latin,\n  upper-roman\n);\n\n// 36. Prototype Overflow\n// ----------------------\n\n$prototype-overflow-breakpoints: $global-prototype-breakpoints;\n$prototype-overflow: (visible, hidden, scroll);\n\n// 37. Prototype Position\n// ----------------------\n\n$prototype-position-breakpoints: $global-prototype-breakpoints;\n$prototype-position: (static, relative, absolute, fixed);\n$prototype-position-z-index: 975;\n\n// 38. Prototype Rounded\n// ---------------------\n\n$prototype-rounded-breakpoints: $global-prototype-breakpoints;\n$prototype-border-radius: rem-calc(3);\n\n// 39. Prototype Separator\n// -----------------------\n\n$prototype-separator-breakpoints: $global-prototype-breakpoints;\n$prototype-separator-align: center;\n$prototype-separator-height: rem-calc(2);\n$prototype-separator-width: 3rem;\n$prototype-separator-background: $primary-color;\n$prototype-separator-margin-top: $global-margin;\n\n// 40. Prototype Shadow\n// --------------------\n\n$prototype-shadow-breakpoints: $global-prototype-breakpoints;\n$prototype-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),\n  0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n// 41. Prototype Sizing\n// --------------------\n\n$prototype-sizing-breakpoints: $global-prototype-breakpoints;\n$prototype-sizing: (width, height);\n$prototype-sizes: (\n  25: 25%,\n  50: 50%,\n  75: 75%,\n  100: 100%,\n);\n\n// 42. Prototype Spacing\n// ---------------------\n\n$prototype-spacing-breakpoints: $global-prototype-breakpoints;\n$prototype-spacers-count: 3;\n\n// 43. Prototype Text-Decoration\n// -----------------------------\n\n$prototype-decoration-breakpoints: $global-prototype-breakpoints;\n$prototype-text-decoration: (overline, underline, line-through);\n\n// 44. Prototype Text-Transformation\n// ---------------------------------\n\n$prototype-transformation-breakpoints: $global-prototype-breakpoints;\n$prototype-text-transformation: (lowercase, uppercase, capitalize);\n\n// 45. Prototype Text-Utilities\n// ----------------------------\n\n$prototype-utilities-breakpoints: $global-prototype-breakpoints;\n$prototype-text-overflow: ellipsis;\n\n// 46. Responsive Embed\n// --------------------\n\n$responsive-embed-margin-bottom: rem-calc(16);\n$responsive-embed-ratios: (\n  default: 4 by 3,\n  widescreen: 16 by 9,\n);\n\n// 47. Reveal\n// ----------\n\n$reveal-background: $white;\n$reveal-width: 600px;\n$reveal-max-width: $global-width;\n$reveal-padding: $global-padding;\n$reveal-border: 1px solid $medium-gray;\n$reveal-radius: $global-radius;\n$reveal-zindex: 1005;\n$reveal-overlay-background: rgba($black, 0.45);\n\n// 48. Slider\n// ----------\n\n$slider-width-vertical: 0.5rem;\n$slider-transition: all 0.2s ease-in-out;\n$slider-height: 0.5rem;\n$slider-background: $light-gray;\n$slider-fill-background: $medium-gray;\n$slider-handle-height: 1.4rem;\n$slider-handle-width: 1.4rem;\n$slider-handle-background: $primary-color;\n$slider-opacity-disabled: 0.25;\n$slider-radius: $global-radius;\n\n// 49. Switch\n// ----------\n\n$switch-background: $medium-gray;\n$switch-background-active: $primary-color;\n$switch-height: 2rem;\n$switch-height-tiny: 1.5rem;\n$switch-height-small: 1.75rem;\n$switch-height-large: 2.5rem;\n$switch-radius: $global-radius;\n$switch-margin: $global-margin;\n$switch-paddle-background: $white;\n$switch-paddle-offset: 0.25rem;\n$switch-paddle-radius: $global-radius;\n$switch-paddle-transition: all 0.25s ease-out;\n\n// 50. Table\n// ---------\n\n$table-background: $white;\n$table-color-scale: 5%;\n$table-border: 1px solid smart-scale($table-background, $table-color-scale);\n$table-padding: rem-calc(8 10 10);\n$table-hover-scale: 2%;\n$table-row-hover: darken($table-background, $table-hover-scale);\n$table-row-stripe-hover: darken(\n  $table-background,\n  $table-color-scale + $table-hover-scale\n);\n$table-is-striped: true;\n$table-striped-background: smart-scale($table-background, $table-color-scale);\n$table-stripe: even;\n$table-head-background: smart-scale(\n  $table-background,\n  $table-color-scale * 0.5\n);\n$table-head-row-hover: darken($table-head-background, $table-hover-scale);\n$table-foot-background: smart-scale($table-background, $table-color-scale);\n$table-foot-row-hover: darken($table-foot-background, $table-hover-scale);\n$table-head-font-color: $body-font-color;\n$table-foot-font-color: $body-font-color;\n$show-header-for-stacked: false;\n$table-stack-breakpoint: medium;\n\n// 51. Tabs\n// --------\n\n$tab-margin: 0;\n$tab-background: $white;\n$tab-color: $primary-color;\n$tab-background-active: $light-gray;\n$tab-active-color: $primary-color;\n$tab-item-font-size: rem-calc(12);\n$tab-item-background-hover: $white;\n$tab-item-padding: 1.25rem 1.5rem;\n$tab-expand-max: 6;\n$tab-content-background: $white;\n$tab-content-border: $light-gray;\n$tab-content-color: $body-font-color;\n$tab-content-padding: 1rem;\n\n// 52. Thumbnail\n// -------------\n\n$thumbnail-border: solid 4px $white;\n$thumbnail-margin-bottom: $global-margin;\n$thumbnail-shadow: 0 0 0 1px rgba($black, 0.2);\n$thumbnail-shadow-hover: 0 0 6px 1px rgba($primary-color, 0.5);\n$thumbnail-transition: box-shadow 200ms ease-out;\n$thumbnail-radius: $global-radius;\n\n// 53. Title Bar\n// -------------\n\n$titlebar-background: $black;\n$titlebar-color: $white;\n$titlebar-padding: 0.5rem;\n$titlebar-text-font-weight: bold;\n$titlebar-icon-color: $white;\n$titlebar-icon-color-hover: $medium-gray;\n$titlebar-icon-spacing: 0.25rem;\n\n// 54. Tooltip\n// -----------\n\n$has-tip-cursor: help;\n$has-tip-font-weight: $global-weight-bold;\n$has-tip-border-bottom: dotted 1px $dark-gray;\n$tooltip-background-color: $black;\n$tooltip-color: $white;\n$tooltip-padding: 0.75rem;\n$tooltip-max-width: 10rem;\n$tooltip-font-size: $small-font-size;\n$tooltip-pip-width: 0.75rem;\n$tooltip-pip-height: $tooltip-pip-width * 0.866;\n$tooltip-radius: $global-radius;\n\n// 55. Top Bar\n// -----------\n\n$topbar-padding: 0.5rem;\n$topbar-background: $light-gray;\n$topbar-submenu-background: $topbar-background;\n$topbar-title-spacing: 0.5rem 1rem 0.5rem 0;\n$topbar-input-width: 200px;\n$topbar-unstack-breakpoint: medium;\n\n// 56. Xy Grid\n// -----------\n\n$xy-grid: true;\n$grid-container: $global-width;\n$grid-columns: 12;\n$grid-margin-gutters: (\n  small: 20px,\n  medium: 30px,\n);\n$grid-padding-gutters: $grid-margin-gutters;\n$grid-container-padding: $grid-padding-gutters;\n$grid-container-max: $global-width;\n$xy-block-grid-max: 8;\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);