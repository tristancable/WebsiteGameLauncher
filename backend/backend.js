const express = require('express');
const { DAL } = require('./dal/mongo-dal');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');

const saltRounds = 10;

const port = 1225;
const app = express();

let sessionOptions = {
    secret: 'deltacorp',
    cookie: {}
};

app.use(session(sessionOptions));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/login', (req, res) => {
    console.log("LOGIN REQUEST", req.session.username);

    return res.render('https://localhost:1224/login');
});

app.get('/register', (req, res) => {
    console.log("REGISTER REQUEST");

    return res.render('https://localhost:1224/register');
});

app.post('/register', async (req, res) => {
    console.log("REGISTER POSTED", req.body);

    try {
        const { username, password } = req.body;
        const findUser = await DAL.findUserByUsername(username);

        if (findUser) {
            return res.status(400).send('That username already exists.');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await DAL.createUser({ username, password: hashedPassword });

        res.status(200).send('Registration successful');
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});

app.get('/logout', (req, res) => {
    console.log("LOGOUT REQUEST", req.session.username);

    req.session.destroy();

    return res.redirect('/');
});

app.listen(port, () => {
    console.log(`WGL Backend running on http://localhost:${port}/`);
});