import express from 'express';
import {
    createRecord,
    getRecords,
    getRecordById,
    deleteRecord
} from '../controllers/noteController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createRecord);
router.get('/', auth, getRecords);
router.get('/:id', auth, getRecordById);
router.delete('/:id', auth, deleteRecord);

export default router;