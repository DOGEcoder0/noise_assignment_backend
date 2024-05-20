
import Record from '../models/sleepRecord.js';



// Create a new sleep record
const createRecord = async (req, res) => {
    const { hours, timestamp } = req.body;
    try {
        const record = new Record({
            userId: req.user.id,
            hours,
            timestamp,
        });
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all sleep records for a user
const getRecords = async (req, res) => {
    try {
        const records = await Record.find({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a specific sleep record by ID
const getRecordById = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);
        if (!record || record.userId.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Record not found' });
        }
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Delete a sleep record
const deleteRecord = async (req, res) => {
    try {
        let record = await Record.findById(req.params.id);
        if (!record || record.userId.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Record not found' });
        }

        await record.remove();
        res.json({ message: 'Record removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {
    createRecord,
    getRecords,
    getRecordById,
    deleteRecord
};

