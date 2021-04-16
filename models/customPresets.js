const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  data: {
    truth: { type: String, default: 'truth' },
    dare: { type: String, default: 'dare' },
    never: { type: String, default: 'never' },
  },
});

module.exports = model('customPresets', schema);
