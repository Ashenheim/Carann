module.exports = {
	dev: {
		options: {
			style: 'expanded',
			trace: true
		},
		files: {
			'assets/css/global.css': 'source/sass/global.sass'
		}
	},
	dist: {
		options: {
			style: 'compressed'
		},
		files: {
			'assets/css/global.css': 'source/sass/global.sass'
		}
	}
};