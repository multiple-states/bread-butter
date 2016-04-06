module.exports = {

  // This grabs all the listed bower dependencies and adds them to one vendor.js file
  all: {
    dest: '<%= src %>/js/vendor.js',
    includeDev: true,
    exclude: [
      'modernizer'
    ],
  }

};