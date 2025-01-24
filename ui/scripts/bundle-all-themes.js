/**
 * Bundles all themes for use by Storybook.
 *
 * @return {void}
 */

const { exec } = require('node:child_process');
const themes = require('./theme-config');

let strNpm = '';
for (const [key] of Object.entries(themes)) {
    strNpm += `npm run build:theme --theme=${key} && `;
    console.log(`Building UI theme: ${key}`);
}

strNpm = strNpm.substring(0, strNpm.lastIndexOf('&&') - 1);

// Console logging 'stdout' shows postbuild script logs.
exec(strNpm, (error, stdout, stderr) => console.log(`STDOUT: ${stdout}`));
