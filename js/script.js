'use strict';
import setList from './setlist.js';
import { personObserver } from './mainPage.js';

/* navigation color change after click */

var header = document.getElementById("mainmenu");
var btns = header.getElementsByClassName("menu-el");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

/* page loading script */

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
      page => {
        mainPage.innerHTML = page;
        personObserver();
      }
    );
    
});

const startPage = document.querySelector('.akustyczni');
    startPage.addEventListener('click', function(){
      loadPage('./src/start.html')
        .then(
          page => {
            mainPage.innerHTML = page
            personObserver();
  
});
    });

const bandPage = document.querySelector('.zespol-na-wesele');
    bandPage.addEventListener('click', function(){
      loadPage('./src/na-weselu.html')
        .then(
          page => {
            mainPage.innerHTML = page
            const maryla = document.getElementById('maryla')
            console.log("dupa")
          }
        );
    });


const galleryPage = document.querySelector('.galeria');
    galleryPage.addEventListener('click', function(){
      loadPage('./src/galeria.html')
        .then(
          page => {
            mainPage.innerHTML = page;

/* carousel init & options */

           const flkty = new Flickity( '.main-carousel', {
              pageDots: false,
              cellAlign: 'left',
              contain: true
            });
          }
        )
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
          page => {
            mainPage.innerHTML = page;

      /* form send */

            mainPage.addEventListener("load", function() {

              var form = document.getElementById("akustyczni-form");
              var button = document.getElementById("form-button");
              var status = document.getElementById("form-status");

              function success() {
                form.reset();
                button.style = "display: none";
                status.innerHTML = "Dziękujemy za wiadomość :)";
              }

              function error() {
                status.innerHTML = "Coś poszło nie tak, spróbuj ponownie :(";
              }

              form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
              });
            });

            function ajax(method, url, data, success, error) {
              var xhr = new XMLHttpRequest();
              xhr.open(method, url);
              xhr.setRequestHeader("Accept", "application/json");
              xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                  success(xhr.response, xhr.responseType);
                } else {
                  error(xhr.status, xhr.response, xhr.responseType);
                }
              };
              xhr.send(data);
            }
          }
        );
    });

const repertuarPage = document.querySelector('.repertuar');
    repertuarPage.addEventListener('click', function(){
      loadPage('./src/repertuar.html')
        .then(
          page => {
            mainPage.innerHTML = page;

            for (let i=0; i < setList.length; i++) {
              let ulList = document.getElementById('set-list');
              let liElement = document.createElement('li');
              liElement.classList.add('song');
              liElement.appendChild(document.createTextNode(setList[i].artist + ' - ' + setList[i].title));
              ulList.appendChild(liElement);
            }
        }
        );
    });

/* icons redirect */

const facebookRedirect = document.querySelector('#facebook');
  facebookRedirect.addEventListener('click', function() {
    window.open("http://facebook.com/akustyczni.live/",'_blank');
  });
const instagramRedirect = document.querySelector('#instagram');
  instagramRedirect.addEventListener('click', function() {
  window.open("https://www.instagram.com/akustyczni/",'_blank');
  });
