const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Start server
app.listen(PORT, () => console.log('Started server on port %s', PORT));