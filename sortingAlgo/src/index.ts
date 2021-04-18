import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([10, 3, -5, 50]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(30);
linkedListCollection.add(60);
linkedListCollection.add(80);
linkedListCollection.sort();
linkedListCollection.print();
