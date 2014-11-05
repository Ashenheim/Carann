module.exports = {
	
	site: {
		files: [ 'index.html',
					'index.md',
					'_layouts/*',
					'_includes/*',
					'_includes/svg/*.svg',
					'_portfolio/*',
					'_data/*.yml',
					'_config.yml',
					'_config-dev.yml',
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