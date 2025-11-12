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


// === Modal "Formación adicional" ===
(function () {
  const btnOpen = document.getElementById('btn-ver-mas-formacion');
  const modal   = document.getElementById('modal-formacion');
  const btnClose = document.getElementById('modal-formacion-close');

  if (!btnOpen || !modal || !btnClose) return;

  const openModal = () => {
    modal.classList.remove('hidden');
    // bloquear scroll en el body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    // foco al botón cerrar para accesibilidad
    btnClose.focus();
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    btnOpen.focus();
  };

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);

  // Cerrar con clic fuera del contenido (en el fondo oscuro)
  modal.addEventListener('click', (e) => {
    const content = modal.querySelector('.card');
    if (content && !content.contains(e.target)) closeModal();
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
      closeModal();
    }
  });
})();


// === Menú móvil (navbar) ===
(function () {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const setExpanded = (val) => btn.setAttribute('aria-expanded', String(val));

  const openMenu = () => {
    menu.classList.remove('hidden');
    setExpanded(true);
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    setExpanded(false);
  };

  // Toggle al pulsar el botón
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Cerrar al navegar (click en cualquier link del menú móvil)
  menu.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'A') closeMenu();
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();
