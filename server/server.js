const path = require('path');
const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');

// Middleware
app.use(express.json());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// API routes
app.use('/api', carRoutes);

// Fallback route for SPA or direct root access
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
