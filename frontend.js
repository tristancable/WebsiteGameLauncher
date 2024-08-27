const express = require('express');
const session = require('express-session');
const path = require('path');

const port = 1224;
const app = express();

let sessionOptions = {
    secret: 'deltacorp',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
};

app.use(session(sessionOptions))

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

let username = "";
let points;

app.use((req, res, next) => {
    if (req.session.username && req.session.points == undefined) {
        req.session.points = 0;
    }
    next();
});

app.get('/', async (req, res) => {
    res.render('index', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.get('/minesweeper', (req, res) => {
    res.render('minesweeper', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate

    });
});

app.get('/idle-atom', (req, res) => {
    res.render('idle_atom', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.get('/ttyd', (req, res) => {
    res.render('ttyd', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.get('/tictactoe', (req, res) => {
    res.render('tictactoe', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.get('/shop', (req, res) => {
    res.render('shop', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate,
        shopItem: req.session.shopItem,
        purchasedItems: req.session.purchasedItems,
        purchaseError: null,
        purchaseSuccess: null
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        username: req.session.username,
        points: req.session.points,
        pointRate: req.session.pointRate
    });
});

app.post('/shop', async (req, res) => {
    if (!req.session.username) {
        return res.redirect('/login');
    }

    const { itemName, itemPrice } = req.body;

    try {
        const response = await fetch('http://localhost:1225/shop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: req.session.username,
                item: {
                    name: itemName,
                    price: parseInt(itemPrice)
                }
            }),
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok && data.success) {
            req.session.points = data.points;

            if (itemName === 'Upgrade Points 1/s to 2/s') {
                req.session.pointRate = 20;

                await fetch('http://localhost:1225/update-pointRate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: req.session.username,
                        pointRate: req.session.pointRate
                    }),
                    credentials: 'include'
                });
            }

            if (!req.session.purchasedItems.includes(itemName)) {
                req.session.purchasedItems.push(itemName);
            }

            res.render('shop', {
                username: req.session.username,
                points: req.session.points,
                pointRate: req.session.pointRate,
                purchasedItems: req.session.purchasedItems,
                purchaseSuccess: `Successfully purchased ${itemName}!`,
                purchaseError: null
            });
        } else {
            res.render('shop', {
                username: req.session.username,
                points: req.session.points,
                pointRate: req.session.pointRate,
                purchasedItems: req.session.purchasedItems,
                purchaseSuccess: null,
                purchaseError: data.error || 'Purchase failed.'
            });
        }
    } catch (error) {
        console.error('Error during purchase:', error);
        res.render('shop', {
            username: req.session.username,
            points: req.session.points,
            pointRate: req.session.pointRate,
            purchasedItems: req.session.purchasedItems,
            purchaseError: 'An error occurred during purchase. Please try again later.'
        });
    }
});


app.post('/login', async (req, res) => {
    const user = req.body;
    const url = "http://localhost:1225/login";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            req.session.username = user.username;
            username = user.username;
            req.session.points = data.points || 0;
            points = data.points;
            req.session.pointRate = data.pointRate || 10;
            req.session.purchasedItems = data.purchasedItems || [];
            // console.log(req.session.points);
            // console.log(user.points);
            // console.log(data.points);
            // console.log('res.locals.username', res.locals.username);
            // console.log('data.username', user.username)
            res.redirect('/');
        } else {
            if (data.passwordError) {
                res.render('login', { passwordError: data.passwordError });
            } else if (data.error) {
                res.render('login', { error: data.error });
            }
        }
    } catch (error) {
        console.log(error);
        res.render('login', { error: 'Error logging in' });
    }
});


app.post('/register', async (req, res) => {
    const newUser = req.body;
    const url = "http://localhost:1225/register";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            res.redirect('login');
        } else {
            res.render('register', { error: data.error });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.render('register', { error: 'Error creating user' });
    }
});

app.post('/update-points', async (req, res) => {
    const user = req.session;
    const url = "http://localhost:1225/update-points";
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!req.session.username) {
        return res.status(401).json({ error: 'No user logged in' });
    }

    const pointRate = req.session.pointRate;

    req.session.points += pointRate;
    points = req.session.points;

    res.json({ points: req.session.points });
});

app.get('/logout', async (req, res) => {
    if (req.session.username) {
        req.session.destroy();
    }

    return res.redirect('/');
});

app.listen(port, () => {
    console.log(`WGL Frontend running on http://localhost:${port}/`);
});