//Require all modules
require('dotenv').config();
var http = require('http');
var formidable = require('formidable');
var ffprobe = require('ffprobe');
var ffprobeStatic = require('ffprobe-static');

//Initiate the server
http.createServer(function (req, res) {
  //Check route
  if (req.url == '/ffprobe') {
    //Get the incoming form (POST)
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let filepath = files.targetfile.path;
      //Log filepath for testing
      console.log(filepath);
      ffprobe(filepath, { path: ffprobeStatic.path })
        .then(function (info) {
          //Turn info-object (JSON) into string and display it
          res.write(JSON.stringify(info));
          res.end();
        })
        .catch(function (err) {
          console.error(err);
      })
    });
  } else {
    //If not the response then give the form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="ffprobe" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="targetfile"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(process.env.PORT);

//Let the user know where the test can be accessed from
console.log('Running Tradecast test on localhost:' + process.env.PORT);
