let myHeading = document.querySelector('h1');
        myHeading.textContent = 'HELLO JAVA SCRIPT';

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

