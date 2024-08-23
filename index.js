const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


//    Слайдер


// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.product-img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// // Получаем элементы слайдера
// const slider_duck = document.querySelector('.slider-duck');
// const prevButton_duck = document.querySelector('.prev-button-duck');
// const nextButton_duck = document.querySelector('.next-button-duck');
// const slides_duck = Array.from(slider_duck.querySelectorAll('.product-img-duck'));
// const slideCount_duck = slides_duck.length;
// let slideIndex_duck = 0;

// // Устанавливаем обработчики событий для кнопок
// prevButton_duck.addEventListenerDuck('click', showPreviousSlideDuck);
// nextButton_duck.addEventListenerDuck('click', showNextSlideDuck);

// // Функция для показа предыдущего слайда
// function showPreviousSlideDuck() {
//   slideIndex_duck = (slideIndex_duck - 1 + slideCount_duck) % slideCount_duck;
//   updateSliderDuck();
// }

// // Функция для показа следующего слайда
// function showNextSlideDuck() {
//   slideIndex_duck = (slideIndex_duck + 1) % slideCount_duck;
//   updateSliderDuck();
// }

// // Функция для обновления отображения слайдера
// function updateSliderDuck() {
//   slides_duck.forEachDuck((slide_Duck, index_duck) => {
//     if (index_duck === slideIndex_duck) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// // Инициализация слайдера
// updateSliderDuck();
