import theme from './color_theme.js'

let lastnameInput;
lastnameInput = document.getElementById('id_last_name');
lastnameInput.focus()

let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('form-control', 'bg', 'bg-primary','text-cyan','border-cyan')
    
    } else {theme.add_class_to_element_list([fields[i]],theme.class_color_theme)}
};

theme.add_class_to_element_list(theme.label_list,theme.class_list_label)
theme.add_class_to_element_list(theme.a_list,theme.class_list_a)
