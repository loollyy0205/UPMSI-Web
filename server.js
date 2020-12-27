const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/upmsi'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/upmsi/index.html'));});
app.listen(process.env.PORT || 8080);
