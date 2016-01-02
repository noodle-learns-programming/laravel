<div class="ui top attached menu">
  <a class="item" id="sidebar">
    <i class="sidebar icon"></i>
  </a>
  <a class="item active" href="#">Dashboard</a>
  <div class="right menu">
    <div class="ui right aligned category search item">
      <div class="ui transparent icon input">
        <input class="prompt" type="text" placeholder="Search everything...">
        <i class="search link icon"></i>
      </div>
      <div class="results"></div>
    </div>
    <div class="ui right aligned simple dropdown item">
      {{ Auth::user()->name }}
      <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item"><i class="edit icon"></i> Profile</a>
        <a class="item"><i class="delete icon"></i> Settings</a>
        <a href="{{ url('/logout') }}" class="item"><i class="hide icon"></i> Logout</a>
      </div>
    </div>
  </div>
</div>