# Web UI Boilerplate
Accessible UI boilerplate and component library for websites/webapps.
- Built with semantic HTML, CSS, native Web Components, vanilla JavaScript (TypeScript) and ARIA.
- Powered by Storybook.
- Bundled by Parcel.

```
No external frameworks have been harmed in the making of this boilerplate!
No React. No Vue. No CSS-in-JS. No Tailwind.
Just plain vanilla code. 😜
```

- Live Storybook URL = https://basher.github.io/Web-UI-Boilerplate/

## Compile and watch for UI changes
> NOTE: Use the correct Node version as listed in `ui/.nvmrc`. If necessary, install Node Version Manager (NVM).

Run both the following commands in **separate terminal instances** in order to be able to compile CSS/JavaScript and test the UI in Storybook.

From `ui` directory:
- `npm run start:theme --theme=[theme-name]` - Installs Node modules (if not already installed), launches Parcel bundler to compile/watch files (using the specified theme), and sets the port for HMR (Hot Module Reloading) to work in Storybook.
- `npm run storybook` - Launches Storybook/HTML component library.

### UI themes
- Theme-specific CSS is located in `ui/src/css/_THEMES` folder.
- Valid UI theme names are located in `ui/scripts/theme-config.js`.
- To change the theme in `DEV MODE`, stop the Parcel Node process with `CTRL+C`, and start new theme with `npm run start:theme --theme=[theme-name]`.
- This uses an NPM config variable in `ui/.npmrc`.
- The new theme will be loaded in Storybook.

## Bundle CSS/JavaScript for production without watch
From `ui` directory:
- `npm run build:theme --theme=[theme-name]` - Compiles and minifies files, for production and local dev environments.
- `npm run bundle-all-themes` - Bundles ALL themes.

## Local DEV environment (for example, .Net, PHP)
In order to use the bundled CSS/JavaScript in `localhost`, both `npm start:theme...` and `npm run storybook` need to be run.

However, these can be concatenated together into a single background task so that the Storybook application doesn't need to be actually loaded in the browser.

### Linking to compiled CSS/JavaScript
- There is a difference between `development` and `production` environments in terms of the locations of the compiled CSS/JavaScript.
- The `<link>` and `<script>` tags in `ui/.storybook/preview-head.html` use placeholders, which reference environment variables defined in `ui/.env` files:

```
<link href="%STORYBOOK_CSS_PATH%" rel="stylesheet" />
<script defer src="%STORYBOOK_JS_PATH%"></script>
```

#### DEVELOPMENT
Uses the Storybook dev server, with paths defined in `ui/.env.development`:
```
STORYBOOK_CSS_PATH=index.css
STORYBOOK_JS_PATH=index.js
```

#### PRODUCTION
Uses whatever build folder has been defined for the website / web application in `ui/.env.production`:
```
STORYBOOK_CSS_PATH=build/ui/default/css/index.css
STORYBOOK_JS_PATH=build/ui/default/javascript/index.js
```

## Build and publish Storybook
From `ui` directory:
- `npm run publish-storybook` - Runs Parcel build (using the `default` theme) to bundle CSS/JS in the `public` folder, which then gets copied to `storybook-static` folder.
- `npx http-server ./storybook-static` - Test production build on local server.

> NOTE: ALL themes are actually bundled, but only the default theme is rendered in Storybook when it first loads.

### Publish using GitHub pages
- Uses the workflow defined in `.github/workflows/static.yml`.
- Live Storybook URL = https://basher.github.io/Web-UI-Boilerplate/

## Complete UI setup instructions
- Please see the `README` in `ui` directory.

## Additional required files in project root directory
- `.vscode/settings.json` defines the correct working directory for `.eslintignore` and `.stylelintrc`.
- `.editorconfig` ensures all code uses the same indentation.
