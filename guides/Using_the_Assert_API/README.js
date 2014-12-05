Ext.data.JsonP['Using_the_Assert_API']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Using the Assert API</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083110\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083110\"><span>Edit</span></a>\n<h1>Using the Assert API</h1>\n<p>\nThis page explains how to use the Assert API feature that is part of the Studio JavaScript debugger.    </p>\n<div class=\"section section-2 \" id=\"30083110_UsingtheAssertAPI-Introduction\">\n<h2 class=\"heading \"><span>Introduction</span></h2>\n<p>\nUse the Assert API to determine whether a condition that you specify is true or false at a give moment. You can do this by adding the code &quot;aptana.assert_CallName_&quot; to your code where you want to test the condition.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083110_UsingtheAssertAPI-Instructions\">\n<h2 class=\"heading \"><span>Instructions</span></h2>\n<p>\nThe Assert API has a variety of available calls for you to test various conditions in your code. The list below displays the reference information for each call.    </p>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.fail\">\n<h3 class=\"heading \"><span>aptana.fail</span></h3>\n<p>\nDisplays if the code fails at the specified point.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.fail(message,arg1,arg2,...);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.fail(</code><code class=\"string\">\"Failed!\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assert\">\n<h3 class=\"heading \"><span>aptana.assert</span></h3>\n<p>\nAsserts the specified statement.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.</code><code class=\"keyword\">assert</code><code class=\"plain\">(object, arg1, arg2, ...);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.</code><code class=\"keyword\">assert</code><code class=\"plain\">(</code><code class=\"keyword\">null</code><code class=\"plain\">, </code><code class=\"string\">\"This is my assert message!\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertEquals\">\n<h3 class=\"heading \"><span>aptana.assertEquals</span></h3>\n<p>\nReturns true if the arguments are equal.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertEquals(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertEquals(</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotEquals\">\n<h3 class=\"heading \"><span>aptana.assertNotEquals</span></h3>\n<p>\nReturns true if the arguments are not equal.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotEquals(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotEquals(</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">1</code><code class=\"plain\"> </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertGreater\">\n<h3 class=\"heading \"><span>aptana.assertGreater</span></h3>\n<p>\nReturns true if the first argument is greater than the second argument(s).    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertGreater(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertGreater(</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotGreater\">\n<h3 class=\"heading \"><span>aptana.assertNotGreater</span></h3>\n<p>\nReturns true if the first argument is not greater than the second argument(s).    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotGreater(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotGreater(</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertLess\">\n<h3 class=\"heading \"><span>aptana.assertLess</span></h3>\n<p>\nReturns true if the first argument is less than the second argument(s).    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertLess(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertLess(</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"value\">1</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotLess\">\n<h3 class=\"heading \"><span>aptana.assertNotLess</span></h3>\n<p>\nReturns true if the first argument is not less than the second argument(s).    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotLess(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotLess(</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"value\">1</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertContains\">\n<h3 class=\"heading \"><span>aptana.assertContains</span></h3>\n<p>\nReturns true if the objects contain the arguments.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertContains(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertContains(</code><code class=\"string\">\"x\"</code><code class=\"plain\">,window, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotContains\">\n<h3 class=\"heading \"><span>aptana.assertNotContains</span></h3>\n<p>\nReturns true if the objects do not contain the arguments.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotContains(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotContains(</code><code class=\"string\">\"document\"</code><code class=\"plain\">,window, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertTrue\">\n<h3 class=\"heading \"><span>aptana.assertTrue</span></h3>\n<p>\nReturns true if the specified condition is true.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertTrue(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertTrue(</code><code class=\"keyword\">false</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertFalse\">\n<h3 class=\"heading \"><span>aptana.assertFalse</span></h3>\n<p>\nReturns true if the specified condition is false.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertFalse(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertFalse(</code><code class=\"keyword\">true</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNull\">\n<h3 class=\"heading \"><span>aptana.assertNull</span></h3>\n<p>\nReturns true if the specified object/arguments are null.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNull(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNull(window, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotNull\">\n<h3 class=\"heading \"><span>aptana.assertNotNull</span></h3>\n<p>\nReturns true if the specified object/arguments are not null.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotNull(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotNull(</code><code class=\"keyword\">null</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertUndefined\">\n<h3 class=\"heading \"><span>aptana.assertUndefined</span></h3>\n<p>\nReturns true if the specified object/arguments are undefined.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertUndefined(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertUndefined(window, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotUndefined\">\n<h3 class=\"heading \"><span>aptana.assertNotUndefined</span></h3>\n<p>\nReturns true if the specified object/arguments are not undefined.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotUndefined(object,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var x; aptana.assertNotUndefined(x, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertInstanceOf\">\n<h3 class=\"heading \"><span>aptana.assertInstanceOf</span></h3>\n<p>\nReturns true if the argument(s) are an instance of the object(s).    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertInstanceOf(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertInstanceOf(</code><code class=\"string\">\"str\"</code><code class=\"plain\">,Date, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotInstanceOf\">\n<h3 class=\"heading \"><span>aptana.assertNotInstanceOf</span></h3>\n<p>\nReturns true if the argument(s) are not an instance of the objects.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotInstanceOf(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotInstanceOf(</code><code class=\"keyword\">new</code><code class=\"plain\"> Date(),Date, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertTypeOf\">\n<h3 class=\"heading \"><span>aptana.assertTypeOf</span></h3>\n<p>\nReturns true if the argument(s) are the type of the objects.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertTypeOf(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertTypeOf(</code><code class=\"value\">1</code><code class=\"plain\">, </code><code class=\"string\">\"string\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083110_UsingtheAssertAPI-aptana.assertNotTypeOf\">\n<h3 class=\"heading \"><span>aptana.assertNotTypeOf</span></h3>\n<p>\nReturns true if the argument(s) are not a type of the objects.    </p>\n<p>\n<strong class=\" \">Syntax</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotTypeOf(o1,o2,arguments);</code></div>\n</div>\n</div> <p>\n<strong class=\" \">Example</strong> </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">aptana.assertNotTypeOf(</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"string\">\"number\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg1\"</code><code class=\"plain\">, </code><code class=\"string\">\"arg2\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n</div>\n<div class=\"section section-2 \" id=\"30083110_UsingtheAssertAPI-RelatedTopics\">\n<h2 class=\"heading \"><span>Related Topics</span></h2>\n<ul class=\" \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/About_the_Debug_perspective\" About_the_Debug_perspective.html=\"About_the_Debug_perspective.html\">About the Debug perspective</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_the_JavaScript_debugger\" Installing_the_JavaScript_debugger.html=\"Installing_the_JavaScript_debugger.html\">Installing the JavaScript debugger</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Uninstalling_the_debugger\" Uninstalling_the_debugger.html=\"Uninstalling_the_debugger.html\">Uninstalling the debugger</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Running_the_debugger\" Running_the_debugger.html=\"Running_the_debugger.html\">Running the debugger</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_your_debugger_log\" Accessing_your_debugger_log.html=\"Accessing_your_debugger_log.html\">Accessing your debugger log</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Stepping_into_and_over_functions\" Stepping_into_and_over_functions.html=\"Stepping_into_and_over_functions.html\">Stepping into and over functions</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_a_breakpoint\" Adding_a_breakpoint.html=\"Adding_a_breakpoint.html\">Adding a breakpoint</a> </p>\n</li></ul> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Using the Assert API"});