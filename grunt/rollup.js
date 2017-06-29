module.exports = {

  //  The base rollup task
  development: {
    options: {

    },
    files: {
      '<%= app %>/js/custom.js': '<%= src %>/js/custom.js'
    }
  }

};