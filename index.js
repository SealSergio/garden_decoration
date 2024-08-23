// Прокрутка


// const contacts = document.getElementById('#contacts');
// element.scrollIntoView(header_height);

// const sheet = document.styleSheets[1];
// sheet.insertRule('.contacts { scroll-margin-block-start: header_height; }', sheet.cssRules.length);


// var hiddenElement = document.getElementById("#contacts");
// var btn = document.querySelector("#menu-link-contacts");

// function handleButtonClick() {
//   hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
// }

// btn.addEventListener("click", handleButtonClick);

// Бургер-меню

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

// Получаем элементы слайдера
const slider_duck = document.querySelector('.slider-duck');
const prevButton_duck = document.querySelector('.prev-button-duck');
const nextButton_duck = document.querySelector('.next-button-duck');
const slides_duck = Array.from(slider_duck.querySelectorAll('.product-img-duck'));
const slideCount_duck = slides_duck.length;
let slideIndex_duck = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_duck.addEventListener('click', showPreviousSlide_duck);
nextButton_duck.addEventListener('click', showNextSlide_duck);

// Функция для показа предыдущего слайда
function showPreviousSlide_duck() {
  slideIndex_duck = (slideIndex_duck - 1 + slideCount_duck) % slideCount_duck;
  updateSlider_duck();
}

// Функция для показа следующего слайда
function showNextSlide_duck() {
  slideIndex_duck = (slideIndex_duck + 1) % slideCount_duck;
  updateSlider_duck();
}

// Функция для обновления отображения слайдера
function updateSlider_duck() {
  slides_duck.forEach((slide, index) => {
    if (index === slideIndex_duck) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider_duck();

// Получаем элементы слайдера
const slider_heron = document.querySelector('.slider-heron');
const prevButton_heron = document.querySelector('.prev-button-heron');
const nextButton_heron = document.querySelector('.next-button-heron');
const slides_heron = Array.from(slider_heron.querySelectorAll('.product-img-heron'));
const slideCount_heron = slides_heron.length;
let slideIndex_heron = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_heron.addEventListener('click', showPreviousSlide_heron);
nextButton_heron.addEventListener('click', showNextSlide_heron);

// Функция для показа предыдущего слайда
function showPreviousSlide_heron() {
  slideIndex_heron = (slideIndex_heron - 1 + slideCount_heron) % slideCount_heron;
  updateSlider_heron();
}

// Функция для показа следующего слайда
function showNextSlide_heron() {
  slideIndex_heron = (slideIndex_heron + 1) % slideCount_heron;
  updateSlider_heron();
}

// Функция для обновления отображения слайдера
function updateSlider_heron() {
  slides_heron.forEach((slide, index) => {
    if (index === slideIndex_heron) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider_heron();

// Получаем элементы слайдера
const slider_swan = document.querySelector('.slider-swan');
const prevButton_swan = document.querySelector('.prev-button-swan');
const nextButton_swan = document.querySelector('.next-button-swan');
const slides_swan = Array.from(slider_swan.querySelectorAll('.product-img-swan'));
const slideCount_swan = slides_swan.length;
let slideIndex_swan = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_swan.addEventListener('click', showPreviousSlide_swan);
nextButton_swan.addEventListener('click', showNextSlide_swan);

// Функция для показа предыдущего слайда
function showPreviousSlide_swan() {
  slideIndex_swan = (slideIndex_swan - 1 + slideCount_swan) % slideCount_swan;
  updateSlider_swan();
}

// Функция для показа следующего слайда
function showNextSlide_swan() {
  slideIndex_swan = (slideIndex_swan + 1) % slideCount_swan;
  updateSlider_swan();
}

// Функция для обновления отображения слайдера
function updateSlider_swan() {
  slides_swan.forEach((slide, index) => {
    if (index === slideIndex_swan) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider_swan();

// Получаем элементы слайдера
const slider_deer = document.querySelector('.slider-deer');
const prevButton_deer = document.querySelector('.prev-button-deer');
const nextButton_deer = document.querySelector('.next-button-deer');
const slides_deer = Array.from(slider_deer.querySelectorAll('.product-img-deer'));
const slideCount_deer = slides_deer.length;
let slideIndex_deer = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_deer.addEventListener('click', showPreviousSlide_deer);
nextButton_deer.addEventListener('click', showNextSlide_deer);

// Функция для показа предыдущего слайда
function showPreviousSlide_deer() {
  slideIndex_deer = (slideIndex_deer - 1 + slideCount_deer) % slideCount_deer;
  updateSlider_deer();
}

// Функция для показа следующего слайда
function showNextSlide_deer() {
  slideIndex_deer = (slideIndex_deer + 1) % slideCount_deer;
  updateSlider_deer();
}

// Функция для обновления отображения слайдера
function updateSlider_deer() {
  slides_deer.forEach((slide, index) => {
    if (index === slideIndex_deer) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider_deer();

// Получаем элементы слайдера
const slider_tree = document.querySelector('.slider-tree');
const prevButton_tree = document.querySelector('.prev-button-tree');
const nextButton_tree = document.querySelector('.next-button-tree');
const slides_tree = Array.from(slider_tree.querySelectorAll('.product-img-tree'));
const slideCount_tree = slides_tree.length;
let slideIndex_tree = 0;

// Устанавливаем обработчики событий для кнопок
prevButton_tree.addEventListener('click', showPreviousSlide_tree);
nextButton_tree.addEventListener('click', showNextSlide_tree);

// Функция для показа предыдущего слайда
function showPreviousSlide_tree() {
  slideIndex_tree = (slideIndex_tree - 1 + slideCount_tree) % slideCount_tree;
  updateSlider_tree();
}

// Функция для показа следующего слайда
function showNextSlide_tree() {
  slideIndex_tree = (slideIndex_tree + 1) % slideCount_tree;
  updateSlider_tree();
}

// Функция для обновления отображения слайдера
function updateSlider_tree() {
  slides_tree.forEach((slide, index) => {
    if (index === slideIndex_tree) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider_tree();
