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

// while (username) {
//     setTimeout(() => {
//         points += 1;
//         console.log(points);
//     }, 1000);
// }

// app.use((req, res, next) => {
//     // res.locals.username = req.session ? req.session.username : null;
//     req.session.username = req.session ? res.session.username : null;
//     // console.log(res.locals.username);
//     // console.log('req.session', req.session);
//     next();
// });

// app.use((req, res, next) => {
//     if (req.session.username) {
//         // updatePoints();
//         // document.addEventListener('DOMContentLoaded', updatePoints);
//     }

//     next();
// });

function point() {
    setInterval(function () {
        fetch('/update-points', {
            method: 'POST'
        }).then(response => {
            if (!response.ok) {
                console.error('Failed to update points');
            }
        }).catch(error => console.error('Error:', error));
    }, 1000);
};

async function updatePoints() {
    try {
        const response = await fetch('/update-points', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Points updated:', data.message);
        } else {
            console.error('Error updating points:', data.error);
        }
    } catch (error) {
        console.error('Error communicating with the server:', error);
    }
}

app.get('/', async (req, res) => {
    res.render('index', {
        username: req.session.username,
        points: req.session.points
    });
});

app.get('/minesweeper', (req, res) => {
    res.render('minesweeper', {
        username: req.session.username,
        points: req.session.points

    });
});

app.get('/idle-atom', (req, res) => {
    res.render('idle_atom', {
        username: req.session.username,
        points: req.session.points
    });
});

app.get('/ttyd', (req, res) => {
    res.render('ttyd', {
        username: req.session.username,
        points: req.session.points
    });
});

app.get('/tictactoe', (req, res) => {
    res.render('tictactoe', {
        username: req.session.username,
        points: req.session.points
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        username: req.session.username,
        points: req.session.points
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        username: req.session.username,
        points: req.session.points
    });
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
            // username = data.usern ame;
            req.session.username = user.username;
            username = user.username;
            req.session.points = data.points;
            points = data.points;
            // console.log(req.session.points);
            // console.log(user.points);
            // console.log(data.points);
            // localStorage.setItem("username", user.username);
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

// app.post('/update-points', async (req, res) => {
//     const url = "http://localhost:1225/update-points";
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(points)
//     };

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();

//         if (response.ok) {

//         }
//     } catch (error) {

//     }


//     if (!req.session.username) {
//         return res.status(401).json({ error: 'Unauthorized' });
//     }



//     res.json({ message: 'Points updated successfully', points: updatedPoints });
// });

app.get('/logout', async (req, res) => {
    const url = "http://localhost:1225/update-points";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(points)
    };
    const response = await fetch(url, options);
    const data = await response.json();

    req.session.destroy();

    return res.redirect('/');
});

app.listen(port, () => {
    console.log(`WGL Frontend running on http://localhost:${port}/`);
});