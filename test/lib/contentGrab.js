/**
 * Created by Eric Wu on 7/26/14.
 */

var contentGrab = require('../../lib/contentGrab');
var should = require('should');

describe("ContentGrab", function(){
    it('should grab content from page ', function () {

        var content = "<a>aaa</a>   <p id='age' data='123'></p>" ;
        var grabDetail = {name:["a"],age:["cc","#age | data"], body:"*"};

        var result =  contentGrab(content, grabDetail);

        console.log(result);

//        result.name.should.exactly("aaa");
//        result.age.should.exactly("123");

    });

    it('should grab multiple content if the selector selects multiple dom', function () {
        var content = "<a>aaa</a>  <a>bbb</a> <p id='age' data='123'></p> "+
                      "<p id='age' data='456'></p>" ;
        var grabDetail = {name:["a"],age:["#age | data"]};

        var result =  contentGrab(content, grabDetail);

        console.log(result);

//        result.name[0].should.exactly( 'aaa');
//        result.name[1].should.exactly( 'bbb');
//        result.age[0].should.exactly('123');
//        result.age[1].should.exactly('456');
    });
});