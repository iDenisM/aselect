(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var version = "2.0.0";

  const getSelect = function(select) {
    if (select instanceof HTMLElement) return select;
    if (typeof select === 'string') return document.querySelector(select);
    return false;
  };

  const ASelect = function(select) {
    this.select = getSelect(select);
    this._btw();
  };

  ASelect.prototype = {
    _init: function() {
      this._btw();
    },
    _btw: function() {
      window.aselect = this.as = {};
      this.as.version = `v${version}`;
      this.as.createAll = this._crSelect.bind(this);
    },
    _crSelect: function() {
      if (!this.select) console.warn('You have passed a bad selector for the select');
    }
  };

  // export default ASelect;

  const aselect = window.aselect || new ASelect();

})));
