Ext.data.JsonP['Creating_a_New_Titanium_Module']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Creating a New Titanium Module</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083142\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083142\"><span>Edit</span></a>\n<h1>Creating a New Titanium Module</h1>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-Chapters\">\n<h2 class=\"heading \"><span>Chapters</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-PreparingTitaniumStudioforModuleCreation\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-PreparingTitaniumStudioforModuleCreation=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-PreparingTitaniumStudioforModuleCreation\">Preparing Titanium Studio for Module Creation</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-ForAndroidModuleDevelopment\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-ForAndroidModuleDevelopment=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-ForAndroidModuleDevelopment\">For Android Module Development</a> </p>\n</li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-CreatingaNewModule\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-CreatingaNewModule=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-CreatingaNewModule\">Creating a New Module</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-ModuleCreationSteps\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-ModuleCreationSteps=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-ModuleCreationSteps\">Module Creation Steps</a> </p>\n</li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-Building%2FPackagingaModule\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-Building%2FPackagingaModule=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-Building%2FPackagingaModule\">Building/Packaging a Module</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-TroubleshootingBuildErrors\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-TroubleshootingBuildErrors=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-TroubleshootingBuildErrors\">Troubleshooting Build Errors</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-YourAndroidapplicationprojectpathcontainsspaces\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-YourAndroidapplicationprojectpathcontainsspaces=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-YourAndroidapplicationprojectpathcontainsspaces\">Your Android application project path contains spaces</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-Android.ndkpropertyisnotset\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-Android.ndkpropertyisnotset=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-Android.ndkpropertyisnotset\">Android.ndk property is not set</a> </p>\n</li></ul></li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-UsingYourModule\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-UsingYourModule=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-UsingYourModule\">Using Your Module</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Titanium_Module-section-30083142_CreatingaNewTitaniumModule-UploadingyourModuletotheMarketplace\" Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-UploadingyourModuletotheMarketplace=\"Creating_a_New_Titanium_Module.html#30083142_CreatingaNewTitaniumModule-UploadingyourModuletotheMarketplace\">Uploading your Module to the Marketplace</a> </p>\n</li></ul> <p>\nThis guide details the module creation process inside Titanium Studio. For more information on what methods and properties are available as part of the module API and specific platform notes, see the <a class=\"document-link \" href=\"#!/guide/Android_Module_Development_Guide\" Android_Module_Development_Guide.html=\"Android_Module_Development_Guide.html\">Android Module Development Guide</a>. <a class=\"document-link \" href=\"#!/guide/BlackBerry_Module_Development_Guide\" BlackBerry_Module_Development_Guide.html=\"BlackBerry_Module_Development_Guide.html\">BlackBerry Module Development Guide</a> and <a class=\"document-link \" href=\"#!/guide/iOS_Module_Development_Guide\" iOS_Module_Development_Guide.html=\"iOS_Module_Development_Guide.html\">iOS Module Development Guide</a>.    </p>\n<div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n<p>\nThis feature requires Titanium Studio 1.0.7 or later. If you need help updating, please see <a class=\"external-link external-link\" href=\"http://preview.appcelerator.com\" target=\"_blank\">http://preview.appcelerator.com</a> for more information    </p>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-PreparingTitaniumStudioforModuleCreation\">\n<h2 class=\"heading \"><span>Preparing Titanium Studio for Module Creation</span></h2>\n<p>\nIf you are going to be creating Android modules, you will need to install Java support inside Titanium Studio. See <a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools\" Installing_the_Java_Development_Tools.html=\"Installing_the_Java_Development_Tools.html\">Installing the Java Development Tools</a> for the brief steps if you have not already done so.    </p>\n<div class=\"section section-3 \" id=\"30083142_CreatingaNewTitaniumModule-ForAndroidModuleDevelopment\">\n<h3 class=\"heading \"><span>For Android Module Development</span></h3>\n<p>\nYou will need to install the Android NDK. Download the appropriate .zip file from <a class=\"external-link external-link\" href=\"http://developer.android.com/sdk/ndk/index.html\" target=\"_blank\">http://developer.android.com/sdk/ndk/index.html</a> and extract it to some location on disk. Remember this location.    </p>\n<div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n<p>\nAs an additional note, you need to make sure the path to your Titanium Studio workspace does not contain spaces. See <a class=\"document-link \" href=\"#!/guide/Switching_your_Workspace\" Switching_your_Workspace.html=\"Switching_your_Workspace.html\">Switching your Workspace</a> for how to switch your workspace location. You can then import your projects from the old to the new workspace. This is a limitation of the Android NDK    </p>\n</div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-CreatingaNewModule\">\n<h2 class=\"heading \"><span>Creating a New Module</span></h2>\n<p>\nCreating a new module is accomplished by running through a wizard. Below summarizes the properties required, and a description of the values.    </p>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"></thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nProperty    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription/Purpose    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nmoduleid    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is a read-only module id of your module that is generated when you created your project. You should not edit this value. NOTE: you must generate a unique id. We recommend using your reverse-DNS company name + module_name as a pattern to guarantee uniqueness. The Titanium Marketplace will only allow unique module ids when distributing modules. If you must edit this value, you must also edit the value in your module implementation file.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nversion    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is the version of your module. You should change this value each time you make major changes and distribute them. Version should be in the dotted notation (X.Y.Z) and must not con-tain any spaces or non-number characters.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\ndescription    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is a human-readable description of your module. It should be short and suitable for display next to your module name.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nauthor    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is a human-readable author name you want to display next to your module. It can simply be your personal name or an organizational name such as &quot;Appcelerator&quot;.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nlicense    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is a human-readable name of your license. You should use a short description such as &quot;Apache Public License&quot; or &quot;Commercial&quot;.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\ncopyright    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nThis is a human-readable copyright string for your module. For example, &quot;Copyright (c) 2010 by Appcelerator, Inc.&quot;    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<div class=\"section section-3 \" id=\"30083142_CreatingaNewTitaniumModule-ModuleCreationSteps\">\n<h3 class=\"heading \"><span>Module Creation Steps</span></h3>\n<ol class=\" \"><li class=\" \"> <p>\nOpen <strong class=\" \">File &gt; New &gt; Mobile Module Project</strong>.    </p>\n</li><li class=\" \"> <p>\nChoose a project name, a module ID, and a deployment target (native platform).    </p>\n</li><li class=\" \"> <p>\nClick <strong class=\" \">Next</strong>.    </p>\n</li><li class=\" \"> <p>\nFill out the remainder of the items on the next page.    </p>\n</li><li class=\" \"> <p>\nClick <strong class=\" \">Finish</strong>.    </p>\n<img src=\"images/download/attachments/30083142/New_Titanium_Mobile_Module_Project_2.png\" alt=\"images/download/attachments/30083142/New_Titanium_Mobile_Module_Project_2.png\" class=\"confluence-embedded-image\" />\n</li></ol> <p>\nYour module is created. Note the two different folder structures, depending on the platform.    </p>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\nYou may need to refresh your project to show missing files. See related ticket <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org/browse/TISTUD-948\" target=\"_blank\">http://jira.appcelerator.org/browse/TISTUD-948</a>. For Android, you may also need to manually add JARs to your build path. See related ticket <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org/browse/TIMOB-6839\" target=\"_blank\">http://jira.appcelerator.org/browse/TIMOB-6839</a> for the workaround.    </p>\n</div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-Building/PackagingaModule\">\n<h2 class=\"heading \"><span>Building/Packaging a Module</span></h2>\n<p>\nChoose <strong class=\" \">Deploy</strong> &gt; <strong class=\" \">Package - iOS</strong> <strong class=\" \">Module </strong>or <strong class=\" \">Package - Android Module</strong>.   You cannot build BlackBerry module using Studio--either use the BlackBerry NDK CLI tools or the Momentics IDE.    </p>\n<p>\n<img src=\"images/download/attachments/30083142/Screen_Shot_2011-11-08_at_9.48.29_PM.png\" alt=\"images/download/attachments/30083142/Screen_Shot_2011-11-08_at_9.48.29_PM.png\" class=\"confluence-embedded-image confluence-content-image-border\" />\n</p>\n<p>\nYou may then choose to deploy the module for all projects, or for a specific project. This follows the installation rules as noted in <a class=\"document-link \" href=\"#!/guide/Using_Titanium_Modules\" Using_Titanium_Modules.html=\"Using_Titanium_Modules.html\">Using Titanium Modules</a>, though to summarize:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nFor all projects: the module .zip file is dropped at the root of the the Titanium SDK installation location.    </p>\n</li><li class=\" \"> <p>\nFor a particular project: The module .zip file is dropped at the root of your project.    </p>\n</li></ul> <div class=\"section section-3 \" id=\"30083142_CreatingaNewTitaniumModule-TroubleshootingBuildErrors\">\n<h3 class=\"heading \"><span>Troubleshooting Build Errors</span></h3>\n<div class=\"section section-4 \" id=\"30083142_CreatingaNewTitaniumModule-YourAndroidapplicationprojectpathcontainsspaces\">\n<h4 class=\"heading \"><span>Your Android application project path contains spaces</span></h4>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">[exec] Android NDK: Your Android application project path contains spaces: </code><code class=\"string\">'/Users/username/Documents/Aptana Studio 3 Workspace/testModule/build/generated'</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">[exec] Android NDK: The Android NDK build cannot work here. Please move your project to a different location.   </code></div>\n<div class=\"line\"><code class=\"plain\">[exec] /Users/username/Documents/android-ndk-r7/build/core/build-local.mk:</code><code class=\"value\">109</code><code class=\"plain\">: *** Android NDK: Aborting.    .  Stop.</code></div>\n</div>\n</div> <p>\nYou need to change your Studio workspace to not have spaces in the path. See the top of the page for information on how to do that.    </p>\n</div>\n<div class=\"section section-4 \" id=\"30083142_CreatingaNewTitaniumModule-Android.ndkpropertyisnotset\">\n<h4 class=\"heading \"><span>Android.ndk property is not set</span></h4>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">BUILD FAILED</code></div>\n<div class=\"line\"><code class=\"plain\">/Library/Application Support/Titanium/mobilesdk/osx/</code><code class=\"value\">1.8</code><code class=\"plain\">.</code><code class=\"value\">0.1</code><code class=\"plain\">/module/android/build.xml:</code><code class=\"value\">192</code><code class=\"plain\">: The following error occurred </code><code class=\"keyword\">while</code><code class=\"plain\"> executing </code><code class=\"keyword\">this</code><code class=\"plain\"> line:</code></div>\n<div class=\"line\"><code class=\"plain\">/Library/Application Support/Titanium/mobilesdk/osx/</code><code class=\"value\">1.8</code><code class=\"plain\">.</code><code class=\"value\">0.1</code><code class=\"plain\">/module/android/build.xml:</code><code class=\"value\">175</code><code class=\"plain\">: Neither the ANDROID_NDK environment variable, or the android.ndk property is not set to an existing Android NDK installation (check your module's build.properties)</code></div>\n</div>\n</div> <p>\nIf you see this, you need to add android.ndk to the build.properties file. Set it to the path where you installed the NDK to begin with.    </p>\n</div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-UsingYourModule\">\n<h2 class=\"heading \"><span>Using Your Module</span></h2>\n<p>\nTitanium Studio 1.1 will include functionality for automatically adding your module to your project. In the interim, follow the instructions in <a class=\"document-link \" href=\"#!/guide/Using_Titanium_Modules\" Using_Titanium_Modules.html=\"Using_Titanium_Modules.html\">Using Titanium Modules</a> for more information.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083142_CreatingaNewTitaniumModule-UploadingyourModuletotheMarketplace\">\n<h2 class=\"heading \"><span>Uploading your Module to the Marketplace</span></h2>\n<p>\nTo distribute your module through the Titanium+Plus Marketplace, you'll first need to package normally. Once you have tested your module locally and are ready to distribute it, you can then submit it to the marketplace for distribution. There are several prerequisites you'll need before you can distribute:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nYou must have a valid Appcelerator developer account.    </p>\n</li><li class=\" \"> <p>\nYou must have fully completed filling our your manifest values.    </p>\n</li><li class=\" \"> <p>\nYou must have a valid license text in the LICENSE file in your project.    </p>\n</li><li class=\" \"> <p>\nYou must have a valid documentation file in the index.md file in your documentation directory of your project.    </p>\n</li><li class=\" \"> <p>\nYou must specify some additional metadata upon upload such as the price (which can be free).    </p>\n</li><li class=\" \"> <p>\nIf you are charging for your module, you must establish a payment setup with Appcelerator so we can pay you.    </p>\n</li><li class=\" \"> <p>\nYou must accept the Titanium+Plus Marketplace terms of service agreement.    </p>\n</li><li class=\" \"> <p>\nOnce you have upload your module and completed the necessary submission steps, your module will be queued for submission and availability in the marketplace directory.    </p>\n</li></ul> <p>\nThe first time you submit a module, we will review your module for the basic requirements above. However, once approved, your module(s) will be immediately submitted without subsequent approval required.    </p>\n<p>\nStart by visiting the <a class=\"external-link external-link\" href=\"https://marketplace.appcelerator.com\" target=\"_blank\">Open Module Marketplace</a>.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Creating a New Titanium Module"});