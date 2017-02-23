module.exports = {

  'production': [
    'clean:app',
    'copy:pages',
    'copy:modules', 
    'copy:includes',   
    'copy:images', 
    'bower_concat',
    'uglify:production',
    'less',
    'autoprefixer',
    'cssmin'
  ],

  'deploy': [
    'production',
    'clean:dist',
    'copy:dist',
  ],

  'default': [
    'copy:pages',
    'copy:modules',
    'copy:includes',
    'copy:images',
    'copy:js',
    'bower_concat',
    'uglify:base',
    'less',
    'autoprefixer'
  ]

};