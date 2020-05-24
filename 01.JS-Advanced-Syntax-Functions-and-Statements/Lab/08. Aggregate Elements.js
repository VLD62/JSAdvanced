function aggregateElements(input){
    let total_sum = 0;
    let inversed_sum = 0;
    let concat_array = input.join('');
    for (let i = 0; i < input.length; i++) {
        total_sum += input[i];
        inversed_sum += 1/input[i];
    }
    console.log(total_sum);
    console.log(inversed_sum);
    console.log(concat_array);
}