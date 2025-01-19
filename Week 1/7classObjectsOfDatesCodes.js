class Animal {
    constructor(name, leg, sound) {
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
    static myType() {
        console.log("Animal");
    }

    barks() {
        console.log(this.name + " " + this.sound);
    }
}

Animal.myType();
let dog = new Animal("Dog",4,"Bhow");
dog.barks();

let currentDateTime = new Date();

console.log(currentDateTime);
console.log(currentDateTime.getDate());
console.log(currentDateTime.getMonth() + 1);
console.log(currentDateTime.getYear());
console.log(currentDateTime.getFullYear());
console.log(currentDateTime.getHours());
console.log(currentDateTime.getMinutes());
console.log(currentDateTime.getSeconds());
console.log(currentDateTime.getTime());

console.log("Time in milliseconds since 1970:", currentDateTime.getTime());

const newDate = new Date(2023, 8, 15); // Creating a new date
console.log("New Date:", newDate);