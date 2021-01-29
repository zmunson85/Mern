class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Hello my name is " + this.name);
        return this;
    }

    showStats() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.speed + ", " + "Strength: " + this.strength);
        return this;
    }

    drinkShake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = "Be kind and give more, you get out what you put out into the world.";
    }

    speakWisdom() {
        super.drinkShake();
        console.log(this.wisdom);
        return this;
    }
}

var Zach = new Sensei("Zach");
Zach.showStats();
Zach.speakWisdom();
Zach.showStats();
