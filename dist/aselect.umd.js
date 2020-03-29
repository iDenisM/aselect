(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.aselect = factory());
}(this, (function () { 'use strict';

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

  return main;

})));
