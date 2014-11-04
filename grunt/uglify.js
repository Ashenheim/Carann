module.exports = {
	
	options: {
		mangle: false,
		compress: {
			drop_console: true
		}
	},
	target: {
		files: {
			'assets/js/global.min.js' : ['assets/js/global.min.js']
		}
	}

}