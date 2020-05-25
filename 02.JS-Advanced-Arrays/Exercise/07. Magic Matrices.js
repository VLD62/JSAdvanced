function magicMatrices(input){
    let magicCheck = true;
    let colSum = [];
    let rowSum = [];
    for (let i = 0; i < input.length; i++) {
        let tempRowSum = 0;
        let tempColSum = 0;
        for (let j = 0; j < input.length; j++) {
                tempRowSum += input[i][j];
                tempColSum += input[j][i];
        }
        rowSum.push(tempRowSum);
        colSum.push(tempColSum);
        if (i > 0){
            if (tempColSum != colSum[0]){
                magicCheck = false;
            }
            if (tempRowSum != rowSum[0]){
                magicCheck = false;
            }
        }
    }
    for (let index = 0; index < rowSum.length; index++) {
        if (rowSum[index] != colSum[index]){
            magicCheck = false;
        }
    }
    console.log(magicCheck)
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])