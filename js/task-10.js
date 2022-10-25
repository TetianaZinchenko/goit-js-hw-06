function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку
Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано
в amount и добавляет их в div#boxes.

- Размеры самого первого <div> - 30px на 30px.
- Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
- Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
*/

const btnDataCreateEl = document.querySelector('[data-create]');
const btnDataDestroyEl = document.querySelector('[data-destroy]');

const boxesEl = document.querySelector('#boxes');

const inputEl = document.querySelector('#controls >input');

inputEl.addEventListener('input', onTotalValue);

btnDataCreateEl.addEventListener('click', createBoxes);

btnDataDestroyEl.addEventListener('click', destroyBoxes);

let totalValue = 0;

function onTotalValue(event) {
  totalValue = event.currentTarget.value;
}

let total = 0;

function createBoxes(amount) {
  amount = totalValue;

  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    let total = 0;

    if (boxesEl.firstChild) {
      total = 0;
    } else {
      total += i * 10;
    }

    const itemsChildrenEl = document.createElement('div');
    itemsChildrenEl.style.backgroundColor = getRandomHexColor();
    itemsChildrenEl.style.width = `${30 + total}px`;
    itemsChildrenEl.style.height = `${30 + total}px`;

    elements.push(itemsChildrenEl);
  }
  boxesEl.append(...elements);
}

function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.firstChild.remove();
  }
}
