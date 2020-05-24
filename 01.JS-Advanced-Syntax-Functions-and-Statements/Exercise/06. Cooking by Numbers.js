function cookingByNumbers(input){
    num = Number(input.shift());
    while(input.length > 0 ){
        let operation = (input.shift());
        switch(operation){
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num += 1;
                break;
            case "bake":
                num = num * 3;
                break;
            case "fillet":
                num -= num * 0.2;
                break;
        }
        console.log(num)
    }

}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])