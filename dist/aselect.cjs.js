'use strict';

var version = "2.0.0";

const ASelect = function(select) {
  this.select = select;
  this._init();
};

ASelect.prototype = {
  _init: function() {
    this._btw();
    console.log(this.select);
  },
  _btw: function() {
    window.aselect = {};
    window.aselect.version = `v${version}`;
  }
};

const aselect = window.aselect || new ASelect();
