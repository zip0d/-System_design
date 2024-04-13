// Инкапсуляция
// class Car {
//     constructor(make, model) {
//       this._make = make; 
//       this._model = model; 
//     }
  
//     get make() {
//       return this._make;
//     }
  
//     set make(make) {
//       this._make = make;
//     }
  
//     get model() {
//       return this._model;
//     }
  
//     set model(model) {
//       this._model = model;
//     }
//   }
  
//   let car = new Car("Toyota", "Corolla");
//   console.log(car.make); 
//   car.make = "Honda";
//   console.log(car.make); 
  


// Наследование
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       throw new Error("Subclass must implement abstract method");
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       return this.name + ' says Woof!';
//     }
//   }
  
//   class Cat extends Animal {
//     speak() {
//       return this.name + ' says Meow!';
//     }
//   }
  
//   let dog = new Dog("Buddy");
//   console.log(dog.speak()); 
  
//   let cat = new Cat("Fluffy");
//   console.log(cat.speak()); 
  


// Полиморфизм
// class Shape {
//     area() {
//       throw new Error("Subclass must implement abstract method");
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super();
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     area() {
//       return 3.14 * this.radius * this.radius;
//     }
//   }
  
//   let shapes = [new Rectangle(5, 10), new Circle(7)];
//   shapes.forEach(shape => {
//     console.log("Area:", shape.area());
//   });
  




































































































