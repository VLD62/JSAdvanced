function listProcessor(commands) {
    let commandProcessor = (function () {
        let tempArray = []
        return {
            add(element) {
                tempArray.push(element);
            },
            remove(element) {
                var index = tempArray.indexOf(element);
                while (index > -1) {
                    tempArray.splice(index, 1);
                    index = tempArray.indexOf(element);
                }
            },
            print(element) {
                console.log(tempArray.join(","));
            },
        }
    })();
    for (let command of commands) {
        command = command.split(' ');

        let action = command.shift();
        let element = command.shift();

        commandProcessor[action](element);
    }
}
