class Complex {
    private re: number;
    private im: number;
    constructor(r: number, i: number){
        this.re = r;
        this.im = i;
    }

    add( a: Complex, b: Complex):Complex{

        return new Complex(a.re + b.re, a.im + b.im);
    }

    substract(a: Complex, b: Complex):Complex{
        return new Complex(a.re - b.re, a.im - b.im);
    }

    string()
    {
        return a.toString();
    }
}


let a: Complex = new Complex(5, 2);
let b: Complex = new Complex(7, 3);
console.log(a.add(a,b));
console.log(a.substract(a,b));
console.log(a.string);

