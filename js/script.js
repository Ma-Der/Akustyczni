'use strict';

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

const startPage = document.querySelector('.start');
    startPage.addEventListener('click', function(){
      loadPage('./src/start.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
const bandPage = document.querySelector('.band');
    bandPage.addEventListener('click', function(){
      loadPage('./src/band.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const mediaPage = document.querySelector('.media');
    mediaPage.addEventListener('click', function(){
      loadPage('./src/media.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const offerPage = document.querySelector('.offer');
    offerPage.addEventListener('click', function(){
      loadPage('./src/offer.html')
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

const marylaPage = document.querySelector('.maryla');
    marylaPage.addEventListener('click', function(){
      loadPage('./src/maryla.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });
const tomekPage = document.querySelector('.tomek');
    tomekPage.addEventListener('click', function(){
      loadPage('./src/tomek.html')
        .then(
          page => mainPage.innerHTML = page
        );
    });

const franekPage = document.querySelector('.franek');
    franekPage.addEventListener('click', function(){
      loadPage('./src/franek.html')
        .then(
          page => mainPage.innerHTML = page
        );
      });

const maciekmPage = document.querySelector('.maciekm');
    maciekmPage.addEventListener('click', function(){
      loadPage('./src/maciekm.html')
        .then(
          page => mainPage.innerHTML = page
        );
      });

const maciekdPage = document.querySelector('.maciekd');
    maciekdPage.addEventListener('click', function(){
      loadPage('./src/maciekd.html')
        .then(
          page => mainPage.innerHTML = page
        );
      });

const patrykPage = document.querySelector('.patryk');
    patrykPage.addEventListener('click', function(){
      loadPage('./src/patryk.html')
        .then(
          page => mainPage.innerHTML = page
        );
      });

const marcinPage = document.querySelector('.marcin');
    marcinPage.addEventListener('click', function(){
      loadPage('./src/marcin.html')
        .then(
          page => mainPage.innerHTML = page
        );
      });
