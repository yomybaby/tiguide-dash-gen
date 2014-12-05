Ext.data.JsonP['Installing_Titanium_SDK_Continuous_Builds']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Installing Titanium SDK Continuous Builds</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004843\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004843\"><span>Edit</span></a>\n<h1>Installing Titanium SDK Continuous Builds</h1>\n<div class=\"section section-2 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-Summary\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-Summary=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-Summary\">Summary</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-ObtainingtheBuild\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-ObtainingtheBuild=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-ObtainingtheBuild\">Obtaining the Build</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-InstallingtheBuild\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-InstallingtheBuild=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-InstallingtheBuild\">Installing the Build</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-StudioInstall\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-StudioInstall=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-StudioInstall\">Studio Install</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-ManualInstall\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-ManualInstall=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-ManualInstall\">Manual Install</a> </p>\n</li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Titanium_SDK_Continuous_Builds-section-29004843_InstallingTitaniumSDKContinuousBuilds-SDKArchiveFileStructure\" Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-SDKArchiveFileStructure=\"Installing_Titanium_SDK_Continuous_Builds.html#29004843_InstallingTitaniumSDKContinuousBuilds-SDKArchiveFileStructure\">SDK Archive File Structure</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-Summary\">\n<h2 class=\"heading \"><span>Summary</span></h2>\n<p>\nTo take advantage of bleeding edge functionality and the most recent bug fixes to the Titanium SDKs, without waiting for an official release, you can manually download and install a <strong class=\" \">Continuous Integration Build</strong> (also known as <i class=\" \">CI Build</i> or <i class=\" \">Continuous Build</i>). Continuous Builds are packages compiled and published automatically when <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile\" target=\"_blank\">Titanium's open source repository</a> has received a new code commit.    </p>\n<div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n<p>\nBe aware that only <strong class=\" \">major</strong> releases of any of our software are officially supported and therefore, by the same token, we cannot accept Jira tickets or investigate problems that result from using a Continuous Build. That said, you may find discussions and workarounds for them in our <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org\" target=\"_blank\">Jira bug-tracking system</a> or our community <a class=\"external-link external-link\" href=\"http://developer.appcelerator.com/questions/created\" target=\"_blank\">Q&amp;A</a> forum.    </p>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-ObtainingtheBuild\">\n<h2 class=\"heading \"><span>Obtaining the Build</span></h2>\n<p>\nYou can download the latest continuous builds from <a class=\"external-link external-link\" href=\"http://build.appcelerator.net\" target=\"_blank\">http://build.appcelerator.net</a>.    </p>\n<p>\nUse the drop-down menu at the top of the page to select between the existing development branches. The <i class=\" \">master</i> branch is the branch currently in active development, and will ultimately become a major release. You can determine the version number associated with this branch by hovering over one of the download links and inspecting the name of the file.    </p>\n<div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n<p>\nIt's important to compare the SHA1 hash of the downloaded SDK archive with the one displayed on the download page, <strong class=\" \">before you attempt to install it</strong>. Do not install the package if the SHA1 hashes don't match &ndash; this may indicate a corrupted package.    </p>\n<p>\nIf you discover a corrupt package, simply download each previous day's release until you find one that is valid. There is no need to report it to us.    </p>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-InstallingtheBuild\">\n<h2 class=\"heading \"><span>Installing the Build</span></h2>\n<div class=\"section section-3 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-StudioInstall\">\n<h3 class=\"heading \"><span>Studio Install</span></h3>\n<p>\nTo install a Titanium SDK using Studio, follow these steps:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nusing a browser, right click a SDK archive download link and copy its URL    </p>\n</li><li class=\" \"> <p>\nFrom Studio, select the menu item, <strong class=\" \">Help &gt; Install Titanium SDK</strong> </p>\n</li><li class=\" \"> <p>\nThe<strong class=\" \"> Install </strong>dialog appears. Select <strong class=\" \">Install From URL</strong> </p>\n</li><li class=\" \"> <p>\nPaste the link into textbox, then click <strong class=\" \">Finish</strong> </p>\n</li></ul> </div>\n<div class=\"section section-3 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-ManualInstall\">\n<h3 class=\"heading \"><span>Manual Install</span></h3>\n<p>\n</p>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\nWe strongly recommend that you use Studio to manage SDKs. Please see the previous section.    </p>\n</div>\n<p>\nTo manually install a Titanium SDK, follow these steps:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nExtract the SDK archive file    </p>\n</li><li class=\" \"> <p>\nMove the versioned directory, for example named in the format 1.7.4.v20111021114614, into your Titanium installation folder, which is contingent on your platform, as follows:    </p>\n</li></ul> <p>\n</p>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOperating System    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nTarget Platform Type    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nLocal Path    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOS X (Pre-Lion)    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nMobile    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">/Library/Application Support/Titanium</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOS X (Lion)    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nMobile    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">~/Library/Application Support/Titanium</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows 7    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nMobile    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">%ProgramData%\\Titanium\\mobilesdk\\win32</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows 7    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDesktop    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">%ProgramData%\\Titanium\\sdk\\win32</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows XP    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nMobile    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">C:\\Documents and Settings\\All Users\\Application Data\\Titanium</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nLinux    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nMobile    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">~/.titanium/mobilesdk/</tt> </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nLinux    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDesktop    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">~/.titanium/sdk</tt> </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<p>\n</p>\n<ul class=\" \"><li class=\" \"> <p>\nRestart Studio, open the project's <tt class=\" \">tiapp.xml</tt> file, and select the new SDK from the SDK Version drop-down menu    </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-2 \" id=\"29004843_InstallingTitaniumSDKContinuousBuilds-SDKArchiveFileStructure\">\n<h2 class=\"heading \"><span>SDK Archive File Structure</span></h2>\n<p>\nEspecially in corporate environments, it may be necessary to compile Titanium SDKs and make them available on a server. Be aware that, in order to determine whether a SDK zip archive contains a mobile or desktop SDK, Studio requires that the SDK file structure follows this convention:    </p>\n<p>\n.zip root<br />--&gt;mobilesdk<br />----&gt;osx<br />------&gt;VERSION.NUMBER    </p>\n<p>\nThis must be archived as mobilesdk-VERSION.NUMBER.zip    </p>\n<p>\nor    </p>\n<p>\n.zip root<br />--&gt;sdk<br />----&gt;osx<br />------&gt;VERSION.NUMBER    </p>\n<p>\nThis must be archived as sdk-VERSION.NUMBER.zip    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Installing Titanium SDK Continuous Builds"});