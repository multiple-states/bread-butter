module.exports = {

  pages: {
    // This copies the pages from the src/pages folder to the app folder
    files: [
      {
        expand: true,
        cwd: '<%= src %>/pages/',
        src: ['*.php', '*.html', '.htaccess'],
        dest: '<%= app %>/'
      }
    ]
  },

  modules: {        
    // This copies the modules from the src/modules folder to the app/modules folder
    files: [
      {
        expand: true,
        cwd: '<%= src %>/modules/',
        src: ['*.php'],
        dest: '<%= app %>/modules/'
      }
    ]
  },

  includes: {
    // This copies the includes from the src/includes folder to the app/includes folder
    files: [
      {
        expand: true,
        cwd: '<%= src %>/includes/',
        src: ['*.php'],
        dest: '<%= app %>/includes/'
      }
    ]
  },

  js: {
    // This copies the js files from the src/js folder to the app/js folder
    files: [
      {
        expand: true,
        cwd: '<%= src %>/js/',
        src: ['*.js', '!vendor.js'],
        dest: '<%= app %>/js/'
      }
    ]
  },

  images: {
    // This copies the includes from the src/images folder to the app/images folder
    files: [
      {
        expand: true,
        cwd: '<%= src %>/images/',
        src: ['*.jpg', '*.png', '*.gif'],
        dest: '<%= app %>/images/'
      }
    ]
  },
  
  fontcopy:{ 
  // This task will find the relevant font files in the src/fonts folder and move them to the app/fonts folder.
    files: [
      {
        expand: true,
        cwd: '<%= src %>/fonts/',
        src: ['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
        dest: '<%= app %>/fonts/'
      }
    ]
  }

};