//Interface are used to define the structure of an object

interface Summarize2{
    summary(): string;
}

interface Vehicle2 extends Summarize2{
    name: string;
    year: Date;
    broken: boolean;
}

const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
}

const printVehicle2 = (vehicle:Vehicle2) => {
    console.log(vehicle.summary());
}

printVehicle2(oldCivic2);



