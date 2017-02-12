'use strict';
module.exports = function(grunt) {

	var pkg = grunt.file.readJSON( 'package.json' );

	grunt.initConfig({

		pkg: pkg,

		// Autoprefixer for our CSS files
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer-core') ({
						browsers: ['last 2 versions']
					})
				]
			},
			dist: {
				src: ['lib/css/*.css']
			}
		},

		// css minify all contents of our directory and add .min.css extension
		cssmin: {
			target: {
				files: [
					{
						'lib/css/timeline-express-no-icons.min.css':
						[
							'lib/css/timeline-express-no-icons.css',
						],
					},
				]
			}
		},

		// Generate a nice banner for our css/js files
		usebanner: {
			taskName: {
				options: {
					position: 'top',
					replace: true,
					banner: '/*\n'+
						' * @Plugin <%= pkg.title %>\n' +
						' * @Author <%= pkg.author %>\n'+
						' * @Site <%= pkg.site %>\n'+
						' * @Version <%= pkg.version %>\n' +
						' * @Build <%= grunt.template.today("mm-dd-yyyy") %>\n'+
						' */',
						linebreak: true
					},
					files: {
						src: [
						'lib/css/*.min.css',
					]
				}
			}
		},

		replace: {
			base_file: {
				src: [ 'timeline-express-no-icons-add-on.php' ],
				overwrite: true,
				replacements: [{
					from: /Version: (.*)/,
					to: "Version: <%= pkg.version %>"
				}]
			},
			readme_txt: {
				src: [ 'readme.txt' ],
				overwrite: true,
				replacements: [{
					from: /Stable tag: (.*)/,
					to: "Stable tag: <%= pkg.version %>"
				}]
			},
			readme_md: {
				src: [ 'README.md' ],
				overwrite: true,
				replacements: [
					{
						from: /# Timeline Express - No Icons Add-On v(.*)/,
						to: "# Timeline Express - No Icons Add-On v<%= pkg.version %>"
					},
					{
						from: /\*\*Stable tag:\*\*        (.*) <br \/>/,
						to: "**Stable tag:**        <%= pkg.version %> <br />"
					}
				]
			},
			constants: {
				src: [ 'constants.php' ],
				overwrite: true,
				replacements: [{
					from: /define\(\s*'TIMELINE_EXPRESS_NO_ICONS_VERSION',\s*'(.*)'\s*\);/,
					to: "define( 'TIMELINE_EXPRESS_NO_ICONS_VERSION', '<%= pkg.version %>' );"
				}]
			}
		},

		// watch our project for changes
		watch: {
			public_css: {
				files: [ 'lib/css/*.css', '! lib/css/*.min.css', ],
				tasks: [ 'cssmin', 'usebanner'],
				options: {
					spawn: false,
					event: ['all']
				},
			},
		},

		// Copy our template files to the root /template/ directory.
		copy: {
			deploy: {
				files: [
					// copy over the files in preperation for a deploy to SVN
					{
						expand: true,
						src: [
							'constants.php',
							'lib/**',
							'readme.txt',
							'timeline-express-no-icons-add-on.php',
							'uninstall.php',
						],
						dest: 'build/'
					},
				],
			}
		},

		wp_deploy: {
			deploy: {
				options: {
					plugin_slug: 'timeline-express-no-icons-add-on',
					build_dir: 'build/',
					deploy_trunk: true,
					deploy_tag: pkg.version,
					max_buffer: 1024*1024*2
				},
			}
		}

	});

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-banner' );
	grunt.loadNpmTasks( 'grunt-text-replace' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-wp-deploy' );

  // register task
  grunt.registerTask( 'default', [
		'postcss',
		'cssmin',
		'usebanner',
		'watch',
	] );

	// register bump-version
	grunt.registerTask( 'bump-version', [
		'replace',
	] );

	// register deploy
	grunt.registerTask( 'deploy', [
		'copy:deploy',
		'wp_deploy'
	] );

};
