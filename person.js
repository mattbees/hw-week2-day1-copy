class Person {

  constructor(name, age) {
    this.name = name;
    this._age = age;
  };

  get age() {
    return this._age;
  };

  set age(number) {
    if (number <= 0) {
      return;
    } else {
      this._age = number;
    };

  };
};


let john = new Person('John', 32);

john.age = 0;
console.log(john.age);


module.exports = Person;
