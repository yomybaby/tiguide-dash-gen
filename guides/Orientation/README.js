Ext.data.JsonP['Orientation']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Orientation</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004932\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004932\"><span>Edit</span></a>\n<h1>Orientation</h1>\n<div class=\"section section-2 \" id=\"29004932_Orientation-Objective\">\n<h2 class=\"heading \"><span>Objective</span></h2>\n<p>\nIn this section, you will learn how you can handle device orientation. We'll take a look at your options for setting the UI orientation. Then, we'll show you how you can react to orientation changes within your app.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004932_Orientation-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\nYou have a few options for handling device orientation:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nLock orientation for the whole app    </p>\n</li><li class=\" \"> <p>\nLock the orientation for a given window    </p>\n</li><li class=\" \"> <p>\nReact to orientation changes.    </p>\n</li></ul> <p>\nBefore we begin, it's important to cover some caveats and subtleties on Android. With that platform, it's important that you keep in mind that the orientation values you <i class=\" \">set</i> don't match those you <i class=\" \">get</i>. With Android, you can set the UI orientation to any of four possibilities: portrait upright, landscape right, portrait upside-down, and landscape left. But, when you request the current orientation, you'll get one of two values: portrait or landscape. This is a <i class=\" \">platform</i> feature, not a Titanium implementation issue.    </p>\n<p>\nA further consideration is that portrait and landscape vary between phones and tablets. A phone is in portrait mode when its &quot;top&quot; is at 0 degrees (hardware buttons at the bottom) and landscape when the &quot;top&quot; is at 270 degrees. A tablet is in landscape mode when its top is at 0 and portrait when its top is at 90 degrees. (Based on sensor degrees.) These portrait/landscape values are what you receive when you <i class=\" \">get</i> the devices current orientation.    </p>\n<p>\nWith those caveats in mind, let's proceed...    </p>\n<div class=\"section section-3 \" id=\"29004932_Orientation-Orientationdesignprinciples\">\n<h3 class=\"heading \"><span>Orientation design principles</span></h3>\n<p>\n<a class=\"external-link external-link\" href=\"http://developer.apple.com/library/ios/#documentation%2FUserExperience%2FConceptual%2FMobileHIG%2FUEBestPractices%2FUEBestPractices.html%23%2F%2Fapple_ref%2Fdoc%2Fuid%2FTP40006556-CH20-SW1\" target=\"_blank\">Apple's Developer documentation</a> says: &quot;People expect to use your app in different orientations, and it&rsquo;s best when you can fulfill that expectation.&quot; In other words, don't look at handling orientation as a bother but an opportunity.    </p>\n<p>\nApple further recommends that when choosing to lock or support orientation, you should consider following these principles:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nOn iPhone/iPod Touch &ndash; don't mix orientation of windows within a single app; so, either lock orientation for the whole app, or react to orientation changes.    </p>\n</li><li class=\" \"> <p>\nOn iPhone &ndash; don't support the portrait-upside-down orientation, because that could leave the user with their phone upside-down when receiving a phone call.    </p>\n</li><li class=\" \"> <p>\nOn iPad &ndash; you should support all orientations because that matches how people use those devices.    </p>\n</li></ul> <p>\nThese same principles apply to an Android app as well.    </p>\n<div class=\"section section-4 \" id=\"29004932_Orientation-Orientationisanopportunity\">\n<h4 class=\"heading \"><span>Orientation is an opportunity</span></h4>\n<p>\nRather than considering orientation a &quot;necessary evil&quot; to handle, think of it as an opportunity. When a user rotates their device, you could display different content. Consider a recipe app that shows a list of ingredients when in portrait mode but shows cooking directions when the device is in landscape mode. Some handsets mute the speaker when the device is face down. You can probably think of other interesting ways your app could react to an orientation change.    </p>\n</div>\n</div>\n<div class=\"section section-3 \" id=\"29004932_Orientation-Limitingorientationmodessupportedbyyourapp\">\n<h3 class=\"heading \"><span>Limiting orientation modes supported by your app</span></h3>\n<p>\nYou specify the orientations your app can support by modifying the tiapp.xml file. This type of configuration controls the splash screen orientation possibilities. And it constrains which orientations the windows of your apps could possible show in, but not necessarily the orientation of a specific window.    </p>\n<p>\nThe techniques for iOS and Android vary, so we'll look at them separately.    </p>\n<div class=\"section section-4 \" id=\"29004932_Orientation-LimitingorientationmodesoniOS\">\n<h4 class=\"heading \"><span>Limiting orientation modes on iOS</span></h4>\n<p class=\"p1\">\nSpecify the orientation modes the application needs to support with the <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#%2F%2Fapple_ref%2Fdoc%2Fuid%2FTP40009252-SW10\" target=\"_blank\"><tt class=\" \">UISupportedInterfaceOrientations</tt></a> key in the iOS plist section of the project's <tt class=\" \">tiapp.xml</tt> file.    </p>\n<p class=\"p1\">\nBy default, Titanium sets iPhone applications to support upright portrait only and iPad application to support all orientation modes.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\"> encoding=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;ti:app xmlns:ti=</code><code class=\"string\">\"http://ti.appcelerator.org\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;key&gt;UISupportedInterfaceOrientations~iphone&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;string&gt;UIInterfaceOrientationPortrait&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;key&gt;UISupportedInterfaceOrientations~ipad&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;string&gt;UIInterfaceOrientationPortrait&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;string&gt;UIInterfaceOrientationPortraitUpsideDown&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;string&gt;UIInterfaceOrientationLandscapeLeft&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;string&gt;UIInterfaceOrientationLandscapeRight&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"29004932_Orientation-LimitingorientationmodesonAndroid\">\n<h4 class=\"heading \"><span>Limiting orientation modes on Android</span></h4>\n<p>\nLimiting orientation on Android can also be accomplished via the <tt class=\" \">tiapp.xml</tt> file, though not in the same way. The primary configuration file for Android apps is the<tt class=\" \"> AndroidManifest.xml</tt> file. At build time, entries in your project's <tt class=\" \">tiapp.xml</tt> file are used to create the Android Manifest that's packaged with your app. To force orientation support, you'll need to copy some entries from generated Android Manifest file back into <tt class=\" \">tiapp.xml</tt>, modify them, then build your app again.    </p>\n<ol class=\" \"><li class=\" \"> <p>\nBuild your app in Titanium.    </p>\n</li><li class=\" \"> <p>\nOpen the <tt class=\" \">tiapp.xml</tt> file and display its XML contents.    </p>\n</li><li class=\" \"> <p>\nNext, you need to adjust the <tt class=\" \">&lt;android&gt;</tt> node:    </p>\n<ol class=\" \"><li class=\" \"> <p>\nFrom the line that reads <tt class=\" \">&lt;android xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;/&gt;</tt>, delete the &quot;/&quot; at the end (to change it from an empty tag to an opening tag).    </p>\n</li><li class=\" \"> <p>\nAdd a new closing <tt class=\" \">&lt;/android&gt;</tt> tag    </p>\n</li><li class=\" \"> <p>\nBetween those tags, add new <tt class=\" \">&lt;manifest&gt;&lt;/manifest&gt;</tt> tags.    </p>\n</li></ol></li><li class=\" \"> <p>\nOpen <tt class=\" \">&lt;PROJECT_NAME&gt;/build/android/AndroidManifest.xml</tt> in Studio (or a text editor of your choice).    </p>\n</li><li class=\" \"> <p>\nCopy the <tt class=\" \">&lt;application&gt;</tt> node, which contains all of the <tt class=\" \">&lt;activity&gt;</tt> nodes from that file, for example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">AndroidManifest.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\"> encoding=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;manifest xmlns:android=</code><code class=\"string\">\"http://schemas.android.com/apk/res/android\"</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">=</code><code class=\"string\">\"com.myapp.app\"</code><code class=\"plain\"> android:versionCode=</code><code class=\"string\">\"1\"</code><code class=\"plain\"> android:versionName=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-sdk android:minSdkVersion=</code><code class=\"string\">\"10\"</code><code class=\"plain\"> android:targetSdkVersion=</code><code class=\"string\">\"19\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Start Copying Here --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;application android:icon=</code><code class=\"string\">\"@drawabe/appicon\"</code><code class=\"plain\"> android:label=</code><code class=\"string\">\"MyApp\"</code><code class=\"plain\"> android:name=</code><code class=\"string\">\"MyappApplication\"</code><code class=\"plain\"> android:debuggable=</code><code class=\"string\">\"false\"</code><code class=\"plain\"> android:theme=</code><code class=\"string\">\"@style/Theme.AppCompat\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;activity android:name=</code><code class=\"string\">\".MyappActivity\"</code><code class=\"plain\"> android:label</code><code class=\"string\">\"@string/app_name\"</code><code class=\"plain\"> android:theme=</code><code class=\"string\">\"@style/Theme.Titanium\"</code><code class=\"plain\"> android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;action android:name=</code><code class=\"string\">\"android.intent.action.MAIN\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;category android:name=</code><code class=\"string\">\"android.intent.category.LAUNCHER\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;/intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/activity&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;activity android:name=</code><code class=\"string\">\"org.appcelerator.titanium.TiActivity\"</code><code class=\"plain\"> android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;activity android:name=</code><code class=\"string\">\"org.appcelerator.tianium.TiTranslucentActivity\"</code><code class=\"plain\"> android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code><code class=\"plain\"> android:theme=</code><code class=\"string\">\"@style/Theme.AppCompat.Translucent\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;activity android:name=</code><code class=\"string\">\"ti.modules.titanium.ui.android.TiPreferencesActivity\"</code><code class=\"plain\"> android:configChanges=</code><code class=\"string\">\"screenSize\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/application&gt;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Stop Copying Here --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.INTERNET\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_WIFI_STATE\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_NETWORK_STATE\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.WRITE_EXTERNAL_STORAGE\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_COARSE_LOCATION\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_FINE_LOCATION\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_MOCK_LOCATION\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/manifest&gt;</code></div>\n</div>\n</div></li><li class=\" \"> <p>\nPaste them between the <tt class=\" \">&lt;manifest&gt;&lt;/manifest&gt;</tt> tags you added to the <tt class=\" \">tiapp.xml</tt> file. From now on, each time your app is built, Titanium will copy these activity tags to the Android Manifest file it generates. You're now ready to specify the UI orientation.    </p>\n</li><li class=\" \"> <p>\nFor each activity tag, add the <tt class=\" \">android:screenOrientation</tt> attribute.  Set it to the orientation type you want to use.  For example, <tt class=\" \">nosensor</tt> locks the application in the device's preferred orientation mode, which is usually portrait for phones and landscape for tablets.  For a full list of orientation types, see <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/manifest/activity-element.html#screen\" target=\"_blank\">http://developer.android.com/guide/topics/manifest/activity-element.html#screen</a>.    </p>\n</li></ol> <p>\nThe final manifest section of your <tt class=\" \">tiapp.xml</tt> file should look similar to the example below. If you need to debug the application, set the <tt class=\" \">application</tt> element's <tt class=\" \">android:debuggable</tt> attribute to <tt class=\" \">true</tt>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\"> encoding=</code><code class=\"string\">\"UTF-8\"</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;ti:app xmlns:ti=</code><code class=\"string\">\"http://ti.appcelerator.org\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;android xmlns:android=</code><code class=\"string\">\"http://schemas.android.com/apk/res/android\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    \t&lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;application android:icon=</code><code class=\"string\">\"@drawable/appicon\"</code></div>\n<div class=\"line\"><code class=\"plain\">                         android:label=</code><code class=\"string\">\"MyApp\"</code></div>\n<div class=\"line\"><code class=\"plain\">                         android:name=</code><code class=\"string\">\"MyappApplication\"</code></div>\n<div class=\"line\"><code class=\"plain\">                         android:debuggable=</code><code class=\"string\">\"false\"</code></div>\n<div class=\"line\"><code class=\"plain\">                         android:theme=</code><code class=\"string\">\"@style/Theme.AppCompat\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;activity android:screenOrientation=</code><code class=\"string\">\"nosensor\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:name=</code><code class=\"string\">\".MyappActivity\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:label=</code><code class=\"string\">\"@string/app_name\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:theme=</code><code class=\"string\">\"@style/Theme.Titanium\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t&lt;intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t&lt;action android:name=</code><code class=\"string\">\"android.intent.action.MAIN\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t\t&lt;category android:name=</code><code class=\"string\">\"android.intent.category.LAUNCHER\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t\t&lt;/intent-filter&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;/activity&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;activity android:screenOrientation=</code><code class=\"string\">\"nosensor\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:name=</code><code class=\"string\">\"org.appcelerator.titanium.TiActivity\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;activity android:screenOrientation=</code><code class=\"string\">\"nosensor\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:name=</code><code class=\"string\">\"org.appcelerator.titanium.TiTranslucentActivity\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:configChanges=</code><code class=\"string\">\"keyboardHidden|orientation|screenSize\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:theme=</code><code class=\"string\">\"@style/Theme.AppCompat.Translucent\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t&lt;activity android:screenOrientation=</code><code class=\"string\">\"nosensor\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:name=</code><code class=\"string\">\"ti.modules.titanium.ui.android.TiPreferencesActivity\"</code></div>\n<div class=\"line\"><code class=\"plain\">                          android:configChanges=</code><code class=\"string\">\"screenSize\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;/application&gt;  </code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"29004932_Orientation-Limitingorientationmodessupportedbyawindow\">\n<h4 class=\"heading \"><span>Limiting orientation modes supported by a window</span></h4>\n<p>\nThe preceding techniques control the orientation modes supported by your entire app, including all its windows. But what if you want window A to be in portrait while window B is in landscape? You can limit the orientation modes supported by a specific window by setting the window's <tt class=\" \">orientationModes</tt> property. This property accepts an array of Ti.UI constants that specify the window's permitted orientations. Remember, you must have enabled the various orientations in the tiapp.xml before setting a window to that orientation.    </p>\n<div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<div class=\"title\">iOS Platform Notes</div>\n<p class=\"p1\">\nUsing the Window's <tt class=\" \">orientationModes</tt> property to force the orientation of non-modal windows is considered a bad practice and will not be supported, including forcing the orientation of windows inside a NavigationWindow or TabGroup.    </p>\n<p class=\"p1\">\nModal windows should not support orientation modes that the window they are opened over do not support. Doing otherwise <strong class=\" \">may</strong> cause bad visual/redraw behavior after the modal is dismissed, due to how iOS manages modal transitions. Beginning with 3.1.3, if the <tt class=\" \">orientationModes</tt> property of a modal window is undefined, then the orientations supported by this window would be the orientation modes specified in the <tt class=\" \">tiapp.xml</tt>.    </p>\n</div>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">/* on Android, it needs to be a \"heavyweight\" window */</code></div>\n<div class=\"line\"><code class=\"plain\">\tfullscreen: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">/* This works on iOS */</code></div>\n<div class=\"line\"><code class=\"plain\">\torientationModes: [</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.UI.PORTRAIT,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.UI.UPSIDE_PORTRAIT</code></div>\n<div class=\"line\"><code class=\"plain\">\t]</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// but for Android using Titanium prior to 2.1 you have to set it after creation</code></div>\n<div class=\"line\"><code class=\"plain\">win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"29004932_Orientation-Settingorientationsummary\">\n<h4 class=\"heading \"><span>Setting orientation summary</span></h4>\n<ul class=\" \"><li class=\" \"> <p>\nYou want to limit to only portrait or to only landscape &ndash; set the desired orientation value in the tiapp.xml as described in the &quot;Limiting orientation modes supported by your app&quot; section above. You don't need to set <tt class=\" \">win.orientationModes</tt>.    </p>\n</li><li class=\" \"> <p>\nYou want to have some windows (or tabs) in one orientation and other windows in another orientation &ndash; enable each of the supported orientations in tiapp.xml, then specify each window's orientation using the <tt class=\" \">win.orientationModes</tt> property.    </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-3 \" id=\"29004932_Orientation-Reactingtoorientationchanges\">\n<h3 class=\"heading \"><span>Reacting to orientation changes</span></h3>\n<p>\nThe most powerful way to handle orientation is for your app to react to changes and update its UI. You'd reposition buttons, images, and so forth when the user turns their device. You detect orientation changes via the <tt class=\" \">Ti.Gesture</tt> object.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.Gesture.addEventListener(</code><code class=\"string\">'orientationchange'</code><code class=\"plain\">,function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// get current device orientation from</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Titanium.Gesture.orientation</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// get orientation from event object</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// from e.orientation</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// Ti.Gesture.orientation should match e.orientation</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// but iOS and Android will report different values</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// two helper methods return a Boolean</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// e.source.isPortrait()</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// e.source.isLandscape()</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> <p>\nIf you've watched any of Kevin Whinnery's videos or read his Forging Titanium posts, you should be familiar with his recommendation to write &quot;component-oriented apps.&quot; In such apps, your UI is divided into functional components that &quot;know&quot; how to update themselves. For example, if you look at the finished code for our <a class=\"document-link \" href=\"#!/guide/Working_with_Local_Data_Sources\" Working_with_Local_Data_Sources.html=\"Working_with_Local_Data_Sources.html\">Local Data</a> lab, you'll see that the table &quot;knows&quot; how to populate itself.    </p>\n<p>\nFollowing his technique, in the <tt class=\" \">orientationchange</tt> event handler, you'd fire an app-level event using <tt class=\" \">Ti.App.fireEvent()</tt>. Within each of your UI components, you would have an app-level listener for that event which would update the component with new layout specifics.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.Gesture.addEventListener(</code><code class=\"string\">'orientationchange'</code><code class=\"plain\">,function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.App.fireEvent(</code><code class=\"string\">'orient'</code><code class=\"plain\">, {portrait:e.source.isPortrait()});</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// ... elsewhere ...</code></div>\n<div class=\"line\"><code class=\"plain\">var myCustomView = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar view = Ti.UI.createView({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttop:</code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tleft:</code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">/* etc */</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.App.addEventListener(</code><code class=\"string\">'orient'</code><code class=\"plain\">, function(evt) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\">(evt.portrait===</code><code class=\"keyword\">true</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tview.left = </code><code class=\"value\">10</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tview.left = </code><code class=\"value\">50</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div> <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n<p>\n<strong class=\" \">Don't use orientation event listeners to force orientation support</strong> </p>\n<p>\nUsing events to limit supported orientations is not recommended. We've see community-contributed code that suggests you add an orientation event listener in your app; when it fires, you'd set the window's orientation to a specific direction. The rationale is that doing so provides a means to specify orientation without modifying the iOS or Android configuration files. We do not recommend this for a few reasons:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nThe app's screen could temporarily draw in the unwanted orientation before being forced back to the desired orientation.    </p>\n</li><li class=\" \"> <p>\nAdding an unnecessary &quot;super-global&quot; event listener opens the possibility of creating a memory leak. See the <a class=\"document-link \" href=\"#!/guide/Managing_Memory_and_Finding_Leaks\" Managing_Memory_and_Finding_Leaks.html=\"Managing_Memory_and_Finding_Leaks.html\">Managing Memory and Finding Leaks</a> guide for further information.    </p>\n</li><li class=\" \"> <p>\nAnd, why use a kludge when you could follow the proper technique to limit the orientation via settings in the configuration files?    </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-3 \" id=\"29004932_Orientation-Splashscreensupportforvariousorientations\">\n<h3 class=\"heading \"><span>Splash screen support for various orientations</span></h3>\n<p>\nSplash screens are shown when your app launches. A default PNG file is provided with a new Titanium project to bue used as your app's splash screen. You can change, but not remove entirely the splash screen: it is displayed while your app is launching and is removed when the entry-point window of your app is ready for user interaction.    </p>\n<ul class=\" \"><li class=\" \"> <p>\nAndroid    </p>\n<ul class=\" \"><li class=\" \"> <p>\nThe filename must be <tt class=\" \">default.png</tt> with a lowercase <strong class=\" \">d</strong>. Because this is platform specific, this file will typically be found in your project's <tt class=\" \">Resources/android</tt> directory.    </p>\n</li><li class=\" \"> <p>\nYou can provide splash screen files specific to device resolution, density, and orientation on Android. Because the same rules that apply to Android images apply to splash screens, you can follow the conventions discussed in <a class=\"document-link \" href=\"#!/guide/Images_and_ImageView_APIs\" Images_and_ImageView_APIs.html=\"Images_and_ImageView_APIs.html\">Images and ImageView APIs</a>.    </p>\n</li></ul></li><li class=\" \"> <p>\niOS    </p>\n<ul class=\" \"><li class=\" \"> <p>\nThe filename must be <tt class=\" \">Default.png</tt> with an uppercase <strong class=\" \">D</strong>. Because this is platform specific, this file will typically be found in your project's <tt class=\" \">Resources/iphone</tt> directory.    </p>\n</li><li class=\" \"> <p>\nYou can provide a retina version of your splash screen, named <tt class=\" \">Default@2x.png</tt>.    </p>\n</li><li class=\" \"> <p>\nFor iPad and Universal apps, you should supply <tt class=\" \">Default-Landscape.png</tt> and <tt class=\" \">Default-Portrait.png</tt> iPad splash screen files.    </p>\n</li></ul></li></ul> </div>\n<div class=\"section section-3 \" id=\"29004932_Orientation-References\">\n<h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \"> <p>\nDeveloper Blog &ndash; <a class=\"external-link external-link\" href=\"http://developer.appcelerator.com/blog/2011/07/android-window-orientation-behavior-change-for-1-7-2.html\" target=\"_blank\">Android Window Orientation Behavior Change for 1.7.2</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Layouts,_Positioning,_and_the_View_Hierarchy\" Layouts,_Positioning,_and_the_View_Hierarchy.html=\"Layouts,_Positioning,_and_the_View_Hierarchy.html\">Layouts, Positioning, and the View Hierarchy</a> </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-2 \" id=\"29004932_Orientation-Summary\">\n<h2 class=\"heading \"><span>Summary</span></h2>\n<p>\nIn this section, you learned how to specify, detect, and react to device orientation. You learned can lock the orientation of the entire app, specify the orientation of a window within your app, or react to orientation changes dynamically.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Orientation"});