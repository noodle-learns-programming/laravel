var elixir  = require('laravel-elixir');
    require("laravel-elixir-webpack");

var path = require('path');
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

elixir(function(mix) {
    mix.babel([
        'product.js',
        'app.js'
    ], 'public/js/app.js');
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
    mix.styles([
        'app.css'
    ]);
    mix.version(["js/app.js", "css/all.css"]);
});
