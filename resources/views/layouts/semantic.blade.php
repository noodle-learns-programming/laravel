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
    <script src="/js/react.js"></script>
    <script src="/js/react-dom.js"></script>
    <script src="/js/babel-core-browser.js"></script>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/underscore.min.js"></script>
    <script src="/js/backbone.min.js"></script>
    <script src="/js/semantic.min.js"></script>
    @yield('scripts')
</body>
</html>
