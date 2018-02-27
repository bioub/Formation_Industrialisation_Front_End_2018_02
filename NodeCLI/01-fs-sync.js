'use strict';

const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fichier, msg) {
  const ligne = `[${(new Date).toISOString()}] ${msg}\n`
  fs.appendFileSync(fichier, ligne);
}

console.time('Fin');
try {
  try {
    const stats = fs.statSync(logDir);
  }
  catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    fs.mkdirSync(logDir);
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.timeEnd('Fin');
}
catch (err) {
  console.log(err.message);
}
