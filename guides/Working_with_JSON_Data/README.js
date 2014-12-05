Ext.data.JsonP['Working_with_JSON_Data']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Working with JSON Data</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004905\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004905\"><span>Edit</span></a>\n<h1>Working with JSON Data</h1>\n<div class=\"section section-2 \" id=\"29004905_WorkingwithJSONData-Objective\">\n<h2 class=\"heading \"><span>Objective</span></h2>\n<p>\nIn this chapter, you will learn how to send and receive JSON data from a remote data source via the HTTPClient object.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004905_WorkingwithJSONData-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\nThe best data transport format for use with JavaScript (and hence Titanium) is JavaScript Object Notation, or <a class=\"external-link external-link\" href=\"http://json.org\" target=\"_blank\">JSON</a>. JSON is a great fit for JavaScript applications since it can very easily be serialized into and out of JavaScript Objects. Moreover, since JSON is such a terse transport format, it takes less less time and less bandwidth to transfer over the air, which can become important on low-speed data networks. For more on JSON, <a class=\"external-link external-link\" href=\"http://json.org\" target=\"_blank\">check out the official website</a>.    </p>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-Built-inJSONfunctions\">\n<h3 class=\"heading \"><span>Built-in JSON functions</span></h3>\n<p>\nTitanium has built-in support for JSON serialization in the <tt class=\" \">JSON</tt> namespace. The two functions provided in this namespace are:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<tt class=\" \">JSON.stringify()</tt> which takes a JavaScript object and converts it to a string.    </p>\n</li><li class=\" \"> <p>\n<tt class=\" \">JSON.parse()</tt> which takes a JSON-formatted string and converts it to a JavaScript object    </p>\n</li></ul> <p>\n(Remember that in JavaScript, arrays are objects. So these methods work with both arrays and objects.)    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var myObject = {</code></div>\n<div class=\"line\"><code class=\"plain\">\tfoo:</code><code class=\"string\">'bar'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tstuff:[</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"value\">3</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">//serialize</code></div>\n<div class=\"line\"><code class=\"plain\">var myObjectString = JSON.stringify(myObject);</code></div>\n<div class=\"line\"><code class=\"comments\">// returns '{\"foo\":\"bar\",\"stuff\":[1,2,3]}'</code></div>\n<div class=\"line\"><code class=\"comments\">//deserialize...</code></div>\n<div class=\"line\"><code class=\"plain\">var myNewObject = JSON.parse(myObjectString);</code></div>\n<div class=\"line\"><code class=\"comments\">// myNewObject.stuff[1] === 2</code></div>\n</div>\n</div> <p>\nIf you have a server-side resource (web service) that has a JSON response format, you can very easily serialize that response inside HTTPClient's <tt class=\" \">onload</tt> function. The data returned from your web service will be stored as a property of the HTTPClient <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\">object</a>, so it is accessed and parsed like so:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">xhr.onload = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar myData = JSON.parse(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-Methodscannotbestringified\">\n<h3 class=\"heading \"><span>Methods cannot be stringified</span></h3>\n<p>\nJSON cannot represent methods. So, the <tt class=\" \">stringify()</tt> method will not support converting an object with methods to a JSON string. If you attempt to stringify an object that has methods, the function will return an empty string. Keep in mind that most native Titanium objects have methods. Attempting to stringify any of them will return an empty representation.    </p>\n</div>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-ReceivingandparsingJSONdata\">\n<h3 class=\"heading \"><span>Receiving and parsing JSON data</span></h3>\n<p>\nYou retrieve JSON data using the HTTPClient object. Within the <tt class=\" \">onload</tt> callback, <tt class=\" \">this.responseText</tt> contains the raw text response from the target URL. It is the property you should use when processing JSON or other plain text data.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var url = </code><code class=\"string\">\"http://example.com/json.txt\"</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var json;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// parse the retrieved data, turning it into a JavaScript object</code></div>\n<div class=\"line\"><code class=\"plain\">    \tjson = JSON.parse(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// ...</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-SendingJSONdata\">\n<h3 class=\"heading \"><span>Sending JSON data</span></h3>\n<p>\nThe HTTPClient's <tt class=\" \">send()</tt> method automatically stringifies data for you. So, you don't need to explicitly take this action before submitting data in a POST payload. Then again, since <tt class=\" \">send()</tt> accepts null, dictionary, string, File object or Blob data, there's no harm in calling <tt class=\" \">JSON.stringify()</tt> on the data first. Should you need to send object data in a GET querystring, you will need to stringify data first. You'll probably need to URL encode the resulting string to safely pass it as a querystring parameter. Use the JavaScript <tt class=\" \">encodeURIComponent()</tt> function to do that.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var blogPost = {</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">'My awesome blog'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbody: </code><code class=\"string\">'Today I met Susy at the laundromat. Best day EVAR\\!'</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// handle the response</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">'POST'</code><code class=\"plain\">,</code><code class=\"string\">'http://www.myblog.com/post.php'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// optional:</code></div>\n<div class=\"line\"><code class=\"comments\">// blogPost = JSON.stringify(blogPost);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send(blogPost);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-Hands-onPractice\">\n<h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n<div class=\"section section-4 \" id=\"29004905_WorkingwithJSONData-Goal\">\n<h4 class=\"heading \"><span>Goal</span></h4>\n<p>\nIn this activity, you will retrieve and parse JSON data and display the information in a TableView    </p>\n</div>\n<div class=\"section section-4 \" id=\"29004905_WorkingwithJSONData-Resources\">\n<h4 class=\"heading \"><span>Resources</span></h4>\n<p>\nIn this activity, you will retrieve a JSON-formatted file from <a class=\"external-link external-link\" href=\"https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt\" target=\"_blank\">https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt</a>. That file contains data formatted like this:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">\"fighters\"</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">\"name\"</code><code class=\"plain\">: </code><code class=\"string\">\"Muhammad Ali\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">\"nickname\"</code><code class=\"plain\">: </code><code class=\"string\">\"The Greatest\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">\"name\"</code><code class=\"plain\">: </code><code class=\"string\">\"Chuck Liddell\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">\"nickname\"</code><code class=\"plain\">: </code><code class=\"string\">\"The Iceman\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// etc. </code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"29004905_WorkingwithJSONData-Steps\">\n<h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \"> <p>\nCreate a new Titanium Mobile project.    </p>\n</li><li class=\" \"> <p>\nReplace the code in app.js with code that defines a single window containing a TableView.    </p>\n</li><li class=\" \"> <p>\nAdd the code to retrieve the JSON data from the URL given above. When the data is successfully retrieved, parse it and populate the table. For each row:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nAdd a label with large, bold text listing the fighter's name. Position it at the top-left of the row.    </p>\n</li><li class=\" \"> <p>\nAdd a label with smaller, normal text listing the fighter's nickname. Position it below the first label.    </p>\n</li><li class=\" \"> <p>\nSet the resulting data as the TableView's data to populate the table.    </p>\n</li></ul></li><li class=\" \"> <p>\nAdd the code to handle a network error. Log the HTTP status code, the text retrieved, and any error message. Alert a simple message to the user.    </p>\n</li><li class=\" \"> <p>\nSet the timeout to 5 seconds.    </p>\n</li><li class=\" \"> <p>\nBuild and test your app in the simulator/emulator.    </p>\n</li></ol> </div>\n</div>\n<div class=\"section section-3 \" id=\"29004905_WorkingwithJSONData-ReferencesandFurtherReading\">\n<h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\">Ti.Network.HTTPClient object</a> </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-2 \" id=\"29004905_WorkingwithJSONData-Summary\">\n<h2 class=\"heading \"><span>Summary</span></h2>\n<p>\nIn this chapter, you learned how to send and receive JSON data from a remote data source via the HTTPClient object.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Working with JSON Data"});