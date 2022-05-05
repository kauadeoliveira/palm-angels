const slides = document.querySelectorAll('.slide');
const carousel = document.getElementById('carousel');
const left = document.getElementById('left');
const right = document.getElementById('right')

const images = document.querySelectorAll(".carousel img")

const SLIDES_COUNT = slides.length;

let current_slide = 0;

left.addEventListener("click", ()=>{
    current_slide--;
    if(current_slide < 0){
        current_slide = SLIDES_COUNT -1;
    }

    updateCarouse()
})

right.addEventListener("click", ()=>{
    current_slide++;
    if(current_slide > SLIDES_COUNT - 1){
        current_slide = 0
    }
    updateCarouse();
})

function updateCarouse(){
    carousel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth
    }px)`;
    document.body.style.background = `${slides[current_slide].getAttribute("data-bg")}`
}

// image 0
images[0].addEventListener("mouseover", () => {
    images[0].src = "assets/images/roupa1hover.jpg"
})
images[0].addEventListener("mouseout", () => {
    images[0].src = "assets/images/roupa1.jpg"
})

// image 1
images[1].addEventListener("mouseover", () => {
    images[1].src = "assets/images/roupa2hover.jpg"
})
images[1].addEventListener("mouseout", () => {
    images[1].src = "assets/images/roupa2.jpg"
})

// image2
images[2].addEventListener("mouseover", () => {
    images[2].src = "assets/images/tenis3hover.jpg"
})
images[2].addEventListener("mouseout", () => {
    images[2].src = "assets/images/tenis3.jpg"
})

// image 3
images[3].addEventListener("mouseover", () => {
    images[3].src = "assets/images/roupa4hover.jpg"
})
images[3].addEventListener("mouseout", () => {
    images[3].src = "assets/images/roupa4.jpg"
})