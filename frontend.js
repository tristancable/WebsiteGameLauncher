const express = require('express');
const path = require('path');

const port = 1224;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
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

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    console.log("Handle the submission of the form!");
    console.log("Submitted Values:", req.body);

    let user = req.body;
    let url = "http://localhost:1225/login";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    try {
        let response = await fetch(url, options);
    } catch (error) {
        console.error("Error logging in:", error);
    }

    res.redirect('/login');
});

app.get('/register', (req, res) => {
    res.render('register');
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
            // Registration successful, redirect to login
            res.redirect('login');
        } else {
            // Pass error message to register view
            res.render('register', { error: data.error });
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.render('register', { error: 'Error creating user' });
    }
});

app.listen(port, () => {
    console.log(`WGL Frontend running on http://localhost:${port}/`);
});