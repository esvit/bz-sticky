module.exports = function (grunt) {
    grunt.initConfig({
        cmpnt: grunt.file.readJSON('bower.json'),
        banner: '/*! bzSticky v<%= cmpnt.version %> by Vitalii Savchuk(esvit666@gmail.com) - ' +
                'https://github.com/esvit/bz-sticky - New BSD License */\n',
        clean: {
            working: {
                src: ['bz-sticky.*', './.temp/views', './.temp/']
            }
        },
        uglify: {
            js: {
                src: ['bz-sticky.src.js'],
                dest: 'bz-sticky.js',
                options: {
                    banner: '<%= banner %>',
                    sourceMap: function (fileName) {
                        return fileName.replace(/\.js$/, '.map');
                    }
                }
            }
        },
        concat: {
            js: {
                src: ['src/scripts/*.js'],
                dest: 'bz-sticky.src.js'
            }
        },
        less: {
            css: {
                files: {
                    'bz-sticky.css': 'src/styles/00-bz-sticky.less'
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'bz-sticky.css': 'bz-sticky.css'
                },
                options: {
                    banner: '<%= banner %>'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('dev', [
        'clean',
        'concat',
        'less'
    ]);
    grunt.registerTask('default', [
        'dev',
        'uglify',
        'cssmin'
    ]);
};