import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import {config} from 'dotenv'
const app = express();
const PORT = process.env.PORT || 5000;

config();

connectDB();



app.use(express.json({ extended: false }));


app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));