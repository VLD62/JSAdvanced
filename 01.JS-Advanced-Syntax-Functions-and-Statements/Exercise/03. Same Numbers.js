function sameNumbers(number){
    let totalSum = 0;
    let checkDigits = true
    let prevNumber = number % 10
    while (number) {
        if (prevNumber != number % 10){
            checkDigits = false;
        }
        totalSum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(checkDigits);
    console.log(totalSum);
}