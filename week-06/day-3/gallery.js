'use strict'
const images = [
  {
    src: 'IMG_2578.jpg',
    title: 'Gullfoss',
    description: 'Gullfoss (translated to ‘Golden Falls’) is one of Iceland’s most iconic and beloved waterfalls, found in the Hvítá river canyon in south-west Iceland.'
  },
  {
    src: 'IMG_3138.jpg',
    title: 'Öxarárfoss',
    description: 'Öxarárfoss is a waterfall in Þingvellir National Park, Iceland. It flows from the river Öxará over the Almannagjá. The pool at the base of the waterfall is filled with rocks and is often extremely icy during winter.The waterfall is one of the main attractions of Þingvellir National Park and there is a path from the nearby car park leading up to it.'
  },
  {
    src: 'IMG_3628.jpg',
    title: 'Pelican',
    description: 'Pelicans are a genus of large water birds that make up the family Pelecanidae. They are characterised by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing. They have predominantly pale plumage, the exceptions being the brown and Peruvian pelicans. '
  },
  {
    src: 'IMG_3632.jpg',
    title: 'Key West',
    description: `Key West, a U.S. island city, is part of the Florida Keys archipelago. It's also Florida's southernmost point, lying roughly 90 miles north of Cuba.`
  },
  {
    src: 'IMG_3669.jpg',
    title: 'Green iguana',
    description: 'The green iguana (Iguana iguana), also known as the American iguana, is a large, arboreal, mostly herbivorous species of lizard of the genus Iguana. It is native to Central, South America, and the Caribbean. Usually, this animal is simply called the iguana. The green iguana ranges over a large geographic area, from southern Brazil and Paraguay as far north as Mexico and the Caribbean islands. '
  },
  {
    src: 'IMG_4064.jpg',
    title: 'Westfjords',
    description: 'The Westfjords or West Fjords is a large peninsula in northwestern Iceland and an administrative district. It lies on the Denmark Strait, facing the east coast of Greenland.'
  },
  {
    src: 'IMG_4852.jpg',
    title: 'Iceland Southern Coast',
    description: ''
  },
  {
    src: 'IMG_5143.jpg',
    title: 'Víti',
    description: 'Krafla is a caldera of about 10 km in diameter with a 90 km long fissure zone, in the north of Iceland in the Mývatn region. Its highest peak reaches up to 818 m and it is 2 km in depth. Krafla includes the crater Víti, one of two well-known craters by this name in Iceland (the other is in Askja). The Icelandic word "víti" means "hell". In former times, people often believed hell to be under volcanoes. Víti has a green lake inside of it.'
  },
  {
    src: 'IMG_6108.jpg',
    title: 'Eyjafjörður',
    description: `Eyjafjörður is one of the longest fjords in Iceland. It is located in the central north of the country, situated by the fjord is the country's fourth most populous municipality, Akureyri.`
  },
  {
    src: 'IMG_9470.jpg',
    title: 'Svínafellsjökull',
    description: `Svínafellsjökull, the ‘pig mountain glacier’ is approx. is 1,000 years old. It is known as one of the bluest glaciers in Iceland. Sitting in a dreamy landscape, with its deep, impressive crevasses and otherworldly formations Svínafellsjökull has been a shooting location for many world famous Hollywood movies and TV shows like Batman begins, Interstellar and The Game of Thrones. It is also known as a favored spot among glacier hikers of all levels.`
  },
  {
    src: 'IMG_9500.jpg',
    title: 'Jökulsárlón',
    description: `Jökulsárlón is a glacial lagoon, bordering Vatnajökull National Park in southeastern Iceland. Its still, blue waters are dotted with icebergs from the surrounding Breiðamerkurjökull Glacier, part of larger Vatnajökull Glacier. The Glacier Lagoon flows through a short waterway into the Atlantic Ocean, leaving chunks of ice on a black sand beach. In winter, the fish-filled lagoon hosts hundreds of seals.`
  }
];

const thumbnailImages = document.querySelector('div #thumbnails');
images.forEach(e => {
  const smallImages = document.createElement('img');
  smallImages.setAttribute('src', e.src);
  smallImages.setAttribute('title', e.title);
  smallImages.setAttribute('description', e.description);
  thumbnailImages.appendChild(smallImages)
});

const mainImage = document.querySelector('#mainimage');
const title = document.querySelector('h1');
const description = document.querySelector('p');

images.forEach(e => {
  console.log(e);
  mainImage.setAttribute('src', e.src);
  title.innerText = e.title;
  description.innerText = e.description;

});

const thumbnails = document.querySelectorAll('img');
thumbnails.forEach(e => {
  e.addEventListener('click', e => {
    console.log(e)
    mainImage.setAttribute('src', e.target.src);
    title.innerText = e.target.title;
    description.innerText = e.target.attributes[2].textContent;
  })
});

let selectedPhotoIndex = 0;

const nextPhoto = () => {
  if (selectedPhotoIndex !== images.length - 1) {
    selectedPhotoIndex++;
    mainImage.setAttribute('src', images[selectedPhotoIndex].src)
    title.innerText = images[selectedPhotoIndex].title;
    description.innerText = images[selectedPhotoIndex].description;
  } else if (selectedPhotoIndex === 0) {
    selectedPhotoIndex = 0;
    mainImage.setAttribute('src', images[selectedPhotoIndex].src);
    title.innerText = images[selectedPhotoIndex].title;
    description.innerText = images[selectedPhotoIndex].description;
  }
};
const rightButton = document.querySelector('#right');
rightButton.addEventListener('click', nextPhoto);

const prevPhoto = () => {
  if (selectedPhotoIndex >= 1) {
    selectedPhotoIndex--;
    mainImage.setAttribute('src', images[selectedPhotoIndex].src);
    title.innerText = images[selectedPhotoIndex].title;
    description.innerText = images[selectedPhotoIndex].description;
  } else if (selectedPhotoIndex === 0) {
    selectedPhotoIndex = 0;
    mainImage.setAttribute('src', images[selectedPhotoIndex].src);
    title.innerText = images[selectedPhotoIndex].title;
    description.innerText = images[selectedPhotoIndex].description;
  }
};
const leftButton = document.querySelector('#left');
leftButton.addEventListener('click', prevPhoto)