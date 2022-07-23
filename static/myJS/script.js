//location.reload()

//fonction qui est sensé placé le scroll en position top de la page
// à chaque  refresh
window.scrollTop = 0
var slider = document.querySelector('#slider')
console.log(slider)
// fonction basique
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
  document.body.style.backgroundColor = rndCol;
};
// //syntaxe de l'add-eventListener
// let myHTML = document.querySelector('h3');
// if (myHTML) {
//   myHTML.addEventListener('click', function () { alert('prout premier h3 tag') })
// };
// // premiers essais d'enregistreur d'évènements
// let myH1 = document.querySelector('h1');
// if (myH1) {
//   myH1.addEventListener('click', function () { alert('prout premier h1 tag') })
// };

// Changement d'image sur le passage de la souris, exemple encore à tester
// let myImage = document.getElementById('main_image')
// if (myImage) {
//   myImage.addEventListener('mouseover', function () {
//     if (myImage) {
//       let mySrc = myImage.getAttribute('src');
//       console.log(mySrc)
//       if (mySrc === '../static/img/techno.png') {
//         myImage.setAttribute('src', '../static/img/techno2.jpg');
//       }
//       else if (mySrc === '../static/img/techno2.jpg') {
//         myImage.setAttribute('src', '../static/img/info.jpg')
//       } else {
//         myImage.setAttribute('src', '../static/img/techno.png');
//       }
//     }
//   })
// };

// premiers essais de script Java avec fonctions simple
function ChangerCouleur(Identifiant) {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
  document.getElementById(Identifiant).style.color = rndCol;

};
// var balise=true
// myTitle = document.getElementById("mytitle1")
// myTitle.addEventListener('mouseover', function () {
//   if (balise === true) {
//     ChangerCouleur('mytitle1');

//   }
// });

// myH1.addEventListener('clik', function () {
//   if (balise === true) {
//     ChangerCouleur(Identifiant);
//     balise = false
//     console.log(balise);;
//   }

// création d'un bouton "to the Top" qui apparaît seulement en fin de défilement de la page,
// et permet en cliquant dessus de remonter en haut de la page (adaptation d'un tuto).

var divbtt = document.getElementById("divbtt"),
  btnbtt = document.getElementById("btnbtt"),
  body = document.body,
  scrollMax = document.scrollingElement.scrollTopMax,
  docElem = document.documentElement,
  offset = 100,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  scrollPos, docHeight;
// console.log(effect);
docHeight = Math.max(body.scrollHeight, body.offsetHeight,
  docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);


if (docHeight != 'undefined') {
  offset = docHeight * 0.95;
}
if (divbtt) { // le if c'est pour éviter des erreurs "uncaught" 
  // dans la console quand l'utilisateur n'est pas connecté et que
  // le bouton n'est pas disponible pour cette fonction.
  // si on a bient un élément div on crée un Enregistreur d'événement attaché à l'objet window              
  window.addEventListener("scroll", function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop; // en fonction du navigateur web les objets 
    // et attributs sont différents.
    divbtt.className = (scrollPos > scrollMax * 0.95) ? "visible" : "invisible"
    if (!isFirefox){divbtt.className = (scrollPos > docHeight * 0.50) ? "visible" : "invisible"}
  }); // synaxe équivalente à une condition if scrollpos> ...scrollMax alors appliquer divbtt.className ='visible'
  // sinon (ou else) mettre 'invisible'.
}
console.log(btnbtt)
if (btnbtt) {//cf.com plus haut pour le if.
  //var effect = btnbtt.getAttribute('aria-pressed'); // cette ligne voulait
  // préparer un code pour supprimer l'effet de bouton enfoncé, quand on revient 
  // en haut et qu'on redescend en bas de la page
  // le bouton bootstrap-outline apparait encore enfoncé (sauf si l'on clik ailleurs sur la page).
  btnbtt.addEventListener("click", function (event) {
    //bgChange();
    event.preventDefault();
    if (isFirefox) {
      docElem.scrollTop = 0;
      btnbtt.classList.remove('active');
      //document.querySelector('p').click();
    }
    else { body.scrollTop = 0; }    
    btnbtt.classList.remove('active');
    // c'est ce qui fait apparaitre le bouton à sa position toujours fixé à la fenêtre (il défile en même temps
    //que la page)
    // console.log(effect);
  });
};

//simulation d'un clik sur un élément paragraphe
//simulation d'un clik aléatoire


// Nouveau code pour créer un effet sur le titre de la page d'accueil
// "Bienvenue sur mon" qui apparaît lettre par lettre 

const text = document.getElementById("mytitle1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>"
};
const span_text = text.querySelectorAll('span')
for (i = 0; i < span_text.length; i++) {
  const span = span_text[i]
  span.classList.add('op-0')
};
//creation d'un element bootstrap badge pour insérer le txt "BLOG TECH" à la suite de l'animation "Bienvenue...""
let badge_container = document.querySelector('#badge');
badge_container.classList.add('col-sm-auto','justify-content-center');
let badge = document.createElement('span');
badge.innerHTML = "BLOG-TECH";
badge.classList.add('btn', 'btn-info','btn-lg', "op-0", 'text-white','disabled','fs-2','fw-bold');
text.appendChild(badge_container);
badge_container.appendChild(badge);
console.log(badge_container);

//création de deux boites à mettre cote a cote de l'image pour pouvoir régler la largeur du fond...
// let block1 = document.create elem

let char = 0;
var rand = Math.random() * 100;
if (rand < 80) { rand = 100 };
console.log(rand);
//for the animation of my Title I call a setInterval function that repeats the function onTick each 300ms or so
let timer = setInterval(onTick, 50);
//defining timelineMax objects
//tl is for the title's animation
const tl = new TimelineMax();
//tl2 is for the container d-flex of my main_img
const tl2 = new TimelineMax();
//tl3 is the animation of the legend of the main_img and trigger the 
// function to attach my buttons in this area, (AND ONLY NOW: very important part
// otherwise a tiny width of a dark row appears, waiting for the animation to start)
const tl3 = new TimelineMax({ delay: 3, onComplete: tl4_append_elements });
//tl4 is for the button to start appearing one by one.
const tl4 = new TimelineMax({ delay: 0 });
const tl5 = new TimelineMax();
//selecting my elements to animate
const main_container = document.querySelector("#main_container");
const img_container = document.querySelector('#container_main_image');
const dflex = document.querySelector('#d-flex')
const dflexAll = document.querySelectorAll('.d-flex')
const dflex1 = document.querySelector('#dflex1')
const dflex2 = document.querySelector('#dflex2')
console.log(dflexAll)
// Pour l'image HSV j'assigne une classe 'invisible'
// et je la supprime plus loin grâce la fonction delay_x() définie plus bas.
const main_img = document.querySelector('#main_image');
//IMG.classList.add('invisible');
// selection de la légende de la photo
const myName = document.querySelector('#name');


//Now i want a black band background  to set in place
tl.fromTo(main_container, 1, { opacity: 0 }, { opacity: 1 }).fromTo(main_container, 1, { height: "0%" }, { height: "100%", ease: Bounce }, "-=1")
  .fromTo(main_container, 1, { width: "0%" }, { width: "100%", ease: Bounce }, "-=1");

//definition of onTick which is the function of setInterval above which is called repeatedly 
//until every span of my text "Bienvenue sur mon" has appeared
// ATTENTION: le coeur de la fonction est dans le else où chaque span est affiché
function onTick() {
  if (char === splitText.length) {
    setTimeout(function () { badge.classList.remove("op-0"); }, 300);
    tl2.fromTo(badge, 1, { width: "0%" }, { width: "30%" }).fromTo(badge, 3, { opacity: 0 }, { opacity: 1 }, "-=3")
    // here i want to delay a bit the animation on the img_container
    //setTimeout(function(){
    delay_x(dflex, "op-0", 1)
    tl2.fromTo(img_container, 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(img_container, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut }, "-=1")
      .fromTo(img_container, 1, { width: "0%" }, { width: "50%", ease: Power2.easeInOut }, "-=1");
    // delay_x ci-dessous va supprimer la class indiquée pour laisser apparaitre les éléments en question
    //delay_x(IMG, "invisible", 1) devenu inutile quand j'ai réussi à faire disparaitre le conteneur.
    delay_x(img_container, "op-0", 1);
    //},300);
    // animation de la légende de l'image
    delay_x(myName, "op-0", 1);
    tl3.fromTo(myName, .08, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });
    complete();
    return;
  } else {//c'est ici que l'animation du titre "Bienvenue..." lettre par lettre a lieu.
    const span = text.querySelectorAll('span')[char];
    setTimeout(function () { span.classList.replace('op-0', 'op-100') }, 100);
    char++;
  }
};

// ~ Animation de l'image evenement 'mouseover' ~ 
// syntaxe de la propriété CSS box-shadow:
//  *          offset-x | offset-y | blur-radius | spread-radius | color */
// box-shadow: 2px        2px         2px           1px           rgba(0, 0, 0, 0.2);

main_img.addEventListener('mouseover',function(){
TweenMax.fromTo(main_img,1,{boxShadow: "10px 5px 5px rgba(255, 0, 0, 1)"},{boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)", zIndex:2});
})



// cette fonction supprime une classe sur l'élément choisi avec un délai particulier pour l
function delay_x(element_x, class_Name, dtime) {
  setTimeout(function () { element_x.classList.remove(class_Name) }, dtime);
};

function complete() {
  clearInterval(timer);
  timer = null
};

//** Création des boutons animés de l'image centrale:

var div_list1 = create_Taglist([], 'div', 4); //par défaut création de 4 élément 'div'
var div_list2 = create_Taglist([], 'div', 4);
var btn_list1 = create_Taglist([], 'a', 4);
var btn_list2 = create_Taglist([], 'a', 4);
const class_btn = ["btn","btn-dark","btn-lg", "col-lg-auto", "op-1", "text-center", "responsive"]
const class_div = ["col-lg-auto", "mx-1"]
// par défaut on ajoute les classes btn et btn-dark de Bootstrap
add_class_to_element_list(btn_list1.concat(btn_list2), class_btn);
add_class_to_element_list(div_list1.concat(div_list2), class_div);

//~CUSTOMIZATION DES BOUTTONS et ANIMATIONS:~

// la liste des noms à assigner à nos  boutons:
const button_names = ['nouveautés', 'info-geek', 'tutos', 'snippets', 'faire un don',
  'vos réactions', 'contactez-moi', 'téléchargements']

// les boutons de la d-flex1:
function customize() {
  for (i = 0; i < 4; i++) {
    const btni1 = btn_list1[i]
    btni1.textContent = button_names[i]   //nom automatique: 'bouton'+String(i+1);
    // pour jouer sur la couleur (mais pas encore au point):
    //btni1.style.backgroundColor = 'rgba(' + 255 + ',' + 0 + ',' + random(400) + ',' + 1 + ')';
    if (button_names[i] == "nouveautés")
    {
      btni1.href = "/articles/index"
    };
    
    // les boutons de la d-flex2:
    const btni2 = btn_list2[i]
    btni2.textContent = button_names[i + 4];
    if (button_names[i+4] == "contactez-moi")
    { 
      btni2.href = "/common/contact"
    };
    // pour jouer sur la couleur (mais pas encore au point):
    //btni2.style.backgroundColor = 'rgba(' + 255 + ',' + 0 + ',' + random(400) + ',' + 1 + ')';
    //Les Animations sur les boutons:
    TweenMax.fromTo(btn_list1, 3, { x: 0, rotation: 0 }, { x: "5vw", rotation: 360 })
    TweenMax.fromTo(btn_list2, 3, { x: 0, rotation: 0 }, { x: "-30vw", rotation: 360 })
  };
};

//  Function triggered by the Timeline tl4:
//  accroche les éléments divs aux classes dflex1 parentes
//  et les éléments boutons aux div parentes: 
//  (ATTENTION: cette opération fait apparaître l'objet d-flex 
//  qui contient les div_list et les boutons créés, d'où le delay)
//  + animation d'un margin sur l'image
function tl4_append_elements() {
  //animation de l'image
  TweenMax.fromTo(main_img, 3,
    {
      marginTop: 0,
      marginBottom: 0
    },
    {
      marginTop: 80,
      marginBottom: 80,
      ease: Bounce
    }
  );

  append_children_el(div_list1, dflex1);
  append_children_el(div_list2, dflex2);
  append_children_list(btn_list1, div_list1);
  append_children_list(btn_list2, div_list2);


};

//~ ANIMATION MOUSEOVER SUR LES BOUTONS ~~
btn_list = btn_list1.concat(btn_list2)
addAnimation(btn_list);
// Animation sur le bouton nouveauté:
TweenMax.fromTo(btn_list1[0], 1, { rotation: 0, backgroundColor: "" },
  {
    rotation: 360,
    backgroundColor: "#6610f2",
    borderColor: "#0d496e",
    color : "#FFFF"
  }).delay(6);

function Rotation(elem, t1, angle1 = 0, angle2 = 360,delay=0)
{
  TweenMax.fromTo(elem, t1, { rotation: angle1 }, { rotation: angle2 }).delay(delay);
}

function addAnimation(elements_list,delay=0) 
{
  for (i in elements_list)
  {
    const el = elements_list[i]
    // attention à la syntaxe de JS pour récupérer la valeur d'un élément d'une liste par itération
    el.addEventListener('mouseover', function ()
      { 
        Rotation(el,1,0,360,0);
      });    
   
  }
}
    // if (anim.isActive()){alert('actif');anim.delay(3);}
// myTitle.addEventListener('mouseover', function () {
//   if (balise === true) {
//     ChangerCouleur('mytitle1');




//Il faudrait faire des classes de tout cela !!
//ci-dessous les fonctions utilisées plus haut, c'est kiffant de pouvoir les définir après :)
function create_Taglist(list = [], tag = "div", n = 4) {
  for (i = 0; i < n; i++) {
    const el = document.createElement(tag);
    list.push(el);
  };
  return list;
};

function add_class_to_element_list(list = [], class_list =['btn', 'btn-dark']){
  for (i = 0; i < list.length; i++) { for (j=0; j < class_list.length; j++)
    {
      list[i].classList.add(class_list[j]);
  }
    
  };
  return (list);
};

// cette fonction accroche une liste d'enfant à une liste correspondante de parents
function append_children_list(list_child = [], list_parent = []) {
  for (i = 0; i < Math.min(list_child.length, list_parent.length); i++) {
    list_parent[i].appendChild(list_child[i]);
  };
};


// cette fonction accroche une liste d'enfant à un unique parent
function append_children_el(list_child = [], el) {
  customize();
  for (i = 0; i < list_child.length; i++) {
    const child = list_child[list_child.length - i - 1]
    //Animation d'apparition des boutons au moment de leur ancrage
    tl4.fromTo(child, .2, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }); //ATTENTION AU DELAY DE tl4
    el.appendChild(child);
  };
};

//**Programmation de l'événement wheel pour faire apparaitre les élément de la section2

// On commence par rendre invisible toute la section2 de l'HTML:
const section2 = document.getElementById("section2");
var text_visible = false
console.log('text_visible au départ ' + String(text_visible))

// création d'une fonction rendant invisible chaque élément de la section2
function mkInvisible() {
  for (i = 0; i < section2.children.length; i++) {
    section2.children[i].classList.add('invisible');
  };
};
// appel de la fonction:
mkInvisible()
//console.log(section2.children)

// On aura besoin d'un effet d'animation pour faire apparaitre les éléments masqués:
if (tl3.isActive()) { alert('timeline is ACTIVE') };

gsap.registerPlugin(ScrollTrigger); // it is ScrollTrigger here and scrollTrigger in the gsap.to()
const tl6 = new TimelineMax()

// On ajoute l'Enregistreur d'événement à l'objet window ici !! 
// ATTENTION: l'événement de souris 'wheel' ne s'attage pas à un élément, 'mousewheel' oui 'but is deprecated'.
if (text_visible == false) {
  console.log("ok");
  text_visible = true;
  for (i = 0; i < section2.children.length; i++) {
    const child = section2.children[i];
    console.log(section2.children[i]);
    console.log(child.className);
    //TODO créer une fonction qui fait apparaître les éléments un par un 
    // à chaque cran de la molette de la souris (et pas tout en même temps)
    gsap.to(child,
      {
        duration: 1,
        scrollTrigger:
        {
          trigger: child,
          container: "#section2",
          start: "top 90%",
          end: "top 60%",
          //markers: { fontSize: "2rem" },
          toggleClass: "invisible",
          //toggleActions:"none none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          //onToggle: self => console.log(child.className),
          //pinSpacing: false,
          //pin: true          

        }
      }
    );
    console.log(child.className)


  };
}
else {
  console.log('Normalement le text est visible la valeur text_visible est: ' + text_visible)
};
function mkvisible(el) {
  tl5.fromTo(el, .5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
  gsap.to("div", { scrollTrigger: "div" });
  // la fonction suivant est un setTimeout pour supprimer la class 'invisible'
  delay_x(el, 'invisible', .5);
};


// exemple de gsap.to avec scrollTrigger
// gsap.to
// (
//   target,
//   {
//   duration:3,
//   scrollTrigger:
//   {
//     trigger: target, or other trigger,
//     start: "top 30%", beggining of the animation,
//     markers: true,
//     toggleClass: "visible"
//   }
//   }
//   )