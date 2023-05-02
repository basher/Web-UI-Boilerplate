# WebUI Boilerplate
UI boilerplate and component library for websites/webapps.
- Using HTML, CSS (Sass) and vanilla JavaScript (TypeScript).
- Powered by Storybook.
- Bundled by Parcel.

```
No external frameworks have been harmed in the making of this boilerplate!
No React. No Vue. No CSS-in-JS. No Tailwind.
Just plain vanilla code. 😜
```

## Compile and watch for UI changes
> - Use the correct Node version as listed in `ui/.nvmrc`.
> - Ensure Yarn is installed.

Run both the following commands in **separate terminal instances** in order to be able to compile CSS/JS and test the UI in Storybook.

From `ui` directory:
- `yarn start`
- `yarn storybook`

## Bundle for production without watch
From `ui` directory:
- `yarn build`

## Local DEV environment (e.g. .Net, PHP)
In order to use the bundled CSS/JS in `localhost`, both `yarn start` and `yarn storybook` need to be run.

These can be concatenated together into a single background task so that the Storybook application doesn't need to be actually loaded in the browser.

## HTML changes for linking to CSS/JS
There is a need to distinguish between `development` and `production` environments, in order serve the  CSS/JS from the correct locations.

### DEVELOPMENT
```
<link rel="stylesheet" href="http://localhost:9009/index.css">
```
```
<script src="http://localhost:9009/index.js"></script>
```

### PRODUCTION
```
<link rel="stylesheet" href="/path/to/build/folder/app/stylesheets/index.css">
```
```
<script defer type="module" src="/path/to/build/folder/app/javascript/index.js"></script>
<script defer nomodule src="/path/to/build/folder/app/javascript/legacy.js"></script>
```

## Complete UI setup instructions
- Please see the `README` in `ui` directory.

## Additional required files in project root directory
- `.vscode/settings.json` defines the correct working directory for `.eslintignore` and `.stylelintrc`.
- `.editorconfig` ensures all code uses the same indentation.
