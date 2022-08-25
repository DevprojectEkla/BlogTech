import theme from './color_theme.js'

let MAIN_IMG_FILE = '../static/img/cybersecurite.jpg'; 

let body, favicon, banniere, navbar, div_title, title, footer, btn_preview, 
btn_signup, btn_login ;
body        = document.body;
favicon     = document.querySelector('#favicon')
div_title   = document.querySelector('#title')
title       = document.querySelector('#portail')
banniere    = document.querySelector('#banniere')
btn_preview = document.querySelector('#preview')
btn_signup  = document.querySelector('#signup')
btn_login   = document.querySelector('#login')
footer      = document.querySelector('#footer');
main_div    = document.querySelector("#main_div");

div_title.classList.add("row","justify-content-center")
theme.add_class_to_element_list([title],['fw-bold','col-sm-6'])
theme.add_class_to_element_list([btn_login,btn_signup,btn_preview,title],['bg','bg-dark'])

let div_main_img, main_img, main_container;


main_container  = document.createElement('div');
div_main_img    = document.createElement('div');
main_img        = document.createElement('img');


let class_list_main_container, class_list_div_main_img, class_list_main_img;
class_list_main_container   = ['container-fluid']
class_list_div_main_img     =['row']
class_list_main_img         =['img-fluid']

// main_img.setAttribute('src',MAIN_IMG_FILE);
main_div.style.backgroundImage = "url('https://solulan.com/wp-content/uploads/2021/07/Solulan-post-gestion-informatique.jpg')";
main_div.style.backgroundSize = "cover";
main_div.style.backgroundPosition = "center";
main_div.style.Height = "auto";
main_div.style.minHeight = "100vh";

theme.add_class_to_element_list([main_container],class_list_main_container);
theme.add_class_to_element_list([div_main_img],class_list_div_main_img);
theme.add_class_to_element_list([main_img],class_list_main_img);

// body.appendChild(main_container);
// main_container.appendChild(div_main_img);
// div_main_img.appendChild(main_img);
// div_main_img.appendChild(btn_login);
// div_main_img.appendChild(btn_signup);
// div_main_img.appendChild(btn_preview);
