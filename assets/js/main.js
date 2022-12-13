const openMenu = document.querySelector('.mbtn-op');
const closeMenu = document.querySelector('.mbtn-cl');
// Nav-bar
const navLinks = document.querySelector('.nav-links');
const optAbout = document.querySelector('.opt-about');
const optSkills = document.querySelector('.opt-skills');
const optProjects = document.querySelector('.opt-projects');
const optContact = document.querySelector('.opt-contact');
const sectHome = document.querySelector('.sect-home');
const footer = document.querySelector('.footer');
const page = document.querySelector('.page');
const contactButton = document.querySelector('.button-contact');
const projectsButton = document.querySelector('.button-projects');
const scrollUp = document.querySelector('#scroll-up');

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', openMobileMenu);
contactButton.addEventListener('click', redirectContact);
projectsButton.addEventListener('click', redirectProjects);
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
/* window.addEventListener('resize', displayMenu);
window.addEventListener('load', displayMenu); */

/* optAbout.addEventListener('click', redirectLink) */




function openMobileMenu() {
  openMenu.classList.toggle('inactive');
  /* page.classList.toggle('inactive');
  footer.classList.toggle('inactive'); */

  if (navLinks.classList.contains('hide')) {
    closeMenu.classList.remove('inactive');
    navLinks.classList.remove('hide');
    navLinks.classList.toggle('switched')
  } else if (navLinks.classList.contains('switched')) {
    closeMenu.classList.add('inactive');
    navLinks.classList.remove('switched');
    navLinks.classList.add('hide');
  }
}

function displayMenu() {
  console.log('resize or load')
  if (window.innerWidth >= 900) {
    navLinks.classList.remove('hide');
    openMenu.classList.add('inactive');
    closeMenu.classList.add('inactive');
    page.classList.remove('inactive');
    footer.classList.remove('inactive');
  } else if (window.innerWidth < 900 && navLinks.classList.contains('switched')) {
    navLinks.classList.remove('hide');
    closeMenu.classList.remove('inactive');
    page.classList.add('inactive');
    footer.classList.add('inactive');
  }  else {
    navLinks.classList.add('hide');
    openMenu.classList.remove('inactive');
    closeMenu.classList.remove('inactive');
    page.classList.remove('inactive');
    footer.classList.remove('inactive');
  }
}


function redirectContact() {
  window.location.href='#contact';
  // window.location.href='#contact';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='#projects';
  console.log('click projects');
}

/* function redirectAbout() { 
  window.location.href='https://';
} */