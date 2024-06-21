var Person = /** @class */ (function () {
    //fields not required to be declared if access specifier used in constructor
    //constructor 
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        //fields not required to be assigned if access specifier provided.
    }
    Person.prototype.fullName = function () {
        return this.fname + " " + this.lname;
    };
    //function 
    Person.prototype.disp = function () {
        console.log("hi " + this.fullName());
    };
    return Person;
}());
var person_AAAAA = new Person("Sachin", "Tendulkar");
person_AAAAA.disp();
