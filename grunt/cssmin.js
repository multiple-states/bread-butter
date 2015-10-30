module.exports = {

  // Minify the css for production
  minify: {
    options: {
      rebase: false
    },
    files: {
      '<%= app %>/style.css': ['<%= src %>/css/style.css']
    }
  }

};