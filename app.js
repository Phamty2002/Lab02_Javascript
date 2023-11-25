const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the public directory

// Importing routes for each exercise
const exercise1Routes = require('./routes/exercise1Routes');
// const exercise2Routes = require('./routes/exercise2Routes');
// More imports as you have more exercises...

// Use routes for each exercise
app.use('/exercise1', exercise1Routes);
// app.use('/exercise2', exercise2Routes);
// More route usages as you have more exercises...

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
