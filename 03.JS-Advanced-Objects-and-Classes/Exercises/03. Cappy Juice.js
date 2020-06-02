function cappyJuice(input) {
    let juiceMap = new Map();
    let bottlesMap = new Map();
    input.forEach(element => {
        element = element.split(" => ");
        if (element[0] in juiceMap) {
            juiceMap[element[0]] += Number(element[1])
            if (Math.floor(juiceMap[element[0]] / 1000) > 0) {
                if (element[0] in bottlesMap) {
                    bottlesMap[element[0]] += juiceMap[element[0]];
                } else {
                    bottlesMap[element[0]] = juiceMap[element[0]];
                }
                juiceMap[element[0]] -= 1000 * Math.floor(juiceMap[element[0]] / 1000);
            }
        } else {
            juiceMap[element[0]] = Number(element[1]);
            if (Math.floor(juiceMap[element[0]] / 1000) > 0) {
                bottlesMap[element[0]] = juiceMap[element[0]];
                juiceMap[element[0]] -= 1000 * Math.floor(juiceMap[element[0]] / 1000);
            }
        }
    });
    for (let [key, value] of Object.entries(bottlesMap)) {
        if (Math.floor(value / 1000) > 0) {
            console.log(`${key} => ${Math.floor(value / 1000)}`);
        }
    }
}
// cappyJuice(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// )

cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)