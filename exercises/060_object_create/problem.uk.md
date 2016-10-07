Object.create
---------------

Як ми вже дізналися `__proto__` це не найкащій, та не надійний спосіб додавання прототипу до об'єкту. Тож є простий спосіб `Object.create()`. Така можливість з'явилася у ES5, проте в старих браузерах можна використовувати [es5-shim](https://github.com/kriskowal/es5-shim).

```js
var alien = {
	kind: 'alien'
};

// створюємо новий об'єкт в прототипом alien
var zack = Object.create(alien);

console.log(zack.kind); // => 'alien'
```

Ви маєте можливість додати до нового об'єкту параметри за допомогою `Object.create`:

```js
var zack = Object.create(alien, {age: {value:  13} });
console.log(zack.age); // => '13'
```

Хоча, такий спосіб може здаватися вам заплутаним. Проте, є документація [тут](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### `Object.getPrototypeOf`

Щоб отримати прототип об'єкту скористайтеся `Object.getPrototypeOf`:

```js
var zack = Object.create(alien);
Object.getPrototypeOf(zack); //=> alien
```

### `Object.setPrototypeOf`

Нова (чи не така вже і нова) версія JavaScript (ES2015) впровадила метод `Object.setPrototypeOf(object, prototype)` в якості офіційної альтернативи `__proto__`. Проте, варто зауважити, що зміна прототипу в процесі виконання дуже сповільнює програму. Тож, зазвичай краще додати прототип на стадії формування об'єкту через `Object.create()`. 

Завдання
---------

Дотримуйстесь інструкцій з файлу 060.js. 
Цей файл вже створено для вас.
