module.exports = {

  // The base uglify task
  base: {
    options: {
      mangle: false
    },
    files: {
    '<%= app %>/js/vendor.js': ['<%= src %>/js/vendor.js']
    }
  },

  // The production uglify task
  production: {
    options: {
      mangle: false
    },
    files: {
    '<%= app %>/js/custom.js': ['<%= src %>/js/custom.js'],
    '<%= app %>/js/vendor.js': ['<%= src %>/js/vendor.js'],
    '<%= app %>/js/modernizr.js': ['bower_components/modernizer/modernizr.js']
    }
  }

};