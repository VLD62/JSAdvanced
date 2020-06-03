class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(arr) {
        for (const line of arr) {
            let productLine = line.split(' ');
            let name = productLine[0];
            let quantity = Number(productLine[1]);
            let price = Number(productLine[2]);

            let successString = `Successfully loaded ${quantity} ${name}`;
            let failureString = `There was not enough money to load ${quantity} ${name}`;
            let canBuy = this.budget - price >= 0;

            if (!this.productsInStock.hasOwnProperty(name) && canBuy) {
                this.productsInStock[name] = quantity;
                this.budget -= price
                this.actionsHistory.push(successString);
            } else if (canBuy) {
                this.productsInStock[name] += quantity;
                this.budget -= price;
                this.actionsHistory.push(successString);
            } else {
                this.actionsHistory.push(failureString);
            }
        }
        return this.actionsHistory.join('\n').trim() + '\n';
    }

    addToMenu(meal, products, price) {
        let exist = this.menu.hasOwnProperty(meal);
        if (exist) {
            return `The ${meal} is already in our menu, try something different.`;
        }
        this.menu[meal] = { meal, products: products, price };
        let count = Object.keys(this.menu).length;
        return `Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return "Our menu is not ready yet, please come later...";
        }
        let result = Object.values(this.menu).map(x => (`${x.meal} - $ ${x.price}`));
        return result.join('\n').trim() + '\n';
    }


    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let neededProducts = this.menu[meal].products;

        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(/\s+/);
            let quantityNeeded = Number(productQuantity);

            if (!this.productsInStock.hasOwnProperty(productName) || this.productsInStock[productName] < quantityNeeded) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        neededProducts.forEach((product) => {
            let [productName, productQuantity] = product.split(/\s+/);
            this.productsInStock[productName] -= Number(productQuantity);
        });

        let price = this.menu[meal].price;
        this.budget += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }

}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
