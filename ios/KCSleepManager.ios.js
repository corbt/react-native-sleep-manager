/**
 * @providesModule KCSleepManager
 * @flow
 */
'use strict';

var NativeKCSleepManager = require('NativeModules').KCSleepManager;

/**
 * High-level docs for the KCSleepManager iOS API can be written here.
 */

var KCSleepManager = {
  test: function() {
    NativeKCSleepManager.test();
  }
};

module.exports = KCSleepManager;
