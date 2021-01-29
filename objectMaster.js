const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array of pokemon objects where the id is evenly divisible by 3
const divisibleBy3 = pokemon.filter(p => p.id % 3 == 0);
console.log(divisibleBy3);

// if we filter for a specific type we can get the amount in that type
const fireType = pokemon.filter(p => p.types.includes("fire"));
console.log(fireType);

// this again will use filter, we can see which objects are the same type.
const moreThanOneType = pokemon.filter(p => p.types.length > 1);
console.log(moreThanOneType);
// an array with just the names of the pokemon
const justNames = pokemon.map(p => p.name)
console.log(justNames);

// filter to find an id that is greater than 99
//map a name that corresponds with the id that is greater than 99
const greaterThan99 = pokemon
    .filter(p => p.id > 99)
    .map(p => p.name);
console.log(greaterThan99)
// an array with just the names of the pokemon whose only type is poison
const poisonType = pokemon
    .filter(p => p.types.includes('poison') && p.types.length == 1)
    .map(p => p.name);
    console.log(poisonType)

//filter the types to find the flying types in the 1st index
//map the types in index 0 that match the filter used to find flying pokemon
const secondTypeFlying = pokemon
    .filter(p => p.types[1] == 'flying')
    .map(p => p.types[0]);
    console.log(secondTypeFlying);

// use filter to count all the pokemon that have normal type, the count will track that.
const countNormal = pokemon
.filter(p => p.types.includes("normal")).length;

console.log(countNormal);