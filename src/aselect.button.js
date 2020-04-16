export const Button = function(select, options = {}) {
  this.nativeSelect = select;
  this.options = options;
  this._createButton();
}

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
}