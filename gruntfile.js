module.exports = function(grunt) { // Grunt wrapper - Do grunt-related things in here

  grunt.initConfig({ // Initialize our configuration object
    pkg: grunt.file.readJSON('package.json'), // Read project settings from package.json
    
    copy: {
      snippets: { 
      // This copies snippets from the src/snippets folder to the app/modules folder. 
      // All snippets are added you just need to uncomment the ones you have included in your markup.
        files: {
          // 'app/modules/menu-d-float.php': ['src/snippets/menu-d-float.php'],
          // 'app/modules/menu-d-sticky.php': ['src/snippets/menu-d-sticky.php'],
          // 'app/modules/menu-m-flyout.php': ['src/snippets/menu-m-flyout.php'],
          // 'app/modules/holding-page-head.php': ['src/snippets/holding-page-head.php'],
          // 'app/modules/google-map.php': ['src/snippets/google-map.php'],
        }
      },
      
      fontcopy:{ 
      //This task will find the relevant font files in the font folder and move them to the app folder.
        files: [
          {
            expand: true,
            cwd: 'src/fonts/',
            src: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
            dest: 'app/fonts/'
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
        'app/js/custom.min.js': ['src/js/custom.js'],
        'app/js/modernizer.min.js': ['src/js/modernizer.js']
        }
      },
      // The snippets uglify task for snippets with js files.
      // All snippets are added you just need to uncomment the ones you have included in your markup.
      snippets: {
        options: {
          mangle: false,
          // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
          // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
        // 'app/js/google-map.min.js': ['src/snippets/google-map.js'],
        }
      }

    },
    
    jshint: {
      // The jshint task. 
      files: [
      'src/js/custom.js', // Just watch the src js file not the minified one

      //The snippets
      // All snippets are listed below you just need to uncomment the ones you have included in order to have them tested when running "grunt test"

      //'src/snippets/google-map.js',
      ] 
    },
    
    less: { // Configure the less task
      development: {
        options: {
          paths: ["src/less"],
        },
        files: {
          // target.css file: source.less file
          "src/css/style.css": "src/less/style.less"
        }
      }
    },
    
    autoprefixer: { // Configure the autoprefixer task
      options: {
        browsers: ['last 3 versions'] // More options available for this see https://github.com/ai/autoprefixer#browsers
      },
      files: {
        src: 'src/css/style.css',
        dest: 'src/css/style.css' // Put the autoprefixed version right back over its original
      },
    },
    
    cssmin: { // Now we can minify the auto-prefixed version of the code
      minify: {
        options: {
          // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
          // banner: '/* <%= pkg.name %>.css minified <%= grunt.template.today("dd-mm-yyyy") %> */' // Give it a nice banner
        },
        files: {
          'app/css/style.min.css': ['src/css/style.css']
        }
      },
      fontmin: { //This task will find the stylesheet in the webkit folder, minify it and move it to the app folder
        files: [
          {
            expand: true,
            cwd: 'src/fonts/',
            src: ['**/*/stylesheet.css', 'font-awesome/css/font-awesome.css'],
            dest: 'app/fonts/',
            ext: '.min.css'
          }
        ]
      }
    },
    
    watch: { 
    // Configure the watch task
    // You should adapt this to your specific needs on a per project basis
      snippets: {
        files: ['src/snippets/*.php'],
        tasks: ['copy:snippets'],
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
        tasks: ['less'],
      },
      cssmin: {
        files: ['src/css/style.css'],
        tasks: ['cssmin:minify'],
      },
      livereload: {
        // Here we watch the files the css task will compile to
        // These files are sent to the live reload server after css compiles to them
        options: { livereload: true },
        files: ['app/**/*'],
      },
    }
    
  });
  
    // Load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Register a test task for jshint. This can be run just by typing "grunt test" on the command line
    grunt.registerTask('test', ['jshint'])

    //Register a task for setting the snippets the first time
    grunt.registerTask('snippetload', ['copy:snippets', 'uglify:snippets'])
    
    //Register a task for setting up the webkit fonts when picking up the project
    grunt.registerTask('fontload', ['copy:fontcopy', 'cssmin:fontmin'])
    
    // And register the default task. This can be run just by typing "grunt" on the command line. This should be done before production.
    grunt.registerTask('default', ['copy:snippets', 'uglify', 'less', 'autoprefixer', 'cssmin']);
    
};