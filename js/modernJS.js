// 54 страница
{
	// Чему будут равны переменные a , b , c и d в примере ниже?
	/*
		let
			a = 1,
			b = 1,
			c = ++a,
			d = b++;
	
			console.log(c);
			console.log(d);
	*/

	// console.log("\t \n" - 2);

	// В чём ошибка? Исправьте её. Результат должен быть 3 .
	// let a = +prompt("Первое число?", 1);
	// let b = +prompt("Второе число?", 2);
	// alert(a + b); // 12
	// let 
	// 	a = prompt('Введите первую цифру: '),
	// 	b = prompt('Введите вторую цифру: ');
	// alert(+a + +b);

}

// Сравнения (стр. 60) 
{
	// console.log('2' > '12');
	// console.log(undefined == null);
	// console.log(undefined === null);
	// console.log(null === '\n0\n');
}

// Условное ветвление
{
	// Число 0 , пустая строка "" , null , undefined и NaN становятся false . Из-за этого
	// их называют «ложными» («falsy») значениями.
	// Остальные значения становятся true , поэтому их называют «правдивыми» («truthy»).
	/*if ('0') alert('Вывелся');
	let answer = prompt('Какое официальное название у JavaScript? ');
	if (answer == 'ECMAScript') alert('Верно!');
	else confirm('Не знаете ECMAScript?');*/

	/*let answer = +prompt('Введите число: ');
	if (answer > 0) {
		alert(1);
	}
	else if (answer < 0) {
		alert(-1);
	}
	else alert(0);*/

	/*let 
		result,
		a = 1,
		b = 2;
	result = (a + b < 4) ? 'malo' : result = 'mnogo';
	alert(result);*/

	/*	let login = 'Сотрудник';
		let message = (login == 'Сотрудник') ? 'Привет!' :
			(login == 'Директор') ? 'Добрый день!' :
				(login == '') ? 'Нет логина' :
					'';
		alert(message);*/
}

// Логические операторы (стр. 66)
{
	// alert(null || 2 || undefined);
	// alert(alert(1) || 2 || alert(3));
	// alert(1 && null && 2);
	// alert(alert(1) && alert(2));
	// alert(null || 2 && 3|| 4);

	/*
	let age = prompt('Ваш возраст: ');
	if (14 < age && age < 18) alert('Вы подросток')
	else if (18 < age && age < 35) alert('Вы еще так молоды')
	else if (35 < age && age < 55) alert('Вы в самом расцвете сил')
	else if (55 < age) alert('Ваш марафон только начался')
	*/

	// let age = 10;
	// if (age < 14 || age > 90) console.log('Условие выполняемо')
	// if (!(age > 14 || age < 90)) console.log('Условие выполняемо')

	/*
	if (-1 || 0) alert('first');
	if (-1 && 0) alert('second');
	if (null || -1 && 1) alert('third');
	*/

	/*
	let name = prompt('Введите ваш логин: ');
	if (name == 'Admin') {
		let password = prompt('Введите пароль: ');
		if (password == 'big boss') alert('Здравствуйте!');
		else if (password == null || password == '') alert('Ввод отменен.');
		else alert('Неверный пароль.');
	} else if (name == null || name == '') {
		alert('Ввод отменен.');
	} else alert('Я вас не знаю.');
	*/
}

// whole / for - Циклы (стр. 78)
{
	/*
	let i = 3;
	while (i) {
		alert(i--);
	}*/

	// let i =0;
	// while (i++ < 5) alert(i);

	// for (let i = 2; i <= 6; i++) {
	// 	if (i % 2 != 0) continue;
	// 	alert(i);
	// }

	// let i = 0;
	// while (i < 3) {
	// 	alert(`number ${i}!`);
	// 	i++;
	// }

	// let num;
	// do {
	// 	num = prompt('Введите число больше 100 ');
	// } while (num < 100 && num);

	// let n = 10;
	// next: 
	// for (let i = 2; i < n; i++){
	// 	for (let j = 2; j < i/2; j++) {
	// 		if (i % j == 0) continue next;
	// 	}
	// 	alert(i);
	// }
}

// Switch (стр. 88)
{
	/*
	let browser = 'Chrome';
	switch (browser) {
		case 'Edge':
			alert('something');
			break;
		case 'Chrome':
		case 'Safari':
		case 'FireFox':
		case 'Opera':
			alert('something two');
			break;
		default:
			alert('something three');
	}

	if (browser === 'Edge') {
		alert('something');
	} else if (browser === 'Chrome'
		|| browser === 'Safari'
		|| browser === 'FireFox'
		|| browser === 'Opera') {
		alert('something two');
	} else {
		alert('something three');
	}
	*/

	/*
	let number = +prompt('Введите число от 0 до 3: ');
	switch (number) {
		case (0):
			alert('Вы ввели 0');
			break;
		case (1):
			alert('Vi vvely 1');
			break;
		case (2):
		case (3):
			alert('Vvely 2, a mojet i 3, hz-hz');
			break;
	}
	*/
}

// Function (стр. 92)
{
	// function checkAge(age) {
	// 	if (age > 18) return true;
	// 	else return confirm("оу май");
	// }

	// function checkAge2(age) {
	// 	return (age > 18) || confirm("оу май");
	// }

	// let age = prompt('Введите ваш возраст: '),
	// 	some = checkAge(age),
	// 	some2 = checkAge2(age);
	// console.log(some);
	// console.log(some2);

	let
		a = 2,
		b = 3;

	function getMin(a, b) {
		return (a > b) ? a : b;
	}

	function getPow(a, b) {
		// return Math.pow(a, b);
		let res = a;
		for (let i = 1; i < b; i++) {
			res *= a;
		}
		return res;
	}

	// a = prompt('Введите число: ');
	// b = prompt('Введите его степень: ');
	// if (b >= 1) alert(`Число а = ${a} в степени ${b}, будет равно ${getPow(a, b)}`);
	// else alert("Данная программа настроена на работу только с целыми числами");
}

// Function Expression (стр. 104)
{
	// function ask(question, yes, no) {
	// 	if (confirm(question)) yes();
	// 	else no();
	// }

	// ask(
	// 	'Вам есть 18?',
	// 	() => { alert('Здравствуйте!'); },
	// 	() => { alert('Привет!'); }
	// )
}

// Особенности JS (стр. 114)

// Стиль кода (стр. 126)

// Ниндзя код (стр. 137)

// Тесты (стр. 144)
{
	// describe('имя функции', function() {
	// 	it('описание', function(){
	// 		assert.equal(pow(2,3), ожидаемый результат);
	// 	});
	// })
}

// Объекты (стр. 156)
{
	// let myFirstObject = new Object();
	// let myTwelveObject = {};
	// myTwelveObject.name = 'John';
	// myTwelveObject.surname = 'Smith';
	// console.log(myTwelveObject['name']); 
	// myTwelveObject.name = 'Pete';
	// console.log(myTwelveObject.name);
	// delete myTwelveObject.name;
	// console.log('name' in myTwelveObject);
	// for (let key in myTwelveObject) {
	// 	console.log(myTwelveObject[key]);
	// }

	// function isEmpty(someObject) {
	// 	for (let key in someObject) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	// console.log(isEmpty(myFirstObject));
	// console.log(isEmpty(myTwelveObject));


	// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390 .

	// let salaries = {
	// 	John: 100,
	// 	Ann: 160,
	// 	Pete: 130,
	// }

	// function summKeyObj(obj) {
	// 	let summ = 0;
	// 	for (let key in obj) {
	// 		summ += salaries[key];
	// 	}
	// 	return summ;
	// }

	// Создайте функцию multiplyNumeric(obj) , которая умножает все числовые свойства объекта obj на 2 .

	// let menu = {
	// 	width: 200,
	// 	height: 300,
	// 	title: 'My menu'
	// }

	// function multiplyNumeric(obj) {
	// 	for (let key in obj) {
	// 		if (typeof (obj[key]) == 'number') obj[key] *= 2;
	// 	}
	// }

	// multiplyNumeric(menu);
	// console.log(menu);
}

// Копирование объектов и ссылки (стр. 169)
{
	// Object.assign(dest, [src1]); - клонирование обьектов в квадратных скобках

	// let user = {
	// 	name: 'Pete',
	// }

	// let clone = Object.assign({}, user);
	
}

// Сборка мусора (стр. 174)
{
	
}