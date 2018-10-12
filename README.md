# franklin

React and Zurb Foundation based design system for life sciences web applications.

The purpose of Franklin is to create a library a re-usable user interface components, with some components specific to displaying biological data.

## yarn tasks

Build CSS

```shell
yarn run build-css #build css
yarn run watch-css #indeed
```

The css files are compiled into the `dist/` directory.

Building the Franklin site

```shell
yarn run dev-server #run a local server and build with development flag
yarn run jslint #run linter for JS
yarn run test #run JEST tests
yarn run update-snapshots #update JEST snapshots
yarn run remove-obsolete-snapshots #what it says on the tin
yarn run build-site #build Franklin site
yarn run start #watch CSS and run dev-server
```

## How to use

Get from npm:

```shell
yarn install franklin-sites
```

Include the base css from `node_modules/franklin-sites/src/styles/index.scss`

You can then load components like:

```javascript
import { TreeSelect } from "franklin-sites";
```
