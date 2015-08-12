/**
 * pageLoader.js
 * Created by Eric Wu <tanker327@gmail.com>
 */

"use strict";


var request = require('request');
var Q = require('q');


var pageLoader = function (url, callback) {

    var deferred = Q.defer();

    request(url, function (error, response, body) {
        if (error) {
            deferred.reject(error);
        }

        if (response.statusCode === 200) {
            deferred.resolve(body);
        } else {
            deferred.reject();
        }
    });

    var promise = deferred.promise;

    if (typeof callback === "undefined") {
        return promise;
    } else {
        promise
            .then(function (body) {
                callback && callback(null, body);
            })
            .catch(function(error){
                callback && callback(error);
            });
    }

};

module.exports = pageLoader;