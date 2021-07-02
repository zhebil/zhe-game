const { Router } = require('express');
const {
  createPreset,
  getPresets,
  deletePreset,
  getOnePreset,
} = require('../database/customPresetStore');

const router = Router();
router.get('/', getPresets);
router.post('/create', createPreset);
router.delete('/:id', deletePreset);
router.get('/:name', getOnePreset);
module.exports = router;
