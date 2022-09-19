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
slide.classList.add('p-5')
theme.add_class_to_element_list(theme.h5_list, theme.class_list_h5.concat('p-2'))
theme.replace_classList_of_el_list(theme.h5_list,["fw-bold"],["fw-normal"])
theme.replace_classList_of_el_list(theme.h5_list,["text-center"],["text-justify"])

let text_container;
text_container = document.querySelector('#container')
text_container.classList.add('text-container')

let date;
date = document.querySelector('#date')
date.classList.remove('border')

let p_el_list;
p_el_list = theme.p_list
console.log('myp_el_list:%s',p_el_list)
theme.add_class_to_element_list(p_el_list,theme.class_list_p.concat('pb-3'))
theme.replace_classList_of_el_list(p_el_list,["mx-5"],['mx-auto'])
let btn_publish;
btn_publish = document.querySelector('#btn_publish')
theme.add_class_to_element_list([btn_publish],theme.class_color_theme)


//TODO ATTENTION: il y a un doublon à corriger, cf. plus bas card_container
let card_com, new_comment;
card_com = document.querySelector('#card_container')
new_comment = document.querySelector('#new_comment')
let card_class_list;
card_class_list = ["card", "my-4", "border", "border-3", theme.border_color1_700,"w-50"]
if (card_com)
{
theme.add_class_to_element_list([card_com], card_class_list);
}

let div_add_comment;
div_add_comment = document.querySelector('#add_comment')
div_add_comment.classList.add('p-2', 'bg', theme.bg_color1_800,'rounded',
theme.text_color1_200)
let img_article;
img_article = document.querySelector('#id_img')
img_article.classList.add(theme.mybox_color1,'border','border-2', theme.border_color1_700)

let titre_article;
titre_article = document.querySelector('.container')
titre_article.classList.add(theme.text_color1_600)

let head_article, i;
head_article = theme.h1_list
theme.add_class_to_element_list(theme.h1_list, theme.class_list_h1)

let btn_pagination_list;

btn_pagination_list = document.querySelectorAll(".page-link")
console.log(theme.color1_CSS)
console.log(theme.r)
theme.changeColorElementList(btn_pagination_list,theme.color1)
theme.add_class_to_element_list(btn_pagination_list,theme.class_color_theme.concat(theme.border_color1_200))


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
theme.myScrollTrig(img_list.splice(2).concat([p_list, card_com, new_comment]));
theme.myScrollTrigOpacity([head_article, date]);
theme.myScrollTrigTranslationY(btn_pagination_list)

let commentaire, class_style_commentaire;
commentaire = document.querySelectorAll('#commentaire')
class_style_commentaire = [theme.text_color1_800, theme.bg_color1_100,theme.border_color1_700]
if (commentaire)
{
    theme.add_class_to_element_list(commentaire, class_style_commentaire)
}


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

span_com_list = [theme.text_color1_800]
if(span_com)
    
{
    theme.add_class_to_element_list(span_com,span_com_list)
}

let input_group, class_input_group;
input_group = document.getElementsByClassName("input-group-text")
class_input_group = [theme.bg_color1_800,theme.border_color1_100]
if(input_group)
{
    theme.add_class_to_element_list(input_group,class_input_group)
    theme.replace_classList_of_el_list(input_group,[theme.text_color1_800],[theme.text_color1_100])
}

let card_body;
let card_body_list;
card_body = document.querySelectorAll('.card-body')
card_body_list = [theme.text_color1_800,'bg','bg-cyan-100', 'rounded']
if (card_body)
{
    theme.add_class_to_element_list(card_body,card_body_list)
}

let card_container;
let card_container_list;
card_container = document.querySelectorAll('#card_container')
card_container_list = [theme.text_color1_800,'bg', 'bg-cyan-100', 'rounded','mybox','justify-content-center','mx-auto']
//NB: mx-auto permet ici de centrer l'élément card. cf. bootstrap/Spacing
if (card_container)
{
    theme.add_class_to_element_list(card_container,card_container_list)
}
