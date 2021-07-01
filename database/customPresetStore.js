const CustomPresets = require('../models/customPresets');

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
      const presets = await CustomPresets.find();
      res.json({ message: 'Пресеты успешно получены', presets });
    } catch (e) {
      res.status(400).json({ message: 'Не удалось полуить пресеты' });
    }
  },
  async deletePreset(req, res) {
    try {
      const { id } = req.params;

      const exist = await CustomPresets.exists({ _id: id });
      if (!exist) {
        res.status(400).json({ message: 'Такого пресета не существуют' });
      } else {
        await CustomPresets.deleteOne({ _id: id });
        res.status(201).json({
          message: 'Пресет успешно удален',
        });
      }
    } catch (e) {
      res.status(400).json({ message: 'Не удалось удалить пресет' });
    }
  },
};
