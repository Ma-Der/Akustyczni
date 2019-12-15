var element = document.querySelector('.main-carousel');
var flkty = new Flickity(element, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

const test = document.querySelector(".carousel");
test.addEventListener('click', function() {
  test.innerHTML = "open space";
});
test.innerHTML = "test";
