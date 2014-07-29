/**
 * Created by Eric Wu on 7/26/14.
 */

var pageLoader = require('../../lib/pageLoader');
var should = require('should');




describe("pageLoader", function( ){
    it('Should load the web page', function (done) {
        var url = "http://www.google.com"
        pageLoader(url, function (err, body) {
            if(err) throw err;

            body.should.be.not.empty;

            done();
        });
    });
});