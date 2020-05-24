function processOddNumbers(input){
    let new_array = []
    for (let i = 0; i < input.length; i++){
        if (i % 2 != 0){
            new_array.unshift(input[i] * 2)
        }
    }
    console.log(new_array.join(" "))
}