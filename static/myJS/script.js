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
// console.log('color0:%s',theme.color0)
// console.log('color1:%s',theme.color1)
// console.log('color2:%s',theme.color2)

/** ==== CLASSE DE STYLE POUR LES BOUTONS ==========
 *  ==== theme_btn est importée de notre module ====
 * ===== THEME COLOR ===============================*/
let theme_btn;
theme_btn = theme.theme_btn

/** ATTENTION il faut redéfinir la variable IMG_BANNIERE pour chaque
 * templates dont l'adresse n'est pas root, ici on est dans .../common/
 * donc il faut remonter d'un dossier pour revenir à la racine puisse 
 * aller dans /static/ ces erreurs de chemin sont empoisonnantes... */
let prefix;

prefix = '../'

let IMG_BANNIERE_0, IMG_BANNIERE_1, IMG_BANNIERE_2;
IMG_BANNIERE_0 = prefix +'static/img/banniere.svg'
IMG_BANNIERE_1 = prefix + 'static/img/banniere1.svg'
IMG_BANNIERE_2 = prefix + 'static/img/banniere2.svg'
theme.img_banniere.src = IMG_BANNIERE_0

let fond_div;
theme.IMG_BANDE_FILE = prefix + theme.IMG_BANDE_FILE
theme.URL_BANDE = theme.format_URL(prefix + theme.IMG_BANDE_FILE) 
console.log('script.js theme.URL_BANDE =>'+theme.URL_BANDE)
fond_div = document.querySelector('#fond_div')  
fond_div.style.backgroundImage = theme.URL_BANDE 

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
let portail, h1_element,test;
portail = document.querySelector('#portail')
if (portail){portail.remove()};
let btn_preview;
btn_preview = document.querySelector('#preview')
if(btn_preview){btn_preview.innerText = 'retour au portail du site'
btn_preview.setAttribute('href',"javascript:window.location=document.referrer")}
//document.referrer permet de revenir en arrière et de raffraichir la page,
//c'est mieux que le simple history.back() qui n'est qu'un retour statique à
//partir de l'historique.
for (i=0;i<theme.h1_list.length; i++){test = theme.h1_list[i]; console.log(test); if(test.innerText.indexOf('Portail')!=-1){console.log(true+" "+"contient portail"); theme.h1_list = [Array.from(theme.h1_list).pop()]}}; 

add_class_to_element_list(theme.h1_list,theme.class_list_h1)

add_class_to_element_list(theme.h2_list,theme.class_list_h2)
add_class_to_element_list(theme.h3_list,theme.class_list_h3.concat('pb-3'))
add_class_to_element_list(theme.h4_list,theme.class_list_h4)
add_class_to_element_list(theme.h5_list,theme.class_list_h5)
add_class_to_element_list(theme.p_list, theme.class_list_p.concat(['pt-5','pb-3']))
/** =======================================================
 * Tentative pour insérer des tags dans un texte brut pour
 * obtenir un texte formaté html
 * =========================================================*/

/**========================================
 * ======== BACKGROUND IMAGE ==============
 * ========================================
*/
let slide_preview;
slide_preview = document.querySelector('#slide_preview');
slide_preview.style.backgroundImage = theme.URL_BACKGROUND;
slide_preview.style.backgroundSize = "contain";
slide_preview.style.backgroundRepeat = "repeat";

/** ==============================
 * Ajout des ombres aux images ***
 * ===============================
 */
let img_list; 
img_list = document.querySelectorAll('img')
for (var i = 0; i < img_list.length; i++ )
{
    if (img_list[i].getAttribute('id','img_banniere'))
    {
      //je supprime la box-shadow de la banniere
      img_list[i].classList.add('rounded','border',theme.border_color1) 
    } 
    else
    { //toutes les autres img de la page ont une box shadow
      img_list[i].classList.add('rounded','border',theme.border_color1, theme.mybox_color1)
    }
    
}



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
    else { body.scrollTop = 0;btnbtt.classList.remove('active'); }    
    
    
  });
};

let btn_signup;
btn_signup = document.querySelector('#btn_signup')
if(btn_signup)
{
    theme.add_class_to_element_list([btn_signup],theme.class_color_theme);
}

/** =========================================================
 *          ANIMATION TITRE BIENVENUE SUR MON BLOG
 * ==========================================================
 * code pour créer un effet sur le titre de la page d'accueil
 *"Bienvenue sur mon" qui apparaît lettre par lettre 
*/
const main_title = document.getElementById("mytitle1");
main_title.classList.add('bg','bg-cyan-200','my-2')
theme.title_animation(main_title);

//creation d'un element bootstrap badge pour insérer
// le txt "BLOG TECH" à la suite de l'animation "Bienvenue...""
// NB: le badge est finalement devenu un bouton pour avoir la 
// responsiveness
let badge_container = document.querySelector('#badge');
badge_container.classList.add('row','justify-content-center');
let badge = document.createElement('span');
badge.innerHTML = "BLOG-TECH";
// On crée deux listes de classe distinctes pour le théme et pour ce qui 
// est spécifique à ce bouton en particulier.
let class_badge_position;
class_badge_position = ['btn-lg-auto','mb-5', 'disabled']
theme.add_class_to_element_list([badge],class_badge_position.concat(theme.class_color_theme))


badge.classList.add('btn', 'fs-2','fw-bold');
badge_container.appendChild(badge);
// console.log(badge_container);

//création de deux boites à mettre cote a cote de l'image pour pouvoir régler la largeur du fond...
//for the animation of my Title I call a setInterval function that repeats the function onTick() 
//each 300ms or so
let char = 0;
// let timer = setInterval(Animations, 50);
//defining timelineMax objects
//tl is for the title's animation
let tl_title;
// tl_title = new TimelineMax();
// tl_title.from(main_title,1,{left:100});
let tl;
tl = new TimelineMax({delay:1});
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
const btn_group = document.querySelector('#btn_group')
// console.log(dflexAll)
// Pour l'image HSV j'assigne une classe 'invisible'
// et je la supprime plus loin grâce la fonction delay_x() définie plus bas.
const main_img = document.querySelector('#main_image');
//IMG.classList.add('invisible');
// selection de la légende de la photo
const my_legend = document.querySelector('#subtitle');
my_legend.classList.add("op-0",'col-sm-auto');
let carousel_name;
carousel_name = document.querySelector('#carousel_name')
theme.add_class_to_element_list([carousel_name],['bg','bg-cyan-800','rounded','text-cyan-200','p-2','mt-5']);
let carousel_img_list;
carousel_img_list = document.querySelectorAll('.carousel-item')
console.log(carousel_img_list)
add_class_to_element_list(carousel_img_list,['my-3'])

function scrollTrig(el_list, container="#container", start="",
  end="",duration=1,markers=true)
  {
    for (i = 0; i < el_list.length; i++) 
    {
    const child = el_list[i];
    gsap.fromTo
    (child,
         {opacity: 0},
         {
            opacity: 1,
            scrollTrigger:
            {
                trigger: child,
                container: container,
                start: start,
                end: end,
                markers: markers, //{ fontSize: "2rem" },
                scrub: true,
                // toggleClass: "op-0",
                // toggleActions: 'play, none, none, restart',
                //            onenter onLeave  onEnterback   onLeaveBack
                // onToggle: self => console.log(child.className),
                // onEnterBack: self => child.classList.add(togclass),
                // onLeaveback: () => child.classList.add(togclass),
                //pinSpacing: false,
                //pin: true          
                // onEnter: child.classList.add('invisible'),
                // onLeaveBack: child.classList.remove('invisible'),  
              },
          }
      );
    };
  }

let children_list;
children_list = []
for (i=1; i<=number_of_block; i++)
{
    let block_div_i, children_list_i;
    block_div_i = document.querySelector('#block_div' + i)  
    children_list_i = Array.from(block_div_i.children)
    console.log("children_list_"+i,children_list_i)
    console.log("block div "+i, block_div_i)
    children_list = children_list.concat(children_list_i)
}
console.log("children_list = ", children_list)
scrollTrig(children_list, "#section2", "-400 -800", "-475 50%", 1, false);

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
// tl.fromTo(main_container, 1, { opacity: 0 }, { opacity: 1 }).fromTo(main_container, 1, { height: "0%" }, { height: "100%", ease: Bounce }, "-=1")
      // here i want to delay a bit the animation on the img_container
    //setTimeout(function(){
//definition of onTick which is the function of setInterval )eabove which is called repeatedly 
//until every span of my text "Bienvenue sur mon" has appeared
// ATTENTION: le coeur de la fonction est dans le else où chaque span est affiché
/**  ============== Animation de l'image evenement 'mouseover' =====================
* une simple animation au passage de la souris: l'ombre de l'image s'affiche
* ================= syntaxe de la propriété CSS box-shadow:=========================
*          offset-x | offset-y | blur-radius | spread-radius | color 
* box-shadow: 2px        2px         2px           1px           rgba(0, 0, 0, 0.2);
====================================================================================*/

// img_container.addEventListener('mouseover',function(){
// TweenMax.fromTo(img_container,.7,{boxShadow: "(5px 5px 2px rgba(50, 25, 25, 1)"},{boxShadow: "20px 2px 2px 1px rgba(20, 250, 0, 1)"});
// })

// cette fonction supprime une classe sur l'élément choisi avec un délai particulier pour l
function delay_x(element_x, className, dtime) {
  setTimeout(function () { element_x.classList.remove(className) }, dtime);
};
function removeClassOnDelay(el_list,className,dtime)
{
    for(i=0; i<el_list.length; i++)
    {
        delay_x(el_list[i], "op-0", 1);
    }
}




/*===============================================================================
*========== Création des boutons animés de l'image centrale:=====================
*================================================================================
*/
let btn_list1;
let btn_list2;
let class_btn_position;
let class_div;


var div_list1 = create_Taglist('div', 4); //par défaut création de 4 élément 'div'
var div_list2 = create_Taglist('div', 4);
btn_list1 = create_Taglist('button', 4);
btn_list2 = create_Taglist('button', 4);
const btn_list = btn_list1.concat(btn_list2)
class_btn_position = ["btn","btn-lg-auto","myZ-index-3", "op-1", "text-center", "mt-2", "responsive", 'bg', 'bg-primary', 'text-cyan', 'position-relative']
setAttribute_to_el_list(btn_list, 'type', 'button')
class_div = ["col-lg-auto", "mx-1", "position-relative"]
// ** Création d'un message d'alerte si l'utilisateur n'est pas connecté **
const auth_alert = document.createElement("div");
auth_alert.classList.add("alert","alert-"+theme.color1,"position-absolute","abs-width-22")
auth_alert.setAttribute('role','alert');
auth_alert.style.zIndex = 3;
auth_alert.textContent = "Il faut être connecté pour lire les articles"

// ** Bouton close pour fermer la fenêtre d'alerte
const close_btn = document.createElement('button');
close_btn.classList.add("mybtn-close","position-relative","off-t-1","off-r-1");// il y a aussi "btn-close-white"
add_class_to_element_list([close_btn],theme.class_color_theme)
close_btn.setAttribute("data-bs-dismiss","alert");
close_btn.setAttribute("aria-label","Close");


const div_link1 = document.createElement('div')
const div_link2 = document.createElement('div')
const redirect_link1 = document.createElement("a");
const redirect_link2 = document.createElement("a");

redirect_link1.style.zIndex = 3;
redirect_link1.textContent = "Cliquez ici pour vous inscrire"
redirect_link1.classList.add(theme.mybadge_color1,"bg",'bg-primary', "text-decoration-none","border", theme.border_color1)
redirect_link1.setAttribute('href','/signup');
redirect_link2.style.zIndex = 3;
redirect_link2.textContent = "ou ici pour vous connecter"
redirect_link2.classList.add(theme.mybadge_color1, "bg",'bg-primary',"text-decoration-none", "border",theme.border_color1)
redirect_link2.setAttribute('href','/login');

//ajout des classes sur les différents éléments:
let class_d_flex_main;
let class_btn_group;
class_d_flex_main = ['d-flex', 'justify-content-center', 'op-0']
add_class_to_element_list([dflex],class_d_flex_main)
class_btn_group = ['btn-group', 'op-0']
btn_group.setAttribute('role', 'group')
add_class_to_element_list([btn_group],class_btn_group)
let class_img_container;
class_img_container = ["d-flex", "justify-content-center", "rounded", "op-0"]
add_class_to_element_list([img_container],class_img_container)
let class_main_container;
class_main_container = ["w-100", "justify-content-center"]
add_class_to_element_list([main_container],class_main_container)

let class_div_main_title;


// ajout des classes sur les boutons et les div
add_class_to_element_list(btn_list, class_btn_position);
add_class_to_element_list(div_list1.concat(div_list2), class_div);

let bandeImage,bande_name;
bandeImage = [];
for (i=0; i< 1; i++)
{
       bande_name = String("../static/img/bande" + i + ".svg") 
       bandeImage.push('url('+'"'+ bande_name + '"'+')');
};

let backgrounds, background, background_name;

backgrounds = [];

for (i=0; i<4;i++)
    {   background_name = String("../static/img/background" + i + ".svg") 
       backgrounds.push('url('+'"'+ background_name + '"'+')');
    }
console.log(backgrounds)
function get_background_number () {return backgrounds.indexOf(slide_preview.style.backgroundImage);}
console.log (get_background_number())
let div_legend;
div_legend = document.querySelector('#div_legend');
div_legend.classList.add('row','justify-content-center','my-2');

/** =========== BOUTON CHANGE STYLE: ==============
 * Creation d'un bouton pour changer les couleurs du site
 * par clique successif on passe du bleu au vert au rouge etc.
 * le bouton fonctionne mais pour l'instant on n'en a pas 
 * l'utilité, il faut dire que c'est un peu moche...
 * ================================================

let btn_style, class_btn_style, div_btn_style, div_legend;
div_btn_style = document.createElement('div')
div_btn_style.classList.add('text-center')
append_children_el([div_btn_style],div_legend);
class_btn_style = ['col-sm-auto','btn','text-cyan','bg','bg-primary'
    ,'my-2','op-0'];
btn_style = document.createElement('button');
btn_style.textContent = 'Changer le style';
add_class_to_element_list([btn_style], class_btn_style);
append_children_el([btn_style],div_btn_style);
*/
// DOUBLON? add_class_to_element_list(btn_list, class_btn_position);

/** Avant d'ajouter la fonctionnalité au bouton btn_style on met à jour
 * la tag_list du module color_theme.js avec les nouveaux éléments que l'on
 * a créer.*/
/**
theme.tag_list = Array.from(theme.tag_list);
theme.tag_list.push(btn_list)
theme.tag_list.push([badge,btn_style]);


btn_style.addEventListener('click',function()
    {   console.log("current:",slide_preview.style.backgroundImage);
        switch(background = get_background_number())
        { // au départ le fond est une photo et les boutons ont déjà un style
        // c'est le cas -1 si on veut...
            case 0: // 1er clik: fond bleu

                slide_preview.style.backgroundImage = backgrounds[background+1];
                // on change juste l'image de fond le theme reste dans des tons
                // bleus.
                console.log("case 0: background change to background1.svg, URL"
                    + slide_preview.style.backgroundImage);
                break;
            case 1: // 2e clik: fond vert
                console.log("case 1 previous URL was:"+ slide_preview.style.backgroundImage); 
                slide_preview.style.backgroundImage = backgrounds[background+1]//"url('../static/img/cybersecurite.jpg')";
                console.log("case1 NEW URL:" + slide_preview.style.backgroundImage);
                theme.replace_style(theme.tag_list, theme.style0,theme.style1);
                console.log("case2 NEW URL:" + slide_preview.style.backgroundImage);
                theme.img_banniere.src =  IMG_BANNIERE_1;
                break;
            case 2: //colorred
                slide_preview.style.backgroundImage = backgrounds[background+1]
                theme.replace_style(theme.tag_list, theme.style1, theme.style2)
                theme.img_banniere.src =  IMG_BANNIERE_2;
                break;
            case backgrounds.length - 1:     
                console.log('final case:'+background.length+"-1")
                slide_preview.style.backgroundImage = backgrounds[0]
                theme.replace_style(theme.tag_list, theme.style2, theme.style0)
                theme.img_banniere.src = IMG_BANNIERE_0;
        }
    });


*/





// theme.theme_primary = true;
// btn_style.addEventListener('click',function()
// { if(theme_btn == theme.btn_box)
//   {
//     theme_btn = theme.btn_box_secondary
//   }
//   else
//   {
//     theme_btn = theme.btn_box
//  
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
// console.log('color0:%s',theme.color0)
// console.log('color1:%s',theme.color1)
// console.log('color2:%s',theme.color2)
//on ajoute des ID pour les boutons en vue des animations:
function setAttribute_to_el_list(list,attribute,value)
{
for (i=0; i<list.length; i++)
{
  list[i].setAttribute(attribute,value)
};

}
setAttribute_to_el_list(btn_list, 'id', 'all_btns')
/*================================================
* =======CUSTOMIZATION DES BOUTTONS et ANIMATIONS:
* ================================================
*/
// la liste des noms à assigner à nos  boutons:
let button_names;
button_names = ['nouveautés', 'info-geek', 'tutos', 'échecs', 'faire un don',
  'vos réactions', 'contactez-moi', 'téléchargements'];

/** ======= FONCTION CUSTOMIZE ============
 * les boutons de la d-flex1:
 * */
function Animations() { delay_x(dflex,"op-0", 1);
    
        tl2.fromTo(main_container, 1, { width: "0%" }, { width: "100%", ease: Bounce }, "-=1")
.fromTo(badge, 3, { width: "0%" }, { width: "30%" }).fromTo(badge, 3, { opacity: 0 }, { opacity: 1 }, "-=3")
        .to(img_container, 1,  { opacity: 1,  scrollTrigger:
            {
                trigger: img_container,
                container: img_container,
                start: "top 50%",
                end: "top 30%",
                // markers: true, //{ fontSize: "2rem" },
                scrub: true,
                // toggleClass: "op-0",
                // toggleActions: 'play, none, none, restart',
                //            onenter onLeave  onEnterback   onLeaveBack
                // onToggle: self => console.log(child.className),
                // onEnterBack: self => child.classList.add(togclass),
                // onLeaveback: () => child.classList.add(togclass),
                //pinSpacing: false,
                //pin: true          
                // onEnter: child.classList.add('invisible'),
                // onLeaveBack: child.classList.remove('invisible'),  
          }})
        .fromTo(img_container, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut }, "-=1")
        .fromTo(img_container, 1, { width: "0%" }, { width: "50%", ease: Power2.easeInOut }, "-=1");
    // delay_x ci-dessous va supprimer la class indiquée pour laisser apparaitre les éléments en question
    //delay_x(IMG, "invisible", 1) devenu inutile quand j'ai réussi à faire disparaitre le conteneur.
    removeClassOnDelay([img_container,my_legend, btn_group], "op-0", 1);
    
    //},300);
    // animation de la légende de l'image
   /** 
    tl3.fromTo([my_legend,btn_style], { opacity: 0, y:"1000px"}, 
        { 
                       opacity: 1,
            y:"0px",
            scrollTrigger:
            {
                trigger: "#demo",
                container: my_legend,
                start: "top 10%",
                end: "bottom 10%",
                // markers: true,
                scrub : true,
                duration: 10,
            }
 }, 10
    );
    removeClassOnDelay([my_legend, btn_style], "op-0",5);

*/
};
Animations();


function customize() 
{let btn_news;
let btn_chess;
  for (i = 0; i < 4; i++) 
  {
    
    let btni1;
    btni1 = btn_list1[i] // on associe à chaque bouton i de la liste 1 le nom btni1 
    btni1.textContent = button_names[i]   //nom automatique: 'bouton'+String(i+1);
    if (button_names[i] == "nouveautés")
      { 
        btn_news = btni1 ;        
      };
    if(button_names[i] == "échecs")
    {
      btn_chess = btni1;
    };
    // pour jouer sur la couleur (mais pas encore au point):
    //btni1.style.backgroundColor = 'rgba(' + 255 + ',' + 0 + ',' + random(400) + ',' + 1 + ')';
    if (user_authenticated)
    {
      btn_news.setAttribute('onclick','location.href="/articles/index"')
      btni1.classList.add("disable")
      if (btn_chess)
      {
      btn_chess.setAttribute('onclick','location.href="/chess/"')
      };
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
      
      btni2.setAttribute('onclick','location.href="/common/contact"');
    };
    // pour jouer sur la couleur (mais pas encore au point):
    //btni2.style.backgroundColor = 'rgba(' + 255 + ',' + 0 + ',' + random(400) + ',' + 1 + ')';
    //Les Animations sur les boutons:
    TweenMax.fromTo(btn_list1, 3, { x: 0, rotation: 0 }, { x: "5vw", rotation: 360})
    TweenMax.fromTo(btn_list2, 3, { x: 0, rotation: 0 }, { x: "20vw", rotation: 360})
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
  append_children_el(div_list1, btn_group);
  append_children_el(div_list2, btn_group);
  append_children_list(btn_list1, div_list1);
  append_children_list(btn_list2, div_list2);


};

//~ ANIMATION MOUSEOVER SUR LES BOUTONS ~~
addAnimation(btn_list, 0);
// Animation sur le bouton nouveauté:
TweenMax.fromTo(btn_list1[0], 1, { rotation: 0, backgroundColor: "" },
  {
    rotation: 360,
    backgroundColor: theme.color1,
    borderColor: "cyan",
    color : theme.color1
  }).delay(6);
let angle1, angle2, delay;

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
const text_container = document.getElementById('text-container')
text_container.classList.add('text-container');
// if (section2){
//   section2.classList.add("bg", theme.bg_color0)
// }

var text_visible = false
// console.log('text_visible au départ ' + String(text_visible))

// création d'une fonction rendant invisible chaque élément de la text_container
function mkInvisible(el_list) {
  for (i = 0; i < el_list.length; i++) {
    el_list[i].classList.add('op-0');
  };
};

// On aura besoin d'un effet d'animation pour faire apparaitre les éléments masqués:
if (tl3.isActive()) { alert('timeline is ACTIVE') };

gsap.registerPlugin(ScrollTrigger); // it is ScrollTrigger here and scrollTrigger in the gsap.to()
let tl6;
tl6 = new TimelineMax()

// On ajoute l'Enregistreur d'événement à l'objet window ici !! 
//
// ATTENTION: l'événement de souris 'wheel' ne s'attage pas à un élément, 'mousewheel' oui 'but is deprecated'.

  // do stuff here.

  // il est mieux de travailler avec des array plutot que des object_list
  // pour pouvoir utiliser les fonctions sur les array comme .pop(), .splice() etc.
  // list.pop() dégage le dernier élément de la liste, la list est modifiée ipso facto
  // ici on dégage 4 éléments indésirables de la liste de section.children,
  // pour pouvoir créer notre animation sur les seuls objets qui nous intéressent.
  // les elements en bas de page font chier il faut créer des scroll trigger
  // avec des scrollstart et des startpoint differents....FAIT VRAIMENT CHIER!!!
//ANIMATION SCROLLTRIGGER: fonction qui fait apparaître les éléments un par un 
// à chaque cran de la molette de la souris (et pas tout en même temps)
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
