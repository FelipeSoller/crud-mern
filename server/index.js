import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import participantRoutes from './routes/participants.js'

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.use('/participants', participantRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);