(() => {
  'use strict';
  // Child pages use the player in the persistent top-level document.
  if(window.parent!==window && window.parent.GULMusicHost){
    window.addEventListener('guild-language-selected',()=>window.parent.GULMusicHost.languageSelected());
    const relay=()=>window.parent.GULMusicHost.gateChanged(document.body.classList.contains('has-language-gate'));
    new MutationObserver(relay).observe(document.body,{attributes:true,attributeFilter:['class']});
    relay();
    return;
  }
  let childGate=false;
  const read=(store,key)=>{try{return store.getItem(key);}catch{return null;}};
  const write=(store,key,value)=>{try{store.setItem(key,value);}catch{}};
  const audio=new Audio('assets/audio/nordic-ambient.mp3');
  audio.loop=true; audio.preload='none'; audio.volume=0; audio.id='guild-background-music'; audio.hidden=true; document.body.append(audio);
  const button=document.createElement('button');
  button.type='button';button.className='guild-music-toggle';button.hidden=true;
  button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13M9 8l12-2M9 18c0 1.7-1.8 3-4 3s-4-1.3-4-3 1.8-3 4-3 4 1.3 4 3Zm12-2c0 1.7-1.8 3-4 3s-4-1.3-4-3 1.8-3 4-3 4 1.3 4 3Z"/></svg><span></span>';
  document.body.append(button);
  let allowed=read(sessionStorage,'gulMusicAllowed')==='1';
  let muted=read(localStorage,'gulMusicMuted')==='1';
  let fadeFrame=0;
  const targetVolume=.12;
  const update=()=>{
    const playing=!audio.paused;
    button.querySelector('span').textContent=playing?'Music on':'Music off';
    button.setAttribute('aria-pressed',String(playing));
    button.setAttribute('aria-label',playing?'Turn background music off':'Turn background music on');
    button.title=playing?'Turn off ambient music':'Play quiet ambient music';
    button.hidden=!allowed || childGate || (!document.querySelector('.guild-page-frame') && document.body.classList.contains('has-language-gate'));
  };
  const save=()=>write(sessionStorage,'gulMusicPosition',String(audio.currentTime||0));
  async function play(afterWelcome=false){
    cancelAnimationFrame(fadeFrame);
    audio.volume=0;
    try{
      const position=Number(read(sessionStorage,'gulMusicPosition'))||0;
      if(audio.readyState===0 && position>0) audio.addEventListener('loadedmetadata',()=>{if(position<audio.duration)audio.currentTime=position;},{once:true});
      await audio.play();
      update();
      const start=performance.now()+(afterWelcome?920:0);
      function fade(now){
        if(audio.paused)return;
        audio.volume=targetVolume*Math.min(1,Math.max(0,(now-start)/800));
        if(audio.volume<targetVolume)fadeFrame=requestAnimationFrame(fade);
      }
      fadeFrame=requestAnimationFrame(fade);
    }catch{update();}
  }
  const languageSelected=()=>{
    allowed=true;write(sessionStorage,'gulMusicAllowed','1');
    if(!muted)play(true);
    update();
  };
  window.addEventListener('guild-language-selected',languageSelected);
  button.addEventListener('click',()=>{
    if(audio.paused){muted=false;write(localStorage,'gulMusicMuted','0');play();}
    else{muted=true;write(localStorage,'gulMusicMuted','1');save();audio.pause();}
    update();
  });
  audio.addEventListener('play',update);audio.addEventListener('pause',update);
  new MutationObserver(update).observe(document.body,{attributes:true,attributeFilter:['class']});
  window.addEventListener('pagehide',save);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)save();});
  if(allowed&&!document.body.classList.contains('has-language-gate')&&!muted)play();
  update();
  window.GULMusicHost={languageSelected,gateChanged(value){childGate=value;update();}};
  let frame;
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href]');
    if(!link || event.defaultPrevented || event.button!==0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download'))return;
    const url=new URL(link.href,location.href);
    if(url.origin!==location.origin || !url.pathname.endsWith('.html') || (url.pathname===location.pathname && url.search===location.search))return;
    event.preventDefault();
    if(!frame){
      frame=document.createElement('iframe');frame.className='guild-page-frame';frame.title='GUL website';
      frame.addEventListener('load',()=>{
        const child=frame.contentWindow;
        if(!child || child.location.origin!==location.origin)return;
        document.title=frame.contentDocument.title;
        history.replaceState(null,'',child.location.href);
        childGate=frame.contentDocument.body.classList.contains('has-language-gate');
        update();
      });
      frame.src=url.href;
      document.body.append(frame);
      for(const element of document.body.children){
        if(element!==frame && element!==button && element!==audio && element.tagName!=='SCRIPT'){
          element.hidden=true;element.inert=true;element.setAttribute('aria-hidden','true');
        }
      }
      document.documentElement.classList.add('guild-music-shell');
    }else frame.src=url.href;
  });
})();