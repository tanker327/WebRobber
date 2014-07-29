/**
 * contentGrab.js
 * Created by Eric Wu <tanker327@gmail.com>
 */

"use strict";


var cheerio = require('cheerio');


var contentGrab = function (content, dataMaps) {
    var $ = cheerio.load(content);
    var result = {};

    for (var prop in  dataMaps) {

        var selectorInfos = dataMaps[prop];
        var value = [];

        if(typeof selectorInfos === "string"){
            if(selectorInfos.trim() === "*"){
                result[prop] = content;
                continue;
            }else{
                selectorInfos = new Array(selectorInfos);
            }
        }

        for (var index in selectorInfos) {

            var selectArr = selectorInfos[index].split('|');
            var selector = selectArr[0];
            var attr = selectArr.length > 1 ? selectArr[1].trim() : "";
            var $selector = $(selector);

            $selector.each(function (index, element) {
                var content = (attr === "" || attr === "text")?$(element).text(): $(element).attr(attr);
                if(content!== undefined)
                    value.push(content) ;
            });

            if (value.length > 0) break;
        }

        if( 0 === value.length){
            value = "";
        }else if(1 === value.length){
            value = value[0]
        }

        result[prop] = value;

        //TODO: add default value if nothing found

    }

    return result;
}


module.exports = contentGrab;