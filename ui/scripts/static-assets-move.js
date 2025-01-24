/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Function for moving static assets into correct sub-folders.
 * 1. Move files bundled by Parcel that are renamed by "static-assets-rename" script.
 * 2. Copy any other static UI assets that are not bundled by Parcel.
 * 3. Allows us to pass a "theme" argument. If an invalid or null theme is passed, "default" will be used.
 *
 * @param {string} %npm_config_theme% - UI theme name.
 *
 * @return {void}
 */

const fs = require('fs-extra');
const path = require('path');
const colors = require('colors/safe');
const themes = require('./theme-config');

const theme = process.argv[2]; // Only passing 1 arg in Node cmd = theme name
const prodDirectoryPath = path.join(__dirname, `../public/build/ui`);
const staticDirectoryPath = path.join(__dirname, '../src/images/interface');

// 1. Read the renamed files in PRODUCTION folder.
const readProdDirectory = () => {
    fs.readdir(prodDirectoryPath, (err, files) => {
        if (err) {
            return console.log(err);
        }

        files.forEach((file) => {
            let fileType;

            // Ignore folders (i.e. other themes).
            if (file.indexOf('.') < 0) {
                return;
            }

            // Ignore HTML file used for Parcel build.
            if (file.indexOf('html') >= 0) {
                return;
            }

            if (file.indexOf('js') >= 0) {
                fileType = 'js';
            }

            if (file.indexOf('css') >= 0) {
                fileType = 'css';
            }

            // Fonts need to be in same folder as CSS.
            if (file.indexOf('woff') >= 0 || file.indexOf('ttf') >= 0) {
                fileType = 'css';
            }

            if (file.indexOf('svg') >= 0) {
                fileType = 'svg';
            }

            moveFile(file, fileType);
        });
    });
};

// 2. Move file.
const moveFile = (file, fileType) => {
    // Use "default" if invalid theme is supplied.
    let themeName = themes[theme] !== undefined
        ? theme
        : 'default';
    let themeFolder = `${prodDirectoryPath}/${themeName}`;

    if (fileType === 'js') {
        // Ignore unwanted "runtime" JS files.
        if (fileType === 'js' && file.indexOf('runtime') > -1) {
            return;
        }
        themeFolder = `${themeFolder}/javascript`;
    }

    if (fileType === 'css') {
        themeFolder = `${themeFolder}/css`;
    }

    if (fileType === 'svg') {
        const filename = file.substring(0, file.lastIndexOf('.'));
        // Move SVG sprite into 'images' folder. Any other SVGs go in 'css' as they're referenced inside CSS.
        themeFolder = filename === 'sprite' ? 'images' : 'css';
    }

    fs.move(
        `${prodDirectoryPath}/${file}`,
        `${themeFolder}/${file}`,
        (err) => {
            if (err) {
                return console.log(colors.red.bold('static-assets-move:', err));
            }
            console.log(`Successfully moved ${file}`);
        },
    );
};

// 3. Copy other static UI files (i.e. '/images/interface').
const copyStatic = () => {
    fs.copy(
        staticDirectoryPath,
        `${prodDirectoryPath}/images/interface`,
        (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('Successfully copied other static assets!');
        },
    );
};

readProdDirectory();
copyStatic();
