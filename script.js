let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

// Function to Show Slide
function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }


    slider.style.transform = `translateX(-${currentIndex*100}%)`;

}
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    nextSlide();
}, 5000);

showSlide(currentIndex);
