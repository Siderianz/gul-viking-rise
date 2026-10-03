(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const page = document.querySelector('main');
  const blur = matchMedia('(min-width:1024px)').matches ? 'blur(2px)' : 'blur(12px)';
  const key = 'gulPageSlide';
  const incoming = sessionStorage.getItem(key);
  sessionStorage.removeItem(key);
  if (!page || reduced.matches) return;
  let leaving = false;
  if (incoming) {
    page.animate([
      { opacity: 0, filter: blur, transform: `translateX(${incoming === 'back' ? '-40px' : '40px'})` },
      { opacity: 1, filter: 'blur(0px)', transform: 'translateX(0)' }
    ], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !url.pathname.endsWith('.html') || url.pathname === location.pathname || reduced.matches) return;
    event.preventDefault();
    if (leaving) return;
    leaving = true;
    const order = ['index.html','announcements.html','kingdom.html','migration.html','achievements.html','media.html','guides.html','contacts.html'];
    const back = order.indexOf(url.pathname.split('/').pop()) < order.indexOf(location.pathname.split('/').pop());
    sessionStorage.setItem(key, back ? 'back' : 'forward');
    // Warm the destination while the outgoing animation is playing.
    const preload = document.createElement('link');
    preload.rel = 'prefetch';
    preload.href = url.href;
    document.head.appendChild(preload);
    page.animate([
      { opacity: 1, filter: 'blur(0px)', transform: 'translateX(0)' },
      { opacity: 0, filter: blur, transform: `translateX(${back ? '40px' : '-40px'})` }
    ], { duration: 320, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' }).finished.then(() => location.assign(url.href));
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted) {
      leaving = false;
      page.getAnimations().forEach(animation => animation.cancel());
    }
  });
})();


