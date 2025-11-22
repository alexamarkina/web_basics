//Перше завдання
/*function getMaxSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  console.log(
    "Знайдемо неперервний підмасив масиву: " +
      arr +
      " , сума елементів якого є максимальною"
  );

  let maxStart = 0;
  let maxEnd = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = tempStart;
      maxEnd = i;
    } else if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  return arr.slice(maxStart, maxEnd + 1);
}

let arr1 = [-2, 8, -1, 3, -4, 5, 10, -3];
let result = getMaxSum(arr1);
console.log("Відповідь: ", result);*/

// Друге завдання
/*function sumOfLongNum(string1, string2) {
  let result = "";

  let i = string1.length - 1;
  let j = string2.length - 1;

  let storage = 0;

  while (i >= 0 || j >= 0 || storage > 0) {
    let num1 = i >= 0 ? parseInt(string1[i]) : 0;
    let num2 = j >= 0 ? parseInt(string2[j]) : 0;

    let sum = num1 + num2 + storage;
    let lastNum = sum % 10;
    result = lastNum + result;

    storage = Math.floor(sum / 10);

    i--;
    j--;
  }
  return result;
}

let numA = "123456789";
let numB = "9876543210";

console.log(
  "Сума чисел  " +
    numA +
    " та " +
    numB +
    " дорівнює: " +
    sumOfLongNum(numA, numB)
);*/

// Третє завдання
function arrayDifference(arra, arrb) {
  let result = arra.slice();

  for (let item of arrb) {
    let index = result.indexOf(item);
    if (index !== -1) {
      result.splice(index, 1);
    }
  }
  return result;
}

let arrayA = [1, 2, 3, 4, 5];
let arrayB = [2, 4];

console.log("Різниця: ", arrayDifference(arrayA, arrayB));
