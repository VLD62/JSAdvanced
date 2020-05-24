function validityChecker(input){
    function distnaceChecker(x1, y1, x2, y2){
        let a = x1 - x2;
        let b = y1 - y2;
        let distance  = Math.sqrt(a*a + b*b);
        if (Number.isInteger(distance)){
            return "valid";
        } else {
            return "invalid";
        }
    }
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${distnaceChecker(x1,y1,0,0)}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distnaceChecker(x2,y2,0,0)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distnaceChecker(x1,y1,x2,y2)}`)
}
validityChecker([2, 1, 1, 1])