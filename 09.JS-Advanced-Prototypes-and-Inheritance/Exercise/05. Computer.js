function result() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (this.constructor == Computer) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(val) {
            console.log(typeof val)
            if (val instanceof Battery){
                this._battery = val;
            } else {
                throw new TypeError("Parameter was not of type Battery");
            }

        }

    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard , monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(val) {
            if (val instanceof Keyboard){
                this._keyboard = val;
            } else {
                throw new TypeError("Parameter was not of type Keyboard");
            }

        }
        get monitor() {
            return this._monitor;
        }

        set monitor(val) {
            if (val instanceof Monitor){
                this._monitor = val;

                console.log(val instanceof Monitor)
            } else {
                throw new TypeError("Parameter was not of type Monitor");
            }
        }

    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let KOZA  = new Laptop("Hewlett Packard", 2.4 ,4 ,0.5 ,3.12, "Silver", "pesho");
    
let KOZA2 = new Desktop("JAR Computers",3.3,8,1,1,monitor);
let KOZA3 = new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor");
console.log(KOZA.battery)
