function autoEngineeringCompany(input){
    let resultMap = new Map();
    input.forEach(element => {
        element = element.split(" | ");
        carObj = {};
        carObj[element[1]] = Number(element[2]);
        if(element[0] in resultMap){
            if(element[1] in resultMap[element[0]]){
                resultMap[element[0]][element[1]] += Number(element[2]);
            } else {
                resultMap[element[0]][element[1]] = Number(element[2]);
            }
        } else {
            resultMap[element[0]] = carObj;
        }
    });
    for (let [car, types] of Object.entries(resultMap)) {
        console.log(car);
        for (let [brand, number] of Object.entries(types)) {
            console.log(`###${brand} -> ${number}`); 
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);