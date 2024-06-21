function addnumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log("Sum of Number of given the number is ", sum);
}
addnumbers(1, 2, 3, 5);
addnumbers(10, 2, 3, 50, 50, 55);
