//Бінарні оператори
console.log("Бінарні оператори:");
var a = 5;
var b = 3;

var sum = a + b;
console.log("Сума: " + sum);

console.log("a > b -> ", a > b);

var arr1 = [8, "Hello", 36.5, true];
console.log(arr1);
console.log("Чи є в масиві значення 5? ", 5 in arr1);
console.log(" ");

//Унарні оператори
console.log("Унарні оператори:");
var obj1 = { name: "Sasha", age: 17, student: true };
console.log(obj1 + ", тепер видалимо інформацію про статус 'студент'");
delete obj1.student;
console.log(obj1);

var x = 12;
console.log("Значення змінної x: " + x);

x++;
console.log("Тип змінної х тепер: " + x + ", та значення: " + typeof x);
console.log(" ");

//Тернарний оператор
console.log("Тернарний оператор:");
var num1 = 64;
console.log("Перше число: " + num1);
var num2 = 46;
console.log("Друге число: " + num2);
var result =
  num1 > num2 ? "Перше число більше" : "Друге число більше або вони рівні";
console.log("Перевірка умови: " + result);

//Друге завдання
var line1 = "Нехай завжди буде сонце,";
var line2 = "Нехай завжди буде небо,";
var line3 = "Нехай завжди буде мама,";
var line4 = "Нехай я завжди буду.";

var together = line1.concat("\n", line2, "\n", line3, "\n", line4);
console.log(together);
