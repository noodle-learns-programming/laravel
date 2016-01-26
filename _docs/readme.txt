php artisan lang:js public/js/lang.js


php artisan make:migration add_votes_to_users_table --table=users
php artisan make:migration create_users_table --create=users
php artisan migrate
composer dump-autoload

php artisan make:model User

php artisan make:seeder ProductUnitsTableSeeder
php artisan db:seed --class=ProductUnitsTableSeeder


php artisan make:controller Stock/Product/UnitController --resource