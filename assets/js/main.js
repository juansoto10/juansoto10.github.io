const openMenu = document.querySelector('.mbtn-op');
const closeMenu = document.querySelector('.mbtn-cl');
const mainMenu = document.querySelector('.main-menu');
const sectHome = document.querySelector('.sect-home');
const footer = document.querySelector('footer');
const page = document.querySelector('.page');
const contactButton = document.querySelector('.button-contact');
const projectsButton = document.querySelector('.button-projects');

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', openMobileMenu);
contactButton.addEventListener('click', redirectContact);
projectsButton.addEventListener('click', redirectProjects);
window.addEventListener('resize', displayMenu);
window.addEventListener('load', displayMenu);

function openMobileMenu() {
  openMenu.classList.toggle('inactive');
  page.classList.toggle('inactive');
  footer.classList.toggle('inactive');

  if (mainMenu.classList.contains('hide')) {
    closeMenu.classList.remove('inactive');
    mainMenu.classList.remove('hide');
    mainMenu.classList.toggle('switched')
  } else if (mainMenu.classList.contains('switched')) {
    closeMenu.classList.add('inactive');
    mainMenu.classList.remove('switched');
    mainMenu.classList.add('hide');
  }
}

function displayMenu() {
  console.log('resize or load')
  if (window.innerWidth >= 900) {
    mainMenu.classList.remove('hide');
    openMenu.classList.add('inactive');
    closeMenu.classList.add('inactive');
    page.classList.remove('inactive');
    footer.classList.remove('inactive');
  } else if (window.innerWidth < 900 && mainMenu.classList.contains('switched')) {
    mainMenu.classList.remove('hide');
    closeMenu.classList.remove('inactive');
    page.classList.add('inactive');
    footer.classList.add('inactive');
  }  else {
    mainMenu.classList.add('hide');
    openMenu.classList.remove('inactive');
    closeMenu.classList.remove('inactive');
    page.classList.remove('inactive');
    footer.classList.remove('inactive');
  }
}


function redirectContact() {
  window.location.href='https://github.com/juansoto10';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='https://www.linkedin.com/in/juan-pablo-soto/';
  console.log('click projects');
}