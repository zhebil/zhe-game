const createDataModel = require('../models/createDataModel');
const CustomPresets = require('../models/customPresets');

async function removeCollection(type) {
  const model = createDataModel(type);
  const res = await model.collection.deleteOne();
  return res;
}

async function removeCollections({ truth, dare, never }) {
  try {
    await removeCollection(truth);
    await removeCollection(dare);
    await removeCollection(never);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = {
  async createPreset(req, res) {
    const { name: newModelName } = req.body;
    try {
      const exist = await CustomPresets.exists({ name: newModelName });
      if (exist) {
        res.status(400).json({ message: 'Такой пресет уже существует' });
      } else {
        const newPreset = new CustomPresets({
          name: newModelName,
          data: {
            truth: `${newModelName}-truth`,
            dare: `${newModelName}-dare`,
            never: `${newModelName}-never`,
          },
        });
        const response = await newPreset.save();
        res.status(200).json({
          message: `Пресет ${newModelName} успешно создан`,
          data: response.data,
        });
      }
    } catch (e) {
      res
        .status(500)
        .json({ e, message: `Невозможно создать ${newModelName}` });
    }
  },
  async getPresets(req, res) {
    try {
      const presets = await CustomPresets.find({ name: { $ne: 'default' } });
      res.json({ message: 'Пресеты успешно получены', presets });
    } catch (e) {
      res.status(400).json({ message: 'Не удалось полуить пресеты' });
    }
  },
  async deletePreset(req, res) {
    try {
      const { id } = req.params;

      const preset = await CustomPresets.findById(id);
      if (!preset) {
        res.status(400).json({ message: 'Такого пресета не существуют' });
        return;
      }
      console.log(preset);
      const isRemoved = await removeCollections(preset.data);
      console.log(isRemoved);
      if (!isRemoved) {
        res.status(400).json({ message: 'Произошла ошибка при удалении' });
      }

      await CustomPresets.deleteOne({ _id: id });
      res.status(201).json({
        message: 'Пресет успешно удален',
      });
    } catch (e) {
      res.status(400).json({ message: 'Не удалось удалить пресет' });
    }
  },

  async getOnePreset(req, res) {
    try {
      const { name } = req.params;

      const exist = await CustomPresets.exists({ name });

      if (!exist) {
        res.status(400).json({ message: 'Такого пресета не существуют' });
      } else {
        const requestedPreset = await CustomPresets.findOne({ name });
        res.status(201).json({
          message: 'Пресет успешно получен',
          preset: requestedPreset,
        });
      }
    } catch (e) {
      res.status(400).json({ message: 'Не удалось получить пресет' });
    }
  },
};
