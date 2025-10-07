const express = require('express');
const app = express();
const port = 5000;
require('./db/config');
const User = require('./db/user');
const cors = require('cors');

app.use(cors());
app.use(express.json()); //middleware to access and parse json data from front end or postman

app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
