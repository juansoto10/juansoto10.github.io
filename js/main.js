const contactButton = document.querySelector('.button-contact');
const projectsButton = document.querySelector('.button-projects');

contactButton.addEventListener('click', redirectContact);
projectsButton.addEventListener('click', redirectProjects);

function redirectContact() {
  window.location.href='https://github.com/juansoto10';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='https://www.linkedin.com/in/juan-pablo-soto/';
  console.log('click projects');
}