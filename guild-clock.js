(() => {
  const main = document.querySelector('main');
  if (!main || document.querySelector('.guild-clock')) return;

  const labels = {
    en: { title: 'Current date and time', utc: 'UTC', local: 'Your time' },
    ru: { title: 'Текущая дата и время', utc: 'UTC', local: 'Ваше время' },
    vi: { title: 'Ngày và giờ hiện tại', utc: 'UTC', local: 'Giờ của bạn' },
    tr: { title: 'Güncel tarih ve saat', utc: 'UTC', local: 'Yerel saatiniz' },
    fr: { title: 'Date et heure actuelles', utc: 'UTC', local: 'Votre heure' },
    id: { title: 'Tanggal dan waktu saat ini', utc: 'UTC', local: 'Waktu Anda' }
  };

  const clock = document.createElement('aside');
  clock.className = 'guild-clock';
  clock.innerHTML = `
    <div class="guild-clock-inner">
      <div class="guild-clock-face">
        <span class="guild-clock-label" data-clock-label="utc">UTC</span>
        <time class="guild-clock-value" data-clock-value="utc"></time>
      </div>
      <div class="guild-clock-face">
        <span class="guild-clock-label" data-clock-label="local">Your time</span>
        <time class="guild-clock-value" data-clock-value="local"></time>
        <span class="guild-clock-zone" data-clock-zone></span>
      </div>
    </div>`;
  main.insertAdjacentElement('afterend', clock);

  const utcValue = clock.querySelector('[data-clock-value="utc"]');
  const localValue = clock.querySelector('[data-clock-value="local"]');
  const zoneValue = clock.querySelector('[data-clock-zone]');
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  zoneValue.textContent = localZone.replaceAll('_', ' ');

  function updateLabels() {
    const lang = document.documentElement.lang.toLowerCase().split('-')[0];
    const copy = labels[lang] || labels.en;
    clock.setAttribute('aria-label', copy.title);
    clock.querySelector('[data-clock-label="utc"]').textContent = copy.utc;
    clock.querySelector('[data-clock-label="local"]').textContent = copy.local;
  }

  function updateTime() {
    const now = new Date();
    const lang = document.documentElement.lang || navigator.language || 'en';
    const format = (timeZone) => new Intl.DateTimeFormat(lang, {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hourCycle: 'h23', ...(timeZone ? { timeZone } : {})
    }).format(now);
    utcValue.textContent = format('UTC');
    localValue.textContent = format();
    utcValue.dateTime = now.toISOString();
    localValue.dateTime = now.toISOString();
  }

  function refresh() {
    updateLabels();
    updateTime();
  }

  refresh();
  window.addEventListener('guild-language-change', refresh);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refresh();
  });
  window.setInterval(updateTime, 1000);
})();
