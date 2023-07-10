const express = require('express');
// Importing our DB connection
const db = require('./db/connection.js');

// Create app variable and PORT
const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.json()); // Allows the client/browser to send json in a request
app.use(express.static('public')); // Opens public as the root on the client side

// Start server
app.listen(PORT, () => console.log('Started server on port %s', PORT));