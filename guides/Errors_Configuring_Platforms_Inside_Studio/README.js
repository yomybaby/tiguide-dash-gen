Ext.data.JsonP['Errors_Configuring_Platforms_Inside_Studio']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Errors Configuring Platforms Inside Studio</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30085538\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30085538\"><span>Edit</span></a>\n<h1>Errors Configuring Platforms Inside Studio</h1>\n<div class=\"section section-2 \" id=\"30085538_ErrorsConfiguringPlatformsInsideStudio-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Errors_Configuring_Platforms_Inside_Studio-section-30085538_ErrorsConfiguringPlatformsInsideStudio-Overview\" Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-Overview=\"Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Errors_Configuring_Platforms_Inside_Studio-section-30085538_ErrorsConfiguringPlatformsInsideStudio-iOSSDKversionXXXnotfound\" Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-iOSSDKversionXXXnotfound=\"Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-iOSSDKversionXXXnotfound\">iOS SDK version XXX not found</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Errors_Configuring_Platforms_Inside_Studio-section-30085538_ErrorsConfiguringPlatformsInsideStudio-CouldnotlocatetheAndroidSDKatthegivenpath\" Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-CouldnotlocatetheAndroidSDKatthegivenpath=\"Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-CouldnotlocatetheAndroidSDKatthegivenpath\">Could not locate the Android SDK at the given path</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Errors_Configuring_Platforms_Inside_Studio-section-30085538_ErrorsConfiguringPlatformsInsideStudio-iOSconfigurationissues\" Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-iOSconfigurationissues=\"Errors_Configuring_Platforms_Inside_Studio.html#30085538_ErrorsConfiguringPlatformsInsideStudio-iOSconfigurationissues\">iOS configuration issues</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30085538_ErrorsConfiguringPlatformsInsideStudio-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nErrors while building a mobile project are usually due to configuration issues. The most common problems and possible solutions are posted here.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30085538_ErrorsConfiguringPlatformsInsideStudio-iOSSDKversionXXXnotfound\">\n<h2 class=\"heading \"><span>iOS SDK version XXX not found</span></h2>\n<p>\nThis will happen if you have upgraded your iOS SDKs, and the old one is not available. To fix:    </p>\n<ol class=\" \"><li class=\" \"> <p>\nSelect <strong class=\" \">Run &gt; Run Configurations...</strong> (you will get to the same spot if you choose <strong class=\" \">Debug Configurations...</strong>)    </p>\n</li><li class=\" \"> <p>\nSelect the configuration for the project you are having an issue with.    </p>\n</li><li class=\" \"> <p>\nChoose an available iOS SDK from the list.    </p>\n</li><li class=\" \"> <p>\nSave and close the dialog.    </p>\n</li></ol> </div>\n<div class=\"section section-2 \" id=\"30085538_ErrorsConfiguringPlatformsInsideStudio-CouldnotlocatetheAndroidSDKatthegivenpath\">\n<h2 class=\"heading \"><span>Could not locate the Android SDK at the given path</span></h2>\n<p>\nThis usually appears inside the <strong class=\" \">Preference</strong> dialog inside Studio. Studio runs a Python script to determine your current configuration. To diagnose the exact issue, please try the following:    </p>\n<ol class=\" \"><li class=\" \"> <p>\nTurn on debug logging: <a class=\"document-link \" href=\"#!/guide/Debugging_Studio\" Debugging_Studio.html=\"Debugging_Studio.html\">Debugging Studio</a>, and enable specific component <strong class=\" \">com.aptana.core/debug/shell</strong>.    </p>\n</li><li class=\" \"> <p>\nRe-open the Preference dialog.    </p>\n</li><li class=\" \"> <p>\nOpen the Studio log file (<strong class=\" \">Help &gt; Studio &gt; View Log File</strong>) and scroll to the end.    </p>\n</li><li class=\" \"> <p>\nYou should see a command line invocation of <tt class=\" \">avd.py</tt>, for example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">\"/usr/bin/python\"</code><code class=\"plain\"> </code><code class=\"string\">\"/Library/Application Support/Titanium/mobilesdk/osx/1.8.0.1/android/avd.py\"</code><code class=\"plain\"> </code><code class=\"string\">\"/Users/username/Documents/android\"</code></div>\n</div>\n</div></li><li class=\" \"> <p>\nCopy and paste that complete command line into a terminal window and run it. Check the output. If it doesn't find minimum required Android SDK, the configuration will be marked as invalid.    </p>\n</li></ol> <p>\nIt may be that you don't have an <tt class=\" \">avd.py</tt> script at the location it's looking. To solve that, just install the latest <a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds\" Installing_Titanium_SDK_Continuous_Builds.html=\"Installing_Titanium_SDK_Continuous_Builds.html\">Continuous Build</a>, ensuring that you choose the master branch from the drop-down menu of the download site, and restart Studio.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30085538_ErrorsConfiguringPlatformsInsideStudio-iOSconfigurationissues\">\n<h2 class=\"heading \"><span>iOS configuration issues</span></h2>\n<p>\nThis usually appears inside the <strong class=\" \">Preference</strong> dialog inside Studio. Studio runs some commands to determine your current configuration:    </p>\n<ol class=\" \"><li class=\" \"> <p>\nTo determine the location of your xcode tooling, it runs <tt class=\" \">xcode-select --print-path</tt>.    </p>\n</li><li class=\" \"> <p>\nIt then looks at <tt class=\" \">/Platforms/iPhoneSimulator.platform/Developer/SDKs</tt> underneath that path for the SDK locations.    </p>\n</li><li class=\" \"> <p>\nCurrently, it expects to see <i class=\" \">at least</i> one iOS SDK of version greater than or equal to 4.2 and less than 5.1. You can have more installed than that, but you at least need one within that range.    </p>\n</li></ol> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Errors Configuring Platforms Inside Studio"});