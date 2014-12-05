Ext.data.JsonP['PyDev_Project_Configuration']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>PyDev Project Configuration</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"30083049\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083049\"><span>Edit</span></a>\n<h1>PyDev Project Configuration</h1>\n<p>\nHere you will learn to <strong class=\" \">further configure your project</strong> and add Python information to an already existing project.    </p>\n<p>\nThe first thing to know about PyDev is that to use it to its 'full extent', you must have your python modules beneath a <strong class=\" \">source folder</strong> (the source folders are the paths that are added to your PYTHONPATH).    </p>\n<p>\nYou can add a new source folder in the menu: <strong class=\" \">File &gt; new &gt; other &gt; PyDev &gt; source folder</strong>.    </p>\n<p>\n<strong class=\" \">NOTE:</strong> You may use PyDev without configuring that, for quick scripts, but some features such as code analysis may not work at all (but you will still have syntax highlighting and the default editor actions).    </p>\n<p>\n<img src=\"images/pydev.org/images/new_source_folder.png\" alt=\"images/pydev.org/images/new_source_folder.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />When you add a source folder to an existing project, it will 'automatically' add the PyDev information to it (in Eclipse terms, it will add<br />its nature to it).    </p>\n<p>\nYou may see which Python information your project has by going to the PyDev Package Explorer, rigth-clicking the project you want info on and selecting 'properties' (or pressing Alt+Enter with the project selected):    </p>\n<p>\n<img src=\"images/pydev.org/images/navigator_rigth_click.png\" alt=\"images/pydev.org/images/navigator_rigth_click.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />The project properties allow you to see the <strong class=\" \">source folders</strong> and the <strong class=\" \">external source folders</strong> that will be added to your <strong class=\" \">PYTHONPATH</strong>.    </p>\n<p>\nThe external source folders are useful if you have some external library or compiled extension that is used solely for one project, so that you don't have to add it to the system PYTHONPATH, however, the information on such folders works as the system information works, it is gathered once and then 'set in stone', so, if you will change it, it is recommended that you create a project for it and make a project reference to that project.    </p>\n<p>\n<img src=\"images/pydev.org/images/project_properties.png\" alt=\"images/pydev.org/images/project_properties.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />The <strong class=\" \">force restore internal info</strong> may be useful if you had an external library that changed and just want to update its information, or<br />you believe that for some reason PyDev did not succeed in synchronizing with the latest code-changes you did.    </p>\n<p>\nThe <strong class=\" \">String Substitution Variables</strong> can be used in conjunction with the <strong class=\" \">source folders</strong>, <strong class=\" \">external source folders</strong> and <strong class=\" \">run configurations</strong>. From the example below, if a reference ${GOOGLE_APP_ENGINE}/lib was present in the external source folders, it'd be resolved to D:/bin/google_app_engine122/lib.    </p>\n<p>\n<img src=\"images/pydev.org/images/project_properties_substitution.png\" alt=\"images/pydev.org/images/project_properties_substitution.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />Also, you may change your project type as you wish. E.g.: You can set an existing python project as a jython project in the screen below.    </p>\n<p>\nNote that here you can also set a different grammar version (you can have configured an interpreter that uses grammar 2.6 and still use a 2.4 grammar &ndash; this is done so that you can use newer interpreter while programming using an older grammar, which is useful on cases where you have to keep backward compatibility).    </p>\n<p>\nThe selection of the interpreter will define which interpreter will be used to create the default run configurations and the shells for code-completion purposes (to gather the forced builtins).    </p>\n<p>\n<img src=\"images/pydev.org/images/project_type.png\" alt=\"images/pydev.org/images/project_type.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n<br />To reference another project, just go to the 'project references' page.    </p>\n<p>\nThe referenced projects are the projects whose source folders are added to the PYTHONPATH for the referrer project.    </p>\n<p>\nThis is very important so that code completion and run configurations work correctly.    </p>\n<p>\nNote that it'll get the configurations recursively, so, if a project A depends on B, which in turn depends on C, you just have to add a reference from A to B (and C will already be automatically referenced)    </p>\n<p>\n<img src=\"images/pydev.org/images/project_refs.png\" alt=\"images/pydev.org/images/project_refs.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\" />\n</p>\n<div class=\"section section-2 \" id=\"30083049_PyDevProjectConfiguration-ProjectreferenceforJythonusers\">\n<h2 class=\"heading \"><span>Project reference for Jython users</span></h2>\n<p>\nJython projects may reference Java (JDT) projects. To create that reference, it's not enough to just add the reference to the JDT project from the PyDev project, the JDT project must be <strong class=\" \">set as a PyDev project and its bin folders must be properly configured as source folders for PyDev</strong>.    </p>\n<p>\nTo do that, right-click the project and select <strong class=\" \">PyDev &gt; Set as PyDev project</strong> and add the <strong class=\" \">bin</strong> folders as if they were regular <strong class=\" \">PyDev source folders</strong> (the ones containing your .class files &ndash; the folders containing the .java classes shouldn't be referenced in the PyDev config).    </p>\n<p>\n<strong class=\" \">Note:</strong> Before version <strong class=\" \">1.4.8</strong>, PyDev did not handle a JDT project which had .py files correctly (even if the folders were properly configured)    </p>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"PyDev Project Configuration"});