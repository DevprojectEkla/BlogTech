import theme from "./color_theme.js";

var banniere = document.querySelector("#img_banniere")
var fond_div = document.querySelector("#fond_div")
var section = document.getElementById('intro');
var badge = document.querySelector('.badge');
// var title = document.querySelectorAll('h2')
// var subtitle = document.querySelectorAll('h5')
theme.add_class_to_element_list(theme.h2_list,['bg',theme.text_color1,
                                              'bg-primary','rounded','mt-10'])
theme.add_class_to_element_list(theme.h4_list,[theme.text_color1, 'bg','bg-primary'])
theme.add_class_to_element_list(theme.h5_list,[theme.text_color1, 'bg','bg-primary'])
theme.add_class_to_element_list(theme.img_list,theme.class_list_img)



// console.log(section);
// console.log(badge);
// console.log(section.children.length);
// console.log(section.children);
//for (i = 0; i<section.children.length; i++)
let container;
container = section.children

let prefix;
prefix = '../'
const IMG_BANDE_FILE = prefix + theme.IMG_BANDE_FILE
console.log(IMG_BANDE_FILE)
banniere.src = '../' + theme.IMG_BANNIERE 
fond_div.style.backgroundImage = "url('../static/img/bande0.svg')"
fond_div.style.backgroundSize = "cover";
fond_div.style.backgroundPosition = "center";
fond_div.style.Height = "auto";
fond_div.style.minHeight = "100vh";

  


section.classList.replace("invisible","visible")
section.style.backgroundImage = "url('../static/img/shop.jpeg')"
section.style.backgroundSize = "cover";
section.style.backgroundPosition = "center";
section.style.Height = "auto";
section.style.minHeight = "100vh";

// === ANIMATION DU BOUTON " FAITES DEFILER" ====

const body = document.body;
const docElem = document.documentElement;
  

/**
* ======================= ANIMATION DU PREMIER ARTICLE  ========================
* NB: l'animation est différente à cause de la position des triggers Start et end
* ===============================================================================
*/
var scrollAnimation = TweenMax.fromTo
  (
    container[0],
      {
        opacity: 0,
        x: -300,
      },
      {
        x: 0,
        scrollTrigger:
        {
          trigger: container[0],
          container: "#main_div",
          start: "top-=160px 10%",
          end: "100px 10%",   
        // markers: {fontSize: "2rem"},
          scrub: .25, //or a number in second
          //toggleClass: "invisible",
          toggleActions: "restart none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self => console.log(container.className),
          //pinSpacing: false,
          //pin: true        

        },
        opacity: 1,
        duration: 1.25      }
  );
// === ANIMATION DES AUTRES ARTICLES  ====
// nb: l'animation est différente à cause de la position des triggers start et end
let i; 
for (i = 1; i < section.children.length; i++) {
  TweenMax.fromTo
    (
      container[i],
      {
        opacity: 0,
        x: (-1) ** (i + 1) * 300,
      },
      {
        x: (-1) ** (i + 1) * (-40),
        scrollTrigger:
        {
          trigger: container[i],
          container: "#main_div",
          start: "top=30px 50%",
          end: "2px 40%",
          // markers: {fontSize: "2rem"},
          scrub: 1, //or a number in second
          //toggleClass: "invisible",
          toggleActions: "restart none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self => console.log(container.className),
          //pinSpacing: false,
          //pin: true          
        },
        opacity: 1,
        duration: 3
      }
    )
    ;
};
