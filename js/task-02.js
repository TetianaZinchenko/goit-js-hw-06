const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

/*
Напиши скрипт, который для каждого элемента массива ingredients:

1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за одну операцию в список ul#ingredients.
*/

const itemsEl = document.querySelector('ul');

/*
1 вариант
*/

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemsChildrenEl = document.createElement('li');
//   itemsChildrenEl.textContent = ingredients[i];
//   elements.push(itemsChildrenEl);
// }

// itemsEl.append(...elements);

/*
2 вариант
*/

// const elements = ingredients.map(ingredient => {
//   const itemsChildrenEl = document.createElement('li');
//   itemsChildrenEl.textContent = ingredient;
//   return itemsChildrenEl;
// });

// itemsEl.append(...elements);

/*
3 вариант
*/

const makeIngredients = ingredient =>
  ingredient.map(ingredient => {
    const itemsChildrenEl = document.createElement('li');
    itemsChildrenEl.textContent = ingredient;
    return itemsChildrenEl;
  });

const elements = makeIngredients(ingredients);
itemsEl.append(...elements);
