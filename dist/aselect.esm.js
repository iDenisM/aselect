var version = "2.0.0";

const getSelect = function(select) {
  if (select instanceof HTMLElement) return select;
  return document.querySelector(select);
};

const getSelects = function(selects) {
  if (selects instanceof NodeList) return selects;
  return document.querySelectorAll(selects);
};

const insertAfter = function(node, child) {
  child.parentNode.insertBefore(node, child.nextSibling);
};

const Button = function(select, options = {}) {
  this.nativeSelect = select;
  this.options = options;
  this._createButton();
};

Button.prototype = {
  _createButton: function() {
    this.button = document.createElement(this.options.button ? 'button' : 'div');
    this.button.innerHTML = this.nativeSelect.selectedOptions[0].innerText;
  },
  _createButtonEvents: function() {
    this.button.addEventListener('click', this._handleButtonClick.bind(this));
  },
  _handleButtonClick: function() {
    this.button.classList.toggle('open');
  }
};

const Listbox = function(select, options = {}) {
  this.options = options;
  this.nativeSelect = select;
  this._createList();
};

Listbox.prototype = {
  _createList: function() {
    this.listbox = document.createElement('ul');
    let options = this.nativeSelect.options;
    let listboxInner = '';
    for (let i = 0; i < options.length; i++) {
      listboxInner += `<li data-index="${options[i].index}">${options[i].innerText}</li>`;
    }
    this.listbox.innerHTML = listboxInner;
  }
};

const ASelect = function() {
};

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
    });
  }
};

if (typeof window !== "undefined") {
  window.aselect = window.aselect || new ASelect();
}

export default ASelect;
