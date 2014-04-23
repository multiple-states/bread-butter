php-starter-template
====================

A php starter template.

Uses bootstrap for the grid: http://getbootstrap.com/

Uses less.

Uses grunt to compile the less files, minify the css and js and compile into the 'app' folder. The gruntfile.js has pretty decent comments.

You will have to install these dependencies (as well as node package manager and grunt):

grunt-contrib-uglify
grunt-contrib-jshint
grunt-contrib-less
grunt-contrib-copy
grunt-contrib-watch

AND install normalize ( 'npm install normalize.css' in the terminal).

Once you have done that run 'grunt setup' in the terminal to move normalize into the 'app' folder.

Set your local and remote urls in functions.php

Includes a rewrite rule in the .htaccess file that allows for clean urls.
