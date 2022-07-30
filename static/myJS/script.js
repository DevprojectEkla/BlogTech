/* ==== DJANGO VARIABLES ====
INFO GENERALES:
si on veut récupérer des valeurs booléennes
associées à des variables de django dans le script JS
on peut utiliser la routine suivante dans le gabbarit:
{% if {{variable_DJANGO}} %}
<script type="text/javascript"> var MYVARIABLE = true (par ex.) </script>
{% endif %}
*/

/* ==== IMPORTATION DES VARIABLES DE COULEUR POUR LES THEMES ====
*/
import theme from './color_theme.js'

/** AFFICHAGE DES COULEURS DE THEME DANS LA CONSOLE
 * l'idée est qu'on voudrait que l'utilisateur
 * puisse les configurer
 */
console.log('color0:%s',theme.color0)
console.log('color1:%s',theme.color1)
console.log('color2:%s',theme.color2)

/** ==== CLASSE DE STYLE POUR LES BOUTONS ==========
 *  ==== theme_btn est importée de notre module ====
 * ===== THEME COLOR ===============================*/
let theme_btn;
theme_btn = theme.theme_btn



//fonction qui est sensé placé le scroll en position top de la page
// à chaque  refresh: ça y est ça fonctionne !!

var body = document.body
document.onreadystatechange = function () {
  if (document.readyState == "complete") {//nb: il y a d'autres états comme 'interactive' ou 'load'
    window.scrollTo(0,0);
  }
};

// fonctions basiques
function random(number) 
{
  return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
  body.style.backgroundColor = rndCol;
};

/** ===========================================
 * Ajout des thémes de couleur aux éléments ***
 * ============================================
 */

add_class_to_element_list(theme.h1_list,theme.class_list_h1)
add_class_to_element_list(theme.h2_list,theme.class_list_h2)
add_class_to_element_list(theme.h3_list,theme.class_list_h3)
add_class_to_element_list(theme.h4_list,theme.class_list_h4)
add_class_to_element_list(theme.h5_list,theme.class_list_h5)
add_class_to_element_list(theme.p_list, theme.class_list_p)

let s_list;
let link;
for (i=0;i<theme.p_list.length;i++)
{	
	s_list = theme.p_list[i].textContent.split("<a>");//the second member of this list is our link
	if(s_list[1])
		{
		link = s_list[1].anchor(name='link'+i); // string.anchor() returns an anchor tag of our string
		theme.p_list[i].textContent = s_list[0]+" " + link +" "+ s_list[2] // and then we concat all over again.
		}
}


/** ==============================
 * Ajout des ombres aux images ***
 * ===============================
 */
let img_list; 
img_list = document.querySelectorAll('img')
for (var i = 0; i < img_list.length; i++ )
{
  img_list[i].classList.add('rounded','border',theme.border_color1, theme.mybox_color1)
}

// premiers essais de script Java avec fonctions simple
function ChangerCouleur(Identifiant) {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
  document.getElementById(Identifiant).style.color = rndCol;

};

/**===================== BOUTON BACK TO THE TOP =================================================
* création d'un bouton "back to the Top" qui apparaît seulement en fin de défilement de la page,
* et permet en cliquant dessus de remonter en haut de la page (adaptation d'un tuto).
=================================================================================================
*/
// DEFINITION DES VARIABLES
var divbtt = document.getElementById("divbtt"),
btnbtt = document.getElementById("btnbtt"),
scrollMax = document.scrollingElement.scrollTopMax,
docElem = document.documentElement,
offset = 100,
isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
scrollPos, docHeight;
// console.log(effect);
docHeight = Math.max(body.scrollHeight, body.offsetHeight,
docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
// AJOUT DE LA CLASSE DE STYLE
btnbtt.classList.add(theme.theme_btn)

/** ====================================
 * CODE DE LA CONDITION DU BOUTON BTT   
 * =====================================*/

if (docHeight != 'undefined') {
  offset = docHeight * 0.95;
}
if (divbtt) 
{ // le if c'est pour éviter des erreurs "uncaught" 
  // dans la console quand l'utilisateur n'est pas connecté et que
  // le bouton n'est pas disponible pour cette fonction.
  // si on a bient un élément div on crée un Enregistreur d'événement attaché à l'objet window              
  window.addEventListener("scroll", function (event) 
  {
    scrollPos = body.scrollTop || docElem.scrollTop; // en fonction du navigateur web les objets 
    // et attributs sont différents.
    divbtt.className = (scrollPos > scrollMax * 0.70) ? "visible" : "invisible"
    if (!isFirefox)
    {
      divbtt.className = (scrollPos > docHeight * 0.50) ? "visible" : "invisible"
    }
  }); // synaxe équivalente à une condition if scrollpos> ...scrollMax alors appliquer divbtt.className ='visible'
  // sinon (ou else) mettre 'invisible'.
}
// console.log(btnbtt)
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
    }
    else { body.scrollTop = 0; }    
    btnbtt.classList.remove('active');
    
  });
};

/** =========================================================
 *          ANIMATION TITRE BIENVENUE SUR MON BLOG
 * ==========================================================
 * code pour créer un effet sur le titre de la page d'accueil
 *"Bienvenue sur mon" qui apparaît lettre par lettre 
*/
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
//creation d'un element bootstrap badge pour insérer
// le txt "BLOG TECH" à la suite de l'animation "Bienvenue...""
// NB: le badge est finalement devenu un bouton pour avoir la 
// responsiveness
let badge_container = document.querySelector('#badge');
badge_container.classList.add('col-sm-auto','justify-content-center');
let badge = document.createElement('span');
badge.innerHTML = "BLOG-TECH";
badge.classList.add('btn', theme_btn,'btn-lg-auto','mb-5', "op-0", theme.text_color1,'disabled','fs-2','fw-bold');
text.appendChild(badge_container);
badge_container.appendChild(badge);
// console.log(badge_container);

//création de deux boites à mettre cote a cote de l'image pour pouvoir régler la largeur du fond...
//for the animation of my Title I call a setInterval function that repeats the function onTick() 
//each 300ms or so
let char = 0;
let timer = setInterval(onTick, 50);
//defining timelineMax objects
//tl is for the title's animation
let tl;
tl = new TimelineMax();
//tl2 is for the container d-flex of my main_img
let tl2;
tl2 = new TimelineMax();
//tl3 is the animation of the legend of the main_img and trigger the 
// function to attach my buttons in this area, (AND ONLY NOW: very important part
// otherwise a tiny width of a dark row appears, waiting for the animation to start)
let tl3;
tl3 = new TimelineMax({ delay: 3, onComplete: tl4_append_elements });
//tl4 is for the button to start appearing one by one.
let tl4;
tl4 = new TimelineMax({ delay: 0 });
let tl5;
tl5 = new TimelineMax();
//selecting my elements to animate
const main_container = document.querySelector("#main_container");
const img_container = document.querySelector('#container_main_image');
const dflex = document.querySelector('#d-flex')
const dflexAll = document.querySelectorAll('.d-flex')
const dflex1 = document.querySelector('#dflex1')
const dflex2 = document.querySelector('#dflex2')
// console.log(dflexAll)
// Pour l'image HSV j'assigne une classe 'invisible'
// et je la supprime plus loin grâce la fonction delay_x() définie plus bas.
const main_img = document.querySelector('#main_image');
//IMG.classList.add('invisible');
// selection de la légende de la photo
const my_legend = document.querySelector('#name');
let carousel_name;
carousel_name = document.querySelector('#demo')
carousel_name.classList.add('container','rounded',theme.text_color1_200,'my-5','bg',theme.bg_color2)

/**==========================
 * Ajout des triangles animés
 * ==========================
 **/ 

// triangles_list1 = create_Taglist('div',25)
// triangles_list2 = create_Taglist('div',25)
// triangles = triangles_list1.concat(triangles_list2)
// add_class_to_element_list(triangles,['triangle-right'])
// append_children_el(triangles_list1, body);
// append_children_el(triangles_list2, body);

// for(i = 0; i< triangles.length; i++)
// {

// }



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
    delay_x(dflex1, "op-0", 1);
    delay_x(dflex2, "op-0", 1);
    
    //},300);
    // animation de la légende de l'image
    delay_x(my_legend, "op-0", 1);
    delay_x(btn_style, "op-0", 3);
    tl3.fromTo([my_legend,btn_style], .8, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });
    complete();
    return;
  } else {//c'est ici que l'animation du titre "Bienvenue..." lettre par lettre a lieu.
    const span = text.querySelectorAll('span')[char];
    setTimeout(function () { span.classList.replace('op-0', 'op-100') }, 100);
    char++;
  }
};

/**  ============== Animation de l'image evenement 'mouseover' =====================
* une simple animation au passage de la souris: l'ombre de l'image s'affiche
* ================= syntaxe de la propriété CSS box-shadow:=========================
*          offset-x | offset-y | blur-radius | spread-radius | color 
* box-shadow: 2px        2px         2px           1px           rgba(0, 0, 0, 0.2);
====================================================================================*/

main_img.addEventListener('mouseover',function(){
TweenMax.fromTo(main_img,.7,{boxShadow: "-10px 5px 2px rgba(50, 0, 0, 1)"},{boxShadow: "20px 2px 2px 1px rgba(20, 0, 0, 0.2)"});
})

// cette fonction supprime une classe sur l'élément choisi avec un délai particulier pour l
function delay_x(element_x, class_Name, dtime) {
  setTimeout(function () { element_x.classList.remove(class_Name) }, dtime);
};

function complete() {
  clearInterval(timer);
  timer = null
};

/*===============================================================================
*========== Création des boutons animés de l'image centrale:=====================
*================================================================================
*/
let btn_list1;
let btn_list2;
let class_btn;
let class_div;


var div_list1 = create_Taglist('div', 4); //par défaut création de 4 élément 'div'
var div_list2 = create_Taglist('div', 4);
btn_list1 = create_Taglist('a', 4);
btn_list2 = create_Taglist('a', 4);
const btn_list = btn_list1.concat(btn_list2)
class_btn = ["btn",theme_btn,"btn-lg","myZ-index-3", "col-lg-auto", "op-1", "text-center", "mt-2", "responsive"]
class_div = ["col-lg-auto", "mx-1"]
// ** Création d'un message d'alerte si l'utilisateur n'est pas connecté **
const auth_alert = document.createElement("div");
auth_alert.classList.add("alert","alert-"+theme.color1_200)
auth_alert.setAttribute('role','alert');
auth_alert.style.zIndex = 3;
auth_alert.textContent = "Il faut être connecté pour lire les articles"

// ** Bouton close pour fermer la fenêtre d'alerte
const close_btn = document.createElement('button');
close_btn.classList.add("btn-close", "btn-myhover-box");// il y a aussi "btn-close-white"
close_btn.setAttribute("data-bs-dismiss","alert");
close_btn.setAttribute("aria-label","Close");

const div_link1 = document.createElement('div')
const div_link2 = document.createElement('div')
const redirect_link1 = document.createElement("a");
const redirect_link2 = document.createElement("a");

redirect_link1.style.zIndex = 3;
redirect_link1.textContent = "Cliquez ici pour vous inscrire"
redirect_link1.classList.add("mybadge","bg",theme.bg_color0_600, "text-decoration-none","border", theme.border_color2)
redirect_link1.setAttribute('href','/signup');
redirect_link2.style.zIndex = 3;
redirect_link2.textContent = "ou ici pour vous connecter"
redirect_link2.classList.add("mybadge", "bg",theme.bg_color0_600,"text-decoration-none", "border",theme.border_color2)
redirect_link2.setAttribute('href','/login');

//ajout des classes sur les différents éléments:
let class_d_flex_main;
let class_d_flex;
class_d_flex_main = ['d-flex', 'justify-content-center','bg', theme.bg_color0, theme.bg_gradient1, 'op-0']
add_class_to_element_list([dflex],class_d_flex_main)
class_d_flex = ['d-flex', 'col-sm-6', theme.bg_color0, theme.bg_color0, 'op-0']
add_class_to_element_list([dflex1],class_d_flex)
add_class_to_element_list([dflex2],class_d_flex)
let class_img_container;
class_img_container = ["d-flex", "justify-content-center", "bg", theme.bg_color0, "rounded", "op-0"]
add_class_to_element_list([img_container],class_img_container)
let class_main_container;
class_main_container = ["w-100", "justify-content-center","text-center", "bg", theme.bg_color0, theme.bg_gradient1]
add_class_to_element_list([main_container],class_main_container)


// ajout des classes sur les boutons et les div
add_class_to_element_list(btn_list, class_btn);
add_class_to_element_list(div_list1.concat(div_list2), class_div);

/** =========== BOUTON CHANGE STYLE: ==============
 * Creation du bouton et ajout des classes de style
 * // TODO: A finir d'implémenter pour la fonction
 * changer le style.
 * ================================================
 */
 
let btn_style;
let class_btn_style;
let div_btn_style;
div_btn_style = document.querySelector('#div_legend');

append_children_el([div_btn_style],main_container);
class_btn_style = ['btn',theme_btn,'my-2','op-0'];
btn_style = document.createElement('button');
btn_style.textContent = 'Changer le style';
add_class_to_element_list([btn_style], class_btn_style);
append_children_el([btn_style],div_btn_style);
add_class_to_element_list(btn_list, class_btn);

// theme.theme_primary = true;
// btn_style.addEventListener('click',function()
// { if(theme_btn == theme.btn_box)
//   {
//     theme_btn = theme.btn_box_secondary
//   }
//   else
//   {
//     theme_btn = theme.btn_box
//   }
//   if (theme.theme_primary)
//   {
//     theme.color0 = theme.purple;
//     theme.color1 = theme.red;
//     theme.color2 = theme.indigo;
//     theme.bg_color = theme.dark;
//     theme.theme_primary = false
    
//   }
//   else
//   {
//     theme.color0    = theme.purple;
//     theme.color1    = theme.orange;
//     theme.color2    = theme.indigo;
//     theme.bg_color  = theme.dark;
//     theme.theme_primary = true
//   }
//   //location.reload()
  
// });
console.log('color0:%s',theme.color0)
console.log('color1:%s',theme.color1)
console.log('color2:%s',theme.color2)
//on ajoute des ID pour les boutons en vue des animations:
for (i=0; i<btn_list.length; i++)
{
  btn_list[i].setAttribute("id","all_buttons")
};

/*================================================
* =======CUSTOMIZATION DES BOUTTONS et ANIMATIONS:
* ================================================
*/
// la liste des noms à assigner à nos  boutons:
const button_names = ['nouveautés', 'info-geek', 'tutos', 'snippets', 'faire un don',
  'vos réactions', 'contactez-moi', 'téléchargements']

/** ======= FONCTION CUSTOMIZE ============
 * les boutons de la d-flex1:
 * */ 
function customize() 
{let btn_news;
  for (i = 0; i < 4; i++) 
  {
    
    let btni1;
    btni1 = btn_list1[i] // on associe à chaque bouton i de la liste 1 le nom btni1 
    btni1.textContent = button_names[i]   //nom automatique: 'bouton'+String(i+1);
    if (button_names[i] == "nouveautés")
      { 
        btn_news = btni1 ;        
      };
    // pour jouer sur la couleur (mais pas encore au point):
    //btni1.style.backgroundColor = 'rgba(' + 255 + ',' + 0 + ',' + random(400) + ',' + 1 + ')';
    if (user_authenticated)
    {
      btn_news.href = "/articles/index"
      btni1.classList.add("disable")
    }
    else 
    {/**================= BOUTON NOUVEAUTES =========================
    * ajout d'une Alert bootstrap avec des liens vers signup ou login 
    * si la variable django user_is_authenticated= false
    =================================================================*/
        btn_news.addEventListener
        (
          'click',function()
          { 
            btn_news.parentNode.appendChild(auth_alert);
            auth_alert.appendChild(close_btn);
            div_link1.appendChild(redirect_link1);
            auth_alert.appendChild(div_link1);
            div_link2.appendChild(redirect_link2);
            auth_alert.appendChild(div_link2);
            TweenMax.fromTo(auth_alert, .8, 
              { opacity: 0,
                x:(-500),
                scale:0.5,
              }, 
              {
                x: 0,
                opacity: 1,
                scale:1,                
              }
              );
              TweenMax.fromTo(redirect_link1, .5, 
                { opacity: 0,                  
                  scale:0,
                }, 
                {                  
                  opacity: 1,
                  scale:1,                
                }
                ).delay(1);
                TweenMax.fromTo(redirect_link2, .5, 
                  { opacity: 0,
                    x:150, 
                    scale:0,
                  }, 
                  {                  
                    opacity: 1,
                    x:0,
                    scale:1,                
                  }
                  ).delay(2)
          }
        );
        //btni1.href = "/login";
      
      
    };    
    // *- suite de la boucle FOR -*
    /**==========================  
     * les boutons de la d-flex2: 
     * ==========================
     * */
    const btni2 = btn_list2[i]
    btni2.textContent = button_names[i + 4];
    
    if (button_names[i+4] == "contactez-moi")
    { 
      btni2.href = "/common/contact";
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
  customize();
  append_children_el(div_list1, dflex1);
  append_children_el(div_list2, dflex2);
  append_children_list(btn_list1, div_list1);
  append_children_list(btn_list2, div_list2);


};

//~ ANIMATION MOUSEOVER SUR LES BOUTONS ~~
addAnimation(btn_list, 0);
// Animation sur le bouton nouveauté:
TweenMax.fromTo(btn_list1[0], 1, { rotation: 0, backgroundColor: "" },
  {
    rotation: 360,
    backgroundColor: "#6610f2",
    borderColor: "$orange",
    color : "orange"
  }).delay(6);

let angle1;
let angle2;
let rotation;
let delay;
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
    // el.addEventListener('mouseover', function ()
    //   { 
    //     Rotation(el,1,0,30,0);
    //   });
    // var rank_name = "btn"+i;
    // var id_btn = '#'+rank_name
    // el.setAttribute("id",rank_name)
    
    /** === La branche random_animation est un essai encore infructueux de 
     * générer une animation aléatoire pour chaque bouton ici n'est aléatoire que le sens
     * de rotation (+ ou -) des boutons
     * il faut trouver un moyen de créer une animation sans la déclencher:
     * utiliser l'instanciation de la classe: const mytweentransformation = TweenMax()
     */
    el.onmouseout = el.onmouseover = handler
    function handler(event)
    {let t1; var tweenRotation = TweenMax.fromTo(event.target, t1=.5, { rotation: angle1=0 }, { rotation: angle2=(-1)**(Math.ceil(Math.random()+1))*20, ease:Power2.easeInOut}).delay(0);
      if (event.type == 'mouseenter')// cette condition ne sert à rien car l'animation de rotation
      //se déclenche de toute façon à chaque event.
      {
        console.log('test')        
      }
      if (event.type == 'mouseout') // celle-ci en revanche est nécessaire
      {
        
        tweenRotation.delay(tweenRotation.duration()).reverse(2,false);
      
        //TweenMax.fromTo(event.target, t1=1, { rotation: angle_x }, { rotation: angle2=0 }).delay(.5);
      }
    }  
  }
}

//Il faudrait faire des classes de tout cela !!
//ci-dessous les fonctions utilisées plus haut, c'est kiffant de pouvoir les définir après :)
function create_Taglist(tag = "div", n = 4) {
  let list = [];
  for (i = 0; i < n; i++) {
    const el = document.createElement(tag);
    list.push(el);
  };
  return list;
};

function add_class_to_element_list(list = [], class_list =['btn', 'btn-dark']){let j;
  for (i = 0; i < list.length; i++) { for (j=0; j < class_list.length; j++)
    {
      list[i].classList.add(class_list[j]);
  }
    
  };
  return (list);
};

// Ajout d'un attribut à une liste d'élément:

// cette fonction accroche une liste d'enfant à une liste correspondante de parents
function append_children_list(list_child = [], list_parent = []) {
  for (i = 0; i < Math.min(list_child.length, list_parent.length); i++) {
    list_parent[i].appendChild(list_child[i]);
  };
};


// cette fonction accroche une liste d'enfant à un unique parent
function append_children_el(list_child = [], el) {
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
if (section2){
  section2.classList.add("bg", theme.bg_color0)
}

var text_visible = false
// console.log('text_visible au départ ' + String(text_visible))

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
let tl6;
tl6 = new TimelineMax()

// On ajoute l'Enregistreur d'événement à l'objet window ici !! 
// ATTENTION: l'événement de souris 'wheel' ne s'attage pas à un élément, 'mousewheel' oui 'but is deprecated'.
if (text_visible == false) {
  text_visible = true;
  for (i = 0; i < section2.children.length; i++) {
    const child = section2.children[i];
    // console.log(section2.children[i]);
    // console.log(child.className);
    //ANIMATION SCROLLTRIGGER: fonction qui fait apparaître les éléments un par un 
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
  };
}
else 
{
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
