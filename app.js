console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobbies) {
    this.hobbies.push(hobbies);
  }
  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter(element => element !== hobby);
  }
  soundOff(){}
  greeting() {
    console.log("Hello fellow person!");
  }
  info() {}
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log("I am a coder");
  }
}

let person1 = new Person("Jen", 10, "Spain", ["gaming", "writing", "swimming"]);
console.log(person1);

let person2 = new Person("Pen", 0, "Pain", ["breathing", "gym", "swimming"]);
console.log(person2);

let coder = new Coder("Bob", 2, "Mars", ["coding", "gaming", "eating"]);
console.log(coder);

person1.addHobby("climbing");
console.log(person1);

person1.removeHobby("writing")
console.log(person1)

class Calculator {
  constructor(result) {
    this.result = 0;
  }
  add(a,b){
    this.result = a + b;
    return this.result;
  }
  subtract(a,b){
    this.result = a - b;
    return this.result;
  }
  multiply(a,b){
    this.result = a * b;
    return this.result;
  }
  divide(a,b){
    this.result = a / b;
    return this.result;
  }
  displayResult(){ 
    console.log(result);
  }
}

let test = new Calculator();

console.log(test.add(65,5));
console.log(test.divide(-4,5));
console.log(test.multiply(420,69));
console.log(test.subtract(21,19));
