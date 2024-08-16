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
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.get('/register', (req, res) => {
    res.render('register', { error: req.query.error });
});

app.post('/register', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    try {
        const existingUser = await DAL.findUser(username);
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        password = hashedPassword;
        await DAL.createUser(req.body);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
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