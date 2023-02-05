//Napravite funkciju koja prima dva broja kao argumente i vraća njihov proizvod.
//Funkcija treba da koristi tipove podataka u TypeScript-u.
function multiply(a, b) {
    return a * b;
}
var result = multiply(5, 10);
console.log(result); // Output: 50
// Napravite klasu "Student" koja sadrži sledeća polja:
//ime, prezime, indeks i prosek. Napravite konstruktor koji će se koristiti za inicijalizaciju svih polja.
// Napravite metodu koja će ispisati sve podatke o student
var Student = /** @class */ (function () {
    function Student(ime, prezime, indeks, prosek) {
        this.ime = ime;
        this.prezime = prezime;
        this.indeks = indeks;
        this.prosek = prosek;
    }
    Student.prototype.ispisiPodatke = function () {
        console.log("Ime: ".concat(this.ime));
        console.log("Prezime: ".concat(this.prezime));
        console.log("Indeks: ".concat(this.indeks));
        console.log("Prosek: ".concat(this.prosek));
    };
    return Student;
}());
var student = new Student("Slobodan", "Kuljanin", "14/234", 8.5);
student.ispisiPodatke();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        var area = Math.PI * this.radius * this.radius;
        console.log("Povr\u0161ina kruga: ".concat(area));
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        var area = this.width * this.height;
        console.log("Povr\u0161ina pravougaonika: ".concat(area));
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.calculateArea = function () {
        var area = 0.5 * this.base * this.height;
        console.log("Povr\u0161ina trougla: ".concat(area));
    };
    return Triangle;
}());
var circle = new Circle(5);
circle.calculateArea();
var rectangle = new Rectangle(10, 5);
rectangle.calculateArea();
var triangle = new Triangle(10, 5);
triangle.calculateArea();
// Napravite klasu "Employee" koja sadrži polja za ime, prezime i platu.
// Napravite klasu "Company" koja sadrži niz "Employee" objekata i metodu koja će vratiti
// prosečnu platu svih zaposlenih u kompaniji.
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company(employees) {
        this.employees = employees;
    }
    Company.prototype.averageSalary = function () {
        var sum = 0;
        for (var i = 0; i < this.employees.length; i++) {
            sum += this.employees[i].salary;
        }
        return sum / this.employees.length;
    };
    return Company;
}());
var employee1 = new Employee("John", "Doe", 5000);
var employee2 = new Employee("Jane", "Doe", 6000);
var employee3 = new Employee("Jim", "Smith", 7000);
var employees = [employee1, employee2, employee3];
var company = new Company(employees);
console.log("Prose\u010Dna plata zaposlenih: ".concat(company.averageSalary()));
// Napravite klasu "Car" koja sadrži polja za marku, model, godinu proizvodnje i cenu.
// Napravite klasu "CarShowroom" koja sadrži niz "Car" objekata
// i metodu koja će vratiti najskuplji automobil u salonu.
var Car = /** @class */ (function () {
    function Car(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    return Car;
}());
var CarShowroom = /** @class */ (function () {
    function CarShowroom(cars) {
        this.cars = cars;
    }
    CarShowroom.prototype.mostExpensiveCar = function () {
        var mostExpensive = this.cars[0];
        for (var i = 1; i < this.cars.length; i++) {
            if (this.cars[i].price > mostExpensive.price) {
                mostExpensive = this.cars[i];
            }
        }
        return mostExpensive;
    };
    return CarShowroom;
}());
var car1 = new Car("Toyota", "Camry", 2020, 20000);
var car2 = new Car("Honda", "Accord", 2019, 22000);
var car3 = new Car("Tesla", "Model S", 2021, 100000);
var cars = [car1, car2, car3];
var showroom = new CarShowroom(cars);
var mostExpensive = showroom.mostExpensiveCar();
console.log("Najskuplji automobil: ".concat(mostExpensive.make, " ").concat(mostExpensive.model, " (").concat(mostExpensive.year, ") - ").concat(mostExpensive.price));
//Napravite funkciju koja prima niz stringova i
//vraća niz stringova koji sadrži samo one elemente koji počinju slovom "a".
function filterStrings(strings) {
    return strings.filter(function (str) { return str[0].toLowerCase() === "a"; });
}
var strings = ["apple", "banana", "cherry", "Almond", "Blueberry"];
var filteredStrings = filterStrings(strings);
console.log(filteredStrings);
//Napravite klasu "Book" koja sadrži polja za naslov,
//autora i godinu izdavanja. Napravite klasu "Library" koja sadrži niz "Book"
// objekata i metodu koja će vratiti knjigu sa najskorijom godinom izdavanja.
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = books;
    }
    Library.prototype.getLatestBook = function () {
        var latestYear = 0;
        var latestBook;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].year > latestYear) {
                latestYear = this.books[i].year;
                latestBook = this.books[i];
            }
        }
        return latestBook;
    };
    return Library;
}());
var book1 = new Book("Book 1", "Author 1", 2020);
var book2 = new Book("Book 2", "Author 2", 2022);
var book3 = new Book("Book 3", "Author 3", 2019);
var books = [book1, book2, book3];
var library = new Library(books);
var latestBook = library.getLatestBook();
console.log(latestBook.title);
//# sourceMappingURL=index.js.map