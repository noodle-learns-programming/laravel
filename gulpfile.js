var elixir = require('laravel-elixir');

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
    mix.sass('app.scss');
    mix.copy('node_modules/semantic-ui/dist/semantic.js', 'public/js/semantic.js')
    mix.copy('node_modules/semantic-ui/dist/semantic.css', 'public/css/semantic.css')
    mix.version([
		'public/js/semantic.js',
		'public/css/semantic.css',
	]);

});
