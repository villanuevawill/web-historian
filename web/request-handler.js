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
    processPost(req, res, url);
};

var handleGet = function (req, res) {
  if(req.url === '/'){
    helpers.serveAssets(res, path.join(archive.paths.siteAssets, 'index.html'));
  } else {
    var myPath = path.join(archive.paths.siteAssets, req.url);
    fs.exists(myPath, function(exists) {
      if (exists) {
        helpers.serveAssets(res, myPath);
      }else{
        var url = req.url.slice(1);
        archive.isUrlArchived(url, function(urlArchived){
          if (urlArchived){
            helpers.serveAssets(res, path.join(archive.paths.archivedSites, url));
          }else{
            archive.isUrlInList(url, function(urlInList){
              if (urlInList){
                helpers.redirect(res, 'loading.html');
              }else{
                helpers.serve404(res);
              }
            });
          }
        });
      }
    });

  }
};

var noPathToArchive = function (req, res, url) {
  archive.isUrlInList(url, function(urlInList) {
    if(urlInList) {
      helpers.redirect(res, 'loading.html');
    } else {
      if (req.method === 'GET'){
        helpers.serve404(res);
      }else{
        archive.addUrlToList(url, helpers.redirect.bind(helpers, res, url));
      }
    }
  });
};

var processPost = function (req, res, url) {
  archive.isUrlArchived(url, function (urlArchived) {
    if (urlArchived) {
      helpers.redirect(res, url);
    } else {
      noPathToArchive(req, res, url);
    }
  });
};


