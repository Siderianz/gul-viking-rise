(() => {
  'use strict';
  const header=document.querySelector('.site-header');
  if(!header||document.querySelector('.guild-clock'))return;
  const labels={en:['Guild time','Local time'],ru:['Время гильдии','Местное время'],vi:['Giờ bang hội','Giờ địa phương'],tr:['Lonca saati','Yerel saat'],fr:['Heure de la guilde','Heure locale'],id:['Waktu guild','Waktu lokal']};
  const zone=Intl.DateTimeFormat().resolvedOptions().timeZone;
  const clock=document.createElement('aside');clock.className='guild-clock';
  clock.innerHTML='<div class="guild-clock-inner"><div class="guild-clock-times"><div class="guild-clock-face"><span class="guild-clock-label">UTC</span><time data-clock-value="utc"></time><time class="guild-clock-date" data-clock-date="utc"></time></div><div class="guild-clock-face"><span class="guild-clock-label" data-clock-local-label>Local time</span><time data-clock-value="local"></time><time class="guild-clock-date" data-clock-date="local"></time></div></div></div>';
  (header.querySelector('.language-switcher')||header).append(clock);
  const measure=()=>document.documentElement.style.setProperty('--guild-masthead-height',Math.ceil(header.getBoundingClientRect().height)+'px');
  const observer=new ResizeObserver(measure);observer.observe(header);observer.observe(clock);measure();
  const utc=clock.querySelector('[data-clock-value="utc"]'),local=clock.querySelector('[data-clock-value="local"]'),label=clock.querySelector('[data-clock-local-label]');
  let lastMinute=-1;
  function update(force=false){
    const now=new Date(),minute=Math.floor(now.getTime()/60000);if(!force&&minute===lastMinute)return;lastMinute=minute;
    const lang=document.documentElement.lang||'en',copy=labels[lang.split('-')[0]]||labels.en;
    const time=timeZone=>new Intl.DateTimeFormat(lang,{hour:'2-digit',minute:'2-digit',hourCycle:'h23',...(timeZone?{timeZone}:{})}).format(now);
    for(const kind of ['utc','local']){
      const date=clock.querySelector('[data-clock-date="'+kind+'"]'),timeZone=kind==='utc'?'UTC':zone;
      date.textContent=new Intl.DateTimeFormat(lang,{day:'numeric',month:'short',year:'numeric',timeZone}).format(now);
      const parts=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',timeZone}).formatToParts(now);
      const part=type=>parts.find(p=>p.type===type).value;
      date.dateTime=part('year')+'-'+part('month')+'-'+part('day');date.title=timeZone;
    }
    utc.textContent=time('UTC');local.textContent=time();utc.dateTime=local.dateTime=now.toISOString();
    label.textContent=copy[1];label.title=zone||'';clock.setAttribute('aria-label',copy[0]);
  }
  update(true);window.addEventListener('guild-language-change',()=>update(true));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)update(true);});
  window.setInterval(()=>update(),1000);
})();
