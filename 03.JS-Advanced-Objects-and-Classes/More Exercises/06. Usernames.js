function userNames(input){
    input = [...new Set(input)];
    //Sort array by two criteria:
    input.sort(function (x, y) { return x.length - y.length || x.localeCompare(y)});
    for (let name of input){
        console.log(name);
    }
}
userNames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston',
'Ashton']
);