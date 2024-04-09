require('dotenv').config();

const express = require('express')

const app = express();

const PORT = 8800 || process.env.PORT;

// connect Database
const connectDb = require('./config/db');
connectDb();

app.listen(PORT, () => {
    console.log(`App Listening On Port ${PORT}`);
});