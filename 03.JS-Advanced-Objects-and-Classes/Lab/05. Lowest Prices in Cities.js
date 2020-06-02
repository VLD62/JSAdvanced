function lowestPriceInCities(input){
    let productsArr = []
    let productsArrFiltered = [];
    input.forEach(element => {
        let cityInfo = element.split(" | ");
        let singleProduct = { name: cityInfo[1],
                              town: cityInfo[0],
                              price: Number(cityInfo[2])};
        if (productsArr.find(({name}) => name === singleProduct.name)){
            productsArr.forEach(subElement => {
                if(singleProduct.name == subElement.name && singleProduct.town == subElement.town){
                    subElement.price = singleProduct.price;
                } else {
                    productsArr.push(singleProduct);
                }
            });
        } else {
            productsArr.push(singleProduct)
        }
         
    });
    productsArr.forEach(element => {
        if (productsArrFiltered.find(({name}) => name === element.name)){
            productsArrFiltered.forEach(subElement => {
                if(element.name == subElement.name && element.price < subElement.price){
                    subElement.town = element.town;
                    subElement.price = element.price;
                }
            });
        } else {
            productsArrFiltered.push(element)
        }

    });
    productsArrFiltered.forEach(element => {
        console.log(`${element.name} -> ${element.price} (${element.town})`)
    });
}
lowestPriceInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 4',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])

function lowestPriceInCities(array) {
    let products = new Map();
    for (let sentance of array) {
        let [town, product, price] = sentance.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }
    for (let [key, value] of products) {
        let lowest = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}

lowestPriceInCities(['Sofia City | Audi | 100000',
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000", 
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000"])