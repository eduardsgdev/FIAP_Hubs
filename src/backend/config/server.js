const app = require('./app.js');
require('dotenv').config();

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running or port ${port}`));