module.exports = function(grunt) {
  grunt.initConfig({
    cafemocha: {
      test: {
        src: 'test/test.js',
        options: {
          ui: 'bdd',
          reporter: grunt.option('reporter') || 'spec',
          colors: true
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-cafe-mocha')
  grunt.registerTask('test', ['cafemocha'])
  grunt.registerTask('default', ['test'])
}
