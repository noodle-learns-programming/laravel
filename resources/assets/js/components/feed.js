import React from 'react';
module.exports = React.createClass({
  getInitialState() {
    return {
      value: null
    };
  },

  componentDidMount() {

  },

  componentDidUpdate() {
  },

  render: function() {
    return (
      <div className="ui small feed">
        <div className="event">
          <div className="label">
            <img src="/image/avatar/small/elliot.jpg" />
          </div>
          <div className="content">
            <div className="summary">
              <a className="user">
                Elliot Fu
              </a> added you as a friend
              <div className="date">
                1 Hour Ago
              </div>
            </div>
            <div className="meta">
              <a className="like">
                <i className="like icon"></i> 4 Likes
              </a>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="label">
            <i className="pencil icon"></i>
          </div>
          <div className="content">
            <div className="summary">
              You submitted a new post to the page
              <div className="date">
                3 days ago
              </div>
            </div>
            <div className="extra text">
              Im having a BBQ this weekend. Come by around 4pm if you can.
            </div>
            <div className="meta">
              <a className="like">
                <i className="like icon"></i> 11 Likes
              </a>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="label">
            <img src="/image/avatar/small/helen.jpg" />
          </div>
          <div className="content">
            <div className="date">
              4 days ago
            </div>
            <div className="summary">
              <a>Helen Troy</a> added <a>2 new illustrations</a>
            </div>
            <div className="extra images">
              <a><img src="/image/wireframe/image.png" /></a>
              <a><img src="/image/wireframe/image.png" /></a>
            </div>
            <div className="meta">
              <a className="like">
                <i className="like icon"></i> 1 Like
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});