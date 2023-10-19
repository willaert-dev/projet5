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

  arrow_left.addEventListener("click", console.log("gauche"));
  arrow_right.addEventListener("click", bulletRight);
  
  const nb_points = slides.length;
  console.log(nb_points);
  let dots = document.querySelector(".dots");
  for (let i = 0; i < nb_points; i++) {
      const point = document.createElement("div");
      dots.appendChild(point);
      point.classList.add("dot");
  }
  
  tableau_point = document.querySelectorAll(".dot");
  tableau_point[0].classList.add("dot_selected");
  
  function bulletRight() {
      indice = 0; 
   for (let index = 0; index < nb_points; index++) {
      compteur = tableau_point[index].classList;
   if (compteur.contains("dot_selected")) {
      indice = index;
   }
  
   tableau_point[indice].classList.remove("dot_selected")
   tableau_point[indice+1].classList.add("dot_selected")
  }
   }