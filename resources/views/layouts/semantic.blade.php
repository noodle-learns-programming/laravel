<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <title>Always</title>
    <!-- Styles -->
    <link href="{{ elixir('css/semantic.css') }}" rel="stylesheet">
</head>
<body class="started pushable">
    <div class="ui attached menu">
        <div class="item">
            <img src="/image/logo.png" />
        </div>
        <a class="item active">Features</a>
        <a class="item">Testimonials</a>
        <div class="right menu">
            <div class="ui right aligned category search item">
                <div class="ui transparent icon input">
                <input class="prompt" type="text" placeholder="Search animals...">
                <i class="search link icon"></i>
                </div>
                <div class="results"></div>
            </div>
            <a class="item right">Logout</a>
        </div>
    </div>

    <div class="ui main text container">
        <div class="ui label">
            <i class="search link icon"></i>
        </div>
        @yield('content')
    </div>

    <div class="ui inverted vertical footer segment">
        <div class="ui container">
            <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                    <h4 class="ui inverted header">About</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Sitemap</a>
                        <a href="#" class="item">Contact Us</a>
                        <a href="#" class="item">Religious Ceremonies</a>
                        <a href="#" class="item">Gazebo Plans</a>
                    </div>
                </div>
                <div class="three wide column">
                    <h4 class="ui inverted header">Services</h4>
                    <div class="ui inverted link list">
                        <a href="#" class="item">Banana Pre-Order</a>
                        <a href="#" class="item">DNA FAQ</a>
                        <a href="#" class="item">How To Access</a>
                        <a href="#" class="item">Favorite X-Men</a>
                    </div>
                </div>
                <div class="seven wide column">
                    <h4 class="ui inverted header">Footer Header</h4>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- JavaScripts -->
    <script src="/js/jquery.min.js"></script>
    <script src="{{ elixir('js/semantic.js') }}"></script>
</body>
</html>
