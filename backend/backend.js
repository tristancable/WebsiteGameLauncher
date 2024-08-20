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
    saveUninitialized: false,
    cookie: { secure: false }
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors({
    origin: 'http://localhost:1224',
    credentials: true
}));

app.use(session(sessionOptions));

// app.use(async (req, res, next) => {
//     if (req.session.username) {
//         // Update points for logged-in user
//         try {
//             await DAL.updatePoints(req.session.username, { points: req.session.points || 0 });
//         } catch (error) {
//             console.error('Error updating points:', error);
//         }
//     }
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Before setting locals.username:', req.session.username); // Debugging
//     res.locals.username = req.session.username;
//     console.log('After setting locals.username:', res.locals.username); // Debugging
//     next();
// });

// app.get('/', (req, res) => {
//     req.session.username = "hello";
//     res.render('index', { session: req.session });
// });



// app.get('/test-session', (req, res) => {
//     req.session.username = 'john_doe';
//     res.render('test-session', { session: req.session });
// });

// app.get('/login', (req, res) => {
//     console.log('LOGIN REQUEST', req.session.username);
//     res.render('login', { error: req.query.error });
// });

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
            req.session.points = user.points;
            console.log("req.session.points", req.session.points);
            console.log("user.points", user.points);
            // console.log("res.locals.username", res.locals.username);
            // console.log("user.username", user.username);
            // console.log("username", username);
            // console.log("req.body.username", req.body.username);
            // console.log('Session username set to:', req.session.username);
            return res.status(200).json({ message: 'Login successful', points: req.session.points });
        } else {
            return res.status(400).json({ passwordError: 'Invalid password.' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error logging in.' });
    }
});

app.post('/register', async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let points = 0;

    try {
        const existingUser = await DAL.findUser(username);
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await DAL.createUser({ username, password: hashedPassword, points });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

app.post('/update-points', async (req, res) => {
    const username = req.session.username;

    console.log('Session data:', req.session);

    if (!username) {
        return res.status(401).json({ error: 'No user logged in' });
    }

    try {
        const user = await DAL.findUser(username);
        if (user) {
            const updatedPoints = (user.points || 0) + 1;
            await DAL.updatePoints(username, { points: updatedPoints });
            req.session.points = updatedPoints;
            res.status(200).json({ message: 'Points updated successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

app.listen(port, () => {
    console.log(`WGL Backend running on http://localhost:${port}/`);
});