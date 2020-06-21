function solve(){
    class Employee {
        constructor(name, age){
            if (this.constructor == Employee) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work(){
            let currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }

        getSalary(){
            return this.salary;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        } 
    }
    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }
    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`, 
            `${this.name} is taking time off work.`, 
            `${this.name} is supervising junior workers.`];
        }

    }
    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} scheduled a meeting.`, 
            `${this.name} is preparing a quarterly report.`];
            this.dividend = 0;
        }

        getSalary(){
            return this.salary + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager}
}

result = solve();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

console.log(guy1.hasOwnProperty('name'));
console.log(guy2.hasOwnProperty('salary'));
console.log(guy3.hasOwnProperty('dividend'));

// expect(guy1.hasOwnProperty('name')).to.equal(true, "Name property not found on Junior instance.");
// expect(guy1.hasOwnProperty('age')).to.equal(true, "Age property not found on Junior instance.");
// expect(guy1.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Junior instance.");

// expect(guy2.hasOwnProperty('name')).to.equal(true, "Name property not found on Senior instance.");
// expect(guy2.hasOwnProperty('age')).to.equal(true, "Age property not found on Senior instance.");
// expect(guy2.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Senior instance.");

// expect(guy3.hasOwnProperty('name')).to.equal(true, "Name property not found on Manager instance.");
// expect(guy3.hasOwnProperty('age')).to.equal(true, "Age property not found on Manager instance.");
// expect(guy3.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Manager instance.");
// expect(guy3.hasOwnProperty('dividend')).to.equal(true, "Salary property not found on Manager instance.");