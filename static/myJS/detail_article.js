import theme from "./color_theme.js";

let p_el_list;
p_el_list = theme.p_list
console.log('myp_el_list:%s',p_el_list)
let style_class_p ;
style_class_p = [theme.p_color,theme.border_color1_500]
theme.add_class_to_element_list(p_el_list,theme.class_list_p)

let btn_publish;
btn_publish = document.querySelector('#btn_publish')
btn_publish.classList.add(theme.theme_btn)

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

theme.myscrollTrig(theme.img_list);
theme.myscrollTrig(theme.p_list);



let commentaire; 
let class_style_commentaire;
commentaire = document.querySelectorAll('h5')
if (commentaire)
{
class_style_commentaire = [theme.text_color1_500,theme.bg_color0, 'rounded',theme.border.bg_color1_500];
theme.add_class_to_element_list(commentaire,class_style_commentaire);
}
let span_com; 
let span_com_list;
span_com = document.querySelectorAll('span')
span_com_list = [theme.text_color0_500,'rounded']
theme.add_class_to_element_list(span_com,span_com_list)

let card_body;
let card_body_list;
card_body = document.querySelectorAll('.card-body')
card_body_list = [theme.text_color0_500,theme.bg_color1_200, 'rounded','myshadow-box']
theme.add_class_to_element_list(card_body,card_body_list)

let card_container;
let card_container_list;
card_container = document.querySelectorAll('#card_container')
card_container_list = [theme.text_color0_500,theme.bg_color1_200, 'rounded','myshadow-box']
theme.add_class_to_element_list(card_container,card_container_list)