/** ============= THEME COLOR ===================
 * l'interet de ce fichier est de pouvoir =======
 * facilement changer la couleur des styles =====
 * en jouant uniquement sur la valeur de 3 ======
 * ou 4 variables, sans avoir à changer =========
 * tout à la main dans les différents gabbartis.=
 * ==============================================
 *
 */


function format_URL(mystring)
{
    return 'url('+ '"' + mystring + '"' + ')'

}
let IMAGE_NAME = 'background0.svg'
let MAIN_IMG_FILE = String("../static/img/"+ IMAGE_NAME) 
let URL_BACKGROUND = 'url('+'"'+ MAIN_IMG_FILE + '"'+')';   
let style0, style1, style2;

let img_banniere;
img_banniere = document.querySelector('#img_banniere')

let IMG_BANNIERE, IMG_BANNIERE_2;
IMG_BANNIERE = 'static/img/banniere.svg'
IMG_BANNIERE_2 = 'static/img/banniere2.svg'

let IMG_BANDE_PATH, IMG_BANDE_NAME, IMG_BANDE_FILE, URL_BANDE;
IMG_BANDE_NAME = 'bande0.svg'
IMG_BANDE_PATH = 'static/img/'
IMG_BANDE_FILE = IMG_BANDE_PATH + IMG_BANDE_NAME 
URL_BANDE = 'url('+ '"' + IMG_BANDE_FILE + '"' + ')';
console.log('Color_theme => URL_BANDE:'+URL_BANDE)

const blue = "blue";
const indigo = "indigo";
const purple = "purple";
const pink = "pink";
const red = "red";
const yellow = "yellow";
const teal = "teal";
const cyan = "cyan";
const gray_drk = "gray_drk";
const primary = "primary";
const secondary = "secondary";
const success = "success";
const info = "info";
const warning = "warning";
const danger = "danger";
const dark = "dark";
const orange = "orange";
const light = "light";
const white = "white";
const green = "green";
const gray  = "gray"; // le gris est une nuance obtenue à partir du blanc ici.

/**=============================== 
 * récupérer des variables CSS 
 * ==============================*/
var r = document.querySelector(':root');

// Create a function to get a variable value
function CSS_get(css_var='--blue') {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  return(rs.getPropertyValue(css_var));
}

// Create a function for setting a variable value
function CSS_set(css_var='--blue',value) {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}

/**=============================CHOIX DES COULEURS PRINCIPALES DU THEME===================
 * utiliser de preference:
 * color0 pour le background
 * color1 pour le theme principale de text-color(tous les tags <h>, les borders)
 * color2 pour les boutons
 * color3 pas encore implémentée */
var color0 = white;
var nuancebg = "300";
var color1 = cyan;
var nuance1 = "500";
var color2 = blue;
var nuance2 = "500"
var color1_CSS = CSS_get('--bs-'+ color1 + "-" + nuance1)
var color3 = "#0c3762";



const border = "border";
const border_color0 = "border-" + color0;

const border_color1 = "border-" + color1;
const border_color1_100 = "border-" + color1 + "-100"
const border_color1_200 = "border-" + color1 + "-200"
const border_color1_300 = "border-" + color1 + "-300"
const border_color1_400 = "border-" + color1 + "-400"
const border_color1_500 = "border-" + color1 + "-500"
const border_color1_600 = "border-" + color1 + "-600"
const border_color1_700 = "border-" + color1 + "-700"
const border_color1_800 = "border-" + color1 + "-800"
const border_color1_900 = "border-" + color1 + "-900"
const border_color1_nuance1 = "border-"+ color1+ "-" + nuance1

const border_color2 = "border-" + color2;
const border_color2_100 = "border-" + color2 + "-100"
const border_color2_200 = "border-" + color2 + "-200"
const border_color2_300 = "border-" + color2 + "-300"
const border_color2_400 = "border-" + color2 + "-400"
const border_color2_500 = "border-" + color2 + "-500"
const border_color2_600 = "border-" + color2 + "-600"
const border_color2_700 = "border-" + color2 + "-700"
const border_color2_800 = "border-" + color2 + "-800"
const border_color2_900 = "border-" + color2 + "-900"
const border_color1_nuance2 = "border"+ color2+ "-" + nuance2

const mybox = "mybox";
const mybox_color0 = "mybox-" + color0;
const mybox_color1 = "mybox-" + color1;
const mybox_color2 = "mybox-" + color2;

const mybadge = "mybadge";
const mybadge_color0 = "mybadge-" + color0;
const mybadge_color1 = "mybadge-" + color1;
const mybadge_color2 = "mybadge-" + color2;

const btn_box = "btn-myhover-box";
const btn_box_color0 = "btn-myhover-box-" + color0;
const btn_box_color1 = "btn-myhover-box-" + color1;
const btn_box_color2 = "btn-myhover-box-" + color2;
const btn_box_secondary = "btn-myhover-secondary-box";
const btn_box_tertiary = btn_box + "-tertiary";

/**=================================================== 
 *== COULEUR DU BACKGROUND PRINCIPAL: BG_COLOR0 ======
 =====================================================
 */

let bg_color0;
bg_color0 = "bg-" + color0


const bg_color_nuancebg = "bg-" + color0 + "-" + nuancebg;
const bg_color0_100 = "bg-" + color0 + "-100";
const bg_color0_200 = "bg-" + color0 + "-200";
const bg_color0_300 = "bg-" + color0 + "-300";
const bg_color0_400 = "bg-" + color0 + "-400";
const bg_color0_500 = "bg-" + color0 + "-500";
const bg_color0_600 = "bg-" + color0 + "-600";
const bg_color0_700 = "bg-" + color0 + "-700";
const bg_color0_800 = "bg-" + color0 + "-800";
const bg_color0_900 = "bg-" + color0 + "-900";

// on ne veut pas d'un fond blanc mais une nuance de gris, pour du blanc il suffit de 
// ne rien définir du tout !
if(color0 == "gray"){
    bg_color0 = bg_color0_600
}


/** =====================
 *  CONTRASTE POUR COLOR1
 * ======================
 **/
const color1_nuance1 = color1 + "-" + "nuance1"
const color1_100 = color1 + "-100"
const color1_200 = color1 + "-200"
const color1_300 = color1 + "-300"
const color1_400 = color1 + "-400"
const color1_500 = color1 + "-500"
const color1_600 = color1 + "-600"
const color1_700 = color1 + "-700"
const color1_800 = color1 + "-800"
const color1_900 = color1 + "-900"

/** =====================
 *  CONTRASTE POUR COLOR1
 * ======================
 **/
const color2_nuance2 = color2 + "-" + nuance2
const color2_100 = color2 + "-100"
const color2_200 = color2 + "-200"
const color2_300 = color2 + "-300"
const color2_400 = color2 + "-400"
const color2_500 = color2 + "-500"
const color2_600 = color2 + "-600"
const color2_700 = color2 + "-700"
const color2_800 = color2 + "-800"
const color2_900 = color2 + "-900"

/** =========== VARIABLES TEXT-COLOR ================ */

const text_color0 = "text-" + color0;
const text_color0_nuancebg = "text-"+ color0 + "-" + nuancebg

const text_color1 = "text-" + color1;
const text_color1_nuance1 = "text-" + color1 + "-" + nuance1
const text_color1_100 = "text-" + color1 + "-100"
const text_color1_200 = "text-" + color1 + "-200"
const text_color1_300 = "text-" + color1 + "-300"
const text_color1_400 = "text-" + color1 + "-400";
const text_color1_500 = "text-" + color1 + "-500";
const text_color1_600 = "text-" + color1 + "-600";
const text_color1_700 = "text-" + color1 + "-700";
const text_color1_800 = "text-" + color1 + "-800";
const text_color1_900 = "text-" + color1 + "-900";

const text_color2 = "text-" + color2;
const text_color2_nuance2 = "text-" + color2 + "-" + nuance2
const text_color2_100 = "text-" + color2 + "-100"
const text_color2_200 = "text-" + color2 + "-200"
const text_color2_300 = "text-" + color2 + "-300"
const text_color2_400 = "text-" + color2 + "-400";
const text_color2_500 = "text-" + color2 + "-500";
const text_color2_600 = "text-" + color2 + "-600";
const text_color2_700 = "text-" + color2 + "-700";
const text_color2_800 = "text-" + color2 + "-800";
const text_color2_900 = "text-" + color2 + "-900";

/** =========== VARIABLES GRADIENT DE BCKGD ================ */
const bg_gradient1 = "bg-mygradient1";
const bg_gradient2 = "bg-mygradient2";

/** =========== VARIABLES DES COULEURS DE BCKGD ================ */
const bg_color1 = "bg-" + color1
const bg_color2 = "bg-" + color2
const bg_primary = "bg-" + "primary"
const bg_color2_nuancebg = "bg-" + color2 + "-" + nuancebg;
const bg_color2_100 = "bg-" + color2 + "-100";
const bg_color2_200 = "bg-" + color2 + "-200";
const bg_color2_300 = "bg-" + color2 + "-300";
const bg_color2_400 = "bg-" + color2 + "-400";
const bg_color2_500 = "bg-" + color2 + "-500";
const bg_color2_600 = "bg-" + color2 + "-600";

const bg_color1_nuancebg = "bg-" + color1 + "-" + nuancebg;
const bg_color1_100 = "bg-" + color1 + "-100";
const bg_color1_200 = "bg-" + color1 + "-200";
const bg_color1_300 = "bg-" + color1 + "-300";
const bg_color1_400 = "bg-" + color1 + "-400";
const bg_color1_500 = "bg-" + color1 + "-500";
const bg_color1_600 = "bg-" + color1 + "-600";
const bg_color1_700 = "bg-" + color1 + "-700";
const bg_color1_800 = "bg-" + color1 + "-800";
const bg_color1_900 = "bg-" + color1 + "-900";

/**  ================= DEFINITION DE LA COULEUR DES BOUTONS =================
 * changer ici le style des boutons en passant par ex. secondary ============
 * ==========================================================================
*/

// let 
// theme_btn;
// if ((color1 == 'orange' && color0 == dark)) {
//     theme_btn = btn_box;
// } else {
//     theme_btn = btn_box

// };

//NB: btn_box = 'btn-myhover-box'
let class_color_theme;
class_color_theme = [btn_box, 'rounded','bg','bg-primary', 'text-cyan']

/** ================== STYLE POUR LE PORTAIL DU SITE ===================== */
let portail;
portail = document.querySelector('#portail')
let btn_list;
let i;


/**============================
 * Fonctions simples à exporter
 * ============================
 */

// premiers essais de script Java avec fonctions simple
function changeColorElement(el,color) {

    el.style.color = color;
  
  };

function changeColorElementList(el_list,color)
{
    for(i = 0; i < el_list.length; i++)
    {
        changeColorElement(el_list[i],color);
    }
}

/** fonction d'animation de titre
 * ==============================
 */
 function title_animation(title_element,sep="",speed=50)
 { let i;
   let strTxt, splitTxt;
   
        strTxt = title_element.textContent;
     console.log("le titre à animer:"+title_element.textContent)
        splitTxt = strTxt.split(sep);
     console.log(splitTxt)
        title_element.textContent = "";
        for (i = 0; i < splitTxt.length; i++) 
        {
            if(sep == "")
        {
            title_element.innerHTML += "<span>" + splitTxt[i] + "</span>"

         console.log("le titre dans le span, inner_html:"+title_element.innerHTML);
        } else {
            title_element.innerHTML += "<span>" + splitTxt[i] + "</span>"+ " "

         console.log("le titre dans le span deuxieme condition (ELSE), inner_html:"+title_element.innerHTML);
        };
        };
        const span_text = title_element.querySelectorAll('span')
        for (i = 0; i < span_text.length; i++) {
            const span = span_text[i]
            span.classList.add('op-0')
        };  
        let timer; 
        let char;
        function onTick() 
        {
        const span = title_element.querySelectorAll('span')[char];
        setTimeout(function () { span.classList.replace('op-0', 'op-100') }, 100);
        char++;
        if (char == splitTxt.length)
        {
            clearInterval(timer);
            timer = null
        }
        
        }
        char = 0
        timer = setInterval(onTick, speed)
    }

/**================================================
 *  ============ Fonction Scroll-Trigger ==========
 * ================================================
*/
function myScrollTrig(el_list)
{
    for(i=0; i< el_list.length; i++)
    {
        TweenMax.fromTo
        (
          el_list[i],
          {
            opacity: 0,
            x: (-1) ** (i + 1) * 300,
          },
          {
            x: (-1) ** (i + 1) * (-40),
            scrollTrigger:
            {
              trigger: el_list[i],
              container: "container",
              start: "top 60%",
              end: "300px 50%",
              //markers: {fontSize: "2rem"},
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

    }

}

function myScrollTrigOpacity(el_list)
{
    for(i=0; i< el_list.length; i++)
{
    TweenMax.fromTo
    (
      el_list[i],
      {
        opacity: 0,
      },
      {
        scrollTrigger:
            {
              trigger: el_list[i],
              container: "container",
              start: "top 60%",
              end: "300px 50%",
              //markers: {fontSize: "2rem"},
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
     );
    }
}



/** =====================================================================
 *  ===== basic for-loop function to add class style lists to elements===
 * */
let el_list;

function replace_classList_of_el_list(el_list, oldClass = [''], newClass = [''])
{ 
    let i, j;
    for (i = 0; i < el_list.length; i++) {
        for (j = 0; j < oldClass.length; j++) {
            el_list[i].classList.replace(oldClass[j], newClass[j]);
        }

    };
    return (el_list);
};

function add_class_to_element_list(el_list, class_list = ['btn', 'btn-dark']) {
    let i, j;
    for (i = 0; i < el_list.length; i++) {
        for (j = 0; j < class_list.length; j++) {
            el_list[i].classList.add(class_list[j]);
        }

    };
    return (el_list);
};

let navbar, nav_link;
nav_link = document.querySelectorAll('.nav-link')
navbar = document.querySelector('#id_navbar')

let logout;
logout = document.querySelector('#logout')
if (logout) {
    logout.classList.add(text_color1_400)
}



let footer = document.querySelector('footer')
footer.classList.add(text_color1,'bg-primary')

btn_list = document.querySelectorAll('.btn')

if (portail) {
    let img;
    img = document.querySelector('#banniere');
    console.log(img)
    portail.classList.add("display-4", text_color1_500, "text-center")
}

/**===============COULEUR BACKGROUND PRINCIPAL======================*/
const mybody = document.body
mybody.classList.add("bg", "bg-primary", bg_gradient2)

/**===============STYLE FAVICON======================*/
const favicon = document.querySelector('#favicon')
if (favicon) {
    favicon.classList.add('rounded', 'border', border_color1, "myZindex-3", mybox_color1)

}

/** ============== DECLARATION DES VARIABLES POUR LES TAGS ================ */
const h1_list = document.querySelectorAll('h1')
const h2_list = document.querySelectorAll('h2')
const h3_list = document.querySelectorAll('h3')
const h4_list = document.querySelectorAll('h4')
const h5_list = document.querySelectorAll('h5')
const p_list = document.querySelectorAll('p')
const a_list = document.querySelectorAll('a')
const img_list = document.querySelectorAll('img')
const button_list = document.querySelectorAll('button')
const label_list = document.querySelectorAll('label')
const span_list = document.querySelectorAll('span')
const tag_list = [h1_list, h2_list, h3_list, h4_list, h5_list, p_list, a_list,
    img_list, button_list, span_list, [navbar],[footer],[mybody]];
/** ========= ICI POUR CREER UNE FONCTION DE CHANGEMENT DE STYLE============*/
style0 = ['btn-myhover-box-cyan','bg-primary','mybox-cyan',"border-cyan", "text-cyan",'fw-bold']
style1 = ['btn-myhover-box-green','bg-secondary', 'mybox-green', 'border-tertiary','text-secondary_text','fw-bold']
style2 = ['btn-myhover-box-tertiary', 'bg-tertiary', 'mybox-tertiary', 'border-primary','text-cyan']

/**TODO faire une fonction replace or add, car on veut pouvoir ajouter
 * certaines class dans certains cas ...*/
function replace_style(el_list, style1,style2)
{       for (i=0; i<el_list.length; i++)
    {
        replace_classList_of_el_list(el_list[i], style1, style2);
    }
}

let theme_primary;
theme_primary = true;
console.log('theme primary:%s', theme_primary)

// if  (!theme_primary)
// {   
//     color0 = purple;
//     color1 = red;
//     color2 = indigo;
//     bg_color = dark;
// }
// else
// {
//     color0 = purple;
//     color1 = red;
//     color2 = indigo;
//     bg_color = dark;
// };

/**===============COULEUR DES TAGS ======================
 * 
 * ATTENTION: ne pas toucher à ces valeurs
 * il suffit de changer color1
 * on peut éventuellement vouloir assigner
 * certains titre à color2 ou color3 (cette dernière couleur n'est 
 * pas encore implémentée)
*/
var h1_color = text_color1_700
var h2_color = text_color1_800
var h3_color = text_color1_800
var h4_color = text_color1_800
var h5_color = text_color1_800
var p_color = text_color1_800
var a_color = text_color1
if (color0 == dark)
{
 p_color = text_color1
};
var img_color = text_color1

/** ============ CREATION DES CLASSLIST POUR NOS TAGS ==================== */


const class_list_h1 = ["display-4", "text-center", "fw-bold",
                      "rounded", h1_color,'col-sm-auto'];
const class_list_h2 = ["display-4","text-center", "rounded",
                      h2_color];
const class_list_h3 = ['col-sm-auto',"text-center", "font-weight-light", "mx-2",
                      "rounded", h3_color];
const class_list_h4 = ["display-4", 'col-sm-auto',"text-center",  "rounded",
                      h4_color];
const class_list_h5 = ['col-sm-auto', "text-center", "fw-bold", "rounded",
                      h5_color];
const class_list_p = ["lead", 'px-5', 'text-justify',
                     p_color,'fw-weight-normal'];
const class_list_img = ["display-2", "fw-bold", img_color,"rounded"];
const class_list_a = ["text-decoration-none", a_color];
const class_list_label = ["bg", 'bg-primary', 'rounded', "border",
'border-primary','text-cyan'];


/** ========== EXPORTATION DES VARIABLES DE COULEUR ========
 * RAPPEL:
 * color 0: couleur du fond principal
 * color 1: couleur principal pour les titres et les sous titres
 *          ainsi que pour la plupart des liens sur les boutons
 * color2: couleur complémentaire pour varier les effets
 */
export default
    {   r,
        MAIN_IMG_FILE, IMAGE_NAME, URL_BACKGROUND,
        IMG_BANDE_NAME, IMG_BANDE_PATH, URL_BANDE, IMG_BANDE_FILE,
        IMG_BANNIERE, IMG_BANNIERE_2, img_banniere, 
        blue, indigo, purple, pink, red, yellow, green,
        teal, cyan, gray, gray_drk, primary, secondary, success,
        warning, danger,
        info, light, dark, orange, white,
        
        color0, color1, color1_CSS, color2, color3,
        color1_100, color1_200, color1_300,
        color2_100, color2_200, color2_300,
        color1_400, color1_500, color1_600,
        color2_400, color2_500, color2_600,
        color1_700, color1_800, color1_900,
        color2_700, color2_800, color2_900,

        theme_primary,

        border, border_color0, 
        border_color1, border_color1_nuance1 ,
        border_color1_100, border_color1_200, border_color1_300,
        border_color1_400, border_color1_500, border_color1_600,
        border_color1_700, border_color1_800, border_color1_900,

        border_color2,
        border_color2_100, border_color2_200, border_color2_300,
        border_color2_400, border_color2_500, border_color2_600,
        border_color2_700, border_color2_800, border_color2_900,

        mybox, mybox_color0, mybox_color1, mybox_color2,

        mybadge, mybadge_color0, mybadge_color1, mybadge_color2,

        
        btn_box, btn_box_secondary, btn_box_tertiary, btn_box_color0,
        btn_box_color1, btn_box_color2,

        bg_gradient1, bg_gradient2,

        bg_color0,
        bg_color0_100, bg_color0_200, bg_color0_300, bg_color0_400, bg_color0_500,
        bg_color0_600, bg_color0_700, bg_color0_800, bg_color0_900,

        bg_color1,
        bg_color1_100, bg_color1_200, bg_color1_300, bg_color1_400,
        bg_color1_500, bg_color1_600,bg_color1_700,bg_color1_800, bg_color1_900,
        bg_color2, bg_color2_100, bg_color2_200, bg_color2_300, bg_color2_400,
        bg_color2_500, bg_color2_600,

        a_color, p_color, h1_color, h2_color, h3_color, h4_color, h5_color,

        text_color1, text_color1_nuance1,
        text_color1_100, text_color1_200, text_color1_300, text_color1_400,
        text_color1_500, text_color1_600, text_color1_700, text_color1_800, text_color1_900,

        text_color2,
        text_color2_100, text_color2_200, text_color2_300, text_color2_400,
        text_color2_500, text_color2_600, text_color2_700, text_color2_800, text_color2_900,

        tag_list, style0, style1, style2, replace_style,
        h1_list, h2_list, h3_list, h4_list, h5_list, p_list, img_list, a_list,
        label_list, button_list,

        class_list_h1, class_list_h2, class_list_h3, class_list_h4, class_list_h5,
        class_list_p, class_list_a, class_list_img, class_list_label,
        class_color_theme,
        format_URL, replace_classList_of_el_list, add_class_to_element_list, title_animation,
        myScrollTrig,myScrollTrigOpacity, changeColorElement, changeColorElementList,
    } 
