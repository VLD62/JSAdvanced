function sortArray(arr, sorting){  
    if (sorting === 'asc') {
        arr.sort((a, b) => (a - b));
    } else if (sorting === 'desc') {
        arr.sort((a, b) => (b - a));
    } else {
        throw "Invalid sorting type!";
    }
    return arr
}

sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')