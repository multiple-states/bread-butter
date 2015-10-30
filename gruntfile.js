module.exports = function(grunt) { // Grunt wrapper - Do grunt-related things in here

  // The grunt tasks are all spearate files in the grunt folder and are pulled in using the below load-grunt-config plugin
  // The tasks are registered in grunt/aliases.js
  // The plugin includes load-grunt-tasks which means you do not need to load your other plugins anywhere other than the package.json file
  require('load-grunt-config')(grunt, {

    // Pass some data to the config. 
    // This means you can use template tags 
    // We use <%= src %> or <%= app %>
    data: {
      src:  'src',  // The source folder (where we work)
      app:  'app', // The folder where we want to build our application when we run grunt tasks
      dist: 'dist' // The folder where we compile our distribution version of the project
    }

  }); // END require('load-grunt-config')

}; // END grunt wrapper