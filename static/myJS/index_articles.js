import theme from "./color_theme.js";

var fond_div = document.querySelector("#fond_div")
var section = document.getElementById('intro');
var badge = document.querySelector('.badge');
var scroll = document.querySelector('#scroll');
var svg = document.querySelector('#svg_mouse');
var svg_legend = document.querySelector('i')
// var title = document.querySelectorAll('h2')
// var subtitle = document.querySelectorAll('h5')
theme.add_class_to_element_list(theme.h2_list,['bg',theme.text_color1,
                                              'bg-primary','rounded','mt-10'])
theme.add_class_to_element_list(theme.h5_list,[theme.text_color1, 'bg','bg-primary'])
theme.add_class_to_element_list(theme.img_list,theme.class_list_img)

svg.setAttribute('fill',theme.color1) //pour régler la couleur de l'icone en fonction du theme
svg_legend.classList.add(theme.text_color1_nuance1)


// console.log(section);
// console.log(badge);
// console.log(section.children.length);
// console.log(section.children);
//for (i = 0; i<section.children.length; i++)
let container;
container = section.children

let prefix;
prefix = '../'
theme.IMG_BANDE_FILE = prefix + theme.IMG_BANDE_FILE
console.log(theme.IMG_BANDE_FILE)
fond_div.style.backgroundImage = theme.format_URL(theme.IMG_BANDE_FILE); 
fond_div.style.Height = "auto";
fond_div.style.backgroundRepeat = "no-repeat";
fond_div.style.backgroundPosition = "center";



section.classList.replace("invisible","visible")
section.style.backgroundImage = "url('../static/img/background1.svg')"
section.style.backgroundSize = "cover";
section.style.backgroundPosition = "center";
section.style.Height = "auto";
section.style.minHeight = "100vh";

// === ANIMATION DU BOUTON " FAITES DEFILER" ====
var scrollAnimation = TweenMax.fromTo
  (scroll,
    {
      opacity: 1,
      y: 15,     
      scale:2,

    },
    {
      y: 500,
      opacity: 0,
      scale:4,
      duration: 5,
      ease: Power1.easeOut

    }
  );


const body = document.body;
const docElem = document.documentElement;
var scrollPos = (body.scrollTop || docElem.scrollTop)
console.log(scrollPos)
if ( scrollPos == 0){console.log(scrollPos);scrollAnimation;};
  

/**
* ======================= ANIMATION DU PREMIER ARTICLE  ========================
* NB: l'animation est différente à cause de la position des triggers Start et end
* ===============================================================================
*/
TweenMax.fromTo
  (
    container[1],
      {
        opacity: 0,
        x: -300,
      },
      {
        x: 0,
        scrollTrigger:
        {
          trigger: container[1],
          container: "#section2",
          start: "top 30%",
          end: "bottom-=80px 70%",
          // markers: {fontSize: "2rem"},
          scrub: .5, //or a number in second
          //toggleClass: "invisible",
          toggleActions: "restart none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self => console.log(container.className),
          //pinSpacing: false,
          //pin: true        

        },
        opacity: 1,
        duration: 1.25
      }
  );
// === ANIMATION DES AUTRES ARTICLES  ====
// nb: l'animation est différente à cause de la position des triggers start et end
let i; 
for (i = 2; i < section.children.length; i++) {
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
          container: "#section2",
          start: "top 60%",
          end: "300px 50%",
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
