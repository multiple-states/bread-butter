module.exports = {

  // The base uglify task
  base: {
    options: {
      mangle: false,
      // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
      // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    files: {
    '<%= app %>/js/custom.min.js': ['<%= src %>/js/custom.js'],
    '<%= app %>/js/vendor.min.js': ['<%= src %>/js/vendor.js'],
    '<%= app %>/js/modernizr.min.js': ['bower_components/modernizer/modernizr.js']
    }
  }

};