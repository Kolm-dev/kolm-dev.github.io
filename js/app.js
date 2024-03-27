document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.works__slider .work');
  var currentSlide = 0;
  function showSlide(index) {
    slides.forEach(function(slide, i) {
      slide.style.display = i === index ? 'flex' : 'none';
    });
  }
  function changeSlide() {
    var next =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    slides[currentSlide].style.display = 'none';
    if (next) {
      currentSlide = (currentSlide + 1) % slides.length;
    } else {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    slides[currentSlide].style.display = 'flex';
  }
  slides.forEach(function(slide, i) {
    slide.querySelector('.work__next').addEventListener('click', function() {
      changeSlide(true);
    });
    slide.querySelector('.work__prev').addEventListener('click', function() {
      changeSlide(false);
    });
  });
  showSlide(currentSlide);
});
