// app.js — scripts propios del portafolio

// 1) Ancla suave con compensación si el header fuese fixed (ahora no lo es, pero queda listo)
function scrollToHash(hash) {
  try {
    const el = document.querySelector(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 0; // ajustar offset si pones header fixed
    window.scrollTo({ top: y, behavior: 'smooth' });
  } catch (e) { /* noop */ }
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href.length > 1) {
    e.preventDefault();
    scrollToHash(href);
  }
});

// 2) Consola para ver que el JS carga correctamente
console.log('app.js cargado ✅');
