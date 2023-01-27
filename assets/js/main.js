// Menu buttons
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


// API
const API_URL = 'http://127.0.0.1:8000/';

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

// Resize and load events
window.addEventListener('resize', displayMenu);
window.addEventListener('load', displayMenu);

// Close menu
document.addEventListener('mouseup', function(event) {
  const navMenu= document.getElementById('nav-menu');
  if (!navMenu.contains(event.target) && !closeMenu.contains(event.target)) {
    if (navLinks.classList.contains('switched')) {
      closeMenu.classList.add('inactive');
      openMenu.classList.remove('inactive');
      navLinks.classList.remove('switched');
      navLinks.classList.add('hide');
    }
  }
});

// Scroll close
document.addEventListener('scrollend', (event) => {
  if (!closeMenu.classList.contains('inactive')) {
    closeMenu.classList.add('inactive');
    openMenu.classList.remove('inactive');
  }
});

/* const bodyTag = document.getElementsByTagName('body');
const navLinksId = document.getElementById('nav-menu'); */

/* document.addEventListener('click', e => {
  if (navLinks.classList.contains('switched')) {
    if (
      e.target != navLinks
      && !navLinks.contains(e.target)
      && e.target != openMenu
      && e.target != closeMenu
    ) {
      openMenu.classList.remove('inactive');
      closeMenu.classList.add('inactive');
      navLinks.classList.remove('switched');
      navLinks.classList.add('hide');
    }
  }
}) */

/* function clickedOrNot(e) {
  if (e.target !== navLinksId) {
    openMenu.classList.remove('inactive');
    closeMenu.classList.add('inactive');
    navLinks.classList.remove('switched');
    navLinks.classList.add('hide');

    /* bodyTag[0].removeEventListener('click', clickedOrNot, true);
  }
}

bodyTag.addEventListener('click', clickedOrNot);
 */

/* document.addEventListener('click', function(event) {
  const clickInside = navLinks.contains(event.target);

  if (navLinks.classList.contains('switched')) {
    if (!clickInside) {
      openMenu.classList.remove('inactive');
      closeMenu.classList.add('inactive');
      navLinks.classList.remove('switched');
      navLinks.classList.add('hide');
    }
  }
  
}); */

/* optAbout.addEventListener('click', redirectLink) */

function openMobileMenu() {
  openMenu.classList.toggle('inactive');

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
  if (window.innerWidth >= 1024) {
    navLinks.classList.remove('hide');
    openMenu.classList.add('inactive');
    closeMenu.classList.add('inactive');
  } else if (window.innerWidth < 1024) {
    navLinks.classList.add('hide');
    openMenu.classList.remove('inactive');

    if (navLinks.classList.contains('switched')) {
      navLinks.classList.remove('switched');
    }
  }
} 

function redirectContact() {
  window.location.href='#contact';
  console.log('click contact');
}

function redirectProjects() {
  window.location.href='#projects';
  console.log('click projects');
}


/* function hideMenu() {
  openMenu.classList.toggle('inactive');
  if (navLinks.classList.contains('switched')) {
    closeMenu.classList.add('inactive');
    navLinks.classList.remove('switched');
    navLinks.classList.add('hide');
  }
} */
/* function redirectAbout() { 
  window.location.href='https://';
} 
*/

// Fetching Projects info:

/* <div class="sect-projects__wall">
<div class="project" data-aos="fade-up">
  <img 
    src="./assets/images/the_mined_path_game.png" 
    alt=""
    loading="lazy"
  >
  <div class="project__info">
    <h3 class="project__title">The mined path game</h3>
    <p class="project__tools">
      <span>HTML</span> 
      <span>CSS</span> 
      <span>JavaScript</span>
    </p>
  </div>
</div> */

const tags = [];

const tagsImages = {
  'HTML5': 'assets/icons/html5.svg',
  'CSS3': 'assets/icons/css3.svg',
  'JavaScript': 'assets/icons/javascript.svg',
  'Python': 'assets/icons/python.svg',
  'Django': 'assets/icons/django_icon.svg',
  'PostgreSQL': 'assets/icons/postgresql-icon.svg',
  'ReactJS': 'assets/icons/react.svg',
}

async function getTags() {
  const res = await fetch(`${API_URL}/tags/`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Token d382377e5a32eb3df64d954a38aa3d9eb0544d20',
    }
  });
  const data = await res.json();
  
  console.log('Start tag fetch');
  console.log(res);
  console.log(data);
  console.log('End tag fetch');

  if (res.status !== 200) {
    console.error('An error has ocurred: ' + res.status);
  } else {
    console.log('Lista de tags')
    const tagsList = data.results;
    console.log(tagsList);
    tagsList.forEach(tag => {
      tags.push(tag);
    })
  }
}

/* getTags(); */
console.log('Mira tus tags');
console.log(tags);


async function renderProjects() {
  const res = await fetch(`${API_URL}/projects/`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Token d382377e5a32eb3df64d954a38aa3d9eb0544d20',
    }
  });

  const data = await res.json();
  
  console.log('Start Projects fetch');
  console.log(res);
  console.log(data);
  console.log(data.results);
  console.log('End Projects fetch');

  if (res.status !== 200) {
    console.error('An error has ocurred: ' + res.status);
  } else {
    const projectsWall = document.querySelector('.sect-projects__wall')
    const projectsList = data.results;
    const toRender = [];

    projectsList.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.setAttribute('data-aos', 'fade-up');

      const img = document.createElement('img');
      img.src = project.image_url;
      img.alt = project.project_name;
      img.loading = "lazy";

      // Project info
      const projectInfo = document.createElement('div');
      projectInfo.classList.add('project__info');

      const projectTitle = document.createElement('h3');
      const projectTitleText = document.createTextNode(project.project_name);
      projectTitle.classList.add('project__title')
      projectTitle.append(projectTitleText);

      const projectTools = document.createElement('p');
      projectTools.classList.add('project__tools');

      const projectTags = project.tags

      projectTags.forEach(tag => {
        const tagSpan = document.createElement('span');

        let tagName;
        
        tags.forEach(element => {
          if (tag === element.url) {
            tagName = element.tag_name;
          }
        })

        /* const spanText = document.createTextNode(tagName); */
        const img = document.createElement('img');
        const imgSrc = tagsImages[tagName];
        img.src = imgSrc;
        img.alt = tagName;
        img.loading = "lazy";

        tagSpan.append(img);

        projectTools.append(tagSpan);
      })

      projectInfo.append(projectTitle, projectTools);

      // Add all the project information in the project div (<div class="project">)
      projectDiv.append(img, projectInfo);

      url = 'https://michalsnik.github.io/aos/';
      projectDiv.onclick = function() {
        window.open(url);
      };

      // Push each project into `toRender` array
      toRender.push(projectDiv);
    })

    projectsWall.append(...toRender);
  }
}

/* renderProjects() */
