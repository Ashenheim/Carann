module.exports = {
	
	site: {
		files: [ 'index.html',
					'_includes/*',
					'_portfolio/*',
					'_config.yml',
					'images/**/*',
					'assets/media/*.*' ],
		tasks: [ 'shell:jekyllBuild' ]
	},
	sass: {
		files: [ 'source/sass/**/*.sass',
					'source/sass/**/*.scss' ],
		tasks: [ 'sass:dev', 'autoprefixer', 'shell:jekyllBuild' ]
	},
	scripts: {
		files: [ 'source/js/scripts.js', 'source/js/**/*.js' ],
		tasks: [ 'jshint', 'concat', 'shell:jekyllBuild' ]
	},
	options: {
		livereload: true
	}
	
};