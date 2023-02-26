class Vehicle{
    private drive(): void{
        console.log('generic sound');
    }
    protected honk(): void{
        console.log('beep');
    }

    protected overrideDrive():void{
        this.drive()
    }
}

const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle{
    constructor(wheel: number, color: string){
        super()
    }

    // drive(): void {
    //     console.log("vrooom")
    // }

    public startDriving(){
        this.honk();
        this.overrideDrive();
    }
}

const car = new Car(4, 'white');
// car.drive();
car.startDriving();