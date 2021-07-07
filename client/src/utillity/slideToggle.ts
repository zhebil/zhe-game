import { getOffsetHeight } from './getOffsetHeight';

export const slideToggle = (
  el: HTMLElement,
  isShow: boolean,
  cb?: () => void
): void => {
  const height: number = getOffsetHeight(el);

  if (!isShow) {
    el.style.height = '';
    setTimeout(() => {
      el.style.height = height + 'px';
    }, 10);
  } else {
    el.style.height = height + 'px';
    setTimeout(() => {
      el.style.height = '0px';
    }, 10);
  }
  if (cb) {
    setTimeout(() => {
      cb();
    }, 350);
  }
};
