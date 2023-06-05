// Lesson 1 - 3
{
	"use strict";
	// Точка с запятой
	console.log('Hello world!')
	console.log('Я учу JS')

	// Переменные
	let myLifeStyle = 'freelance';
	console.log(myLifeStyle);

	let
		myName = 'Ivan',
		myAge = '26',
		myLife = 'cool';

	// Константы
	const BLOCK_SIZE = 24;

	let
		userEyeColor,
		user,
		userName = 'Ivan';

	user = userName;
	console.log(user);

	// Типы данных
	let someVar;
	console.log(typeof someVar);

	someVar = 'string';
	console.log(typeof someVar);

	someVar = 20;
	console.log(typeof someVar);

	// Boolean
	someVar = true;
	// Nan
	someVar = true / 0;
	// BigInt
	someVar = 12312412414124n;
	// String
	someVar = 'Something';
	someVar = `Something: ${userName}`;
	console.log(someVar);

	// Object
	let userInfo = {
		name: "Ivan",
		age: 36
	}
	console.log(userInfo);
	console.log(typeof userInfo);

	// Symbol
	let id = Symbol('id');
	console.log(typeof id);

	// Function
	let funcVar = function name(params) {
		// код функции
	}
	console.log(typeof funcVar);

	let userCalc;
	console.log(typeof userCalc);
}

// Lessons 4 - типы операций
{
	// Бинарные
	let userAge = 30 - 4; // Числа - операнды
	console.log(userAge)

	// Унарные
	let userCash = -800;
	console.log(userCash)

	let x;
	// Остаток от деления 
	x = 11 % 3;
	console.log(`Остаток от деления 11 % 3 = ${x}`);

	// Возведение в степень 
	x = 3 ** 2;

	// Инкремент/Декремент
	x++;
	console.log(x);
	x--;
	console.log(x);
	let y = 2 * ++x;
	console.log(y);
}

// Lessons 5 - if else
{
	if (2 > 1) {
		console.log('true');
	}

	if (3 > 2) console.log('true');
	else console.log('false');

	// ? : - двоеточие заменяет else
	let message = (5 > 11) ? "Верно!" : "Не верно";
	console.log(message);

	// Вместо else if
	message = (55 > 11) ? "Верно!" :
		(5 > 21) ? "21!" :
			(5 > 31) ? "31!" : "No!"
	console.log(message);

}