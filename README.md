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
функцию нужно вынести за пределы компонента, что бы к данной функции можно было орбатиться из любого места.
<br>

