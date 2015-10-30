module.exports = {

  // The base uglify task
  base: {
    options: {
      mangle: false
    },
    files: {
    '<%= app %>/js/vendor.min.js': ['<%= src %>/js/vendor.js'],
    '<%= app %>/js/modernizr.min.js': ['bower_components/modernizer/modernizr.js']
    }
  },

  // The production uglify task
  production: {
    options: {
      mangle: false
    },
    files: {
    '<%= app %>/js/custom.js': ['<%= src %>/js/custom.js'],
    '<%= app %>/js/vendor.min.js': ['<%= src %>/js/vendor.js'],
    '<%= app %>/js/modernizr.min.js': ['bower_components/modernizer/modernizr.js']
    }
  }

};