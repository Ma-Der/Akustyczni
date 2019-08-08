'use strict';

var header = document.getElementById("mainmenu");
var btns = header.getElementsByClassName("menu-el");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


function loadPage(href) {
  return new Promise((resolve, reject) => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", href);
  xmlhttp.addEventListener('load', () => resolve(xmlhttp.responseText));
  xmlhttp.addEventListener('error', () => reject(new Error(xmlhttp.statusText)));
  xmlhttp.send();
});
}

const mainPage = document.getElementById('main');

document.addEventListener('DOMContentLoaded', function(){
  loadPage('./src/start.html')
    .then(
      page => mainPage.innerHTML = page
    );
});

const startPage = document.querySelector('.akustyczni');
    startPage.addEventListener('click', function(){
      loadPage('./src/start.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
const bandPage = document.querySelector('.zespol-na-wesele');
    bandPage.addEventListener('click', function(){
      loadPage('./src/na-weselu.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const galleryPage = document.querySelector('.galeria');
    galleryPage.addEventListener('click', function(){
      loadPage('./src/galeria.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const videoPage = document.querySelector('.video');
    videoPage.addEventListener('click', function(){
      loadPage('./src/video.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const offerPage = document.querySelector('.faq');
    offerPage.addEventListener('click', function(){
      loadPage('./src/faq.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const contactPage = document.querySelector('.contact');
    contactPage.addEventListener('click', function(){
      loadPage('./src/contact.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
const opiniePage = document.querySelector('.opinie');
    opiniePage.addEventListener('click', function(){
      loadPage('./src/opinie.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const repertuarPage = document.querySelector('.repertuar');
    repertuarPage.addEventListener('click', function(){
      loadPage('./src/repertuar.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
