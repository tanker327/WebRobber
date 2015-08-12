/**
 * Created by Eric Wu on 7/26/14.
 */

var pageLoader = require('../../lib/pageLoader');
var should = require('should');


var url = "http://www.google.com";

describe("pageLoader", function( ){
    it('Should load the web page', function (done) {

        pageLoader(url, function (err, body) {
            if(err) throw err;
            body.should.not.be.empty;
            done();
        });
    });

    it('Should using promise if no callback', function (done) {
        pageLoader(url)
            .then(function(body){
                body.should.not.be.empty;
                done();
            })
            .catch(function(error){
                throw  error;
            })
    });
});