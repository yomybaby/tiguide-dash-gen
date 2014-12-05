Ext.data.JsonP['Android_Intents']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Android Intents</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004807\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004807\"><span>Edit</span></a>\n<h1>Android Intents</h1>\n<div class=\"section section-2 \" id=\"29004807_AndroidIntents-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Intents-section-29004807_AndroidIntents-Overview\" Android_Intents.html#29004807_AndroidIntents-Overview=\"Android_Intents.html#29004807_AndroidIntents-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Intents-section-29004807_AndroidIntents-Writingtheapp\" Android_Intents.html#29004807_AndroidIntents-Writingtheapp=\"Android_Intents.html#29004807_AndroidIntents-Writingtheapp\">Writing the app</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Intents-section-29004807_AndroidIntents-CompleteApp\" Android_Intents.html#29004807_AndroidIntents-CompleteApp=\"Android_Intents.html#29004807_AndroidIntents-CompleteApp\">Complete App</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Intents-section-29004807_AndroidIntents-HelpfulLinks\" Android_Intents.html#29004807_AndroidIntents-HelpfulLinks=\"Android_Intents.html#29004807_AndroidIntents-HelpfulLinks\">Helpful Links</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"29004807_AndroidIntents-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nIn our previous article on <a class=\"external-link external-link\" href=\"http://developer.appcelerator.com/blog/2011/08/android-intent-filters.html\" target=\"_blank\">Android Intent Filters</a> we showed you how you can have your Appcelerator app receive Intents from other Android apps. This time we're going to show you how you can send your own Intents <i class=\" \">to</i> other Android apps. This is powerful native functionality that lets us leverage currently installed apps to send, share, view, edit, and perform other operations.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004807_AndroidIntents-Writingtheapp\">\n<h2 class=\"heading \"><span>Writing the app</span></h2>\n<p>\nFor this example we'll show a very common and effective use of Intents. We're going to use an Android Intent to share text with any apps on your Android device that accept text Intents. For example, let's say you open your Android browser and highlight some text. If you tap that highlighted text, you'll have the opportunity to share that text with other Android apps, in this case the Google+ app.    </p>\n<p>\n<img src=\"images/download/attachments/29004807/highlight.png\" alt=\"images/download/attachments/29004807/highlight.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/text_intent_list.png\" alt=\"images/download/attachments/29004807/text_intent_list.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/intent_list_small.png\" alt=\"images/download/attachments/29004807/intent_list_small.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/google_plus.png\" alt=\"images/download/attachments/29004807/google_plus.png\" class=\"confluence-embedded-image\" />\n</p>\n<p>\nSo let's see how we can do this in our own Appcelerator apps. Here is the code snippet where all the magic happens.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_SEND,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: </code><code class=\"string\">\"text/plain\"</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">'Some text that we want to share'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">intent.addCategory(Ti.Android.CATEGORY_DEFAULT);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Android.currentActivity.startActivity(intent);</code></div>\n</div>\n</div> <p>\nNow let's break it down to understand exactly what's going on here. You'll quickly find that much of the details are not so much Appcelerator configurations as they are native Android.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_SEND,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: </code><code class=\"string\">\"text/plain\"</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> <p>\nAbove we create the Intent using the Appcelerator API. In this instance we utilize 2 properties:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">action</strong> - Tells Android what action we are going to perform with our Intent. In this case we want to send something, as signified by <strong class=\" \"><i class=\" \">Ti.Android.ACTION_SEND</i></strong>. For a full listing of supported Intent actions, check the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API docs</a>. Also, as these correspond directly to native Android Intent actions, you should also reference the <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent documentation</a> for detailed explanations of each.    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">type</strong> - This is a MIME type that tells Android what type of data we are planning to send. In our case we just want to send text, so we use <strong class=\" \"><i class=\" \">text/plain</i></strong>. See the Android Intent function <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/content/Intent.html#setType\" target=\"_blank\">setType()</a> for more details.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">'Some text that we want to share'</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\nIn the line above we add the text we want to share as an Extra to the Intent. Extras allow as to pass specific data along with an Intent in a standardized format that can be used by any app potentially receiving the Intent. So in our first example, when you sent highlighted text from the browser, that text was wrapped in an Intent Extra which can then be processed by the receiving app. In our case, it added text to the update field in Google+.    </p>\n<p>\nWe pass 2 parameters to this function:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">name</strong> - This signifies the type of Extra we are sending. As you might imagine, <strong class=\" \"><i class=\" \">Ti.Android.EXTRA_TEXT</i></strong> signifies that we are adding text. As with the actions, a complete listing of extras can be found with the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API docs</a> and <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent documentation</a>.    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">data</strong> - This is the actual data being sent with the Intent via this Extra. Here we just use a string constant, but you can obviously use a string from anywhere in your app. In the included sample app, we'll use a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TextArea\">Ti.UI.TextArea</a> for this parameter.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">intent.addCategory(Ti.Android.CATEGORY_DEFAULT);</code></div>\n</div>\n</div> <p>\nAbove we specify the category of Intent Filters to which this Intent is targeted. We'll be using <strong class=\" \"><i class=\" \">Ti.Android.CATEGORY_DEFAULT</i></strong> which essentially does not use any category filtering. Once again, a complete listing of categories can be found with the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API docs</a> and more in depth descriptions are in the <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent documentation</a>.    </p>\n<p>\nNow our Intent is prepared to send text to another Android app. All we need to do is tell the current Android Activity that we want to send the Intent. To do so, we use the following line of code.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.Android.currentActivity.startActivity(intent);</code></div>\n</div>\n</div> <p>\nOnce this code executes you will see one of 2 things:    </p>\n<p>\n<img src=\"images/download/attachments/29004807/emulator_intent.png\" alt=\"images/download/attachments/29004807/emulator_intent.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/intent_list_medium.jpg\" alt=\"images/download/attachments/29004807/intent_list_medium.jpg\" class=\"confluence-embedded-image\" />\n</p>\n<ol class=\" \"><li class=\" \"> <p>\nIf you are running in the Android emulator, you'll likely see your default messaging app pop up as you don't have any other apps that receive text Intents.    </p>\n</li><li class=\" \"> <p>\nIf you are running on an Android device, you should see an Intent list that contains all the apps on your device that accept text Intents. Mine looks like the one on the right.    </p>\n</li></ol> <p>\nHere's a few examples of what the Intent we just sent will look like when it is received by some of Android's most popular apps. As you can see, you get incredible power and integration using native Android Intents for less than 10 lines of code!    </p>\n<p>\n<img src=\"images/download/attachments/29004807/sample_gmail.png\" alt=\"images/download/attachments/29004807/sample_gmail.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/sample_twitter.png\" alt=\"images/download/attachments/29004807/sample_twitter.png\" class=\"confluence-embedded-image\" />\n<img src=\"images/download/attachments/29004807/sample_googleplus.png\" alt=\"images/download/attachments/29004807/sample_googleplus.png\" class=\"confluence-embedded-image\" />\n</p>\n</div>\n<div class=\"section section-2 \" id=\"29004807_AndroidIntents-CompleteApp\">\n<h2 class=\"heading \"><span>Complete App</span></h2>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.UI.backgroundColor = </code><code class=\"string\">'#000000'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">var label = Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">'Say Something!'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor:</code><code class=\"string\">'#eeeeee'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize:</code><code class=\"string\">'20dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight:</code><code class=\"string\">'bold'</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\theight:</code><code class=\"string\">'Ti.UI.SIZE'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"string\">'5dp'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var textarea = Ti.UI.createTextArea({</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth:</code><code class=\"string\">'90%'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"string\">'44dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbottom: </code><code class=\"string\">'70dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tleft:</code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tright:</code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle:</code><code class=\"string\">'Share'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize:</code><code class=\"string\">'24dp'</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\tbottom:</code><code class=\"string\">'10dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tright:</code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\taction: Ti.Android.ACTION_SEND,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttype: </code><code class=\"string\">\"text/plain\"</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\tintent.putExtra(Ti.Android.EXTRA_TEXT, textarea.value);</code></div>\n<div class=\"line\"><code class=\"plain\">\tintent.addCategory(Ti.Android.CATEGORY_DEFAULT);</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.Android.currentActivity.startActivity(intent);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(label);</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(textarea);</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(button);</code></div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"29004807_AndroidIntents-HelpfulLinks\">\n<h2 class=\"heading \"><span>Helpful Links</span></h2>\n<ul class=\" \"><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"http://developer.appcelerator.com/blog/2011/08/android-intent-filters.html\" target=\"_blank\">Android Intent Filters</a> on the Appcelerator Developer Blog    </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API docs</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/content/Intent.html\" target=\"_blank\">Android Intent documentation</a> </p>\n</li></ul> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Android Intents"});