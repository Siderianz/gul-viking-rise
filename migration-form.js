(() => {
  const form=document.querySelector('[data-migration-form]'); if(!form) return;
  const status=form.querySelector('[role="status"]');
  const messages={
    en:'Applications are unavailable here right now. Open Discord below and contact leadership.',
    ru:'Приём заявок сейчас недоступен. Откройте Discord ниже и свяжитесь с лидерами.',
    vi:'Hiện chưa thể gửi đơn ở đây. Mở Discord bên dưới để liên hệ lãnh đạo.',
    tr:'Başvurular şu anda burada kullanılamıyor. Aşağıdan Discord’u açıp yönetime ulaşın.',
    fr:'Les candidatures sont indisponibles ici pour le moment. Ouvrez Discord ci-dessous et contactez les dirigeants.',
    id:'Pendaftaran di sini belum tersedia. Buka Discord di bawah dan hubungi pemimpin.'
  };
  form.addEventListener('submit',event=>{
    const endpoint=window.GUL_MIGRATION_ENDPOINT || '';
    if(!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
      event.preventDefault(); status.textContent=messages[document.documentElement.lang] || messages.en; return;
    }
    if(!navigator.onLine) {
      event.preventDefault(); status.textContent=messages[document.documentElement.lang] || messages.en; return;
    }
    form.action=endpoint; form.target='_self';
  });
})();
