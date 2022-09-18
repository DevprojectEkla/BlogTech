import theme from "./color_theme.js";

theme.add_class_to_element_list(theme.h3_list,theme.class_list_h3)
theme.add_class_to_element_list(theme.h5_list,theme.class_list_h5)
theme.replace_classList_of_el_list(theme.h3_list,['text-cyan-800'],['text-cyan-100'])
theme.replace_classList_of_el_list(theme.h5_list,['text-cyan-800'],['text-cyan-100'])
let container;
container = document.querySelector('.container')
container.style.backgroundImage = "url('../static/img/background-chess.svg')"
container.style.backgroundSize = "100%" 
container.style.borderRadius = "15px";

var main_div = document.querySelector("#main_div")

main_div.style.zIndex = "-4"; 
main_div.style.backgroundImage = "url('../static/img/background-chess.svg')";
main_div.style.Height = "auto";
main_div.style.minWidth = "100%";
main_div.style.backgroundRepeat = "repeat";


let prefix = '../../';
theme.IMG_BANDE = prefix + 'static/img/bande0.svg'
theme.URL_BANDE = theme.format_URL(theme.IMG_BANDE) 

let fond_div = document.querySelector('#fond_div')
fond_div.style.backgroundImage = theme.URL_BANDE


