const cluster = require('cluster');
require('dotenv').config();
const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const os = require('os');
const getDataRoute = require('./routes/get-data.routes');
const presetsRoute = require('./routes/presets.routes');

const HOSTNAME = process.env.HOST || 'localhost';
const PORT = parseInt(process.env.PORT, 10) || 5000;
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

  if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  run(app);
}

if (process.env.NODE_ENV === 'production') {
  if (cluster.isMaster) {
    const cpuCount = os.cpus().length;

    for (let i = 0; i < cpuCount; i += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker) => {
      console.log(`Worker ${worker.id} died`);
      cluster.fork();
    });
    setInterval(() => {
      http.get('http://zhe-game.herokuapp.com');
      console.log('AUTO PING');
    }, 300000);

    // require('./mailer-test');
  } else {
    runExpressApp();
  }
} else {
  runExpressApp();
}
