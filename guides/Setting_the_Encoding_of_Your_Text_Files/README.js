Ext.data.JsonP['Setting_the_Encoding_of_Your_Text_Files']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Setting the Encoding of Your Text Files</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083312\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083312\"><span>Edit</span></a>\n<h1>Setting the Encoding of Your Text Files</h1>\n<div class=\"section section-2 \" id=\"30083312_SettingtheEncodingofYourTextFiles-Chapters\">\n<h2 class=\"heading \"><span>Chapters</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_the_Encoding_of_Your_Text_Files-section-30083312_SettingtheEncodingofYourTextFiles-Settingyourworkspaceencoding\" Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Settingyourworkspaceencoding=\"Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Settingyourworkspaceencoding\">Setting your workspace encoding</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_the_Encoding_of_Your_Text_Files-section-30083312_SettingtheEncodingofYourTextFiles-Settingtheencodingofaspecificfile\" Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Settingtheencodingofaspecificfile=\"Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Settingtheencodingofaspecificfile\">Setting the encoding of a specific file</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_the_Encoding_of_Your_Text_Files-section-30083312_SettingtheEncodingofYourTextFiles-Ifyoudonotseeyourencodinginthelist...\" Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Ifyoudonotseeyourencodinginthelist...=\"Setting_the_Encoding_of_Your_Text_Files.html#30083312_SettingtheEncodingofYourTextFiles-Ifyoudonotseeyourencodinginthelist...\">If you do not see your encoding in the list...</a> </p>\n</li></ul> <p>\nStudio ships with UTF-8 encoding enabled by default, but you may wish to change this or set it to a new value.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083312_SettingtheEncodingofYourTextFiles-Settingyourworkspaceencoding\">\n<h2 class=\"heading \"><span>Setting your workspace encoding</span></h2>\n<ol class=\" \"><li class=\" \"> <p>\nSelect <strong class=\" \">Preferences &gt; General &gt; Workspace</strong>.    </p>\n</li><li class=\" \"> <p>\nFind the <strong class=\" \">Text File Encoding</strong> area.    </p>\n</li><li class=\" \"> <p>\nEnsure the <strong class=\" \">Other</strong> radio button is selected and choose a new value from the list.    </p>\n</li><li class=\" \"> <p>\nClick <strong class=\" \">OK</strong> to save your changes.    </p>\n</li></ol> </div>\n<div class=\"section section-2 \" id=\"30083312_SettingtheEncodingofYourTextFiles-Settingtheencodingofaspecificfile\">\n<h2 class=\"heading \"><span>Setting the encoding of a specific file</span></h2>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\n</p>\n<p>\nSome files, like XML, have an encoding setting at the top of the file. This value will take precedence over any other value set in preferences.    </p>\n</div>\n<ol class=\" \"><li class=\" \"> <p>\nSelect the file you are interested in from the <strong class=\" \">Project Explorer</strong> view    </p>\n</li><li class=\" \"> <p>\nRight-click on the file, or select <strong class=\" \">File &gt; Properties</strong> </p>\n</li><li class=\" \"> <p>\nUnder the <strong class=\" \">Resource</strong> tab, you will find a <strong class=\" \">Text File Encoding</strong> area.    </p>\n</li><li class=\" \"> <p>\nEnsure the <strong class=\" \">Other</strong> radio button is selected and choose a new value from the list.    </p>\n</li><li class=\" \"> <p>\nClick <strong class=\" \">OK</strong> to save your changes.    </p>\n</li></ol> </div>\n<div class=\"section section-2 \" id=\"30083312_SettingtheEncodingofYourTextFiles-Ifyoudonotseeyourencodinginthelist...\">\n<h2 class=\"heading \"><span>If you do not see your encoding in the list...</span></h2>\n<div class=\"confbox panel panel\">\n<p>\nA complete list of Java encodings is available here: <a class=\"external-link external-link\" href=\"http://download.oracle.com/javase/1.4.2/docs/guide/intl/encoding.doc.html\" target=\"_blank\">http://download.oracle.com/javase/1.4.2/docs/guide/intl/encoding.doc.html</a>. If you do not see the encoding you want in the drop-down list, you can manually enter one by typing it in.    </p>\n</div>\n<p>\nYou can manually specify one of the supported encodings from the above web page    </p>\n<ol class=\" \"><li class=\" \"> <p>\nSelect one of the previous &quot;Text File Encoding&quot; areas    </p>\n</li><li class=\" \"> <p>\nType in a supported encoding, i.e. Shift_JIS, by using the &quot;Canonical Name&quot; from the above list. Some common encodings:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nShift_JIS: Japanese    </p>\n</li><li class=\" \"> <p>\nGB18030: Simplified Chinese    </p>\n</li></ul></li><li class=\" \"> <p>\nClick OK    </p>\n</li></ol> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Setting the Encoding of Your Text Files"});