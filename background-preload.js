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
  }, {once:true});
})();
