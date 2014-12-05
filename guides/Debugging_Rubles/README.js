Ext.data.JsonP['Debugging_Rubles']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Debugging Rubles</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083234\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083234\"><span>Edit</span></a>\n<h1>Debugging Rubles</h1>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Overview\" Debugging_Rubles.html#30083234_DebuggingRubles-Overview=\"Debugging_Rubles.html#30083234_DebuggingRubles-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Writingtotheconsole\" Debugging_Rubles.html#30083234_DebuggingRubles-Writingtotheconsole=\"Debugging_Rubles.html#30083234_DebuggingRubles-Writingtotheconsole\">Writing to the console</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Setthethelogginglevel\" Debugging_Rubles.html#30083234_DebuggingRubles-Setthethelogginglevel=\"Debugging_Rubles.html#30083234_DebuggingRubles-Setthethelogginglevel\">Set the the logging level</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Loggingtotheconsole\" Debugging_Rubles.html#30083234_DebuggingRubles-Loggingtotheconsole=\"Debugging_Rubles.html#30083234_DebuggingRubles-Loggingtotheconsole\">Logging to the console</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Writingoutproperties\" Debugging_Rubles.html#30083234_DebuggingRubles-Writingoutproperties=\"Debugging_Rubles.html#30083234_DebuggingRubles-Writingoutproperties\">Writing out properties</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Writingoutavailablemethods\" Debugging_Rubles.html#30083234_DebuggingRubles-Writingoutavailablemethods=\"Debugging_Rubles.html#30083234_DebuggingRubles-Writingoutavailablemethods\">Writing out available methods</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Rubles-section-30083234_DebuggingRubles-Disablingcaching\" Debugging_Rubles.html#30083234_DebuggingRubles-Disablingcaching=\"Debugging_Rubles.html#30083234_DebuggingRubles-Disablingcaching\">Disabling caching</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nDebugging is a bit of a misnomer, as currently you can only really set trace output. Proper debugging is currently on the TODO list, but not yet available.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Writingtotheconsole\">\n<h2 class=\"heading \"><span>Writing to the console</span></h2>\n<p>\nYou can write directly to the Scripting Console by using <tt class=\" \">CONSOLE.puts</tt>, i.e.:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">CONSOLE.puts </code><code class=\"string\">\"Hello!\"</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Setthethelogginglevel\">\n<h2 class=\"heading \"><span>Set the the logging level</span></h2>\n<p>\nYou can set the logging level in script:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ruble::Logger.log_level = :trace</code></div>\n</div>\n</div> <p>\nLogging levels are:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nnone    </p>\n</li><li class=\" \"> <p>\ntrace    </p>\n</li><li class=\" \"> <p>\ninfo    </p>\n</li><li class=\" \"> <p>\nwarning    </p>\n</li><li class=\" \"> <p>\nerror    </p>\n</li></ul> <p>\nYou might add this at the top of your file. With broader logging levels containing all the content from more restrictive ones (i.e. trace contains info, warning and error as well).    </p>\n<p>\nOutput will be put to the Scripting Console, and is theme-able as per the regular theme guidelines for &quot;console&quot; scopes.    </p>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\n</p>\n<p>\nThe logging level will persist at the newly set level until it is explicitly changed again.    </p>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Loggingtotheconsole\">\n<h2 class=\"heading \"><span>Logging to the console</span></h2>\n<p>\nA example of turning on logging, and writing out trace, info, warning, and error messages.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble/ui'</code></div>\n<div class=\"line\"><code class=\"plain\">Ruble::Logger.log_level = :trace</code></div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">'Tidy'</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :replace_document</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :document</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    Ruble::Logger.trace </code><code class=\"string\">\"trace\"</code></div>\n<div class=\"line\"><code class=\"plain\">    Ruble::Logger.log_info </code><code class=\"string\">\"Info\"</code></div>\n<div class=\"line\"><code class=\"plain\">    Ruble::Logger.log_warning </code><code class=\"string\">\"Warning\"</code></div>\n<div class=\"line\"><code class=\"plain\">    Ruble::Logger.log_error </code><code class=\"string\">\"Error\"</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Writingoutproperties\">\n<h2 class=\"heading \"><span>Writing out properties</span></h2>\n<p>\nIt's sometimes helpful to write out the properties of the current context object. An example of doing so:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">\"Print Context Properties\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    context.dynamic_properties.each { |k| CONSOLE.puts </code><code class=\"string\">\"#{k}\\n\"</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> <p>\nprints:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">project</code></div>\n<div class=\"line\"><code class=\"plain\">editor</code></div>\n<div class=\"line\"><code class=\"plain\">input_type</code></div>\n<div class=\"line\"><code class=\"plain\">browser</code></div>\n<div class=\"line\"><code class=\"plain\">command</code></div>\n<div class=\"line\"><code class=\"plain\">bundle</code></div>\n<div class=\"line\"><code class=\"plain\">TM_SELECTED_FILES</code></div>\n<div class=\"line\"><code class=\"plain\">1316024714117_env</code></div>\n<div class=\"line\"><code class=\"plain\">test_property</code></div>\n<div class=\"line\"><code class=\"plain\">invoked_via</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Writingoutavailablemethods\">\n<h2 class=\"heading \"><span>Writing out available methods</span></h2>\n<p>\nIt's also sometimes useful to write out the methods available on a particular object, i.e.:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">\"Print Document Methods\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    CONSOLE.puts context.editor.document.public_methods(</code><code class=\"keyword\">true</code><code class=\"plain\">).sort</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083234_DebuggingRubles-Disablingcaching\">\n<h2 class=\"heading \"><span>Disabling caching</span></h2>\n<p>\nIn order to speed up bundle loading, we cache the overall structure of the bundle. This can cause problems on some versions of Windows, where a user might not see any changes until they restart Studio. To disable caching, please follow the instructions <a class=\"document-link \" href=\"#!/guide/Disable_Ruble_Caching\" Disable_Ruble_Caching.html=\"Disable_Ruble_Caching.html\">here</a>.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Debugging Rubles"});