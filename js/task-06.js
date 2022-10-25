/*
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное
количество введённых символов.
- Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
- Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
*/

const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', event => {
  event.currentTarget.className = '';

  if (Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length)) {
    return event.currentTarget.classList.add('valid');
  }

  return event.currentTarget.classList.add('invalid');
});
