var elixir 	= require('laravel-elixir');
	require("laravel-elixir-webpack");
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
    mix.webpack("app.js", {
        outputDir: "public/js",
        output: {
            filename: "bundle.js"
        }
    });
    mix.sass('app.scss');
    mix.version("js/bundle.js");
});
