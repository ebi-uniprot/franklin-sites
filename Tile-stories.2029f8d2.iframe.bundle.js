(self.webpackChunkfranklin_sites=self.webpackChunkfranklin_sites||[]).push([[3951],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./stories/Tile.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTile:function(){return BasicTile},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Tile_stories}});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),lorem_ipsum_dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),components_tile=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/tile.scss"),tile_default=__webpack_require__.n(components_tile),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tile_default(),options),tile_default()&&tile_default().locals&&tile_default().locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Tile=_ref=>{let{title:title,headingLevel:headingLevel="h2",subtitle:subtitle,backgroundColor:backgroundColor,backgroundImage:backgroundImage,gradient:gradient=!1,width:width,className:className,style:style,children:children,descriptionSlideUp:descriptionSlideUp=!1,link:link}=_ref;const TitleHeadingLevel=headingLevel,SubtitleHeadingLevel="h"+(+headingLevel[1]+1);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(className,"tile",{"tile-gradient":gradient,"tile--has-link":link}),style:_objectSpread(_objectSpread({},style),{},{"--tile-background":backgroundColor,width:width}),children:[link&&(0,jsx_runtime.jsx)(link.type,_objectSpread(_objectSpread({},link.props),{},{"aria-hidden":"true",tabIndex:-1})),(0,jsx_runtime.jsx)("div",{className:"tile__background-image","aria-hidden":"true",children:backgroundImage}),(0,jsx_runtime.jsxs)("div",{className:"tile__main-content",children:[(0,jsx_runtime.jsx)(TitleHeadingLevel,{className:"tile__header big",children:title}),subtitle&&(0,jsx_runtime.jsx)(SubtitleHeadingLevel,{className:"tile__subtitle small",children:subtitle})]}),children&&(0,jsx_runtime.jsx)("small",{className:classnames_default()("tile__description",descriptionSlideUp&&"tile__description--animated"),children:children})]})};var src_components_tile=Tile;try{Tile.displayName="Tile",Tile.__docgenInfo={description:"",displayName:"Tile",props:{title:{defaultValue:null,description:"The tile title",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)"}},headingLevel:{defaultValue:{value:"h2"},description:"The tile title heading level",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},subtitle:{defaultValue:null,description:"The tile subtitle",name:"subtitle",required:!1,type:{name:"ReactNode"}},backgroundColor:{defaultValue:null,description:"The background color",name:"backgroundColor",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"The background image",name:"backgroundImage",required:!1,type:{name:"ReactNode"}},gradient:{defaultValue:{value:"false"},description:"Whether to create a gradient based on the backgroung color or not",name:"gradient",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"The width Tile square (css value). By default it will use the\nwidth of the provided container.",name:"width",required:!1,type:{name:"string"}},descriptionSlideUp:{defaultValue:{value:"false"},description:"Whether to slide up the description when the mouse is over the tile.\nCan be useful if the description text is long.",name:"descriptionSlideUp",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"Target/link of the list item when clicking on it",name:"link",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tile.tsx#Tile"]={docgenInfo:Tile.__docgenInfo,name:"Tile",path:"src/components/tile.tsx#Tile"})}catch(__react_docgen_typescript_loader_error){}try{tile.displayName="tile",tile.__docgenInfo={description:"",displayName:"tile",props:{title:{defaultValue:null,description:"The tile title",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)"}},headingLevel:{defaultValue:{value:"h2"},description:"The tile title heading level",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},subtitle:{defaultValue:null,description:"The tile subtitle",name:"subtitle",required:!1,type:{name:"ReactNode"}},backgroundColor:{defaultValue:null,description:"The background color",name:"backgroundColor",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"The background image",name:"backgroundImage",required:!1,type:{name:"ReactNode"}},gradient:{defaultValue:{value:"false"},description:"Whether to create a gradient based on the backgroung color or not",name:"gradient",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"The width Tile square (css value). By default it will use the\nwidth of the provided container.",name:"width",required:!1,type:{name:"string"}},descriptionSlideUp:{defaultValue:{value:"false"},description:"Whether to slide up the description when the mouse is over the tile.\nCan be useful if the description text is long.",name:"descriptionSlideUp",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"Target/link of the list item when clicking on it",name:"link",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tile.tsx#tile"]={docgenInfo:tile.__docgenInfo,name:"tile",path:"src/components/tile.tsx#tile"})}catch(__react_docgen_typescript_loader_error){}var _path,_g,_defs,components_button=__webpack_require__("./src/components/button.tsx"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var uniprotkb_illustration=function SvgUniprotkbIllustration(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:268,height:254,fill:"none",viewBox:"0 0 268 254"},props),_path||(_path=react.createElement("path",{fill:"#76DBF4",fillRule:"evenodd",d:"M90.74 84.992c-1.625-2.02-2.61-4.94-2.815-8.813-.16-3.038.26-6.397 2.872-9.603 1.386-1.702 3.33-3.287 5.989-4.757-2.22-3.198-5.315-6.83-9.312-9.692-4.505-3.225-10.134-5.462-17.006-5.036-6.893.426-15.267 3.545-25.21 11.463a2 2 0 1 1-2.489-3.131c10.386-8.27 19.519-11.834 27.452-12.325 7.959-.492 14.479 2.123 19.581 5.776 4.705 3.37 8.222 7.628 10.631 11.191a57 57 0 0 1 4.561-1.677c2.303-.745 4.712-1.197 7.106-1.158 1.997-2.12 4.726-3.818 7.936-5.222 4.284-1.874 8.827-2.803 12.944-2.633 2.435-3.113 5.641-5.747 8.894-7.338 3.131-1.532 6.29-2.07 9.344-1.64q.124-.291.262-.574c1.51-3.07 4.257-5.114 8.324-6.002 2.178-.475 4.264-.53 6.224-.22.872-1.199 2.03-2.292 3.501-3.267 1.955-1.294 4.465-2.717 6.986-3.472 1.894-.568 4.112-.848 6.115-.088.308-.346.671-.74 1.073-1.152 1.23-1.259 3.032-2.896 4.905-3.732 2.704-1.206 5.343-1.204 7.738-.413 1.085-1.381 2.518-2.7 4.409-3.831 2.841-1.699 6.029-2.743 9.309-2.38 1.143-2.041 2.653-3.724 4.441-4.947 2.652-1.815 5.856-2.552 9.146-1.883 1.404.286 2.793.822 4.14 1.608 1.527-1.885 3.482-3.563 5.741-4.726 2.899-1.493 6.334-2.152 9.946-1.243q1.152.289 2.294.786c3.193-3.076 7.39-4.163 10.915-4.447 2.382-.192 4.566-.031 6.146.173.794.103 1.444.218 1.902.309a20 20 0 0 1 .689.149l.011.002a2.001 2.001 0 1 1-.952 3.885l-.095-.022q-.143-.033-.431-.09a25 25 0 0 0-1.637-.266c-1.394-.18-3.287-.316-5.312-.153-2.69.217-5.431.934-7.618 2.622 1.552 1.191 3.068 2.717 4.528 4.606 3.212 4.159 4.771 7.864 5.009 11.049.244 3.247-.903 5.86-2.853 7.565-3.701 3.235-10.161 2.91-13.008-1.888-2.266-3.82-3.193-7.154-3.032-10.435.158-3.228 1.364-6.177 2.904-9.204q.144-.28.294-.55a10 10 0 0 0-.729-.212c-2.528-.636-4.967-.198-7.14.92-1.686.869-3.189 2.14-4.384 3.59a22 22 0 0 1 1.906 2.067c1.315 1.619 4.326 5.73 6.076 9.885.864 2.05 1.529 4.36 1.333 6.483-.102 1.097-.439 2.197-1.145 3.165-.711.976-1.709 1.697-2.937 2.166-2.013.767-3.946.656-5.631-.297-1.591-.9-2.742-2.427-3.585-4.085-1.681-3.31-2.519-7.913-2.804-12.189-.136-2.04.426-4.217 1.43-6.247a9.5 9.5 0 0 0-2.769-1.056c-2.177-.443-4.285.03-6.09 1.265-1.007.689-1.938 1.636-2.721 2.813 3.398 1.667 6.447 5.025 9.064 10.263 3.197 6.4 1.476 12.808-3.049 14.757-2.314.997-4.948.547-7.126-1.363-2.11-1.849-3.753-4.998-4.687-9.466-.877-4.196-.731-8.092.206-11.423-1.815.064-3.706.72-5.642 1.877a12.2 12.2 0 0 0-2.827 2.3c2.385 1.736 4.369 4.21 5.847 6.834 1.718 3.052 2.853 6.485 3.105 9.557.242 2.948-.302 6.206-2.789 8.001-1.006.726-2.143 1.08-3.335.95-1.146-.125-2.116-.674-2.893-1.323-1.509-1.261-2.72-3.27-3.649-5.215-.956-2-1.726-4.176-2.264-5.995-.517-1.745-.885-3.38-.924-4.232-.062-1.372.023-4.038 1.192-6.9-1.303-.263-2.648-.13-4.033.487-1.138.508-2.496 1.67-3.674 2.875-.246.251-.475.496-.684.724 1.788 1.783 4.166 4.596 6.123 7.663 1.311 2.053 2.494 4.315 3.179 6.545.675 2.201.938 4.618.066 6.8-.727 1.819-1.796 3.3-3.303 4.059-1.597.804-3.285.601-4.726-.169-2.689-1.436-4.871-4.956-6.147-9.281a28 28 0 0 1-.926-11.36 26 26 0 0 1 .555-3.022c-.771-.146-1.771-.064-3.038.316-1.974.592-4.105 1.77-5.925 2.976a11 11 0 0 0-1.542 1.22c3.254 1.54 5.986 4.204 7.977 7.657 1.454 2.52 3.338 5.824 4.13 8.906.4 1.558.577 3.255.138 4.863-.463 1.693-1.558 3.095-3.312 4.041-1.82.981-3.66 1.028-5.336.332-1.57-.652-2.847-1.89-3.862-3.21-2.032-2.643-3.519-6.286-4.44-8.986-1.146-3.36-1.903-6.73-1.467-9.867q.085-.607.228-1.193a13.2 13.2 0 0 0-3.595.297c-3.038.663-4.652 2.019-5.543 3.77 2.221.96 4.278 2.441 6.132 4.346 2.497 2.565 5.207 6.106 6.532 9.646.666 1.778 1.04 3.708.72 5.579-.333 1.947-1.391 3.662-3.259 4.926-2.062 1.396-4.241 1.547-6.232.667-1.84-.814-3.33-2.42-4.489-4.169-2.33-3.517-3.88-8.464-4.272-12.365-.203-2.015-.248-3.982-.027-5.824-2.069-.203-4.274.193-6.588 1.325-2.086 1.02-4.192 2.594-5.996 4.476 2.59.751 4.891 2.095 6.566 4.151 2.182 2.679 4.038 5.896 4.686 9.121.666 3.31.059 6.767-2.892 9.361-1.516 1.333-3.196 2.032-4.954 2.074-1.728.04-3.324-.557-4.708-1.445-2.718-1.745-4.968-4.83-6.488-7.888-1.971-3.966-1.279-8.3.574-12.064-2.805.211-5.83.967-8.78 2.257-1.761.77-3.25 1.59-4.479 2.46 3.484 1.262 6.526 3.885 8.823 8.143 1.564 2.9 2.013 6.047 1.353 8.776-.665 2.753-2.487 5.107-5.362 6.07-2.777.932-5.423.425-7.625-1.393-2.083-1.72-3.653-4.507-4.811-7.97-1.281-3.833-1.349-7.289-.147-10.335a21 21 0 0 0-3.166.77 55 55 0 0 0-3.651 1.316c.448.786.821 1.489 1.119 2.078.301.592.527 1.071.68 1.407q.114.252.175.392l.046.109.014.031.004.01.001.003c.001.002.001.003-1.847.767 1.849-.761 1.849-.76 1.85-.76l.004.01.009.023.032.08q.04.1.11.284a37 37 0 0 1 1.361 4.476c.63 2.685 1.159 6.385.24 9.54-.556 1.911-1.999 3.495-3.656 4.55-1.677 1.069-3.783 1.736-5.93 1.616-2.197-.122-4.388-1.073-6.046-3.134m10.176-15.924-.022-.051-.016-.038q-.046-.106-.145-.325a34 34 0 0 0-.607-1.257 46 46 0 0 0-1.192-2.194c-2.42 1.31-4.002 2.63-5.036 3.899-1.765 2.167-2.108 4.41-1.978 6.866.176 3.347 1.005 5.36 1.936 6.517.898 1.115 2.004 1.583 3.152 1.647 1.199.067 2.487-.312 3.559-.995 1.092-.696 1.754-1.57 1.965-2.295.616-2.118.302-4.966-.295-7.509a33 33 0 0 0-1.206-3.97l-.088-.23-.024-.06-.001-.001zm12.971-7.673q-.116.18-.223.362c-1.287 2.21-1.585 4.986-.332 8.733 1.05 3.142 2.309 5.118 3.564 6.154 1.135.938 2.337 1.179 3.807.686 1.372-.46 2.351-1.587 2.745-3.218.401-1.656.169-3.797-.985-5.936-2.032-3.767-4.564-5.666-7.217-6.465a11 11 0 0 0-1.359-.316m20.975-7.747-.038.062-.078.127c-2.131 3.515-2.726 7.032-1.319 9.862 1.357 2.73 3.199 5.104 5.067 6.303.909.584 1.729.83 2.452.812.692-.016 1.496-.277 2.408-1.079 1.623-1.426 2.069-3.293 1.611-5.568-.474-2.361-1.917-4.992-3.865-7.384-1.337-1.64-3.467-2.75-6.196-3.2zm19.264-8.199c-.097 1.262-.06 2.687.1 4.28.337 3.357 1.708 7.66 3.627 10.556.966 1.458 1.932 2.348 2.771 2.72.69.304 1.415.327 2.373-.322.984-.666 1.413-1.437 1.558-2.287.158-.926.001-2.104-.523-3.502-1.052-2.812-3.346-5.89-5.652-8.26-1.364-1.4-2.791-2.46-4.254-3.185m14.019-7.096a8 8 0 0 0-.159.822c-.304 2.19.202 4.832 1.291 8.025.888 2.605 2.207 5.735 3.825 7.84.809 1.053 1.568 1.682 2.225 1.954.552.23 1.131.257 1.903-.159.837-.451 1.192-.987 1.352-1.575.184-.672.158-1.6-.153-2.812-.632-2.458-2.209-5.282-3.721-7.903-1.694-2.94-3.938-5.06-6.563-6.192m16.068-5.161q-.053.336-.098.702a24 24 0 0 0 .794 9.733c1.168 3.961 2.924 6.207 4.194 6.885.539.288.835.229 1.042.124.298-.15.854-.632 1.389-1.97.39-.976.372-2.355-.176-4.143-.54-1.76-1.524-3.682-2.727-5.566a44.6 44.6 0 0 0-4.418-5.765m13.668-6.389a12.5 12.5 0 0 0-.806 4.973c.014.313.245 1.527.763 3.277.497 1.678 1.197 3.646 2.038 5.405.867 1.815 1.778 3.18 2.606 3.872.393.328.645.402.762.415.07.007.236.016.559-.217.737-.533 1.351-1.907 1.144-4.431-.197-2.402-1.119-5.282-2.605-7.921-1.226-2.178-2.768-4.07-4.461-5.373m14.482-6.735c-.804 2.682-.991 5.974-.204 9.739.836 4 2.193 6.212 3.408 7.276 1.145 1.004 2.159 1.02 2.907.697 1.602-.69 3.668-4.063 1.054-9.296-2.367-4.737-4.849-7.248-7.165-8.416m16.483-4.082c-.509 1.254-.728 2.433-.663 3.407.272 4.075 1.059 8.045 2.379 10.643.659 1.296 1.352 2.056 1.989 2.416.542.307 1.218.428 2.236.04.608-.232.936-.519 1.13-.784.198-.273.344-.646.394-1.178.105-1.136-.256-2.71-1.036-4.562-1.538-3.652-4.283-7.424-5.494-8.914q-.465-.571-.935-1.068m17.917-5.936a11 11 0 0 0-.26.48c-1.474 2.897-2.358 5.227-2.474 7.586-.113 2.305.501 4.866 2.478 8.199 1.397 2.355 4.851 2.737 6.934.917.941-.823 1.653-2.179 1.498-4.255-.161-2.139-1.259-5.112-4.187-8.902-1.344-1.74-2.684-3.054-3.989-4.025",clipRule:"evenodd"})),_g||(_g=react.createElement("g",{filter:"url(#a)"},react.createElement("path",{fill:"#00639A",d:"M37.36 66.226a2.197 2.197 0 1 0-.001-4.394 2.197 2.197 0 0 0 0 4.394m-2.197 4.394a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m-4.395 14.511a2.197 2.197 0 1 0 0-4.393 2.197 2.197 0 0 0 0 4.393"}),react.createElement("path",{fill:"#00639A",d:"M29.658 89.29a2.197 2.197 0 1 0 0-4.393 2.197 2.197 0 0 0 0 4.393m10.997-26.36a2.197 2.197 0 1 0 0-4.393 2.197 2.197 0 0 0 0 4.394m13.717 57.11a2.746 2.746 0 1 0 0-5.491 2.746 2.746 0 0 0 0 5.491"}),react.createElement("path",{fill:"#00639A",d:"M29.658 93.684a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m0 4.394a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m6.59 13.181a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394"}),react.createElement("path",{fill:"#00639A",d:"M39.544 114.549a2.197 2.197 0 1 0-.001-4.394 2.197 2.197 0 0 0 0 4.394"}),react.createElement("path",{fill:"#00639A",d:"M43.937 116.746a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m-10.984-9.881a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m-2.197-4.394a2.197 2.197 0 1 0 0-4.394 2.197 2.197 0 0 0 0 4.394m18.674 16.471a2.197 2.197 0 1 0-.001-4.394 2.197 2.197 0 0 0 0 4.394m10.985 1.098a3.295 3.295 0 1 0 0-6.59 3.295 3.295 0 0 0 0 6.59m7.14-3.295a3.844 3.844 0 1 0 0-7.689 3.844 3.844 0 0 0 0 7.689m6.041-5.491a4.394 4.394 0 1 0 0-8.787 4.394 4.394 0 0 0 0 8.787m3.305-8.545a4.394 4.394 0 1 0 0-8.787 4.394 4.394 0 0 0 0 8.787m2.187-23.859a4.943 4.943 0 1 1-9.886 0 4.943 4.943 0 0 1 9.886 0"}),react.createElement("path",{fill:"#00639A",d:"M77.44 93.679a4.943 4.943 0 1 0 0-9.886 4.943 4.943 0 0 0 0 9.886M65.906 76.104a5.492 5.492 0 1 0 0-10.984 5.492 5.492 0 0 0 0 10.984m-12.071-1.955a5.492 5.492 0 1 0 0-10.985 5.492 5.492 0 0 0 0 10.985"}),react.createElement("path",{fill:"#014371",d:"M29.67 81.836a6.59 6.59 0 1 0 0-13.181 6.59 6.59 0 0 0 0 13.181"}),react.createElement("path",{fill:"#00639A",d:"M18.135 92.587a7.14 7.14 0 1 0 0-14.28 7.14 7.14 0 0 0 0 14.28"}),react.createElement("path",{fill:"#014371",d:"M9.896 106.866a7.69 7.69 0 1 0 0-15.379 7.69 7.69 0 0 0 0 15.379"}),react.createElement("path",{fill:"#00639A",d:"M7.698 122.243a7.69 7.69 0 1 0 0-15.377 7.69 7.69 0 0 0 0 15.377"}),react.createElement("path",{fill:"#014371",d:"M8.796 138.72a7.69 7.69 0 1 0 0-15.377 7.69 7.69 0 0 0 0 15.377"}),react.createElement("path",{fill:"#00639A",d:"M16.477 152.994a7.69 7.69 0 1 0 0-15.379 7.69 7.69 0 0 0 0 15.379"}),react.createElement("path",{fill:"#014371",d:"M30.757 162.88a8.787 8.787 0 1 0 0-17.574 8.787 8.787 0 1 0 0 17.574"}),react.createElement("path",{fill:"#00639A",d:"M49.43 166.175c5.46 0 9.886-4.426 9.886-9.886s-4.426-9.886-9.886-9.886-9.886 4.426-9.886 9.886 4.426 9.886 9.886 9.886"}),react.createElement("path",{fill:"#014371",d:"M71.399 163.978c6.066 0 10.984-4.918 10.984-10.984s-4.918-10.984-10.984-10.984c-6.067 0-10.985 4.918-10.985 10.984s4.918 10.984 10.984 10.984"}),react.createElement("path",{fill:"#00639A",d:"M92.269 156.289c6.066 0 10.984-4.918 10.984-10.984s-4.918-10.984-10.984-10.984c-6.067 0-10.985 4.918-10.985 10.984s4.918 10.984 10.984 10.984"}),react.createElement("path",{fill:"#014371",d:"M112.04 146.403c6.066 0 10.984-4.918 10.984-10.984s-4.918-10.984-10.984-10.984-10.984 4.918-10.984 10.984 4.918 10.984 10.984 10.984"}),react.createElement("path",{fill:"#00639A",d:"M133.46 136.517c7.583 0 13.73-6.147 13.73-13.73s-6.147-13.73-13.73-13.73-13.73 6.147-13.73 13.73 6.147 13.73 13.73 13.73"}),react.createElement("path",{fill:"#014371",d:"M158.734 123.584c8.19 0 14.829-6.639 14.829-14.829s-6.639-14.829-14.829-14.829-14.829 6.639-14.829 14.829 6.639 14.829 14.829 14.829"}),react.createElement("path",{fill:"#00639A",d:"M187.842 112.6c8.493 0 15.378-6.885 15.378-15.378s-6.885-15.378-15.378-15.378-15.378 6.885-15.378 15.378 6.885 15.378 15.378 15.378"}),react.createElement("path",{fill:"#014371",d:"M219.696 118.091c9.1 0 16.476-7.376 16.476-16.476s-7.376-16.476-16.476-16.476-16.476 7.376-16.476 16.476 7.376 16.476 16.476 16.476"}),react.createElement("path",{fill:"#00639A",d:"M243.862 144.454c9.706 0 17.575-7.869 17.575-17.575s-7.869-17.575-17.575-17.575-17.575 7.869-17.575 17.575 7.869 17.575 17.575 17.575"}),react.createElement("path",{fill:"#014371",d:"M247.157 181.801c10.313 0 18.673-8.36 18.673-18.673s-8.36-18.673-18.673-18.673-18.673 8.36-18.673 18.673 8.36 18.673 18.673 18.673"}),react.createElement("path",{fill:"#00639A",d:"M230.681 218.05c10.92 0 19.772-8.852 19.772-19.772s-8.852-19.772-19.772-19.772-19.772 8.852-19.772 19.772 8.852 19.772 19.772 19.772"}),react.createElement("path",{fill:"#014371",d:"M194.423 239.776c11.526 0 20.87-9.344 20.87-20.87s-9.344-20.87-20.87-20.87-20.87 9.344-20.87 20.87 9.344 20.87 20.87 20.87"}),react.createElement("path",{fill:"#00639A",d:"M150.485 249.904c12.133 0 21.968-9.836 21.968-21.969s-9.835-21.968-21.968-21.968-21.969 9.835-21.969 21.968 9.836 21.969 21.969 21.969"}),react.createElement("path",{fill:"#014371",d:"M104.351 253.197c12.739 0 23.067-10.327 23.067-23.067s-10.328-23.067-23.067-23.067-23.067 10.328-23.067 23.067 10.328 23.067 23.067 23.067"}),react.createElement("path",{fill:"#00639A",d:"M61.514 230.988c13.346 0 24.165-10.819 24.165-24.165s-10.82-24.165-24.165-24.165c-13.347 0-24.166 10.819-24.166 24.165s10.82 24.165 24.166 24.165"}),react.createElement("path",{fill:"#014371",d:"M41.752 75.247a5.492 5.492 0 1 0 0-10.985 5.492 5.492 0 0 0 0 10.984"}))),_defs||(_defs=react.createElement("defs",null,react.createElement("filter",{id:"a",width:265.821,height:200.66,x:.009,y:58.537,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse"},react.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),react.createElement("feColorMatrix",{in:"SourceAlpha",result:"hardAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),react.createElement("feOffset",{dy:8}),react.createElement("feGaussianBlur",{stdDeviation:3}),react.createElement("feComposite",{in2:"hardAlpha",k2:-1,k3:1,operator:"arithmetic"}),react.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),react.createElement("feBlend",{in2:"shape",result:"effect1_innerShadow"})))))};var Tile_stories={title:"Navigation/Tile",component:src_components_tile,argTypes:{headingLevel:{control:"select",choices:["h1","h2","h3","h4","h5"]},backgroundColor:{control:"select",name:"--tile-background",options:["var(--fr--color-sapphire-blue)","var(--fr--color-sea-blue)","var(--fr--color-vivid-cerulean)","var(--fr--color-medium-turquoise)","var(--fr--color-gainsborough)","white","blue"]}},args:{headingLevel:"h3",title:"title",subtitle:"subtitle",backgroundColor:"var(--fr--color-sea-blue)",containerSize:"40%",buttonInDescription:!1},render:({title:title,headingLevel:headingLevel,containerSize:containerSize,withBackgroundImage:withBackgroundImage,subtitle:subtitle,gradient:gradient,descriptionSlideUp:descriptionSlideUp,buttonInDescription:buttonInDescription,backgroundColor:backgroundColor})=>(0,jsx_runtime.jsx)("div",{style:{width:containerSize},children:(0,jsx_runtime.jsxs)(src_components_tile,{title:title,headingLevel:headingLevel,backgroundColor:backgroundColor,backgroundImage:withBackgroundImage?(0,jsx_runtime.jsx)(uniprotkb_illustration,{}):null,subtitle:subtitle,gradient:gradient,descriptionSlideUp:descriptionSlideUp,link:(0,jsx_runtime.jsx)("a",{}),children:[(0,lorem_ipsum_dist.Ok)(),buttonInDescription&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(components_button.A,{onClick:(0,dist.XI)("description button clicked"),children:"Some button"})})]})})};const BasicTile={},__namedExportsOrder=["BasicTile"];BasicTile.parameters={...BasicTile.parameters,docs:{...BasicTile.parameters?.docs,source:{originalSource:"{}",...BasicTile.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/components/tile.scss":function(module,__unused_webpack_exports,__webpack_require__){var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}:root{--fr--color-sapphire-blue: #014371;--fr--color-sea-blue: #00639a;--fr--color-vivid-cerulean: #00a6d5;--fr--color-medium-turquoise: #46d6fa;--fr--color-gainsborough: #d2dce3;--fr--color-yankees-blue: #161d39;--fr--color-independence: #4e5a71;--fr--color-weldon-blue: #8194a1;--fr--color-pastel-blue: #abc7d6;--fr--color-platinum: #e4e8eb;--fr--color-sky-white: #fbfeff;--fr--color-reviewed: #c39b00;--fr--color-unreviewed: #c0c0c0;--fr--color-reference-proteome: #9d4a4d;--fr--color-uniprotkb: var(--fr--color-sea-blue);--fr--color-uniref: #f2994c;--fr--color-uniparc: #88c19d;--fr--color-proteomes: #e56358;--fr--color-peptide-search: #a748bd;--fr--color-id-mapping: #357b92;--fr--color-blast: #00a6d5;--fr--color-align: #b8ce48;--fr--color-help-green: #28aa50;--fr--color-warning: #ffcc33;--fr--color-failure: #f36968;--fr--color-success: #108f3b;--fr--color-info: #79cbf8;--fr--color-coyote-brown: #966336;--fr--color-outer-space: #374343;--fr--color-bronze: #a65708;--fr--color-link: var(--fr--color-sapphire-blue);--fr--color-selected: var(--fr--color-gainsborough);--fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);--fr--color-hover: #f5f9fc}.tile{display:flex;justify-content:center;position:relative;overflow:hidden;contain:content;background:var(--tile-background, #00639a);text-align:center;color:#fbfeff;aspect-ratio:1/1}.tile--has-link>*{pointer-events:none}.tile--has-link>a,.tile--has-link>button,.tile--has-link>input,.tile--has-link>label{pointer-events:initial}.tile--has-link>a{position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer}.tile.tile-gradient{background:linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2)) var(--tile-background, #00639a)}.tile__header,.tile__subtitle{color:#fbfeff;text-shadow:0 4px 4px rgba(0,0,0,.4);margin:0;line-height:1}.tile__header{display:block;margin-top:.5em;margin-bottom:0}.tile__main-content{position:relative;width:100%}.tile__description{display:block;padding:.7rem;line-height:1.6;width:100%;background-color:rgba(0,0,0,.5);height:50%;position:absolute;margin:0;bottom:0;left:0;overflow-y:hidden;transform:translateY(33%);pointer-events:none}.tile__description--animated{transition:transform .25s linear}.tile__description a,.tile__description button{pointer-events:initial}.tile__background-image{transition:background-color .25s ease;position:absolute;top:0;left:0;opacity:.8;width:100%;height:100%;padding:.5rem}.tile__background-image img{transition:filter .25s ease-out;width:100%;height:100%}.tile:hover .tile__main-content,.tile:focus .tile__main-content,.tile:focus-within .tile__main-content{outline-offset:-1ch}.tile:hover .tile__description--animated,.tile:focus .tile__description--animated,.tile:focus-within .tile__description--animated{transform:translateY(0);overflow-y:auto}.tile:hover .tile__background-image,.tile:focus .tile__background-image,.tile:focus-within .tile__background-image{background-color:rgba(0,0,0,.1)}.tile:hover .tile__background-image img,.tile:focus .tile__background-image img,.tile:focus-within .tile__background-image img{filter:blur(0.1rem)}.tile::before{content:"";padding-bottom:100%}@media(prefers-reduced-motion){.tile .tile__description{transform:translateY(0);overflow-y:auto}}',"",{version:3,sources:["webpack://./src/styles/_colours.scss","webpack://./src/styles/components/tile.scss"],names:[],mappings:"AAyDA,MAEE,kCAAA,CACA,6BAAA,CACA,mCAAA,CACA,qCAAA,CACA,iCAAA,CAGA,iCAAA,CACA,iCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,8BAAA,CAGA,6BAAA,CACA,+BAAA,CACA,uCAAA,CAGA,gDAAA,CACA,2BAAA,CACA,4BAAA,CACA,8BAAA,CAGA,mCAAA,CACA,+BAAA,CACA,0BAAA,CACA,0BAAA,CAGA,+BAAA,CAGA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGA,iCAAA,CACA,gCAAA,CACA,2BAAA,CAGA,gDAAA,CACA,mDAAA,CACA,yEAAA,CAEA,0BAAA,CApDF,MAEE,kCAAA,CACA,6BAAA,CACA,mCAAA,CACA,qCAAA,CACA,iCAAA,CAGA,iCAAA,CACA,iCAAA,CACA,gCAAA,CACA,gCAAA,CACA,6BAAA,CACA,8BAAA,CAGA,6BAAA,CACA,+BAAA,CACA,uCAAA,CAGA,gDAAA,CACA,2BAAA,CACA,4BAAA,CACA,8BAAA,CAGA,mCAAA,CACA,+BAAA,CACA,0BAAA,CACA,0BAAA,CAGA,+BAAA,CAGA,4BAAA,CACA,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGA,iCAAA,CACA,gCAAA,CACA,2BAAA,CAGA,gDAAA,CACA,mDAAA,CACA,yEAAA,CAEA,0BAAA,CCrGF,MACE,YAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,0CAAA,CACA,iBAAA,CACA,aDIiB,CCHjB,gBAAA,CAGE,kBACE,mBAAA,CAGF,qFAIE,sBAAA,CAGF,kBACE,iBAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,cAAA,CAIJ,oBACE,mIAAA,CASF,8BAEE,aDjCe,CCkCf,oCAAA,CACA,QAAA,CACA,aAAA,CAGF,cACE,aAAA,CACA,eAAA,CACA,eAAA,CAGF,oBACE,iBAAA,CACA,UAAA,CAGF,mBAIE,aAAA,CACA,aAAA,CACA,eAAA,CACA,UAAA,CACA,+BAAA,CACA,UAAA,CACA,iBAAA,CACA,QAAA,CACA,QAAA,CACA,MAAA,CACA,iBAAA,CACA,yBAAA,CAEA,mBAAA,CAhBA,6BACE,gCAAA,CAiBF,+CAEE,sBAAA,CAIJ,wBACE,qCAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CAEA,4BACE,+BAAA,CACA,UAAA,CACA,WAAA,CAQF,uGACE,mBAAA,CAGF,kIACE,uBAAA,CACA,eAAA,CAGF,mHACE,+BAAA,CACA,+HACE,mBAAA,CAMN,cACE,UAAA,CACA,mBAAA,CAIJ,+BACE,yBACE,uBAAA,CACA,eAAA,CAAA",sourcesContent:["/* \n** @name Colours\n** @template  ./app/html/colours.html\n** @text-only\n*/\n@import './settings';\n\n// PRIMARY COLOURS\n$colour-sapphire-blue: #014371;\n$colour-sea-blue: #00639a;\n$colour-vivid-cerulean: #00a6d5;\n$colour-medium-turquoise: #46d6fa;\n$colour-gainsborough: #d2dce3;\n\n// GREYSCALE\n$colour-yankees-blue: #161d39;\n$colour-independence: #4e5a71;\n$colour-weldon-blue: #8194a1;\n$colour-pastel-blue: #abc7d6;\n$colour-platinum: #e4e8eb;\n$colour-sky-white: #fbfeff;\n\n// CURATION\n$colour-reviewed: #c39b00;\n$colour-unreviewed: #c0c0c0;\n$colour-reference-proteome: #9d4a4d;\n\n// NAMESPACES\n$colour-uniref: #f2994c;\n$colour-uniparc: #88c19d;\n$colour-proteomes: #e56358;\n\n// TOOLS\n$colour-peptide-search: #a748bd;\n$colour-id-mapping: #357b92;\n$colour-blast: #00a6d5;\n$colour-align: #b8ce48;\n\n// HELP\n$colour-help-green: #28aa50;\n\n// MESSAGE COLOURS\n$colour-warning: #ffcc33;\n$colour-failure: #f36968;\n$colour-success: #108f3b;\n$colour-info: #79cbf8;\n\n// DATA VISUALISATION\n$colour-coyote-brown: #966336;\n$colour-outer-space: #374343;\n$colour-bronze: #a65708;\n\n// COLOUR VARIABLES\n$colour-link: $colour-sapphire-blue;\n$colour-selected: $colour-gainsborough;\n$colour-hover: lighten($colour-platinum, 5%);\n\n:root {\n  // PRIMARY COLOURS\n  --fr--color-sapphire-blue: #014371;\n  --fr--color-sea-blue: #00639a;\n  --fr--color-vivid-cerulean: #00a6d5;\n  --fr--color-medium-turquoise: #46d6fa;\n  --fr--color-gainsborough: #d2dce3;\n\n  // GREYSCALE\n  --fr--color-yankees-blue: #161d39;\n  --fr--color-independence: #4e5a71;\n  --fr--color-weldon-blue: #8194a1;\n  --fr--color-pastel-blue: #abc7d6;\n  --fr--color-platinum: #e4e8eb;\n  --fr--color-sky-white: #fbfeff;\n\n  // CURATION\n  --fr--color-reviewed: #c39b00;\n  --fr--color-unreviewed: #c0c0c0;\n  --fr--color-reference-proteome: #9d4a4d;\n\n  // NAMESPACES\n  --fr--color-uniprotkb: var(--fr--color-sea-blue);\n  --fr--color-uniref: #f2994c;\n  --fr--color-uniparc: #88c19d;\n  --fr--color-proteomes: #e56358;\n\n  // TOOLS\n  --fr--color-peptide-search: #a748bd;\n  --fr--color-id-mapping: #357b92;\n  --fr--color-blast: #00a6d5;\n  --fr--color-align: #b8ce48;\n\n  // HELP\n  --fr--color-help-green: #28aa50;\n\n  // MESSAGE COLOURS\n  --fr--color-warning: #ffcc33;\n  --fr--color-failure: #f36968;\n  --fr--color-success: #108f3b;\n  --fr--color-info: #79cbf8;\n\n  // DATA VISUALISATION\n  --fr--color-coyote-brown: #966336;\n  --fr--color-outer-space: #374343;\n  --fr--color-bronze: #a65708;\n\n  // COLOUR VARIABLES\n  --fr--color-link: var(--fr--color-sapphire-blue);\n  --fr--color-selected: var(--fr--color-gainsborough);\n  --fr--color-hover: oklch(from var(--fr--color-platinum) calc(l + 5%) c h);\n  // Static fallback in case color function are not supported\n  --fr--color-hover: #f5f9fc;\n}\n","@import '../settings';\n@import '../colours';\n@import '../mixins';\n\n$animation-time: 0.25s;\n\n$tile: '.tile';\n\n#{$tile} {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  contain: content;\n  background: var(--tile-background, #{$colour-sea-blue});\n  text-align: center;\n  color: $colour-sky-white;\n  aspect-ratio: 1/1;\n\n  &--has-link {\n    & > * {\n      pointer-events: none;\n    }\n\n    & > a,\n    & > button,\n    & > input,\n    & > label {\n      pointer-events: initial;\n    }\n\n    & > a {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      cursor: pointer;\n    }\n  }\n\n  &.tile-gradient {\n    background: linear-gradient(\n        45deg,\n        rgba(0, 0, 0, 0.2),\n        rgba(255, 255, 255, 0.2),\n        rgba(0, 0, 0, 0.2)\n      )\n      var(--tile-background, #{$colour-sea-blue});\n  }\n\n  &__header,\n  &__subtitle {\n    color: $colour-sky-white;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n    margin: 0;\n    line-height: 1;\n  }\n\n  &__header {\n    display: block;\n    margin-top: 0.5em;\n    margin-bottom: 0;\n  }\n\n  &__main-content {\n    position: relative;\n    width: 100%;\n  }\n\n  &__description {\n    &--animated {\n      transition: transform $animation-time linear;\n    }\n    display: block;\n    padding: 0.7rem;\n    line-height: 1.6;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 50%;\n    position: absolute;\n    margin: 0;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n    transform: translateY(33%);\n\n    pointer-events: none;\n\n    a,\n    button {\n      pointer-events: initial;\n    }\n  }\n\n  &__background-image {\n    transition: background-color $animation-time ease;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    padding: $global-padding * 0.5;\n\n    img {\n      transition: filter $animation-time ease-out;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  // Animations\n  &:hover,\n  &:focus,\n  &:focus-within {\n    #{$tile}__main-content {\n      outline-offset: -1ch;\n    }\n\n    #{$tile}__description--animated {\n      transform: translateY(0);\n      overflow-y: auto;\n    }\n\n    #{$tile}__background-image {\n      background-color: rgba(0, 0, 0, 0.1);\n      img {\n        filter: blur(0.1rem);\n      }\n    }\n  }\n\n  // CSS hack to have 1/1 aspect-ratio\n  &::before {\n    content: '';\n    padding-bottom: 100%; // meaning, 100% of the width to bottom padding\n  }\n}\n\n@media (prefers-reduced-motion) {\n  #{$tile} #{$tile}__description {\n    transform: translateY(0);\n    overflow-y: auto;\n  }\n}\n"],sourceRoot:""}]),module.exports=___CSS_LOADER_EXPORT___}}]);