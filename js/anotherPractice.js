/*
function ObjSum(num) {
	this.num = num;
	this.value = 0;
	this.sum = function() {
		for (let i = 1; i <= this.num; i++) this.value += i;
		return this.sum;
	}
};

// let someSum = new ObjSum(3);
// someSum.sum();
// alert(someSum.value);

function sumToNum(num) {
	return num * (num + 1) / 2;
};


let time1 = performance.now();
sumToNum(1000);
time1 -= performance.now();
console.log(`Время 1: + ${time1}`)

let time2 = performance.now();
let someSum = new ObjSum(1000);
someSum.sum();
time2 -= performance.now();
console.log(`Время 2: + ${time2}`)
*/

// (1:01)
