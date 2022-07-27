const orange = "orange";
const indigo = "indigo";
const dark = "dark";
const white = "white";

const btn_boxorange = "btn-myhover-box";
const btn_boxpurple = "btn-myhover-box-purple";
const btn_box = btn_boxorange;
const bg_color = dark
const color0 = white;
const color1 = orange;
const color2 = indigo;
const color1_400 = color1+"-400"
const color2_400 = color2 + "-400"
const color1_500 = color1+"-500"
const color2_500 = color2 + "-500"
const color1_600 = color1+"-600"
const color2_600 = color2 + "-600"

const text_color0 = "text-" + color0;
const text_color1 = "text-" + color1;
const text_color2 = "text-" + color2;

const text_color1_400 = "text-" + color1_400;
const text_color2_400 = "text-" + color2_400;
const text_color1_500 = "text-" + color1_500;
const text_color2_500 = "text-" + color2_500;
const text_color1_600 = "text-" + color1_600;
const text_color2_600 = "text-" + color2_600;

const bg_color0 = "bg-"+bg_color
const bg_color1 = "bg-"+ color1
const bg_color2 = "bg-"+ color2
const bg_color1_400 = "bg-" + color1_400;
const bg_color2_400 = "bg-" + color2_400;
const bg_color1_500 = "bg-" + color1_500;
const bg_color2_500 = "bg-" + color2_500;
const bg_color1_600 = "bg-" + color1_600;
const bg_color2_600 = "bg-" + color2_600;

const h1_list = document.querySelectorAll('h1')
const h2_list = document.querySelectorAll('h2')
const h3_list = document.querySelectorAll('h3')
const h4_list = document.querySelectorAll('h4')
const h5_list = document.querySelectorAll('h5')
const p_list = document.querySelectorAll('p')
const img_list = document.querySelectorAll('img')

const class_list_h1 = ["display-2", "fw-bold", text_color1_500];
const class_list_h2 = ["display-2", "fw-bold", text_color1_500];
const class_list_h3 = ["font-weight-light", "p-4", "border-start", "border-5", "col-11", "ms-4",text_color1_400 ];
const class_list_h4 = ["display-2", "fw-bold", text_color1_500];
const class_list_h5 = ["text-center", "op-0", "fw-bold", text_color1_500];
const class_list_p = ["lead", "p-4", "border-start", "border-5", "border-orange-500", "col-11", "ms-4-2", text_color0];
const class_list_img = ["display-2", "fw-bold", text_color1_500];



/** Déclaration de nos variables de couleur pour les différents theme
 * de notre site
 * color 1: c'est la couleur principal pour les titres et les sous titres
 *          ainsi que pour la plupart des liens sur les boutons
 * color2: c'est la couleur complémentaire pour varier les effets
 */
 export default 
 {  orange, indigo, color1, color0,
    color1_400, color1_500, color1_600,
    color2, color2_400, color2_500, color2_600,
    btn_boxpurple, btn_box, btn_boxorange,
    bg_color1, bg_color1_400, bg_color1_500, bg_color1_600,
    bg_color2,bg_color2_400,bg_color2_500,bg_color2_600,
    text_color1, text_color1_400, text_color1_500, text_color1_600,
    text_color2, text_color2_400, text_color2_500, text_color2_600,
    h1_list, h2_list, h3_list, h4_list, h5_list, p_list, img_list,
    class_list_h1, class_list_h2, class_list_h3, class_list_h4, class_list_h5, class_list_p, class_list_img,
} 