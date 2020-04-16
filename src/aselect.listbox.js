export const Listbox = function(select, options = {}) {
  this.options = options;
  this.nativeSelect = select;
  this._createList();
}

Listbox.prototype = {
  _createList: function() {
    this.listbox = document.createElement('ul');
    let options = this.nativeSelect.options;
    let listboxInner = '';
    for (let i = 0; i < options.length; i++) {
      listboxInner += `<li data-index="${options[i].index}">${options[i].innerText}</li>`
    }
    this.listbox.innerHTML = listboxInner;
  }
}