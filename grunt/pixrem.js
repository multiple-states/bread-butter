module.exports = {

  // The default pixrem task. Note the file paths.
  base: {
    options: {
      rootvalue: '62.5%' // We set this so that the 1 rem unit equals 10px. Easier to understand.
    },
    files: {
      '<%= app %>/style.css': ['<%= src %>/css/style.css']
    }
  },

  // The production pixrem task. Note the file paths.
  production: {
    options: {
      rootvalue: '62.5%' // We set this so that the 1 rem unit equals 10px. Easier to understand.
    },
    files: {
      '<%= app %>/style.min.css': ['<%= app %>/style.min.css']
    }
  }


};