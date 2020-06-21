function argumentInfo(args) {
    let argumentTypes = {};
    [...arguments].forEach(element => {
        let elemType = typeof element
        if (argumentTypes.hasOwnProperty(elemType)) {
            argumentTypes[elemType] += 1
        } else {
            argumentTypes[elemType] = 1
        }
        if (elemType === "object") {           
            console.log(`${elemType}: ${JSON.stringify(element)}`)
        } else {
            console.log(`${elemType}: ${String(element)}`)
        }
    });
    let results = Object.entries(argumentTypes)
    let sortedArgumentTypes = results.sort((a, b) => b[1] - a[1]);
    for (const [key, value] of sortedArgumentTypes) {
        console.log(`${key} = ${value}`)
    }
}

//argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999);
