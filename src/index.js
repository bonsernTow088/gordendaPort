// gordendaPort.js

const express = require('express');
const gordenda = require('gordenda');

const app = express();
const port = process.env.PORT || 3000;

// Use gordenda middleware
app.use(gordenda());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to gordendaPort!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
