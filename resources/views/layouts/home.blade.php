<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <title>Login - Always</title>
    <!-- Styles -->
    <link href="/css/semantic.min.css" rel="stylesheet">
    @yield('css')
</head>
<body>
    @yield('content')
    <script src="/js/vendor/jquery.min.js"></script>
    <script src="/js/vendor/semantic.min.js"></script>
    <script src="{{ elixir('js/lang.js') }}"></script>
    @yield('scripts')
</body>
</html>
