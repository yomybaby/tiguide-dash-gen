Ext.data.JsonP['Using_a_Custom_Gem']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Using a Custom Gem</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083229\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083229\"><span>Edit</span></a>\n<h1>Using a Custom Gem</h1>\n<div class=\"section section-2 \" id=\"30083229_UsingaCustomGem-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Overview\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Overview=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Setup\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Setup=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Setup\">Setup</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Using%27gemunpack%27\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Using%27gemunpack%27=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Using%27gemunpack%27\">Using 'gem unpack'</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Manuallyunzipping\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manuallyunzipping=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manuallyunzipping\">Manually unzipping</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Manipulatethepathineachplacethegemisreferenced\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manipulatethepathineachplacethegemisreferenced=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manipulatethepathineachplacethegemisreferenced\">Manipulate the path in each place the gem is referenced</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Manipulatethepathgloballyforallcommands\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manipulatethepathgloballyforallcommands=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Manipulatethepathgloballyforallcommands\">Manipulate the path globally for all commands</a> </p>\n</li></ul></li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-TheCode\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-TheCode=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-TheCode\">The Code</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Using_a_Custom_Gem-section-30083229_UsingaCustomGem-Result\" Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Result=\"Using_a_Custom_Gem.html#30083229_UsingaCustomGem-Result\">Result</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083229_UsingaCustomGem-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nRubles run using the internal jRuby interpreter. While it is theoretically possible to add gems to that installation, it's not recommended, as that would be wiped the next time the Studio jRuby version is updated. Instead, it is suggested that the gem be unpacked into the Ruble and referenced there. Below, we show how to use a JSON gem, and interpret a JSON url response from a Github API call.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083229_UsingaCustomGem-Setup\">\n<h2 class=\"heading \"><span>Setup</span></h2>\n<p>\nFirst, unpack the gem. Here we use the JSON gem from <a class=\"external-link external-link\" href=\"http://flori.github.com/json/\" target=\"_blank\">http://flori.github.com/json/</a>.    </p>\n<div class=\"section section-3 \" id=\"30083229_UsingaCustomGem-Using'gemunpack'\">\n<h3 class=\"heading \"><span>Using 'gem unpack'</span></h3>\n<ol class=\" \"><li class=\" \"> <p>\nInstall the desired gem to your ruby installation if not already installed (<strong class=\" \">`gem install json`</strong>).    </p>\n</li><li class=\" \"> <p>\nChange directories to the ruble's <strong class=\" \">/lib</strong> folder.    </p>\n</li><li class=\" \"> <p>\nRun `gem unpack json`, and then optionally rename the resulting subdirectory to be <strong class=\" \">'json'</strong>.    </p>\n</li></ol> </div>\n<div class=\"section section-3 \" id=\"30083229_UsingaCustomGem-Manuallyunzipping\">\n<h3 class=\"heading \"><span>Manually unzipping</span></h3>\n<ol class=\" \"><li class=\" \"> <p>\nDownload the source version of the gem as a .zip file.    </p>\n</li><li class=\" \"> <p>\nUnzip the archive and rename it to <strong class=\" \">'json'</strong>.    </p>\n</li><li class=\" \"> <p>\nPlace it underneath the <strong class=\" \">/lib</strong> folder in the ruble. You will see a structure like:    </p>\n</li></ol> <p>\n<img src=\"images/download/attachments/30083229/Screen_Shot_2011-12-27_at_1.21.00_PM.png\" alt=\"images/download/attachments/30083229/Screen_Shot_2011-12-27_at_1.21.00_PM.png\" class=\"confluence-embedded-image\" />\n</p>\n<p>\nNow, we need to reference the gem. To this properly, we need to manipulate the load path. There are two options:    </p>\n</div>\n<div class=\"section section-3 \" id=\"30083229_UsingaCustomGem-Manipulatethepathineachplacethegemisreferenced\">\n<h3 class=\"heading \"><span>Manipulate the path in each place the gem is referenced</span></h3>\n<p>\nAssuming we are creating a command in commands/commands.rb, we reference the JSON gem as:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$: &lt;&lt; File.dirname(__FILE__) + </code><code class=\"string\">'/../lib/json/lib'</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'json'</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"30083229_UsingaCustomGem-Manipulatethepathgloballyforallcommands\">\n<h3 class=\"heading \"><span>Manipulate the path globally for all commands</span></h3>\n<p>\nHere, we take advantage of the fact that items in the <strong class=\" \">&quot;lib&quot;</strong> directory are automatically loaded.    </p>\n<ol class=\" \"><li class=\" \"> <p>\nCreate <strong class=\" \">/lib/json.rb</strong> </p>\n</li><li class=\" \"> <p>\nAdd the following code://    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$: &lt;&lt; File.dirname(__FILE__) + </code><code class=\"string\">'json/lib'</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'json'</code></div>\n</div>\n</div></li><li class=\" \"> <p>\nNow, we can require &quot;json&quot; as normal in other commands    </p>\n</li></ol> </div>\n</div>\n<div class=\"section section-2 \" id=\"30083229_UsingaCustomGem-TheCode\">\n<h2 class=\"heading \"><span>The Code</span></h2>\n<p>\nIn the snippet below, we manipulate the currently selected text to split it across lines, and then wrap each line in a template using mirrored variables (the $1s in the template)    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'net/http'</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'json'</code></div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">'Find Related Git Repos'</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.scope = </code><code class=\"string\">'source'</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :show_as_tooltip</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :selection, :word</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">     # call Github to find all repos that reference the selected text</code></div>\n<div class=\"line\"><code class=\"plain\">     url = </code><code class=\"string\">\"http://github.com/api/v2/json/repos/search/#{URI.encode($stdin.gets)}\"</code></div>\n<div class=\"line\"><code class=\"plain\">     resp = Net::HTTP.get_response(URI.parse(url))</code></div>\n<div class=\"line\"><code class=\"plain\">     data = resp.body</code></div>\n<div class=\"line\"><code class=\"plain\">     result = JSON.parse(data)</code></div>\n<div class=\"line\"><code class=\"plain\">     # Create tooltip text</code></div>\n<div class=\"line\"><code class=\"plain\">     tooltip = </code><code class=\"string\">\"\"</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">for</code><code class=\"plain\"> k in </code><code class=\"value\">0</code><code class=\"plain\">...result[</code><code class=\"string\">\"repositories\"</code><code class=\"plain\">].length</code></div>\n<div class=\"line\"><code class=\"plain\">       repo = result[</code><code class=\"string\">'repositories'</code><code class=\"plain\">][k]</code></div>\n<div class=\"line\"><code class=\"plain\">       tooltip &lt;&lt; </code><code class=\"string\">\"#{repo['name']}: #{repo['description']} (#{repo['url']})\\n\"</code></div>\n<div class=\"line\"><code class=\"plain\">     end</code></div>\n<div class=\"line\"><code class=\"plain\">     puts tooltip</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083229_UsingaCustomGem-Result\">\n<h2 class=\"heading \"><span>Result</span></h2>\n<p>\nOnce created and activated, you will get something similar to this:    </p>\n<p>\n<img src=\"images/download/attachments/30083229/Screen_Shot_2011-12-27_at_1.40.01_PM.png\" alt=\"images/download/attachments/30083229/Screen_Shot_2011-12-27_at_1.40.01_PM.png\" class=\"confluence-embedded-image\" />\n</p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Using a Custom Gem"});