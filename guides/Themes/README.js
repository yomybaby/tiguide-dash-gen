Ext.data.JsonP['Themes']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Themes</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083213\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083213\"><span>Edit</span></a>\n<h1>Themes</h1>\n<div class=\"section section-2 \" id=\"30083213_Themes-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Themes-section-30083213_Themes-Scopes\" Themes.html#30083213_Themes-Scopes=\"Themes.html#30083213_Themes-Scopes\">Scopes</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Themes-section-30083213_Themes-TokenNames\" Themes.html#30083213_Themes-TokenNames=\"Themes.html#30083213_Themes-TokenNames\">Token Names</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Themes-section-30083213_Themes-ThemesinRubles\" Themes.html#30083213_Themes-ThemesinRubles=\"Themes.html#30083213_Themes-ThemesinRubles\">Themes in Rubles</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Themes-section-30083213_Themes-ThemesinJava\" Themes.html#30083213_Themes-ThemesinJava=\"Themes.html#30083213_Themes-ThemesinJava\">Themes in Java</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"30083213_Themes-RelatedTopics\">\n<h2 class=\"heading \"><span>Related Topics</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_New_Theme\" Creating_a_New_Theme.html=\"Creating_a_New_Theme.html\">Creating a New Theme</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Current_Theme_Scopes\" Current_Theme_Scopes.html=\"Current_Theme_Scopes.html\">Current Theme Scopes</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/User_Themes\" User_Themes.html=\"User_Themes.html\">User Themes</a> </p>\n</li></ul> <p>\nStudio 3 uses a new &quot;theming&quot; system to define the coloring of the IDE across the various editors and views.  We tried to follow the convention of token names used by TextMate in our coloring so that porting existing themes over would be relatively easy.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083213_Themes-Scopes\">\n<h2 class=\"heading \"><span>Scopes</span></h2>\n<p>\nScopes are similar to CSS selectors in that they describe a pattern which is matched against the current location of the cursor in the document. Multiple scopes may apply simultaneously at different levels of specificity. As an example, if we take the following piece of CSS:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">body {</code></div>\n<div class=\"line\"><code class=\"plain\">    background:#</code><code class=\"value\">000000</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\nThe entire snippet in a CSS file will have the scope 'source.css'. Individual tokens will have the following scopes applied:    </p>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nToken    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nFull Scope    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nTheme Scope Selector Rule that matches (&quot;Aptana Studio&quot; Theme)    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nbody    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css entity.name.tag.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nentity.name.tag.css    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n{}    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css punctuation.section.property-list.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\npunctuation.section    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nbackground    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css support.type.property-name.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsupport.type.property-name.css    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n:    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css punctuation.separator.key-value.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n#000000    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css constant.other.color.rgb-value.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nconstant.other.color.rgb-value.css    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource.css punctuation.terminator.rule.css    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nsource    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<p>\nYou can double-check this yourself by placing the cursor at a particular location, and choosing &quot;Commands &gt; Bundle Development &gt; Show Scope&quot;. You will see each of the pieces of text above has &quot;source.css&quot; and the specific scope in question applied.    </p>\n<p>\nHow does this relate to theming? If you open up Preferences &gt; Aptana &gt; Themes, you will see a list of scopes. When applying colors, it will choose the scope closest in match to the one above by following a prefix match, i.e. &quot;punctuation.section.blah.blah&quot; matches &quot;punctuation.section&quot; for which a color is defined.    </p>\n<p>\nMany of the scopes defined in themes are relatively general across languages. You can add scopes if you like to specifically modify things to your taste. Some examples:    </p>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDesired Effect    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nAction    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nColorize semicolons in CSS    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nAdd scope 'punctuation.terminator.rule.css' and choose colors    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nColorize the background of CSS source    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nAdd scope 'source.css' and choose colors    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nColorize the background of CSS source, but only when embedded in any language    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nAdd scope 'source.css.embedded' and choose colors.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nColorize the background of CSS source, but only when embedded inside an HTML document (i.e. a <strong class=\" \">style</strong> tag)    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nAdd scope 'text.html source.css' and choose colors.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<p>\nThere is a longer discussion about creating scopes here: <a class=\"external-link external-link\" href=\"http://manual.macromates.com/en/scope_selectors.html\" target=\"_blank\">http://manual.macromates.com/en/scope_selectors.html</a> </p>\n</div>\n<div class=\"section section-2 \" id=\"30083213_Themes-TokenNames\">\n<h2 class=\"heading \"><span>Token Names</span></h2>\n<p>\nA good starting point for token naming conventions is the TextMate documentation on the subject: <a class=\"external-link external-link\" href=\"http://manual.macromates.com/en/language_grammars#naming_conventions\" target=\"_blank\">http://manual.macromates.com/en/language_grammars#naming_conventions</a><br />Generally speaking tokens follow a convention of <i class=\" \">category.sub-category.language-extension</i>, i.e. &quot;comment.line.js&quot;    </p>\n<p>\nSee <a class=\"document-link \" href=\"#!/guide/Current_Theme_Scopes\" Current_Theme_Scopes.html=\"Current_Theme_Scopes.html\">Current Theme Scopes</a> for a complete list of currently available scopes.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30083213_Themes-ThemesinRubles\">\n<h2 class=\"heading \"><span>Themes in Rubles</span></h2>\n<p>\nRubles may contribute themes. Simply use a hash from token name to a string containing the fg, bg(optional) and font styles (optional). Place the theme addition in a file that will get loaded when the ruble does (i.e. bundle.rb). The overall theme color keys of foreground, background, selection, caret, and lineHighlight are expected to be present as keys; as is the &quot;name&quot; key for the theme name. The rest of the keys are interpreted as token names (if using symbols, &quot;_&quot; will be changed to &quot;.&quot; under the hood for you). Here's an example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble/theme'</code></div>\n<div class=\"line\"><code class=\"plain\">Ruble::Theme.add({</code></div>\n<div class=\"line\"><code class=\"plain\">  :name =&gt; </code><code class=\"string\">'example'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :foreground =&gt; </code><code class=\"string\">'#ffffff'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :background =&gt;  </code><code class=\"string\">'#000000'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :selection =&gt; </code><code class=\"string\">'#999999'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :caret =&gt; </code><code class=\"string\">'#cccccc'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :lineHighlight =&gt; </code><code class=\"string\">'#cccccc'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  :string_quoted_single =&gt; [</code><code class=\"string\">'#ff0000'</code><code class=\"plain\">, </code><code class=\"string\">'#00ff00'</code><code class=\"plain\">, </code><code class=\"string\">'bold'</code><code class=\"plain\">, </code><code class=\"string\">'italic'</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">})</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"30083213_Themes-ThemesinJava\">\n<h2 class=\"heading \"><span>Themes in Java</span></h2>\n<p>\nIn our Java code we contribute themes via properties files. The key used is the token name and the values are a list of colors and font styles with order being significant. The first color in hex is the fg, the second (optional) is background. We also then take optional font style names such as bold, italic or underline. A few examples:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">comment.line=#ffff00,#</code><code class=\"value\">333333</code><code class=\"plain\">,italic</code></div>\n<div class=\"line\"><code class=\"plain\">string=#00ff00</code></div>\n<div class=\"line\"><code class=\"plain\">invalid.illegal=#521c93,#fffb00,bold</code></div>\n</div>\n</div> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Themes"});