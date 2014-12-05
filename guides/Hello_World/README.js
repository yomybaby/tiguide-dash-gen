Ext.data.JsonP['Hello_World']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Hello World</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004884\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004884\"><span>Edit</span></a>\n<h1>Hello World</h1>\n<div class=\"section section-2 \" id=\"29004884_HelloWorld-Objective\">\n<h2 class=\"heading \"><span>Objective</span></h2>\n<p>\nIn this section, you'll take a focused look at creating Mobile applications using Studio and the Titanium SDK. This section sets the stage for the remainder of this book, during which we'll dig deep into the various aspects of creating mobile applications with the Titanium SDK.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004884_HelloWorld-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\nBefore we can build our first app, we need to create a mobile project in Studio. During this process, we'll discuss the following critical aspects of mobile projects:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nThe meta-information necessary for project creation    </p>\n</li><li class=\" \"> <p>\nThe default project structure    </p>\n</li><li class=\" \"> <p>\nLaunching projects in the simulator/emulator    </p>\n</li></ul> <div class=\"section section-3 \" id=\"29004884_HelloWorld-CreatingaNewMobileProject\">\n<h3 class=\"heading \"><span>Creating a New Mobile Project</span></h3>\n<p>\nYou can create a new project in Studio one fo two ways:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nFrom the menu, select <strong class=\" \">File &gt; New &gt; Mobile App Project</strong> </p>\n</li><li class=\" \"> <p>\nFrom the toolbar, click the<strong class=\" \"> New Project</strong> button         <img src=\"images/download/attachments/29004884/NewProjectButton.png\" alt=\"images/download/attachments/29004884/NewProjectButton.png\" class=\"confluence-embedded-image\" />\n     and select <strong class=\" \">Mobile App Project.</strong> </p>\n</li></ul> <p>\nThe <strong class=\" \">New Mobile Project</strong> wizard appears.  The first step is to select a project template (in the <strong class=\" \">Project Template</strong> window).  You can choose between:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Alloy</strong> &ndash; create a Mobile project utilizing the Titanium MVC framework called Alloy    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Classic</strong> &ndash; create a classic Titanium project with no defined framework    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Other</strong> &ndash; create a specialized mobile project    </p>\n</li></ul> <p>\nIn the <strong class=\" \">Project Location</strong> window, you'll need to fill in the following fields:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Project name</strong> &ndash; Your app's name as seen by users.    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">App Id</strong> &ndash; Titanium SDK's version of the Android Application Package Name or CF Bundle Identifier. <a class=\"document-link \" href=\"#!/guide/Hello_World-section-29004884_HelloWorld-appidrules\" Hello_World.html#29004884_HelloWorld-appidrules=\"Hello_World.html#29004884_HelloWorld-appidrules\">See below</a> for guidelines and rules for App ID names.    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Company/Personal URL</strong> </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Titanium SDK Version </strong>&ndash; select the Titanium SDK to use for your project.    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Deployment Targets</strong> &ndash; you can create a single project to target.    </p>\n</li></ul> <p>\nOnce this is complete, Studio creates a default project structure for you, based on the given meta-information.    </p>\n<p>\n<img src=\"images/download/attachments/29004884/Screen_shot_2011-08-22_at_8.49.02_AM.png\" alt=\"images/download/attachments/29004884/Screen_shot_2011-08-22_at_8.49.02_AM.png\" class=\"confluence-embedded-image\" />\n</p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Resources</strong> folder &ndash; your project's code files and graphics are stored in this folder    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">app.js</strong> &ndash; your project's bootstrap file. Every project has one; it's the file loaded first when your app is launched    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">tiapp.xml</strong> &ndash; The details you enter in the new project wizard are used to populate the <tt class=\" \">tiapp.xml</tt> file and the manifest file.    </p>\n</li></ul> <p>\nThose are basically the only required files, but you can augment the project with others. For example, you don't have to put all of your code into <tt class=\" \">app.js</tt>. (Later in this guide, we'll show one method for dividing up code into multiple files.) You could put all your graphics in the <tt class=\" \">Resources</tt> folder, or you could put them into subfolders. We'll dig more deeply into cross-platform development later, but the <tt class=\" \">android</tt> and <tt class=\" \">iphone</tt> directories within Resources are locations for your platform-specific assets.    </p>\n<p>\n<span id=\"29004884_HelloWorld-appidrules\"><a class=\"confluence-anchor-link\" name=\"29004884_HelloWorld-appidrules\"></a></span>\n</p>\n<div class=\"section section-4 \" id=\"29004884_HelloWorld-AppIDNamingGuidelines\">\n<h4 class=\"heading \"><span>App ID Naming Guidelines</span></h4>\n<p>\nAn App ID must be unique across all apps installed on a device. For published apps, the name must be unique across the entire App Store / Market. Therefore, we recommend you use the Java Package Name style when assigning your App ID. Following this format, you enter a name in reverse domain name format with your app's name at the end (i.e., com.yourdomain.yourappname). While technically valid, a one-word App ID (such as &quot;testapp&quot;) will cause build errors.    </p>\n<p>\nSome additional points:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nYou cannot include spaces or special characters in your App ID.    </p>\n</li><li class=\" \"> <p>\nUse all lowercase, as uppercase or mixed case could cause errors on Android.    </p>\n</li><li class=\" \"> <p>\nYou cannot use any Java keywords in the App ID &ndash; words like 'case' or 'package' will cause an error that will prevent Titanium from building your app.    </p>\n</li><li class=\" \"> <p>\nYou cannot change the App ID once you publish an app because the App Store / Market would consider the change to mean you're publishing a new app, not an upgrade.    </p>\n</li><li class=\" \"> <p>\nThe App ID is related to the Bundle Identifier you define in the iOS Provisioning Portal / iTunes Connect, see <a class=\"document-link \" href=\"#!/guide/Distributing_iOS_apps\" Distributing_iOS_apps.html=\"Distributing_iOS_apps.html\">Distributing iOS apps</a> for more info.    </p>\n</li></ul> <p>\n(On Android, the App ID is technically an Application Package Name, not a Java Package Name. See <a class=\"external-link external-link\" href=\"http://blog.javia.org/android-package-name/\" target=\"_blank\">http://blog.javia.org/android-package-name/</a> for further info on the distinction.)    </p>\n</div>\n</div>\n<div class=\"section section-3 \" id=\"29004884_HelloWorld-RunningYourApp\">\n<h3 class=\"heading \"><span>Running Your App</span></h3>\n<p>\nTo build and run your app, simply click the <strong class=\" \">Run</strong> button         <img src=\"images/download/attachments/29004884/RunButton.png\" alt=\"images/download/attachments/29004884/RunButton.png\" class=\"confluence-embedded-image\" />\n     as shown in the following graphic. Then, choose the appropriate target.    </p>\n</div>\n<div class=\"section section-3 \" id=\"29004884_HelloWorld-Simulator/Emulator\">\n<h3 class=\"heading \"><span>Simulator/Emulator</span></h3>\n<p>\nIt's more than simple semantics, but with iOS the desktop software that runs your app is called a simulator; on Android, it's an emulator. Whether writing a native Objective-C app or a Mobile app, your iPhone/iPad code is cross-compiled and turned into an OS X executable. It's then run by OS X, simulating the environment within an iOS device. With Android, the emulator provides a virtual hardware environment that runs the actual Android operating system, platform components, and your app's code.    </p>\n<p>\nWith both platforms, the test environment isn't a perfect representation of the actual mobile device. Some subtle (and not-so-subtle) differences will present themselves. You should always test your app on a physical device before publishing it.    </p>\n<p>\nWe'll try to be generic in this guide by saying simulator/emulator when referring to the virtual software device thingie. But, forgive us if we say simulator or emulator alone.    </p>\n</div>\n<div class=\"section section-3 \" id=\"29004884_HelloWorld-UndertheCovers\">\n<h3 class=\"heading \"><span>Under the Covers</span></h3>\n<p>\nLet's take a high-level look at how your source code is turned into a native app. Titanium's tools include a pre-compiler, front-end compiler, and a set of Node.js build scripts that interact with the native SDK tools.    </p>\n<p>\nTo start, Titanium precompiles your JavaScript to minify it. Titanium's pre-compiler statically analyzes your code and builds a dependency hierarchy of all the Titanium APIs used by your application. The front-end compiler's job is to create native stub files. These stubs include appropriate platform-specific native code, a native project file (if necessary), and any specific code that is necessary to compile Titanium code for a given platform compiler. Finally, Titanium calls out to the platform-specific compiler tools (for example, xcodebuild for iOS) to compile the final native application.    </p>\n<p>\nOn the iOS side, your JavaScript is Base64 encoded, inlined as a variable in a C file, and is then compiled. Your JavaScript is not converted to Objective-C. It remains Javascript and is interpreted at runtime using the JavaScriptCore interpreter. On Android, your JavaScript is precompiled to bytecode. At runtime, your code is interpreted by the Rhino/V8 JavaScript interpreter. In both cases, your original code is not retrievable in any sort of human-readable form.    </p>\n</div>\n<div class=\"section section-3 \" id=\"29004884_HelloWorld-Hands-onPractice\">\n<h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n<div class=\"section section-4 \" id=\"29004884_HelloWorld-Goal\">\n<h4 class=\"heading \"><span>Goal</span></h4>\n<p>\nIn this activity, you will create a default project and examine the resulting files.    </p>\n</div>\n<div class=\"section section-4 \" id=\"29004884_HelloWorld-Steps\">\n<h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \"> <p>\nIn Studio, use the New Mobile Project wizard to create a new classic Mobile project. Create a test project named HelloWorld with an app ID of com.<i class=\" \">yourname</i>.helloworld. Select appropriate build targets (e.g. iPhone and/or Android).    </p>\n</li><li class=\" \"> <p>\nOnce the project is created, close the tiapp.xml file.    </p>\n</li><li class=\" \"> <p>\nExamine the code of the app.js file. The default project creates a simple two-tab application. Each tab contains a window. Each window contains a label.    </p>\n</li><li class=\" \"> <p>\nUpdate the label on window 1 to read 'Hello World!' and save your changes.    </p>\n</li><li class=\" \"> <p>\nClick the Run button, then choose the appropriate build target.    </p>\n</li><li class=\" \"> <p>\nTest the application in the simulator/emulator. Close the simulator when you're done.    </p>\n</li><li class=\" \"> <p>\nUsing Finder/Explorer, examine the project files created by Studio.    </p>\n</li></ol> </div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"29004884_HelloWorld-Summary\">\n<h2 class=\"heading \"><span>Summary</span></h2>\n<p>\nIn this chapter, you took a brief look at creating Mobile applications. In the remainder of this course, we'll dig deep into the various aspects of creating mobile applications with the Titanium SDK, such as user interface construction, networking, localization, and much more.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Hello World"});