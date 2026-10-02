(() => {
  const form = document.querySelector('[data-migration-form]');
  if (!form) return;
  const status = form.querySelector('[role="status"]');
  form.addEventListener('submit', (event) => {
    const endpoint = window.GUL_MIGRATION_ENDPOINT || '';
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
      event.preventDefault();
      status.textContent = document.documentElement.lang === 'ru'
        ? 'Приём заявок ещё не подключён. Свяжитесь с R4 через Discord.'
        : 'Applications are not connected yet. Contact an R4 through Discord for now.';
      return;
    }
    form.action = endpoint;
    // Google displays confirmation only after the application is saved.
    form.target = '_self';
  });
})();

