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

  









// Seleccionar todos los enlaces con href que apuntan a un id
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtener el id del destino desde el href
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Obtener la posición superior del destino
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Llamar a la función de animación para desplazarse
      smoothScrollTo(targetPosition, 500); // 500ms de duración
    }
  });
});

// Función de desplazamiento suave
function smoothScrollTo(target, duration) {
  const startPosition = window.pageYOffset;
  const distance = target - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;

    // Calcular el tiempo transcurrido
    const timeElapsed = currentTime - startTime;

    // Aplicar una función de facilidad para suavizar el desplazamiento
    const ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);

    // Desplazar la ventana
    window.scrollTo(0, ease);

    // Continuar la animación si aún no ha terminado
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Función de facilidad (ease-in-out)
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}















let isScrolling = false;
let scrollSpeed = 0;
let friction = 0.05; // Controla la cantidad de fricción
let scrollDirection = 0; // Dirección del scroll
let targetPosition = 0; // La posición a la que queremos llegar

// Función que actualiza la posición de desplazamiento con fricción
function smoothScroll() {
  if (Math.abs(scrollSpeed) < 0.1) {
    isScrolling = false; // Detener cuando la velocidad es baja
    scrollSpeed = 0;
  }

  // Si estamos desplazándonos, actualizar la posición
  if (isScrolling) {
    // Aplicar la fricción
    scrollSpeed *= (1 - friction);

    // Desplazar la ventana según la velocidad
    window.scrollBy(0, scrollSpeed);

    // Llamar recursivamente para continuar el movimiento
    requestAnimationFrame(smoothScroll);
  }
}










window.addEventListener('wheel', function(e) {
  if (!isScrolling) {
    isScrolling = true;
    smoothScroll();
  }

  scrollDirection = e.deltaY > 0 ? 1 : -1;
  scrollSpeed += scrollDirection * 10;
  e.preventDefault();
}, { passive: false }); // Desactivar passive aquí












const baseText = "I am a full stack dev but also a "; // Parte fija del texto
const textArray = [
  "QA tester",
  "gamer",
  "pro",
  "genius"
];

let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Velocidad de escritura
const deletingSpeed = 50; // Velocidad de borrado
const pauseBetweenChanges = 3000; // Pausa de 4 segundos entre cambios de palabra

const infoElement = document.querySelector('.info');

// Función que maneja el efecto de escritura y borrado
function typeAndDelete() {
  // Solo escribimos y borramos la parte dinámica (textArray)
  const currentText = baseText + textArray[currentTextIndex]; // Combina el texto fijo con la palabra actual

  if (isDeleting) {
    // Borrar el texto dinámico
    if (currentLetterIndex > baseText.length) { // Solo borra después del baseText
      currentLetterIndex--;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      // Cambiar de frase
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
      // Pausa antes de empezar a escribir de nuevo
      setTimeout(typeAndDelete, pauseBetweenChanges); // Pausa entre frases
      return; // Termina la iteración actual
    }
  } else {
    // Escribir el texto dinámico
    if (currentLetterIndex < currentText.length) {
      currentLetterIndex++;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      // Cuando termina de escribir, empezar a borrar después de una pausa
      setTimeout(() => {
        isDeleting = true;
        typeAndDelete();
      }, pauseBetweenChanges); // Pausa antes de borrar
      return;
    }
  }

  // Continuar la animación
  setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
}

// Iniciar el efecto de escritura y borrado
typeAndDelete();





























document.addEventListener("DOMContentLoaded", function () {
  // Crear un IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Cuando el elemento entra en la vista, añadir la clase para activar la animación
              entry.target.classList.add('bounceInUp');
              // Dejar de observar el elemento después de que la animación se haya disparado
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 }); // 0.5 significa que el 50% del elemento debe estar en la vista para activarse

  // Observar todos los elementos con la clase .animate-item
  const elements = document.querySelectorAll('.animate-item');
  elements.forEach(element => observer.observe(element));
});
