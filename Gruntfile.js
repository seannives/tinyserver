'use strict';

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    })
}
