// Лаб4 1
/*let stars = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9];

for (let i = 0; i < stars.length; i++) {
  let count = stars[i];
  console.log("*".repeat(count));
}
console.log("----");*/
// варіант з циклом for без використання масиву
function picture(stars) {
  let length = stars;
  console.log("*".repeat(length));
  for (let i = 8; i >= 2; i -= 2) {
    length += i;
    console.log("*".repeat(length));
  }
  for (let i = 2; i <= 8; i += 2) {
    length -= i;
    console.log("*".repeat(length));
  }
}
picture(9);



/*// Лаб4 2
console.log("Таймер на 10 секунд. Починаємо відлік");
var start = new Date;
var now = new Date;

while (now - start < 10000) {
  now = new Date;
}
console.log("Дзииинь! Кінець");*/

// лаб7 1
/*var car = {
  speedometer: 0,
};
console.log("Початкова швидкість: " + car.speedometer + " км/год");

// лаб7 2
Object.defineProperty(car, "setSpeedometer", {
  value: function (speed) {
    this.speedometer = speed;
    console.log("Швидкість: " + this.speedometer);
    return this;
  },
});

Object.defineProperty(car, "getSpeedometer", {
  value: function () {
    console.log("Спідометр показує: " + this.speedometer);
    return this;
  },
});

Object.defineProperty(car, "clearSpeedometer", {
  value: function () {
    this.speedometer = 0;
    console.log("Спідометр тепер на нулі");
    return this;
  },
});

car.setSpeedometer(80);
car.getSpeedometer();
car.clearSpeedometer();
car.getSpeedometer();

// лаб7 3
console.log("---")
car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometer();*/

// Додаткове завдання лаб7 1
/*class Device {
  constructor(type) {
    this.type = type;
  }
  feature_turnOn() {
    console.log("Має здатність вмикатися");
  }
}

class Smartphone extends Device {
  constructor(type, model) {
    super(type);
    this.model = model;
  }
  feature_call(number) {
    console.log("Має здатність дзвонити, наприклад за номером  " + number);
  }
}

class iPhone extends Smartphone {
  constructor(model, feature) {
    super("Apple", model);
    this.feature = feature;
  }
  feature_drawCalculator() {
    console.log("Має математичні нотатки");
  }
}

const myPhone = new iPhone("iPhone 14");
myPhone.feature_turnOn();
myPhone.feature_call("+123456789");
myPhone.feature_drawCalculator();*/

// Додаткове завдання лаб7 2
/*let array = [1, 2, 3, 4, 5];
console.log(array.toString());

let type = Object.prototype.toString.call(array);
console.log(type);*/
