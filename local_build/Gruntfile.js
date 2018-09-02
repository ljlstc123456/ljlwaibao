var fs = require('fs');

module.exports = function (grunt) {
  
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
        options: {
            sourceMap: false,
            presets: ['babel-preset-es2015']
        },
        dist: {
            files: [{
               expand:true,
               cwd:'src/', //js目录下
               src:['**.js'], //所有js文件
               dest:'dist/'  //输出到此目录下
             }] 
        }
    },
    //合并js
    concat: {
      options: {
        separator: '\n'
      },
      //合并第三方库
      core:{
        src: '../core/**.js',
        dest: './src/code.js'
      },
      closure1: {
        src: '../../closure-library/closure/goog/**.js',
        dest: './src/closure1.js'
      },
      closure2: {
        src: '../../closure-library/third_party/closure/goog/**.js',
        dest: './src/closure2.js'
      },
    },
    //压缩js
    uglify: {
         options: {
          compress: {
            drop_console: true
          }
         },
         //压缩第三方库
         all:{
            src: ["dist/code.js","dist/closure1.js","dist/closure2.js"],
            dest:'blockly_compressed.js'
         }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  // 默认任务
  grunt.registerTask('build', ['concat:core','concat:closure1','concat:closure2',"babel","uglify:all"]);//html2js暂时不需要
  

}

