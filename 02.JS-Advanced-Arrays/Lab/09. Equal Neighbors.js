function equalNeighbors(input){
    let countEquals = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if(i > 0){
                if(input[i][j] == input[i-1][j]){
                    countEquals++;
                }
            }
            if(j > 0){
                if(input[i][j] == input[i][j-1]){
                    countEquals++;
                }
            }
        }
    }
    console.log(countEquals)
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])