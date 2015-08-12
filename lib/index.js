/**
 * WebRobber
 * Created by Eric Wu <tanker327@gmail.com>
 */

var pageLoader = require('./pageLoader');
var contentGrab = require('./contentGrab');

var grab = function (url, dataMaps, callback) {
    var promise = pageLoader(url)
        .then(function (content) {
            var result = contentGrab(content, dataMaps);
            result["_url"] = url;
            return result;
        })
        .catch(function (error) {
            callback && callback(err);
        });

    if (typeof callback === "undefined") {
        return promise;
    } else {
        promise
            .then(function(result ){
                callback && callback(null, result);
            })
            .catch(function(error){
                callback && callback(err);
            })
    }

};


exports.grab = grab;

