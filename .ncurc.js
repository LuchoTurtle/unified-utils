// * https://www.npmjs.com/package/npm-check-updates#configuration-files
'use strict';

module.exports = {
  reject: [
    // ? Pin the CJS versions
    'execa',
    'escape-string-regexp'
  ]
};
