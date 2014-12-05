Ext.data.JsonP['Integrating_with_Appcelerator_Cloud_Services']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Integrating with Appcelerator Cloud Services</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30084640\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30084640\"><span>Edit</span></a>\n<h1>Integrating with Appcelerator Cloud Services</h1>\n<div class=\"section section-2 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Objective\">\n<h2 class=\"heading \"><span>Objective</span></h2>\n<p>\nIn this section, you will learn how to utilize the Appcelerator Cloud Services (ACS) API, previously known as CocoaFish, for your mobile apps.    </p>\n</div>\n<div class=\"section section-2 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\nAppcelerator Cloud Services (ACS) provide a wide array of automatically-scaled network features and data objects for your app. Tasks such as push notifications, user logins, photo uploads, checkins and status updates that usually require server programming or tedious integration with multiple SDKs are performed through one simple interface.    </p>\n<p>\nWe worry about the database, file storage, search engine and application stack so that you can focus on what&rsquo;s really important: your app and your users. As usage of your app increases, ACS scales up automatically to handle the load without requiring you to do any additional work. Photos and other files are redundantly stored on multiple devices across multiple storage facilities, preventing data corruption and loss.    </p>\n<p>\nOver 25 APIs are available for immediate use in your app to provide the most popular network features. Writing, testing, and deploying server code is a thing of the past. Focus on your users and app features by using any combination of the following APIs:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nPush Notifications    </p>\n</li><li class=\" \"> <p>\nUser management    </p>\n</li><li class=\" \"> <p>\nPhoto manipulation and storage    </p>\n</li><li class=\" \"> <p>\nPlaces (rich location storage)    </p>\n</li><li class=\" \"> <p>\nSocial integration    </p>\n</li><li class=\" \"> <p>\nFile Storage (since SDK 2.1.1/module version 2.2.0)    </p>\n</li><li class=\" \"> <p>\nCheck-ins    </p>\n</li><li class=\" \"> <p>\nStatus updates    </p>\n</li><li class=\" \"> <p>\nChats    </p>\n</li><li class=\" \"> <p>\nFriend connections (since SDK 2.1.1/module version 2.2.0)    </p>\n</li><li class=\" \"> <p>\nRatings and Reviews    </p>\n</li><li class=\" \"> <p>\nDiscussion forums    </p>\n</li><li class=\" \"> <p>\nEvent planning (since SDK 2.1.1/module version 2.2.0)    </p>\n</li><li class=\" \"> <p>\nMessaging (since SDK 2.1.1/module version 2.2.0)    </p>\n</li><li class=\" \"> <p>\nKey-Value data storage    </p>\n</li><li class=\" \"> <p>\nAccess control lists (since 2.1.0)    </p>\n</li></ul> <p>\n</p>\n<div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n<div class=\"title\">ACS API support</div>\n<p>\nNote that when new APIs are added to ACS, they may not be immediately available in the Titanium.Cloud module.<br />The since version listed after some APIs indicates the Titanium Mobile SDK release that included support for<br />that API. (Note that the Titanium.Cloud module version is not always the same as the SDK version that it ships with.)    </p>\n</div>\n<p>\nACS is open to all app publishers, regardless of the development technology used to build the app &ndash; Titanium, Objective-C, Java, or HTML5 via frameworks like Sencha Touch or PhoneGap &ndash; we&rsquo;ve got you covered. Appcelerator Cloud Services provide a complete REST API along with iOS, Android, Javascript and Actionscript SDKs. Any device that can make HTTP requests over the Internet can securely use ACS as its server backend.    </p>\n<div class=\"section section-3 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-IntegratingACSintoyourapp\">\n<h3 class=\"heading \"><span>Integrating ACS into your app</span></h3>\n<p>\nTo integrate ACS into your app, you'll need to follow these four general steps:    </p>\n<ol class=\" \"><li class=\" \"> <p>\nRegister your app with Appcelerator Cloud Services    </p>\n</li><li class=\" \"> <p>\nConfigure your Titanium project to use ACS    </p>\n</li><li class=\" \"> <p>\nAuthenticate your API calls to the ACS cloud infrastructure    </p>\n</li><li class=\" \"> <p>\nImplement the Titanium ACS API calls within your app    </p>\n</li></ol> <p>\nYou might want to add a fifth step to this list: Manage the data your app collects by using the ACS control panel or RESTful API.    </p>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step1.RegisterYourAppwithAppceleratorCloudServices\">\n<h4 class=\"heading \"><span>Step 1. Register Your App with Appcelerator Cloud Services</span></h4>\n<p>\nUsing Appcelerator Cloud Services API to store and retrieve data for your app is easy. Applications are automatically registered with ACS when they are created in Studio, if you tick the &quot;Automatically cloud-enable this application&quot; in the <i class=\" \">New Titanium Project</i> wizard, and then can be viewed on the <a class=\"external-link external-link\" href=\"https://my.appcelerator.com/apps\" target=\"_blank\">My Apps</a> page of your account.    </p>\n<p>\nAlternatively, the app can be manually registered on the <a class=\"external-link external-link\" href=\"https://my.appcelerator.com/apps\" target=\"_blank\">My Apps</a> page by clicking the &quot;Register a New App&quot; link and specifying the app name and description. A unique App Key will be automatically generated. These values are then used within your app's code.    </p>\n</div>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step2.ConfigureyourTitaniumproject\">\n<h4 class=\"heading \"><span>Step 2. Configure your Titanium project</span></h4>\n<p>\nACS support is baked into Titanium. However, you must include the cloud services module into your project to use ACS functionality. In your app.js (or other suitable file), include the <tt class=\" \">require()</tt> statement as shown here:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Cloud = require(</code><code class=\"string\">'ti.cloud'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Cloud.debug = </code><code class=\"keyword\">true</code><code class=\"plain\">;  </code><code class=\"comments\">// optional; if you add this line, set it to false for production</code></div>\n</div>\n</div> <p>\nIn order for the <tt class=\" \">ti.cloud</tt> module to be recognized, ensure that the modules directive has been added to <tt class=\" \">tiapp.xml</tt>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;module platform=</code><code class=\"string\">\"commonjs\"</code><code class=\"plain\">&gt;ti.cloud&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/modules&gt;</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step3.Authentication\">\n<h4 class=\"heading \"><span>Step 3. Authentication</span></h4>\n<p>\nYour app must prove that it is allowed to talk to ACS. This keeps your data secure by preventing anyone from making requests to ACS that impersonate your app.  In order to make ACS calls, add the ACS App Key to your <tt class=\" \">tiapp.xml</tt> file.    </p>\n<p>\nIf you add ACS support to your application when you create it in Studio, Studio adds the authentication keys to your <tt class=\" \">tiapp.xml</tt> file. If you create an ACS application on the ACS web site, and want to add support for it to a Titanium project, you can add its keys to your <tt class=\" \">tiapp.xml</tt> file:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;property name=</code><code class=\"string\">\"acs-api-key\"</code><code class=\"plain\"> type=</code><code class=\"string\">\"string\"</code><code class=\"plain\">&gt;get_from_app_admin_page&lt;/property&gt;</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step4.ImplementtheTitaniumACSAPIs\">\n<h4 class=\"heading \"><span>Step 4. Implement the Titanium ACS APIs</span></h4>\n<p>\nThis is the magic, of course. This is where you add cloud services to your app using our APIs. With over 25 APIs available for you to use, we obviously can't cover them all here. But let's take a look at a couple of examples.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Create a user</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// example assumes you have a set of text fields named username, password, etc.</code></div>\n<div class=\"line\"><code class=\"plain\">Cloud.Users.create({</code></div>\n<div class=\"line\"><code class=\"plain\">    username: username.value,</code></div>\n<div class=\"line\"><code class=\"plain\">    password: password.value,</code></div>\n<div class=\"line\"><code class=\"plain\">    password_confirmation: confirmPassword.value,</code></div>\n<div class=\"line\"><code class=\"plain\">    first_name: firstName.value,</code></div>\n<div class=\"line\"><code class=\"plain\">    last_name: lastName.value</code></div>\n<div class=\"line\"><code class=\"plain\">}, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// user created successfully</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// oops, something went wrong</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Post a photo</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// assumes you've obtained a photo from the camera or gallery, with blob data stored in an object named photo</code></div>\n<div class=\"line\"><code class=\"comments\">// collectionID is an ID generated by ACS for a grouping of photos, you could retrieve via code or hard-code it</code></div>\n<div class=\"line\"><code class=\"plain\">Cloud.Photos.create({</code></div>\n<div class=\"line\"><code class=\"plain\">    photo: photo,</code></div>\n<div class=\"line\"><code class=\"plain\">    collection_id: collectionID,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">'photo_sync_sizes[]'</code><code class=\"plain\">: </code><code class=\"string\">'small_240'</code></div>\n<div class=\"line\"><code class=\"plain\">}, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// null out our photo objects to clean up memory</code></div>\n<div class=\"line\"><code class=\"plain\">        photo = </code><code class=\"keyword\">null</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        collectionID = </code><code class=\"keyword\">null</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"comments\">// oops, something went wrong</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Linking a Facebook login with your app</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Not shown is the code to implement the Facebook module in your app</code></div>\n<div class=\"line\"><code class=\"comments\">// call the ACS Facebook SocialIntegrations API to link logged in states</code></div>\n<div class=\"line\"><code class=\"plain\">function updateLoginStatus() {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.Facebook.loggedIn) {</code></div>\n<div class=\"line\"><code class=\"plain\">        label.text = </code><code class=\"string\">'Logging in to ACS as well, please wait...'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        Cloud.SocialIntegrations.externalAccountLogin({</code></div>\n<div class=\"line\"><code class=\"plain\">            type: </code><code class=\"string\">'facebook'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            token: Ti.Facebook.accessToken</code></div>\n<div class=\"line\"><code class=\"plain\">        }, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">                var user = e.users[</code><code class=\"value\">0</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">                alert(</code><code class=\"string\">'Logged in! You are now logged in as '</code><code class=\"plain\"> + user.id);</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">                error(e);</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        label.text = </code><code class=\"string\">'Please login to Facebook.'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// when the user logs into or out of Facebook, link their login state with ACS</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Facebook.addEventListener(</code><code class=\"string\">'login'</code><code class=\"plain\">, updateLoginStatus);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Facebook.addEventListener(</code><code class=\"string\">'logout'</code><code class=\"plain\">, updateLoginStatus);</code></div>\n<div class=\"line\"><code class=\"comments\">// add the Facebook login button</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(Ti.Facebook.createLoginButton({</code></div>\n<div class=\"line\"><code class=\"plain\">    top: </code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">}));</code></div>\n</div>\n</div> <p>\nOf course, there are many more examples we could show. Instead, head on over to the API documentation to view the samples included there plus the full explanation of ACS APIs.    </p>\n<p>\nThe Titanium.Cloud module also includes a sample application demonstrating each of the ACS request types. You can find this in the modules folder under the Titanium SDK folder. For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">/Library/Application Support/Titanium/modules/commonjs/ti.cloud/&lt;version&gt;/example</code></div>\n</div>\n</div> </div>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step5.Managingyourapp'sdata\">\n<h4 class=\"heading \"><span>Step 5. Managing your app's data</span></h4>\n<p>\nOf course, there's no sense in collecting data if you don't use it. Data created by your app is stored within the Appcelerator ACS cloud. You can view and manage this data through the ACS administrative web site. You can also use the RESTful API (or any of the other APIs) to extract the data you need.    </p>\n</div>\n<div class=\"section section-4 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Step6.SharingACSObjects\">\n<h4 class=\"heading \"><span>Step 6. Sharing ACS Objects</span></h4>\n<p>\nStarting in Release 2.1, The Titanium.Cloud module supports ACS Access Control Lists (ACLs) to control access to ACL resources. An ACL lets you grant read and write access to users other than the owner of an ACS object. An access control list controls read and write access to any ACS objects it's attached to. For ACS, read and write permission are defined as follows:    </p>\n<ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Read permission</strong>. Includes the ability to show, query and search ACS objects.    </p>\n</li></ul><ul class=\" \"><li class=\" \"> <p>\n<strong class=\" \">Write permission</strong>. Includes the ability to update and delete ACS objects.    </p>\n</li></ul> <p>\nAn ACL can include:    </p>\n<ul class=\" \"><li class=\" \"> <p>\nA list of user IDs granted read permission.    </p>\n</li><li class=\" \"> <p>\nA list of user IDs granted write permission.    </p>\n</li><li class=\" \"> <p>\nA public read flag granting read permission to <strong class=\" \">all</strong> users.    </p>\n</li><li class=\" \"> <p>\nA public write flag granting write permission to <strong class=\" \">all</strong> users.    </p>\n</li></ul> <p>\nThe object's owner always has read and write permission.    </p>\n<p>\nYou can specify an ACL when you create or update an object.    </p>\n<p>\nCurrently, ACLs can be used with the following ACS objects: Checkins, Custom Objects, Events, Files, Photos, Photo Collections, Places, Posts, Reviews and Statuses.    </p>\n<p>\nSee <a class=\"external-link external-link\" href=\"#!/api/Titanium.Cloud.ACLs\">Ti.Cloud.ACLs</a> for methods to create and update ACLs.    </p>\n</div>\n</div>\n<div class=\"section section-3 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-References\">\n<h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Cloud\">Titanium.Cloud Module Reference</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"/cloud/latest/#!/guide/acs_quickstart\">ACS Documentation</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"external-link external-link\" href=\"https://my.appcelerator.com/apps\" target=\"_blank\">ACS Administration site</a> (via your my.appcelerator.com page)    </p>\n</li></ul> </div>\n</div>\n<div class=\"section section-2 \" id=\"30084640_IntegratingwithAppceleratorCloudServices-Summary\">\n<h2 class=\"heading \"><span>Summary</span></h2>\n<p>\nIn this section, you briefly explored how to use the Appcelerator Cloud Services (aka CocoaFish) API in your mobile apps.    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Integrating with Appcelerator Cloud Services"});