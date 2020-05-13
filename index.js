const express = require('express');
const app = express();
port = process.env.PORT || 3000;

app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.get('/end', (req, res) => { // new
    process.exit(1);
    res.send('From end.');
});

app.listen(port, () => console.log('listening on port 3000'));