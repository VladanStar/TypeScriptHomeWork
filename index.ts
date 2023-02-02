//Napravite funkciju koja prima dva broja kao argumente i vraća njihov proizvod.
//Funkcija treba da koristi tipove podataka u TypeScript-u.

function multiply(a: number, b: number): number {
  return a * b;
}
let result = multiply(5, 10);
console.log(result); // Output: 50

// Napravite klasu "Student" koja sadrži sledeća polja:
//ime, prezime, indeks i prosek. Napravite konstruktor koji će se koristiti za inicijalizaciju svih polja.
// Napravite metodu koja će ispisati sve podatke o student

class Student {
  ime: string;
  prezime: string;
  indeks: string;
  prosek: number;

  constructor(ime: string, prezime: string, indeks: string, prosek: number) {
    this.ime = ime;
    this.prezime = prezime;
    this.indeks = indeks;
    this.prosek = prosek;
  }

  ispisiPodatke(): void {
    console.log(`Ime: ${this.ime}`);
    console.log(`Prezime: ${this.prezime}`);
    console.log(`Indeks: ${this.indeks}`);
    console.log(`Prosek: ${this.prosek}`);
  }
}
let student = new Student("Slobodan", "Kuljanin", "14/234", 8.5);
student.ispisiPodatke();

// Napravite interfejs "Shape" koji ima metodu "calculateArea" koja ne prima argumente i ne vraća vrednost.
//  Napravite klase "Circle", "Rectangle" i "Triangle" koje implementiraju ovaj interfejs.
//  Svaka od ovih klasa treba da ima svoje metode za izračunavanje površine.

interface Shape {
  calculateArea(): void;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    let area = Math.PI * this.radius * this.radius;
    console.log(`Površina kruga: ${area}`);
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): void {
    let area = this.width * this.height;
    console.log(`Površina pravougaonika: ${area}`);
  }
}

class Triangle implements Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calculateArea(): void {
    let area = 0.5 * this.base * this.height;
    console.log(`Površina trougla: ${area}`);
  }
}
let circle = new Circle(5);
circle.calculateArea();

let rectangle = new Rectangle(10, 5);
rectangle.calculateArea();

let triangle = new Triangle(10, 5);
triangle.calculateArea();

// Napravite klasu "Employee" koja sadrži polja za ime, prezime i platu.
// Napravite klasu "Company" koja sadrži niz "Employee" objekata i metodu koja će vratiti
// prosečnu platu svih zaposlenih u kompaniji.

class Employee {
  firstName: string;
  lastName: string;
  salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}

class Company {
  employees: Employee[];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  averageSalary(): number {
    let sum = 0;
    for (let i = 0; i < this.employees.length; i++) {
      sum += this.employees[i].salary;
    }
    return sum / this.employees.length;
  }
}
let employee1 = new Employee("John", "Doe", 5000);
let employee2 = new Employee("Jane", "Doe", 6000);
let employee3 = new Employee("Jim", "Smith", 7000);

let employees = [employee1, employee2, employee3];
let company = new Company(employees);

console.log(`Prosečna plata zaposlenih: ${company.averageSalary()}`);

// Napravite klasu "Car" koja sadrži polja za marku, model, godinu proizvodnje i cenu.
// Napravite klasu "CarShowroom" koja sadrži niz "Car" objekata
// i metodu koja će vratiti najskuplji automobil u salonu.

class Car {
  make: string;
  model: string;
  year: number;
  price: number;

  constructor(make: string, model: string, year: number, price: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}

class CarShowroom {
  cars: Car[];

  constructor(cars: Car[]) {
    this.cars = cars;
  }

  mostExpensiveCar(): Car {
    let mostExpensive = this.cars[0];
    for (let i = 1; i < this.cars.length; i++) {
      if (this.cars[i].price > mostExpensive.price) {
        mostExpensive = this.cars[i];
      }
    }
    return mostExpensive;
  }
}
let car1 = new Car("Toyota", "Camry", 2020, 20000);
let car2 = new Car("Honda", "Accord", 2019, 22000);
let car3 = new Car("Tesla", "Model S", 2021, 100000);

let cars = [car1, car2, car3];
let showroom = new CarShowroom(cars);

let mostExpensive = showroom.mostExpensiveCar();
console.log(
  `Najskuplji automobil: ${mostExpensive.make} ${mostExpensive.model} (${mostExpensive.year}) - ${mostExpensive.price}`
);

//Napravite funkciju koja prima niz stringova i
//vraća niz stringova koji sadrži samo one elemente koji počinju slovom "a".

function getElementsStartingWithA(strings: string[]): string[] {
  let elementsStartingWithA = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].startsWith("a")) {
      elementsStartingWithA.push(strings[i]);
    }
  }
  return elementsStartingWithA;
}
let strings = ["apple", "banana", "cherry", "almond"];
let elementsStartingWithA = getElementsStartingWithA(strings);
console.log(elementsStartingWithA);

//Napravite klasu "Book" koja sadrži polja za naslov,
//autora i godinu izdavanja. Napravite klasu "Library" koja sadrži niz "Book"
// objekata i metodu koja će vratiti knjigu sa najskorijom godinom izdavanja.
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Library {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getLatestBook(): Book {
    let latestYear = 0;
    let latestBook: Book;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].year > latestYear) {
        latestYear = this.books[i].year;
        latestBook = this.books[i];
      }
    }
    return latestBook;
  }
}
let book1 = new Book("Book 1", "Author 1", 2020);
let book2 = new Book("Book 2", "Author 2", 2022);
let book3 = new Book("Book 3", "Author 3", 2019);

let books = [book1, book2, book3];
let library = new Library(books);

let latestBook = library.getLatestBook();
console.log(latestBook.title);
