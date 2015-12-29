<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <title>Always</title>
    <!-- Styles -->
    <link href="/css/semantic.min.css" rel="stylesheet">
    <link href="{{ elixir('css/all.css') }}" rel="stylesheet"></link>
    @yield('css')
</head>
<body>
    @include('include.top')
    <div class="ui bottom attached segment pushable">
        @include('include.navigate')
        <div class="pusher">
            <div class="ui basic segment container" id="main">
                @yield('content')
            </div>
        </div>
    </div>
    <!-- JavaScripts -->
    <script src="/js/vendor/react.js" type="text/javascript"></script>
    <script src="/js/vendor/react-dom.js" type="text/javascript"></script>
    <script src="/js/vendor/babel-core-browser.js" type="text/javascript"></script>
    <script src="/js/vendor/es6-module-loader.js" type="text/javascript"></script>
    <script src="/js/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="/js/vendor/underscore.min.js" type="text/javascript"></script>
    <script src="/js/vendor/backbone.min.js" type="text/javascript"></script>
    <script src="/js/vendor/semantic.min.js" type="text/javascript"></script>
    <script src="/js/app.js" type="text/babel"></script>
    @yield('scripts')
</body>
</html>
