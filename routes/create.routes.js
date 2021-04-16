const { Router } = require('express');
const { createPreset, getPresets } = require('../database/customPresetStore');

const router = Router();
router.get('/', getPresets);
router.post('/create', createPreset);
module.exports = router;
