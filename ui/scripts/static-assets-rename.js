/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Function for renaming static assets (e.g. removing "hashes" generated by Parcel bundler).
 *
 * @return {void}
 */

const fs = require('fs');
const path = require('path');
const colors = require('colors/safe');
const cheerio = require('cheerio');
const validExt = require('./static-assets-config');
const prodDirectoryPath = path.join(__dirname, '../public/build/ui');

// Read files in PRODUCTION folder, and process the valid ones.
const readProdDirectory = () => {
    fs.readdir(prodDirectoryPath, (err, files) => {
        if (err) {
            return console.log(colors.red.bold('static-assets-rename:', err));
        }

        const validFiles = files.filter((ext) =>
            validExt.includes(path.extname(ext).toLowerCase()),
        );

        validFiles.forEach((file) => {
            processFile(file);
        });
    });
};

// Read bundled "index.html" file contents.
const readIndexHtml = () =>
    new Promise((resolve, reject) => {
        fs.readFile(`${prodDirectoryPath}/index.html`, 'utf8', (err, data) => {
            if (err) {
                reject(console.log(colors.red.bold('static-assets-rename:', err)));
            } else {
                resolve(data);
            }
        });
    });

// Process valid files.
const processFile = (file) => {
    const ext = file.substring(file.lastIndexOf('.'));
    const hashed = file.substring(0, file.lastIndexOf('.'));
    let renamed = hashed.substring(0, hashed.lastIndexOf('.'));

    // JS. Don't rename map files.
    if (ext === '.js' && renamed === 'index') {
        readIndexHtml().then((data) => {
            // Use cheerio to parse HTML DOM.
            const $ = cheerio.load(data);
            const firstScript = $('body script:first');
            const lastScript = $('body script:last');

            // Rename modern bundle to "index.js" and legacy bundle to "legacy.js".
            // TODO: Might not even need to worry about browsers that don't support type="module".
            if (file === firstScript.attr('src').substring(1)) {
                renamed =
                    firstScript.attr('type') === 'module'
                        ? `index${ext}`
                        : `legacy${ext}`;
            }

            if (file === lastScript.attr('src').substring(1)) {
                renamed =
                    lastScript.attr('type') === 'module'
                        ? `index${ext}`
                        : `legacy${ext}`;
            }

            renameFile(renamed, file);
        });
    }

    // CSS. Don't rename map files.
    if (ext === '.css') {
        renamed = `index${ext}`;
        renameFile(renamed, file);
    }

    // SVG sprite.
    if (ext === '.svg') {
        renamed = `${renamed}${ext}`;
        renameFile(renamed, file);
    }
};

// Rename file.
const renameFile = (renamed, file) => {
    fs.rename(
        `${prodDirectoryPath}/${file}`,
        `${prodDirectoryPath}/${renamed}`,
        (err) => {
            if (err) {
                return console.log(colors.red.bold('static-assets-rename:', err));
            }
            console.log(colors.green.bold(`Successfully renamed ${file} to ${renamed}`));
        },
    );
};

readProdDirectory();
