import { version } from '../package.json';
import { getSelect, getSelects } from './aselect.utils';

export const ASelect = function() {
}

ASelect.prototype = {
  version: `v${version}`,
  create: function(selector) {
    let select = getSelect(selector);
    if (!select) return false;
  },
  createAll: function(selects) {
    getSelects(selects).forEach(select => {
      this.create(select);
    })
  }
}

if (typeof window !== "undefined") {
  window.aselect = window.aselect || ASelect;
}