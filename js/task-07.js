/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/
const fontSizeControlEl = document.querySelector('#font-size-control');

fontSizeControlEl.addEventListener('input', event => {
  const textEl = document.querySelector('#text');

  textEl.style.fontSize = `${Number(fontSizeControlEl.value)}px`;
});
