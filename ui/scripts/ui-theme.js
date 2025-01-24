/**
 * Theme-specific CSS compilation.
 *
 * Allows us to pass a "theme" argument that replaces the "{{ theme }}" token in "index.css" with correct client CSS theme override.
 * If an invalid or null theme is passed, "default" will be used.
 *
 * @param {string} %npm_config_theme% - UI theme name.
 *
 * @return {void}
 */

const fs = require('fs');
const colors = require('colors/safe');
const themes = require('./theme-config');

let theme = process.argv[2]; // Only passing 1 arg in Node cmd = theme name
const cssFile = `./src/css/index.css`;
const cssFileTemplate = `./src/css/_index-template.css`;
let result;

const writeThemeCSS = data =>
    new Promise((resolve, reject) => {
        fs.writeFile(cssFile, data, { flag: 'w', encoding: 'utf8' }, err => {
            if (err) {
                reject(console.log(colors.red.bold('ui-theme:', err)));
            } else {
                resolve(console.log(`"${cssFile}" updated with correct theme`));
            }
        });
    });

const updateFromCSSTemplate = (data, whichTheme) =>
    new Promise((resolve, reject) => {
        fs.copyFile(cssFileTemplate, cssFile, err => {
            if (err) {
                reject(console.log(colors.red.bold('ui-theme:', err)));
            } else {
                resolve(
                    console.log(`"${cssFile}" successfully updated from template`)
            );

            if (whichTheme === undefined) {
                console.log(
                    colors.red.bold(
                        `Invalid or null theme: ${whichTheme}. Using "default" theme instead...`
                    )
                );
                theme = 'default';
            }

            // Update CSS @imports in 'index.css' with correct theme filepath.
            result = data.replace(/{{ theme }}/g, theme);
            writeThemeCSS(result);
            }
        });
    });

// Read CSS template.
const readThemeCSS = () =>
    new Promise((resolve, reject) => {
        fs.readFile(cssFileTemplate, 'utf8', (err, data) => {
            if (err) {
                reject(console.log(colors.red.bold('ui-theme:', err)));
            } else {
                resolve(updateFromCSSTemplate(data, themes[theme]));
            }
        });
    });

readThemeCSS();
