require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mafiaRoute = require('./routes/mafia.routes');
const pokerRoute = require('./routes/poker.routes');

const PORT = parseInt(process.env.PORT, 10) || 3001;

async function run(app) {
  try {
    app.listen(PORT, () => {
      console.log('app started');
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

function runExpressApp() {
  const app = express();
  app.use(cors());
  app.use(express.json({ extended: true }));
  app.use('/ping', (req, res) => res.json({ message: 'pong' }));
  app.use('/api/mafia', mafiaRoute);
  app.use('/api/poker', pokerRoute);

  run(app);
}

runExpressApp();
