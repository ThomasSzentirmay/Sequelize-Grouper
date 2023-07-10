const express = require('express');
// Importing our DB connection
const db = require('./db/connection.js');

// Import routes
const api_routes = require('./routes/api_routes.js');

// Create app variable and PORT
const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.json()); // Allows the client/browser to send json in a request
app.use(express.static('public')); // Opens public as the root on the client side

// Load Routes
app.use('/', [
    api.routes
]);

// Connect to the db and create all tables based off of our models
db.sync()
    .then(() => {
        // Start server
        app.listen(PORT, () => console.log('Started server on port %s', PORT));
    }); 