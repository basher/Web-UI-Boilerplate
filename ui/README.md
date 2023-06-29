# Web UI Boilerplate - the actual 'UI' code

## Useful commands
From `ui` directory:
- `yarn reset` - Deletes `node_modules` folder and reinstalls with `yarn install`.
- `yarn start` - Installs Node modules (if not already installed), launches Parcel bundler to compile/watch files, and sets the port for HMR (Hot Module Reloading) to work in Storybook.
- `yarn storybook` - Launches Storybook/HTML component library. Run this in a different terminal instance to Parcel.
- `yarn build` - Compiles and minifies files, for production and local dev environments.

## Code authoring guidelines & accessibility
- All UI components are authored with **semantic HTML5** markup, which is **progressively enhanced** with JavaScript and `WAI-ARIA` as appropriate.
- The HTML markup uses the `BEM` methodology to provide CSS namespacing.
- Visual styling is minimal & unopinionated.
- The CSS is authored with as little code as necessary, making full use of the CSS cascade and inheritance.

## Linting
This boilerplate provides lint configurations for both JavaScript and CSS.

### Linter configuration
- Install the following VSCode extensions:
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
    - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- Where appropriate, additional NPM packages have been installed according to the `parser`, `extends`, `plugins` and `rules` fields in these configs:
    - `.eslintrc.js`
    - `.stylelintrc`
    - `.prettierrc`


> NOTES:
> - `Eslint` errors will only be shown in VSCode if you open VSCode from the project root directory, not a parent directory.
> - In order for `.eslintignore` to work correctly, there's a custom `.vscode/settings.json` in the root directory which defines the correct working directory (i.e. `ui` sub-directory).
> - `Postcss` has been installed as a `devDependency`, otherwise `stylelint` throws type errors due to its own postcss dependencies.
> - The VSCode `stylelint` extension introduced changes that break the `stylelint v14` NPM package. To fix this, the following settings have been added in the custom VSCode `settings.json` file:
> ```
> "css.validate": false,
> "scss.validate": false,
> "stylelint.enable": true,
> "stylelint.validate": [
>     "scss",
>     "postcss"
> ]
> ```

### Other recommended extensions for VSCode
- [ES6 template literal syntax highlighter](https://marketplace.visualstudio.com/items?itemName=julienetie.vscode-template-literals). Useful when editing Storybook/HTML stories, which use ES6 template literals.

## Supported browsers
- The [default browserslist configuration](https://github.com/browserslist/browserslist#best-practices) has been defined in `.browserslistrc`.
- Run `npx browserslist` to see a list of supported browsers.

### Testing for browser support in the UI

> NOTE: The syntax for the [supported-browsers](https://github.com/browserslist/browserslist-useragent-regexp#browserslist-useragent-regexp) script differs in Windows environments versus MacOS/Linux.
- The `supported-browsers` script in `package.json` uses the `browserslist-useragent-regexp` package to extract the browserslist config into an exportable JavaScript module containing a REGEX of supported browsers.
- This is imported in the generated REGEX in `src/javascript/utils/browser-support.ts` to match against the current browser.

## Parcel bundler
```
"start:parcel": "parcel watch src/javascript/index.ts --hmr-port 1234 --target app"
```
- The command above starts the Parcel server, but it does not need to be run as `yarn start` does it.
- See the `HMR` section further down for an explanation of the `--hmr-port 1234` argument.
- The `--target app` argument enables transpilation of both CSS and JavaScript in **local DEV mode**. By default, Parcel only does this for production builds.

### JavaScript transpilation and differential bundling
- See [Parcel default Babel presets](https://parceljs.org/languages/javascript/#default-presets).
    - Note that `babel-eslint` has been [deprecated](https://github.com/babel/babel-eslint) in favour of `@babel/eslint-parser`.
    - `@typescript-eslint/parser` is also needed, due to TypeScript usage.
    - Parcel leverages the `.browserslistrc` config to determine what level of transpilation to perform.
- See [Parcel differential bundling](https://parceljs.org/features/targets/#differential-bundling).

### TypeScript
- Parcel [automatically transpiles TypeScript](https://parceljs.org/languages/typescript/).
    - The `typescript` NPM package is required for `ESLint` and `Prettier` to work together.
    - A `tsconfig.json` is needed, even if it's empty. Otherwise, TypeScript errors/warnings are not displayed in the editor.

### Polyfills
- A separate `polyfills` bundle is created for browsers that don't support the required features in `src/javascript/config/browser-supports-features.ts`.

### Sass
- Sass compilation is done automatically.
    - If Parcel sees Sass files in the project, it automatically installs `@parcel/transformer-sass`.
    - There is no need to install `postcss` or `autoprefixer`.

### Dev dependencies
- The default Babel presets mentioned above are sufficient.
- There is no need for a `.babelrc` file with additional presets (e.g. `@babel/preset-env`) and plugins.

## Storybook/HTML component library

### Hot module reloading (HMR)
- The `start:parcel` NPM script mentioned earlier doesn't actually start the default Parcel server.
- Instead, it simply [watches files and defines a port for the HMR server](https://parceljs.org/features/cli/#parcel-watch-%3Centries%3E).
- This means that Storybook updates automatically with any CSS/JavaScript changes.

### Dev dependencies
- `babel-loader` is needed for Storybook.

## Trouble-shooting bundling and build issues
- If bundling breaks, or UI is not updated (in DEV mode) to reflect latest CSS/JavaScript changes:
    - Kill the Parcel Node process with `CTRL+C`.
    - Run `yarn start` again.
