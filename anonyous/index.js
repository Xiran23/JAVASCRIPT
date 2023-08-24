class card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new card("A", 2),
  new card("B", 3),
  new card("c", 4),
  new card("D", 5),
];

console.log(cards);
console.log(cards[0].value);

cards.forEach((card) => console.log(`${card.value},${card.suit}`));

// console.log[cards[2].value];

// for (let car of cards) {
//   console.log(cards[car].value);
// }
