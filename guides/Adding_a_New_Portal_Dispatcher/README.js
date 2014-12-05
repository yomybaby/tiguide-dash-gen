Ext.data.JsonP['Adding_a_New_Portal_Dispatcher']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Adding a New Portal Dispatcher</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083152\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083152\"><span>Edit</span></a>\n<h1>Adding a New Portal Dispatcher</h1>\n<div class=\"section section-2 \" id=\"30083152_AddingaNewPortalDispatcher-Chapters\">\n<h2 class=\"heading \"><span>Chapters</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-CreatingaNewDispatcher\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-CreatingaNewDispatcher=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-CreatingaNewDispatcher\">Creating a New Dispatcher</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-AddingtheJavaScriptCode\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-AddingtheJavaScriptCode=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-AddingtheJavaScriptCode\">Adding the JavaScript Code</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-UpdatingtheHTML\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-UpdatingtheHTML=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-UpdatingtheHTML\">Updating the HTML</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-WritetheJavaScriptHandler\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-WritetheJavaScriptHandler=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-WritetheJavaScriptHandler\">Write the JavaScript Handler</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-CalltheHandler\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-CalltheHandler=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-CalltheHandler\">Call the Handler</a> </p>\n</li></ul></li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_New_Portal_Dispatcher-section-30083152_AddingaNewPortalDispatcher-Example%3AIntegrateDispatchersIntoaHTMLPage\" Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-Example%3AIntegrateDispatchersIntoaHTMLPage=\"Adding_a_New_Portal_Dispatcher.html#30083152_AddingaNewPortalDispatcher-Example%3AIntegrateDispatchersIntoaHTMLPage\">Example: Integrate Dispatchers Into a HTML Page</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083152_AddingaNewPortalDispatcher-CreatingaNewDispatcher\">\n<h2 class=\"heading \"><span>Creating a New Dispatcher</span></h2>\n<p>\nIf you've created a portal page, you may wish to add new portal handlers to do new actions within Studio.    </p>\n<p>\nThe 'magic' is done through a 'dispatch' function that is injected to the internal browser when the portal loads the content. Once the 'dispatch' is in, JavaScript code in the remote content may interact with the Studio through JSON calls. Every call is designed to invoke a specific action on a specific controller that is implemented in the Studio. Controllers and Actions are contributed through extension points inside the Studio's code, so the browser may only invoke a specific set of actions that were pre-defined (such as, plug-in installations).&lt;br&gt; For example, saving a preference key inside the Studio is done by invoking this dispatch call:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({controller: </code><code class=\"string\">'portal.preferences'</code><code class=\"plain\">, action:</code><code class=\"string\">'setPreferenceValue'</code><code class=\"plain\">, args: {key: prefKey, value: val}}).toJSON());</code></div>\n</div>\n</div> <p>\nLet's break this 'dispatch' to it pieces...&lt;br&gt;The dispatch is made to call the 'portal.preferences' controller. This controller is one of the core controllers in the portal system and is already implemented.&lt;br&gt;The actions is 'setPreferencesValue', and the arguments are the preference-key and its value.    </p>\n<p>\nAll of that is held in a 'prototype' hash that is converted to JSON.  In the same way, we would call a dispatch method to retrieve a preference value:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">value = dispatch($H({controller;: </code><code class=\"string\">'portal.preferences'</code><code class=\"plain\">, action:</code><code class=\"string\">'getPreferenceValue'</code><code class=\"plain\">, args: {key: control.getAttribute(</code><code class=\"string\">'key'</code><code class=\"plain\">)}}).toJSON());</code></div>\n</div>\n</div> <div class=\"section section-3 \" id=\"30083152_AddingaNewPortalDispatcher-AddingtheJavaScriptCode\">\n<h3 class=\"heading \"><span>Adding the JavaScript Code</span></h3>\n<p>\nHere is an example of adding a checkbox into your content that will interact with the Studio preferences:    </p>\n<div class=\"section section-4 \" id=\"30083152_AddingaNewPortalDispatcher-UpdatingtheHTML\">\n<h4 class=\"heading \"><span>Updating the HTML</span></h4>\n<p>\nIn your HTML code, add this line to mark the location of the checkbox and its text. We'll handle this later on in JavaScript when the page loads.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&amp;lt;div id=</code><code class=\"string\">\"load_toolbox\"</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">'preference checkbox'</code><code class=\"plain\"> text=</code><code class=\"string\">'Load the Toolbox on startup'</code><code class=\"plain\"> key=</code><code class=\"string\">'open_developer_toolbox'</code><code class=\"plain\">&amp;gt;&amp;lt;/div&amp;gt;</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"30083152_AddingaNewPortalDispatcher-WritetheJavaScriptHandler\">\n<h4 class=\"heading \"><span>Write the JavaScript Handler</span></h4>\n<p>\nWrite the JavaScript code that will handle the dispatchers. Here is an actual JS implementation that creates the checkbox and interacts with the dispatch to create the desired outcome:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Preferences = Class.create({</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\">   * Render the items that are attached to the studio preferences.</code></div>\n<div class=\"line\"><code class=\"preprocessor\">   */</code></div>\n<div class=\"line\"><code class=\"plain\">  render: function() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Get the items that should be controlling/diaplaying the preference item.</code></div>\n<div class=\"line\"><code class=\"plain\">    controls = [$(</code><code class=\"string\">'load_toolbox'</code><code class=\"plain\">)];</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// For each control, get the </code></div>\n<div class=\"line\"><code class=\"plain\">    with (Elements.Builder) {</code></div>\n<div class=\"line\"><code class=\"plain\">      controls.each(function (control) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (control) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (navigator.appName == </code><code class=\"string\">\"Microsoft Internet Explorer\"</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">            clazz = control.getAttribute(</code><code class=\"string\">'className'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">          } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            clazz = control.getAttribute(</code><code class=\"string\">'class'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">          }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (clazz &amp;&amp; clazz.match(</code><code class=\"string\">'preference'</code><code class=\"plain\">)) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// TODO - For now we support only 'input' (checkbox) types.</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// We should add more as needed.</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (clazz.match(</code><code class=\"string\">'checkbox'</code><code class=\"plain\">)) {</code></div>\n<div class=\"line\"><code class=\"plain\">              elm = input({</code><code class=\"string\">'type'</code><code class=\"plain\"> : </code><code class=\"string\">'checkbox'</code><code class=\"plain\">, </code><code class=\"string\">'key'</code><code class=\"plain\"> : control.getAttribute(</code><code class=\"string\">'key'</code><code class=\"plain\">)});</code></div>\n<div class=\"line\"><code class=\"plain\">              control.appendChild(elm);</code></div>\n<div class=\"line\"><code class=\"plain\">              control.appendChild(span(control.getAttribute(</code><code class=\"string\">'text'</code><code class=\"plain\">)));</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Get the current preference value for this item</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (typeof(console) !== </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                console.log(</code><code class=\"string\">\"Dispatching the 'getPreferenceValue' action on the 'portal.preferences' controller...\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">              }</code></div>\n<div class=\"line\"><code class=\"plain\">              value = </code><code class=\"string\">'false'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Check that we have the dispatch browser function</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (typeof(dispatch) !== </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                value = dispatch($H({controller : </code><code class=\"string\">'portal.preferences'</code><code class=\"plain\">, action:</code><code class=\"string\">\"getPreferenceValue\"</code><code class=\"plain\">, args : {key : control.getAttribute(</code><code class=\"string\">'key'</code><code class=\"plain\">)}}).toJSON());</code></div>\n<div class=\"line\"><code class=\"plain\">              }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// We expect true/false for checkboxes</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (value == </code><code class=\"string\">'true'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                elm.setAttribute(</code><code class=\"string\">\"checked\"</code><code class=\"plain\">, </code><code class=\"string\">\"checked\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">              }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Observe and report selection changes for this item</code></div>\n<div class=\"line\"><code class=\"plain\">              elm.observe(</code><code class=\"string\">'click'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">                inputElement = e.element();</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (inputElement) {</code></div>\n<div class=\"line\"><code class=\"plain\">                  prefKey = inputElement.getAttribute(</code><code class=\"string\">'key'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// set the pref value</code></div>\n<div class=\"line\"><code class=\"plain\">                  val = (inputElement.getValue() == </code><code class=\"string\">'on'</code><code class=\"plain\">) ? </code><code class=\"string\">'true'</code><code class=\"plain\"> : </code><code class=\"string\">'false'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (typeof(console) !== </code><code class=\"string\">'undefined'</code><code class=\"plain\"> &amp;&amp; typeof(dispatch) !== </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                    console.log(</code><code class=\"string\">\"Dispatching the 'setPreferenceValue' action on the 'portal.preferences' controller...\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">                    dispatch($H({controller : </code><code class=\"string\">'portal.preferences'</code><code class=\"plain\">, action:</code><code class=\"string\">\"setPreferenceValue\"</code><code class=\"plain\">, args : {key :prefKey, value : val}}).toJSON());</code></div>\n<div class=\"line\"><code class=\"plain\">                  }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                }</code></div>\n<div class=\"line\"><code class=\"plain\">              });</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">          }</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">      });</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> <p>\n</p>\n<p>\nNote that the &quot;''with (Elements.Builder)&quot;'' is actually using a supporting JavaScript that helps us in building HTML elements (you can take a look at ''elements.js'' under the toolbox repo).    </p>\n<p>\nThe JavaScript above renders the checkbox after locating it by the ID. It then sets the initial state by dispatching for the preference key and listens to any click events to inform the Studio with any changes. Again, through a ''dispatch ''call.    </p>\n</div>\n<div class=\"section section-4 \" id=\"30083152_AddingaNewPortalDispatcher-CalltheHandler\">\n<h4 class=\"heading \"><span>Call the Handler</span></h4>\n<p>\nThe last part is to call the code. We can do that from the same JS file, but we'll choose to create another JavaScript file and have it control this preferences interaction code and other code segments we'll add in the future. Our manager file will hold this code. If you are using the resource files with the stock portal page, this has been done for you already--you just need to make sure to call    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">loadPortal()</code></div>\n</div>\n</div> <p>\nin your body tag.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var portal;</code></div>\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * The Portal class</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n<div class=\"line\"><code class=\"plain\">var Portal = Class.create({</code></div>\n<div class=\"line\"><code class=\"plain\">  initialize: function() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.preferences  = </code><code class=\"keyword\">new</code><code class=\"plain\"> Preferences();</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Render any preferences-related items.</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.preferences.render();</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Call to load the portal</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n<div class=\"line\"><code class=\"plain\">function loadPortal() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (typeof(portal) === </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    portal = </code><code class=\"keyword\">new</code><code class=\"plain\"> Portal();</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\n</p>\n<p>\nAnd finally, our HTML will load all the needed JavaScript files and call to load this JS:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;body onload=</code><code class=\"string\">\"loadPortal()\"</code><code class=\"plain\">&gt;</code></div>\n</div>\n</div> </div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083152_AddingaNewPortalDispatcher-Example:IntegrateDispatchersIntoaHTMLPage\">\n<h2 class=\"heading \"><span>Example: Integrate Dispatchers Into a HTML Page</span></h2>\n<p>\nAs usual, it's always easier to take a look at a working implementation, so you are welcome to clone the <strong class=\" \"><i class=\" \">rails3</i></strong> branch from <strong class=\" \"><i class=\" \">git@github.com:aptana/toolbox-aptana-com.git</i></strong> and take a look at the way various dispatch calls interact with the web-content.<br />We also have a set of simpler examples at the <strong class=\" \"><i class=\" \">git@github.com:aptana/studio3-sdk.git</i></strong> repo.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Adding a New Portal Dispatcher"});