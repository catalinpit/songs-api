import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.listen(3123, () => {
    console.log('It took off!');
});