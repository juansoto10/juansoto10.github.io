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
/* const footer = document.querySelector('.footer'); */
const footerTextDiv = document.querySelector('.footer__text');
const page = document.querySelector('.page');
const contactButton = document.querySelector('.button-contact');
/* const projectsButton = document.querySelector('.button-projects'); */
const scrollUp = document.querySelector('#scroll-up');


// API
/* const API_URL = 'http://127.0.0.1:8000/'; */

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', openMobileMenu);
contactButton.addEventListener('click', redirectContact);
/* projectsButton.addEventListener('click', redirectProjects); */
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
const navMenu= document.getElementById('nav-menu');

document.addEventListener('mousedown', function(event) {
  closeMobileMenu(event);
});

document.addEventListener('touchstart', function(event) {
  closeMobileMenu(event);
});


function closeMobileMenu(event) {
  if (!navMenu.contains(event.target) && !closeMenu.contains(event.target)) {
    if (navLinks.classList.contains('switched')) {
      closeMenu.classList.add('inactive');
      openMenu.classList.remove('inactive');
      navLinks.classList.remove('switched');
      navLinks.classList.add('hide');
    }
  }
}

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
}

function redirectProjects() {
  window.location.href='#projects';
}



const projects = {
  countriesInfo: {
    name: 'Countries Info Website',
    image_url: '/assets/images/countries-info.png',
    tags: {
      JavaScript: '/assets/icons/javascript.svg',
      TailwindCSS: '/assets/icons/tailwind.png',
      HTML5: '/assets/icons/html5.svg'
    },
    project_url: 'https://countriesinfo-foryou.netlify.app'
  },
  TheMinefieldGame: {
    name: 'The Minefield Game',
    image_url: '/assets/images/the-minefield-game.png',
    tags: {
      JavaScript: '/assets/icons/javascript.svg',
      HTML5: '/assets/icons/html5.svg',
      CSS3: '/assets/icons/css3.svg'
    },
    project_url: 'https://theminefieldgame.netlify.app'
  },
  RockPaperScissorsGame: {
    name: 'Rock-Paper-Scissors Game',
    image_url: '/assets/images/rock-paper-scissors.png',
    tags: {
      JavaScript: '/assets/icons/javascript.svg',
      HTML5: '/assets/icons/html5.svg',
      CSS3: '/assets/icons/css3.svg'
    },
    project_url: 'https://rockpaperscissorsgame-js.netlify.app'
  }
}

Object.keys(projects).forEach(key => {
  console.log(`${key}: ${projects[key]['project_url']}`);
})

function renderProjects() {
  const projectsWall = document.querySelector('.sect-projects__wall')
  const toRender = [];
  
  Object.keys(projects).forEach(key => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-aos', 'fade-up');

    projectDiv.onclick = function() {
      window.open(projects[key]['project_url']);
    };
    
    const img = document.createElement('img');
    img.src = projects[key]['image_url'];
    img.alt = projects[key]['name'];
    img.loading = "lazy";

    // Project info
    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project__info');
    
    const projectTitle = document.createElement('h3');
    const projectTitleText = document.createTextNode(projects[key]['name']);
    projectTitle.classList.add('project__title')
    projectTitle.append(projectTitleText);
    
    const projectTools = document.createElement('p');
    projectTools.classList.add('project__tools');
    
    const projectTags = projects[key]['tags'];
    
    Object.keys(projectTags).forEach(tag => {
      const tagSpan = document.createElement('span');
      const tagName = tag
      
      const img = document.createElement('img');
      const imgSrc = projectTags[tag];
      img.src = imgSrc;
      img.alt = tagName;
      img.loading = "lazy";
      
      tagSpan.append(img);
      projectTools.append(tagSpan);
    })
    
    projectInfo.append(projectTitle, projectTools);
    
    // Add all the project information in the project div (<div class="project">)
    projectDiv.append(img, projectInfo);
    
    // Push each project into `toRender` array
    toRender.push(projectDiv);
  })
  
  projectsWall.append(...toRender);
  
}

renderProjects();


const ColombiaFunFacts = [
  `Aracataca is the city where one of the most universally known Colombians was born: Gabriel García Márquez. In 2006 there was a referendum to decide to change the name of Aracataca, becoming Aracataca-Macondo, the city where his great work “One Hundred Years of Solitude” takes place. The referendum failed since “only” 3,600 people voted (the minimum of 7,400 votes was not reached for the referendum to be legitimate) and Aracataca is still Aracataca.`,
  `Almost 12% of the Colombian territory is part of one of the 60 national parks that exist in the country.`,
  `Colombia is the only country in South America that has a coastline on both the Caribbean Sea and the Pacific Ocean.`,
  `The Sierra Nevada de Santa Marta, which is a National Park, is the highest coastal mountain range in the world.`,
  `One of the most beautiful places in Colombia is the Caño Cristales river, also called the "River of the five colors" is in the Serranía de la Macarena and between the months of July and November its bed changes color. Although it is primarily red, at times it appears yellow, green, blue, or black.`,
  `Colombia is the world's leading producer of emeralds. There are more than 150 mines from which emeralds of the best quality are extracted. The Colombian emerald is highly prized in the sector due to its deep brilliant green hue.`,
  `Medellín is the second largest city in Colombia. In 1991 it was known as the "murder capital of the world". Since then the city has changed a lot and is currently one of the most important cultural and economic centers in the country.`,
  `With an altitude of 2640 meters above sea level, Bogota is the third highest capital in the world. The Colombian city is only behind Quito (Ecuador) and Sucre (Bolivia).`,
  `One of the species that you can see in Colombia is the Inia geoffrensis better known as "pink dolphin" or "Amazon river dolphin". You can find it in the rivers of the Orinoco basin and it is characterized by its pink color. Although it is not in danger of extinction since it is not usually captured, the number of specimens has decreased along with the ideal conditions of its habitat and it is usually protected in the six South American countries in which it is present.`,
  `A part of Colombia is on the Pacific Ring of Fire. Countries above it are more susceptible to earthquakes and volcanic eruptions.`,
  `Colombia is a country of celebration. To the rhythm of cumbia or salsa, Colombians have plenty of reasons to celebrate. In fact, they have 18 holidays each year! Only India has more holidays than the South American country.`,
  `The official name of the country is Republic of Colombia. The name derives from the surname of the Genoese explorer Christopher Columbus, who arrived in America in 1492.`,
  `From 1831 to 1886 the Colombian territory had 4 different names: Republic of Nueva Granada, Granadina Confederation, United States of Colombia and finally Republic of Colombia, name that keeps today.`,
  `Normally when we talk about Colombia, it is normal to associate it with coffee. It is the third largest exporter of coffee in the world after Brazil and Vietnam. Colombia is responsible for 12% of total coffee production worldwide. Do you want more concrete data? Don’t worry! The country exports approximately 11 million bags of coffee each year. Undoubtedly, one of the most striking curiosities of Colombia.`,
  `Despite having so many national parks and incredible landscape beauty, Colombians live in crowded cities. In fact, 75 per cent of Colombians live in urban areas. This is a percentage above the global average that in 2010, according to the UN, stood at 51.3%. Bogota is one of the most populated cities in Latin America.`,
  `We all know that Spanish is spoken in Colombia. In fact, more than 99% of the population speaks Spanish. However, what is not so well known is that, according to the National Indigenous Organization of Colombia (ONIC), 70 languages are spoken in Colombia: Spanish and 69 indigenous languages.`,
  `Colombia is extremely ethnically diverse. That’s a consequence of the migrants who came to Colombia in the last 500 years. There is a very interesting mix of people descended from the natives, Spanish settlers, people who came forcibly from Africa as slaves and immigrants from the 20th century from Europe and the Middle East.`,
  ``,
]


function showFunFact() {
  const p = document.createElement('p');
  const text = document.createTextNode('');
  p.append(text);
  footerTextDiv.append(p);
}
/* function redirectAbout() { 
  window.location.href='https://';
} 
*/

/* const tags = []; */


/* const tagsImages = {
  HTML5: '/assets/icons/html5.svg',
  CSS3: '/assets/icons/css3.svg',
  JavaScript: '/assets/icons/javascript.svg',
  Python: '/assets/icons/python.svg',
  Django: '/assets/icons/django_icon.svg',
  PostgreSQL: '/assets/icons/postgresql-icon.svg',
  ReactJS: '/assets/icons/react.svg',
  TailwindCSS: '/assets/icons/tailwind.png'
} */


/* async function getTags() {
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
} */

/* getTags(); */
/* console.log('Mira tus tags');
console.log(tags);
 */

/* async function renderProjects() {
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
} */

/* renderProjects() */
