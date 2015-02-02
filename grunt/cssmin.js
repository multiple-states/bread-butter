module.exports = {

  // Minify the css for production
  minify: {
    files: {
      '<%= app %>/style.min.css': ['<%= src %>/css/style.css']
    }
  },

  // This task will find the stylesheet in the webkit folder, minify it and move it to the app folder
  fontmin: { 
    files: [
      {
        expand: true,
        cwd: '<%= src %>/fonts/',
        src: ['**/*/stylesheet.css'],
        dest: '<%= app %>/fonts/',
        ext: '.min.css'
      }
    ]
  }

};