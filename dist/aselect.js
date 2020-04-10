(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var version = "2.0.0";

  var getSelects = function getSelects(select) {
    document.querySelector(select);
  };

  var ASelect = function ASelect() {
    this._btw();
  };
  ASelect.prototype = {
    _init: function _init() {
      this._btw();
    },
    _btw: function _btw() {
      window.aselect = this.as = {};
      this.as.version = "v".concat(version);
      this.as.create = this._crSelect.bind(this);
      this.as.createAll = this._crAll.bind(this);
    },
    _crAll: function _crAll(select) {},
    _crSelect: function _crSelect(select) {
      this.select = getSelects(select);
      if (!this.select) console.warn('You have passed a bad selector for the select');
    }
  };

  var aselect = window.aselect || new ASelect();

})));
