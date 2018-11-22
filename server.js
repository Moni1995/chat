const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');

container.resolve(() => {
  const app = SetupExpress();
  function SetupExpress() {
    const app = express();
    const server = http.createServer(app);
    server.listen(3000, () => {
      console.log('Listening on port 3000');
    });
  }
});
