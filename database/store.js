const createDataModel = require('../models/createDataModel');

async function postData(type, data, res) {
  const DataModel = createDataModel(type);
  const exist = await DataModel.exists({ text: data.text });
  const doc = '_doc';
  if (exist) {
    res.status(400).json({ message: 'Такие данные уже существуют' });
  } else {
    const newDataItem = new DataModel({ text: data.text });
    const addedData = await newDataItem.save();
    res.status(201).json({
      ...addedData[doc],
      message: 'Данные успешно добавлены',
    });
  }
}
async function update(type, data, id, res) {
  const DataModel = createDataModel(type);
  const exist = await DataModel.exists({ _id: id });
  if (!exist) {
    res.status(400).json({ message: 'Таких данных не существуют' });
  } else {
    await DataModel.updateOne({ _id: id }, { text: data.text });
    res.status(201).json({
      data: { _id: id, text: data.text },
      message: 'Данные успешно обновлены',
    });
  }
}

async function deleteDataById(type, id, res) {
  const DataModel = createDataModel(type);
  const exist = await DataModel.exists({ _id: id });
  if (!exist) {
    res.status(400).json({ message: 'Таких данных не существуют' });
  } else {
    await DataModel.deleteOne({ _id: id });
    res.status(201).json({
      message: 'Данные успешно удалены',
    });
  }
}

async function getData(type, res) {
  const DataModel = createDataModel(type);
  const responseData = await DataModel.find();
  res.json({ data: responseData, total: responseData.length, skip: 0 });
}

const store = {
  async getDataByType(req, res) {
    try {
      const type = req.params.dataType;
      getData(type, res);
    } catch (e) {
      res.status(500).json({ message: 'Невозможно получить данные' });
    }
  },
  async postDataByType(req, res) {
    try {
      const data = req.body;
      const type = req.params.dataType;
      postData(type, data, res);
    } catch (e) {
      res.status(500).json({ message: 'Невозможно записать данные' });
    }
  },
  async updateData(req, res) {
    try {
      const data = req.body;
      const { dataType: type, id } = req.params;

      update(type, data, id, res);
    } catch (e) {
      res.status(500).json({ message: 'Невозможно изменить данные' });
    }
  },
  async deleteData(req, res) {
    try {
      const { dataType: type, id } = req.params;
      deleteDataById(type, id, res);
    } catch (e) {
      res.status(500).json({ message: 'Невозможно удалить данные' });
    }
  },
};

module.exports = store;