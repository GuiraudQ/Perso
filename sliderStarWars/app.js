const slides = {
    1: document.querySelectorAll('[data-slide="1"]'),
    2: document.querySelectorAll('[data-slide="2"]'),
    3: document.querySelectorAll('[data-slide="3"]'),
}
const stepper = {
    1: document.querySelectorAll('[data-stepper="1"]'),
    2: document.querySelectorAll('[data-stepper="2"]'),
    3: document.querySelectorAll('[data-stepper="3"]'),
    4: document.querySelectorAll('[data-stepper="4"]'),
    5: document.querySelectorAll('[data-stepper="5"]'),
    6: document.querySelectorAll('[data-stepper="6"]'),
}
const years = {
    1: document.querySelectorAll('[data-years="1"]'),
    2: document.querySelectorAll('[data-years="2"]'),
    3: document.querySelectorAll('[data-years="3"]'),
}

let currentSlide = 1;

function updateSlide(){
    if (slides[currentSlide]){
        slides[currentSlide-1].forEach(element => {
            element.classList.toggle('active')
            element.classList.toggle('last')
        });
        slides[currentSlide].forEach(element => {
            element.classList.toggle('active')
        });
    }
    if (slides[currentSlide]){
        for (let i = 0; i < 4; i++) {
            if (years[currentSlide][i].textContent != years[currentSlide-1][i].textContent){
                console.log(years[currentSlide][i]);
                years[currentSlide-1][i].style.transitionDelay = i/15+"s";
                years[currentSlide][i].style.transitionDelay = i/15+"s";
                years[currentSlide-1][i].classList.toggle('last');
                years[currentSlide-1][i].classList.toggle('active');
                years[currentSlide][i].classList.toggle('active');
            }
        }
    }
    if (stepper[currentSlide]){
        stepper[currentSlide].forEach(element => {
            element.classList.toggle('active')
        });
    }
}

function turnLeft(){
    if (slides[currentSlide-1] || stepper[currentSlide-1]){
        updateSlide();
        if (currentSlide > 1){
            currentSlide--;
        }
    }
}
function turnRight(){
    if (currentSlide < 6){
        currentSlide++;
    }
    updateSlide();
}