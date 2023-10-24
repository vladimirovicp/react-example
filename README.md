# Задача 1

Нужно порефакторить приложение!
<br>
В Page 1 находится функция **downloadDataBooks**,
```js
    const downloadDataBooks = (number = '') => {
    const url = `./data/books${number}.json`
    axios.get(url)
        .then(response => {
            setBooks(response.data);
            setLoading(false);
        })
        .catch((err) =>{
            console.log(err);
            setLoading(false);
        });
}
```
функцию нужно вынести за пределы компонента, чтобы к данной функции можно было обратиться из любого места.
<br>


## Решение 
Задача непосредственно связана с принципом [https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself](DRY (Don't repeat yourself)). Решение может быть получено двумя способами: с помощью кастомных хуков или HOC (higher order components). Поскольку документация react сообщает о том, что паттерн HOC не приветствуется в современной версии фреймворка, в данном бренче приводится решение на основе хуков. Поскольку условием является получение данных с помощью axios, написание кастомного хука относится к [https://medium.com/@nelson_examiner/building-custom-react-hooks-for-calling-apis-ab82a6b45ff](одному из распространненых сценариев их использования).

Источники:
- [https://medium.com/javascript-scene/do-react-hooks-replace-higher-order-components-hocs-7ae4a08b7b58](Do React Hooks Replace Higher Order Components (HOCs)?)
- [https://react.dev/learn/reusing-logic-with-custom-hooks](Reusing Logic with Custom Hooks)
- [https://medium.com/@nelson_examiner/building-custom-react-hooks-for-calling-apis-ab82a6b45ff](https://medium.com/@nelson_examiner/building-custom-react-hooks-for-calling-apis-ab82a6b45ff)