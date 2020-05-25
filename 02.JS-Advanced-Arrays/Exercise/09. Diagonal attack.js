function diagonalAttack(string) {
    let matrix = [];
    function diagonalSum(matrix, check, sum) {
        let diagonalSum1 = 0;
        let diagonalSum2 = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j =  matrix.length - 1; j >= 0; j--) {
                if (check == true) {
                    if (i == j || (matrix.length - 1 - i) == j){
                    } else {
                        matrix[i][j] = sum;
                    }
                } else {
                    if (i == j) {
                        diagonalSum1 += +matrix[i][j];

                    }
                    if ((matrix.length - 1 - i) == j) {
                        diagonalSum2 += +matrix[i][j];
                    }
                }
            }
        }
        return [diagonalSum1, diagonalSum2, matrix];
    }
    for (array of string) {
        matrix.push(array.split(" "));
    }
    if (diagonalSum(matrix)[0] == diagonalSum(matrix)[1]) {
        for (array of diagonalSum(matrix, true, (diagonalSum(matrix, false)[0]))[2]) {
            console.log(array.join(" "));
        }
    } else {
        for (array of matrix) {
            console.log(array.join(" "));
        }
    }
}