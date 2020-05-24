function printNthElementFromArray(input){
    let step = Number(input.pop());
    for (let index = 0; index < input.length; index+= step) {
        console.log(input[index]);
    }
}