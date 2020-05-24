function negativePositiveNumbers(input){
    let newElements = [];
    for (let index = 0; index < input.length; index++) {
        if (input[index] >= 0){
            newElements.push(input[index]);
        } else {
            newElements.unshift(input[index]);
        }
    }
    console.log(newElements.join("\n"))
}