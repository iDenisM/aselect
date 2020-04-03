export const getSelects = function(select) {
  if (!select) return document.querySelector('select');
  if (select instanceof HTMLElement) return select;
  if (typeof select === 'string') return document.querySelector(select);
  return false;
}
