import color_theme from './color_theme.js';
import theme from './color_theme.js'
// BOOTSTRAP ToolTip initialisation. cf.https://getbootstrap.com/docs/5.0/components/tooltips/ 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
console.log(tooltipTriggerList)
// BOOTSTRAP Popover initialisation. cf.https://getbootstrap.com/docs/5.0/components/popovers/ 
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})





let body, favicon, banniere, img_banniere, navbar, div_title, portail_title,
    footer, btn_preview, links, portail, btn_signup, btn_login, btn_publications,
    btn_boutique, btn_retourPA, main_div, btn_copy;
body        = document.body;
favicon     = document.querySelector('#favicon')

div_title   =       document.querySelector('#title')
portail_title       = document.querySelector('#portail_titlte');

if (!user_authenticated){ 
portail     = document.querySelector('#portail')
}

banniere    = document.querySelector('#banniere')
img_banniere = document.querySelector('#img_banniere')

btn_preview = document.querySelector('#preview')
btn_signup  = document.querySelector('#signup')
btn_login   = document.querySelector('#login')
btn_publications = document.querySelector('#btn_publications')
btn_boutique = document.querySelector('#btn_boutique')
btn_retourPA = document.querySelector('#btn_retourPA')
btn_copy = document.querySelector('#btn_copy')
if (btn_copy)
{
    let mypopover, options, copyico, okico ;
    
    copyico = document.querySelector('#copyico')
    okico = document.querySelector('#okico')
    options = 
        {
        animation:true, placement:'right', container:btn_copy, //offset: [790,340], 
        title:'copié',viewport: { selector: '#btn_copy', padding: 5 }, html:true, template:'<div class="mypopover text-cyan" role="tooltip"><div class="mypopover-arrow"></div><h3 class="mypopover-header" >Copié</h3>'
        }
    btn_copy.classList.add('btn','p-0','col-sm-auto');
    mypopover = new bootstrap.Popover(copyico,options)
console.log(tooltipList)
    let mytooltip;
    mytooltip = tooltipList[0] 
//=========== OPTION CLICK BTN_COPY=========================
    btn_copy.addEventListener('click',function CopyText() 
        {   mytooltip.hide()
            mytooltip.disable()
            mypopover.show()
            setTimeout(resetPop,1000, mypopover, copyico, okico)
            setTimeout(resetIco, 2000, mytooltip, copyico, okico)    
    // Get the text field
    var copyText = document.getElementById("key_input");

  // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
})
    
}


footer      = document.querySelector('#footer');
main_div    = document.querySelector("#main_div");
/** on veut changer l'image de fond dès que l'utilistateur se connecte ou 
 * qu'il clique sur preview. Pour cela on a besoin d'une variable qui indique
 * si l'utlisateur est connecté et une variable pour savoir si l'utilisateur 
 * est sur la page d'Aperçu dont l'url contient le nom 'common'*/

/**================================== 
 * STYLE POUR LES LIENS DE LA NAVBAR:
 * ==================================
 */
let nav_link;
nav_link = document.querySelectorAll('.nav-link')
let navbar_class_list;
navbar = document.querySelector('#id_navbar')
navbar_class_list = ['bg', 'bg-primary', 'navbar', 'navbar-expand-lg',
'fixed-top'];
theme.add_class_to_element_list([navbar], navbar_class_list)
theme.add_class_to_element_list(nav_link, [theme.text_color1])



let preview;
preview = false;
/** On veut savoir sur quel page on se trouve pour afficher
 * ou non certains éléments: en l'occurence on veut changer
 * l'image de fond backgroundImage dès que l'on clique sur 'aperçu de mon blog'
 * ce qui correspond à l'url 'root/common/' */
const url_preview = window.location.href;
if (btn_preview) {theme.add_class_to_element_list([btn_preview],theme.class_color_theme); 
    btn_preview.setAttribute('action', "onclick");
    if (url_preview.indexOf('common')!=-1)
    {
        preview =true, console.log("url:"+url_preview+"preview:"+preview)
    }
btn_preview.addEventListener('click', function () 
       {
       main_div.style.backgroundImage = theme.URL_BACKGROUND//"url('../static/img/cybersecurite.jpg')";
       preview = true; 
       })
    };
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

/**============================================================================
 * fond_div est dans main.html l'élément qui encadre
 * les boutons d'en-tête 'aperçu de mon blog' 's'inscrire' et 'connexion' si 
 * l'utilisateur n'est pas connecté à un compte et les boutons
 * 'dernieres publications' 'boutique en ligne' et 'RetourPA' si l'utilisateur
 * est connecté. On lui met une image de fond.
 * ATTENTION: Les chemins d'accès à l'image doivent changer en même temps
 * que l'on change de page c'est pourquoi on les redéfini au début de 
 * chaque fichier .js quand l'adresse de la page que l'on affiche
 * s'étend au delà d'un seul dossier root/../../.. (ex: detail_articles.js)
 * ============================================================================
 * */
if(!portail)
{ console.log(window.location.href.split('/').splice(2))
let fond_div;
fond_div = document.querySelector("#fond_div");
if(window.location.href.split('/').splice(2).length <= 2) 
    //c'est la condition requise pour le cas indiqué plus haut
    //cela évite tous les problèmes.
    {
        fond_div.style.backgroundImage = theme.URL_BANDE
    }
fond_div.style.backgroundPosition = "center";
fond_div.style.minHeight = "auto";
fond_div.style.backgroundRepeat = "no-repeat"
fond_div.style.backgroundColor = '#80e5ffff'
}





let IMG_BANNIERE;
IMG_BANNIERE = 'static/img/banniere.svg'
banniere.classList.add('row','mt-6','width-100vh')

/** Suite de conditions pour l'affichage de certains éléments. Si l'utilisateur
 * est sur le portail du site, s'il est sur l'aperçu mais sans être connecté
 * etc.
*/

if(div_title)
    {
    div_title.classList.add("row","justify-content-center")
};

if(portail)
{
    theme.add_class_to_element_list([portail],['fw-bold','col-sm-auto', 'bg', 'bg-primary', 'rounded']);
    // img_banniere.src = IMG_BANNIERE;
};

if(btn_preview)
{
    theme.add_class_to_element_list([btn_login,btn_signup,btn_preview],
        theme.class_color_theme)
}

theme.add_class_to_element_list(theme.button_list, theme.class_color_theme)
if(btn_copy)
{
    btn_copy.classList.remove('btn-myhover-box','bg','bg-primary','rounded','text-cyan-200')
}

if(btn_publications)
{
theme.add_class_to_element_list([btn_publications, btn_boutique,btn_retourPA],
    theme.class_color_theme.concat('mt-5','mb-5'))
}
/**========================================= 
 * ============= Title Animation =========== 
 * =========================================*/
if(portail_title){theme.title_animation(portail_title,"",50)}


function resetIco(tooltip,ico1,ico2){
    ico1.classList.remove('d-sm-none')
    ico1.classList.add('d-inline-block')
    ico2.classList.add('d-sm-none')
    tooltip.enable()
}
function resetPop(pop,ico1,ico2){
pop.hide()
ico1.classList.remove('d-inline-block')
ico1.classList.add('d-sm-none')
ico2.classList.remove('d-sm-none')
}




