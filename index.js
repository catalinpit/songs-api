const express = require('express');
const songsRouter = require('./src/routes/songs');

const app = express();
app.use(express.json());

app.use(songsRouter);

app.listen(process.env.PORT || 3123, () => {
    console.log('It took off!');
});