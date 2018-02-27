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

fs.stat(logDir)
  .catch((err) => {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    return fs.mkdir(logDir);
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => console.timeEnd('Fin'))
  .catch((err) => {
    console.log(err);
  });

console.log('Autre Opération (ex build JS)');

