const { Router } = require('express');
const Dare = require('../models/dare');
const Truth = require('../models/truth');
const Never = require('../models/never');
const router = Router();
const randomModel = require('../models/randomModel');
router.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-With, Content-Type, Accept`
  );
  next();
});

router.get('/:dataType', async (req, res) => {
  try {
    const type = req.params.dataType;

    let responseData = {};
    switch (type) {
      case 'truth':
        responseData = await Truth.find({});
        break;
      case 'dare':
        responseData = await Dare.find({});
        break;
      case 'never':
        responseData = await Never.find({});
        break;
      default:
        throw new Error();
    }
    res.json({ data: responseData, total: responseData.length, skip: 0 });
  } catch (e) {
    res.status(500).json({ message: 'Невозможно получить данные' });
  }
});
router.post('/:dataType', async (req, res) => {
  try {
    const data = req.body;
    const type = req.params.dataType;
    switch (type) {
      case 'truth':
        const existTruth = await Truth.findOne({ text: data.text });
        if (existTruth) {
          res.status(400).json({ message: 'Такие данные уже существуют' });
        } else {
          const newTruth = new Truth({ text: data.text });
          const addedTruth = await newTruth.save();
          res
            .status(201)
            .json({ ...addedTruth._doc, message: 'Данные успешно добавлены' });
        }
        break;
      case 'dare':
        const existDare = await Dare.findOne({ text: data.text });
        if (existDare) {
          res.status(400).json({ message: 'Такие данные уже существуют' });
        } else {
          const newDare = new Dare({ text: data.text });
          const addedDare = await newDare.save();
          res
            .status(201)
            .json({ ...addedDare._doc, message: 'Данные успешно добавлены' });
        }
        break;
      case 'never':
        const existNever = await Never.findOne({ text: data.text });
        if (existNever) {
          res.status(400).json({ message: 'Такие данные уже существуют' });
        } else {
          const newNever = new Never({ text: data.text });
          const addedNever = await newNever.save();
          res
            .status(201)
            .json({ ...addedNever._doc, message: 'Данные успешно добавлены' });
        }
        break;
      default:
        const newModel = randomModel(type);
        const existNewModel = await newModel.findOne({ text: data.text });
        if (existNewModel) {
          res.status(400).json({ message: 'Такие данные уже существуют' });
        } else {
          const newNewModel = new newModel({ text: data.text });
          const addedNewModel = await newNewModel.save();
          res.status(201).json({
            ...addedNewModel._doc,
            message: 'Данные успешно добавлены',
          });
        }
    }
  } catch (e) {
    res.status(500).json({ message: 'Невозможно записать данные' });
  }
});

module.exports = router;
