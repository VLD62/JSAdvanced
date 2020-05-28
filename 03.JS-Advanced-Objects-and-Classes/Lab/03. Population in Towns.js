function populationInTowns(input){
    let townsObj = {};
    while (input.length > 0){
        let currentTown = (input.shift()).split(" <-> ");
        if(currentTown[0] in townsObj){
            townsObj[currentTown[0]] += Number(currentTown[1])
        } else {
            townsObj[currentTown[0]] = Number(currentTown[1])
        }
    }
    for (var key in townsObj) { 
        console.log(key,":",townsObj[key])
      }
}
populationInTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)