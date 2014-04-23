module.exports = function(grunt) { // Grunt wrapper - Do grunt-related things in here

	grunt.initConfig({ // Initialize our configuration object
		pkg: grunt.file.readJSON('package.json'), // Read project settings from package.json
		
		uglify: {
			options: {
				mangle: false,
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			my_target: {
				files: {
				'app/js/custom.min.js': ['src/js/custom.js'],
				'app/js/modernizer.min.js': ['src/js/modernizer.js']
				}
			}
		},
		
		jshint: {
			files: ['src/js/custom.js'] // Just watch the src js file not the minified one
		},
		
		less: { // Configure the less task
			development: {
				options: {
					paths: "src/less",
					cleancss: true, //Lets minify the css while we are at it
				},
				files: {
					// target.css file: source.less file
					"app/css/style.min.css": "src/less/style.less"
				}
			}
		},
		
		watch: { // Configure the watch task
			scripts: {
				files: ['**/*.less', '<%= jshint.files %>'],
				tasks: ['less', 'jshint'],
			},
		}
		
	});
	
		// Load the tasks
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-watch');
		
		// Register a test task for jshint. This can be run just by typing "grunt test" on the command line
		grunt.registerTask('test', ['jshint'])
		
		// And register the default task. This can be run just by typing "grunt" on the command line
		grunt.registerTask('default', ['uglify', 'less']);
		
};