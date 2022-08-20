import theme from "./color_theme.js";

let p_el_list;
p_el_list = document.querySelectorAll("p")
console.log('myp_el_list:%s',p_el_list)
let style_class_p ;
style_class_p = [theme.p_color]
theme.add_class_to_element_list(p_el_list,style_class_p)

let btn_lire;
btn_lire = document.querySelector('#btn_lire')
btn_lire.classList.add(theme.theme_btn)

let img_article;
img_article = document.querySelector('#id_img')
img_article.classList.add(theme.mybox_color1,'border','border-2', theme.border_color1)

let titre_article;
titre_article = document.querySelector('.container')
titre_article.classList.add(theme.text_color1_600)

let head_article;
head_article = document.querySelector('h2')
head_article.classList.add(theme.mybox_color1,'border-start','border-2', theme.border_color1_400)
