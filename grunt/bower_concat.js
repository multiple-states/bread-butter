module.exports = {

  // This grabs all the listed bower dependencies and adds them to one vendor.js file
  all: {
    dest: {
        js: '<%= src %>/js/vendor.js',
        cssDest: '<%= src %>/css/vendor.css'
    },
    includeDev: true,
    exclude: [
      'modernizer'
    ],
  }

};