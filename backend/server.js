const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDb = require('./config/db')
const cors = require('cors');


//connect db
connectDb();



const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import controller


//use cors
app.use(cors())
//import routes
app.use('/api/data', require('./routes/generalRoutes'));
app.use('/api/users', require('./routes/userRoutes'))

//errorhandler
app.use(errorHandler)

console.log(typeof process.env.MONGO_DB_CONNECT)
app.listen(port, () => console.log(`Seed on port ${port}`))