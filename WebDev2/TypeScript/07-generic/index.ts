class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

const arr = new ArrayOfNumbers([1, 2, 3]);
arr.get(0);
const arr2 = new ArrayOfStrings(['a', 'b', 'c']);
arr.get(2)

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr3 = new ArrayOfAnything(['a', 'b', 'c']);
arr3.get(2); // 'M


function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']); // avoids potential type inference issues
printAnything([1, 2, 3]);
printAnything([true, false, true]);


// Generic Constraints
class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

class Building {}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars([new House(), new Car()])
printHousesOrCars(["1", "2", "3])
printHousesOrCars([new Building(), new Building()])
