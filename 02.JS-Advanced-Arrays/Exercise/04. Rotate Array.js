function rotateArray(input){
    let rotations = Number(input.pop()) % 10;
    for (let index = 0; index < rotations; index++) {
        let tempElement = input.pop();
        input.unshift(tempElement);
        
    }
    console.log(input.join(" "))
}