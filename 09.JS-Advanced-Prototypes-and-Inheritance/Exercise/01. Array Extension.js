(function solve() {
    Array.prototype.last = function()  { return this[this.length - 1] };
    Array.prototype.skip = function(n) {
        let result = [];
        for (let index = n; index < this.length; index++) {
            result.push(this[index]);
        }
        return result;
    }
    Array.prototype.take = function(n) {
        let result = [];
        for (let index = 0; index < n; index++) {
            result.push(this[index]);
        }
        return result;
    }
    Array.prototype.sum = function() {
        let result = 0;
        for (let index = 0; index < this.length; index++) {
            result += this[index];
        }
        return result;
    }
    Array.prototype.average = function() { return this.sum() / this.length; };
    
}());


var testArray = [1, 2, 3];

console.log(testArray.last())