// ================================
// BURGER MENU — StepForge
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav a');

  function closeMenu() {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Toggle menu au clic sur le burger
  burgerMenu?.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Fermer au clic sur l'overlay
  navOverlay?.addEventListener('click', closeMenu);

  // Fermer au clic sur un lien (mobile uniquement)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 767) closeMenu();
    });
  });

  // Fermer au redimensionnement vers desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
  });

  // Marquer le lien actif selon la page courante
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});