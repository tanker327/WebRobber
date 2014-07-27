WebRobber
=========

_WebRobber_ is a light weight nodejs library. Main goal of this library is to __helps you grab the specified content on any web page on internet__.


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
    $ npm install webrobber --dev
    ```

 2. Require it:

    ```js
    var should = require('webrobber');
    ```

 3. Prepare  dataMap:
 	```js
 	var dataMap = { property : selector [| method]}
 	```
 	example:
 	```js
 	var dataMap = {
				    title:"title",
				    logoImg:"#hplogo | src"
       			};
 	```
	Please see [DataMap](#datamap) for details

 4. Grab the data from web page
 	```js
 	webRobber.grab(url, dataMap, function (err, result) {
    	if(err){
       		console.log("Grab fail.");
    	}else{
        	console.log(result);
    	}
	});
 	```
## DataMap
DataMap is a map object use to define _Name_ and _Selector_ of the content you want to grap. _Name_ is used be mark the name of content in the final reslut object. _Selector_ is used to select the content in the web page.

WebRobber's selector usage is nearly identical to Cheerio's and jQuery's. Please check [Cheerio's selector](https://github.com/cheeriojs/cheerio/blob/master/Readme.md#selectors)

The default grabed value will be the _.text()_ of a dom selected by selector. If you need grab attribute of a dom. Please add " | attribute name".

Example: we want to grab the src of a image dom
```js
var dataMap = {
				logoImg:"#hplogo | src"
       	};
```

## Test

To run the tests for _WebRobber_, please run:

    $ npm test


## License

MIT &copy; 2014 Eric Wu