const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');

app.use(express.json());
app.use(express.static('../client'));
app.use('/api', carRoutes);

module.exports = app;