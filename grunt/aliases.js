module.exports = {

  production: [
    'clean:app',
    'copy:pages',
    'copy:modules', 
    'copy:includes',   
    'copy:images', 
    'bower_concat',
    'rollup',
    'babel',
    'uglify:production',
    'less',
    'autoprefixer',
    'cssmin'
  ],

  deploy: [
    'production',
    'clean:dist',
    'copy:dist',
  ],

  default: [
    'copy:pages',
    'copy:modules',
    'copy:includes',
    'copy:images',
    'copy:js',
    'bower_concat',
    'rollup',
    'babel',
    'uglify:base',
    'less',
    'autoprefixer'
  ]

};