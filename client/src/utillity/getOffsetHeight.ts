export const getOffsetHeight = (el: HTMLElement) => {
  el.style.display = 'block';
  el.style.height = 'auto';
  return el.offsetHeight;
};
