import theme from './color_theme.js'

var main_div = document.querySelector("#main_div")

main_div.style.zIndex = "-4"; 
main_div.style.backgroundImage = "url('../static/img/hacker_working.jpg')";
main_div.style.Height = "auto";
main_div.style.minWidth = "100%";
main_div.style.backgroundRepeat = "repeat";


let prefix = '../../';
theme.IMG_BANDE = prefix + 'static/img/bande0.svg'
theme.URL_BANDE = theme.format_URL(theme.IMG_BANDE) 

let fond_div = document.querySelector('#fond_div')
fond_div.style.backgroundImage = theme.URL_BANDE

//NB: since we use the same script for several html files we need to check
//if the element we want to select for a certain purpose is present on the 
//html file where the script is running, hence the "if" before each call to
// the add_class function.

let btn_send;
btn_send = document.querySelector('#id_btn')

if (btn_send) 
{ 
    btn_send.classList.add('my-2','offset-10')
}

let btn_crypt_ok;
btn_crypt_ok = document.querySelector('#btn_crypt_ok');
if (btn_crypt_ok)
{
    theme.add_class_to_element_list([btn_crypt_ok],theme.class_color_theme)
}

let load_key;
load_key = document.querySelector('#load_key')
if (load_key)
{
load_key.classList.add('offset-6')
}

let link_ok;
link_ok = document.querySelector('#link_ok')
if (link_ok)
{
    theme.add_class_to_element_list([link_ok],theme.class_color_theme)
}

let message;
message = document.getElementById('message');
if (message)
{message.focus()}

let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
if (fields)
{
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('form-control', 'bg', 'bg-primary','text-cyan-100','border-cyan')
    
    } else {theme.add_class_to_element_list([fields[i]],theme.class_color_theme)}
};}
// ICI JE VAIS REMPLACER LES CLASSLIST PAR DEFAUT DE COLOR_THEME
theme.class_list_h3 = ['col-sm-auto',"text-center", "font-weight-light", "mx-2",
                      "rounded", theme.text_color1_100]
theme.class_list_h5 = ['col-sm-auto', "text-center", "fw-bold", "rounded",
                      theme.text_color1_100]
theme.add_class_to_element_list(theme.h3_list,theme.class_list_h3)
theme.add_class_to_element_list(theme.h5_list,theme.class_list_h5)
theme.add_class_to_element_list(theme.label_list,theme.class_list_label)
theme.add_class_to_element_list(theme.a_list,theme.class_list_a)
