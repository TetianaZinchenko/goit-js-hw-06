function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
и выводит значение цвета в span.color.
Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();

  colorEl.textContent = bodyEl.style.backgroundColor;
}
