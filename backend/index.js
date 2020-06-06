const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());


const MONGODB_URI = 'mongodb+srv://Daru:Darumaka@clustercurated-4syco.azure.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/vertraulich', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


const exercisesRouter = require('./routes/lists.js');

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});