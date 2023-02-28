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
  theMinefieldGame: {
    name: 'The Minefield Game',
    image_url: '/assets/images/the-minefield-game.png',
    tags: {
      JavaScript: '/assets/icons/javascript.svg',
      HTML5: '/assets/icons/html5.svg',
      CSS3: '/assets/icons/css3.svg'
    },
    project_url: 'https://theminefieldgame.netlify.app'
  },
  rockPaperScissorsGame: {
    name: 'Rock-Paper-Scissors Game',
    image_url: '/assets/images/rock-paper-scissors.png',
    tags: {
      JavaScript: '/assets/icons/javascript.svg',
      HTML5: '/assets/icons/html5.svg',
      CSS3: '/assets/icons/css3.svg'
    },
    project_url: 'https://rockpaperscissorsgame-js.netlify.app'
  },
  batabitLandingPage: {
    name: 'Batabit Landing Page Layout',
    image_url: '/assets/images/batabit-landing-page.png',
    tags: {
      HTML5: '/assets/icons/html5.svg',
      CSS3: '/assets/icons/css3.svg'
    },
    project_url: 'https://batabit-landing-page.netlify.app/'
  }
}


const colombiaFunFacts = [
  `Aracataca is the city where one of the most universally known Colombians was born: Gabriel García Márquez. In 2006 there was a referendum to decide to change the name of Aracataca, becoming Aracataca-Macondo, the city where his great work “One Hundred Years of Solitude” takes place. The referendum failed since “only” 3,600 people voted (the minimum of 7,400 votes was not reached for the referendum to be legitimate) and Aracataca is still Aracataca.`,
  `Almost 12% of the Colombian territory is part of one of the 60 national parks that exist in the country.`,
  `Colombia is the only country in South America that has a coastline on both the Caribbean Sea and the Pacific Ocean.`,
  `La Sierra Nevada de Santa Marta, which is a National Park, is the highest coastal mountain range in the world.`,
  `One of the most beautiful places in Colombia is the Caño Cristales river, also called the "River of the five colors" is in Serranía de la Macarena and between the months of July and November its bed changes color. Although it is primarily red, at times it appears yellow, green, blue, or black.`,
  `Colombia is the world's leading producer of emeralds. There are more than 150 mines from which emeralds of the best quality are extracted. The Colombian emerald is highly prized in the sector due to its deep brilliant green hue.`,
  `Medellin is the second largest city in Colombia. In 1991 it was known as the "murder capital of the world". Since then, the city has changed a lot and is currently one of the most important cultural and economic centers in the country.`,
  `With an altitude of 2640 meters above sea level, Bogota is the third highest capital in the world. The Colombian city is only behind Quito (Ecuador) and Sucre (Bolivia).`,
  `One of the species that you can see in Colombia is the Inia geoffrensis better known as "pink dolphin" or "Amazon river dolphin". You can find it in the rivers of the Orinoco basin and it is characterized by its pink color. Although it is not in danger of extinction since it is not usually captured, the number of specimens has decreased along with the ideal conditions of its habitat and it is usually protected in the six South American countries in which it is present.`,
  `A part of Colombia is on the Pacific Ring of Fire. Countries above it are more susceptible to earthquakes and volcanic eruptions.`,
  `Colombia is a country of celebration. To the rhythm of cumbia or salsa, Colombians have plenty of reasons to celebrate. In fact, they have 18 holidays each year! Only India has more holidays than the South American country.`,
  `The official name of Colombia is Republic of Colombia. The name derives from the surname of the Genoese explorer Christopher Columbus, who arrived in America in 1492.`,
  `From 1831 to 1886 the Colombian territory had 4 different names: Republic of Nueva Granada, Granadina Confederation, United States of Colombia and finally Republic of Colombia, name that keeps today.`,
  `Normally when we talk about Colombia, it is normal to associate it with coffee. It is the third largest exporter of coffee in the world after Brazil and Vietnam. Colombia is responsible for 12% of total coffee production worldwide. Do you want more concrete data? Don’t worry! The country exports approximately 11 million bags of coffee each year. Undoubtedly, one of the most striking curiosities of Colombia.`,
  `Despite having so many national parks and incredible landscape beauty, Colombians live in crowded cities. In fact, 75% of Colombians live in urban areas. This is a percentage above the global average that in 2010, according to the UN, stood at 51.3%. Bogota is one of the most populated cities in Latin America.`,
  `Spanish is spoken in Colombia. In fact, more than 99% of the population speaks Spanish. However, what is not so well known is that, according to the National Indigenous Organization of Colombia (ONIC), 70 languages are spoken in Colombia: Spanish and 69 indigenous languages.`,
  `Colombia is extremely ethnically diverse. That’s a consequence of the migrants who came to Colombia in the last 500 years. There is a very interesting mix of people descended from the natives, Spanish settlers, people who came forcibly from Africa as slaves and immigrants from the 20th century from Europe and the Middle East.`,
  `Colombia is the rainiest country in the world. It registers average rainfall of 3,240 mm of rain per year, according to data from the Food and Agriculture Organization of the United Nations (FAO). The rains occur mostly in the Pacific region, with the municipality of Lloró, in Chocó, being the rainiest place on earth, since it has an average rainfall of 13,300 mm of rain per year.`,
  `In Colombia, around 1,937 species of birds have been registered, which makes it the country with the greatest diversity of birds in the world. According to the Humboldt Institute, up to 1,546 bird species observed in 24 hours have been recorded.`,
  `After the Netherlands, Colombia is the second largest flower exporter in the world. The geographical location and the quality of its soils allow there to be more than 6,800 hectares destined to the cultivation of flowers, distributed mainly in the Savannah of Bogotá, Antioquia, and the central eastern region of the country. Floriculture has been generating more than 120,000 direct jobs a year for more than 40 years.`,
  `The Phyllobates terriblis is the most toxic frog in the world. This golden frog is found in the departments of Cauca and Valle del Cauca. It is also known as the dart frog, since the indigenous people of the Pacific used its toxin on the tip of the darts used for hunting.

  This species is in danger of extinction, due to the fact that its habitat is strongly threatened by activities such as illegal mining to extract gold from the Choco basins, deforestation and the expansion of illicit crops.`,
  `Colombia has the largest salsa festival in the world, known as "La Feria de Cali". The festival is held from 25 to 30 December each year and contains great shows of music, dance and art. There are always different types of music, but the most popular, of course, is the amazing Latin music.`,
  `Colombia has the largest flowers festival in the world in the city of Medellin. At the event there are flower shows and a parade of local flower growers who come together to share what they grow.`,
  `Colombia has more than 4,000 species of orchids. Also, 1,500 of them are only found there. So it's not uncommon for Colombia's national flower to be an orchid called Cattleya Trianae.`,
  `According to UN data, Colombia is the most biodiverse country in the world per square meter. There are those who say that God wanted to give Colombia a little bit of every aspect of nature.

  Well, he gave her three mountain ranges, four deserts, a tropical savannah, 42 rivers, four types of jungle, and access to the world's two largest oceans. There are 311 ecosystems there. And no other country has more moors or species of birds and orchids.`,
  `When a girl turns 15 in Colombia, it is traditional to celebrate a "quince" party for her. It is a time when a girl is celebrated as a woman. In Latin countries it is one of the most special days for any girl.`,
  `Colombia was a very prosperous country before the arrival of Christopher Columbus. In fact, there is evidence that indigenous peoples inhabited this territory more than 14,000 years ago. It is what is known as the pre-Columbian era.`,
  `The flag of Colombia has 3 stripes with three different colors: the yellow, wider than the others, represents the wealth of its land; the blue is the symbol of the two oceans that surround the Colombian coasts and the rivers; and the red stripe remembers the blood shed by the patriots to reach the so dreamed independence.`,
  `Leticia is a very peculiar city in the Amazon: it is located in a trifinio, where the borders of Colombia, Peru and Brazil converge. In fact, this area of the Amazon is known as "Tres Fronteras".`
]
