function objectFactory(input){
    input = JSON.parse(input);
    let newOBj = {}
    for (let prop of input){
        for (const [key, value] of Object.entries(prop)) {
            newOBj[key] = value;
          }
    }
    return newOBj;
}

objectFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)