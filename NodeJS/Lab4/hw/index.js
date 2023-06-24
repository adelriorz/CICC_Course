const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

/* ---------------------------- setups and config --------------------------- */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* ------------------------ EJS Templating Setup ------------------------ */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ------------------------------- middleware ------------------------------- */
app.use('/api/members', require('./routes/members'));

app.get('/', (req, res) => res.json({ msg: 'Health Check' }));

app.use((req, res) => res.status(404).render('404'));

/* -------------------------------- listener -------------------------------- */
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
