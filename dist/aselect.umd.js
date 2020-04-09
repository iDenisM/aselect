(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var version = "2.0.0";

  const getSelects = function(select) {
    document.querySelector(select);
  };

  const ASelect = function() {
    
    this._btw();
  };

  ASelect.prototype = {
    _init: function() {
      this._btw();
    },
    _btw: function() {
      window.aselect = this.as = {};
      this.as.version = `v${version}`;
      this.as.create = this._crSelect.bind(this);
      this.as.createAll = this._crAll.bind(this);
    },
    _crAll: function(select) {

    },
    _crSelect: function(select) {
      this.select = getSelects(select);
      if (!this.select) console.warn('You have passed a bad selector for the select');
    }
  };

  const aselect = window.aselect || new ASelect();

})));
