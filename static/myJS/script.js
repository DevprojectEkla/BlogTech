//location.reload()
// const alldiv = document.querySelectorAll('div');
// //alert(alldiv.length);
// for (i = alldiv.length-10; i<alldiv.length;i++){ 
// alldiv[i].classList.add("invisible")};
// console.log(alldiv[17])
// for (i = 17; i < alldiv.length; i++) {  
//   alldiv[i].addEventListener('mouseover', function () {
//   alldiv[i].classList.replace('invisible','visible')
//  })
//   };
// document.querySelectorAll('p').classList.add("invisible")
// document.querySelectorAll('h3').classList.add("invisible")
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
  document.body.style.backgroundColor = rndCol;
};
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//  document.querySelector('html').addEventListener('click', function() {
//  alert('Aïe, arrêtez de cliquer !!');
//      });

//autre syntaxe possible
let myHTML = document.querySelector('h3');
if (myHTML) {
  myHTML.addEventListener('click', function () { alert('prout premier h3 tag') })
};
// premiers essais d'enregistreur d'évènements
let myH1 = document.querySelector('h1');
if (myH1) {
  myH1.addEventListener('click', function () { alert('prout premier h1 tag') })
};

// Changement d'image sur le passage de la souris, exemple encore à tester
let myImage = document.getElementById('main_image')
if (myImage) {
  myImage.addEventListener('mouseover', function () {
    if (myImage) {
      let mySrc = myImage.getAttribute('src');
      console.log(mySrc)
      if (mySrc === '../static/img/techno.png') {
        myImage.setAttribute('src', '../static/img/techno2.jpg');
      }
      else if (mySrc === '../static/img/techno2.jpg') {
        myImage.setAttribute('src', '../static/img/info.jpg')
      } else {
        myImage.setAttribute('src', '../static/img/techno.png');
      }
    }
  })
};



// premiers essais de script Java avec fonctions simple
function ChangerCouleur(Identifiant) {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
  document.getElementById(Identifiant).style.color = rndCol;
  
};
var balise=true
myTitle = document.getElementById("mytitle1")
myTitle.addEventListener('mouseover', function () {
  if (balise === true) {
    ChangerCouleur('mytitle1');

  }
});

myH1.addEventListener('clik', function () {
  if (balise === true) {
    ChangerCouleur(Identifiant);
    balise = false
    console.log(balise);;
  }

})

if (document.getElementById('no_auth')) {
  console.log(document.querySelector("#divbtt"));
} else {
  console.log(document.getElementById("footer"));
};

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
  }); // synaxe équivalente à une condition if scrollpos> ...scrollMax alors appliquer divbtt.className ='visible'
  // sinon (ou else) mettre 'invisible'.
}

if (btnbtt) {//cf.com plus haut pour le if.
  var effect = btnbtt.getAttribute('aria-pressed'); // cette ligne voulait
  // préparer un code pour supprimer l'effet de bouton enfoncé, quand on revient 
  // en haut et qu'on redescend en bas de la page
  // le bouton bootstrap-outline apparait encore enfoncé (sauf si l'on clik ailleurs sur la page).
  btnbtt.addEventListener("click", function (event) {
    //bgChange();
    event.preventDefault();
    if (isFirefox) {
      docElem.scrollTop = 0;
      //document.querySelector('p').click();
    }
    else { body.scrollTop = 0; }
    btnbtt.setAttribute('class', 'btn position-fixed bottom-0 end-50');
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
console.log(text);
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText)
text.textContent = "";
for (i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}
const span_text = text.querySelectorAll('span')
for (i = 0; i < span_text.length; i++) {
  const span = span_text[i]
  span.classList.add('op-0')

}
//creation d'un element bootstrap badge pour insérer le txt "BLOG TECH" à la suite de l'animation "Bienvenue...""
let badge_container = document.querySelector('#badge')
badge_container.classList.add('container', 'justify-content-center')
let badge = document.createElement('span');
badge.textContent = "BLOG-TECH";
badge.classList.add('badge', 'bg-info', "op-0")
text.appendChild(badge_container)
badge_container.appendChild(badge)
console.log(badge_container)

//création de deux boites à mettre cote a cote de l'image pour pouvoir régler la largeur du fond...
// let block1 = document.create elem

let char = 0;
var rand = Math.random() * 100;
if (rand < 80) { rand = 100 };
console.log(rand);
//for the animation of my Title I call a setInterval function that repeats the function onTick each 300ms or so
let timer = setInterval(onTick, rand);
//defining timelineMax objects
const tl  = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
//selecting my elements to animate
const main_container = document.querySelector("#main_container");
const img_container = document.querySelector('#container_main_image');
const dflex = document.querySelector('#d-flex')
const dflexAll = document.querySelectorAll('.d-flex')
const dflex1 = document.querySelector('#dflex1')
const dflex2 = document.querySelector('#dflex2')
console.log(dflexAll)
// Pour l'image HSV on veut lui assigner une largeur égale à la taille finale de l'animation, autrement
// le container auquel elle est liée au départ aura une width de 100% et au moment de l'apparition de l'image
// il sera réduit à 50% (comme le veut l'animation et les dimensions d'affichage requise pour cette image).
// j'assigne donc ici à l'image une classe bootstrap w-50 qui veut dire width = 50% 
// et je la supprime plus loin grâce la fonction delay_x() définie plus bas.
const HSV = document.querySelector('#main_image');
HSV.classList.add('invisible');
// selection de la légende de la photo
const myName = document.querySelector('#name');


//Now i want a background  to set in place
tl.fromTo(main_container, 1, { opacity: 0 }, { opacity: 1 }).fromTo(main_container, 1, { height: "0%" }, { height: "100%", ease: Bounce }, "-=1")
  .fromTo(main_container, 1, { width: "0%" }, { width: "100%", ease: Bounce }, "-=1");

//definition of onTick which is the function of setInterval above which is called repeatedly 
//until every span of my text "Bienvenue sur mon" has appeared
// ATTENTION: le coeur de la fonction est dans le else, chaque span est affiché
function onTick() {
  console.log("onTick"); rand = Math.random() * 300;
  if (char === splitText.length) {
    setTimeout(function () { badge.classList.remove("op-0"); }, 300);
    tl.fromTo(badge, 3, { width: "0%" }, { width: "30%" }).fromTo(badge, 3, { opacity: 0 }, { opacity: 1 }, "-=3")
    // here i want to delay a bit the animation on the img_container
    //setTimeout(function(){
    delay_x(dflex, "op-0", 2)
    tl.fromTo(img_container, 1, { opacity: 0 }, { opacity: 1 })
      .fromTo(img_container, 1, { height: "0%" }, { height: "100%", ease: Bounce }, "-=1")
      .fromTo(img_container, 1, { width: "0%" }, { width: "50%", ease: Bounce }, "-=1");
    delay_x(HSV, "invisible", 1)
    delay_x(img_container, "op-0", 1);
    //},300);
    // animation de la légende de l'image
    delay_x(myName, "op-0", 1);
    tl.fromTo(myName, 2, { opacity: 0 }, { opacity: 1 });
    complete();
    return;
  } else {
    const span = text.querySelectorAll('span')[char];
    setTimeout(function () { span.classList.replace('op-0', 'op-100') }, 100);
    char++;
  }
};


// cette fonction supprime une classe sur l'élément choisi avec un délai particulier pour l
function delay_x(element_x, class_Name, dtime) {
  setTimeout(function () { element_x.classList.remove(class_Name) }, dtime);
};

function complete() {
  clearInterval(timer);
  timer = null
};

//création des boutons sur les parties bleues à côté de l'image
var div_list1 = create_Taglist([],'div',4); //par défaut création de 4 élément 'div'
var div_list2 = create_Taglist([],'div',4);
var btn_list1 = create_Taglist([],'button',4);
var btn_list2 = create_Taglist([],'button',4);

// par défaut on ajoute les classes btn et btn-dark de Bootstrap
add_class_to_element_list(div_list1,'col-lg-auto','mx-1');
add_class_to_element_list(div_list2,'col-lg-auto','mx-1');
add_class_to_element_list(btn_list1);
add_class_to_element_list(btn_list1,"col-lg-auto","op-1");
add_class_to_element_list(btn_list2);
add_class_to_element_list(btn_list2,"col-lg-auto","op-1");

for (i=0;i<4;i++)
{
  btn_list1[i].textContent='bouton'+String(i+1);
};
console.log(btn_list1)

for (i=0;i<4;i++)
{
  btn_list2[i].textContent='bouton'+String(i+5);
};
console.log(btn_list1)
// ajout des div aux classes dflex1 parentes
// et des classes boutons aux div parentes


append_children_el(div_list1,dflex1)
append_children_el(div_list2,dflex2)
append_children_list(btn_list1,div_list1)
append_children_list(btn_list2,div_list2)


//ci-dessous les fonctions utilisées plus haut, c'est kiffant de pouvoir les définir après :)
function create_Taglist(list=[],tag="div",n=4) {
  for (i = 0; i < n; i++) {
    const el = document.createElement(tag);
    list.push(el);    
  };
  return list;
};

function add_class_to_element_list(list=[],class1='btn',class2= 'btn-dark')
{
for(i = 0; i < list.length; i++)
{
  list[i].classList.add(class1,class2);
};
return(list);
};

function append_children_list(list_child=[],list_parent=[])
{
for (i=0; i< Math.min(list_child.length,list_parent.length); i++)
{
  list_parent[i].appendChild(list_child[i]);
};
};

function append_children_el(list_child=[],el)
{
for (i=0; i< list_child.length; i++)
{
  el.appendChild(list_child[i]);
};
};

//**Programmation de l'événement wheel pour faire apparaitre les élément de la section2

// On commence par rendre invisible toute la section2 de l'HTML:
const section2 = document.getElementById("section2");
var text_visible = false
console.log('text_visible au départ '+String(text_visible))

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

gsap.registerPlugin(ScrollTrigger); // it is ScrollTrigger here and scrollTrigger in the gsap.to()
const tl4 = new TimelineMax()

// On ajoute l'Enregistreur d'événement à l'objet window ici !! 
// ATTENTION: l'événement de souris 'wheel' ne s'attage pas à un élément, 'mousewheel' oui 'but is deprecated'.
if (text_visible == false)
{
  console.log("ok");
  text_visible = true;
  for (i = 0; i < section2.children.length; i++) 
  {
    const child = section2.children[i];
    console.log(section2.children[i]);
    console.log(child.className);
    //TODO créer une fonction qui fait apparaître les éléments un par un 
    // à chaque cran de la molette de la souris (et pas tout en même temps)
    gsap.to(child,
      {
      duration:1,
      scrollTrigger:
        {
          trigger: child,
          container: "#section2",
          start: "top 90%",
          end: "top 50%",
          markers: {fontSize: "2rem"},
          toggleClass: "invisible",
          //toggleActions:"none none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self =>  console.log(child.className),
          //pinSpacing: false,
          //pin: true          
          
        }
      }
      );
      console.log(child.className)

    
  };  
} 
else 
{
  console.log('Normalement le text est visible la valeur text_visible est: '+text_visible)
};
function mkvisible(el)
  { 
    tl4.fromTo(el,.5,{opacity:0},{opacity:1, ease: Power2.easeInOut})
    gsap.to("div", {scrollTrigger:"div"});
    // la fonction suivant est un setTimeout pour supprimer la class 'invisible'
    delay_x(el,'invisible',.5);
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