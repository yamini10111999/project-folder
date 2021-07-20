var _currentSlide = 0;
let _slides = document.querySelectorAll(".slideShow .slide");

_showSlide(_currentSlide);
var x = setInterval(() => {
  _currentSlide++;
  _showSlide(_currentSlide);
}, 4000);

function _changeSlide(n) {
  _currentSlide += n;
  _showSlide(_currentSlide);
}

function _showSlide(index) {
  if (index > _slides.length - 1) _currentSlide = 0;
  if (index < 0) _currentSlide = _slides.length - 1;

  for (let i = 0; i < _slides.length; i++) {
    _slides[i].style.display = "none";
  }

  _slides[_currentSlide].style.display = "block";
  _slides[_currentSlide].classList.add('slideActive');

}
