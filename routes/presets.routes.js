const { Router } = require('express');
const {
  createPreset,
  getPresets,
  deletePreset,
} = require('../database/customPresetStore');

const router = Router();
router.get('/', getPresets);
router.post('/create', createPreset);
router.delete('/:id', deletePreset);
module.exports = router;
