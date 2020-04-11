export const getSelect = function(select) {
  if (select instanceof HTMLElement) return select;
  return document.querySelector(select);
}
