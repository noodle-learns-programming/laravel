var elixir  = require('laravel-elixir');
    require("laravel-elixir-webpack");
    require("babel-register");
var gulp    = require('gulp');
var shell   = require('gulp-shell');
var path    = require('path');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.js.browserify.transformers.push({
    name: 'aliasify',
    options: {}
});

gulp.task('langJs', 
    shell.task('php artisan lang:js -c public/js/lang.js')
);

elixir(function(mix) {
    mix.browserify('app.js', 'public/js/app.js');
    /*
    mix.webpack("app.js", {
        entry: {
        },
        outputDir: "public/js",
        output: {
            filename: "bundle.js"
        },
        module: {
            loaders : [{
                test    : /\.jsx?$/,
                loader  : ['babel'],
                query   : {
                    presets: ['react', 'es2015']
                }
            }]
        }
    });
    */
    mix.scripts([
        'js/app.js'
    ], 'public/js/bundle.js', 'public');
    mix.styles([
        'app.css'
    ]);
    mix.version(['js/lang.js', 'js/bundle.js', 'css/all.css']);
});
