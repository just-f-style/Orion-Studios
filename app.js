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
if('scrollRestoration' in history){
    history.scrollRestoration = 'manual';
}
setTimeout(() =>{
    window.scrollTo(0, 0);
}, 0);
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.image-container')
const slideTitle = document.querySelector(".slide-title")
const slideDesc = document.querySelector(".slide-description")
const slideLink = document.querySelector(".links")

let activeSlideIndex = 0
let isScrollingSlidebar = false;

const slidesCount = mainSlide.querySelectorAll('img').length

const sections = document.querySelectorAll('.content');
const header = document.querySelector('header');
let currentSectionIndex = 0;

let isScrolling = false; // Флаг для блокировки повторных событий

const loadingText = document.querySelector('.preloader-text');

let dots = 1;
const maxDots = 3;

setInterval(() => {
  dots = (dots % maxDots) + 1; // Цикл от 1 до 3

  let text = 'Loading';
  for (let i = 0; i < dots; i++) {
    text += '.';
  }

  loadingText.textContent = text;
}, 500);
let randomTime = Math.random();
window.addEventListener('load', function (){
    this.setInterval(() => {
        
        const preloader = document.getElementById('preloader');
    
        // Останавливаем анимацию точек
        clearInterval(window.loadingDotsInterval);
      
        // Плавное скрытие
        preloader.classList.add('hide');
      
        setTimeout(() => {
          preloader.remove();
        }, 800);
    }, Math.round(randomTime * 3000))
  });
  console.log(Math.round(randomTime * 3000));
window.addEventListener('wheel', (event) => {
    if(isScrolling === false){
        if (event.deltaY > 0) {
            // Прокрутка вниз
            scrollToSection('up');
            hideShowHeader(currentSectionIndex);
        } else if(event.deltaY < 0) {
            // Прокрутка вверх
            scrollToSection('down');
            hideShowHeader(currentSectionIndex);
        }
    }  
    if(isScrollingSlidebar === false && currentSectionIndex === 3){
        if(event.deltaY > 0){
            console.log("up")
            changeSlide('up')
        } else if(event.deltaY < 0) {
            console.log("up")
            changeSlide('down')
        }
    }
    setTimeout(() => {
        isScrolling = false;
        isScrollingSlidebar = false;
    }, 500);
    

});

// Добавляем поддержку клавиш
window.addEventListener('keydown', (event) => {
    if(isScrolling === false){
        if (event.key === 'ArrowDown') {
            scrollToSection(currentSectionIndex + 1);
            hideShowHeader(currentSectionIndex);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentSectionIndex - 1);
            hideShowHeader(currentSectionIndex);
        }
    }
    if(isScrollingSlidebar === false && currentSectionIndex === 3){    
        if(event.key === 'ArrowUp'){
            changeSlide('up')

        } else if(event.key === 'ArrowDown'){
            changeSlide('down')
        }
    }

    setTimeout(() => {
        isScrolling = false;
        isScrollingSlidebar = false;
    }, 500);
});

function scrollToSection(direction) {
    isScrolling = true; // Блокируем новые события прокрутки
    if(direction === "up"){

        if(currentSectionIndex === 3){

            if(activeSlideIndex === slidesCount - 1){
                currentSectionIndex++;
                isScrolling = true;
                isScrollingSlidebar = true;
            } else{
                currentSectionIndex === 3;
            }

        } else{
            currentSectionIndex++
            isScrolling = true;
            isScrollingSlidebar = true;
        }

        if(currentSectionIndex === sections.length){
            currentSectionIndex = sections.length - 1;
        }
    } else if(direction === "down"){

        if(currentSectionIndex === 3){

            if(activeSlideIndex === 0){
                currentSectionIndex--;
                isScrolling = true;
                isScrollingSlidebar = true;
            } else{
                currentSectionIndex === 3;
            }

        } else{
            currentSectionIndex--
            isScrolling = true;
            isScrollingSlidebar = true;
        }

        if(currentSectionIndex < 0){
            currentSectionIndex = 0;
        }
    }
    window.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth'
    }); // Задержка равна длительности анимации
}

function hideShowHeader(index){
    if(index >= 3){
        header.style.visibility = "hidden"
    }
    else{
        header.style.visibility = "visible"
    }
}

function changeSlide(direction){
    isScrollingSlidebar = true;
    
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
    mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`
    changeText(activeSlideIndex);
}
function changeText(index){
    slideTitle.textContent = slides[index].title;
    slideDesc.textContent = slides[index].description;
    slideLink.href = slides[index].link;
}
const form = document.querySelector('form');
const fnameInput = document.querySelector('.fname');
const lnameInput = document.querySelector('.lname');
const msgInput = document.querySelector('.msg');
const submitBtn = document.querySelector('.submit-btn');

function checkForm(){
    if( 
        fnameInput.value == '' ||
        lnameInput.value == '' ||
        msgInput.value == ''
    ){
        submitBtn.disabled = true;
    } else{
        submitBtn.disabled = false;
    }
}
form.addEventListener('input', checkForm)
form.addEventListener('submit', function (e){
    e.preventDefault;
    const formData = new FormData(this);
    fetch('/submit', {
        method: 'POST',
        body: formData
    }).then(response =>{
        window.location.href = "./submit.html"
        this.reset();
        submitBtn.disabled = true;
    }).catch(error => {
        console.error('Ошибка: ', error);
    });
});