# franklin-sites

React and Zurb Foundation based design system for life sciences web applications.

The purpose of Franklin is to create a library a re-usable user interface components, with some components specific to displaying biological data.

## Development setup

This repo uses [pnpm](https://pnpm.io), pinned via the `packageManager` field in `package.json`. The easiest way to get the right version is corepack, which ships with Node (≥ 24 required):

```shell
corepack enable   # one-time; may need sudo depending on your Node install
pnpm install
```

Alternatively, [install pnpm yourself](https://pnpm.io/installation).

## pnpm tasks

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
npm install franklin-sites
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
npm login
rm -rf node_modules; pnpm install; pnpm release
```
