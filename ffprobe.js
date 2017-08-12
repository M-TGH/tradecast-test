require('dotenv').config();
var http = require('http');
var formidable = require('formidable');
var ffprobe = require('ffprobe');
var ffprobeStatic = require('ffprobe-static');

http.createServer(function (req, res) {
  if (req.url == '/ffprobe') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let filepath = files.targetfile.path;
      console.log(filepath);
      ffprobe(filepath, { path: ffprobeStatic.path })
        .then(function (info) {
          console.log(typeof info);
          res.write(JSON.stringify(info));
          res.end();
        })
        .catch(function (err) {
          console.error(err);
      })
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="ffprobe" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="targetfile"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(process.env.PORT);

console.log('Running Tradecast test on localhost:' + process.env.PORT);
