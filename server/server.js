

// BASE SETUP
// ==============================================
const cors = require('cors');
var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3000;

app.use(cors({origin: (origin, callback) => {
  callback(null, true);
}, credentials: true}));


// ROUTES
// ==============================================


app.get('/playlists', function(req, res) {
  res.send(

  );
});
app.get('/hello', function(req, res) {
  res.send('hello');
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
