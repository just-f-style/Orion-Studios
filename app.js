const sections = document.querySelectorAll('.content');
const header = document.querySelector('header');
let currentSectionIndex = 0;
let isScrolling = false; // Флаг для блокировки повторных событий

function scrollToSection(index) {
    if (index >= 0 && index < sections.length && !isScrolling) {
        isScrolling = true; // Блокируем новые события прокрутки

        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: 'smooth'
        });

        currentSectionIndex = index;

        setTimeout(() => {
            isScrolling = false;
        }, 500); // Задержка равна длительности анимации
    }
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Прокрутка вниз
        scrollToSection(currentSectionIndex + 1);
        hideShowHeader(currentSectionIndex);
    } else if(event.deltaY < 0) {
        // Прокрутка вверх
        scrollToSection(currentSectionIndex - 1);
        hideShowHeader(currentSectionIndex);
    }
});

// Добавляем поддержку клавиш
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        scrollToSection(currentSectionIndex + 1);
        hideShowHeader(currentSectionIndex);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSectionIndex - 1);
        hideShowHeader(currentSectionIndex);
    }
});

function hideShowHeader(index){
    if(index >= 3){
        header.style.visibility = "hidden"
    }
    else{
        header.style.visibility = "visible"
    }
}


        
   
