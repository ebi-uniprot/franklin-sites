# franklin
React and Zurb Foundation based design system for life sciences web applications.

The purpose of Franklin is to create a library a re-usable user interface components, with some components specific to displaying biological data.

## npm tasks
```shell
npm run dev-server #run a local server and build with development flag
npm run dev #build with development flag
npm run build #build with production flag
npm run jslint #run linter for JS
npm run csslint #run linter for CSS
npm run update-snapshots #update JEST snapshots
npm run remove-obsolete-snapshots #what it says on the tin
npm run build-css #build CSS code independently
npm run watch-css #indeed
npm run start-dev #watch CSS and run dev-server
```

## How to use
Get from npm:
```shell
npm install franklin-sites
```
Include the base css from `node_modules/franklin-sites/src/styles/index.scss`

You can then load components from `node_modules/franklin-sites/src/ui/components/`
