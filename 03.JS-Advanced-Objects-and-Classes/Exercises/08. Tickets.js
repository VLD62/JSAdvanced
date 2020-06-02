function tickets(input, sorting) {
    let ticketsList = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        };
    }
    for (let ticket of input) {
        let ticketInfo = ticket.split("|");
        let newTicket = new Ticket(ticketInfo[0], Number(ticketInfo[1]), ticketInfo[2]);
        ticketsList.push(newTicket);
    }
    if (sorting == "destination") {
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const destA = a.destination.toUpperCase();
            const destB = b.destination.toUpperCase();

            let comparison = 0;
            if (destA > destB) {
                comparison = 1;
            } else if (destA < destB) {
                comparison = -1;
            }
            return comparison;
        }
        ticketsList.sort(compare);
    }
    if (sorting == "price") {
        function compare(a, b) {
            const priceA = a.price;
            const priceB = b.price;

            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
            return comparison;
        }
        ticketsList.sort(compare);
    }
    if (sorting == "status") {
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const statusA = a.status.toUpperCase();
            const statusB = b.status.toUpperCase();

            let comparison = 0;
            if (statusA > statusB) {
                comparison = 1;
            } else if (statusA < statusB) {
                comparison = -1;
            }
            return comparison;
        }
        ticketsList.sort(compare);
    }
    return ticketsList;
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));