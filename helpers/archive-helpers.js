var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpRequest = require('http-request');
var mysql = require('mysql');
var db = mysql.createConnection({user:'root', database:'WILLAJAY'});

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
  db.query("SELECT url from sites", function(err, dbArray){
    var urlArray = _.map(dbArray, function (urlObj) {
      return urlObj['url'];
    });
    return callback(urlArray);
  });
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(urlArray){
    callback(urlArray.indexOf(url) > -1);
  });
};

exports.addUrlToList = function(url, callback){
  db.query("INSERT INTO sites (url) values (\'"+url+"\')", function() {
    callback();
  })
};

exports.isUrlArchived = function(url, callback){
  db.query("SELECT HTML from sites where url=\'"+url+"\'", function(err, dbArray){
    var archived;

    if (dbArray = undefined){
      archived = false;
    }
    }else if (dbArray.length === 0) {
      archived = false;
    } else if (dbArray[0]["HTML"]) {
      archived = true;
    } else {
      archived = false;
    }
    return callback(archived);
  });
};

exports.downloadUrls = function(urlArray){
  _.each(urlArray, function(url) {
    exports.isUrlArchived(url, function(urlArchived){
      if (!urlArchived) {
        var httpPath = 'http://' + url;
        httpRequest.get(httpPath, function(err, res){
          db.query("UPDATE sites SET HTML=\'"+res.buffer+"\' WHERE url=\'"+url+"\';", function(err, result){
            console.log(err)
          });
        });
      }
    });
  });

};
