require(`dotenv`).config();

const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.use(express.json({ extended: true }));
app.use('/api/data', require('./routes/get-data.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const HOSTNAME = process.env.SERVER_HOST || `localhost`;
const PORT = parseInt(process.env.PORT, 10) || 5000;

const serverAddress = `http://${HOSTNAME}:${PORT}`;

const url = process.env.MONGO_URL;
async function run() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log('app started on port' + serverAddress);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

setInterval(function () {
  http.get('http://zhe-game.herokuapp.com');
  console.log('AUTO PING');
}, 300000); // every 5 minutes (300000)

run();
