/**
 * Created by Tanker on 7/25/14.
 */

"use strict";


var http = require('http');


var pageLoader  = function (url, callback) {
    http.get(url, function (res) {

        //TODO: check statusCode is 200

        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            //TODO: Handler html body


            callback && callback(null,body);

        });



    }).on('error', function (e) {
        console.log("Got error: " + e.message);
        callback && callback(e);
    });
};
module.exports = pageLoader;