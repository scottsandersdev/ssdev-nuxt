export default function smoothScroll() {
  const now = 'now' in window.performance ? performance.now() : new Date().getTime();
  const time = Math.min(1, ((now - startTime) / duration));
  const timeFunction = easings[easing](time);
  window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

  if (window.pageYOffset === destinationOffsetToScroll) {
    if (callback) {
      callback();
    }
    return;
  }

  requestAnimationFrame(smoothScroll);
}
