module.exports = {

  // This is step 4 in the four part css process documented in grunt/less.js
  // 4. Run grunt pixrem to add pixel fallbacks for our use of rem units. We rewrite the result over itself.

  options: {
    rootvalue: '62.5%' // We set this so that the 1 rem unit equals 10px. Easier to understand.
  },
  dist: {
    src: '<%= app %>/style.min.css',
    dest: '<%= app %>/style.min.css'
  }

};