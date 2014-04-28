php-starter-template
====================

A php starter template.

Stlying:

Uses less and tries to follow the SMACCS methodology documneted <a href="http://smacss.com/">here</a>.

A default structure 

Bootstrap:

Uses bootstrap for the grid: http://getbootstrap.com/
Bootstrap is added as a submodule within src>less>bootstrap

Use:
$ git submodule init
$ git submodule update
when cloning this for the first time.

Because I don't want all of bootstrap just the grid (I want my designs and builds to have a personality of their own) I have built my own custom version by importing only the less files I want at the top of my style.less file. 

The Grunt build setup:

Uses grunt to compile the less files, minify the css and js and compile into the 'app' folder. The gruntfile.js has pretty decent comments.
You will have to install these dependencies (as well as node package manager and grunt) in order to run the grunt commands:

grunt-contrib-copy
grunt-contrib-uglify
grunt-contrib-jshint
grunt-contrib-less
grunt-autoprefixer
grunt-contrib-cssmin
grunt-contrib-watch

Use "grunt watch" when developing as this will automatically compile your less. There is a livereload option set in the watch task but you need to install an extension on your browser for it to work. 
<a href="http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-">Get them here.</a>

Snippets:

A snippets system has been started to include more common elements of code (like menus). 

The styles for can be found in src>less>snippets
The mark-up can be found in src>snippets
The javascript can be found in src>js>snippets

When adding a snippet you will need to
1. Import the default styles into your modules.less file
2. Include the php file within your markup
3. Include the .js file (still working on this)
4. Add your file to the copy task in gruntfile.js
5. Add your snippet.js file to the ugilfy task in gruntfile.js
6. Run the default grunt task

Other useful stuff:

Set your local and remote urls in functions.php

Includes a rewrite rule in the .htaccess file that allows for clean urls.
