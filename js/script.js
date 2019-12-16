'use strict';

/* page loading script */

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
const iconPage = document.querySelector('.icon-akustyczni');
    iconPage.addEventListener('click', function(){
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
          page => {
            mainPage.innerHTML = page;

            var flkty = new Flickity( '.main-carousel', {
              on: {
              cellAlign: 'left',
              contain: true,
              groupCells: true,
              wrapAround: true
              }
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
            window.addEventListener("DOMContentLoaded", function() {

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
          page => mainPage.innerHTML = page
        );
    });

const facebookRedirect = document.querySelector('#facebook');
  facebookRedirect.addEventListener('click', function() {
    window.open("http://facebook.com/akustyczni.live/",'_blank');
  });
const instagramRedirect = document.querySelector('#instagram');
  instagramRedirect.addEventListener('click', function() {
  window.open("https://www.instagram.com/akustyczni/",'_blank');
  });
