/**
 * Bundles all themes for use by Storybook.
 *
 * @return {void}
 */

import { exec } from 'node:child_process';
import { themes } from './theme-config.js';

let strNpm = '';
for (const [key] of Object.entries(themes)) {
    strNpm += `npm run build:theme --theme=${key} && `;
    console.log(`Building UI theme: ${key}`);
}

strNpm = strNpm.substring(0, strNpm.lastIndexOf('&&') - 1);

// Console logging 'stdout' shows postbuild script logs.
exec(strNpm, (error, stdout, stderr) => console.log(`STDOUT: ${stdout}`));
