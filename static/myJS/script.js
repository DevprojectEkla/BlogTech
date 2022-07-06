let firstscript = 'script';
if (firstscript) {
  alert("Ceci est mon premier " + firstscript + " java chargé à partir d'un fichier .js dans mon static directory!");
} else {
  alert("J'ai créé une boucle if et ici nous passons bien dans le else");
}
function random(number) {
  return Math.floor(Math.random()*(number+1));
}
function bgChange(){
var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
document.body.style.backgroundColor = rndCol;
};
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

//  document.querySelector('html').addEventListener('click', function() {
//  alert('Aïe, arrêtez de cliquer !!');
//      });

//autre syntaxe possible
let myHTML = document.querySelector('h3');
myHTML.addEventListener('click', function() {alert('prout premier h3 tag')});

let myH1 = document.querySelector('h1');
myH1.addEventListener('click', function() {alert('prout premier h1 tag')});


// exemple encore à tester
myImage = document.getElementById('main_image');

myImage.addEventListener('mouseover', function() {
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc)
    if (mySrc === '../static/img/HSV.jpg') {
      myImage.setAttribute('src', '../static/img/HSV-matrix.jpg');
    } else {console.log('gros prout');
      myImage.setAttribute('src', '../static/img/HSV.jpg');
    }
});

let balise = true;
function ChangerCouleur(Identifiant){
var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
    document.getElementById(Identifiant).style.color= rndCol;
balise = true;
console.log(balise);
};

myTitle = document.getElementById("mytitle1")
myTitle.addEventListener('mouseover',function(){if (balise === true){ChangerCouleur('mytitle1');
console.log(balise)
}});

myH1.addEventListener('clik', function(){
if (balise === true){ChangerCouleur(Identifiant);
balise = false
console.log(balise);;
}

})

if (document.getElementById('no_auth')){
console.log(document.querySelector("#divbtt"));
} else {
console.log(document.getElementById("footer"));
};



var divbtt = document.getElementById("divbtt"),
    btnbtt = document.getElementById("btnbtt"),
    body = document.body,
    scrollMax = document.scrollingElement.scrollTopMax,
    docElem = document.documentElement,
    offset = 100,
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox")> -1,
    scrollPos, docHeight;
    console.log(effect);
    docHeight = Math.max(body.scrollHeight, body.offsetHeight,
     docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);


    if (docHeight != 'undefined'){
      offset = docHeight*0.95;
    }
    if (divbtt){//pour éviter des erreurs "uncaught" dans la console quand l'utilisateur n'est pas connecté et que
    //le bouton n'est pas disponible pour cette fonction.
    window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
     divbtt.className = (scrollPos > scrollMax*0.95) ? "visible" : "invisible"
    });}

if (btnbtt){//cf.com plus haut, idem
    var effect = btnbtt.getAttribute('aria-pressed');
    btnbtt.addEventListener("click", function(event){bgChange();
    event.preventDefault();
    if (isFirefox){
    docElem.scrollTop = 0;
    }
    else { body.scrollTop = 0;}
    btnbtt.setAttribute('class', 'btn position-fixed bottom-0 end-50');
    console.log(effect);
    });};
console.log(effect);
document.querySelector('p').click()


