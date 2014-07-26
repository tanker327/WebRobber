/**
 * Created by Tanker on 7/26/14.
 */

var cheerio = require('cheerio');

//var detail = {
    //    name:["selector| position","",.......]
//}
//

var contentGrab = function (content, dataMaps) {
    var $ = cheerio.load(content);
    var result = {};

    for (var prop in  dataMaps) {

        var selectorInfos = dataMaps[prop];
        var value = "";

        if(typeof selectorInfos === "string"){
            if(selectorInfos.trim() === "*"){
                value = content;
            }else{
                selectorInfos = new Array(selectorInfos);
            }
        }

        if(selectorInfos instanceof  Array) {
            for (var index in selectorInfos) {

                var selectArr = selectorInfos[index].split('|');
                var selector = selectArr[0];
                var attr = selectArr.length > 1 ? selectArr[1].trim() : "";


                if (attr == "" || attr === "text") {
                    value = $(selector).text();
                } else {
                    value = $(selector).attr(attr);
                }

                if (value.length > 0) break;

                //TODO: add default value if nothing found

            }
        }

        result[prop] = value;
    }

    return result;
}


module.exports = contentGrab;