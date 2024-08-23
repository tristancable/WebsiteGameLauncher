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

app.post('/shop', async (req, res) => {
    // This function was created with the help from ChatGPT
    const { username, item } = req.body;

    if (!username) {
        return res.status(401).json({ error: 'User not authenticated.' });
    }

    if (!item || !item.name || !item.price) {
        return res.status(400).json({ error: 'Invalid item data.' });
    }

    try {
        const user = await DAL.findUser(username);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.points < item.price) {
            return res.status(400).json({ error: 'Insufficient points for this purchase.' });
        }

        // Deduct points and add item to user's purchased items
        user.points -= item.price;
        user.purchasedItems = user.purchasedItems || [];
        user.purchasedItems.push(item.name);

        // Update user in the database
        await DAL.updateUser(username, {
            points: user.points,
            purchasedItems: user.purchasedItems
        });

        res.status(200).json({
            success: true,
            points: user.points,
            message: `${item.name} purchased successfully.`
        });
    } catch (error) {
        console.error('Error processing purchase:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
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
    const { username, points } = req.body;

    if (!username || points == null) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    try {
        const user = await DAL.findUser(username);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await DAL.updateUser(username, { points });

        // async function updateDB() { const updateResult = await DAL.updateUser(username, { points });}
        // setInterval(updateDB, 10000);

        res.status(200).json({ message: 'Points updated successfully' });
    } catch (error) {
        console.error('Error updating points:', error);
        res.status(500).json({ error: 'Error' });
    }
});


// app.post('/update-points', async (req, res) => {
//     const username = req.session.username;

//     console.log('Session data:', req.session);

//     if (!username) {
//         return res.status(401).json({ error: 'No user logged in' });
//     }

//     try {
//         const user = await DAL.findUser(username);
//         if (user) {
//             const updatedPoints = user.points;
//             await DAL.updatePoints(username, { points: updatedPoints });
//             req.session.points = updatedPoints;
//             res.status(200).json({ message: 'Points updated successfully' });
//         } else {
//             res.status(404).json({ error: 'User not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Error' });
//     }
// });

app.listen(port, () => {
    console.log(`WGL Backend running on http://localhost:${port}/`);
});