const express = require("express");
const path = require('path');
const app = express();


app.get("/pic/:name", (req, res, next) => {
    var options = {
        root: path.join(__dirname, '/'),
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
    var fileName = req.params.name;
    res.sendFile(fileName, options, function (err) {
        if (err) {
          next(err)
        } else {
          console.log('Sent:', fileName)
        }
      })
});

app.listen(3001, function() {
    console.log("Express listen on port 3001")
});
