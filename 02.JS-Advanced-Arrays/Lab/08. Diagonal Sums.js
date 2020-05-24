function diagonalSums(input){
    let firstDiagSum = 0;
    let secondDiagSum = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
                if(i == j){
                    firstDiagSum += Number(input[i][j]);
                }
                if(j == input[i].length - 1 - i){
                    secondDiagSum += Number(input[i][j]);
                }
        }
    }
    console.log(firstDiagSum + " " + secondDiagSum);
}
diagonalSums([[20, 40],
    [10, 60]])