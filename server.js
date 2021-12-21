var http = require('http');

const port = process.env.PORT || 3000

var url = require('url');

var myfirst = require('./myfirst.js');

let a;


var server = http.createServer(function(req,res){

      var q = url.parse(req.url, true);

      if(q.pathname === "/movie" && req.method === "GET"){

        console.log("sending request");

        const movie = myfirst.getMovie();

        const mov = async () => {
        a = await movie;
      
       };
       mov();
       res.setHeader("Access-Control-Allow-Origin", "*");
       res.setHeader("Content-Type", "application/json");
       
       res.end(a);
      }

});

server.listen(PORT,
  () => console.log("server is listening")
);