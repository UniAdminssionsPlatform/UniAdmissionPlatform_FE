const checkInViewIntersectionObserver = ({ target, distanceFromEnd, callback }) => {
  const _funCallback = (entries, observer) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        const unobserve = callback();
        unobserve && observer.unobserve(entry.target);
      }
      return true;
    });
  };

  if (typeof window.IntersectionObserver === 'undefined') {
    console.error('window.IntersectionObserver === undefined! => Your Browser is Notsupport');
    return;
  }
  const options = {
    root: null,
    rootMargin: `${distanceFromEnd}px 0px`,
    threshold: 0
  };
  const observer = new IntersectionObserver(_funCallback, options);
  target && observer.observe(target);
};

export default checkInViewIntersectionObserver;
