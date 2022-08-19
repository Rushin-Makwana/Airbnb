const express = require('express');
const app = express();
const db = require('./db');
let dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());

const AuthController = require('./Controller/authController');
app.use('/api/auth',AuthController);

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})
