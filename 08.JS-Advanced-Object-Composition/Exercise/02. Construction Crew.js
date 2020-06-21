function solve(workerObj) {
    if(workerObj["dizziness"]){
        workerObj["levelOfHydrated"] +=  workerObj["weight"] * workerObj["experience"] * 0.1;
        workerObj["dizziness"] = false;
    }
    return workerObj
}
console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ))