import theme from "./color_theme.js";

theme.add_class_to_element_list(theme.h3_list,theme.class_list_h3)
theme.add_class_to_element_list(theme.h5_list,theme.class_list_h5)

let container;
container = document.querySelector('.container')
container.style.backgroundImage = "url('../static/img/background2.svg')"
container.style.backgroundSize = "100%" 

var main_div = document.querySelector("#main_div")

main_div.style.zIndex = "-4"; 
main_div.style.backgroundImage = "url('../static/img/background1.svg')";
main_div.style.Height = "auto";
main_div.style.minWidth = "100%";
main_div.style.backgroundRepeat = "repeat";



