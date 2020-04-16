import { version } from '../package.json';
import { getSelect, getSelects, insertAfter } from './aselect.utils';
import { Button } from './aselect.button';
import { Listbox } from './aselect.listbox';

const ASelect = function() {
}

ASelect.prototype = {
  version: `v${version}`,
  create: function(selector) {
    let select = getSelect(selector);
    if (!select) return false;
    let button = new Button(select);
    let listbox = new Listbox(select);
    insertAfter(button.button, select);
    insertAfter(listbox.listbox, button.button);
  },
  createAll: function(selects) {
    getSelects(selects).forEach(select => {
      this.create(select);
    })
  }
}

if (typeof window !== "undefined") {
  window.aselect = window.aselect || new ASelect();
}

export default ASelect;