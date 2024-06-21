var person = /** @class */ (function () {
    function person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    person.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    person.prototype.disp = function () {
        console.log("Hi " +
            this.fullname());
    };
    return person;
}());
var p1 = new person("Sachine", "Tendulkar");
var p2 = new person("Tejal", "More");
var p3 = new person("Rahul", "Tiwari");
var p4 = new person("Shiwani", "Tiwari");
var p5 = new person("Kushi", "Tiwari");
p1.disp();
var person_arr = [p1, p2, p3, p4, p5];
person_arr.sort(function (n1, n2) {
    if (n1.fname > n2.fname)
        return -1;
    else if (n1.fname < n2.fname)
        return 1;
    return 0;
});
console.log(JSON.stringify(person_arr));
