Ext.data.JsonP['PyDev_Running_a_program']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>PyDev Running a program</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083051\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083051\"><span>Edit</span></a>\n<h1>PyDev Running a program</h1>\n<p>\nOk, now that you're already up and running, let's <strong class=\" \">run a program from within Eclipse</strong> with PyDev.    </p>\n<p>\nFor that, we will extend the module we created in the previous chapter with the following program:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> __name__ </code><code class=\"keyword\">=</code><code class=\"keyword\">=</code><code class=\"plain\"> </code><code class=\"string\">'__main__'</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">print</code><code class=\"plain\"> </code><code class=\"string\">'Hello World'</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n</div>\n</div> <p>\nThen, to run the file you can:    </p>\n<ul class=\"alternate \"><li class=\" \"> <p>\nUse a shortcut: <strong class=\" \">F9</strong> to run based on the project configuration where the module is contained.    </p>\n</li><li class=\" \"> <p>\nGo to the menu: Alt + R + S + The number of the Run you wish (It can be Python, Jython, unit-test, etc).    </p>\n</li><li class=\" \"> <p>\nNote: if you were using <strong class=\" \">unit-tests</strong>, you could use: <strong class=\" \">Ctrl+F9</strong> to run the unit-tests from the module (and even selecting which tests should be run).    </p>\n</li></ul> <p>\n<strong class=\" \">NOTE</strong>:    </p>\n<blockquote>\n<p>\nExternal files may be launched, but an associated project must be available. So, a file may be dragged from the filesystem into Eclipse and later, with the editor open F9 may be pressed to run the file...    </p>\n<p>\nIt'll still ask for a project to resolve the PYTHONPATH and interpreter to be used (you can probably just use any project you have that has the interpreter you want to use for the run or create a PyDev project as 'external_projects' and bind those runs to it).    </p>\n<p>\n&ndash; The configuration created may be changed later on in the menu: Run &gt; Run configurations.    </p>\n</blockquote>\n<p>\n<img src=\"images/pydev.org/images/menu_run.png\" alt=\"images/pydev.org/images/menu_run.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Doing so, the console should be brough forward with the output of the code (if you had some exception raised, clicking on it would bring you to the code in the stack-trace).    </p>\n<p>\nAfter the first run, if you type <strong class=\" \">Ctrl+F11</strong>, the last file ran is re-run. Or, if you type just <strong class=\" \">F11</strong>, a debug session is started with your last run. Let's test this...    </p>\n<p>\n<strong class=\" \">Note</strong>: This behavior changed in Eclipse 3.3 &ndash; but it's generally recommended to restore it in the preferences at: <strong class=\" \">window &gt; preferences &gt; Run/Debug &gt; Launching</strong> and set the Launch Operation to <strong class=\" \">Always launch the previously launched application</strong>. This tutorial will always consider this as the default option.    </p>\n<p>\nFirst, you'll need to add a breakpoint in the &quot;print 'Hello World'&quot; line. To do so, go to the line and type <strong class=\" \">Ctrl+F10</strong> and select 'Add breakpoint', then type <strong class=\" \">F11</strong>. Doing so, will trigger you to go to the 'debug perspective'. You should say <strong class=\" \">'yes'</strong> to this dialog.    </p>\n<p>\n<img src=\"images/pydev.org/images/perspective_to_debug.png\" alt=\"images/pydev.org/images/perspective_to_debug.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />After saying yes, you should be brought to the perspective below.    </p>\n<p>\n<img src=\"images/pydev.org/images/debug_perspective.png\" alt=\"images/pydev.org/images/debug_perspective.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />In this perspective, the debug actions are activated and presented to<br />you, so, you can use:    </p>\n<p>\n<strong class=\" \">F5</strong>: Step into    </p>\n<p>\n<strong class=\" \">F6</strong>: Step over    </p>\n<p>\n<strong class=\" \">F7</strong>: Step return    </p>\n<p>\n<strong class=\" \">F8</strong>: Resume execution    </p>\n<p>\nAfter the debug session, you can return to the previous perspective by typing <strong class=\" \">'Ctrl+F8'</strong> (this keybinding iterates through the open perspectives)... And while we are at it, <strong class=\" \">'Ctrl+F7'</strong> iterates through the views and <strong class=\" \">'Ctrl+F6'</strong> iterates through the editors.    </p>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"PyDev Running a program"});