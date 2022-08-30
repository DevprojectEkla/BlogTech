import theme from './color_theme.js'

let usernameInput = document.getElementById('username');
console.log(usernameInput);
usernameInput.focus()
theme.add_class_to_element_list(theme.h4_list,theme.class_list_h4)
theme.add_class_to_element_list(theme.a_list, theme.class_list_a)
theme.add_class_to_element_list(theme.button_list, theme.class_color_theme);
let fields; let i;
fields = document.querySelectorAll('input');
console.log(fields);
for (i = 0; i < fields.length; i++) 
{   if (fields[i].getAttribute('type') != "submit") {
    fields[i].classList.add('rounded','col-sm-auto', 'bg', 'bg-primary','border-cyan',
        'text-cyan')
    
    } else theme.add_class_to_element_list([fields[i]], theme.class_color_theme)
};
