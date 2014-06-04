var http = require('http');
var express = require('express');
var app = express();
//var router = express.Router();

app.set('views', __dirname);
//app.set('view engine', 'html');

app.use(express.static(__dirname));

//Get home page
app.get('/', function(req, res)
{
  //res.render('./index.html');
  var car = ["toyota", "honda"];
  var a = [];
  //a.push(car);
  //console.log(a.toString());
    
  http.get('http://finviz.com/export.ashx?v=111&&o=ticker', function(res){
      var str = '';
      console.log('Response is ' +  res.statusCode);

      res.on('data', function(chunk){
          //str += chunk;
          
      });

      res.on('end', function(){
          console.log(str);
      });
      
      });
    
    
    
//  var options = {
//    host:"http://finviz.com",
//     path: "export.ashx?v=111&&o=ticker",
//     method:"GET",
//    port: 80
// };

// http.get(options, function(res){
//     console.log("STATUS: " + res.statusCODE);
//     console.log("HEADERS: " + res.headers);
//     res.setEncoding("utf8");
//     res.on("data", function(chunk){
//         console.log("BODY" + chunk);
//     });
// });

 //hres.write('data\n');
 //hres.write('data');
 //hres.end();

});

app.listen(1555);
//module.exports = router;
