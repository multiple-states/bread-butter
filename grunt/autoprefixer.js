module.exports = { 

  // This is step 2 in the four part css process documented in grunt/less.js
  // 2. We use the auto-prefixer task to put prefixes for various browsers into our css file and move it to the app folder
  options: {
    browsers: ['last 3 versions'] // More options available for this see https://github.com/ai/autoprefixer#browsers
  },
  files: {
    src: '<%= src %>/css/style.css',
    dest: '<%= app %>/style.css' // Put the autoprefixed version right back over its original
  }

};