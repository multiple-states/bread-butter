module.exports = {

  // This is step 3 in the four part css process documented in grunt/less.js
  // 3. We use the cssmin task to minify that css file into a new file with the .min.css extension
  minify: {
    options: {
      // If you want to add banners to your minified css uncomment the below. This currently is commented out in order to clean up commits in development.
      // banner: '/* <%= pkg.name %>.css minified <%= grunt.template.today("dd-mm-yyyy") %> */' // Give it a nice banner
    },
    files: {
      '<%= app %>/style.min.css': ['<%= app %>/style.css']
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