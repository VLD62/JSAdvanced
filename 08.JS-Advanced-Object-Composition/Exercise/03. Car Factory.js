function carFactory(carObj) {
    function powerCalc(power) {
        if(power <= 90) {
            return 90;
        } else if(power <= 120) {
            return 120;
        } else {
            return 200;
        }
    }
    function volueCalc(power) {
        if(power <= 90) {
            return 1800;
        } else if(power <= 120) {
            return 2400;
        } else {
            return 3500;
        }
    }
    function wheelsCalc(wheelsize){
        if (wheelsize % 2 == 0){
            wheelsize -= 1;
        }
        return [wheelsize, wheelsize, wheelsize, wheelsize];
    }
    let powerCalculated = powerCalc(carObj["power"]);
    let volumeCalculated = volueCalc(carObj["power"]);
    let wheelsCalculated = wheelsCalc(carObj["wheelsize"]);
    return {
        model: carObj["model"],
        engine: {
            power: powerCalculated,
            volume:  volumeCalculated,
        },
        carriage: {
            type: carObj["carriage"],
            color: carObj["color"]
        },
        wheels: wheelsCalculated
    }
}

console.log(JSON.stringify(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))
)