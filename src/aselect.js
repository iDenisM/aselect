import { version } from '../package.json';

const ASelect = function(select) {
  this.select = select;
  this._init();
}

ASelect.prototype = {
  _init: function() {
    this._btw();
    console.log(this.select);
  },
  _btw: function() {
    window.aselect = {};
    window.aselect.version = `v${version}`;
  }
}

export default ASelect;