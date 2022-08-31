import theme from "./color_theme.js";


/**============================================================================ 
 * les chemins de fichier pointant vers les images des background et des
 * bannières doit être mis à jour à chaque fois que l'url s'étend d'un dossier
 * supplémentaire. 
 * ============================================================================*/


theme.MAIN_IMG_FILE = String("../../static/img/"+ theme.IMAGE_NAME)
theme.URL_BACKGROUND = theme.format_URL(theme.MAIN_IMG_FILE)

let prefix = '../../';
theme.IMG_BANNIERE = prefix + 'static/img/banniere.svg'
theme.IMG_BANNIERE_2 = prefix + 'static/img/banniere2.svg'


theme.IMG_BANDE = prefix + 'static/img/bande0.svg'
theme.URL_BANDE = theme.format_URL(theme.IMG_BANDE) 

let fond_div = document.querySelector('#fond_div')
fond_div.style.backgroundImage = theme.URL_BANDE

let slide_background = document.querySelector('#slide')
slide_background.style.backgroundImage = theme.URL_BACKGROUND
slide_background.style.backgroundSize = "cover";
slide_background.style.backgroundPosition = "center";
slide_background.style.Height = "auto";
slide_background.style.minHeight = "100vh";

theme.add_class_to_element_list(theme.h5_list, theme.class_list_h5.concat('p-2'))

let date;
date = document.querySelector('#date')
date.classList.remove('border')

let p_el_list;
p_el_list = theme.p_list
console.log('myp_el_list:%s',p_el_list)
let style_class_p ;
style_class_p = [theme.p_color,theme.border_color1_500]
theme.add_class_to_element_list(p_el_list,theme.class_list_p)

let btn_publish;
btn_publish = document.querySelector('#btn_publish')
theme.add_class_to_element_list([btn_publish],theme.class_color_theme)



let card_com;
card_com = document.querySelector('#card_container')
let card_class_list;
card_class_list = ["container", "card", "my-4", "border", "border-3", theme.border_color1,"w-50"]
theme.add_class_to_element_list([card_com], card_class_list);


let img_article;
img_article = document.querySelector('#id_img')
img_article.classList.add(theme.mybox_color1,'border','border-2', theme.border_color1)

let titre_article;
titre_article = document.querySelector('.container')
titre_article.classList.add(theme.text_color1_600)

let head_article, i;
head_article = theme.h1_list
theme.add_class_to_element_list(theme.h1_list, theme.class_list_h1.concat(['border-start', 'rounded', 'border-5', theme.border_color1_nuance1]))

let btn_pagination_list;

btn_pagination_list = document.querySelectorAll(".page-link")
console.log(theme.color1_CSS)
console.log(theme.r)
theme.changeColorElementList(btn_pagination_list,theme.color1)
theme.add_class_to_element_list(btn_pagination_list,theme.class_color_theme)


/**========================================================
 *  =========ANIMATION DU TITRE DE L'ARTICLE===============
 * ========================================================
 */
for (i=0; i < head_article.length; i++)
{
    theme.title_animation(head_article[i]," ",100);    
}
/**========================================================
 *  =========ANIMATION SCROLL-TRIGGER =====================
 * ========================================================
 */
let img_list, p_list;
img_list = Array.from(theme.img_list)
p_list = Array.from(theme.p_list)
console.log(img_list)
theme.myScrollTrig(img_list.splice(2).concat(p_list).concat(card_com));

// let commentaire; 
// let class_style_commentaire;
// commentaire = document.querySelectorAll('h5')
// if (commentaire)
// {
// class_style_commentaire = [theme.text_color1_500,theme.bg_color0, 'rounded',theme.border.bg_color1];
// theme.add_class_to_element_list(commentaire,class_style_commentaire);
// }
let span_com; 
let span_com_list;
console.log(head_article[0].textContent)
span_com = document.querySelectorAll('span')
span_com = Array.from(span_com)
// une expression un peu compliquee... il y a des spans dans le titre h1
// ici span com fait référence au champ de la card-commentaire
// qui correspond au nom d'utilisateur et on veut seulement ce span.
span_com = span_com.splice(head_article[0].textContent.split(" ").length)

span_com_list = [theme.text_color1,'bg','bg-primary','rounded']
theme.add_class_to_element_list(span_com,span_com_list)

let card_body;
let card_body_list;
card_body = document.querySelectorAll('.card-body')
card_body_list = [theme.text_color1,'bg','bg-primary', 'rounded','myshadow-box']
theme.add_class_to_element_list(card_body,card_body_list)

let card_container;
let card_container_list;
card_container = document.querySelectorAll('#card_container')
card_container_list = [theme.text_color1,theme.bg_color1,'bg', 'bg-primary', 'rounded','myshadow-box']
theme.add_class_to_element_list(card_container,card_container_list)
