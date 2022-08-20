import theme from './color_theme.js'

let usernameInput = document.getElementById('id_nom');
console.log(usernameInput);
usernameInput.focus()

let titles;
let class_titles;

titles = theme.p_list;
class_titles = ["my-2","btn",theme.theme_btn, theme.text_color1_600,]
theme.add_class_to_element_list(titles,class_titles)

let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('rounded','col-sm-auto', 'bg', theme.bg_color1_200, theme.text_color1_700)
    
    } else {fields[i].classList.add('btn', theme.theme_btn, 'text-center')}
};
let field_txt_area;
field_txt_area = document.getElementById('id_Message')
field_txt_area.classList.add('bg',theme.bg_color1_200)