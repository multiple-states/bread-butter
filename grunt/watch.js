module.exports = {
  // Configure the watch task
  // You should adapt this to your specific needs on a per project basis
  pages: {
    files: ['<%= src %>/pages/*.php'],
    tasks: ['newer:copy:pages'],
  },
  modules: {
    files: ['<%= src %>/modules/*.php'],
    tasks: ['newer:copy:modules'],
  },
  includes: {
    files: ['<%= src %>/includes/*.php'],
    tasks: ['newer:copy:includes'],
  },
  images: {
    files: ['<%= src %>/images/*'],
    tasks: ['newer:copy:images'],
  },
  scripts: {
    files: ['<%= src %>/js/*.js'],
    tasks: ['newer:jshint'],
  },
  js: {
    files: ['<%= src %>/js/*.js'],
    tasks: ['newer:uglify:base', 'newer:copy:js'],
  },
  css: {
    files: ['<%= src %>/**/*.less'],
    tasks: ['less', 'autoprefixer', 'copy:css'],
  },
  livereload: {
    // Here we watch the files the watch task will change.
    options: { livereload: true },
    files: ['<%= app %>/**/*'],
  },
};