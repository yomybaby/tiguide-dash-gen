Ext.data.JsonP['Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Setting up an external web server to preview PHP and other non-HTML pages</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083123\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083123\"><span>Edit</span></a>\n<h1>Setting up an external web server to preview PHP and other non-HTML pages</h1>\n<p>\nTo preview PHP pages and have them rendered appropriately you need a web server, such as <a class=\"external-link external-link\" href=\"http://www.apachefriends.org/en/xampp.html\" target=\"_blank\">XAMPP</a>, which can serve PHP pages. If you are using OS X or Linux, you may be able to use the pre-bundled web server that comes with the operating system, or you can download XAMPP too. In either case, the instructions will be relatively similar.    </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-InstallXAMPP\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-InstallXAMPP=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-InstallXAMPP\">Install XAMPP</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Setupyourproject\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Setupyourproject=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Setupyourproject\">Set up your project</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createanewproject\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createanewproject=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createanewproject\">Create a new project</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Importanexistingproject\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Importanexistingproject=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Importanexistingproject\">Import an existing project</a> </p>\n</li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createyourpreviewserver\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createyourpreviewserver=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createyourpreviewserver\">Create your preview server</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Starttheexternalserver\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Starttheexternalserver=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Starttheexternalserver\">Start the external server</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages-section-30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Previewyourfiles\" Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Previewyourfiles=\"Setting_up_an_external_web_server_to_preview_PHP_and_other_non-HTML_pages.html#30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Previewyourfiles\">Preview your files</a> </p>\n</li></ul> <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n<p>\n</p>\n<p>\nIf you are currently running IIS (which runs on Port 80 by default), make sure you don't have a Port conflict when you set up the web server. If your web server uses Port 80, you can stop IIS in order to use this port for your web server.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-InstallXAMPP\">\n<h2 class=\"heading \"><span>Install XAMPP</span></h2>\n<p>\n<a class=\"external-link external-link\" href=\"http://www.apachefriends.org/en/xampp.html\" target=\"_blank\">Download XAMPP</a> (or the web server of your choice) and install it on your computer according to the installation instructions. For XAMPP, it will create a document root (by default), in the following locations:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nWindows: \\xampp\\htdocs    </p>\n</li><li class=\" \"> <p>\nOS X: /Applications/XAMPP/htdocs/    </p>\n</li><li class=\" \"> <p>\nLinux: /opt/lampp/htdocs/    </p>\n</li></ul> <p>\nIf you decide to use a different install location (or a different server) the above paths may be somewhat different, but make note of the document root as it will become important in the next step.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Setupyourproject\">\n<h2 class=\"heading \"><span>Set up your project</span></h2>\n<p>\nYou can either create a new project to hold your content, or move an existing project into the new location.    </p>\n<div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n<p>\n</p>\n<p>\nWe create a sub-folder under the <strong class=\" \">htdocs</strong> root. This is to allow for multiple projects to be previewed with the same server. If you wish, you can place your project directly in the root of the web server, but note that if you delete the project, and select to &quot;delete files on disk&quot; it will <strong class=\" \">delete the entire directory and all contents.</strong> </p>\n</div>\n<div class=\"section section-3 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createanewproject\">\n<h3 class=\"heading \"><span>Create a new project</span></h3>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\n</p>\n<p>\nFor the purposes of this document, we will refer to a project named <strong class=\" \">myproject</strong>. Replace this with the name of your actual project.    </p>\n</div>\n<ol class=\" \"><li class=\" \"> <p>\nFrom the <strong class=\" \">File</strong> menu, select <strong class=\" \">New &gt; Project... &gt; Web Project</strong> (or <strong class=\" \">PHP Project</strong>) in the project wizard.    </p>\n</li><li class=\" \"> <p>\nType a name for your project.    </p>\n</li><li class=\" \"> <p>\nUncheck the <strong class=\" \">Use default location box</strong> and browse to the <strong class=\" \">htdocs</strong> (or equivalent) folder in your server installation directory.    </p>\n</li><li class=\" \"> <p>\nCreate a new folder in that directory with the same name as your project and select that new folder for your project location (shown below). Using the above paths, that would equate to <i class=\" \">\\xampp\\htdocs\\myproject</i> on Windows, or <i class=\" \">/Applications/XAMPP/htdocs/myproject</i> on OSX    </p>\n<img src=\"images/download/attachments/30083123/XamppProject.png\" alt=\"images/download/attachments/30083123/XamppProject.png\" class=\"confluence-embedded-image\" />\n</li><li class=\" \"> <p>\nContinue on to choose a project template, or Click the <strong class=\" \">Finish</strong> button.    </p>\n</li></ol> </div>\n<div class=\"section section-3 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Importanexistingproject\">\n<h3 class=\"heading \"><span>Import an existing project</span></h3>\n<ol class=\" \"><li class=\" \"> <p>\nIn Finder, Windows Explorer, or equivalent, copy the files from their current location into a sub-folder under the <strong class=\" \">htdocs</strong> (or equivalent) folder in your server installation directory. Using the above paths, that would equate to <i class=\" \">\\xampp\\htdocs\\myproject</i> on Windows, or <i class=\" \">/Applications/XAMPP/htdocs/myproject</i> on OSX.    </p>\n</li><li class=\" \"> <p>\nFollow the steps here <a class=\"document-link \" href=\"#!/guide/Importing_an_Existing_Project\" Importing_an_Existing_Project.html=\"Importing_an_Existing_Project.html\">Importing an Existing Project</a> </p>\n</li></ol> </div>\n</div>\n<div class=\"section section-2 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Createyourpreviewserver\">\n<h2 class=\"heading \"><span>Create your preview server</span></h2>\n<p>\n<i class=\" \">A more detailed discussion of this step can be found at <a class=\"document-link \" href=\"#!/guide/Creating_a_Custom_Preview_Server\" Creating_a_Custom_Preview_Server.html=\"Creating_a_Custom_Preview_Server.html\">Creating a Custom Preview Server</a></i> </p>\n<ol class=\" \"><li class=\" \"> <p>\nRight-click on a project in the &quot;Project Explorer&quot; view, and select <strong class=\" \">Properties</strong> </p>\n</li><li class=\" \"> <p>\nSelect &quot;Preview Settings&quot;. Click <strong class=\" \">Use Specific Server</strong> and <strong class=\" \">New</strong> </p>\n</li><li class=\" \"> <p>\nSelect <strong class=\" \">Simple Web server</strong> </p>\n</li><li class=\" \"> <p>\nFill out the form:    </p>\n<div class=\"confbox panel panel\">\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Name:</strong> Choose a descriptive name that describes the server uniquely    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Base URL:</strong> The URL of the server up to the document root, i.e.  http://localhost/myproject from above    </p>\n</li><li class=\" \"> <p>\n<strong class=\" \">Document Root:</strong> The path to the public root of the web site, i.e. <strong class=\" \">\\xampp\\htdocs\\myproject</strong> from above    </p>\n</li></ul> </div>\n</li><li class=\" \"> <p>\nClick <strong class=\" \">OK</strong> and <strong class=\" \">OK</strong> </p>\n</li></ol> </div>\n<div class=\"section section-2 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Starttheexternalserver\">\n<h2 class=\"heading \"><span>Start the external server</span></h2>\n<p>\nIt may be started automatically for you, but ensure the server is started. XAMPP comes with a small control panel you can use to start and stop the server.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083123_SettingupanexternalwebservertopreviewPHPandothernon-HTMLpages-Previewyourfiles\">\n<h2 class=\"heading \"><span>Preview your files</span></h2>\n<p>\nYou can now use the preview button in the editor toolbar, or continue on to create a run configuration based on this new preview server. See <a class=\"document-link \" href=\"#!/guide/Previewing_a_project_in_a_web_browser\" Previewing_a_project_in_a_web_browser.html=\"Previewing_a_project_in_a_web_browser.html\">Previewing a project in a web browser</a> for more information.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Setting up an external web server to preview PHP and other non-HTML pages"});