// Задачник JavaScript по уровням

// Уровень 1.1
{
	// №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
	{
		// Вариант 1
		/*let num = prompt('Введите проверяемое число: ');
		if (Math.sign(num) >= 0) alert(`Число ${num} положительное`);
		else alert(`Число ${num} отрицательное`)*/

		// Вариант 2
		/*let num = -123;
		if (Math.sign(num) >= 0) console.log(`Число ${num} положительное`);
		else console.log(`Число ${num} отрицательно`);*/

		// Вариант 3 
		// let num = -123;
		// if (num >= 0) console.log(`Число ${num} положительное`);
		// else console.log(`Число ${num} отрицательное`);
	}

	// №2 Дана строка. Выведите в консоль длину этой строки
	{
		// Вариант 1
		// let someString = 'safdf fjdklfsdf fjdskflsjdf fdsjfsd';
		// console.log(someString.length);

		// Вариант 2
		// let someString = prompt('Введите произвольную строку: ');
		// alert(`Длина строки равна ${someString.length}`);
	}

	// №3 Дана строка. Выведите в консоль последний символ строки.
	{
		// Вариант 1
		// let someString = 'vcmdsfjlke';
		// console.log(someString[someString.length - 1]);

		// Вариант 2
		// let someString = prompt('Введите слово: ');
		// alert(`Последний символ - \"${someString[someString.length - 1]}\"`);
	}

	// №4 Дано число. Проверьте, четное оно или нет.
	{
		// Вариант 1
		// let num = 23;
		// if (num % 2 == 0) { console.log(`Число ${num} является четным`) }
		// else console.log(`Число ${num} не является четным`);

		// Вариант 2
		// let num = 22;
		// if (Number.isInteger(num)) console.log('Число - целое')
	}

	// №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
	{
		// Вариант 1
		// let
		// 	wordOne = 'Hello',
		// 	wordTwo = 'Hello';
		// if (wordOne[0].toLowerCase == wordTwo[0].toLowerCase) console.log('Первые буквы совпадают!');
		// else console.log('Совпадений нет.')
	}

	// №6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак,
	// то получите предпоследнюю букву.
	{
		// Вариант 1
		// let word = 'кусььььь';
		// if (word[word.length - 1] == 'ь') {
		// 	console.log(word[word.length - 2]);
		// }
		// else console.log(word[word.length - 1]);

		// // Вариант 2
		// let
		// 	count = 1,
		// 	checkLetter = word[word.length - count];
		// while (checkLetter == 'ь') {
		// 	count++;
		// 	checkLetter = word[word.length - count];
		// }
		// console.log(`До вывода последней буквы было удалено - ${count} \"ь\"`);
		// console.log(`Буква перед ним - \"${checkLetter}\"`);
	}
}

// Уровень 1.2
{
	// №1 Дано число. Выведите в консоль первую цифру этого числа.
	{
		// Вариант 1
		// let 
		// num = 6324123,
		// firstNum = String(num);
		// console.log(Number(firstNum[0]));

		// Вариант 2
		// let num = 19999;
		// while (num > 9) num /= 10;
		// console.log(Math.floor(num));
		// console.log(Math.trunc(num)); // trunc - выводит только целую часть числа
	}

	// №2 Дано число. Выведите в консоль последнюю цифру этого числа.
	{
		// 1 Вариант
		// let
		// 	num = 215,
		// 	lastNum = num % 10;
		// console.log(lastNum);

		// 2 Вариант 
		// let 
		// 	num = 13213,
		// 	lastNum = String(num);
		// console.log(Number(lastNum[lastNum.length - 1]));
	}

	// №3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
	{
		// Вариант 1
		// let
		// num = 123,
		// firstNum = String(num),
		// lastNum = num % 10;
		// firstNum = Number(firstNum[0])
		// console.log(`Сумма первой цифры - ${firstNum} и последней - ${lastNum}, равна: ${firstNum + lastNum}` );

		// Вариант 2
		// let num = Number(prompt('Введите число для сложения: '));
		// function sumLastFirst(x) {
		// 	let firstX = String(x);
		// 	firstX = Number(firstX[0]);
		// 	let lastX = x % 10;
		// 	return (`Сумма последней и первой цифры будет равна: ${firstX + lastX}`);
		// };
		// alert(sumLastFirst(num))

		// Вариант 3
		// let num = 23;
		// function getSum(num) {
		// 	num = num + "";
		// 	return +num[0] + (+num[num.length - 1]);
		// }
		// alert(getSum(num));
	}

	// №4 Дано число. Выведите количество цифр в этом числе.
	{
		// Вариант 1
		// let num = 123;
		// let i;
		// for (i = 0; num > 1; i++) {
		// num /= 10; 
		// }
		// console.log(i)

		// Вариант 2
		// let num = 123;
		// num += '';
		// console.log(Number(num.length))

		// Вариант 3
		// let num = prompt('Введите число: ');
		// alert(`Количество цифр в числе равно: ${num.length}`);
		// alert(prompt('Введите число: ').length);
	}

	// №5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
	{
		// Вариант 1
		// let 
		// 	num1 = 112321,
		// 	num2 = 1313123;
		// num1 += '';
		// num2 += '';
		// if (num1[0] == num2[0]) console.log('Первые цифры чисел совпали.');
		// else console.log('Числа не совпали.')
	}
}

// Уровень 1.3
{
	// №1 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний 
	// символ этой строки.
	// let str = '2d';
	// if (str.length > 1) console.log(str[str.length -2]);

	// №2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
	// let 
	// numOne = 4,
	// numTwo = 2;
	// if (numOne % numTwo == 0) console.log('Деление произведено без остатка.');
	// else console.log(`Остаток от деления равен: ${numOne % numTwo}`);
}

// Уровень 1.4 
{
	/*
	while (i >= 1) {
		console.log(i);
		i--;
	} 
	*/

	/*
	let i = 0;
	while (i < 10) {
		if (i % 3 == 0) console.log(i);
		i++;
	}*/

}

// Уровень 1-5
{
	// let string = 'abcdefg';
	// for (let i = string.length; i >= 0; i--) {
	// 	console.log(string[i]);
	// }
}

// Уровень 1-6
{ }