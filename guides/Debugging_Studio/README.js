Ext.data.JsonP['Debugging_Studio']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Debugging Studio</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083285\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083285\"><span>Edit</span></a>\n<h1>Debugging Studio</h1>\n<div class=\"section section-2 \" id=\"30083285_DebuggingStudio-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Studio-section-30083285_DebuggingStudio-Overview\" Debugging_Studio.html#30083285_DebuggingStudio-Overview=\"Debugging_Studio.html#30083285_DebuggingStudio-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Studio-section-30083285_DebuggingStudio-EnableDebugLogging\" Debugging_Studio.html#30083285_DebuggingStudio-EnableDebugLogging=\"Debugging_Studio.html#30083285_DebuggingStudio-EnableDebugLogging\">Enable Debug Logging</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Debugging_Studio-section-30083285_DebuggingStudio-UsingtheStudioConsole\" Debugging_Studio.html#30083285_DebuggingStudio-UsingtheStudioConsole=\"Debugging_Studio.html#30083285_DebuggingStudio-UsingtheStudioConsole\">Using the Studio Console</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083285_DebuggingStudio-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nStudio uses a number of techniques for enabling debugging. If a Studio developer asks you to enable debugging, please follow the steps below.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083285_DebuggingStudio-EnableDebugLogging\">\n<h2 class=\"heading \"><span>Enable Debug Logging</span></h2>\n<ol class=\" \"><li class=\" \"> <p>\nOpen <strong class=\" \">Preferences &gt; Studio &gt; Troubleshooting</strong> </p>\n<img src=\"images/download/attachments/30083285/Screen_Shot_2012-04-22_at_6.26.55_AM.png\" alt=\"images/download/attachments/30083285/Screen_Shot_2012-04-22_at_6.26.55_AM.png\" class=\"confluence-embedded-image\" />\n</li><li class=\" \"> <p>\nChange the severity drop-down to see the desired level of messages written to the log. Caution--&quot;ALL&quot; really does mean all messages!    </p>\n</li><li class=\" \"> <p>\nIf you wish to show only show specific error messages, you can enable &quot;specific component&quot; debugging and check the area in question. If you are unsure, ask a Studio developer to help you find the area you need. Some common areas:    </p>\n<ul class=\" \"><li class=\" \"> <p>\ncom.aptana.core/debug/builder: Writes out when studio starts and stops building projects    </p>\n</li><li class=\" \"> <p>\ncom.aptana.core/debug/shell: Writes out what processes Studio is running on the command line    </p>\n</li></ul></li></ol> </div>\n<div class=\"section section-2 \" id=\"30083285_DebuggingStudio-UsingtheStudioConsole\">\n<h2 class=\"heading \"><span>Using the Studio Console</span></h2>\n<p>\nIf Studio does not appear to work properly, particularly if it crashes during startup, you can try and use the console to figure out what is happening.    </p>\n<ol class=\" \"><li class=\" \"> <p>\nFollow the instructions <a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options\" Adding_Command-Line_Options.html=\"Adding_Command-Line_Options.html\">here</a> for adding a launcher argument.    </p>\n</li><li class=\" \"> <p>\nAdd <strong class=\" \">-console</strong> to the launch arguments for Studio or Eclipse.    </p>\n</li><li class=\" \"> <p>\nAfter the application launches, you'll see a separate console window start. Type ss at the command prompt in this window, and you'll get a list of bundles.    </p>\n</li><li class=\" \"> <p>\nPick the one which is not starting. If you don't see any Studio features at all, you might pick <strong class=\" \">com.aptana.core.ui</strong>; note the bundle number. See if the bundle says &quot;Started&quot;.    </p>\n</li><li class=\" \"> <p>\nIf not, type <strong class=\" \">start #</strong>, replacing <strong class=\" \">#</strong> with the number you just saw above. Note any error message displayed and log that with a support ticket.    </p>\n</li></ol> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Debugging Studio"});