import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const chararactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(chararactersCollection);
sorter.sort();
console.log(chararactersCollection.data);
