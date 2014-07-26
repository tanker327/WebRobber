/**
 * Created by Tanker on 7/26/14.
 */

var webRobber = require('./../lib');

var url = "http://www.google.com",
    dataMaps = {title:"title",
                logoImg:"#hplogo | src"
                };

webRobber.grab(url, dataMaps, function (err, result) {
    if(err){
        console.log("Grab fail.");
    }else{
        console.log(result);
    }
});