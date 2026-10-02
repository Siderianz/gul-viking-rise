(() => {
  const scenes = {
    'index.html': ['assets/hero-viking-guild.png', 'assets/battlefield-hero.png'],
    'announcements.html': ['assets/announcements-board.png'],
    'migration.html': ['assets/section-migration.png'],
    'achievements.html': ['assets/section-achievements.png'],
    'media.html': ['assets/section-media.png'],
    'guides.html': ['assets/section-guides.png'],
    'kingdom.html': ['assets/section-kingdom.png', 'assets/leader-throne.png'],
    'contacts.html': ['assets/section-contacts.png']
  };
  const prepared = new Set();
  function ready(src) {
    return new Promise(resolve => {
      const image = new Image();
      image.onload = () => image.decode().catch(() => {}).then(resolve);
      image.onerror = resolve;
      image.src = src;
    });
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  const loading = document.querySelector('.scene-loading');
  const important = [...(scenes[current] || [])];
  if (current === 'index.html') important.push('assets/guild-logo-cutout.png');
  const reveal = () => {
    if (!loading) return;
    loading.classList.add('is-ready');
    loading.setAttribute('aria-hidden','true');
    setTimeout(() => loading.remove(), 450);
  };
  Promise.race([Promise.all(important.map(ready)),new Promise(resolve => setTimeout(resolve,12000))]).then(reveal);
  window.addEventListener('pageshow', event => { if (event.persisted) reveal(); });
  function prepare(file) {
    (scenes[file] || []).forEach(src => {
      if (prepared.has(src)) return;
      prepared.add(src);
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    });
  }
  function prepareLink(event) {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.origin === location.origin) prepare(url.pathname.split('/').pop());
  }
  document.addEventListener('pointerover', prepareLink, {passive:true});
  document.addEventListener('pointerdown', prepareLink, {passive:true});
  document.addEventListener('focusin', prepareLink);
  window.addEventListener('load', () => {
    const current = location.pathname.split('/').pop() || 'index.html';
    // Finish the current page's secondary scene after its first paint.
    prepare(current);
    // One at a time so upcoming scenes do not compete with the opening scene.
    const queue = Object.entries(scenes).filter(([file]) => file !== current).flatMap(([,images]) => images);
    const warm = async () => {
      if (navigator.connection?.saveData) return;
      for (const src of queue) { await ready(src); prepared.add(src); }
    };
    if ('requestIdleCallback' in window) requestIdleCallback(warm, {timeout:3000});
    else setTimeout(warm, 1000);
  }, {once:true});
})();

