import { version } from '../package.json';
import { getSelects } from './aselect.utils';

export const ASelect = function() {
  
  this._btw();
}

ASelect.prototype = {
  _init: function() {
    this._btw();
  },
  _btw: function() {
    // window.aselect = this.as = {};
    // this.as.version = `v${version}`;
    // this.as.create = this._crSelect.bind(this);
    // this.as.createAll = this._crAll.bind(this);
  },
  _crAll: function(select) {

  },
  _crSelect: function(select) {
    this.select = getSelects(select);
    if (!this.select) console.warn('You have passed a bad selector for the select');
  }
}
