const { Router } = require('express');
const {
  getDataByType,
  postDataByType,
  updateData,
  deleteData,
} = require('../database/store');

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

router.get('/:dataType', getDataByType);
router.post('/:dataType', postDataByType);
router.put('/:dataType/:id', updateData);
router.delete('/:dataType/:id', deleteData);

module.exports = router;
