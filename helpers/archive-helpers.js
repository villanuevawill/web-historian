var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpRequest = require('http-request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths.list,'utf8', function(err, siteList){
    var urlArray = siteList ? siteList.split('\n') : [];
    return callback(urlArray);
  });
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(urlArray){
    callback(urlArray.indexOf(url) > -1);
  });
};

exports.addUrlToList = function(url, callback){
  exports.readListOfUrls(function(urlArray){
    urlArray.push(url);
    var newSiteList = urlArray.join('\n') + '\n';
    fs.writeFile(exports.paths.list, newSiteList, function(err){
      callback();
    });
  });
};

exports.isUrlArchived = function(url, callback){
  fs.exists(path.join(exports.paths.archivedSites, url), function(exists) {
    return callback(exists);
  });
};

exports.downloadUrls = function(urlArray){
  _.each(urlArray, function(url) {
    exports.isUrlArchived(url, function(urlArchived){
      if (!urlArchived) {
        var httpPath = 'http://' + url;
        httpRequest.get(httpPath, path.join(exports.paths.archivedSites, url), function(){});
      }
    });
  });

};
