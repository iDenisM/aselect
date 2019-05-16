const path = require('path');

const filename = 'aselect.js'

module.exports = {
  entry: `./src/${filename}`,
  output: {
    filename: filename,
    path: path.resolve(__dirname, 'example/js')
  }
}