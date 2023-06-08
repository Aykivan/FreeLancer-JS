"use strict";
// Lesson 1 - 3
{
	// 	// Точка с запятой
	// 	console.log('Hello world!')
	// 	console.log('Я учу JS')

	// 	// Переменные
	// 	let myLifeStyle = 'freelance';
	// 	console.log(myLifeStyle);

	// 	let
	// 		myName = 'Ivan',
	// 		myAge = '26',
	// 		myLife = 'cool';

	// 	// Константы
	// 	const BLOCK_SIZE = 24;

	// 	let
	// 		userEyeColor,
	// 		user,
	// 		userName = 'Ivan';

	// 	user = userName;
	// 	console.log(user);

	// 	// Типы данных
	// 	let someVar;
	// 	console.log(typeof someVar);

	// 	someVar = 'string';
	// 	console.log(typeof someVar);

	// 	someVar = 20;
	// 	console.log(typeof someVar);

	// 	// Boolean
	// 	someVar = true;
	// 	// Nan
	// 	someVar = true / 0;
	// 	// BigInt
	// 	someVar = 12312412414124n;
	// 	// String
	// 	someVar = 'Something';
	// 	someVar = `Something: ${userName}`;
	// 	console.log(someVar);

	// 	// Object
	// 	let userInfo = {
	// 		name: "Ivan",
	// 		age: 36
	// 	}
	// 	console.log(userInfo);
	// 	console.log(typeof userInfo);

	// 	// Symbol
	// 	let id = Symbol('id');
	// 	console.log(typeof id);

	// 	// Function
	// 	let funcVar = function name(params) {
	// 		// код функции
	// 	}
	// 	console.log(typeof funcVar);

	// 	let userCalc;
	// 	console.log(typeof userCalc);
}

// Lessons 4 - типы операций
{
	// Бинарные
	// let userAge = 30 - 4; // Числа - операнды
	// console.log(userAge)

	// // Унарные
	// let userCash = -800;
	// console.log(userCash)

	// let x;
	// // Остаток от деления 
	// x = 11 % 3;
	// console.log(`Остаток от деления 11 % 3 = ${x}`);

	// // Возведение в степень 
	// x = 3 ** 2;

	// // Инкремент/Декремент
	// x++;
	// console.log(x);
	// x--;
	// console.log(x);
	// let y = 2 * ++x;
	// console.log(y);
}

// Lessons 5 - if else
{
	// if (2 > 1) {
	// 	console.log('true');
	// }

	// if (3 > 2) console.log('true');
	// else console.log('false');

	// // ? : - двоеточие заменяет else
	// let message = (5 > 11) ? "Верно!" : "Не верно";
	// console.log(message);

	// // Вместо else if
	// message = (55 > 11) ? "Верно!" :
	// 	(5 > 21) ? "21!" :
	// 		(5 > 31) ? "31!" : "No!"
	// console.log(message);
}

// Lesson 6 -For while
{
	// let i = 0;
	// while (i < 4) {
	// 	console.log(i);
	// 	i++;
	// }

	// i = 0;
	// do {
	// 	console.log(i);
	// 	i++;
	// } while (i < 3);

	// for (let j = 4; j > 0; j--) console.log(j);

	// for (let j = 4; j > 0; j--) {
	// 	if (j == i) break;
	// 	console.log(j);
	// }
	// for (let j = 4; j > 0; j--) {
	// 	if (j == 3) continue;
	// 	console.log(j);
	// }
	// firstFor: for (let i = 4; i > 0; i--) {
	// 	for (let j = 4; j > 0; j--) {
	// 		if (j == 3) continue;
	// 		break firstFor;
	// 	}
	// }
}

// Lesson 7 
{
	// let getMessage = (text, name) => console.log(text + ', ' + name + '!');
	// getMessage('Привет', 'Иван')
}

// Lesson 8 - objects

// My small practice
{
	/*Работа с переменными
	1. Объявите две переменные: admin и name .
	2. Запишите строку "Джон" в переменную name .
	3. Скопируйте значение из переменной name в admin .
	4. Выведите на экран значение admin , используя функцию alert (должна показать
	«Джон»).*/
	// let admin,
	// 	name;
	// name = 'Jon';
	// admin = name;
	// alert(admin);

	/* Придумайте правильные имена
	1. Создайте переменную для названия нашей планеты. Как бы вы её назвали?
	2. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы
	назвали такую переменную? */
	// let ourPlanetEarth, currentUserName;

	/*Рассмотрим следующий код:
	У нас есть константа birthday , а также age , которая вычисляется при помощи
	некоторого кода, используя значение из birthday (в данном случае детали не имеют
	значения, поэтому код не рассматривается).
	Можно ли использовать заглавные буквы для имени birthday ? А для age ? Или
	одновременно для обеих переменных?*/
	// const BIRTHDAY = '16.05.1997';
	// const age = someCode();

	/*FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
	Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
	Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.*/
	// function myPractice() {
	// 	for (let i = 0; i <= 100, i++;) {
	// 		if (i % 3 === 0 && i % 5 === 0) {
	// 			console.log('FizzBuzz');
	// 		} else if (i % 3 === 0) {
	// 			console.log('Fizz');
	// 		} else if (i % 5 === 0) {
	// 			console.log('Buzz');
	// 		} else {
	// 			console.log(i);
	// 		}
	// 	}
	// }
	// myPractice();

	// const list = [];
	// for (let i = 1; i <= 100; i++) {
	// 	if (i % 15 === 0) {
	// 		list.push("FizzBuzz");
	// 	} else if (i % 3 === 0) {
	// 		list.push("Fizz");
	// 	} else if (i % 5 === 0) {
	// 		list.push("Buzz");
	// 	} else {
	// 		list.push(i);
	// 	}
	// }
	// console.log(list);

}