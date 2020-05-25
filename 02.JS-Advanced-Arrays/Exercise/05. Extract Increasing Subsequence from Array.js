function increasingSubsequence(input){
    let biggest = input[0];
    let temp_array = []
    for (let i = 0; i < input.length; i++) {
        if(input[i] >= biggest){
            biggest = input[i];
            temp_array.push(biggest) 
        }
    }
    console.log(temp_array.join('\n'))
}

increasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])