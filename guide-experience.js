(() => {
  'use strict';
  const app=document.getElementById('guide-app');if(!app)return;
  let language=localStorage.getItem('guildLanguage')||'en', catalog=[], skills=[], selectedCategory=null, directoryQuery='';
  const savedInventory=[];
  const categories=[
    {id:'combat',title:'Combat & Builds',description:'Battle tactics, defense, and seasonal armies.'},
    {id:'equipment',title:'Mounts & Gear',description:'Choose mounts, build wishlists, and plan your forge.'},
    {id:'growth',title:'Growth & Calculators',description:'Healing, training, experience, fragments, and research.'},
    {id:'events',title:'Events & Packs',description:'Toy Event, Emote Dash, and pack comparisons.'},
    {id:'skills',title:'Skill Library',description:'Legendary, purple, and mount skill descriptions.'},
    {id:'start',title:'Getting Started',description:'Find your way around the GUL guides.'}
  ];
  const ui={
    en:{guides:'Guides',choose:'What would you like help with?',search:'Search guides',all:'All guides',back:'Back to guides',contents:'In this guide',close:'Close',open:'Open image',filter:'Find a skill',none:'No results. Try another search.',clear:'Clear search',loading:'Loading your guide…',error:'This guide could not load. Please try again.',retry:'Try again',next:'Next',previous:'Previous',notListed:'Not listed',related:'Explore more',price:'Pack price (USD)',pack:'Pack',rate:'Blue pieces per USD',select:'Choose an option',technology:'Technology',level:'Level',time:'Research time',resources:'Resources',assumptions:'Based on the GUL guide’s listed values.',wishlist:'Wishlist',skills:'Skills',mountSkills:'Mount skills',commanders:'Commanders',troops:'Troop type',noImage:'A description is not available for this skill yet.',credit:'GUL Ultimate Guide · Thorbjørnsson',action:'Choose a category above.',rows:'entries',cost:'Resource cost'},
    ru:{guides:'Гайды',choose:'Что вы хотите узнать?',search:'Поиск гайдов',all:'Все гайды',back:'Назад к гайдам',contents:'В этом гайде',close:'Закрыть',open:'Открыть изображение',filter:'Найти навык',none:'Ничего не найдено. Попробуйте другой запрос.',clear:'Очистить поиск',loading:'Загрузка гайда…',error:'Не удалось загрузить гайд.',retry:'Повторить',next:'Далее',previous:'Назад',notListed:'Нет данных',related:'Другие гайды',price:'Цена набора (USD)',pack:'Набор',rate:'Синие части за USD',select:'Выбрать вариант',technology:'Технология',level:'Уровень',time:'Время исследования',resources:'Ресурсы',assumptions:'На основе значений гайда GUL.',wishlist:'Список желаемого',skills:'Навыки',mountSkills:'Навыки маунтов',commanders:'Командиры',troops:'Тип войск',noImage:'Описание этого навыка пока недоступно.',credit:'GUL Ultimate Guide · Thorbjørnsson',action:'Выберите категорию выше.',rows:'записей',cost:'Стоимость ресурсов'},
    vi:{guides:'Hướng dẫn',choose:'Bạn cần hỗ trợ điều gì?',search:'Tìm hướng dẫn',all:'Tất cả hướng dẫn',back:'Về hướng dẫn',contents:'Trong hướng dẫn này',close:'Đóng',open:'Mở ảnh',filter:'Tìm kỹ năng',none:'Không tìm thấy. Hãy thử từ khác.',clear:'Xóa tìm kiếm',loading:'Đang tải…',error:'Không thể tải hướng dẫn.',retry:'Thử lại',next:'Tiếp',previous:'Trước',notListed:'Chưa có dữ liệu',related:'Khám phá thêm',price:'Giá gói (USD)',pack:'Gói',rate:'Mảnh xanh mỗi USD',select:'Chọn tùy chọn',technology:'Công nghệ',level:'Cấp',time:'Thời gian nghiên cứu',resources:'Tài nguyên',skills:'Kỹ năng',mountSkills:'Kỹ năng thú cưỡi',commanders:'Tướng',troops:'Loại quân',noImage:'Chưa có mô tả kỹ năng.',action:'Chọn danh mục ở trên.',rows:'mục'},
    tr:{guides:'Rehberler',choose:'Ne hakkında yardım istiyorsun?',search:'Rehber ara',all:'Tüm rehberler',back:'Rehberlere dön',contents:'Bu rehberde',close:'Kapat',open:'Görseli aç',filter:'Yetenek bul',none:'Sonuç bulunamadı.',clear:'Aramayı temizle',loading:'Yükleniyor…',error:'Rehber yüklenemedi.',retry:'Tekrar dene',next:'Sonraki',previous:'Önceki',notListed:'Belirtilmemiş',related:'Diğer rehberler',price:'Paket fiyatı (USD)',pack:'Paket',rate:'USD başına mavi parça',select:'Seçenek seç',technology:'Teknoloji',level:'Seviye',time:'Araştırma süresi',resources:'Kaynaklar',skills:'Yetenekler',mountSkills:'Binek yetenekleri',commanders:'Komutanlar',troops:'Birlik türü',noImage:'Yetenek açıklaması henüz yok.',action:'Yukarıdan bir kategori seçin.',rows:'kayıt'},
    fr:{guides:'Guides',choose:'De quoi avez-vous besoin ?',search:'Rechercher un guide',all:'Tous les guides',back:'Retour aux guides',contents:'Dans ce guide',close:'Fermer',open:'Ouvrir l’image',filter:'Trouver une compétence',none:'Aucun résultat.',clear:'Effacer',loading:'Chargement…',error:'Impossible de charger le guide.',retry:'Réessayer',next:'Suivant',previous:'Précédent',notListed:'Non indiqué',related:'Explorer davantage',price:'Prix du pack (USD)',pack:'Pack',rate:'Pièces bleues par USD',select:'Choisir une option',technology:'Technologie',level:'Niveau',time:'Durée de recherche',resources:'Ressources',skills:'Compétences',mountSkills:'Compétences de monture',commanders:'Commandants',troops:'Type de troupes',noImage:'Description indisponible.',action:'Choisissez une catégorie ci-dessus.',rows:'entrées'},
    id:{guides:'Panduan',choose:'Apa yang ingin Anda ketahui?',search:'Cari panduan',all:'Semua panduan',back:'Kembali ke panduan',contents:'Dalam panduan ini',close:'Tutup',open:'Buka gambar',filter:'Cari keahlian',none:'Tidak ditemukan.',clear:'Hapus pencarian',loading:'Memuat…',error:'Panduan gagal dimuat.',retry:'Coba lagi',next:'Berikutnya',previous:'Sebelumnya',notListed:'Tidak tercantum',related:'Jelajahi lagi',price:'Harga paket (USD)',pack:'Paket',rate:'Keping biru per USD',select:'Pilih opsi',technology:'Teknologi',level:'Level',time:'Waktu riset',resources:'Sumber daya',skills:'Keahlian',mountSkills:'Keahlian tunggangan',commanders:'Komandan',troops:'Jenis pasukan',noImage:'Deskripsi belum tersedia.',action:'Pilih kategori di atas.',rows:'entri'}
  };
  const categoryNames={ru:['Битвы и сборки','Маунты и экипировка','Развитие и калькуляторы','События и наборы','Библиотека навыков','Начало'],vi:['Chiến đấu và đội hình','Thú cưỡi và trang bị','Phát triển và công cụ','Sự kiện và gói','Thư viện kỹ năng','Bắt đầu'],tr:['Savaş ve dizilimler','Binekler ve ekipman','Gelişim ve hesaplayıcılar','Etkinlikler ve paketler','Yetenek kütüphanesi','Başlangıç'],fr:['Combat et compositions','Montures et équipement','Progression et outils','Événements et packs','Bibliothèque de compétences','Premiers pas'],id:['Pertempuran dan susunan','Tunggangan dan perlengkapan','Perkembangan dan alat','Acara dan paket','Pustaka keahlian','Memulai']};
  const hero={
    en:{eyebrow:'The War Room',title:'Victory Begins at the War Table',intro:'Commander builds, battle tactics, and tools to prepare your next march.'},
    ru:{eyebrow:'Зал стратегии',title:'Победа начинается за военным столом',intro:'Сборки командиров, боевая тактика и инструменты для подготовки к следующему походу.'},
    vi:{eyebrow:'Phòng chiến thuật',title:'Chiến thắng bắt đầu từ bàn chiến thuật',intro:'Đội hình tướng, chiến thuật và công cụ để chuẩn bị cho cuộc hành quân tiếp theo.'},
    tr:{eyebrow:'Savaş Odası',title:'Zafer, Savaş Masasında Başlar',intro:'Bir sonraki seferiniz için komutan dizilimleri, savaş taktikleri ve araçlar.'},
    fr:{eyebrow:'Salle de stratégie',title:'La victoire se prépare à la table de guerre',intro:'Compositions de commandants, tactiques et outils pour préparer votre prochaine marche.'},
    id:{eyebrow:'Ruang Strategi',title:'Kemenangan Dimulai di Meja Perang',intro:'Susunan komandan, taktik pertempuran, dan alat untuk menyiapkan perjalanan berikutnya.'}
  };
  const tr=key=>ui[language]?.[key]??ui.en[key]??key;
  const categoryTitle=id=>categoryNames[language]?.[categories.findIndex(c=>c.id===id)]??categories.find(c=>c.id===id)?.title??id;
  const node=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const href=slug=>'guide.html?topic='+encodeURIComponent(slug);
  const norm=s=>s.toLocaleLowerCase().replace(/[^a-z0-9]/g,'');
  const number=value=>value===null||value===undefined?tr('notListed'):typeof value==='number'?value.toLocaleString(language,{maximumFractionDigits:2}):String(value);
  function link(text,url,cls){const a=node('a',cls,text);a.href=url;return a;}
  function button(text,fn,cls='guide-button'){const b=node('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;}
  function field(label,control){const wrap=node('label','guide-field');wrap.append(node('span',null,label),control);return wrap;}
  function select(values,fn){const s=node('select');values.forEach((x,i)=>{const o=node('option',null,typeof x==='object'?x.label:String(x));o.value=typeof x==='object'?x.value:String(i);s.append(o);});s.addEventListener('change',()=>fn(s.value));return s;}
  function displayImage(im,trigger){
    if(!im.src)return;const dialog=node('dialog','guide-image-viewer');dialog.setAttribute('aria-label',im.title);const heading=node('header');heading.append(node('strong',null,im.title),button(tr('close'),()=>dialog.close()));const img=node('img');img.src=im.src;img.alt=im.title;const full=link(tr('open'),im.src);full.target='_blank';full.rel='noopener';dialog.append(heading,img,full);document.body.append(dialog);dialog.addEventListener('close',()=>{dialog.remove();trigger?.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.showModal();
  }
  function gallery(images,library=false){
    const grid=node('div',library?'guide-gallery skill-gallery':'guide-gallery');
    for(const im of images){const figure=node('figure','guide-image-card');if(im.key)figure.id='skill-'+im.key;
      if(im.stats){figure.classList.add('gear-stat-card');figure.append(node('figcaption',null,im.title),node('p','gear-meta',[im.troop,im.grade,im.slot,'Level '+im.level].join(' · ')));const stats=node('dl');for(const [name,value] of im.stats)stats.append(node('dt',null,name),node('dd',null,number(value)+'%'));figure.append(stats,button(tr('open'),e=>displayImage(im,e.currentTarget)));grid.append(figure);continue;}
      if(im.src){const a=link('',im.src,'guide-image-link');a.setAttribute('aria-label',tr('open')+': '+im.title);const img=node('img');img.src=im.src;img.alt=im.title;img.loading='lazy';img.decoding='async';img.width=640;img.height=320;a.append(img);a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey)return;e.preventDefault();displayImage(im,a);});figure.append(a);}
      figure.append(node('figcaption',null,im.title));if(!im.src)figure.append(node('p','guide-note',tr('noImage')));grid.append(figure);
    }return grid;
  }
  function skillName(name){const im=skills.find(s=>norm(s.title)===norm(name));return im?.src?button(name,e=>displayImage(im,e.currentTarget),'guide-skill-link'):node('span','guide-skill-name',name);}
  function dataTable(headers,rows){
    const box=node('div','guide-data'),scroller=node('div','guide-table-wrap'),table=node('table','guide-table');scroller.tabIndex=0;scroller.setAttribute('role','region');scroller.setAttribute('aria-label',headers.join(', '));const thead=node('thead'),hr=node('tr');headers.forEach(h=>{const th=node('th',null,h);th.scope='col';hr.append(th);});thead.append(hr);table.append(thead);const tbody=node('tbody');table.append(tbody);scroller.append(table);box.append(scroller);let page=0;const size=12;const controls=node('div','guide-pagination');
    function render(){tbody.replaceChildren();rows.slice(page*size,(page+1)*size).forEach(row=>{const trr=node('tr');row.forEach((v,i)=>{const td=node(i===0?'th':'td',typeof v==='number'?'number':'',number(v));if(i===0)td.scope='row';trr.append(td);});tbody.append(trr);});controls.replaceChildren();if(rows.length>size){const prev=button(tr('previous'),()=>{page--;render();});const next=button(tr('next'),()=>{page++;render();});prev.disabled=page===0;next.disabled=(page+1)*size>=rows.length;controls.append(prev,node('span',null,(page*size+1)+'-'+Math.min((page+1)*size,rows.length)+' / '+rows.length),next);}}
    render();box.append(controls);return box;
  }
  function directory(){
    app.replaceChildren();const search=node('input');search.type='search';search.placeholder=tr('search');search.value=directoryQuery;search.id='guide-search';app.append(field(tr('search'),search));
    const grid=node('div','hub-categories');for(const c of categories){const b=button('',()=>{selectedCategory=c.id;directoryQuery='';directory();const panel=document.getElementById('hub-topics');panel.focus({preventScroll:true});panel.scrollIntoView({block:'start'});},'hub-category');b.dataset.category=c.id;b.setAttribute('aria-expanded',String(selectedCategory===c.id));b.setAttribute('aria-controls','hub-topics');b.append(node('strong',null,categoryTitle(c.id)),node('span',null,c.description));const arrow=node('span','category-arrow','›');arrow.setAttribute('aria-hidden','true');b.append(arrow);grid.append(b);}app.append(grid);
    const panel=node('section','hub-topics');panel.id='hub-topics';panel.tabIndex=-1;app.append(panel);
    function topics(){panel.replaceChildren();const q=directoryQuery.trim().toLocaleLowerCase();grid.hidden=!!q;if(!q&&!selectedCategory)return;const found=catalog.filter(t=>q?(t.title+' '+t.intro+' '+t.search).toLocaleLowerCase().includes(q):t.category===selectedCategory);panel.append(node('h2',null,q?tr('search'):categoryTitle(selectedCategory)));const list=node('div','hub-topic-list');for(const t of found){const a=link('',href(t.slug),'hub-topic');a.append(node('strong',null,t.title),node('span',null,t.intro));list.append(a);}panel.append(list);if(!found.length)panel.append(node('p',null,tr('none')),button(tr('clear'),()=>{directoryQuery='';search.value='';topics();search.focus();}));}
    search.addEventListener('input',()=>{directoryQuery=search.value;topics();});topics();
    document.querySelectorAll('[data-guide-ui]').forEach(n=>n.textContent=tr(n.dataset.guideUi));
    document.querySelectorAll('[data-guide-hero]').forEach(n=>n.textContent=(hero[language]||hero.en)[n.dataset.guideHero]);
  }
  function calculator(section){
    const box=node('div','guide-calculator');box.append(node('p','guide-note','Example values are prefilled. Enter your resources in billions and speedups in days. Each result uses the same inventory independently.'));
    const labels=['Food','Wood','Stone','Gold','Healing speedups','Training speedups'],inputs=[],fields=node('div','guide-calculator-fields');
    labels.forEach((name,i)=>{const input=node('input');input.type='number';input.min='0';input.step='any';input.required=true;input.inputMode='decimal';input.value=savedInventory[i]??section.defaults[i];input.id='inventory-'+i;inputs.push(input);fields.append(field(name+(i<4?' (billion)':' (days)'),input));input.addEventListener('input',()=>{savedInventory[i]=input.value;update();});});
    const error=node('p','guide-error');error.setAttribute('role','status');const outputs=node('div','guide-calculator-results');outputs.setAttribute('aria-live','polite');box.append(fields,error,outputs);
    function update(){outputs.replaceChildren();const values=inputs.map(n=>n.value.trim()===''?NaN:Number(n.value));inputs.forEach((n,i)=>n.setAttribute('aria-invalid',String(!Number.isFinite(values[i])||values[i]<0)));if(!values.every(n=>Number.isFinite(n)&&n>=0)){error.textContent='Enter a number of zero or more in every field.';return;}error.textContent='';section.rates.forEach((rate,i)=>{const r=window.GULGuideCalculator.calculate(values.slice(0,4),values[i===2?5:4],rate.costs,rate.batch,rate.minutes);if(!r){error.textContent='The entered amounts are too large. Try smaller values.';return;}const card=node('div','guide-calculator-result');card.append(node('h3',null,rate.title),node('strong',null,number(r.troops)),node('span',null,'whole troops'),node('p',null,'Limited by '+r.bottlenecks.map(b=>labels[b===4?(i===2?5:4):b]).join(', ')));const dl=node('dl');r.spent.forEach((v,j)=>dl.append(node('dt',null,labels[j]),node('dd',null,number(v))));dl.append(node('dt',null,'Speedup days'),node('dd',null,number(r.days)));if(i===2)dl.append(node('dt',null,'Might increase'),node('dd',null,number(r.troops*13)));card.append(dl);outputs.append(card);});}
    update();return box;
  }
  function renderSection(section){
    const box=node('section','guide-section');box.id=section.anchor;box.append(node('h2',null,section.title));
    if(section.type==='prose'){
      for(const p of section.paragraphs)box.append(node('p',null,p));
      if(section.items.length){const list=node(section.ordered?'ol':'ul','guide-points');for(const item of section.items){const li=node('li');if(typeof item==='string')li.textContent=item;else li.append(node('strong',null,item.title+': '),document.createTextNode(item.body));list.append(li);}box.append(list);}
      if(section.images.length)box.append(gallery(section.images));
    } else if(section.type==='table'){box.append(dataTable(section.headers,section.rows));if(section.note)box.append(node('p','guide-note',section.note));
    } else if(section.type==='gallery')box.append(gallery(section.images));
    else if(section.type==='library'){
      const input=node('input');input.type='search';input.placeholder=tr('filter');input.id='skill-search';box.append(field(tr('filter'),input));const result=node('div');box.append(result);function show(){const found=section.images.filter(im=>im.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()));result.replaceChildren(found.length?gallery(found,true):node('p',null,tr('none')));}input.addEventListener('input',show);show();
    } else if(section.type==='forge'){
      const steps=node('div','forge-path');section.steps.forEach((step,i)=>{const article=node('article','forge-step');article.append(node('span','forge-order',String(i+1)),node('h3',null,step.title),node('p',null,step.body),gallery(step.images));steps.append(article);});box.append(steps);
    } else if(section.type==='equipment'){
      for(const group of section.groups){const g=node('section','equipment-group');g.append(node('h3',null,group.title),gallery(group.images));box.append(g);}
    } else if(section.type==='offers'){
      const prices=[...new Set(section.offers.map(o=>o.price))].sort((a,b)=>a-b);const result=node('div');const picker=select(prices.map(p=>({value:String(p),label:'USD '+number(p)})),show);picker.value='5';box.append(field(tr('price'),picker),node('p','guide-note',section.unit),result);function show(){const found=section.offers.filter(o=>o.price===Number(picker.value));result.replaceChildren(dataTable([tr('pack'),tr('rate')],found.map(o=>[o.pack,o.rate])));}show();
    } else if(section.type==='datasets'){
      const result=node('div');const picker=select(section.sets.map((s,i)=>({value:String(i),label:s.name})),show);box.append(field(tr('select'),picker),result);function show(){const s=section.sets[Number(picker.value)];result.replaceChildren(node('p','guide-note',s.summary),dataTable(s.headers,s.rows));}show();
    } else if(section.type==='research'){
      const result=node('div');const picker=select(section.technologies.map((s,i)=>({value:String(i),label:s.name})),show);picker.id='research-technology';box.append(field(tr('technology'),picker),node('p','guide-note',section.note),result);function show(){const s=section.technologies[Number(picker.value)];result.replaceChildren(dataTable([tr('level'),tr('time'),tr('resources')],s.levels.map(l=>[l.level,l.time,l.resources])));}show();
    } else if(section.type==='event'){
      if(section.paragraph)box.append(node('p',null,section.paragraph));if(section.average!==undefined)box.append(node('p','guide-note','Recorded average per ten spins: '+number(section.average)+' points.'));
      const result=node('div','guide-stats');const picker=select(section.options.map((o,i)=>({value:String(i),label:number(o.score)})),show);box.append(field(section.event==='toy'?'Average points per 10 spins':'Average points per 25 spins',picker),result);function show(){const o=section.options[Number(picker.value)];result.replaceChildren();for(const [name,value] of o.stats){const stat=node('div');stat.append(node('strong',null,number(value)),node('span',null,name));result.append(stat);}}show();
      if(section.samples){const details=node('details','guide-disclosure');details.append(node('summary',null,'Recorded ten-spin scores'),node('p','spin-samples',section.samples.map(number).join(', ')));box.append(details);}
    } else if(section.type==='builds'){
      const result=node('div');const picker=select(section.groups.map((g,i)=>({value:String(i),label:g.name})),show);picker.id='build-group';box.append(field(tr('troops'),picker),result);
      function show(){const group=section.groups[Number(picker.value)];const grid=node('div','build-grid');for(const build of group.builds){const card=node('article','build-card');card.append(node('span','build-use',build.use),node('h3',null,build.commanders.join(' + ')));const portraits=node('div','build-commander-portraits');for(const commander of build.commanders){for(const name of commander.split(/\s*\/\s*/)){const hero=window.GULHeroPortraits?.[name.trim().toLowerCase()];if(!hero)continue;const figure=node('figure','build-commander');const frame=node('div','build-hero-frame');const img=node('img');img.src=hero.src;img.alt=name;img.loading='lazy';const f=hero.frame,scale=96/Math.max(f.width,f.height);img.style.width=(hero.width*scale)+'px';img.style.height=(hero.height*scale)+'px';img.style.left=((96-f.width*scale)/2-f.x*scale)+'px';img.style.top=((96-f.height*scale)/2-f.y*scale)+'px';const art=node('div','build-hero-art');art.append(img);frame.append(art);figure.append(frame,node('figcaption',null,name));portraits.append(figure);}}if(portraits.childElementCount)card.append(portraits);const skillList=node('ul','build-skills');for(const skill of build.skills){const item=node('li');item.append(skillName(skill));skillList.append(item);}card.append(node('h4',null,tr('skills')),skillList);if(build.mount_skills.length){card.append(node('h4',null,tr('mountSkills')));const mounts=node('div','build-mount-skills');build.mount_skills.forEach(s=>mounts.append(skillName(s)));card.append(mounts);}grid.append(card);}result.replaceChildren(grid);}show();
    } else if(section.type==='wishlist'){
      for(const group of section.groups){const g=node('section','wishlist-group');g.append(node('h3',null,group.name));const list=node('div','wishlist-list');for(const item of group.entries){const entry=node('div');entry.append(skillName(item.name));if(item.rating)entry.append(node('span','wishlist-rating',item.rating));list.append(entry);}g.append(list);box.append(g);}
    } else if(section.type==='mount-plan'){
      const result=node('div'),picker=select(section.levels.map((r,i)=>({value:String(i),label:String(r.level)})),show);box.append(field('Elemental Blessing level',picker),result);function show(){const s=section.levels[Number(picker.value)];result.replaceChildren(dataTable(['Mount','XP required for level 10'],s.mounts.map((v,i)=>[i+1,v])));}show();
    } else if(section.type==='calculator')box.append(calculator(section));
    return box;
  }
  let active=null;
  function article(t){
    active=t;app.replaceChildren();const crumbs=node('nav','guide-breadcrumbs');crumbs.setAttribute('aria-label','Breadcrumb');crumbs.append(link(tr('all'),'guides.html'),node('span',null,'/'),link(categoryTitle(t.category),'guides.html?category='+t.category));
    const heading=node('header','guide-article-heading');const h1=node('h1',null,t.title);h1.id='guide-title';heading.append(crumbs,h1,node('p',null,t.intro));app.append(heading);
    const layout=node('div','guide-reading-layout'),aside=node('aside','guide-outline'),outline=node('nav');outline.setAttribute('aria-label',tr('contents'));aside.append(node('h2',null,tr('contents')));for(const s of t.sections)outline.append(link(s.title,'#'+s.anchor));aside.append(outline,link(tr('back'),'guides.html','guide-back'));const body=node('article','guide-article');body.setAttribute('aria-labelledby','guide-title');t.sections.forEach(s=>body.append(renderSection(s)));layout.append(aside,body);app.append(layout);
    const related=node('section','guide-related');related.append(node('h2',null,tr('related')));const links=node('div');catalog.filter(c=>c.category===t.category&&c.slug!==t.slug).forEach(c=>links.append(link(c.title,href(c.slug))));if(!links.children.length)links.append(link(tr('all'),'guides.html'));related.append(links);app.append(related,node('p','guide-credit-line',tr('credit')));document.title=t.title+' | GUL';document.querySelector('meta[name="description"]')?.setAttribute('content',t.intro);
  }
  async function load(){
    app.setAttribute('aria-busy','true');app.replaceChildren(node('p','guide-note',tr('loading')));
    try{
      const responses=await Promise.all([fetch('guide-content/catalog.json'),fetch('guide-content/skill-index.json')]);if(responses.some(r=>!r.ok))throw Error('Guide data unavailable');[catalog,skills]=await Promise.all(responses.map(r=>r.json()));
      if(app.dataset.guideView==='directory'){
        const legacy=new URLSearchParams(location.hash.slice(1)).get('guide');const match=catalog.find(t=>t.id===legacy);if(match){location.replace(href(match.slug));return;}
        selectedCategory=new URLSearchParams(location.search).get('category');directory();
      }else{
        const slug=new URLSearchParams(location.search).get('topic'),entry=catalog.find(t=>t.slug===slug);if(!entry){app.replaceChildren(node('h1',null,'Choose a guide'),link(tr('all'),'guides.html','guide-button'));return;}
        const response=await fetch('guide-content/'+entry.slug+'.json');if(!response.ok)throw Error('Guide unavailable');article(await response.json());
      }
    }catch(e){app.replaceChildren(node('p','guide-error',tr('error')),button(tr('retry'),load));}
    finally{app.setAttribute('aria-busy','false');}
  }
  window.addEventListener('guild-language-change',e=>{language=e.detail.lang;if(catalog.length){if(active)article(active);else directory();}});
  load();
})();
