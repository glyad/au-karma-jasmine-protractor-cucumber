'use strict';
const path = require('path');
const aureliaConfig = require('./aurelia_project/aurelia.json');
const port = aureliaConfig.platform.port;

exports.config = {
  port: port,

  baseUrl: `http://localhost:${port}/`,

  specs: ['features/*.feature', '**/*.feature'],

  exclude: ['src'],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
      compiler: "ts:ts-node/register",
      require: [
        path.resolve(process.cwd(), './features/step-definitions/*.ts')
      ],
      'format-options': '{"snippetInterface": "synchronous", "colorsEnabled": true, "progress": true, "progress-bar": true }',
      tags: ''
  },
  capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': [
          '--show-fps-counter',
          '--no-default-browser-check',
          '--no-first-run',
          '--disable-default-apps',
          '--disable-popup-blocking',
          '--disable-translate',
          '--disable-background-timer-throttling',
          '--disable-renderer-backgrounding',
          '--disable-device-discovery-notifications',
          
        ]
      }
  },
  allScriptsTimeout: 110000,

  onPrepare: function() {
    require('ts-node').register({ compilerOptions: { module: 'commonjs' }, disableWarnings: true, fast: true });
  },

  plugins: [{
    package: require.resolve('aurelia-protractor-plugin')
}],

disableChecks: true,

ignoreUncaughtExceptions: true
};
