function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function () {
        console.log("Hello my name is " + this.name);
        return this;
    }

    this.showStats = function () {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + speed + ", " + "Strength: " + strength);
        return this;
    }

    this.drinkShake = function () {
        this.health += 10;
        return this;
    }

    this.punch = function (ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(this.name + " punched " + ninja.name);
            return this;
        } else {
            console.log("You cannot fight someone who is not a Ninja!")
        }
    }
//a kick is stronger and you can make it worth more damage, described in the -15 health. and our result should be 85.
    this.kick = function (ninja) {
        if (ninja instanceof Ninja) {
            ninja.health -= 15;
            console.log(this.name + " kicked " + ninja.name);
            this.showStats()
            ninja.showStats()
            return this;
        } else {
            console.log("You cannot fight someone who is not a Ninja!")

        }
    }
}


var ninja1 = new Ninja("ninja1");
var ninja2 = new Ninja("ninja2");

ninja1.sayName();
ninja2.sayName();


ninja1.punch(ninja2);
ninja2.kick(ninja1);


