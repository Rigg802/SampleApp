'use strict';
/// <reference path="../typings/dev.d.ts" />
import baseConfig from './base';

let config = {
  appEnv: 'dev'  // feel free to remove the appEnv property here
};

export default Object.freeze(Object.assign({}, baseConfig, config));
