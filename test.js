'use strict';

var mw = require('./');


var test = require('unit.js');

mw('狗', function(err, measureWords) {
    if (err) {
        throw err;
    }
    test.array(measureWords).hasValue('条');
    test.array(measureWords).hasValue('只');
});