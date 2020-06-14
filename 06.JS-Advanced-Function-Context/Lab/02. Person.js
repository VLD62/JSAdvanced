function result(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
        set: function (value) {
            const fullNameArr = value.split(" ");
            if (fullNameArr.length !== 2) { return; }
            [this.firstName, this.lastName] = fullNameArr; 
        },
        get: function () {
            return this.firstName + " " + this.lastName;
        }
    }
    );
}


var assert = require('assert');

let Person = result;
let person = new Person("Peter", "Ivanov");

let act1 = person.fullName;
let exp1 = "Peter Ivanov";
assert.equal(act1,exp1);

person.firstName = "George";
let act2 = person.fullName;
let exp2 = "George Ivanov";
assert.equal(act2,exp2);

person.lastName = "Peterson";
let act3 = person.fullName;
let exp3 = "George Peterson";
assert.equal(act3,exp3);

person.fullName = "Nikola Tesla";
let act4 = person.firstName;
let exp4 = "Nikola";
assert.equal(act4,exp4);

let act5 = person.lastName;
let exp5 = "Tesla";
assert.equal(act5,exp5);
