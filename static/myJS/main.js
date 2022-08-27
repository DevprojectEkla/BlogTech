import theme from './color_theme.js'

let MAIN_IMG_FILE = '../static/img/cybersecurite.jpg'; 

let body, favicon, banniere, navbar, div_title, portail_title, footer, btn_preview,
    portail, btn_signup, btn_login;
body        = document.body;
favicon     = document.querySelector('#favicon')

div_title   = document.querySelector('#title')
portail_title       = document.querySelector('h1');
if (!user_authenticated){ 
portail     = document.querySelector('#portail')
}
banniere    = document.querySelector('#banniere')
btn_preview = document.querySelector('#preview')
btn_signup  = document.querySelector('#signup')
btn_login   = document.querySelector('#login')
footer      = document.querySelector('#footer');
main_div    = document.querySelector("#main_div");

/** on veut changer l'image de fond dès que l'utilistateur se connecte ou 
 * qu'il clique sur preview. Pour cela on a besoin d'une variable qui indique
 * si l'utlisateur est connecté et une variable pour savoir si l'utilisateur 
 * est sur la page d'Aperçu dont l'url contient le nom 'common'*/

body.style.backgroundColor = "primary"


let preview;
preview = false;
const url_preview = window.location.href;
if (btn_preview) {btn_preview.classList.add('theme_btn'); 
    btn_preview.setAttribute('action', "onclick");
    if (url_preview.indexOf('common')!=-1)
    {
        preview =true, console.log("url:"+url_preview+"preview:"+preview)
    }
btn_preview.addEventListener('click', function () 
       {
       main_div.style.backgroundImage = "url('../static/img/cybersecurite.jpg')";
       preview = true; 
       })
    };
console.log(preview)
console.log("url:"+url_preview+"preview:"+preview)
// main_img.setAttribute('src',MAIN_IMG_FILE);
if(!user_authenticated & !preview){
main_div.style.zIndex = "-4";
main_div.style.backgroundImage = "url('https://solulan.com/wp-content/uploads/2021/07/Solulan-post-gestion-informatique.jpg')";
main_div.style.backgroundSize = "cover";
main_div.style.backgroundPosition = "center";
main_div.style.Height = "auto";
main_div.style.minHeight = "100vh";
}



banniere.classList.add('row','mt-6','width-100vh')
if(div_title){div_title.classList.add("row","justify-content-center")};
if(portail){theme.add_class_to_element_list([portail],['fw-bold','col-sm-auto', 'bg', 'bg-primary', 'rounded'])};
if(btn_preview){theme.add_class_to_element_list([btn_login,btn_signup,btn_preview],['bg','bg-primary','text-cyan','rounded'])
}



/**========================================= 
 * ============= Title Animation =========== 
 * =========================================*/
if(portail_title){theme.title_animation(portail_title,"",50)}


let div_main_img, main_img, main_container;


main_container  = document.createElement('div');
div_main_img    = document.createElement('div');
main_img        = document.createElement('img');


let class_list_main_container, class_list_div_main_img, class_list_main_img;
class_list_main_container   = ['container-fluid']
class_list_div_main_img     =['row']
class_list_main_img         =['img-fluid']

// theme.add_class_to_element_list([main_img],class_list_main_img);

// body.appendChild(main_container);
// main_container.appendChild(div_main_img);
// div_main_img.appendChild(main_img);
// div_main_img.appendChild(btn_login);
// div_main_img.appendChild(btn_signup);
// div_main_img.appendChild(btn_preview);
