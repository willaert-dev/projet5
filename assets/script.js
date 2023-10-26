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
// intégration des flêches sur bas du slider avec l'écoute au click sur chacune des flêches
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", bulletSliderLeft);
arrow_right.addEventListener("click", bulletSliderRight);

const nb_points = slides.length;
console.log(nb_points)

// récupération et intégration des images correspondant aux textes  dans le slide 
const bannerImage = document.querySelector(".banner-img");
bannerImage.src ="./assets/images/slideshow/" + slides[0].image;


const bannerParaf = document.querySelector("#banner P");
bannerText.innerHTML = slides[0].tagLine;

// créations des bullets point et de leur intégration avec le changement couleur en fonction du défilement
let dots = document.querySelector(".dots");
for (let i = 0; i < nb_points; i++) {
  const point = document.createElement("div");
  dots.appendChild(point);
  point.classList.add("dot");
}

tableau_point = document.querySelectorAll(".dot");
tableau_point[0].classList.add("dot_selected");

// création 
function bulletSliderRight() {
  let indice = 0;
  for (let index = 0; index < nb_points; index++) {
    compteur = tableau_point[index].classList;
    if (compteur.contains("dot_selected")) {
      indice = index ;
    };
  }
  console.log(indice);  
  tableau_point[indice].classList.remove("dot_selected");
  if (indice==3) { indice=0; }   else { indice++};
  tableau_point[indice].classList.add("dot_selected");

  bannerImage.src = "./assets/images/slideshow/" + slides[indice].image;
  bannerText.innerHTML = slides[indice].tagLine; 
}

function bulletSliderLeft() {
  let indice = 0;
  for (let index = 0; index < nb_points; index++) {
    compteur = tableau_point[index].classList;
    if (compteur.contains("dot_selected")) {
      indice=index;
    };
  }
  console.log(indice);  
  tableau_point[indice].classList.remove("dot_selected");
  if (indice==0) { indice=3; }   else { indice--};
  tableau_point[indice].classList.add("dot_selected");

  bannerImage.src = "./assets/images/slideshow/" + slides[indice].image;
  bannerText.innerHTML = slides[indice].tagLine;
}