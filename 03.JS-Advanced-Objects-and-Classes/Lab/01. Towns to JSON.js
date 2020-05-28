function townsToJSON(input) {
    let objList = [];
    let objProps = input.shift().split("|");
    objProps = (objProps.filter(entry => /\S/.test(entry))).map(s => s.trim());
    input.forEach(element => {
        let objValues = ((element.split("|").filter(entry => /\S/.test(entry))).map(s => s.trim()));
        let singleObj = new Object;
        singleObj[objProps[0]] =  objValues[0];
        singleObj[objProps[1]] =  Number(Number(objValues[1]).toFixed(2));
        singleObj[objProps[2]] =  Number(Number(objValues[2]).toFixed(2));
        objList.push(singleObj);
    });
    console.log(JSON.stringify(objList))
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)