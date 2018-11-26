var Complex = /** @class */ (function () {
    function Complex(r, i) {
        this.re = r;
        this.im = i;
    }
    Complex.prototype.add = function (a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    };
    Complex.prototype.substract = function (a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    };
    Complex.prototype.string = function () {
        return a.toString();
    };
    return Complex;
}());
var a = new Complex(5, 2);
var b = new Complex(7, 3);
console.log(a.add(a, b));
console.log(a.substract(a, b));
console.log(a.string);
