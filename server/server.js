const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Define Server Routes
// const userClueScoreRouter = require('./routes/user-clue-score.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect server routes to express
// app.use('/api/user-clue-score', userClueScoreRouter);

// Serve static files
app.use( express.static( 'build' ));

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Express will listen to port defined above
app.listen(PORT, () => { console.log( `Listening on port: ${ PORT }` ); });
