const path = require('path');

const HOME = path.join(__dirname, '../');
const ENTRY = path.join(HOME, 'index.js');
const HTML_TEMPLATE = path.join(HOME, 'public', 'src', 'index.html');
const DIST_PATH = path.join(HOME, 'public', 'dist');
const OUTPUT = {
  FILENAME: 'bundle.js',
  PATH: DIST_PATH
};

module.exports = {
  ENTRY,
  HTML_TEMPLATE,
  DIST_PATH,
  OUTPUT
};
