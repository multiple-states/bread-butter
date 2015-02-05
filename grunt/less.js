module.exports = {

      // The default compilation of our css goes through three stages starting here:
      // 1. Run the less task to compile the less
      // 2. Add prefixes using the auto-prefixer task
      // 3. Add pixel fallbacks for rem units using pixrem:base task and save the src file to the app folder

      // The production compilation of our css goes through four stages starting here:
      // 1. Run the less task to compile the less
      // 2. Add prefixes using the auto-prefixer task
      // 3. Minifies the css using the cssmin task and save the src file to the app folder
      // 4. Add pixel fallbacks for rem units to the minified css using pixrem:production

      // Configure the less task
      development: {
        options: {
          paths: ["<%= src %>/less"],
        },
        files: {
          "<%= src %>/css/style.css": "<%= src %>/less/style.less"
        }
      }

};