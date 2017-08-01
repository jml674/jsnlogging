var express = require('express');
var app = express();

app.get('/listUsers', function (req, res) {
  var data = {user:"toto"};
  console.log( data );
  res.end( data );
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
