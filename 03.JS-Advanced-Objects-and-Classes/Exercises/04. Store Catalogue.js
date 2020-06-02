function storeCatalogue(input){
    let catalogueMap = new Map();
    let lettersArray = [];
    input.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    input.forEach(element => {
        element = element.split(" : ");
        catalogueMap[element[0]] = Number(element[1]);
        lettersArray.push(element[0][0].toUpperCase());
    });
    lettersArray = new Set(lettersArray)
    lettersArray.forEach(letter => {
        console.log(letter)
        for (let [key, value] of Object.entries(catalogueMap)) {
            if(key[0].toUpperCase() == letter){
                console.log(`  ${key}: ${value}`);
            }
        }
    });
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)