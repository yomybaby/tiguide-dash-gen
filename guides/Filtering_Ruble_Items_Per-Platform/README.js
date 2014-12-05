Ext.data.JsonP['Filtering_Ruble_Items_Per-Platform']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Filtering Ruble Items Per-Platform</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083231\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083231\"><span>Edit</span></a>\n<h1>Filtering Ruble Items Per-Platform</h1>\n<div class=\"section section-2 \" id=\"30083231_FilteringRubleItemsPer-Platform-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Filtering_Ruble_Items_Per-Platform-section-30083231_FilteringRubleItemsPer-Platform-Overview\" Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Overview=\"Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Filtering_Ruble_Items_Per-Platform-section-30083231_FilteringRubleItemsPer-Platform-Wrappinganiteminaper-platformconditional\" Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Wrappinganiteminaper-platformconditional=\"Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Wrappinganiteminaper-platformconditional\">Wrapping an item in a per-platform conditional</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Filtering_Ruble_Items_Per-Platform-section-30083231_FilteringRubleItemsPer-Platform-Specifyingper-platformoptions\" Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Specifyingper-platformoptions=\"Filtering_Ruble_Items_Per-Platform.html#30083231_FilteringRubleItemsPer-Platform-Specifyingper-platformoptions\">Specifying per-platform options</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083231_FilteringRubleItemsPer-Platform-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nSometimes you want a snippet, command, sample, or other item to only appear on certain platforms. To do so, you can use some platform specifiers.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083231_FilteringRubleItemsPer-Platform-Wrappinganiteminaper-platformconditional\">\n<h2 class=\"heading \"><span>Wrapping an item in a per-platform conditional</span></h2>\n<p>\nIn the example below, we only want the sample to appear on OSX and Linux.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> Ruble.is_mac? || Ruble.is_linux?</code></div>\n<div class=\"line\"><code class=\"plain\">  project_sample </code><code class=\"string\">\"Kitchen Sink\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |s|</code></div>\n<div class=\"line\"><code class=\"plain\">    s.id = </code><code class=\"string\">\"com.appcelerator.titanium.mobile.samples.kitchensink\"</code></div>\n<div class=\"line\"><code class=\"plain\">    s.category = </code><code class=\"string\">\"com.appcelerator.titanium.mobile.samples.category\"</code></div>\n<div class=\"line\"><code class=\"plain\">    s.location = </code><code class=\"string\">\"git://github.com/appcelerator/KitchenSink.git\"</code></div>\n<div class=\"line\"><code class=\"plain\">    s.description = </code><code class=\"string\">\"A sample Titanium Mobile project that demonstrates a variety of APIs available in Titanium Mobile\"</code></div>\n<div class=\"line\"><code class=\"plain\">    s.natures = [</code><code class=\"string\">\"com.appcelerator.titanium.mobile.nature\"</code><code class=\"plain\">, </code><code class=\"string\">\"com.aptana.projects.webnature\"</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">    s.icon = </code><code class=\"string\">\"http://preview.appcelerator.com/dashboard/img/icons/icon_kitchen_sink.png\"</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nPlatform    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nTest    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_windows?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows XP    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_windows_xp?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows Vista    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_windows_7?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nWindows 7    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_windows_vista?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOS X    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_mac?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nLinux    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_linux?    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nUnix (includes Linux)    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nis_unix?    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"30083231_FilteringRubleItemsPer-Platform-Specifyingper-platformoptions\">\n<h2 class=\"heading \"><span>Specifying per-platform options</span></h2>\n<p>\nSometimes, you just want an item to be bound to a different key per-platform. That can be done by using the <a class=\"document-link \" href=\"#!/guide/Ruble_Specification-section-30083218_RubleSpecification-PLATFORMSPECIFIER\" Ruble_Specification.html#30083218_RubleSpecification-PLATFORMSPECIFIER=\"Ruble_Specification.html#30083218_RubleSpecification-PLATFORMSPECIFIER\">PLATFORM_SPECIFIER</a>. However, you could accomplish the same thing by conditionally setting the property using the same syntax as above with <tt class=\" \">Ruble.is_mac</tt>, for example.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">'Add to multifile Gist'</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding.mac = </code><code class=\"string\">'CONTROL+OPTION+COMMAND+G'</code><code class=\"plain\"> # aka M1+M3+M4+G</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">'M1+M3+G'</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :show_as_tooltip</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :selection, :document</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code></div>\n<div class=\"line\"><code class=\"plain\">    require </code><code class=\"string\">\"gist\"</code></div>\n<div class=\"line\"><code class=\"plain\">    Gist.process_selection</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> <p>\nCurrently, only the following properties support platform specifiers:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nkey_binding    </p>\n</li><li class=\" \"> <p>\ninvoke    </p>\n</li></ul> <p>\nAlternatively, you could also wrap the setting of various properties in conditionals that test the platform using the calls from the previous section.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Filtering Ruble Items Per-Platform"});