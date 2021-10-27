// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';
// import mongoose from 'mongoose';
// import router from './routes';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes');
require('dotenv').config();

const app = express();
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGO_URL)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    


//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extende:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

//Routes
app.use('/api',router);

//Settings
app.set('port', 3000);

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log(path.join(__dirname,'public'));
});

module.exports = app;
