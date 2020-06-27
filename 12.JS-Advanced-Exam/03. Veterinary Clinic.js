class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0

    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        let pet = { name: petName, kind: kind, procedures: procedures };
        let owner = { name: ownerName, pets: [] };
        let found = false;
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        } else {
            this.clients.forEach(client => {
                if (client.name === owner.name) {
                    found = true;
                    let petFound = false;
                    client.pets.forEach(clientPet => {
                        if (clientPet.name === pet.name) {
                            if (clientPet.procedures.length > 0) {
                                throw new Error(`This pet is already registered under ${client.name} name! ${clientPet.name} is on our lists, waiting for ${clientPet.procedures.join(', ')}.`);
                            } else {
                                petFound = true;
                            }
                        }
                    });
                    if(!petFound){
                        client.pets.push(pet);
                        this.currentWorkload += 1;
                    } else {
                        client.pets.forEach(clientPet => {
                            if (clientPet.name === pet.name && clientPet.procedures.length === 0) {
                                clientPet.procedures = pet.procedures;
                                this.currentWorkload += 1;
                            }
                        });
                    }
                }
            });
            if (!found){
                owner.pets.push(pet);
                this.clients.push(owner);
                this.currentWorkload += 1;
            }
        }
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let petFound = false;
        let clientFound = false;
        this.clients.forEach(client => {
            if (!clientFound) {
                if (client.name === ownerName) {
                    clientFound = true;
                    client.pets.forEach(clientPet => {
                        if (clientPet.name === petName) {
                            petFound = true;
                            if (clientPet.procedures.length == 0) {
                                throw new Error(`Sorry, there are no procedures for ${petName}!`);
                            } else {
                                this.totalProfit = 500 * clientPet.procedures.length;
                                clientPet.procedures = [];
                                this.currentWorkload -= 1;
                            }
                        }
                    });
                    if (!petFound) {
                        throw new Error(`Sorry, there are no procedures for ${petName}!`);
                    }
                } 
            }
        });
        if(!clientFound) {
            throw new Error("Sorry, there is no such client!");
        }
        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        let petsWithProcedures = 0
        this.clients.forEach(client => {
            client.pets.forEach(clientPet => {
                if (clientPet.procedures.length > 0) {
                    petsWithProcedures += 1
                }
            });
        });
        let result = `${this.clinicName} is ${Math.floor(petsWithProcedures / this.capacity * 100)}% busy today!`;
        result += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.sort((a,b) => a.name.localeCompare(b.name));
        this.clients.forEach(client => {
            result += `\n${client.name} with:`
            client.pets.sort((a,b) => a.name.localeCompare(b.name));
            client.pets.forEach(clientPet => {
                result += `\n---${clientPet.name} - a ${clientPet.kind} that needs: ${clientPet.procedures.join(', ')}`
            });
        });
        return result;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
//console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
