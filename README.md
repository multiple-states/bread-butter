Bread and butter
====================
Version 1.0.1

When you make a sandwich you don't bake the bread, you just add the flavour! A starter template for website builds. Bread and Butter is maintained by Multiple States. 

General description
--------------

This starter template is a good place to start for building the type of sites we generally build. It simplifies the setup of a site by including the bare minimum we begin with. 

* It uses the task automator Grunt (http://gruntjs.com/) for an easy build setup
* It uses the package manager Bower (http://bower.io/) to install dependencies like jquery and modernizer 
* It is designed to be used with a module based workflow (https://github.com/multiple-states/bread-butter/wiki/workflow) for all your website elements
* It uses the css pre-processor Less (http://lesscss.org/) for more powerful styling

Make sure you read through this wiki ( https://github.com/willmcl/bread-butter/wiki ) before diving into the project. If you have no experience with the technologies listed above don't be afraid, it is all dead easy after you read the wiki and do a little research on those technologies. We promise.

As this template is built with php you need to use MAMP (http://www.mamp.info/en/) to run it on your local machine. You also need to have some experience with Git (http://git-scm.com/). If you don't have any experience with _Git_ then take the time to learn it... Change your life that will.

Installation
--------------
Visit https://github.com/multiple-states/bread-butter/wiki/home for installation instructions.

Version Log
--------------

*v1.0.2*
* HOTFIX bug from last version - missing grunt task and incorrect js file names

*v1.0.1*
* Remove the functions file and $site_url variable
* Always require the latest versions of the Grunt dependencies

*v1.0.0*
* Small bug fixes  
* Create a grunt deploy task

*v0.11.2*
* Create a better pattern page for typographic elements

*v0.11.0*
* Remove bootstrap as a submodule. 
* Remove all bootstrap styling and structure from the css and html.
* Remove the .min file extension from the stylesheet in the grunt production task.

*v0.10.1*
* Remove styling from the html tag
* Add default code in .htaccess to allow cross domain font requests in all browsers
* Exclude Modernizer from the bower_concat task and add it to the uglify task and include in header.php
* Remove old SITE_ROOT variable from functions.php
* Added grunt-newer plugin to help with grunt-watch speed issues

*v0.10.0*
* Introduce the grunt-load-config plugin as a way to split our grunt tasks into separate files and make Bread and Butter more maintainable. 

*v0.9.1*
* Bower introduced to workflow
* New Grunt task to concat Jquery and Modernizr that have been added via Bower
* Added folders and files to the .gitignore 
* Updated the way we set folder paths in our gruntfile.js
* Removed all snippets - they are now all GISTs

*v0.9.0*
* First Beta release