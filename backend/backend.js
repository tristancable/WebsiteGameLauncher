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
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
};

app.use(session(sessionOptions));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.use((req, res, next) => {
    console.log('Session username:', req.session.username);
    res.locals.username = req.session.username;
    next();
});

// app.get('/test-session', (req, res) => {
//     req.session.username = 'john_doe';
//     res.render('test-session', { session: req.session });
// });

app.get('/login', (req, res) => {
    console.log('LOGIN REQUEST', req.session.username);
    res.render('login', { error: req.query.error });
});

app.post('/login', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    try {
        let user = await DAL.findUser(username);

        if (!user) {
            return res.status(400).json({ error: 'That username does not exist.' });
        }

        console.log('USER FOUND:', user);

        if (!password || !user.password) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        const correctPassword = await bcrypt.compare(password, user.password);
        if (correctPassword) {
            req.session.username = user.username;
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(400).json({ passwordError: 'Invalid password.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error logging in.' });
    }
});

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
        await DAL.createUser({ username, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.get('/logout', (req, res) => {
    console.log("LOGOUT REQUEST", req.session.username);

    req.session.destroy(error => {
        if (error) {
            console.error('Error logging out:', error);
            return res.redirect('/');
        }
    });

    return res.redirect('/');
});

app.listen(port, () => {
    console.log(`WGL Backend running on http://localhost:${port}/`);
});