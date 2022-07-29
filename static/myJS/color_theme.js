/** ============= THEME COLOR ===================
 * l'interet de ce fichier est de pouvoir =======
 * facilement changer la couleur des styles =====
 * en jouant uniquement sur la valeur de 3 ======
 * ou 4 variables, sans avoir à changer =========
 * tout à la main dans les différents gabbartis.=
 * ==============================================
 */
const blue  = "#0d6efd";
const indigo= "indigo";
const purple= "purple";
const pink  = "pink";
const red = "red";
const yellow= "#ffc107";
const green = "#198754";
const teal  = "#20c997";
const cyan  = "#0dcaf0"; 
const gray  = "#6c757d";
const gray_drk = "#343a40";
const primary  = "#fd7e14";
const secondary= "#6c757d";
const success  = "#198754";
const info     = "info";
const warning  = "#ffc107";
const danger   = "#dc3545";
const light    = "#f8f9fa";
const dark     = "dark";
const orange = "orange";
const white = "white";


/**=============================CHOIX DES COULEURS PRINCIPALES DU THEME===================
 * utiliser de preference:
 * color0 pour le background
 * color1 pour le theme principale de text-color(tous les tags <h>, les borders)
 * color2 pour les boutons
 * color3 pas encore implémentée */

var color0 = dark;
var color1 = orange;
var color2 = red;
var color3 = dark;

const border = "border";
const border_color0 = "border-" + color0;
const border_color1 = "border-" + color1;
const border_color2 = "border-" + color2;
const border_color1_400 = "border-" + color1 + "-400"
const border_color2_400 = "border-" + color2 + "-400"
const border_color1_500 = "border-" + color1 + "-500"
const border_color2_500 = "border-" + color2 + "-500"
const border_color1_600 = "border-" + color1 + "-600"
const border_color2_600 = "border-" + color2 + "-600"

const mybox = "mybox";
const mybox_color0 = "mybox-" + color0;
const mybox_color1 = "mybox-" + color1;
const mybox_color2 = "mybox-" + color2;

const btn_box = "btn-myhover-box";
const btn_box_secondary = "btn-myhover-secondary-box";
const btn_box_tertiary = btn_box + "-tertiary";

/**=================================================== 
 *== COULEUR DU BACKGROUND PRINCIPAL: BG_COLOR0 ======
 =====================================================
 */

let bg_color0;
bg_color0 = "bg-" + color0

const bg_color0_100 = "bg-" + color0 + "-100";
const bg_color0_200 = "bg-" + color0 + "-200";
const bg_color0_300 = "bg-" + color0 + "-300";
const bg_color0_400 = "bg-" + color0 + "-400";
const bg_color0_500 = "bg-" + color0 + "-500";
const bg_color0_600 = "bg-" + color0 + "-600";
const bg_color0_700 = "bg-" + color0 + "-700";
const bg_color0_800 = "bg-" + color0 + "-800";
const bg_color0_900 = "bg-" + color0 + "-900";


/**  ================= DEFINITION DE LA COULEUR DES BOUTONS =================
 * changer ici le style des boutons en passant par ex. secondary ============
 * ==========================================================================
*/

let theme_btn;
if ((color1 == 'orange'&& color0 == dark))
{
    theme_btn = btn_box;
} else
{
    theme_btn = btn_box_secondary

};


/** =====================
 *  CONTRASTE POUR COLOR1
 * ======================
 **/

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

const text_color1 = "text-" + color1;
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

const bg_color2_100 = "bg-" + color2 + "-100";
const bg_color2_200 = "bg-" + color2 + "-200";
const bg_color2_300 = "bg-" + color2 + "-300";
const bg_color2_400 = "bg-" + color2 + "-400";
const bg_color2_500 = "bg-" + color2 + "-500";
const bg_color2_600 = "bg-" + color2 + "-600";

const bg_color1_100 = "bg-" + color1 + "-100";
const bg_color1_200 = "bg-" + color1 + "-200";
const bg_color1_300 = "bg-" + color1 + "-300";
const bg_color1_400 = "bg-" + color1 + "-400";
const bg_color1_500 = "bg-" + color1 + "-500";
const bg_color1_600 = "bg-" + color1 + "-600";

/** ================== STYLE POUR LE PORTAIL DU SITE ===================== */
const portail = document.querySelector('#portail')
let btn_list;
let i;

let footer = document.querySelector('footer')
footer.classList.add(text_color1_400)

btn_list = document.querySelectorAll('.btn')
console.log(btn_list)
    for (i = 0; i < btn_list.length; i++)
    {
        btn_list[i].classList.add(theme_btn)
    }

if (portail)
{   
    let img;
    img = document.querySelector('#banniere');
    console.log(img)
    img.classList.add(mybox_color1);
    portail.classList.add("display-4", text_color1_500, "text-center")
}   

/**===============COULEUR BACKGROUND PRINCIPAL======================*/
const mybody = document.body
mybody.classList.add("bg", bg_color0, bg_gradient2)

/**===============STYLE FAVICON======================*/
const favicon = document.querySelector('#favicon')
if (favicon)
{
    favicon.classList.add('rounded','border',border_color1, "myZindex-3", mybox_color1)
    
}

/** ============== DECLARATION DES VARIABLES POUR LES TAGS ================ */

const h1_list = document.querySelectorAll('h1')
const h2_list = document.querySelectorAll('h2')
const h3_list = document.querySelectorAll('h3')
const h4_list = document.querySelectorAll('h4')
const h5_list = document.querySelectorAll('h5')
const p_list = document.querySelectorAll('p')
const img_list = document.querySelectorAll('img')

/** ========= ICI POUR CREER UNE FONCTION DE CHANGEMENT DE STYLE============*/

let theme_primary;
theme_primary = true;
console.log('theme primary:%s',theme_primary)

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
var h1_color = text_color1_500
var h2_color = text_color1_500
var h3_color = text_color1_400
var h4_color = text_color1_500
var h5_color = text_color1_500
var p_color  = text_color1_200
var img_color = text_color1_500

/** ============ CREATION DES CLASSLIST POUR NOS TAGS ==================== */

const class_list_h1 = ["display-2", "fw-bold", h1_color];
const class_list_h2 = ["display-2", "fw-bold", h2_color];
const class_list_h3 = ["font-weight-light", "p-4", "border-start", "border-5", "col-11", "ms-4",h3_color];
const class_list_h4 = ["display-2", "fw-bold", h4_color];
const class_list_h5 = ["text-center", "op-0", "fw-bold", h5_color];
const class_list_p = ["lead", "p-4", "border-start", "border-5", border_color1_500, "col-11", "ms-4-2",p_color ];
const class_list_img = ["display-2", "fw-bold", img_color];



/** ========== EXPORTATION DES VARIABLES DE COULEUR ========
 * RAPPEL:
 * color 0: couleur du fond principal
 * color 1: couleur principal pour les titres et les sous titres
 *          ainsi que pour la plupart des liens sur les boutons
 * color2: couleur complémentaire pour varier les effets
 */
 export default 
 {  blue, indigo, purple, pink , red, yellow, green,
    teal, cyan, gray, gray_drk, primary, secondary, success,
    warning, danger,
    info, light, dark, orange, white,
    color1,color2, color0,
    color1_100, color1_200, color1_300,
    color2_100, color2_200, color2_300,
    color1_400, color1_500, color1_600,
    color2_400, color2_500, color2_600,
    color1_700, color1_800, color1_900,
    color2_700, color2_800, color2_900,

    theme_primary, theme_btn,
    
    border, border_color0, border_color1, border_color2,

    mybox, mybox_color0, mybox_color1, mybox_color2,
    
    btn_box, btn_box_secondary, btn_box_tertiary,
    
    bg_gradient1, bg_gradient2, 
    
    bg_color0,
    bg_color0_100, bg_color0_200, bg_color0_300, bg_color0_400, bg_color0_500,
    bg_color0_600, bg_color0_700, bg_color0_800, bg_color0_900,
    
    bg_color1,
    bg_color1_100, bg_color1_200, bg_color1_300, bg_color1_400, 
    bg_color1_500, bg_color1_600,
    bg_color2,bg_color2_100, bg_color2_200, bg_color2_300, bg_color2_400,
    bg_color2_500,bg_color2_600,
    
    text_color1,
    text_color1_100, text_color1_200, text_color1_300,text_color1_400,
    text_color1_500, text_color1_600, text_color1_700, text_color1_800, text_color1_900,
    
    text_color2,
    text_color2_100, text_color2_200, text_color2_300,text_color2_400,
    text_color2_500, text_color2_600,text_color2_700, text_color2_800, text_color2_900,
    
    h1_list, h2_list, h3_list, h4_list, h5_list, p_list, img_list,
    
    class_list_h1, class_list_h2, class_list_h3, class_list_h4, class_list_h5, class_list_p, class_list_img,
} 