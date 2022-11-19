const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHandler } = require('./middleware/errorMiddleware');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// import controller
const generalRoutes = require('./routes/generalRoutes')


app.use('/' , generalRoutes);

//errorhandler
app.use(errorHandler)


app.listen (port , () => console.log(`Seed on port ${port}`))