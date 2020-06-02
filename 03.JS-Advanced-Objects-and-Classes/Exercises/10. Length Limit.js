class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this.resultString = innerString;
    }
    increase(length) {
        length = Number(length)
        if ((this.innerLength + length) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength += length;
        }
        this.resultString = this.innerString.substring(0, this.innerLength);
    }
    decrease(length) {
        length = Number(length)
        if ((this.innerLength - length) < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
        this.resultString = this.innerString.substring(0, this.innerLength);
    }
    toString() {
        if (this.innerLength == 0){
            return "...";
        } else if (this.innerLength < this.innerString.length){
            return `${this.resultString}...`;
        } else {
            return this.resultString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
