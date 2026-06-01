const path = require('path');
const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');

// Middleware
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, '../client')));

// API routes
app.use('/api', carRoutes);

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// ✅ ADD THIS PART
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
