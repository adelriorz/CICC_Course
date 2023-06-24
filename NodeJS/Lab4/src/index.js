const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/api/members', require('./routes/members'));

app.get('/', (req, res) => res.json({ msg: 'Health Check' }));

app.use((req, res) => res.sendFile(path.join(__dirname, 'public', '404.html')));

const PORT = process.env.PORT || 8000;
app.listen(PORT);
