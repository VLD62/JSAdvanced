function sumByTown(input){
    townsObj = {};
    for (let i = 0; i < input.length; i++){
        if(i % 2 == 0){
            if(input[i] in townsObj){
                townsObj[input[i]]  += Number(input[i+1])
            } else {
                townsObj[input[i]] = Number(input[i+1])
            }
        } 
    }
    console.log(JSON.stringify(townsObj))
}
sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])