define(function () { 'use strict';

  var version = "2.0.0";

  var getSelect = function getSelect(select) {
    if (select instanceof HTMLElement) return select;
    return document.querySelector(select);
  };
  var getSelects = function getSelects(selects) {
    if (selects instanceof NodeList) return selects;
    return document.querySelectorAll(selects);
  };
  var insertAfter = function insertAfter(node, child) {
    child.parentNode.insertBefore(node, child.nextSibling);
  };

  var Button = function Button(select) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.nativeSelect = select;
    this.options = options;

    this._createButton();
  };
  Button.prototype = {
    _createButton: function _createButton() {
      this.button = document.createElement(this.options.button ? 'button' : 'div');
      this.button.innerHTML = this.nativeSelect.selectedOptions[0].innerText;
    },
    _createButtonEvents: function _createButtonEvents() {
      this.button.addEventListener('click', this._handleButtonClick.bind(this));
    },
    _handleButtonClick: function _handleButtonClick() {
      this.button.classList.toggle('open');
    }
  };

  var Listbox = function Listbox(select) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = options;
    this.nativeSelect = select;

    this._createList();
  };
  Listbox.prototype = {
    _createList: function _createList() {
      this.listbox = document.createElement('ul');
      var options = this.nativeSelect.options;
      var listboxInner = '';

      for (var i = 0; i < options.length; i++) {
        listboxInner += "<li data-index=\"".concat(options[i].index, "\">").concat(options[i].innerText, "</li>");
      }

      this.listbox.innerHTML = listboxInner;
    }
  };

  var ASelect = function ASelect() {};

  ASelect.prototype = {
    version: "v".concat(version),
    create: function create(selector) {
      var select = getSelect(selector);
      if (!select) return false;
      var button = new Button(select);
      var listbox = new Listbox(select);
      insertAfter(button.button, select);
      insertAfter(listbox.listbox, button.button);
    },
    createAll: function createAll(selects) {
      var _this = this;

      getSelects(selects).forEach(function (select) {
        _this.create(select);
      });
    }
  };

  if (typeof window !== "undefined") {
    window.aselect = window.aselect || new ASelect();
  }

  return ASelect;

});
