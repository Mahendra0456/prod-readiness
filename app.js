const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Production Readiness Review App v1');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, '0.0.0.0');
