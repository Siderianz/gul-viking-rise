(() => {
  const loading = document.querySelector('.scene-loading');
  const scenes = {
    'index.html':['assets/hero-viking-guild.webp','assets/battlefield-hero.webp'],
    'announcements.html':['assets/section-kingdom.webp'],
    'migration.html':['assets/section-migration.webp'],
    'achievements.html':['assets/section-achievements.webp'],
    'media.html':['assets/section-media.webp'],
    'guides.html':['assets/section-guides.webp'],
    'kingdom.html':['assets/section-kingdom.webp','assets/leader-throne.webp'],
    'contacts.html':['assets/section-contacts.webp']
  };
  const prepared = new Set();
  const reveal = () => {
    if (!loading || loading.classList.contains('is-ready')) return;
    loading.classList.add('is-ready'); loading.setAttribute('aria-hidden','true');
    setTimeout(()=>loading.remove(),450);
  };
  // Show the approved toast briefly on arrival, never wait for decorative images.
  if (sessionStorage.getItem('gulContentVisited') === '1') {
    loading?.remove();
  } else {
    sessionStorage.setItem('gulContentVisited','1');
    setTimeout(reveal, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 650);
  }
  window.addEventListener('pageshow',event=>{if(event.persisted) reveal();});
  function prepareLink(event) {
    if(navigator.connection?.saveData || /2g/.test(navigator.connection?.effectiveType || '')) return;
    const link=event.target.closest('a[href]'); if(!link) return;
    const url=new URL(link.href,location.href); if(url.origin!==location.origin) return;
    for(const src of scenes[url.pathname.split('/').pop()] || []) {
      if(prepared.has(src)) continue;
      prepared.add(src); const image=new Image(); image.decoding='async'; image.src=src;
    }
  }
  // Prepare only destinations the visitor shows interest in.
  document.addEventListener('pointerover',prepareLink,{passive:true});
  document.addEventListener('focusin',prepareLink);
})();
