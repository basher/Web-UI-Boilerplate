# Web UI Boilerplate - the actual 'UI' code

## Useful commands recap (described fully in project root README)
From `ui` directory:
- `npm run start:theme --theme=[theme-name]`
- `npm run storybook`
- `npm run build:theme --theme=[theme-name]`
- `npm run bundle-all-themes`

> NOTE: Simply running `npm start` will launch Parcel bundler with the most recently specified theme.

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
> "stylelint.enable": true,
> "stylelint.validate": [
>     "css",
>     "postcss"
> ]
> ```

### Git pre-commit hooks
Configured using `husky` and `lint-staged` to ensure no linting errors are committed to the remote codebase.

> NOTE:
> Run `npm run prepare` from `ui` directory to install husky shell script. Do this just ONCE after cloning the repo.

### Other recommended extensions for VSCode
- [ES6 template literal syntax highlighter](https://marketplace.visualstudio.com/items?itemName=julienetie.vscode-template-literals). Useful when editing Storybook/HTML stories, which use ES6 template literals.

## Supported browsers
- The [default browserslist configuration](https://github.com/browserslist/browserslist#best-practices) has been defined in `package.json`.
- Run `npx browserslist` to see a list of supported browsers.

## Parcel bundler
```
"start:parcel": "parcel watch src/javascript/index.ts --hmr-port 1234 --target app"
```
- This command does not need to be explicitly run as `npm run start:theme...` does it for you.
- See the `HMR` section further down for an explanation of the `--hmr-port 1234` argument.
- The `--target app` argument enables transpilation of both CSS and JavaScript in **local DEV mode**. By default, Parcel only does this for production builds.

### JavaScript transpilation and differential bundling
- There's no need for a `.babelrc` config. See [Parcel default Babel presets](https://parceljs.org/languages/javascript/#default-presets).
    - Note that `babel-eslint` has been [deprecated](https://github.com/babel/babel-eslint) in favour of `@babel/eslint-parser`.
    - `@typescript-eslint/parser` is also needed, due to TypeScript usage.
    - Parcel leverages the `browserslist` config in `package.json` to determine what level of transpilation to perform.
- The JavaScript bundles contains non-transpiled `ES6+` code for modern browsers, and transpiled `ES5` code for legacy browsers. See [Parcel differential bundling](https://parceljs.org/features/targets/#differential-bundling).

### TypeScript
- Parcel [automatically transpiles TypeScript](https://parceljs.org/languages/typescript/).
    - The `typescript` NPM package is required for `ESLint` and `Prettier` to work together.
    - A `tsconfig.json` is needed, even if it's empty. Otherwise, TypeScript errors/warnings are not displayed in the editor.

### Polyfills
- A separate `polyfills` bundle is created for browsers that don't support the required features in `src/javascript/config/browser-supports-features.ts`.

### CSS
- CSS compilation is done automatically.

### Dev dependencies
- The default Babel presets mentioned above are sufficient.
- There is no need for a `.babelrc` file with additional presets (e.g. `@babel/preset-env`) and plugins.

## Storybook/HTML component library

### Hot module reloading (HMR)
- The `start:parcel` NPM script mentioned earlier doesn't actually start the default Parcel server.
- Instead, it simply [watches files and defines a port for the HMR server](https://parceljs.org/features/cli/#parcel-watch-%3Centries%3E).
- This means that Storybook updates automatically with any CSS/JavaScript changes.

### Re-ordering stories in sidebar navigation
- All stories and docs are ordered according to the `storySort` configuration in `ui/.storybook/preview.js`.

## Trouble-shooting bundling and build issues
- If bundling breaks, or UI is not updated (in DEV mode) to reflect latest CSS/JavaScript changes:
    - Kill the Parcel Node process with `CTRL+C`.
    - Run `npm run start:theme...` again.
