/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Function for moving static assets into correct sub-folders.
 * 1. Move files bundled by Parcel that are renamed by "static-assets-rename" script.
 * 2. Copy any other static UI assets that are not bundled by Parcel.
 *
 * @return {void}
 */

const fs = require('fs-extra');
const path = require('path');
const prodDirectoryPath = path.join(__dirname, '../../build/ui');
const staticDirectoryPath = path.join(__dirname, '../src/images/interface');

// 1. Read the renamed files in PRODUCTION folder.
const readProdDirectory = () => {
    fs.readdir(prodDirectoryPath, (err, files) => {
        if (err) {
            return console.log(err);
        }

        files.forEach((file) => {
            let fileType;

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

// 1. Move file.
const moveFile = (file, type) => {
    let subFolder;
    if (type === 'js') {
        subFolder = 'javascript';
    }
    if (type === 'css') {
        subFolder = 'css';
    }
    if (type === 'svg') {
        const filename = file.substring(0, file.lastIndexOf('.'));
        // Move SVG sprite into 'images' folder. Any other SVGs go in 'css' as they're referenced inside CSS.
        subFolder = filename === 'sprite' ? 'images' : 'css';
    }

    fs.move(
        `${prodDirectoryPath}/${file}`,
        `${prodDirectoryPath}/${subFolder}/${file}`,
        (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Successfully moved ${file}`);
        },
    );
};

// 2. Copy other static UI files (i.e. '/images/interface').
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
