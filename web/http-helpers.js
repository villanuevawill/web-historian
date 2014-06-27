var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var mysql = require('mysql');
var db = mysql.createConnection({user:'root', database:'WILLAJAY'});


exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveCoreAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, {encoding: 'utf8'}, function(err, assetBody){
    res.writeHead(200, exports.headers);
    res.end(assetBody);
  });
};

exports.serveAssets = function(res, url) {

  db.query("SELECT HTML from sites WHERE url = \'"+url+"\'", function(err, dbArray){
    var html = new Buffer(JSON.parse(dbArray[0]['HTML'])).toString();
    res.writeHead(200, exports.headers);
    res.end(html);
  });
};

exports.serve404 = function(res){
  res.writeHead(404, exports.headers);
  res.end('not found');
};

exports.redirect = function(res, url){
  exports.headers['Location'] = url;
  res.writeHead(302, exports.headers);
  res.end('success');
  delete exports.headers.Location;
};
// As you progress, keep thinking about what helper functions you can put here!
