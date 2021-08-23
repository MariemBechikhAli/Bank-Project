const express = require('express');
const connectDB = require('../BackEnd/config/db');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// Connect Database
connectDB();
// CORS

//app.use(cors());
app.use(express.json());


app.use(express.json({ extended: false }));

//routes

//const exercisesRouter = require('./routes/exercises');

//app.use('/exercises', exercisesRouter);
// Logger
app.use(logger('dev'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

