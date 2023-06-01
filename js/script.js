// Lesson 1 - 5
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
