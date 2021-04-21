import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

const CONNECTION_URL= 'mongodb+srv://crud-mern:crudmern123@cluster0.tnmdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);