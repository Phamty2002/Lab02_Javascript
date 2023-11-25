const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const exercise1Routes = require('./routes/exercise1Routes');
const exercise2Routes = require('./routes/exercise2Routes');
// more routes imports as you have more exercises...

app.use('/exercise1', exercise1Routes);
app.use('/exercise2', exercise2Routes);
// more route usages as you have more exercises...

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
