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
</head>
<body class="pushable">
    @include('include.top')

    <div class="pusher">
        <div class="full height">
            <div id="leftNag">
                @include('include.navigate')
            </div>
            <div id="centerMain">
                <div class="ui vertically divided grid">
                    <div class="row">
                        <div class="thirdteen wide column">
                            <div id="app"></div>
                            <div class="ui container">
                                @yield('content')
                            </div>
                        </div>
                        <div class="three wide column"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    @include('include.footer')
    <!-- JavaScripts -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/underscore.min.js"></script>
    <script src="/js/backbone.min.js"></script>
    <script src="/js/semantic.min.js"></script>
    <script src="{{ elixir('js/bundle.js') }}"></script>
</body>
</html>
