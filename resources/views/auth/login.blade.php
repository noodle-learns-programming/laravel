@extends('layouts.home')

@section('css')
<style type="text/css">
  body {
    background-color: #DADADA;
  }
  body > .grid {
    height: 100%;
  }
  .column {
    max-width: 450px;
  }
  .ui.stacked.segment:after,
  .ui.stacked.segment:before,
  .ui.stacked.segments:after,
  .ui.stacked.segments:before {
    height: 0px;
    border-top: 0px;
  }
</style>
@endsection

@section('content')
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="{{ asset('/image/logo.png') }}" class="image" />
      <div class="content">
        Log-in to your account
      </div>
    </h2>

    <form class="ui large form" role="form" method="POST" action="{{ url('/login') }}">
      {!! csrf_field() !!}
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" />
            @if ($errors->has('email'))
              <span class="help-block">
                <strong>{{ $errors->first('email') }}</strong>
              </span>
            @endif
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" />
            @if ($errors->has('password'))
              <span class="help-block">
                <strong>{{ $errors->first('password') }}</strong>
              </span>
            @endif
          </div>
        </div>
        <button class="ui fluid large teal submit button">Login</button>
      </div>
      <div class="ui error message"></div>
    </form>
    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
      | Forgot Your Password? <a href="{{ url('/password/reset') }}">Reset</a>
    </div>
  </div>
</div>
@endsection
