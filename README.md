# franklin-sites

React and Zurb Foundation based design system for life sciences web applications.

The purpose of Franklin is to create a library a re-usable user interface components, with some components specific to displaying biological data.

## yarn tasks

Building the Franklin site

```shell
    "start": //start the local dev application,
    "build-site": //build the franklin website,
    "build-library": //build the franklin library (npm package),
    "build": //build both site and library,
    "docgen": //generate documentation for components
    "jslint": //check code style,
    "test": //run tests and check code style,
    "test-watch": //watch tests
```

## How to use

Get from npm:

```shell
yarn install franklin-sites
```

Wrap your application in the `FranklinSite` tag:

```javascript
import { FranklinSite } from "franklin-sites";

...
<FranklinSite>
  //Your content goes here//
</FranklinSite>
```

## How to release

```
Releasing franklin
npm login
rm -rf node_modules; yarn; yarn release
```
