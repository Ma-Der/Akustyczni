'use strict';

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
