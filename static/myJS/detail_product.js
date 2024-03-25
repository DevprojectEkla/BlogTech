import theme from "./color_theme.js";


/**============================================================================ 
 * les chemins de fichier pointant vers les images des background et des
 * bannières doit être mis à jour à chaque fois que l'url s'étend d'un dossier
 * supplémentaire. 
 * ============================================================================*/
theme.add_class_to_element_list(theme.h4_list,['bg',theme.text_color1,
                                              'bg-primary','rounded','mt-10'])
theme.add_class_to_element_list(theme.p_list,[theme.text_color1, 'bg','bg-primary'])
theme.add_class_to_element_list(theme.h5_list,[theme.text_color1, 'bg','bg-primary'])
theme.add_class_to_element_list(theme.img_list,theme.class_list_img)


theme.MAIN_IMG_FILE = String("../../static/img/"+ theme.IMAGE_NAME)
theme.URL_BACKGROUND = theme.format_URL(theme.MAIN_IMG_FILE)

let prefix = '../../';
theme.IMG_BANNIERE = prefix + 'static/img/banniere.svg'
theme.IMG_BANNIERE_2 = prefix + 'static/img/banniere2.svg'


theme.IMG_BANDE = prefix + 'static/img/bande0.svg'
theme.URL_BANDE = theme.format_URL(theme.IMG_BANDE) 
let main_div = document.querySelector("#main_div")
main_div.style.backgroundImage = theme.URL_BACKGROUND
let fond_div = document.querySelector('#fond_div')
fond_div.style.backgroundImage = theme.URL_BANDE

let slide_background = document.querySelector('#container')
slide_background.style.backgroundImage = "url('../../static/img/shop.jpeg')"
    slide_background.style.backgroundSize = "cover";
slide_background.style.backgroundPosition = "center";
slide_background.style.Height = "auto";
slide_background.style.minHeight = "100vh";
theme.add_class_to_element_list(theme.h5_list, theme.class_list_h5.concat('p-2'))
theme.replace_classList_of_el_list(theme.h5_list,["fw-bold"],["fw-normal"])
theme.replace_classList_of_el_list(theme.h5_list,["text-center"],["text-justify"])

let text_container;
text_container = document.querySelector('#container')
text_container.classList.add('text-container')


//TODO ATTENTION: il y a un doublon à corriger, cf. plus bas card_container

let head_article, i;
head_article = theme.h1_list
theme.add_class_to_element_list(theme.h1_list, theme.class_list_h1)

let btn_pagination_list;

btn_pagination_list = document.querySelectorAll(".page-link")
console.log(theme.color1_CSS)
console.log(theme.r)
theme.changeColorElementList(btn_pagination_list,theme.color1)
theme.add_class_to_element_list(btn_pagination_list,theme.class_color_theme.concat(theme.border_color1_200))



