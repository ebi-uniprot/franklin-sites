(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[6481],{"./stories/Doughnut.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DoughnutChart:function(){return Doughnut_stories_DoughnutChart},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Doughnut_stories}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),doughnut_chart=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/doughnut-chart.scss"),doughnut_chart_default=__webpack_require__.n(doughnut_chart),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(doughnut_chart_default(),options),doughnut_chart_default()&&doughnut_chart_default().locals&&doughnut_chart_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var src_components_doughnut_chart=_ref=>{let leftTransformerDegree,rightTransformerDegree,{size:size="medium",percent:percent=0,bgColorClass:bgColorClass="colour-platinum",colorClass:colorClass="colour-sea-blue",children:children}=_ref;return percent>=50?(rightTransformerDegree="180deg",leftTransformerDegree=3.6*(percent-50)+"deg"):(rightTransformerDegree=3.6*percent+"deg",leftTransformerDegree="0deg"),(0,jsx_runtime.jsxs)("span",{className:`doughnut-chart--${size} ${bgColorClass}`,children:[(0,jsx_runtime.jsx)("span",{className:`doughnut-chart--${size}__left-wrap`,children:(0,jsx_runtime.jsx)("span",{className:`doughnut-chart--${size}__left-wrap__loader ${colorClass}`,style:{transform:`rotate(${leftTransformerDegree})`}})}),(0,jsx_runtime.jsx)("span",{className:`doughnut-chart--${size}__right-wrap`,children:(0,jsx_runtime.jsx)("span",{className:`doughnut-chart--${size}__right-wrap__loader ${colorClass}`,style:{transform:`rotate(${rightTransformerDegree})`}})}),(0,jsx_runtime.jsx)("span",{className:`doughnut-chart--${size}__inner-circle`,style:{},children:children||(0,jsx_runtime.jsx)("span",{children:`${percent}%`})})]})};try{doughnutchart.displayName="doughnutchart",doughnutchart.__docgenInfo={description:"",displayName:"doughnutchart",props:{size:{defaultValue:{value:"medium"},description:"The bubble size (default is medium)",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},colorClass:{defaultValue:{value:"colour-sea-blue"},description:"The chart colour",name:"colorClass",required:!1,type:{name:"string"}},bgColorClass:{defaultValue:{value:"colour-platinum"},description:"The background chart colour",name:"bgColorClass",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"The ratio to be displayed in percent.",name:"percent",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/doughnut-chart.tsx#doughnutchart"]={docgenInfo:doughnutchart.__docgenInfo,name:"doughnutchart",path:"src/components/doughnut-chart.tsx#doughnutchart"})}catch(__react_docgen_typescript_loader_error){}var Doughnut_stories={component:src_components_doughnut_chart,title:"Visualisation",argTypes:{size:{options:["small","medium","large"],control:{type:"select"}}},args:{percent:100/3,children:"1/3",colorClass:"colour-uniref",bgColorClass:"colour-sky-white"},render:({colorClass:colorClass,bgColorClass:bgColorClass,children:children,percent:percent,size:size})=>(0,jsx_runtime.jsx)(src_components_doughnut_chart,{percent:percent,colorClass:colorClass,bgColorClass:bgColorClass,size:size,children:children})};const Doughnut_stories_DoughnutChart={},__namedExportsOrder=["DoughnutChart"];Doughnut_stories_DoughnutChart.parameters={...Doughnut_stories_DoughnutChart.parameters,docs:{...Doughnut_stories_DoughnutChart.parameters?.docs,source:{originalSource:"{}",...Doughnut_stories_DoughnutChart.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/doughnut-chart.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.visually-hidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.doughnut-chart--small{overflow:hidden;position:relative;display:inline-block;margin:0 .2rem;vertical-align:middle;width:25.6px;height:25.6px;border-radius:12.8px;font-size:.7333333333rem}.doughnut-chart--small__left-wrap{overflow:hidden;position:absolute;top:0;left:0;width:12.8px;height:25.6px}.doughnut-chart--small__left-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:0 50%;left:12.8px;width:12.8px;height:25.6px;border-top-left-radius:0;border-bottom-left-radius:0}.doughnut-chart--small__right-wrap{overflow:hidden;position:absolute;top:0;left:12.8px;width:12.8px;height:25.6px}.doughnut-chart--small__right-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:100% 50%;left:-12.8px;width:12.8px;height:25.6px;border-top-right-radius:0;border-bottom-right-radius:0}.doughnut-chart--small__inner-circle{background-color:#fbfeff;position:relative;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;left:2px;top:2px;width:21.6px;height:21.6px;border-radius:10.8px}.doughnut-chart--medium{overflow:hidden;position:relative;display:inline-block;margin:0 .2rem;vertical-align:middle;width:48px;height:48px;border-radius:24px;font-size:1.0833333333rem}.doughnut-chart--medium__left-wrap{overflow:hidden;position:absolute;top:0;left:0;width:24px;height:48px}.doughnut-chart--medium__left-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:0 50%;left:24px;width:24px;height:48px;border-top-left-radius:0;border-bottom-left-radius:0}.doughnut-chart--medium__right-wrap{overflow:hidden;position:absolute;top:0;left:24px;width:24px;height:48px}.doughnut-chart--medium__right-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:100% 50%;left:-24px;width:24px;height:48px;border-top-right-radius:0;border-bottom-right-radius:0}.doughnut-chart--medium__inner-circle{background-color:#fbfeff;position:relative;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;left:2px;top:2px;width:44px;height:44px;border-radius:22px}.doughnut-chart--large{overflow:hidden;position:relative;display:inline-block;margin:0 .2rem;vertical-align:middle;width:80px;height:80px;border-radius:40px;font-size:1.5833333333rem}.doughnut-chart--large__left-wrap{overflow:hidden;position:absolute;top:0;left:0;width:40px;height:80px}.doughnut-chart--large__left-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:0 50%;left:40px;width:40px;height:80px;border-top-left-radius:0;border-bottom-left-radius:0}.doughnut-chart--large__right-wrap{overflow:hidden;position:absolute;top:0;left:40px;width:40px;height:80px}.doughnut-chart--large__right-wrap__loader{position:absolute;left:0;top:0;border-radius:1000px;transform-origin:100% 50%;left:-40px;width:40px;height:80px;border-top-right-radius:0;border-bottom-right-radius:0}.doughnut-chart--large__inner-circle{background-color:#fbfeff;position:relative;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;left:2px;top:2px;width:76px;height:76px;border-radius:38px}","",{version:3,sources:["webpack://./src/styles/_colours.scss","webpack://./src/styles/common/_utils.scss","webpack://./src/styles/components/doughnut-chart.scss"],names:[],mappings:"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",sourcesContent:["/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","@use 'sass:math';\n@import '../settings';\n\n$small-bubble: 1.6rem;\n$medium-bubble: 3rem;\n$large-bubble: 5rem;\n\n$rootPx: 16px;\n\n@function remToPx($rem) {\n  @return unitless-calc($rem) * $rootPx;\n}\n\n@function pxToRem($px) {\n  @return math.div(unitless-calc($px), unitless-calc($rootPx)) + 0px;\n}\n\n@function bubbleFontSize($size) {\n  @return $size * 0.25 + 0.3333333333;\n}\n\n/******************************************************************************\\\n *                                                                            *\n * Visually hide any element (mostly text) accessibly.                        *\n * Support includes IE9+                                                      *\n * Source: https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html  *\n *                                                                            *\n ******************************************************************************/\n.visually-hidden:not(:focus):not(:active) {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n","@import '../settings';\n@import '../colours';\n@import '../common/utils';\n\n$border-width: 2px;\n\n@mixin doughnut-chart($remSize) {\n  $size: remToPx($remSize * 0.5);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 $global-margin * 0.2;\n  vertical-align: middle;\n  width: $size * 2;\n  height: $size * 2;\n  border-radius: $size;\n  font-size: bubbleFontSize($remSize);\n\n  &__left-wrap {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: $size;\n    height: $size * 2;\n\n    &__loader {\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-radius: 1000px;\n      transform-origin: 0 50%;\n      left: $size;\n      width: $size;\n      height: $size * 2;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n\n  &__right-wrap {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: $size;\n    width: $size;\n    height: $size * 2;\n\n    &__loader {\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-radius: 1000px;\n      transform-origin: 100% 50%;\n      left: -$size;\n      width: $size;\n      height: $size * 2;\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n\n  &__inner-circle {\n    background-color: $colour-sky-white;\n    position: relative;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    left: $border-width;\n    top: $border-width;\n    width: ($size - $border-width) * 2;\n    height: ($size - $border-width) * 2;\n    border-radius: $size - $border-width;\n  }\n}\n\n.doughnut-chart--small {\n  @include doughnut-chart($small-bubble);\n}\n\n.doughnut-chart--medium {\n  @include doughnut-chart($medium-bubble);\n}\n\n.doughnut-chart--large {\n  @include doughnut-chart($large-bubble);\n}\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);