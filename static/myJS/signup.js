import theme from './color_theme.js'

let lastnameInput;
lastnameInput = document.getElementById('id_last_name');
lastnameInput.focus()

let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('form-control', 'bg', theme.bg_color1_200, 'text-orange-800')
    
    } else {fields[i].classList.add('btn', theme.theme_btn, 'text-center')}
};

let p_form_list;
p_form_list = document.querySelectorAll('p')
console.log(p_form_list)
let j;
for (j=0; j < p_form_list.length;j++)
{
    p_form_list[j].classList.add(theme.text_color1_500)
}
