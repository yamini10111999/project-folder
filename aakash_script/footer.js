var currentSlide = 0;
let slides = document.getElementsByClassName('mySlides');

function openModal(){
  // console.log("called openModal")
  document.getElementById('modalBox').style.display = 'flex';
}
function closeModal(){
  // console.log('called closeModal')
  document.getElementById('modalBox').style.display = 'none';
}

function showCurrentSlide(n){
  currentSlide = n;
  showSlide(currentSlide);
}

function changeSlide(n){
  currentSlide += n;
  showSlide(currentSlide);
}

function showSlide(index) {
  // console.log('called showSlide')
  if(index > slides.length - 1) currentSlide = 0;
  if(index < 0) currentSlide = slides.length - 1;

  // Hiding all slides
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  //making a slides visible
  slides[currentSlide].style.display = 'block';


}