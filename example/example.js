/**
 * Created by Eric Wu <tanker327@gmail.com> on 7/26/14.
 */

var webRobber = require('./../lib');

var url = "http://www.google.com";
var dataMaps = {
        title:"title",
        logoImg:"#hplogo | src",
        images:"img | src"
        };

webRobber.grab(url, dataMaps, function (err, result) {
    if(err){
        console.log("Grab fail.");
    }else{
        console.log(result);
    }
});