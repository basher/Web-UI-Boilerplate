# Web UI Boilerplate
Accessible UI boilerplate and component library for websites/webapps.
- Built with semantic HTML, CSS (Sass), vanilla JavaScript (TypeScript) and ARIA.
- Powered by Storybook.
- Bundled by Parcel.

```
No external frameworks have been harmed in the making of this boilerplate!
No React. No Vue. No CSS-in-JS. No Tailwind.
Just plain vanilla code. 😜
```

- Live Storybook URL = https://basher.github.io/Web-UI-Boilerplate/

## Compile and watch for UI changes
> - Use the correct Node version as listed in `ui/.nvmrc`. If necessary, install Node Version Manager (NVM).
> - Ensure Yarn is installed for the current Node version.

Run both the following commands in **separate terminal instances** in order to be able to compile CSS/JavaScript and test the UI in Storybook.

From `ui` directory:
- `yarn start` - Installs Node modules (if not already installed) and launches Parcel bundler.
- `yarn storybook` - Launches Storybook/HTML component library.

## Bundle CSS/JavaScript for production without watch
From `ui` directory:
- `yarn build`

## Local DEV environment (for example, .Net, PHP)
In order to use the bundled CSS/JavaScript in `localhost`, both `yarn start` and `yarn storybook` need to be run.

However, these can be concatenated together into a single background task so that the Storybook application doesn't need to be actually loaded in the browser.

### Linking to compiled CSS/JavaScript
There is a need to distinguish between `development` and `production` environments, in order serve the  CSS/JavaScript from the correct locations.

#### DEVELOPMENT
```
<link rel="stylesheet" href="http://localhost:9009/index.css">
```
```
<script src="http://localhost:9009/index.js"></script>
```

#### PRODUCTION
```
<link rel="stylesheet" href="/path/to/build/folder/app/stylesheets/index.css">
```
```
<script defer type="module" src="/path/to/build/folder/app/javascript/index.js"></script>
<script defer nomodule src="/path/to/build/folder/app/javascript/legacy.js"></script>
```

## Build and publish Storybook
From `ui` directory:
- `yarn publish-storybook` - this runs a Parcel build to bundle CSS/JavaScript in the `public` folder, as defined in `ui/.storybook/main.js`.
- `npx http-server ./storybook-static` - to test production build on local server.

### Publish using GitHub pages
- Uses the workflow defined in `.github/workflows/static.yml`.
- Live Storybook URL = https://basher.github.io/Web-UI-Boilerplate/

## Complete UI setup instructions
- Please see the `README` in `ui` directory.

## Additional required files in project root directory
- `.vscode/settings.json` defines the correct working directory for `.eslintignore` and `.stylelintrc`.
- `.editorconfig` ensures all code uses the same indentation.
