const slides = [
    {
        title: "CYBERPUNK CRY",
        description: "Dynamic TPS-game in cyberpunk setting Futuristic graphics combined with thrilling combats and anime style",
        link: "./error.html"
    },
    {
        title: "JINX",
        description: "New animated serial about one heroine of serial Arcane It tells about Jinx’s life after first part of her story",
        link: "https://www.netflix.com/title/81435684"
    },
    {
        title: "SHARDS OF ETERNITY",
        description: "3D dark fantasy game with horror elements about Asian girl who can use magic",
        link: "./error.html"
    }
];

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.image-container')
const slideTitle = document.querySelector(".slide-title")
const slideDesc = document.querySelector(".slide-description")
const slideLink = document.querySelector(".links")

let activeSlideIndex = 0
let isScrollingSlidebar = false;

const slidesCount = mainSlide.querySelectorAll('img').length

window.addEventListener("wheel", (event) =>{
    if(isScrollingSidebar === false){
        isScrollingSlidebar = true;

        if(event.deltaY > 0){
            changeSlide('up')
        } else if(event.deltaY < 0) {
            changeSlide('down')
        }
        setTimeout(() =>{
            isScrollingSidebar = false;
        }, 500)
    }
})

document.addEventListener('keydown', event =>{
    if(isScrollingSlidebar === false){
        isScrollingSlidebar = true;
        if(event.key === 'ArrowUp'){
            changeSlide('up')

        } else if(event.key === 'ArrowDown'){
            changeSlide('down')
        }
        setTimeout(() =>{
            isScrollingSidebar = false;
        }, 500)
    }
})
function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++

        if(activeSlideIndex === slidesCount){
            activeSlideIndex = slidesCount - 1
        }
    } else if (direction === 'down'){
        activeSlideIndex--

        if(activeSlideIndex < 0){
            activeSlideIndex = 0;
        }
    }
    const width = mainSlide.clientWidth
    console.log(activeSlideIndex);
    mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`
    changeText(activeSlideIndex);
}
function changeText(index){
    slideTitle.textContent = slides[index].title;
    slideDesc.textContent = slides[index].description;
    slideLink.href = slides[index].link;
}