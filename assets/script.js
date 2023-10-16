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
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

arrow_left.addEventListener("click", function () {
  moveSlider(-1);
});
arrow_right.addEventListener("click", function () {
  moveSlider(1);
});
function moveSlider(slideMove) {
  console.log(slideMove);
}
const nb_points = slides.length;
console.log(nb_points);

let dots = document.querySelector(".dots");

for (let i = 0; i < nb_points; i++) {
  const point = document.createElement("div");  
  point.classList.add("dot");
  dots.appendChild(point);
}

tableau_point = document.querySelectorAll(".dot");
tableau_point[0].classList.add("dot_selected");

function bulletRight() {
  indice = 0;
  for (let index = 0; index < nb_points; index++) {
    nomClass = tableau_point[index].classList;
    if (nomClass.contains("dot_selected")) {
      indice = index;
    }
  }
}

function bulletLeftRight() {
	indice = 1;
  for (let index = 0; index < nb_points; index++) {
    nomClass = tableau_point[index].classlist;
    if (nomClass.contains("dot_selected")) {
      index = index;
    }
  }
}
function getIndexSlider(){
	let indexSlider;

	return indexSlider;
}
