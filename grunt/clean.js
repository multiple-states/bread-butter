module.exports = {

  // DANGER ZONE! BE CAREFUL! 
  // This cleans the destination folder out completely. 
  // This shouldn't matter if you are using the correct Bread and Butter workflow and only working 
  // in the src folder but only you and the lord above know if that is the case.
  app: ['<%= app %>/**/*', '<%= app %>/.htaccess'],
  dist: ['<%= dist %>/**/*', '<%= dist %>/.htaccess'],

};