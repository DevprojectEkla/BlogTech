function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function bgChange() {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + .2 + ')';
  document.body.style.backgroundColor = rndCol;
};
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//  document.querySelector('html').addEventListener('click', function() {
//  alert('Aïe, arrêtez de cliquer !!');
//      });

//autre syntaxe possible
let myHTML = document.querySelector('h3');
if (myHTML) {
  myHTML.addEventListener('click', function () { alert('prout premier h3 tag') })
};

let myH1 = document.querySelector('h1');
if (myH1) {
  myH1.addEventListener('click', function () { alert('prout premier h1 tag') })
};

// exemple encore à tester
let myImage = document.getElementById('main_image')
if (myImage) {
  myImage.addEventListener('mouseover', function () {
    if (myImage) {
      let mySrc = myImage.getAttribute('src');
      console.log(mySrc)
      if (mySrc === '../static/img/HSV.jpg') {
        myImage.setAttribute('src', '../static/img/HSV-matrix.jpg');
      } else {
        console.log('gros prout');
        myImage.setAttribute('src', '../static/img/HSV.jpg');
      }
    }
  })
};

paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[1])
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].hidden = true;
  paragraphs[i].addEventListener('mouseover', function () {
    if (paragraphs[i].hidden = true) {
      paragraphs[i].hidden = false;
    }
  })
};



let balise = true;
function ChangerCouleur(Identifiant) {
  var rndCol = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 1 + ')'
  document.getElementById(Identifiant).style.color = rndCol;
  balise = true;
};

myTitle = document.getElementById("mytitle1")
myTitle.addEventListener('mouseover', function () {
  if (balise === true) {
    ChangerCouleur('mytitle1');

  }
});

myH1.addEventListener('clik', function () {
  if (balise === true) {
    ChangerCouleur(Identifiant);
    balise = false
    console.log(balise);;
  }

})

if (document.getElementById('no_auth')) {
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
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  scrollPos, docHeight;
console.log(effect);
docHeight = Math.max(body.scrollHeight, body.offsetHeight,
  docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);


if (docHeight != 'undefined') {
  offset = docHeight * 0.95;
}
if (divbtt) {//pour éviter des erreurs "uncaught" dans la console quand l'utilisateur n'est pas connecté et que
  //le bouton n'est pas disponible pour cette fonction.
  window.addEventListener("scroll", function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    divbtt.className = (scrollPos > scrollMax * 0.95) ? "visible" : "invisible"
  });
}

if (btnbtt) {//cf.com plus haut, idem
  var effect = btnbtt.getAttribute('aria-pressed');
  btnbtt.addEventListener("click", function (event) {
    bgChange();
    event.preventDefault();
    if (isFirefox) {
      docElem.scrollTop = 0;
    }
    else { body.scrollTop = 0; }
    btnbtt.setAttribute('class', 'btn position-fixed bottom-0 end-50');
    console.log(effect);
  });
};
console.log(effect);
document.querySelector('p').click();

//effet sur le titre de la page d'accueil
const text = document.getElementById("mytitle1");
console.log(text);
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText)
text.textContent = "";
for (i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}
const span_text = text.querySelectorAll('span')
for (i = 0; i < span_text.length; i++) {
  
  const span = span_text[i]
  span.classList.add('transition-base')
  span.classList.add('op-0')
}

let badge_container = document.createElement('div')
badge_container.classList.add('container')
let badge = document.createElement('span');
badge.textContent = "BLOG-TECH";
badge.classList.add('badge','bg-info','op-0')
text.appendChild(badge_container)
badge_container.appendChild(badge)


let char = 0;
let timer = setInterval(onTick, .5);
const tl = new TimelineMax();

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.replace('op-0', 'op-100')  
  char++;
  if (char === splitText.length) {    
    tl.fromTo(badge_container,.2,{opacity:0},{opacity:1}).fromTo({height:"0%"},{height:"100%"});
    complete();
    return;
  }
}


function complete() {
  clearInterval(timer);
  timer = null
}

// setTimeout(function(){badge.classList.add('');},1000)

const img_container = document.querySelector('#container_main_image')
const HSV = document.querySelector('#main_image')

setTimeout(function(){img_container.classList.remove('invisible')
tl.fromTo(img_container,1,{opacity:0},{opacity:1})
.fromTo(img_container, 1, { height: "0%" }, { height: "100%", ease: Bounce },"-=1")  
.fromTo(img_container, 1, { width: "0%" }, { width: "50%", ease: Bounce },"-=1");
}, 1000)
