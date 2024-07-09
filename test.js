// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

// Create an instance of express
const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Define corsOptions to allow only http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST'], // Allow only POST requests
  allowedHeaders: ['Content-Type'], // Allow only Content-Type header
};

// Use cors middleware with options
app.use(cors(corsOptions));

// Route handler for POST /login
app.post('/api/personalevaluation', (req, res) => {
  // Assuming the request body contains necessary login information
  // For simplicity, let's just log the request body
  console.log('Login request received:', req.body);

  // Send back a success response
  res.send('success');
});

// Start the server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
