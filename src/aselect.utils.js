export const getSelect = function(select) {
  if (select instanceof HTMLElement) return select;
  return document.querySelector(select);
}

export const getSelects = function(selects) {
  if (selects instanceof NodeList) return selects;
  return document.querySelectorAll(selects);
}

export const insertAfter = function(node, child) {
  child.parentNode.insertBefore(node, child.nextSibling);
}