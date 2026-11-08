(() => {
  'use strict';
  const greetings={
    'STØRRI':['Got news? A question? Royal gossip?','Send it my way on Telegram or Discord.'],
    'The Emperor':['Your King is listening.','Bring your counsel. The realm moves together.'],
    'WarKatz':['A matter for the Queen?','Let’s keep the hall in order and our allies close.'],
    'Rogal Sandorn':['Need a knight in your corner?','You have my shield. Send word.'],
    'SeRj':['Word from beyond the borders?','Share what you’ve heard. I’ll bring the next tale.'],
    'RocketStar':['Bring the details. We’ll make a plan.','Clear heads. Sharp strategy. Ready ranks.'],
    'CHOCBERRY':['There’s always room by the hearth.','New face or old friend, you’re welcome here.']
  };
  document.querySelectorAll('.officer-message').forEach((details,index)=>{
    const card=details.closest('.officer-card,.r5-command-card');
    if(!card)return;
    const name=card.querySelector('h2,h3').textContent;
    const button=document.createElement('button');button.type='button';button.className='contact-message-button';button.textContent='Message';button.setAttribute('aria-label','Message '+name);button.setAttribute('aria-expanded','false');
    const panel=document.createElement('div');panel.className='contact-card-view';panel.inert=true;panel.setAttribute('aria-hidden','true');panel.id='contact-card-'+index;button.setAttribute('aria-controls',panel.id);
    const back=document.createElement('button');back.type='button';back.className='contact-card-back';back.textContent='← Back';
    const portrait=card.querySelector('.officer-avatar').cloneNode();portrait.className='contact-card-avatar';portrait.alt='';
    const identity=document.createElement('strong');identity.className='contact-card-name';identity.textContent=name;
    const greeting=greetings[name]||['Send word to the hall','Choose how you’d like to get in touch.'];
    const heading=document.createElement('h3');heading.className='contact-card-heading';heading.textContent=greeting[0];
    const introduction=document.createElement('p');introduction.className='contact-card-introduction';introduction.textContent=greeting[1];
    const options=document.createElement('div');options.className='contact-card-options';
    details.querySelectorAll('a').forEach(link=>{
      const a=link.cloneNode();a.className='contact-card-option';
      const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('aria-hidden','true');icon.classList.add('contact-platform-icon');
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',link.textContent==='Telegram'?'M21.4 3.2 18 20c-.2 1-1 1.2-1.8.5l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3L17.5 6c.4-.4-.1-.6-.6-.3L5 13.2l-5-1.6c-1.1-.4-1.1-1.1.2-1.6L20 2.4c.9-.3 1.6.2 1.4.8Z':'M19.7 4.7a18 18 0 0 0-4.4-1.4l-.6 1.2a16 16 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 8.8.7 12.8 1.1 16.8a18 18 0 0 0 5.4 2.7l1.1-1.8-1.7-.8.4-.3a13 13 0 0 0 11.4 0l.4.3-1.7.8 1.1 1.8a18 18 0 0 0 5.4-2.7c.5-4.6-.8-8.6-3.2-12.1ZM8.5 14.6c-1 0-1.7-.9-1.7-2s.7-2 1.7-2 1.7.9 1.7 2-.8 2-1.7 2Zm7 0c-1 0-1.7-.9-1.7-2s.7-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2Z');icon.append(path);
      const label=document.createElement('strong');label.textContent=link.textContent;
      a.append(icon,label);options.append(a);
    });
    panel.append(back,portrait,identity,heading,introduction,options);details.replaceWith(button);card.append(panel);
    const originals=[...card.children].filter(n=>n!==panel);
    function toggle(open){
      originals.forEach(n=>n.inert=open);panel.inert=!open;panel.setAttribute('aria-hidden',String(!open));card.classList.toggle('contact-card-active',open);button.setAttribute('aria-expanded',String(open));
      if(open){
        back.focus({preventScroll:true});
        const headerHeight=document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
        if(card.getBoundingClientRect().top<headerHeight){
          card.style.scrollMarginTop=(headerHeight+16)+'px';
          card.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
        }
      }else button.focus({preventScroll:true});
    }
    button.addEventListener('click',()=>toggle(true));back.addEventListener('click',()=>toggle(false));
    panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();toggle(false);}});
  });
})();
