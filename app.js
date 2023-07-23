require('dotenv').config();

const express = require('express');
const mafiaRoute = require('./routes/mafia.routes');
const PORT = parseInt(process.env.PORT, 10) || 3001;

async function run(app) {
  try {
    app.listen(PORT, () => {
      console.log(`app started`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

function runExpressApp() {
  const app = express();
  app.use(express.json({ extended: true }));
  app.use('/api/mafia', mafiaRoute);

  run(app);
}

runExpressApp();
