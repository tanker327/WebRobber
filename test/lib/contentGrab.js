/**
 * Created by Tanker on 7/26/14.
 */

var contentGrab = require('../../lib/contentGrab');
var should = require('should');

describe("ContentGrab", function(){
    it('should grab content from page ', function () {

        var content = "<a>aaa</a>   <p id='age' href='123'></p>" ;
        var grabDetail = {name:["a"],age:["cc","#age | href"], body:"*"};

        var result =  contentGrab(content, grabDetail);

        result.name.should.exactly("aaa");
        result.age.should.exactly("123");

    });
});