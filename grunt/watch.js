module.exports = { 
  // Configure the watch task
  // You should adapt this to your specific needs on a per project basis
  pages: {
    files: ['<%= src %>/pages/*.php'],
    tasks: ['copy:pages'],
  },
  modules: {
    files: ['<%= src %>/modules/*.php'],
    tasks: ['copy:modules'],
  },
  includes: {
    files: ['<%= src %>/includes/*.php'],
    tasks: ['copy:includes'],
  },
  images: {
    files: ['<%= src %>/images/*'],
    tasks: ['copy:images'],
  },
  scripts: {
    files: ['<%= src %>/js/*.js'],
    tasks: ['jshint'],
  },
  uglify: {
    files: ['<%= src %>/js/*.js'],
    tasks: ['uglify'],
  },
  css: {
    files: ['<%= src %>/**/*.less'],
    tasks: ['less', 'autoprefixer', 'cssmin', 'pixrem'],
  },
  livereload: {
    // Here we watch the files the watch task will change.
    // These files are then sent to the live reload server.
    options: { livereload: true },
    files: ['<%= app %>/**/*'],
  },
};