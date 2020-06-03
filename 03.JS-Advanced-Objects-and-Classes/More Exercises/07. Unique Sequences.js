function uniqueSequences(input){
    input = input.map(x => JSON.parse(x));
    let resultMap = new Map;
    let resultArr = [];
    for (let numArr of input){
        numArr = numArr.map(x => Number(x));
        let totalSum = numArr.reduce((a, b) => a + b, 0)
        if (!resultMap.has(totalSum)) {
            resultMap.set(totalSum, numArr);
        }
    }
    for (let arr of resultMap.values()){
        resultArr.push(arr.sort((a, b) => {return b - a}));
    }
    resultArr.sort((a, b) => {return a.length - b.length});
    resultArr.forEach(element => {
        console.log(`[${element.join(", ")}]`);
    });

}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)

uniqueSequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
)