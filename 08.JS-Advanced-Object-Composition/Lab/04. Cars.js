function cars(commands) {
    let objStorage = {};
    let commandProcessor = {
        create: function (subcommands) {
            if (subcommands[1] === "inherit") {
                let name = subcommands[0];
                let cloneName = subcommands[2];
                let parentObj = objStorage[cloneName]
                let newObj = Object.create(parentObj);
                objStorage[name] = newObj;

              } else {
                let name = subcommands[0];
                let newObj = Object.create(null);
                objStorage[name] = newObj;

            }
        },
        set: function (subcommands) {
            let name = subcommands[0];
            let prop = subcommands[1];
            let propValue = subcommands[2];
            let obj = objStorage[name];
            obj[prop] = propValue;
        },
        print: function (subcommands) {
            let name = subcommands[0];
            let result = [];
            let obj = objStorage[name];
            Object.keys(obj).forEach(key => result.push(`${key}:${obj[key]}`));
            while(Object.getPrototypeOf(obj)) {
                Object.keys(Object.getPrototypeOf(obj)).forEach(key => result.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
                obj = Object.getPrototypeOf(obj);
            }
            console.log(result.join(', '));
        }
    }; 

    for (let command of commands) {
        command = command.split(' ');
        let action = command.shift();
        commandProcessor[action](command);

    }
}


cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])

