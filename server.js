const express = require('express');
const bodyParser = require('body-parser');
const visionService = require('./vision');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/vision', visionService);
app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
