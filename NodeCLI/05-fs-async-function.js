'use strict';

const fs = require('fs-extra');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fichier, msg) {
  const ligne = `[${(new Date).toISOString()}] ${msg}\n`
  return fs.appendFile(fichier, ligne);
}

console.time('Fin');

async function main() {
  try {
    try {
      const stats = await fs.stat(logDir);
    }
    catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      await fs.mkdir(logDir);
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.timeEnd('Fin');
  }
  catch (err) {
    console.log(err.message);
  }
}

main();
console.log('Autre Opération (ex build JS)');

