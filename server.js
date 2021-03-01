const express = require('express');

const films = require('./routes/api/films');
const config = require('./routes/api/config');

const app = express();
// const path = require('path');

const port = process.env.PORT || 5000;

// const db = require('./config/keys').mongoURI;
// const stem = require('./config/keys').movieDBStem;

// const apiKey = require('./config/keys').movieDBKey;
app.use('/api/films', films);


app.use('/api/config', config);

function handleShutdownGracefully() {
    console.log("closing server gracefully...");
    server.close(()=>{
      console.log("server closed.");
      // close db connections here or
      // any other clean if required
      process.exit(); // if required
    });
  };



let server = app.listen(port, () => console.log(`Server started on port ${port}`));

