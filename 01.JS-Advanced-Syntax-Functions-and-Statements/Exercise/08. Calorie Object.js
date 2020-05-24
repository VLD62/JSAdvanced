function calorieObject(input){
    let obj = {}
    for (let index = 0; index < input.length; index++) {
        if (index % 2 == 0){
            obj[input[index]] = 0
        } else {
            obj[input[index-1]] = Number(input[index])
        }
        
    }
    console.log(obj)
}