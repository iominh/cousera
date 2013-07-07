var express = require('express');
var http = require('http'),
    fs = require('fs');

var app = express.createServer(express.logger());
app.set("view options", {layout: false});

app.configure(function(){
  // disable layout
  app.set("view options", {layout: false});

  // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
});

app.get('/', function(req, res){
  res.render("index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

