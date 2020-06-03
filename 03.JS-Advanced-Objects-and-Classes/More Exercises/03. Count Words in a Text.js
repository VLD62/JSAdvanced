function countWordsInText (arr) {
    let result = {}
    for (let str of arr ) {
        let currentWords = str.split(/[^0-9a-zA-Z_]/).filter(a => a !== '')

        for (let word of currentWords) {
            if(result.hasOwnProperty(word)) {
                result[word]++
            } else {
                result[word] = 1
            }
        }

    }
    console.log(JSON.stringify(result))
}