const express = require('express');
const songsRouter = require('./src/routes/songs');

const app = express();
app.use(express.json());

app.use(songsRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.listen(3123, () => {
    console.log('It took off!');
});