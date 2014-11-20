module.exports = {

  'test': [
    'copy'
  ],

  'default': [
    'copy', 
    'bower_concat',
    'uglify:base', 
    'less', 
    'autoprefixer', 
    'cssmin',
    'pixrem'
  ]

};