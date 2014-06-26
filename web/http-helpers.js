var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(asset, {encoding: 'utf8'}, function(err, assetBody){
    res.writeHead(200, exports.headers);
    res.end(assetBody);
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
