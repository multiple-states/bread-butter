module.exports = {

  //  The base babel task
  babel: {
		options: {
			sourceMap: true,
			presets: ['babel-preset-es2015']
		},
    files: {
      '<%= app %>/js/custom.js': '<%= app %>/js/custom.js'
    }
	}

};