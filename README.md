php-starter-template
====================

A php starter template.

Uses less.

Uses bootstrap for the grid: http://getbootstrap.com/

Bootstrap is added as a submodule within src>less>bootstrap

Use:

$ git submodule init
$ git submodule update

when cloning this for the first time.

Uses grunt to compile the less files, minify the css and js and compile into the 'app' folder. The gruntfile.js has pretty decent comments.

You will have to install these dependencies (as well as node package manager and grunt) in order to run the grunt commands:

grunt-contrib-uglify
grunt-contrib-jshint
grunt-contrib-less
grunt-contrib-copy
grunt-contrib-watch

Use "grunt watch" when developing as this will automatically compile your less. There is a livereload option set in the watch task but you need to install an extension on your browser for it to work. 
<a href="http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-">Get them here.</a>

Set your local and remote urls in functions.php

Includes a rewrite rule in the .htaccess file that allows for clean urls.
