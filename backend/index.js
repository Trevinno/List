const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

const app = express();
const PORT = 5000; 

const exercisesRouter = require('./routes/lists.js');

const MONGODB_URI = 'mongodb+srv://Daru:Darumaka@clustercurated-4syco.azure.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/vertraulich', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
app.use('/api', exercisesRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});