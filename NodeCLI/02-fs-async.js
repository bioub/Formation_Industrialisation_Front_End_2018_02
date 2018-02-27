'use strict';

const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(fichier, msg, callback) {
  const ligne = `[${(new Date).toISOString()}] ${msg}\n`
  fs.appendFile(fichier, ligne, callback);
}

console.time('Fin');

// Callback Hell / Pyramid of Doom
fs.stat(logDir, (err, stats) => {
  if (err) {
    if (err.code !== 'ENOENT') {
      return console.log(err);
    }
    return fs.mkdir(logDir, (err) => {
      if (err) {
        return console.log(err);
      }
      next();
    });
  }
  next();
});

function next() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err);
            }
            console.timeEnd('Fin');
          });
        });
      });
    });
  });
}

console.log('Autre Opération (ex build JS)');

