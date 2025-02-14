// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Serve the comments module
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});