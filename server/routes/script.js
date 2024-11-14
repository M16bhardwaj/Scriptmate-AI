const express = require('express');
const { createScript, getScripts, updateScript, deleteScript } = require('../controllers/scriptController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createScript);
router.get('/', authMiddleware, getScripts);
router.put('/:id', authMiddleware, updateScript);
router.delete('/:id', authMiddleware, deleteScript);

module.exports = router;