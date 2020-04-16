define(['exports'], function (exports) { 'use strict';

  var version = "2.0.0";

  var getSelect = function getSelect(select) {
    if (select instanceof HTMLElement) return select;
    return document.querySelector(select);
  };
  var getSelects = function getSelects(selects) {
    if (selects instanceof NodeList) return selects;
    return document.querySelectorAll(selects);
  };

  var ASelect = function ASelect() {};
  ASelect.prototype = {
    version: "v".concat(version),
    create: function create(selector) {
      var select = getSelect(selector);
      if (!select) return false;
    },
    createAll: function createAll(selects) {
      var _this = this;

      getSelects(selects).forEach(function (select) {
        _this.create(select);
      });
    }
  };

  if (typeof window !== "undefined") {
    window.aselect = window.aselect || ASelect;
  }

  exports.ASelect = ASelect;

  Object.defineProperty(exports, '__esModule', { value: true });

});
