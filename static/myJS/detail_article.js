import theme from "./color_theme";

let p_el_list;
p_el_list = document.querySelectorAll("p")
console.log('myp_el_list:%s',p_el_list)
let style_class_p ;
style_class_p = [theme.text_color1_300]
theme.add_class_to_element_list(p_el_list,style_class_p)

let btn_lire;
btn_lire = document.querySelector('#btn_lire')
btn_lire.classList.add(theme.theme_btn)

let img_article;
img_article = document.querySelector('img')
img_article.classList.add(theme.mybox_color0)


