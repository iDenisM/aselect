var version = "2.0.0";

const getSelect = function(select) {
  if (select instanceof HTMLElement) return select;
  return document.querySelector(select);
};

const getSelects = function(selects) {
  if (selects instanceof NodeList) return selects;
  return document.querySelectorAll(selects);
};

const ASelect = function() {
};

ASelect.prototype = {
  version: `v${version}`,
  create: function(selector) {
    let select = getSelect(selector);
    if (!select) return false;
  },
  createAll: function(selects) {
    getSelects(selects).forEach(select => {
      this.create(select);
    });
  }
};

if (typeof window !== "undefined") {
  window.aselect = window.aselect || ASelect;
}

export { ASelect };
