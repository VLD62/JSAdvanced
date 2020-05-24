function smallestTwoNumbers(input){
    input.sort(function(a, b){return a - b});
    console.log(`${input[0]} ${input[1]}`);
}