Ext.data.JsonP['PyDev_Launching']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>PyDev Launching</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083058\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083058\"><span>Edit</span></a>\n<h1>PyDev Launching</h1>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-Launching/DebuggingPythonscripts\">\n<h2 class=\"heading \"><span>Launching/Debugging Python scripts</span></h2>\n</div>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-RegularLaunch\">\n<h2 class=\"heading \"><span>Regular Launch</span></h2>\n<p>\nThe easiest way of launching a python file from PyDev is opening an editor and using the <strong class=\" \">F9 keybinding</strong>. Through that command, PyDev will create/reuse a <strong class=\" \">launch</strong> config to run the current editor based on the <strong class=\" \">current settings of the project</strong> (i.e.: if the project is configured as IronPython, it'll use an IronPython interpreter).    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/f9.png\" alt=\"images/pydev.org/images/debugger/f9.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Another option would be running using the <strong class=\" \">context menu</strong>, where you can choose how you want to make the run (in that way, you could run a python project with a jython interpreter)    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/run_as_regular.png\" alt=\"images/pydev.org/images/debugger/run_as_regular.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n</p>\n</div>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-UnitTestLaunch\">\n<h2 class=\"heading \"><span>Unit Test Launch</span></h2>\n<p>\nIf you use <strong class=\" \">unit-tests</strong>, and want to run only a single unit-test or a few unit-tests of a module, you can use the <strong class=\" \">Ctrl+F9 keybinding</strong>, which will open a tree where you can choose which test(s) you want to run:    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/ctrl_f9.png\" alt=\"images/pydev.org/images/debugger/ctrl_f9.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />In that dialog, there are some options:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nExtending the filter and pressing 'Enter' will run the filtered tests    </p>\n</li><li class=\" \"> <p>\nExplicitly selecting the class/tests to run will run those tests    </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-DebugLaunch\">\n<h2 class=\"heading \"><span>Debug Launch</span></h2>\n<p>\nTo run in debug mode, you can use the <strong class=\" \">context menu</strong>, where you can choose how you want to make the debug (note that in that way, you could debug a python project with a jython interpreter)    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/run_as_debug.png\" alt=\"images/pydev.org/images/debugger/run_as_debug.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Another option would be running the last launch in debug mode. See: `Rerun Last Launch (regular or debug mode)`_    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-RerunLastLaunch(regularordebugmode)\">\n<h2 class=\"heading \"><span>Rerun Last Launch (regular or debug mode)</span></h2>\n<p>\nIf you use the F9 and Ctrl+F9 keybindings or launch through the context menu, usually you'll also want to check the default eclipse preferences so that <strong class=\" \">Ctrl+F11</strong> and <strong class=\" \">F11</strong> will run your last configuration (otherwise, they'll bring a dialog to run/debug your current editor, which is mostly what's already given by PyDev through F9 and Ctrl+F9).    </p>\n<p>\nTo do that, open the eclipse preferences (<strong class=\" \">window &gt; preferences</strong>) and check <strong class=\" \">&quot;Always launch previously launched application&quot;</strong>, that way, when you use <strong class=\" \">F11</strong>, your last launch will be repeated in <strong class=\" \">debug mode</strong> and with <strong class=\" \">Ctrl+F11</strong>, it'll be relaunched in the <strong class=\" \">regular mode</strong>.    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/launching_dialog.png\" alt=\"images/pydev.org/images/debugger/launching_dialog.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Another option would be running the last launch from the menu. You can go to the menu with keybindings (<strong class=\" \">Alt+R, then 'T' regular run or 'H' for debug run</strong>) and choose some existing launch to be run.    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/run_history.png\" alt=\"images/pydev.org/images/debugger/run_history.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n</p>\n</div>\n<div class=\"section section-2 \" id=\"30083058_PyDevLaunching-Debugging\">\n<h2 class=\"heading \"><span>Debugging</span></h2>\n<p>\nCurrently the debugger supports:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nStep in: <strong class=\" \">F5</strong> </p>\n</li><li class=\" \"> <p>\nStep over: <strong class=\" \">F6</strong> </p>\n</li><li class=\" \"> <p>\nStep return: <strong class=\" \">F7</strong> </p>\n</li><li class=\" \"> <p>\nContinue: <strong class=\" \">F8</strong> </p>\n</li><li class=\" \"> <p>\nBreakpoints (with optional condition)    </p>\n</li><li class=\" \"> <p>\nStack view showing multiple threads    </p>\n</li><li class=\" \"> <p>\nLocals and Globals variable display    </p>\n</li><li class=\" \"> <p>\nExpressions display    </p>\n</li><li class=\" \"> <p>\nTemporary display for selection: <strong class=\" \">Ctrl+Shift+D</strong> </p>\n</li><li class=\" \"> <p>\nHover showing the selected expression evaluation    </p>\n</li></ul> <p>\nTo add breakpoints, you can double click the left bar or use Ctrl+F10 &gt; Add breakpoint. In a line with an existing breakpoint Ctrl+F10 will be able to remove the breakpoint, disable it and edit its properties (which can be used to provide conditions for the breakpoint to be hit). Double-clicking an existing breakpoint will remove it.    </p>\n<p>\nWhen you hit a breakpoint, you'll get a view that allows you to inspect the stack, see locals and globals, hover over variables (or select a text to be evaluated) and add expressions.    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/debug_perspective.png\" alt=\"images/pydev.org/images/debugger/debug_perspective.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Note that the program output is displayed in the console, and the errors in the console are hyperlinked back to the file:    </p>\n<p>\n<img src=\"images/pydev.org/images/debugger/hyperlink.png\" alt=\"images/pydev.org/images/debugger/hyperlink.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n</p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"PyDev Launching"});