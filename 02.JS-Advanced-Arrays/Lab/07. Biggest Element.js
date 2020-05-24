function biggestElement(input){
    let biggest = input[0][0];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (biggest < input[i][j]){
                biggest = input[i][j]
            }
        }
    }
    console.log(biggest)
}
biggestElement([[20, 50, 10],
    [8, 33, 145]])