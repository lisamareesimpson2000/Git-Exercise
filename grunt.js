module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        build: {
          src: 'js/script.js',
          dest: 'output/script.min.js'
        }
      },
      jshint: {
          files: ['grunt.js', 'js/script.js'],
          options: {
              globals: {
                  jQuery: true
              }
          }
      },
      watch: {
        scripts: {
          files: 'js/script.js',
          tasks: ['jshint'],
        },
      },
   
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

  
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jshint', 'watch']);
  
  };