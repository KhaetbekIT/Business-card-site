console.clear()

// Иниц. функцию
const InitFunc = () => {

    // Задаём дефолтный индекс для слайда
    let slideIndex = 0

    // Создаём функцию для Слайда
    const SlideShowFunc = () => {

        //Ищем обрамляющий блок
        const slidesWrapper = document.querySelector("#photos")

        // от HTMLCollection => Array
        const slides = Array.from(slidesWrapper.children)

        let i = 0

        // Скрываем весь эелементы
        for (i = 0; i < slides.length; i++) {
            const element = slides[i];

            element.hidden = true
            element.dataset.slideIndex = i
        }

        // Увеличиваем индекс
        slideIndex++

        //Проверяем счётчик индекса, если больше то принимет 1/ это 1 - 1 = 0
        if(slideIndex > slides.length){
            slideIndex = 1
        }

        // Показываем каждый элемент
        slides[slideIndex - 1].hidden = false

        // Задаём промежуток времений для задержкий
        setTimeout(SlideShowFunc, 300)

    }

    SlideShowFunc()
}

InitFunc()