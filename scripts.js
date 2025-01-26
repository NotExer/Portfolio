function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menus = document.querySelectorAll('.item, .item-show, .menu, .menu-show, .logo, .logo-show, .navbar, .navbar-show');
    const body = document.body;  // Obtener el body
  
    // Alterna la clase activa en el botón de menú
    hamburger.classList.toggle('active');
  
    // Alterna las clases de los elementos del menú con transición
    menus.forEach(menu => {
      ['item', 'menu', 'logo', 'navbar'].forEach(baseClass => {
        if (menu.classList.contains(baseClass)) {
          menu.classList.remove(baseClass);
          menu.classList.add(`${baseClass}-show`);
        } else if (menu.classList.contains(`${baseClass}-show`)) {
          menu.classList.remove(`${baseClass}-show`);
          menu.classList.add(baseClass);
        }
      });
    });
  
    // Bloquear o permitir el scroll en el body
    body.classList.toggle('no-scroll');
    
    // Aplicar transición de cierre al men
    menus.forEach(menu => {
      if (menu.classList.contains('item-show')) {
        menu.addEventListener('click', () => {
          // Cierra el menú al seleccionar un título
          closeMenu();
        });
      }
    });
  }
  
  // Cerrar el menú y restaurar clases con transición
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
  
  function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menus = document.querySelectorAll('.item, .item-show, .menu, .menu-show, .logo, .logo-show, .navbar, .navbar-show');
    const body = document.body;  
 
    menus.forEach(menu => {
      ['item', 'menu', 'logo', 'navbar'].forEach(baseClass => {
        if (menu.classList.contains(`${baseClass}-show`)) {
          menu.classList.remove(`${baseClass}-show`);

          setTimeout(() => {
            menu.classList.add(baseClass);
          }, 100); 
        }
      });
    });

    hamburger.classList.remove('active');
  
    body.classList.remove('no-scroll');
  }
  

  document.querySelector('.descarga_cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'documents/CV Samuel Gómez Restrepo.pdf'; 
    link.download = 'CV Samuel Gómez Restrepo.pdf'; 
    link.click();
  });





  function randomizePosition(light) {
    const container = document.getElementById('Home');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    function setRandomPosition() {
      // Genera posiciones aleatorias sin sobrepasar los límites de la pantalla
      const x = Math.random() * (containerWidth - light.offsetWidth);
      const y = Math.random() * (containerHeight - light.offsetHeight);

      light.style.transform = `translate(${x}px, ${y}px)`;
    }

    setRandomPosition(); // Coloca la primera luz aleatoriamente cuando se carga
    setInterval(setRandomPosition, 6000); // Reposiciona la luz aleatoriamente cada 6 segundos
  }

  // Aplicar la función a cada luz para que cada una tenga su propio movimiento aleatorio
  const lights = document.querySelectorAll('.light');
  lights.forEach(light => randomizePosition(light));



