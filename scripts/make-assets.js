//
// This script bakes and copies svg based images, then generates a corresponding Lit stylesheet in dist/assets/images/*.svg
//
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import fs from 'fs';
import { mkdirSync } from 'fs';
import { globbySync } from 'globby';
import path from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const files = globbySync('./src/assets/images/*.svg');
const fontsDir = path.join(outdir, 'assets/images');
const embeds = {};

console.log('Generating Assets 😇');

mkdirSync(fontsDir, { recursive: true });

try {
  // Loop through each theme file, copying the .woff and generating a .js version for Lit users
  files.forEach(file => {
    let source = fs.readFileSync(file);

    const fontsFile = path.join(fontsDir, path.basename(file));

    fs.writeFileSync(fontsFile, source);
  });
} catch (err) {
  console.error(chalk.red('Error generating assets! 😕'));
  console.error(err);
}
