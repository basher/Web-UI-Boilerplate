/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Function for moving static assets into correct sub-folders for production.
 * 1. Allows the passing of a 'theme' argument. If an invalid or null theme is passed, 'default' will be used.
 * 2. Move files bundled by Parcel.
 * 3. Copy any other static UI assets that are not bundled by Parcel.
 *
 * @param {string} %npm_config_theme% - UI theme name.
 *
 * @return {void}
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import colors from 'colors/safe.js';
import { themes } from './theme-config.js';

const theme = process.argv[2]; // Only passing 1 arg in Node cmd = theme name
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prodDirectoryPath = path.join(__dirname, `../public/build/ui`);
const staticDirectoryPath = path.join(__dirname, '../src/images');

// 1. Use "default" theme if invalid theme is supplied.
let themeName = themes[theme] !== undefined ? theme : 'default';

// 2. Read the files in build folder.
const readProdDirectory = () => {
    fs.readdir(prodDirectoryPath, (err, files) => {
        if (err) {
            return console.log(colors.red.bold('read files:', err));
        }

        files.forEach((file) => {
            let fileType;

            // Ignore folders (i.e. other themes).
            if (file.indexOf('.') < 0) {
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

            moveFile(file, fileType);
        });
    });
};

// 2. Move file.
const moveFile = (file, fileType) => {
    let themeFolder = `${prodDirectoryPath}/${themeName}`;

    if (fileType === 'js') {
        themeFolder = `${themeFolder}/javascript`;
    }

    if (fileType === 'css') {
        themeFolder = `${themeFolder}/css`;
    }

    fs.move(`${prodDirectoryPath}/${file}`, `${themeFolder}/${file}`, (err) => {
        if (err) {
            return console.log(colors.red.bold('move files:', err));
        }
        console.log(colors.green.bold(`Successfully moved ${file}`));
    });
};

// 3. Copy other static UI files (e.g. images).
const copyStatic = () => {
    const themeFolderStatic = `${prodDirectoryPath}/${themeName}/images`;

    fs.copy(staticDirectoryPath, themeFolderStatic, (err) => {
        if (err) {
            return console.log(colors.red.bold('copy static assets:', err));
        }
        console.log(
            colors.green.bold('Successfully copied other static assets!'),
        );
    });
};

readProdDirectory();
copyStatic();
