import React, { Component } from 'react';

export default class User extends Component {
  render() {
    if (!this.props.user) {
      return (<h1>Loading</h1>);
    }
    return (
        <div className="col s12 m3">
          <div className="card">
            <div className="rank teal">
              <span className="white-text">{this.props.rank}</span>
            </div>
            <div className="card-image">
              <img src={this.props.user.img} alt={this.props.user.username} />
              <span className="card-title">{this.props.user.username}</span>
              <span className="info white-text">All Time: {this.props.user.alltime} - Recent: {this.props.user.recent}</span>
            </div>
          </div>
        </div>
    )
  }
}
