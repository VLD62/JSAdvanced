class List {
    constructor() {
        this.size = 0;
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
        this.size += 1;
        this.elements.sort((a, b) => a - b);
    }
    get(index) {
            if (Number(index) >= 0 && Number(index) < this.size) {
                return this.elements[Number(index)];
            }
    }
    remove(index) {
        if (Number(index) >= 0 && Number(index) < this.size) {
            this.elements.splice(Number(index), 1);
            this.size -= 1;
            this.elements.sort((a, b) => a - b);
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
