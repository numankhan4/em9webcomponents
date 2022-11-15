//
// This script downloads and generates icons and icon metadata.
//
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import copy from 'recursive-copy';
import del from 'del';
import download from 'download';
import fm from 'front-matter';
import { readFileSync, mkdirSync } from 'fs';
import { stat, readFile, writeFile } from 'fs/promises';
import { globby } from 'globby';
import path from 'path';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const iconDir = path.join(outdir, '/assets/iconsax');

const iconPackageData = JSON.parse(readFileSync('./node_modules/web-elements-icons/package.json', 'utf8'));
let numIcons = 0;

(async () => {
  try {
    const version = iconPackageData.version;
    const srcPath = `./.cache/icons/web-elements-icons`;
    const url = `https://github.com/numankhan4/web-elements-icons/archive/refs/heads/main.zip`;

    try {
      await stat(`${srcPath}/LICENSE.md`);
      console.log('Generating icons from cache');
    } catch {
      console.log(`Downloading and extracting Iconsax ${version}`);
      await download(url, './.cache/icons', { extract: true });
    }

    // Copy icons
    console.log(`Copying icons and license`);
    await del([iconDir]);
    mkdirSync(iconDir, { recursive: true });
    await Promise.all([
      copy(`${srcPath}/iconsax`, iconDir),
      copy(`${srcPath}/LICENSE.md`, path.join(iconDir, 'LICENSE.md')),
      copy(`${srcPath}/iconsax-sprite.svg`, './docs/assets/iconsax/iconsax-sprite.svg', { overwrite: true })
    ]);

    const files = await globby(`${srcPath}/iconsax/*.svg`);

    const metadata = await Promise.all(
      files.map(async file => {
        const name = path.basename(file, path.extname(file));
        const data = fm(await readFile(file, 'utf8')).attributes;
        numIcons++;

        return {
          name,
          title: data.title,
          categories: data.categories,
          tags: data.tags
        };
      })
    );

    await writeFile(path.join(iconDir, 'iconsax.json'), JSON.stringify(metadata, null, 2), 'utf8');

    console.log(chalk.cyan(`Successfully processed ${numIcons} icons`));
  } catch (err) {
    console.error(err);
  }
})();
