/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его
текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const nameInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

/*
1 вариант
*/

// const textStart = output.textContent;

// nameInput.addEventListener('input', event => {
//   if (event.currentTarget.value) {
//     output.textContent = event.currentTarget.value;
//     return;
//   }
//   output.textContent = textStart;
// });

/*
2 вариант
*/

const textStart = output.textContent;

const onInput = event => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
    return;
  }
  output.textContent = textStart;
};

nameInput.addEventListener('input', onInput);

/*
3 вариант
*/

// const onInput = ({ currentTarget }) => {
//   output.textContent = currentTarget.value;

//   if (output.textContent === '') {
//     output.textContent = 'Anonymous';
//   }
// };

// nameInput.addEventListener('input', onInput);
