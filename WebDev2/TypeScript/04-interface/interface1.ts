//Interface are used to define the structure of an object

interface Summarize{
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} % of sugar`;
    }
}

// const printVehicle = (vehicle:Vehicle) => {
//     console.log(vehicle.summary());
// }

// printVehicle(oldCivic);

const printSummary = (item: Summarize): void => {
    console.log(item.summary());
}

printSummary(oldCivic)
printSummary(drink)



