WebRobber
=========

NPM: https://www.npmjs.com/package/webrobber

_WebRobber_ is a light weight nodejs library. Main goal of this library is to __helps you grab the specified content on any web page on internet__.


## Example

Let's use [http://www.google.com](http://www.google.com)  as a example. If you check the source code of the page , it should like below:
```html
<html>
    <head>
        <title>google</title>
    </head>
    <body>
    ....
        <img src="/images/icons/product/chrome-48.png"/>
    ....
        <div>
            <img id="hplogo" src="'/images/srpr/logo9w.png'"/>
        </div>
    ....
    </body>
</html>
```

Now let's use WebRoober to grab the __title of this page__ , __url of the logo image__ and __all the image urls__.

```javascript
var webRobber = require('webrobber');

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
```
The result will be :
```javascript

{
  title: 'Google',
  logoImg: '/images/srpr/logo9w.png',
  images:  [
             '/images/icons/product/chrome-48.png',
             '/images/srpr/logo9w.png'
           ],
  _url: 'http://www.google.com'
}
```

## To begin

Please make sure you have nodejs and npm installed.

 1. Install it:

    ```bash
    $ npm install webrobber --save
    ```

 2. Require it:

    ```js
    var webRobber = require('webrobber');

    ```

 3. Prepare  dataMap:
 	```js
 	var dataMap = { property name : selector [| attribute]}
 	```
 	example:
 	```js
 	var dataMap = {
				    title:"title",
				    logoImg:"#hplogo | src"
       			};
 	```
	Please see [DataMap](#datamap) for details

 4. Grab the content from web page
 	```js
 	webRobber.grab(url, dataMap, function (err, result) {
    	if(err){
       		console.log("Grab fail.");
    	}else{
        	console.log(result);
    	}
	});
 	```
 	Or if you familiar with Promise ([Q](https://github.com/kriskowal/q)). You can do following:
 	```js
 	webRobber.grab(url, dataMap)
        .then(function(result){
            console.log(result);
        })
        .catch(function(error){
            console.log(error);
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

If you may have several possible selectors for one content. You can put all possible selectors in an array. All the selector will be checked one after another until we find valid content.
``` js
var dataMap = {
				logoImg:["#hplogo | src","#logo-url","#new-logo | src"]
       	};
```
If multiple contents are found for one selector. All contents will be set an array and saved in result. Please see [example at top](#example) for you reference.

If use * as selector, all the content of web page will be save for the property.

## Result

All the results of grabbing will be return in a object as result (Please see [example](#example) at top for detail).

There is special value in result object : _url. It keeps the url used for grabbing.


## Test

To run the tests for _WebRobber_, please run:

    $ npm test


## License

MIT &copy; 2014 Eric Wu
