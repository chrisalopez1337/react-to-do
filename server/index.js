// Express app setup
const express = require('express');
const app = express();
const PORT = 3000;
// Middleware
const bodyParser = require('body-parser');
const path = require('path');
// Routers
const router = require('./routes.js');

// Serving react code
app.use(express.static(path.join(__dirname, '../client/dist')));

// Applying middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use('/api', router);

app.listen(PORT, () => console.log(`React project listening @ ${PORT}`));
