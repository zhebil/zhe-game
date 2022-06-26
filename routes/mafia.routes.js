const { Router } = require('express');

const roles = {
  8: {
    sheriff: 1,
    don: 1,
    mafia: 1,
    citizen: 5,
  },
  9: {
    sheriff: 1,
    don: 1,
    mafia: 2,
    citizen: 5,
  },
  10: {
    sheriff: 1,
    don: 1,
    mafia: 2,
    citizen: 6,
  },
};
let part;
const shuffle = (count) => {
  part = Object.entries(roles[count])
    .map(([roleName, number]) => new Array(number).fill(roleName))
    .flat()
    .map((elem) => [elem, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map((elem) => elem[0]);
};

const router = Router();

router.get('/startGame', async (req, res) => {
  try {
    const count = req.query.playersCount;
    shuffle(count);
    res.json({ data: part, message: 'Гра створена' });
  } catch (e) {
    res.status(500).json({ message: 'Неможливо створити гру' });
  }
});

router.get('/getPart', async (req, res) => {
  try {
    res.json({ data: part, message: 'Колода отримана' });
  } catch (e) {
    res.status(500).json({ message: 'Неможливо отримати колоду' });
  }
});
router.get('/killPlayer', async (req, res) => {
  try {
    const { killedPlayer } = req.query;

    part.splice(Number(killedPlayer), 1, ' ');

    res.json({ data: part, message: 'Гравець убитий' });
  } catch (e) {
    res.status(500).json({ message: 'Неможливо убити гравця' });
  }
});

module.exports = router;
