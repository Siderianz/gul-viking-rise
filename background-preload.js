(() => {
  const loading=document.querySelector('.scene-loading');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const decode=src=>{const image=new Image(); image.src=src; return image.decode().catch(()=>{});};
  async function ready() {
    const assets=new Set();
    document.querySelectorAll('main, main *').forEach(el=>{
      const rect=el.getBoundingClientRect();
      if(rect.bottom<=0 || rect.top>innerHeight) return;
      for(const match of getComputedStyle(el).backgroundImage.matchAll(/url\(["']?([^"')]+)["']?\)/g)) assets.add(match[1]);
      if(el.tagName==='IMG' && el.currentSrc) assets.add(el.currentSrc);
    });
    await Promise.race([
      Promise.all([document.fonts.ready,...Array.from(assets,decode)]),
      new Promise(resolve=>setTimeout(resolve,2200))
    ]);
    document.documentElement.classList.add('guild-page-ready');
    if(loading) {
      loading.classList.add('is-ready');
      loading.setAttribute('aria-hidden','true');
      setTimeout(()=>loading.remove(),reduced.matches?0:200);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready,{once:true});
  else ready();
  window.addEventListener('pageshow',event=>{
    if(event.persisted){document.documentElement.classList.add('guild-page-ready');loading?.remove();}
  });
  document.addEventListener('pointerover',event=>{
    const link=event.target.closest('.top-nav a[href]');
    if(!link || link.dataset.prepared) return;
    link.dataset.prepared='1';
    const hint=document.createElement('link');hint.rel='prefetch';hint.href=link.href;document.head.append(hint);
  },{passive:true});
})();
