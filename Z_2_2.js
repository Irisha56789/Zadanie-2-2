//Задание 2.2

//Вопрос 1

// Создаем переменные
const firstName = "Irina";     // Имя
const age = 25;                // Возраст
const city = "Schelkovo";      // Город проживания

// Определяем типы данных
console.log("Тип данных переменной firstName:", typeof firstName);
console.log("Тип данных переменной age:", typeof age);
console.log("Тип данных переменной city:", typeof city);

//Вопрос 2

// Создаем переменные для имени и фамилии
const fstName = "Irina";       // Имя
const lastName = "Sosnovskaya";      // Фамилия

// Объединяем имя и фамилию в полное имя
const fullName = fstName + " " + lastName;

// Выводим полное имя в консоль
console.log(fullName);

//Вопрос 3

//Вариант 1
// Создаем переменную с числом в виде строки
let numberString1 = "25.5"; 

// Преобразуем строку в число
let number1 = parseFloat(numberString1); 

// Проверяем, является ли число целым
let num1 = Number.isInteger(number1);

// Выводим результаты в консоль
console.log("Преобразованное число:", number1);
console.log("Является ли число целым?", num1);

//Вариант 2
// Создаем переменную с целым числом в виде строки
let numberString2 = "42";

// Преобразуем строку в число
let number2 = parseInt(numberString2); 

// Проверяем, является ли число целым
let num2 = Number.isInteger(number2);

// Выводим результаты в консоль
console.log("Преобразованное число:", number2);
console.log("Является ли число целым?", num2);

//Вопрос 4
let stroka = "JavaScript is fun!";
let index = stroka.indexOf("fun"); // Находим индекс слова "fun"
let podstroka = stroka.slice(index, index + 3).toUpperCase(); // Извлекаем подстроку и преобразуем буквы в заглавные
console.log(podstroka);

//Вопрос 5
// Создание переменных
const product = "сапоги резиновые"; // Название переменной менять не планируем
let price = 1500; // Цена может быть изменена

// Использование шаблонной строки для формирования сообщения
const message = `Цена на ${product} составляет ${price} рублей.`;

// Вывод сообщения в консоль
console.log(message);

//Вопрос 6
// Создание переменной с вещественным числом
const floatingNumber = 5.7;

// Округление числа до ближайшего целого
const roundedNumber = Math.round(floatingNumber);

// Вывод результата в консоль
console.log(`Исходное число: ${ floatingNumber}`);
console.log(`Округленное число: ${ roundedNumber}`);

//Вопрос 7
// Создание двух переменных с числовыми значениями
const num_1 = 10;
const num_2 = 5;

// Определение, какое число больше, и сохранение результата в булевой переменной
const isNum1Greater = num_1 > num_2;

// Вывод результатов в консоль
console.log(`Первое число: ${num_1}`);
console.log(`Второе число: ${num_2}`);
console.log(`Первое число больше, чем второе число? ${isNum1Greater}`);

//Вопрос 8
const person = {
    name: "Irina",
    age: 26,
    favoriteColor: "White"
};

// Вывод объекта в консоль
console.log(person);

//Вопрос 9
// Создание переменной с числом, содержащим несколько знаков после запятой
const number = 5.6789;

// Округление числа до двух знаков после запятой
const roundedNumb = number.toFixed(2);

// Вывод результата в консоль
console.log(`Исходное число: ${number}`);
console.log(`Округленное число: ${roundedNumb}`);

//Вопрос 10
// Создание строковой переменной
const fruitsString = "apple, orange, banana";

// Преобразование строки в массив с разделением её по запятым
const fruitsArray = fruitsString.split(", ");

// Вывод результата в консоль
console.log(fruitsArray);

//Вопрос 11
// Создание переменной с результатом некорректного математического выражения
const result = "hello" / 2; // деление строки на число

// Проверка, является ли результат NaN
if (isNaN(result)) {
    console.log("Результат является NaN");
} else {
    console.log("Результат не является NaN");
}

//Вопрос 12

//С новыми строками в коде без \n

const multilineText = `Синтаксис JavaScript — это набор правил, по которым строится программа.
В JavaScript существуют два типа значений: фиксированные и переменные.
Фиксированные числовые и текстовые строковые значения называются литералами.`;

console.log(multilineText);

//Вопрос 13

// Создаем переменную с булевым значением true
let booleanValue = true;

// Преобразуем булевое значение в строку
let stringValue = booleanValue.toString();

// Определяем тип данных результата
let resultType = typeof stringValue;

// Выводим результат
console.log("Преобразованное значение:", stringValue); 
console.log("Тип данных результата:", resultType); 

//Вопрос 14

// Создаем символ с описанием "id"
const idSymbol = Symbol("id");

// Создаем объект
const myObject = {
    [idSymbol]: 123, // Используем символ в качестве ключа
    name: "Ivan"    // Обычный строковый ключ
};

// Выводим объект в консоль
console.log(myObject); 

//Вопрос 15

// Создание массива с несколькими числами
const numbers = [11, 21, 31, 41, 51];

// Определение количества элементов в массиве
const count = numbers.length;

// Вывод результата в консоль
console.log("Количество элементов в массиве:", count);
