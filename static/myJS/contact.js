import theme from './color_theme.js'

/** ??? */
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


let usernameInput = document.getElementById('id_nom');
console.log(usernameInput);
usernameInput.focus()

let titles;
let class_titles;

titles = theme.p_list;
class_titles = ["my-2",theme.text_color1_200,'bg', 'bg-cyan-800','rounded', 'me-5','w-90']
theme.add_class_to_element_list(titles,class_titles)

let labels, class_labels;
labels = document.querySelectorAll('label')
class_labels = ['mx-2','my-1']
theme.add_class_to_element_list(labels,class_labels)

let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('rounded','col-sm-auto', 'bg', theme.bg_color1_200,
        theme.text_color1_800, 'min-w-80')
    }
    else theme.add_class_to_element_list([fields[i]], theme.class_color_theme)
};
let field_txt_area;
field_txt_area = document.getElementById('id_Message')
field_txt_area.classList.add('bg',theme.bg_color1_200)

let btn_submit;
btn_submit = document.querySelector('#id_btn');
btn_submit.classList.add('col-sm-auto', 'my-2')
