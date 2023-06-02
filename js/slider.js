const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let sliderControls = document.querySelectorAll('.slider-input');


for (let i=0; i < sliderControls.length; i++) {
  let sliderControl = sliderControls[i];
  sliderControl.addEventListener('click', function() {
    for (j=0; j < slides.length; j++) {
      let slide = slides[j];
      if (sliderControl.value != j+1) {
        slide.classList.remove('active-slide');
      } else {
          slide.classList.add('active-slide');
      }
    }
  });
}



