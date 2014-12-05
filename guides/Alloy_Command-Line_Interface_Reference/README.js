Ext.data.JsonP['Alloy_Command-Line_Interface_Reference']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Alloy Command-Line Interface Reference</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"35620083\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35620083\"><span>Edit</span></a>\n<h1>Alloy Command-Line Interface Reference</h1>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-New\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-New=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-New\">New</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-Generate\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Generate=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Generate\">Generate</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-Install\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Install=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Install\">Install</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-Compile\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Compile=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Compile\">Compile</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-Run\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Run=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-Run\">Run</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-i18n-extract\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-i18n-extract=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-i18n-extract\">i18n-extract</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions\">Additional Options</a> </p>\n</li></ul> <p>\nThe Alloy Command-Line Interface (CLI) is a command-line tool for managing and building Alloy projects.    </p>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-New\">\n<h2 class=\"heading \"><span>New</span></h2>\n<p>\nCreates a new Alloy project.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">alloy </code><code class=\"keyword\">new</code><code class=\"plain\"> [&lt;project_path&gt;] [&lt;project_template&gt;] [--force] [--no-colors]</code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;project_path&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nPath to a skeleton Titanium project, otherwise the current working directory is used.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;project_template&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nSelects the template. Choose between <strong class=\" \">default</strong> for a single pane application or <strong class=\" \">two_tabbed</strong> or a tabbed application. Defaults to <strong class=\" \">default</strong>.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-f, --force    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nForces the command to execute.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-n, --no-colors    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDisables color output.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-Generate\">\n<h2 class=\"heading \"><span>Generate</span></h2>\n<p>\nCreates skeleton Alloy components.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">alloy generate &lt;component&gt; [--widgetname &lt;widget_name&gt;] [--outputPath &lt;output_path&gt;] [--platform &lt;platform&gt;] [--force] [--no-colors] </code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;component&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nFormat is component specific.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\ncontroller &lt;name&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreate a skeleton controller, view and style.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\njmk    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates <tt class=\" \">alloy.jmk</tt>.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nmodel &lt;name&gt; &lt;adapter&gt; [schema]    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates a model with the specified <tt class=\" \">name</tt>. See <a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-ModelFormat\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-ModelFormat=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-ModelFormat\">Model Format</a> below.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nmigration &lt;model_name&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates a skeleton migration file for the specified model.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nstyle &lt;&lt;name&gt; | --all&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates a skeleton style file with the specified name.<br />If the name is associated with a view-controller, Alloy uses the id and class names from the markup file to populate the style file.<br />If <tt class=\" \">--all</tt> flag is specified, Alloy generates skeleton style files for all view-controllers.<br />If you add new id or class attributes to the markup file, running this command updates the style file with the new attributes.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nview &lt;name&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates a skeleton view and style with the specified <tt class=\" \">name</tt>.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nwidget &lt;name&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreates a basic widget with the specified <tt class=\" \">name</tt>.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n--widgetname &lt;name&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<strong class=\" \">Since Alloy 1.4.0.</strong> Creates a component for the specified widget. Can only be used to create controllers, views or styles.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-o, --outputPath &lt;outputPath&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOutput path for generated code. Point to the 'app' directory.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n--platform &lt;platform&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCreate a platform-specific view or controller component, where &lt;platform&gt; is either android, ios or mobileweb.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-f, --force    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nForces the command to execute.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-n, --no-colors    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDisables color output.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<div class=\"section section-3 \" id=\"35620083_AlloyCommand-LineInterfaceReference-ModelFormat\">\n<h3 class=\"heading \"><span>Model Format</span></h3>\n<p>\nTo generate a model, first select the adapter type:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<tt class=\" \">sql</tt> for the SQLite database for the Android and iOS platform.    </p>\n</li><li class=\" \"> <p>\n<tt class=\" \">properties</tt> for storing models locally in Titanium SDK context.    </p>\n</li><li class=\" \"> <p>\n<span style=\"color: #999999;\">\n<tt class=\" \">localStorage</tt> for HTML5 localStorage for the Mobile Web platform. Deprecated since Alloy 1.5.0.    </span>\n</p>\n</li></ul> <p>\nFor the <tt class=\" \">sql</tt> and <tt class=\" \">properties</tt> adapters, you will also need to specify a table schema. The <tt class=\" \">sql</tt> adapter type will also generate a migration file with the model.    </p>\n<p>\nThe table schema format for generating models is a space-delimited list of the field name, followed by a colon (':'), followed by the data type. For example, specifying 'name:string age:number sex:varchar dob:date' will create a table with four columns: 'name' which stores a string, 'age' which stores a number, 'sex' which stores a character, and 'dob' which stores a date.    </p>\n<p>\nActually, in the above example, since both the Android and iOS platforms use SQLite, none of these datatypes are available. Instead, they will be mapped based on the following:    </p>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDatatype    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nSQLite Datatype    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nstring<br />varchar<br />text    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nTEXT    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nint<br />tinyint<br />smallint<br />bigint<br />integer    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nINTEGER    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\ndouble<br />float<br />real    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nREAL    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nblob    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nBLOB    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\ndecimal<br />number<br />date<br />datetime<br />boolean    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nNUMERIC    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nnull    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nNULL    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nunknown datatype    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nTEXT    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-Install\">\n<h2 class=\"heading \"><span>Install</span></h2>\n<p>\nInstalls special Alloy project components.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">alloy install &lt;module&gt; [&lt;project_path&gt;]</code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;module&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nFormat is module specific.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nplugin    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nInstalls the compiler plugin to hook the Alloy project to Studio.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;project_path&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nPath to the Alloy project, otherwise the current working directory is used.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-Compile\">\n<h2 class=\"heading \"><span>Compile</span></h2>\n<p>\nCompiles Alloy code to Titanium SDK code.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">alloy compile [&lt;project_path&gt;] [--config &lt;compiler_options&gt;] [--no-colors]</code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n&lt;project_path&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nPath to the Alloy project, otherwise the current working directory is used.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-c, --config &lt;compiler_options&gt;    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nCompiler configuration options to use. See <a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-35620083_AlloyCommand-LineInterfaceReference-CompilerOptions\" Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-CompilerOptions=\"Alloy_Command-Line_Interface_Reference.html#35620083_AlloyCommand-LineInterfaceReference-CompilerOptions\">Compiler Options</a> below.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-n, --no-colors    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nDisables color output.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<div class=\"section section-3 \" id=\"35620083_AlloyCommand-LineInterfaceReference-CompilerOptions\">\n<h3 class=\"heading \"><span>Compiler Options</span></h3>\n<p>\nThe compiler options are a list of comma-delimited assignment statements (variable=value) without any spaces. For example, specifying &quot;beautify=false,deploytype=test&quot; overrides the default compiler behavior to disable beautifying the generated JavaScript files and building the application for the test environment.    </p>\n<p>\nRefer to the <tt class=\" \">event.alloyConfig</tt> object in <a class=\"document-link \" href=\"#!/guide/Build_Configuration_File_(alloy.jmk)\" Build_Configuration_File_(alloy.jmk).html=\"Build_Configuration_File_(alloy.jmk).html\">Build Configuration File (alloy.jmk)</a> for a list of settable compiler options.    </p>\n</div>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-Run\">\n<h2 class=\"heading \"><span>Run</span></h2>\n<p>\nUse the <tt class=\" \">titanium build</tt> command to run Alloy projects.  See the <a class=\"document-link \" href=\"#!/guide/Titanium_Command-Line_Interface_Reference\" Titanium_Command-Line_Interface_Reference.html=\"Titanium_Command-Line_Interface_Reference.html\">Titanium Command-Line Interface Reference guide</a> for more information.    </p>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-i18n-extract\">\n<h2 class=\"heading \"><span>i18n-extract</span></h2>\n<p>\nInspects your TSS and JS files for instances of Titanium's localization functions, extracts the i18n key from each function and adds it to the target language's strings.xml file.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n [&lt;language&gt;] [--apply]</code></div>\n</div>\n</div> <div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">&lt;language&gt;</tt> </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptional. A two-letter language code that specifies the target language. Default is <strong class=\" \"><tt class=\" \">en</tt></strong> (English).    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n<tt class=\" \">--apply</tt> </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptional. If present, the command writes new localization entries to the target language's strings.xml file. If absent, a preview of the changes are displayed in the terminal window.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n<p>\nThe following localization functions are supported:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Locale-method-getString\">Titanium.Locale.getString()</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Locale-method-getString\">Ti.Locale.getString()</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Global-method-L\">L()</a> </p>\n</li></ul> <p>\nThe syntax options for calling <tt class=\" \">alloy extract-i18n</tt> are shown below.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Show a before and after of your i18n </code><code class=\"functions\">file</code><code class=\"plain\">. Does NOT write changes to the </code><code class=\"functions\">file</code><code class=\"plain\">.</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n  </code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Write changes to </code><code class=\"string\">\"i18n/en/strings.xml\"</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n --apply   </code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Specify </code><code class=\"string\">\"es\"</code><code class=\"plain\"> as the language and write the changes to </code><code class=\"string\">\"i18n/es/strings.xml\"</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n es --apply</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Specify a different language (</code><code class=\"string\">\"es\"</code><code class=\"plain\">) and preview changes:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n es</code></div>\n</div>\n</div> <p>\nAlso see <a class=\"external-link external-link\" href=\"#!/guide/Alloy_Tasks_with_the_CLI#AlloyTaskswiththeCLI-Extractinglocalizationstrings\">Extracting localization strings</a> in the <a class=\"external-link external-link\" href=\"#!/guide/Alloy_Tasks_with_the_CLI\">Alloy Tasks with the CLI</a> guide.    </p>\n</div>\n<div class=\"section section-2 \" id=\"35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions\">\n<h2 class=\"heading \"><span>Additional Options</span></h2>\n<div class=\"tablewrap\">\n<table class=\"confluenceTable\">\n<thead class=\" \"> <tr>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nOptions    </p>\n</td>\n<td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n<p>\nDescription    </p>\n</td>\n</tr>\n</thead><tfoot class=\" \"></tfoot><tbody class=\" \"> <tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-h, --help    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOutputs command usage.    </p>\n</td>\n</tr>\n<tr>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\n-v, --version    </p>\n</td>\n<td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n<p>\nOutputs the version number.    </p>\n</td>\n</tr>\n</tbody> </table>\n</div>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Alloy Command-Line Interface Reference"});