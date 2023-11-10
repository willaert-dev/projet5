const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// récupération et intégration corrspondant aux classes css des flêche 
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// mise en place de l'écoute au click et création de la fonction d'incrémentation et de décrémentation des flèches
arrow_left.addEventListener("click", function() {
  bulletSlider(-1)
});
arrow_right.addEventListener("click", function() {
  bulletSlider(1)

});


const bannerImage = document.querySelector(".banner-img");
bannerImage.src ="./assets/images/slideshow/" + slides[0].image;

const bannerText = document.querySelector("#banner P");
bannerText.innerHTML = slides[0].tagLine;

//récupération du nombre de bullet point création de la classe dots,
//  ajout de la classe dots dans le html.
const nb_points = slides.length;
console.log(nb_points)

let dots = document.querySelector(".dots");
for (let i = 0; i < nb_points; i++) {
  const point = document.createElement("div");
  dots.appendChild(point);
  point.classList.add("dot");
}
// sélection et récupération de la classe html dots et et ajout de la classe css, 
// pour la coloration du point au défilement.
tableau_point = document.querySelectorAll(".dot");
tableau_point[0].classList.add("dot_selected");

// rappel de la fonction d'incrémentation et décrementation, pour le déplacement des bullets point
// d'un point à un autre. 
function bulletSlider(sliderBullet) {
  let indice = 0;
  for (let index = 0; index < nb_points; index++) {
    compteur = tableau_point[index].classList;
    if (compteur.contains("dot_selected")) {
      indice = index ;
    };
  }
  console.log(indice);
  tableau_point[indice].classList.remove("dot_selected");

if (sliderBullet == 1) {
  if (indice==3) {
    indice=0; 
  } else { indice++};
}

if (sliderBullet == (-1)) {
  if (indice==0) {
    indice=3; 
  } else { indice--};
}

  tableau_point[indice].classList.add("dot_selected");

// récupération de la source des images et leur intégrations au slide 
//  gestion du défilement photos et textes correspondant.
  bannerImage.src = "./assets/images/slideshow/" + slides[indice].image;
  bannerText.innerHTML = slides[indice].tagLine; 
}