/**
 * pageLoader.js
 * Created by Eric Wu <tanker327@gmail.com>
 */

"use strict";


var request = require('request');


var pageLoader = function (url, callback) {

    request(url, function (error, response, body) {

        if (error) {
            callback && callback(e);
        }

        if (response.statusCode == 200) {
            callback && callback(null, body);
        } else {
            throw new Error("request fails. Request code: " + response.statusCode);
        }
    })

};
module.exports = pageLoader;