module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            all: {
                options: {
                    reporter: 'spec',
                    // captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false // Optionally suppress output to standard out (defaults to false)
                },
                src: ['tests/*.js']
            }
        }
    });


    grunt.registerTask('test',['mochaTest:all']);
};

