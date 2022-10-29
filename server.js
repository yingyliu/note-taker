// Dependencies; import express package
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express App
const app = express();
const PORT = process.env.PORT || 3001;

// let server know that all html assets are live
app.use(express.static('public'));

// Middleware; to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML Router
app.use('/api', apiRoutes);
app.use("/", htmlRoutes);

// GET request for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET request for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// starts the server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
