module.exports = {

  'test': [
    'copy'
  ],

  'production': [
    'clean',
    'copy:pages',
    'copy:modules', 
    'copy:includes',   
    'copy:images', 
    'copy:fontcopy', 
    'bower_concat',
    'uglify:production', 
    'less', 
    'autoprefixer', 
    'cssmin',
    'pixrem:production'
  ],

  'default': [
    'copy', 
    'bower_concat',
    'uglify:base', 
    'less', 
    'autoprefixer', 
    'pixrem:base'
  ]

};