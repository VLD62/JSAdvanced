function ticTacToe(input){
    let dashboard = [[false, false, false],
                     [false, false, false],
                     [false, false, false]];
    let counter = 0;
    let winner = "NO";
    function checkArrForString(arr, search) {
        return arr.some(row => row.includes(search));
    }
    function checkMatrixForWinner(matrix, search) {
        let firstDiag = "";
        let secondDiag = "";
        for (let i = 0; i < matrix.length; i++) {
            let tempRowSum = "";
            let tempColSum = "";
            for (let j = 0; j < matrix[i].length; j++) {
                    if(i == j){
                        firstDiag += matrix[i][j];
                    }
                    if(j == matrix[i].length - 1 - i){
                        secondDiag += matrix[i][j];
                    }
                    tempRowSum += matrix[i][j];
                    tempColSum += matrix[j][i];
            }
            if (tempRowSum == search.repeat(matrix.length)) {
                return true
            } else if (tempColSum == search.repeat(matrix.length)) {
                return true
            }
        }
        if (firstDiag == search.repeat(matrix.length)) {
            return true
        } else if (secondDiag == search.repeat(matrix.length)) {
            return true
        } else {
            return false
        }
    } 

    while (input.length > 0){
        cmd = (input.shift()).split(" ");
        if(!dashboard[cmd[0]][cmd[1]]){
            if (counter % 2 == 0){
                dashboard[cmd[0]][cmd[1]] = "X"
                if (checkMatrixForWinner(dashboard, "X")) {
                    winner = "X";
                }
            } else {
                dashboard[cmd[0]][cmd[1]] = "O";
                if (checkMatrixForWinner(dashboard, "O")){
                    winner = "O";
                }
            }
            if (winner != "NO") {
                console.log(`Player ${winner} wins!`)
                break;
            }
        } else {
            if (!checkArrForString(dashboard,false)){
                break;
            }
            console.log("This place is already taken. Please choose another!")
            if(input.length > 0) {
                cmd = (input.shift()).split(" ");
                if(!dashboard[cmd[0]][cmd[1]]){
                    if (counter % 2 == 0){
                        dashboard[cmd[0]][cmd[1]] = "X"
                        if (checkMatrixForWinner(dashboard, "X")) {
                            winner = "X";
                        }
                    } else {
                        dashboard[cmd[0]][cmd[1]] = "O";
                        if (checkMatrixForWinner(dashboard, "O")){
                            winner = "O";
                        }
                    }
                    if (winner != "NO") {
                        console.log(`Player ${winner} wins!`)
                        break;
                    }
                }
            }
        }
        counter++;
    }
    if (!checkArrForString(dashboard,false)){
        console.log("The game ended! Nobody wins :(")
    }
    for (let i = 0; i < dashboard.length; i++){
        console.log(dashboard[i].join("\t"))
    }
    
}

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)
