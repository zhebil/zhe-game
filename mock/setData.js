const Truth = require('../models/truth');
const truth = require('./truth');

async function setData() {
  const data = truth.map((i) => ({ text: i }));
  Truth.insertMany(data, (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
}
module.exports = setData;
