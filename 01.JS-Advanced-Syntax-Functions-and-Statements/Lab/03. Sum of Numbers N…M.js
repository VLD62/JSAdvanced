function sumNumbersNM(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let total_sum = 0;
    for (let i = num1; i<=num2; i++) {
        total_sum += i;
    }
    console.log(total_sum);
}