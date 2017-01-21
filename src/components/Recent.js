import React, { Component } from 'react';
import { Link } from 'react-router';

import User from './User';

export default class Recent extends Component {
  render() {
    if (!this.props.users) {
      return (<h1>Loading...</h1>);
    }
    return (
      <div className="main">
        <h1 className="center-align white-text">Recent Time Leaderboard</h1>
          <div className="center-align">
            <Link to="/" className="waves-effect waves-light btn-large">All Time</Link>
            <Link to="/recent" className="waves-effect waves-light btn-large">Recent</Link>
          </div>
        <div className="row">
          {this.props.users.map((user, index) => {
            return <User key={user.username} rank={index+1} user={user} />
          })}
        </div>
      </div>
    )
  }
}
