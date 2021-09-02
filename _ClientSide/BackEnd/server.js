const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv= require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
// Connect Database
connectDB();
// Logger
app.use(logger('dev'));
// CORS
app.use(cors());
app.use(bodyParser.json({limit: "52428800"}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.json({ extended: false }));

//routes
const Reservation = require('./routes/reservationAPI');
const User = require('./routes/userApi');

app.get('/', async (req, res) => {
    res.json({message: "Hello World!"});
});


app.use('/clientSide', Reservation);
app.use('/clientSide', User);

const port = process.env.PORT || 6001;

app.listen(port, () => console.log(`Server running on port ${port}`));