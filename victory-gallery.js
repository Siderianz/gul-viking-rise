(() => {
  'use strict';
  const params=new URLSearchParams(location.search);
  const view=params.get('album')==='kvk1'||location.hash==='#kvk1'?'kvk1':params.get('category')==='achievements'?'achievements':'root';
  document.querySelectorAll('[data-media-view]').forEach(n=>n.hidden=n.dataset.mediaView!==view);
  const photos=[...document.querySelectorAll('[data-victory-photo]')];
  if(!photos.length)return;
  const viewer=document.createElement('dialog');viewer.className='victory-viewer';viewer.setAttribute('aria-label','KVK1 victory photo');
  const bar=document.createElement('div');bar.className='victory-viewer-bar';
  const caption=document.createElement('span'),close=document.createElement('button'),image=document.createElement('img');
  close.type='button';close.textContent='Close';bar.append(caption,close);viewer.append(bar,image);document.body.append(viewer);
  let active=0,trigger;
  function show(index){active=(index+photos.length)%photos.length;const a=photos[active];image.src=a.href;image.alt=a.querySelector('img').alt;caption.textContent='';}
  photos.forEach((a,i)=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();trigger=a;show(i);viewer.showModal();}));
  close.addEventListener('click',()=>viewer.close());
  viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});
  viewer.addEventListener('close',()=>trigger?.focus({preventScroll:true}));
  viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(active+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(active-1);}});
})();
