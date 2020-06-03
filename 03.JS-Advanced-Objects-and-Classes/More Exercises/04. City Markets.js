function cityMarkets(input){
    let townProductsMap = new Map;
    for (let town of input){
        console.log(town.split(" -> "));

        let [city, brand, sales] = town.split(" -> ");
        if (!townProductsMap.has(city)) {
            townProductsMap.set(city, new Map);
        }
 
        if (!townProductsMap.get(city).has(brand)) {
            townProductsMap.get(city).set(brand, [])
        }
        townProductsMap.get(city).get(brand).push(sales);
    }
    console.log(townProductsMap)
}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
);