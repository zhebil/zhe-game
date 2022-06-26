require('dotenv').config();
const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const getDataRoute = require('./routes/get-data.routes');
const presetsRoute = require('./routes/presets.routes');
const pokerRoute = require('./routes/poker.routes');
const mafiaRoute = require('./routes/mafia.routes');

const HOSTNAME = process.env.HOST || 'localhost';
const PORT = parseInt(process.env.PORT, 10) || 3001;
const serverAddress = `http://${HOSTNAME}:${PORT}`;
const url = process.env.MONGO_URL;

async function run(app) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`app started on ${serverAddress}`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

function runExpressApp() {
  const app = express();
  app.use(express.json({ extended: true }));
  app.use('/api/data', getDataRoute);
  app.use('/api/presets', presetsRoute);
  app.use('/api/poker', pokerRoute);
  app.use('/api/mafia', mafiaRoute);

  if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  run(app);
}

// if (process.env.NODE_ENV === 'production') {
//   if (cluster.isMaster) {
//     const cpuCount = os.cpus().length;

//     for (let i = 0; i < cpuCount; i += 1) {
//       cluster.fork();
//     }
//     cluster.on('exit', (worker) => {
//       console.log(`Worker ${worker.id} died`);
//       cluster.fork();
//     });

//     // require('./mailer-test');
//   } else {
//     runExpressApp();
//   }
// } else {
runExpressApp();
// }

setInterval(() => {
  http.get('http://zhe-game.herokuapp.com');
  console.log('AUTO PING');
}, 300000);
