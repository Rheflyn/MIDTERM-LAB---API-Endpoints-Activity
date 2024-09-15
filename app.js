const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let users = [
    { id: 1, name: 'Steven',email: 'stevhe@gmail.com', age: 29,salary:210 },
    { id: 1, name: 'Steeve',email: 'iamsteev@gmail.com', age: 35,salary:800 },
    { id: 1, name: 'Desmond',email: 'des8@gmail.com', age: 21,salary:750 },
    { id: 1, name: 'Spongebob',email: 'sponge@gmail.com', age: 27,salary:400 },
    { id: 1, name: 'Larry',email: 'lobsterlar@gmail.com', age: 33,salary:890 },
    { id: 1, name: 'Marth',email: 'marthe@gmail.com', age: 23,salary:560 },
    { id: 1, name: 'Yuzu',email: 'yuzuu@gmail.com', age: 26,salary:600 },
    { id: 1, name: 'Asmon',email: 'zackrar@gmail.com', age: 36,salary:800 },
];


app.get('/', (req, res) => {
    res.send(`
        <h1>Available Routes</h1>
        <ul>
            <li>GET /api/users - Returns all users</li>
            <li>GET /api/users/:id - Fetches a specific user by ID</li>
            <li>POST /api/users - Adds a new user</li>
            <li>DELETE /api/delete/:id - Deletes a user by ID</li>
        </ul>
    `);
});

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});




app.delete('/api/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//Buan Enrico Jr. J.