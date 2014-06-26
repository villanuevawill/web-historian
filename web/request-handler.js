// import q if using promises
var path = require('path');
var fs = require('fs');

var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');


exports.handleRequest = function (req, res) {

  console.log("Handling request " + req.method + " from " + req.url);

  var router = {
    POST: handlePost,
    GET: handleGet
  };

  var data = '';
  req.on('data', function (chunk) {
    data += chunk;
  });
  req.on('end', function(){
    router[req.method](req, res, data);
  });
};

var handlePost = function(req, res, data) {
  var url = data.slice(4);
  if (url.slice(0,3) === 'www'){
    processUrl(req, res, url);
  }else{
    helpers.serveAssets(res, path.join(archive.paths.siteAssets, 'index.html'));
  }
};

var handleGet = function (req, res) {
  if(req.url === '/'){
    helpers.serveAssets(res, path.join(archive.paths.siteAssets, 'index.html'));
  } else if (req.url.slice(0,4) === '/www'){
    processUrl(req, res, req.url.slice(1));
  } else {
    var myPath = path.join(archive.paths.siteAssets, req.url);
    fs.exists(myPath, function(exists) {
      if (exists) {
        helpers.serveAssets(res, myPath);
      }else{
        helpers.serve404(res);
      }
    });

  }
};

var noPathToArchive = function (req, res, url) {
  if(archive.isUrlInList(url)) {
    var loadingPath = path.join(archive.paths.siteAssets, 'loading.html');
    helpers.serveAssets(res, loadingPath);
  } else {
    if (req.method === 'GET'){
      helpers.serve404(res);
    }else{
      archive.addUrlToList(url);
      helpers.redirect(res, url);
    }
  }
};

var processUrl = function (req, res, url) {
  if(archive.isUrlArchived(url)) {
    helpers.serveAssets(res, path.join(archive.paths.archivedSites, url));
  } else {
    console.log(url);
    noPathToArchive(req, res, url);
  }
};


