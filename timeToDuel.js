//create a card class with name and cost attribute
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
//use extend to create a new class that is an extension of Card Class above
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
        //create an action that the Unit will complete in this case we will attack
    attack(target) {
        target.res -= this.power;
        console.log(
            `${this.name} attacks the ${target.name} for ${this.power} damage!`            // this is saying
        );
    }
}
//creating effects, also an extension of the previous class, in this cass its the Unit class, so going off of the attack we will add an effect like the action attack but its an extension giving it its own context when we place constructor with parameters 
class Effect extends Card {
    constructor(name, cost, stat, magnitude, text) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`The ${this.name} was played on ${target.name}`);
            console.log(this.text);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

// First Try
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect(
    "Hard Algorithm",
    2,
    "res",
    3,
    "increase target's resilience by 3"
);
hardAlgo.play(redBeltNinja);

// Second Try
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromise = new Effect(
    "Unhandled Promise Rejection",
    1,
    "res",
    -2,
    "reduce target's resilience by 2"
);
unhandledPromise.play(redBeltNinja);

// Third Try
const pairProgramming = new Effect(
    "Pair Programming",
    3,
    "power",
    2,
    "increase target's power by 3"
);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);





















// ZM 1/5 / 2021