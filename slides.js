const slides = [
    {
        title: "CYBERPUNK CRY",
        description: "Dynamic TPS-game in cyberpunk setting Futuristic graphics combined with thrilling combats and anime style",
        image: "./Images/Cyberpunk Product Card.png",
        link: "./error.html"
    },
    {
        title: "JINX",
        description: "New animated serial about one heroine of serial Arcane It tells about Jinx’s life after first part of her story",
        image: "./Images/Jinx Project Card.png",
        link: "https://www.netflix.com/title/81435684"
    },
    {
        title: "SHARDS OF ETERNITY",
        description: "3D dark fantasy game with horror elements about Asian girl who can use magic",
        image: "./Images/Shards Product Card.png",
        link: "./error.html"
    }
];
const slideTitle = document.getElementById('slide-title');
const slideDescription = document.getElementById('slide-description');
const slideImage = document.getElementById('slide-image');
const slideLink = document.getElementById('link');

let currentSlide = 0;
let isScrolling = false;

function updateSlide(index) {
    slideTitle.textContent = slides[index].title;
    slideDescription.textContent = slides[index].description;
    slideImage.src = slides[index].image;
    slideLink.href = slides[index].link;
}

updateSlide(currentSlide);

window.addEventListener('wheel', (event) => {
    if(!isScrolling){
        isScrolling = true;
        if (event.deltaY > 0) {
            // Прокрутка вниз
            if(currentSlide < slides.length - 1){
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlide(currentSlide);
            }
        } else {
            // Прокрутка вверх
            if(currentSlide > 0){
                currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Циклический переход
                updateSlide(currentSlide);
            }
        }
        setTimeout(() => {
            isScrolling = false;
            console.log("!")
        }, 500)
    }
});

if(currentSectionIndex === currentSectionIndex.length - 1){
    if(currentSectionIndex === currentSectionIndex.length - 1){
       
        if(currentSlide === 0){
            canScrollDown = false;
            canScrollUp = true;
        } else if(currentSlide > 0 && currentSlide < slides.length - 1){
            canScrollDown = false;
            canScrollUp = false
        } else{
            canScrollDown = true;
            canScrollUp = false;
        }
    }  
}  