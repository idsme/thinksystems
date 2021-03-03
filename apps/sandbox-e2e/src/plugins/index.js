const path = require('path');
const fs = require('fs');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');
const { addMatchImageSnapshotPlugin, matchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

// original
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//
//   // Preprocess Typescript file using Nx helper
//   on('file:preprocessor', preprocessTypescript(config));
// };


  module.exports = (on, config) => {
    on('file:preprocessor', preprocessTypescript(config));
    // after:screenshott via ImageSnapshot
    addMatchImageSnapshotPlugin(on, config);
    // Override
    // on('after:screenshot', (details) => {
    //   console.log('after:screenshot:>',details);
    //   const newPath = path.resolve(__dirname, '../new-path/screenshot.png');
    //   fs.renameSync(details.path, newPath);
    //   console.log('NEWPATH:>', newPath);
    //   // Get it ready for the matchImagSnapshot plugin
    //   details.path = newPath;
    //   matchImageSnapshotPlugin(details);
    // })
  }
