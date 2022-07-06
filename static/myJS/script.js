let firstscript = 'script';
if (firstscript) {
  alert("Ceci est mon premier " + firstscript + " java chargé à partir d'un fichier .js dans mon static directory!");
} else {
  alert("J'ai créé une boucle if et ici nous passons bien dans le else");
}


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
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let balise = false;
function ChangerCouleur(Identifiant){
    document.getElementById(Identifiant).style.color="red";
balise = true;
console.log(balise);
};

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
    effect = btnbtt.getAttribute('aria-pressed'),
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

    window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
     console.log(docHeight),
     console.log(offset),
     console.log(document.scrollingElement.scrollTopMax),
     console.log(scrollPos);
     divbtt.className = (scrollPos > scrollMax*0.95) ? "visible" : "invisible"
    });

    btnbtt.addEventListener("click", function(event){
    event.preventDefault();
    if (isFirefox){
    docElem.scrollTop = 0;
    } else { body.scrollTop = 0;}
    console.log(btnbtt.getAttribute('aria-pressed'))
    }
    );
console.log(effect);



