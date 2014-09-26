module.exports = function(grunt) { // Grunt wrapper - Do grunt-related things in here

  // Set a path for the development, staging and build folders.
  // The benifit of doing this is that when it comes time to start plugging in a cms we can just alter this to point to a new folder, for example the wordpress theme folder.
  var config = {
    src: 'src', // Devlopment files
    app: 'app', // Staging files
    dist: 'dist' // Build files
  };

  grunt.initConfig({ // Initialize our configuration object

    // Project settings
    config: config,

    pkg: grunt.file.readJSON('package.json'), // Read project settings from package.json

    // DANGER ZONE! BE CAREFUL! 
    // This cleans the destination folder out completely. 
    // This shouldn't matter if you are using the correct Bread and Butter workflow and only working in the src folder but only you and the lord above know if that is the case.
    clean: ['<%= config.app %>/**/*', '<%= config.app %>/.htaccess'],

    copy: {

      pages: {
        // This copies the pages from the src/pages folder to the app folder
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/pages/',
            src: ['*.php', '*.html', '.htaccess'],
            dest: '<%= config.app %>/'
          }
        ]
      },

      modules: {        
        // This copies the modules from the src/modules folder to the app/modules folder
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/modules/',
            src: ['*.php'],
            dest: '<%= config.app %>/modules/'
          }
        ]
      },

      includes: {
        // This copies the includes from the src/includes folder to the app/includes folder
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/includes/',
            src: ['*.php'],
            dest: '<%= config.app %>/includes/'
          }
        ]
      },

      images: {
        // This copies the includes from the src/images folder to the app/images folder
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/images/',
            src: ['*.jpg', '*.png', '*.gif'],
            dest: '<%= config.app %>/images/'
          }
        ]
      },
      
      fontcopy:{ 
      // This task will find the relevant font files in the src/fonts folder and move them to the app/fonts folder.
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/fonts/',
            src: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
            dest: '<%= config.app %>/fonts/'
          }
        ]
      }
    },
    
    uglify: {

      // The base uglify task
      base: {
        options: {
          mangle: false,
          // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
          // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
        '<%= config.app %>/js/custom.min.js': ['<%= config.src %>/js/custom.js']
        }
      },

    },
    
    jshint: {

      // The jshint task. 
      files: [
      '<%= config.src %>/js/custom.js', // Just watch the src js file not the minified one
      ] 
    },
    
    less: { 

      // Configure the less task
      // The compilation of our css goes through three stages:
      // 1. We use this less task to compile the less to css in the src folder
      // 2. We use the auto-prefixer task to put prefixes for various browsers into our css file and move it to the app folder
      // 3. We use the cssmin task to minify that css file into a new file with the .min.css extension

      // So here we go...
      // 1. We use this less task to compile the less to css in the src folder
      development: {
        options: {
          paths: ["<%= config.src %>/less"],
        },
        files: {
          // target.css file: source.less file
          "<%= config.src %>/css/style.css": "<%= config.src %>/less/style.less"
        }
      }
    },
    
    autoprefixer: { 

      // We use the auto-prefixer task to put prefixes for various browsers into our css file and move it to the app folder
      options: {
        browsers: ['last 3 versions'] // More options available for this see https://github.com/ai/autoprefixer#browsers
      },
      files: {
        src: '<%= config.src %>/css/style.css',
        dest: '<%= config.app %>/style.css' // Put the autoprefixed version right back over its original
      }
    },    
    
    cssmin: {

      // We use the cssmin task to minify that css file into a new file with the .min.css extension
      minify: {
        options: {
          // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
          // banner: '/* <%= pkg.name %>.css minified <%= grunt.template.today("dd-mm-yyyy") %> */' // Give it a nice banner
        },
        files: {
          '<%= config.app %>/style.min.css': ['<%= config.app %>/style.css']
        }
      },

      // This task will find the stylesheet in the webkit folder, minify it and move it to the app folder
      fontmin: { 
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/fonts/',
            src: ['**/*/stylesheet.css'],
            dest: '<%= config.app %>/fonts/',
            ext: '.min.css'
          }
        ]
      }
    },

    pixrem: {

      // We run pixrem on that file to create fallback for our use of rem units. We rewrite the result over itself.
      options: {
        rootvalue: '62.5%' // We set this so that the 1 rem unit equals 10px. Easier to understand.
      },
      dist: {
        src: '<%= config.app %>/style.min.css',
        dest: '<%= config.app %>/style.min.css'
      }
    },
    
    // This grabs all the listed bower dependancies and adds them to once vendor.js file
    bower_concat: {

      all: {
        dest: '<%= config.app %>/js/vendor.min.js'
      }
    },

    watch: { 
    // Configure the watch task
    // You should adapt this to your specific needs on a per project basis
      pages: {
        files: ['src/pages/*.php'],
        tasks: ['copy:pages'],
      },
      modules: {
        files: ['src/modules/*.php'],
        tasks: ['copy:modules'],
      },
      includes: {
        files: ['src/includes/*.php'],
        tasks: ['copy:includes'],
      },
      images: {
        files: ['src/images/*'],
        tasks: ['copy:images'],
      },
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
      },
      uglify: {
        files: ['src/**/*.js'],
        tasks: ['uglify'],
      },
      css: {
        files: ['src/**/*.less'],
        tasks: ['less', 'autoprefixer', 'cssmin:minify'],
      },
      css: {
        files: ['src/**/*.less'],
        tasks: ['pixrem'],
      },
      livereload: {
        // Here we watch the files the watch task will change.
        // These files are then sent to the live reload server.
        options: { livereload: true },
        files: ['<%= config.app %>/**/*'],
      },
    }
    
  });
  
    // Auto load the grunt tasks
    require('load-grunt-tasks')(grunt);
    
    // Register a test task for jshint. This can be run just by typing "grunt test" on the command line
    grunt.registerTask('test', [
      'jshint'
    ]);
    
    //Register a task for setting up the webkit fonts when picking up the project
    grunt.registerTask('fontload', [
      'copy:fontcopy', 
      'cssmin:fontmin'
    ]);

    grunt.registerTask('build', [
        'useminprepare', 
        'concat', 
        'uglify'
    ]);
    
    // And register the default task. This can be run just by typing "grunt" on the command line. This should be done before production.
    grunt.registerTask('default', [
      'copy:pages', 
      'copy:modules', 
      'copy:includes', 
      'copy:images', 
      'uglify', 
      'less', 
      'autoprefixer', 
      'cssmin', 
      //'pixrem'
    ]);
    
};