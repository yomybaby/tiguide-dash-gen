Ext.data.JsonP['Android_Module_Porting_Guide_for_1.8.0.1']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Android Module Porting Guide for 1.8.0.1</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004947\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004947\"><span>Edit</span></a>\n<h1>Android Module Porting Guide for 1.8.0.1</h1>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-Overview\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Overview=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Overview\">Overview</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-Manifestchanges\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Manifestchanges=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Manifestchanges\">Manifest changes</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-Buildchanges\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Buildchanges=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Buildchanges\">Build changes</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-Generalchanges\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Generalchanges=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Generalchanges\">General changes</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-Specificchanges\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Specificchanges=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-Specificchanges\">Specific changes</a> </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Overview\">\n<h2 class=\"heading \"><span>Overview</span></h2>\n<p>\nIn the Titanium Mobile 1.8.0.1 Release, our Android support was significantly changed to support multiple Javascript runtimes (namely: V8 and Rhino). These changes affect various APIs that 3rd party modules depend on. Despite the changes to the platform, most of the internal module changes required are simply changes to method signatures and type names / import locations.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Manifestchanges\">\n<h2 class=\"heading \"><span>Manifest changes</span></h2>\n<p>\nAll 3rd party modules that target Titanium Mobile 1.8.0.1 (and above) will need to have a new property in the module manifest, <tt class=\" \">apiversion</tt>, with a value of <tt class=\" \">2</tt>:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">apiversion: </code><code class=\"value\">2</code></div>\n</div>\n</div> <p>\nIf you create a new 3rd party module with Titanium Mobile 1.8.0.1, this property is automatically generated for your project. If you have an <i class=\" \">existing</i> 3rd party module, you need to manually add this property to your manifest, and make sure you rebuild your module (see <a class=\"document-link \" href=\"#!/guide/Android_Module_Porting_Guide_for_1.8.0.1-section-29004947_AndroidModulePortingGuidefor1.8.0.1-build_changes\" Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-build_changes=\"Android_Module_Porting_Guide_for_1.8.0.1.html#29004947_AndroidModulePortingGuidefor1.8.0.1-build_changes\">Build changes</a> below for the NDK requirement):    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$ ant clean &amp;&amp; ant</code></div>\n</div>\n</div> <p>\n<span id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-build_changes\"><a class=\"confluence-anchor-link\" name=\"29004947_AndroidModulePortingGuidefor1.8.0.1-build_changes\"></a></span>\n</p>\n</div>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Buildchanges\">\n<h2 class=\"heading \"><span>Build changes</span></h2>\n<p>\nTo accomodate the new V8 runtime, all 3rd party modules now require the Android NDK and gperf for building V8 bindings. Download and extract the latest NDK from Google here:<br /><a class=\"external-link external-link\" href=\"http://developer.android.com/sdk/ndk/index.html\" target=\"_blank\">http://developer.android.com/sdk/ndk/index.html</a> </p>\n<p>\nTo build your module, you need to set the <tt class=\" \">ANDROID_NDK</tt> environment variable:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$ export ANDROID_NDK=/path/to/android-ndk</code></div>\n<div class=\"line\"><code class=\"plain\">$ ant</code></div>\n</div>\n</div> <p>\nAlternatively, you can set the <tt class=\" \">android.ndk</tt> property in <tt class=\" \">build.properties</tt>:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">android.ndk=/path/to/android-ndk</code></div>\n</div>\n</div> <p>\nThe <tt class=\" \">gperf</tt> command must also be installed and in your system path. The <tt class=\" \">gperf</tt> command is installed as part of the Xcode development tools on OS X, but you may need to install it if you are developing on Windows or Linux. See: <a class=\"document-link \" href=\"#!/guide/Installing_gperf\" Installing_gperf.html=\"Installing_gperf.html\">Installing gperf</a> for more information.    </p>\n<p>\nYou also need to update your build.properties file (and .classpath file if you are using Eclipse) to reference Titanium Mobile 1.8.0.1 and API level 8 or newer:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">titanium.sdk=/Library/Application\\ Support/Titanium/</code></div>\n<div class=\"line\"><code class=\"plain\">titanium.os=osx</code></div>\n<div class=\"line\"><code class=\"plain\">titanium.version=</code><code class=\"value\">1.8</code><code class=\"plain\">.</code><code class=\"value\">0.1</code></div>\n<div class=\"line\"><code class=\"plain\">android.sdk=/usr/android-sdk</code></div>\n<div class=\"line\"><code class=\"plain\">titanium.platform=${titanium.sdk}/mobilesdk/${titanium.os}/${titanium.version}/android</code></div>\n<div class=\"line\"><code class=\"plain\">android.platform=${android.sdk}/platforms/android-</code><code class=\"value\">8</code></div>\n<div class=\"line\"><code class=\"plain\">google.apis=${android.sdk}/add-ons/addon_google_apis_google_inc_8</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Generalchanges\">\n<h2 class=\"heading \"><span>General changes</span></h2>\n<p>\n1. Remove <tt class=\" \">TiContext</tt>.    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<tt class=\" \">TiContext</tt> is being replaced, and any implementation utilizing TiContext will take a performance / stability hit compared to using the desired API's directly.    </p>\n</li><li class=\" \"> <p>\nIn most of the places where <tt class=\" \">TiContext</tt> is used as an argument, the <tt class=\" \">TiContext</tt> argument can be removed entirely or replaced with an <tt class=\" \">Activity</tt> reference.    </p>\n</li></ul> <p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiDrawableReference.fromUrl(proxy.getTiContext(), tiImage)</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiDrawableReference.fromUrl(proxy.getActivity(), tiImage)</code></div>\n</div>\n</div> <p>\nIn the specific case of <tt class=\" \">fromUrl</tt>, the following form can also be used:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiDrawableReference.fromUrl(proxy, tiImage)</code></div>\n</div>\n</div> <p>\nThe specific alternative varies based on which API point is being modified, but generally there is a very simple alternative that can be used.    </p>\n<p>\n2. Use <tt class=\" \">KrollFunction</tt> instead of <tt class=\" \">KrollCallback</tt> </p>\n<ul class=\" \"><li class=\" \"> <p>\n<tt class=\" \">KrollFunction</tt> has been added, and <tt class=\" \">KrollCallback</tt> has been removed; The dual runtime change required a common interface to be defined to replace <tt class=\" \">KrollCallback</tt>.    </p>\n</li><li class=\" \"> <p>\nIn most cases, a direct replacement of <tt class=\" \">KrollCallback</tt> with <tt class=\" \">KrollFunction</tt> should suffice.    </p>\n</li></ul> </div>\n<div class=\"section section-2 \" id=\"29004947_AndroidModulePortingGuidefor1.8.0.1-Specificchanges\">\n<h2 class=\"heading \"><span>Specific changes</span></h2>\n<p>\nKnown compatibility points that need to be changed:    </p>\n<p>\n1. Remove <tt class=\" \">KrollInvocation</tt> as a method argment.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Kroll</code><code class=\"plain\">.method</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> myMethod(</code><code class=\"keyword\">final</code><code class=\"plain\"> KrollInvocation invocation, KrollDict args)</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Kroll</code><code class=\"plain\">.method</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> myMethod(KrollDict args)</code></div>\n</div>\n</div> <p>\n2. Remove <tt class=\" \">TiContext</tt> from your module constructor. <tt class=\" \">super(TiContext)</tt> will no longer work due to the previously mentioned <tt class=\" \">TiContext</tt> change. In most if not all cases, simply removing the argument will address the problem.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> BoxModule(TiContext context) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">super</code><code class=\"plain\">(context);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> BoxModule() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">super</code><code class=\"plain\">();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\n3. When replacing <tt class=\" \">KrollCallback</tt> with <tt class=\" \">KrollFunction</tt>, you need to to pass a <tt class=\" \">KrollObject</tt> argument to the <tt class=\" \">call</tt> and <tt class=\" \">callAsync</tt> methods.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">KrollCallback success = (KrollCallback)args.get(</code><code class=\"string\">\"success\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">success.callAsync(event);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">KrollFunction success = (KrollFunction)args.get(</code><code class=\"string\">\"success\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">success.callAsync(proxy.getKrollObject(), event);</code></div>\n</div>\n</div> <p>\n4. Change <tt class=\" \">getView()</tt> on a <tt class=\" \">TiViewProxy</tt> to <tt class=\" \">getOrCreateView()</tt>/    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">View view = myViewProxy.getView();</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">View view = myViewProxy.getOrCreateView();</code></div>\n</div>\n</div> <p>\n5. Change <tt class=\" \">TiDrawableReference.fromUrl(proxy.getTiContext(), tiImage)</tt> to <tt class=\" \">TiDrawableReference.fromUrl(proxy.getActivity(), tiImage)</tt> due to the <tt class=\" \">TiContext</tt> change. Same applies to all the &quot;from&lt;source&gt;&quot; methods in <tt class=\" \">TiDrawableReference</tt>.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiDrawableReference ref = TiDrawableReference.fromBlob(context, blob);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiDrawableReference ref = TiDrawableReference.fromBlob(getActivity(), blob);</code></div>\n</div>\n</div> <p>\n6. <tt class=\" \">&lt;KrollInvocation&gt;.getActivity()</tt> no longer exists. getActivity can be called on each proxy to get the activity for that proxy or <tt class=\" \">TiApplication.getAppCurrentActivity()</tt> and <tt class=\" \">TiApplication.getAppRootActivity()</tt> can be used for getting activity instances to work with. In general, system services, etc., can and should use the root activity if it exists. <tt class=\" \">TiApplication.getRootOrCurrentActivity()</tt> will serve this purpose in the vast majority of situations.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Activity activity = invocation.getActivity();</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Activity activity = TiApplication.getAppRootOrCurrentActivity();</code></div>\n</div>\n</div> <p>\n7. Calling <tt class=\" \">addOnLifeCycleEvent</tt> on a module is no longer necessary. Modules are now automatically registered to receive the lifecycle events (<tt class=\" \">onPause</tt>, <tt class=\" \">onResume</tt>, <tt class=\" \">onStart</tt>, <tt class=\" \">onStop</tt>, and <tt class=\" \">onDestroy</tt>).    </p>\n<p>\n8. <tt class=\" \">&lt;KrollEventManager&gt;.addOnEventChangeListener()</tt> is no longer supported. The new mechanism for this is to override <tt class=\" \">KrollProxy.eventListenerAdded</tt>, and move the code from the <tt class=\" \">listenerAdded</tt> method into the overridden <tt class=\" \">eventListenerAdded</tt> method after the call to <tt class=\" \">super.eventListenerAdded</tt>.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> eventListenerAdded(String type, </code><code class=\"keyword\">int</code><code class=\"plain\"> count, KrollProxy proxy)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">super</code><code class=\"plain\">.eventListenerAdded(type, count, proxy);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// this is the logic that used to live inside the listenerAdded() method</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (MY_CUSTOM_EVENT.equals(type)) {</code></div>\n<div class=\"line\"><code class=\"plain\">        invokeMyCustomMethod();</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\n9. <tt class=\" \">resolveUrl</tt> has been moved to the proxy object.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">_proxy.getTiContext().resolveUrl(url);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">_proxy.resolveUrl(url);</code></div>\n</div>\n</div> <p>\n10. Change <tt class=\" \">getModuleById</tt> to <tt class=\" \">getModuleByName</tt> and specify the module name in the module constructor. By default the module cannot be found by calling <tt class=\" \">getModuleByName</tt>. You must use the form of <tt class=\" \">super()</tt> in the module constructor that allows you to specify the module name.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> myModule(TiContext tiContext) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">super</code><code class=\"plain\">(tiContext);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">    TiApplication appContext = TiApplication.getInstance();</code></div>\n<div class=\"line\"><code class=\"plain\">    MyModule myModule =(MyModule)appContext.getModuleById(</code><code class=\"string\">\"ti.mymodule\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> myModule() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">super</code><code class=\"plain\">(</code><code class=\"string\">\"mymodule\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">    TiApplication appContext = TiApplication.getInstance();</code></div>\n<div class=\"line\"><code class=\"plain\">    MyModule myModule = (MyModule)appContext.getModuleByName(</code><code class=\"string\">\"mymodule\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\n11. <tt class=\" \">&lt;TiContext&gt;.getAndroidContext()</tt> no longer exists. If the <tt class=\" \">ContextWrapper</tt> returned originally is being used to access system or app level resources, use <tt class=\" \">TiApplication.getInstance()</tt> or <tt class=\" \">TiApplication.getInstance().getApplicationContext()</tt> instead. To get the <tt class=\" \">ContextWrapper</tt> for the top most <tt class=\" \">Activity</tt>, use <tt class=\" \">TiApplication.getAppCurrentActivity()</tt> instead.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">myFunction(context.getAndroidContext());</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">myFunction(TiApplication.getInstance().getApplicationContext());</code></div>\n</div>\n</div> <p>\n12. <tt class=\" \">getContext()</tt> on a <tt class=\" \">TiProxy</tt> no longer exists because its purpose was to return a <tt class=\" \">TiContext</tt> instance. This call should no longer be needed in module implementation once <tt class=\" \">TiContext</tt> is no longer being passed in as an argument (the normal use case for this method).    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Context context = proxy.getContext();</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Context context = TiApplication.getInstance().getApplicationContext();</code></div>\n</div>\n</div> <p>\n13. Remove context from <tt class=\" \">TiFileFactory.createTitaniumFile</tt>.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiBaseFile file = TiFileFactory.createTitaniumFile(context, fileURL, </code><code class=\"keyword\">false</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiBaseFile file = TiFileFactory.createTitaniumFile(fileURL, </code><code class=\"keyword\">false</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\n14. <tt class=\" \">getChangeDir</tt> is now called on the <tt class=\" \">TiApplication</tt> instance.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">_proxy.getContext().getCacheDir()</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TiApplication.getInstance().getCacheDir()</code></div>\n</div>\n</div> <p>\n15. Overriding the <tt class=\" \">fireEvent</tt> method requires a change to the method signature. The argument has changed from a <tt class=\" \">KrollDict</tt> class to an <tt class=\" \">Object</tt>.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">boolean</code><code class=\"plain\"> fireEvent(String eventName, KrollDict data) {</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Override</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">boolean</code><code class=\"plain\"> fireEvent(String eventName, Object data) {</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\n16. <tt class=\" \">&lt;KrollInvocation&gt;.getTiContext()</tt> no longer exists. <tt class=\" \">TiContext</tt> is no longer needed. Some examples show this being used to get the <tt class=\" \">TiApplication</tt> instance. <tt class=\" \">TiApplication.getInstance()</tt> can be used instead.    </p>\n<p>\n17. Change usage of <tt class=\" \">KrollDict</tt> in method signatures to <tt class=\" \">HashMap</tt>. Dictionary values are now passed to methods as <tt class=\" \">HashMap</tt> objects. If you need to access any of the <tt class=\" \">KrollDict</tt> methods on the <tt class=\" \">HashMap</tt> object you can create a <tt class=\" \">KrollDict</tt> object from the <tt class=\" \">HashMap</tt> object.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> myMethod(KrollInvocation invocation, KrollDict args)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    TiBlob blob = (TiBlob) args.get(</code><code class=\"string\">\"image\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">int</code><code class=\"plain\"> myId = args.getInt(\"id);</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> myMethod(HashMap args) {</code></div>\n<div class=\"line\"><code class=\"plain\">    KrollDict argsDict = </code><code class=\"keyword\">new</code><code class=\"plain\"> KrollDict(args);</code></div>\n<div class=\"line\"><code class=\"plain\">    TiBlob blob = (TiBlob) args.get(</code><code class=\"string\">\"image\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">int</code><code class=\"plain\"> myID = argsDict.getInt(</code><code class=\"string\">\"id\"</code><code class=\"plain\">);</code></div>\n</div>\n</div> <p>\n18. <tt class=\" \">runOnUiThread</tt> is no longer supported. You must explicitly manage and call your methods on the UI thread where necessary. Specifically, you can use the <tt class=\" \">TiMessenger</tt> class to run code on the UI thread.    </p>\n<p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@Kroll</code><code class=\"plain\">.method(runOnUiThread = </code><code class=\"keyword\">true</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> refresh() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (_view != </code><code class=\"keyword\">null</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        _view.refresh();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <p>\nbecomes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">private</code><code class=\"plain\"> </code><code class=\"keyword\">static</code><code class=\"plain\"> </code><code class=\"keyword\">final</code><code class=\"plain\"> </code><code class=\"keyword\">int</code><code class=\"plain\"> MSG_REFRESH = </code><code class=\"value\">50000</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"keyword\">private</code><code class=\"plain\"> </code><code class=\"keyword\">final</code><code class=\"plain\"> Handler handler = </code><code class=\"keyword\">new</code><code class=\"plain\"> Handler(TiMessenger.getMainMessenger().getLooper(), </code><code class=\"keyword\">new</code><code class=\"plain\"> Handler.Callback ()</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">boolean</code><code class=\"plain\"> handleMessage(Message msg)</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">switch</code><code class=\"plain\"> (msg.what) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">case</code><code class=\"plain\"> MSG_REFRESH: {</code></div>\n<div class=\"line\"><code class=\"plain\">                AsyncResult result = (AsyncResult) msg.obj;</code></div>\n<div class=\"line\"><code class=\"plain\">                handleRefresh();</code></div>\n<div class=\"line\"><code class=\"plain\">                result.setResult(</code><code class=\"keyword\">null</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"keyword\">private</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> handleRefresh()</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    _view.refresh();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"color1\">@Kroll</code><code class=\"plain\">.method</code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> refresh() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (_view != </code><code class=\"keyword\">null</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (!TiApplication.isUIThread()) {</code></div>\n<div class=\"line\"><code class=\"plain\">            TiMessenger.sendBlockingMainMessage(handler.obtainMessage(MSG_REFRESH));</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            handleRefresh();</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> </div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Android Module Porting Guide for 1.8.0.1"});