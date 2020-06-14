function result(arr, func){
    return arr.reduce(function (acc, curr) {
        return acc.concat(func(curr));
    }, []);
}



let nums = [1,2,3,4,5];
console.log(result(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

// var assert = require('assert');

// Array.prototype.map= (x)=>{return "I got you! =) Do not use map."};

// let arr = [1,2,3,4];
// let func = (x)=>x*2;
// let actual = result(arr,func);
// let expected = [2,4,6,8];
// assert.deepEqual(actual,expected);

// // Restore the map
// Array.prototype.map = oldMap;