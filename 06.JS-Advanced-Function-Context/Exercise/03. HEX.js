class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }
    plus(number) {
        if (typeof (number) === "object") {
            return new Hex(number.value + this.value);
        } else if (typeof number === 'number') {
            return new Hex(number + this.value);
        } else {
            throw "Invalid input!";
        }
    }
    minus(number) {
        if (typeof (number) === "object") {
            return new Hex(this.value - number.value);
        } else if (typeof number === 'number') {
            return new Hex(this.value - number.value);
        } else {
            throw "Invalid input!";
        }
    }
    parse(string) {
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
