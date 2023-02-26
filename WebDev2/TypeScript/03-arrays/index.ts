const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

// carMakers.push(1000);

// Help with inference when extracting values
carMakers.map((car) => {
    return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(true);
