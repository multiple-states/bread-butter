module.exports = {

      // Configure the less task
      // The compilation of our css goes through four stages starting here:
      // 1. We use this less task to compile the less to css in the src folder
      // 2. We use the auto-prefixer task to put prefixes for various browsers into our css file and move it to the app folder
      // 3. We use the cssmin task to minify that css file into a new file with the .min.css extension
      // 4. Run grunt pixrem to add pixel fallbacks for our use of rem units.

      // So here we go...
      // 1. We use this less task to compile the less to css in the src folder
      development: {
        options: {
          paths: ["<%= src %>/less"],
        },
        files: {
          // target.css file: source.less file
          "<%= src %>/css/style.css": "<%= src %>/less/style.less"
        }
      }

};