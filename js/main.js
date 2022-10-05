const openMenu = document.querySelector('.mbtn-op');
const closeMenu = document.querySelector('.mbtn-cl');
const mainMenu = document.querySelector('.main-menu');
const footer = document.querySelector('footer');
const pageInner = document.querySelector('.page-inner');
const contactButton = document.querySelector('.button-contact');
const projectsButton = document.querySelector('.button-projects');

openMenu.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);
contactButton.addEventListener('click', redirectContact);
projectsButton.addEventListener('click', redirectProjects);

function toggleMobileMenu() {
  mainMenu.classList.toggle('inactive');
  pageInner.classList.toggle('inactive');
  footer.classList.toggle('inactive')
  console.log('click btn-op');
}

function redirectContact() {
  window.location.href='https://github.com/juansoto10';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='https://www.linkedin.com/in/juan-pablo-soto/';
  console.log('click projects');
}