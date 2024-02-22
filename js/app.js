document.querySelector('.navbar-end').addEventListener('click', function() {
    const menu = document.getElementById('menu-lateral');
    menu.classList.toggle('menu-opened');
  
    const mainNavigation = document.querySelector('.main-navigation');
    mainNavigation.classList.toggle('hidden'); // Use 'hidden' class for better accessibility
  });
  
  document.querySelector('.close-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu-lateral');
    menu.classList.remove('menu-opened');
  
    const mainNavigation = document.querySelector('.main-navigation');
    mainNavigation.classList.remove('hidden');
  });
  
  // Cierra el menú al hacer clic fuera
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('menu-lateral');
    if (!menu.contains(e.target) && !e.target.classList.contains('burger-menu')) {
      menu.classList.remove('menu-opened');
  
      const mainNavigation = document.querySelector('.main-navigation');
      mainNavigation.classList.remove('hidden');
    }
  });
  