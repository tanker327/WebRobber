WebRobber
=========

_WebRobber_ is an light weight nodejs library. Main goal of this library is to __helps you grab the specified content on any web page on internet__.


## Example
```javascript
var webRobber = require('./../lib');

var url = "http://www.google.com";
var dataMaps = {
        title:"title",
        logoImg:"#hplogo | src"
        };

webRobber.grab(url, dataMaps, function (err, result) {
    if(err){
        console.log("Grab fail.");
    }else{
        console.log(result);
    }
});
```
The result will be :
```javascript

{ title: 'Google', logoImg: '/images/srpr/logo9w.png' }
```

## To begin

 1. Install it:

    ```bash
    $ npm install WebRobber --dev
    ```

 2. Require it:

    ```js
    var should = require('WebRobber');
    ```

## Test

To run the tests for _WebRobber_ simply run:

    $ make test


## License

MIT &copy; 2014 Eric Wu