function largestNumber(num1, num2, num3){
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    let max_num = num1;
    if (num2 > max_num){
        max_num = num2;
    }
    if (num3 > max_num){
        max_num = num3;
    }
    console.log(`The largest number is ${max_num}.`);
}