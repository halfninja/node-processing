var Canvas = require('canvas');
var Processing = require('processing').Processing;
var fs = require('fs');

var canvas = new Canvas();

fs.readFile(__dirname + '/sketch.pde', function(err,data){
  var compiled = Processing.compile(""+data);
  var p = new Processing(canvas, compiled);

  var out = fs.createWriteStream(__dirname + '/' + 'output.png');
  var stream = canvas.createPNGStream();
  stream.on('data', function(chunk){
    out.write(chunk);
  });
});
