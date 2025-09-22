function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menus = document.querySelectorAll('.item, .item-show, .menu, .menu-show, .logo, .logo-show, .navbar, .navbar-show');
    const body = document.body;  
    
    hamburger.classList.toggle('active');
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
    body.classList.toggle('no-scroll');

    menus.forEach(menu => {
      if (menu.classList.contains('item-show')) {
        menu.addEventListener('click', () => {
          closeMenu();
        });
      }
    });
  }

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(targetPosition, 500);
    }
  });
});

function smoothScrollTo(target, duration) {
  const startPosition = window.pageYOffset;
  const distance = target - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, ease);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

let isScrolling = false;
let scrollSpeed = 0;
let friction = 0.05;
let scrollDirection = 0; 
let targetPosition = 0;

function smoothScroll() {
  if (Math.abs(scrollSpeed) < 0.1) {
    isScrolling = false; 
    scrollSpeed = 0;
  }
  if (isScrolling) {
    scrollSpeed *= (1 - friction);
    window.scrollBy(0, scrollSpeed);
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
}, { passive: false }); 

const baseText = "I am a full stack dev but also a ";
const textArray = [
  "QA tester",
  "Gamer",
  "Pro",
  "Genius"
];

let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 100; 
const deletingSpeed = 40; 
const pauseBetweenChanges = 1000; 
const infoElement = document.querySelector('.info');

function typeAndDelete() {
  const currentText = baseText + textArray[currentTextIndex];

  if (isDeleting) {

    if (currentLetterIndex > baseText.length) { 
      currentLetterIndex--;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      // Cambiar de frase
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % textArray.length;
      setTimeout(typeAndDelete, pauseBetweenChanges);
      return;
    }
  } else {
    if (currentLetterIndex < currentText.length) {
      currentLetterIndex++;
      infoElement.textContent = currentText.substring(0, currentLetterIndex);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeAndDelete();
      }, pauseBetweenChanges); 
      return;
    }
  }
  setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
}
typeAndDelete();


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('bounceInUp');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });
  const elements = document.querySelectorAll('.animate-item');
  elements.forEach(element => observer.observe(element));
});


const proyectCards = document.querySelectorAll('.media-container');
proyectCards.forEach(container => {
  const video = container.querySelector('.proyect_video');
  container.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });
  container.addEventListener('mouseleave', () => {
    video.pause();
  });
});

function toggleProjects() {
  const extraProyects = document.getElementById('extraProyects');
  const button = document.getElementById('showMoreBtn');

  if (extraProyects.classList.contains('expanded')) {
    extraProyects.classList.remove('expanded');
    button.textContent = 'Mostrar más';
  } else {
    extraProyects.classList.add('expanded');
    button.textContent = 'Mostrar menos';
  }
}

const glow = document.querySelector('.glow');
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact_form");
  const generalErrorMessage = form.querySelector(".general-error-message");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputs = form.querySelectorAll('.input_field');
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.classList.add("error");
        formValid = false;
      } else {
        if (input.getAttribute('name') === 'email') {
          if (!emailPattern.test(input.value)) {
            input.classList.add("error");
            formValid = false;
          } else {
            input.classList.remove("error");
          }
        } else {
          input.classList.remove("error");
        }
      }
    });
    if (!formValid) {
      generalErrorMessage.textContent = "Por favor, completa todos los campos correctamente.";
      generalErrorMessage.style.display = "block";
    } else {
      generalErrorMessage.style.display = "none";
      form.submit();
    }
  });
});




  document.querySelector('.descarga_cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = "{{ url_for('static', filename='documents/CV_Samuel_Gomez_Restrepo.pdf') }}";
    link.download = "CV_Samuel_Gomez_Restrepo.pdf";
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);  
  });