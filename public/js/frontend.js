const express = require('express');
//const { DAL } = require("./dal/mongo-dal");
const bcrypt = require('bcrypt');
const session = require('express-session');

const saltRounds = 10;

const port = 1224;
const app = express();

let sessionOptions = {
    secret: 'deltacorp',
    cookie: {}
};

app.use(session(sessionOptions));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/minesweeper', (req, res) => {
    res.render('minesweeper');
});

app.get('/idle-atom', (req, res) => {
    res.render('idle_atom');
});

app.get('/ttyd', (req, res) => {
    res.render('ttyd');
});

app.get('/tictactoe', (req, res) => {
    res.render('tictactoe');
});

app.listen(port, () => {
    console.log(`Website Game Launcher running on http://localhost:${port}/`);
});