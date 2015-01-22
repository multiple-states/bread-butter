module.exports = { 

  // Put browser prefixes into our css file.
  options: {
    browsers: ['last 3 versions'] // More options available for this see https://github.com/ai/autoprefixer#browsers
  },
  files: {
    src: '<%= src %>/css/style.css',
    dest: '<%= src %>/css/style.css' // Put the autoprefixed version right back over its original
  }

};