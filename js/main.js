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

// function toggleMobileMenu() {
//   mainMenu.classList.toggle('inactive');
//   pageInner.classList.toggle('inactive');
//   footer.classList.toggle('inactive')
//   console.log('click btn-op');
// }

function openMobileMenu() {
  openMenu.classList.toggle('inactive');
  console.log('click btn-op');
  page.classList.toggle('inactive');
  footer.classList.toggle('inactive');

  if (mainMenu.classList.contains('hide')) {
    mainMenu.classList.remove('hide');
    mainMenu.classList.toggle('switched')
    
  } else if (mainMenu.classList.contains('switched')) {
    mainMenu.classList.remove('switched');
    mainMenu.classList.add('hide');
  }
}

if (mainMenu.classList.contains('switched')) {
  sectHome.classList.toggle('inactive');
}

function redirectContact() {
  window.location.href='https://github.com/juansoto10';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='https://www.linkedin.com/in/juan-pablo-soto/';
  console.log('click projects');
}