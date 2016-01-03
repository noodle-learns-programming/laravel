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
            <div class="ui basic segment">
                <div class="ui grid">
                    <div class="row">
                        <div class="ten wide column">
                            <div id="breadcrumb">
                                @yield('breadcrumb')    
                            </div>
                            <div id="main">
                                @yield('content')
                            </div>
                        </div>
                        <div class="six wide column">
                            <div id="feed"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- JavaScripts -->
    <!--<script src="/js/vendor/react.js"></script>-->
    <!--<script src="/js/vendor/react-dom.js"></script>-->
    <!--<script src="/js/vendor/babel-core-browser.js"></script>-->
    <script type="text/javascript">
        var App = window.App = {
            'version' : '0.1'
        };
    </script>
    <script src="/js/vendor/jquery.min.js"></script>
    <script src="/js/vendor/underscore.min.js"></script>
    <script src="/js/vendor/backbone.min.js"></script>
    <script src="/js/vendor/semantic.min.js"></script>
    <script src="{{ elixir('js/lang.js') }}"></script>
    <script src="{{ elixir('js/bundle.js') }}"></script>
    @yield('scripts')
</body>
</html>
