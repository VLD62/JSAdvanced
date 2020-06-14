function getFibonator() {
    var next = 0
    var old = 1
    return function fib() {
        var newNext = next + old
        old = next
        next = newNext
        return next
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
