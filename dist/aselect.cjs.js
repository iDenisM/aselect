'use strict';

var version = "2.0.0";

class Test {
  constructor() {
    this._init();
  }

  _init() {
    console.log('asdfasdf');
  }
}

function main() {
  console.log('version: ' + version);
}

new Test();

module.exports = main;
