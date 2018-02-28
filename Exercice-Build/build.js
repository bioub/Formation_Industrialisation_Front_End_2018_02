const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
//const appJsDistPath = path.resolve(distPath, 'app.js');

const argv = require('minimist')(process.argv.slice(2));

(async () => {
  try {
    await del(distPath);
    console.log('Dossier dist supprimé');
    await fs.mkdir(distPath);
    console.log('Dossier dist créé');

    const buffers = await Promise.all([
      fs.readFile(horlogeJsPath),
      fs.readFile(indexJsPath),
    ]);
    console.log('Fichiers JS lus');

    let contentJS = buffers.reduce((acc, buffer) => acc + buffer.toString(), '');

    // si --prod on minifie le fichier JS
    if (argv.prod) {
      const result = UglifyJS.minify(contentJS);

      if (result.error) {
        throw result.error;
      }
      contentJS = result.code;
    }

    const checksum = md5(contentJS);
    const appJsDistPath = path.resolve(distPath, `app.${checksum}.js`);
    await fs.appendFile(appJsDistPath, contentJS);
    console.log('Fichiers JS écrits et minifiés');

    const buffer = await fs.readFile(indexHtmlPath);
    let content = buffer.toString();

    content = content.replace('<script src="./js/horloge.js"></script>', '');
    content = content.replace('<script src="./js/index.js"></script>', `<script src="./app.${checksum}.js"></script>`);

    await fs.appendFile(indexHtmlDistPath, content);
    console.log('index.html built');
  }
  catch (err) {
    console.log(err);
  }
})();
