'use strict';

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./DictionaryModel.sqlite',sqlite3.OPEN_READONLY);
 
module.exports = function(str,clb) {
  db.all("SELECT c.word from word a, classifier b, word c WHERE a.word = ? and a.id = b.word AND b.mw = c.id",[str], function(err, row) {
      var array = [];
      for (var i in row) {
        array.push(row[i].word);
      }
      clb(err,array);
  });
};
