function roadRadar(input){
    let speed = Number(input[0]);
    let area = input[1];
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    if (speed - limits[area] > 0 && speed - limits[area] <= 20){
        console.log('speeding');
    } else if(speed - limits[area] > 20 && speed - limits[area] <= 40){
        console.log('excessive speeding');
    } else if(speed - limits[area] > 40){
        console.log('reckless driving');
    }
}