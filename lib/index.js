
/**
 * WebRobber
 * Created by Eric Wu <tanker327@gmail.com>
 */

var pageLoader = require('./pageLoader');
var contentGrab = require('./contentGrab');

var grab = function(url, dataMaps, callback){
    pageLoader(url , function (err, content) {
        if(err) {
            callback && callback(err);
            return ;
        }
        var result = contentGrab(content, dataMaps);
        result["_url"] = url;
        callback && callback(null, result);
    });
};


exports.grab = grab;

