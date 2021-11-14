const { Router } = require('express');

const nominals = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

const suits = ['heart', 'diamond', 'club', 'spade'];

const cards = [];
nominals.forEach((nominal) => {
  suits.forEach((suit) => cards.push([nominal, suit]));
});

let deck = cards
  .map((elem) => [elem, Math.random()])
  .sort((a, b) => a[1] - b[1])
  .map((elem) => elem[0]);

function changeDeck() {
  deck = cards
    .map((elem) => [elem, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map((elem) => elem[0]);
}

const router = Router();
router.get('/changeDeck', async (req, res) => {
  try {
    changeDeck();
    res.status(200);
    res.json({ message: 'Колода перетасована' });
  } catch (e) {
    res.status(500).json({ message: 'Невозможно перетасовать колоду' });
  }
});

router.get('/getDeck', async (req, res) => {
  try {
    res.json({ data: deck, message: 'Колода получена' });
  } catch (e) {
    res.status(500).json({ message: 'Невозможно получить колоду' });
  }
});

module.exports = router;
