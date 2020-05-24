function addRemoveElements(input){
    let newArray = [];
    let counter = 0;
    while (input.length > 0){
        counter++;
        let cmd = input.shift();
        if(cmd == "add"){
            newArray.push(counter);
        }
        if(cmd == "remove"){
            newArray.pop();
        }
    }
    if (newArray.length > 0){
        console.log(newArray.join('\n'))
    } else {
        console.log("Empty")
    }

}