(function () {
  'use strict';
  const reader=document.getElementById('library-reader');
  if(!reader) return;
  const topicSelect=document.getElementById('library-topic'), search=document.getElementById('library-search'), results=document.getElementById('library-results'), status=document.getElementById('library-status');
  const words={
    en:['Search all guides','Choose a topic','Original spreadsheet ↗','No matching guides. Try another word.','Guide text is preserved in its original language.','Guide notes and tables','Screenshots','Open full image','Close','Loading the guide…','The guide could not load. Please retry.','Retry','Healing & training calculator','Food','Wood','Stone','Gold','Healing speedups','Training speedups','billion','days','Whole troops','Limited by','Healing T7','Healing T5','Training T7','Enter a number of zero or more in every field.','Uses the workbook’s saved rates. Starting values are workbook examples; enter your own inventory. Whole-troop results are rounded down.','Source details','Saved result; use the calculator above to change inputs.','Source','Copy topic link','Topic link copied','No screenshots in this topic.'],
    ru:['Поиск по гайдам','Выбрать тему','Оригинальная таблица ↗','Ничего не найдено. Попробуйте другое слово.','Текст гайда сохранён на языке оригинала.','Заметки и таблицы','Скриншоты','Открыть изображение','Закрыть','Загрузка…','Не удалось загрузить гайд. Повторите попытку.','Повторить','Калькулятор лечения и тренировки','Еда','Дерево','Камень','Золото','Ускорения лечения','Ускорения тренировки','млрд','дней','Целых воинов','Ограничение','Лечение T7','Лечение T5','Тренировка T7','Введите число не меньше нуля в каждом поле.','Используются значения из таблицы. Начальные значения — примеры; введите свои запасы. Число воинов округляется вниз.','Данные источника','Сохранённый результат; измените данные в калькуляторе выше.','Источник','Копировать ссылку','Ссылка скопирована','В этой теме нет скриншотов.'],
    vi:['Tìm trong hướng dẫn','Chọn chủ đề','Bảng tính gốc ↗','Không tìm thấy. Hãy thử từ khác.','Nội dung giữ nguyên ngôn ngữ gốc.','Ghi chú và bảng','Ảnh chụp','Mở ảnh đầy đủ','Đóng','Đang tải…','Không thể tải. Vui lòng thử lại.','Thử lại','Tính chữa trị và huấn luyện','Lương thực','Gỗ','Đá','Vàng','Tăng tốc chữa trị','Tăng tốc huấn luyện','tỷ','ngày','Số quân nguyên','Giới hạn bởi','Chữa trị T7','Chữa trị T5','Huấn luyện T7','Nhập số từ 0 trở lên vào mọi ô.','Dùng mức trong bảng tính. Giá trị ban đầu là ví dụ; nhập kho của bạn. Số quân được làm tròn xuống.','Chi tiết nguồn','Kết quả đã lưu; dùng công cụ phía trên để thay đổi.','Nguồn','Sao chép liên kết','Đã sao chép','Chủ đề này không có ảnh.'],
    tr:['Tüm rehberlerde ara','Konu seç','Orijinal tablo ↗','Sonuç bulunamadı. Başka kelime deneyin.','Rehber metni orijinal dilinde korunur.','Notlar ve tablolar','Ekran görüntüleri','Tam görseli aç','Kapat','Yükleniyor…','Rehber yüklenemedi. Tekrar deneyin.','Tekrar dene','İyileştirme ve eğitim hesaplayıcısı','Yiyecek','Odun','Taş','Altın','İyileştirme hızlandırmaları','Eğitim hızlandırmaları','milyar','gün','Tam asker sayısı','Sınırlayan','İyileştirme T7','İyileştirme T5','Eğitim T7','Her alana sıfır veya üstü bir sayı girin.','Tablodaki oranları kullanır. İlk değerler örnektir; kendi kaynaklarınızı girin. Asker sayısı aşağı yuvarlanır.','Kaynak ayrıntıları','Kayıtlı sonuç; değiştirmek için yukarıdaki hesaplayıcıyı kullanın.','Kaynak','Konu bağlantısını kopyala','Bağlantı kopyalandı','Bu konuda görsel yok.'],
    fr:['Rechercher dans les guides','Choisir un sujet','Tableur original ↗','Aucun résultat. Essayez un autre mot.','Le texte du guide reste dans sa langue originale.','Notes et tableaux','Captures d’écran','Ouvrir l’image entière','Fermer','Chargement…','Impossible de charger le guide. Réessayez.','Réessayer','Calcul de soins et d’entraînement','Nourriture','Bois','Pierre','Or','Accélérations de soins','Accélérations d’entraînement','milliards','jours','Troupes entières','Limité par','Soins T7','Soins T5','Entraînement T7','Saisissez un nombre supérieur ou égal à zéro dans chaque champ.','Utilise les taux du tableur. Les valeurs initiales sont des exemples ; entrez vos réserves. Les troupes sont arrondies à l’entier inférieur.','Détails de la source','Résultat enregistré ; utilisez le calculateur ci-dessus pour modifier les entrées.','Source','Copier le lien','Lien copié','Aucune capture dans ce sujet.'],
    id:['Cari semua panduan','Pilih topik','Spreadsheet asli ↗','Tidak ditemukan. Coba kata lain.','Teks panduan dipertahankan dalam bahasa aslinya.','Catatan dan tabel','Tangkapan layar','Buka gambar penuh','Tutup','Memuat…','Panduan gagal dimuat. Coba lagi.','Coba lagi','Kalkulator penyembuhan dan pelatihan','Makanan','Kayu','Batu','Emas','Percepatan penyembuhan','Percepatan pelatihan','miliar','hari','Jumlah pasukan bulat','Dibatasi oleh','Penyembuhan T7','Penyembuhan T5','Pelatihan T7','Masukkan angka nol atau lebih di setiap kolom.','Menggunakan biaya dalam spreadsheet. Nilai awal adalah contoh; masukkan persediaan Anda. Jumlah pasukan dibulatkan ke bawah.','Detail sumber','Hasil tersimpan; gunakan kalkulator di atas untuk mengubah input.','Sumber','Salin tautan topik','Tautan disalin','Topik ini tidak memiliki gambar.']
  };
  let lang=localStorage.getItem('guildLanguage')||'en', index=[], active=null, request=0;
  const topicLabel=s=>s.id==='sheet_09'?t(12):s.name.trim();
  const cache=new Map(), calculatorValues=new Map();
  const t=i=>(words[lang]||words.en)[i];
  function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
  function col(n){let s='';for(;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;}
  function coords(a){const m=a.match(/([A-Z]+)(\d+)/);return [Number(m[2]),[...m[1]].reduce((n,c)=>n*26+c.charCodeAt(0)-64,0)];}
  function safeURL(value){try{const u=new URL(value,location.href);return ['https:','http:','mailto:'].includes(u.protocol)?u.href:null;}catch{return null;}}
  function sourceLink(locationText){if(!locationText)return null;const m=locationText.match(/^'?(.+?)'?!(\$?[A-Z]+\$?\d+)$/);if(!m)return null;const s=index.find(x=>x.name===m[1].replace(/''/g,"'"));return s?'#guide='+s.id+'&cell='+m[2].replace(/\$/g,''):null;}
  function addressId(address){return 'guide-cell-'+address;}
  function renderTable(s){
    const wrap=el('div','library-table-scroll');wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label',t(5));
    const table=el('table','library-table'),caption=el('caption',null,t(4));table.append(caption);
    const maxRow=Math.max(...s.cells.map(c=>c.row)),maxCol=Math.max(...s.cells.map(c=>c.column),...s.merges.map(m=>coords(m.range.split(':').pop())[1]));
    const lookup=new Map(s.cells.map(c=>[c.address,c])),covered=new Set(),merges=new Map();
    for(const m of s.merges){const [r,c]=coords(m.anchor),[er,ec]=coords(m.range.split(':')[1]||m.anchor);merges.set(m.anchor,{rowspan:er-r+1,colspan:ec-c+1});for(let rr=r;rr<=er;rr++)for(let cc=c;cc<=ec;cc++)if(rr!==r||cc!==c)covered.add(col(cc)+rr);}
    const head=el('thead'),hr=el('tr');hr.append(el('th',null,''));for(let c=1;c<=maxCol;c++){const th=el('th',null,col(c));th.scope='col';hr.append(th);}head.append(hr);table.append(head);
    const body=el('tbody');
    for(let r=1;r<=maxRow;r++){
      // Empty rows are spacing in the source; omit them without renumbering.
      if(!s.cells.some(c=>c.row===r))continue;
      const tr=el('tr');const rh=el('th',null,String(r));rh.scope='row';tr.append(rh);
      for(let c=1;c<=maxCol;c++){
        const a=col(c)+r;if(covered.has(a))continue;
        const cell=lookup.get(a),td=el('td');td.id=addressId(a);const merge=merges.get(a);
        if(merge){td.colSpan=merge.colspan;td.rowSpan=Array.from({length:merge.rowspan},(_,i)=>r+i).filter(rr=>s.cells.some(x=>x.row===rr)).length||1;td.className='merged';}
        if(cell){
          const text=cell.displayed_value??(cell.value===null?'':String(cell.value));
          const href=sourceLink(cell.location)||(cell.link?safeURL(cell.link):null);
          if(href){const link=el('a',null,text);link.href=href;if(!href.startsWith('#')){link.target='_blank';link.rel='noopener noreferrer';}td.append(link);}else td.append(document.createTextNode(text));
          if(typeof cell.value==='number')td.classList.add('numeric');
          if(cell.formula||cell.note){const detail=el('details'),summary=el('summary',null,t(28));detail.append(summary);if(cell.formula){detail.append(el('code',null,cell.formula));detail.append(el('span',null,s.id==='sheet_09'?t(29):t(30)+': '+String(cell.value)));}if(cell.note)detail.append(el('p',null,cell.note.text));td.append(detail);}
        }
        tr.append(td);
      }
      body.append(tr);
    }
    table.append(body);wrap.append(table);return wrap;
  }
  function renderImages(s){
    const gallery=el('div','library-gallery');
    for(const im of s.images){const figure=el('figure'),a=el('a'),img=el('img');a.href=im.src;a.target='_blank';a.rel='noopener';img.src=im.src;img.loading='lazy';img.decoding='async';img.alt=im.label;a.setAttribute('aria-label',im.label+' — '+t(7));a.append(img);const caption=el('figcaption',null,im.label);caption.append(el('small',null,t(30)+': '+col(im.column)+im.row));figure.append(a,caption);gallery.append(figure);a.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey)return;event.preventDefault();showImage(im,a);});}
    return gallery;
  }
  function renderNotes(s){
    const notes=el('div','library-notes');
    const rows=[...new Set(s.cells.map(c=>c.row))];
    for(const r of rows){
      const cells=s.cells.filter(c=>c.row===r);const block=el('div','library-note');
      for(const c of cells){
        const text=c.displayed_value??String(c.value??'');const href=sourceLink(c.location)||(c.link?safeURL(c.link):null);
        const n=el(href?'a':'p',null,text);
        if(href){n.href=href;if(!href.startsWith('#')){n.target='_blank';n.rel='noopener noreferrer';}}
        block.append(n);
      }
      notes.append(block);
    }
    return notes;
  }
  function showImage(im,trigger){
    const dialog=el('dialog','library-lightbox'),header=el('header'),close=el('button','library-button',t(8));close.type='button';header.append(el('strong',null,im.label),close);const image=el('img');image.src=im.src;image.alt=im.label;const full=el('a',null,t(7));full.href=im.src;full.target='_blank';full.rel='noopener';dialog.append(header,image,full);document.body.append(dialog);close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{dialog.remove();trigger.focus();});dialog.showModal();
  }
  function renderCalculator(s){
    const box=el('section','library-calculator'),heading=el('h3',null,t(12));box.append(heading,el('p','library-source',t(27)));
    const fields=el('div','library-calc-inputs'),inputs=[],map=new Map(s.cells.map(c=>[c.address,c.value]));
    for(const [i,a] of ['C6','C7','C8','C9','C12','C17'].entries()){
      const label=el('label'),input=el('input');input.type='number';input.min='0';input.step='any';input.inputMode='decimal';input.required=true;input.id='calc-'+a;input.value=calculatorValues.get(a)??String(map.get(a));label.append(el('span',null,t(i+13)+' ('+t(i<4?19:20)+')'),input);fields.append(label);inputs.push(input);input.addEventListener('input',()=>{calculatorValues.set(a,input.value);update();});
    }
    const output=el('div','library-calc-results');output.setAttribute('aria-live','polite');const error=el('p','library-invalid');error.setAttribute('role','status');box.append(fields,error,output);
    function update(){
      output.replaceChildren();const values=inputs.map(n=>n.value.trim()===''?NaN:Number(n.value));const valid=values.every(n=>Number.isFinite(n)&&n>=0);inputs.forEach((n,i)=>n.setAttribute('aria-invalid',String(!Number.isFinite(values[i])||values[i]<0)));error.textContent=valid?'':t(26);if(!valid)return;
      const format=n=>n.toLocaleString(lang,{maximumFractionDigits:2});
      for(const [j,row,batch,time] of [[0,7,1000,map.get('K7')],[1,20,1000,map.get('K20')],[2,33,4000,map.get('M33')]]){
        const costs=['G','H','I','J'].map(c=>map.get(c+row));const result=window.GULGuideCalculator.calculate(values.slice(0,4),values[j===2?5:4],costs,batch,time);
        if(!result){error.textContent=t(10);return;}
        const card=el('section','library-calc-result');card.dataset.calculatorResult=String(j);card.append(el('h4',null,t(23+j)),el('strong',null,format(result.troops)),el('span',null,t(21)),el('p',null,t(22)+': '+result.bottlenecks.map(i=>t(i===4?(j===2?18:17):13+i)).join(', ')));
        const dl=el('dl');result.spent.forEach((n,i)=>dl.append(el('dt',null,t(13+i)),el('dd',null,format(n))));dl.append(el('dt',null,t(20)),el('dd',null,format(result.days)));card.append(dl);output.append(card);
      }
    }
    update();return box;
  }
  function draw(s){
    reader.replaceChildren();reader.setAttribute('aria-busy','false');const head=el('header','library-topic-head'),div=el('div'),title=el('h3',null,topicLabel(s));title.tabIndex=-1;title.id='library-active-title';div.append(title,el('p','library-source',t(4)));const copy=el('button','library-button',t(31));copy.type='button';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);copy.textContent=t(32);}catch{copy.textContent=location.href;}});head.append(div,copy);reader.append(head);
    if(s.id==='sheet_09')reader.append(renderCalculator(s));
    const prose=['sheet_01','sheet_02','sheet_03','sheet_10','sheet_12','sheet_20'].includes(s.id);
    const library=s.name.includes('Library');
    if(prose)reader.append(renderNotes(s));
    if(s.images.length&&(prose||library))reader.append(el('h4',null,t(6)+' · '+s.images.length),renderImages(s));
    if(prose||library){const detail=el('details','library-source-table');detail.append(el('summary',null,t(5)),renderTable(s));reader.append(detail);}
    else reader.append(el('h4',null,t(5)),renderTable(s));
    if(s.drawing_text.length)for(const text of s.drawing_text)reader.append(el('p',null,text));
    if(s.images.length&&!prose&&!library)reader.append(el('h4',null,t(6)+' · '+s.images.length),renderImages(s));
    const cell=new URLSearchParams(location.hash.slice(1)).get('cell');if(cell&&cell!=='A1'){const node=document.getElementById(addressId(cell));if(node){node.closest('.library-source-table')?.setAttribute('open','');node.classList.add('source-focus');}}
  }
  async function openTopic(id,focus=false){
    if(!index.some(s=>s.id===id))id=index[0]?.id;if(!id)return;const token=++request;topicSelect.value=id;reader.setAttribute('aria-busy','true');reader.replaceChildren(el('p',null,t(9)));
    try{let data=cache.get(id);if(!data){const response=await fetch('guide-library/'+id+'.json');if(!response.ok)throw Error('HTTP '+response.status);data=await response.json();cache.set(id,data);}if(token!==request)return;active=data;draw(data);if(focus){document.getElementById('guide-library').scrollIntoView({block:'start'});document.getElementById('library-active-title').focus({preventScroll:true});}reader.querySelector('.source-focus')?.scrollIntoView({block:'center'});}
    catch(e){if(token!==request)return;reader.setAttribute('aria-busy','false');reader.replaceChildren(el('p',null,t(10)));const retry=el('button','library-button',t(11));retry.addEventListener('click',()=>openTopic(id,focus));reader.append(retry);}
  }
  function query(){
    const term=search.value.trim().toLocaleLowerCase();results.replaceChildren();results.hidden=!term;
    const matches=index.filter(s=>(s.name+' '+s.text).toLocaleLowerCase().includes(term));
    status.textContent=term?(matches.length?matches.length+' / '+index.length:t(3)):index.length+' topics · '+t(4);
    for(const a of document.querySelectorAll('[data-guide-id]')){a.hidden=!!term&&!matches.some(s=>s.id===a.dataset.guideId);a.style.display=a.hidden?'none':'';}
    if(!term)return;
    for(const s of matches){const a=el('a','library-result',s.name);a.href='#guide='+s.id;const pos=s.text.toLocaleLowerCase().indexOf(term);const snippet=pos>=0?s.text.slice(Math.max(0,pos-45),pos+140):s.text.slice(0,140);a.append(el('span',null,snippet));results.append(a);}
  }
  function language(){
    const headings={en:'Find your next move',ru:'Найдите следующий шаг',vi:'Tìm bước đi tiếp theo',tr:'Sonraki hamleni bul',fr:'Trouvez votre prochaine action',id:'Temukan langkah berikutnya'};
    document.getElementById('library-title').textContent=headings[lang]||headings.en;
    for(const option of topicSelect.options)if(option.value==='sheet_09')option.textContent=t(12);
    document.querySelector('[data-library-copy="search"]').textContent=t(0);document.querySelector('[data-library-copy="topic"]').textContent=t(1);document.querySelector('[data-library-copy="original"]').textContent=t(2);search.placeholder=t(0);query();if(active)draw(active);
  }
  topicSelect.addEventListener('change',()=>{location.hash='guide='+topicSelect.value;});search.addEventListener('input',query);
  window.addEventListener('hashchange',()=>{const p=new URLSearchParams(location.hash.slice(1));if(p.has('guide'))openTopic(p.get('guide'),true);});
  document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#guide="]');if(a&&a.hash===location.hash){e.preventDefault();openTopic(new URLSearchParams(a.hash.slice(1)).get('guide'),true);}});
  window.addEventListener('guild-language-change',e=>{lang=e.detail.lang;language();});
  async function init(){try{const response=await fetch('guide-library/index.json');if(!response.ok)throw Error('index');index=await response.json();topicSelect.replaceChildren(...index.map(s=>{const o=el('option',null,s.name);o.value=s.id;return o;}));language();openTopic(new URLSearchParams(location.hash.slice(1)).get('guide')||'sheet_01');}catch{status.textContent=t(10);const retry=el('button','library-button',t(11));retry.addEventListener('click',init);reader.replaceChildren(retry);reader.setAttribute('aria-busy','false');}}
  init();
})();
