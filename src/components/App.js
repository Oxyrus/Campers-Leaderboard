import React, { Component } from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import AllTime from './AllTime';
import Recent from './Recent';
import NotFound from './NotFound';
import Footer from './Footer';
import { fetchRecent, fetchAllTime } from '../api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recent: [],
      alltime: []
    };
  }

  componentWillMount() {
    fetchRecent()
      .then(data => {
        this.setState({
          recent: data
        });
      })
      .catch(err => {
        console.error(err)
      });

    fetchAllTime()
      .then(data => {
        this.setState({
          alltime: data
        });
      })
      .catch(err => {
        console.error(err)
      });
  }

  render() {
    if (!this.state.recent || !this.state.alltime) {
      return (<h1>Loading</h1>);
    }
    return (
      <BrowserRouter>
        <div className="deep-purple">
          <Match exactly pattern="/" render={props => <AllTime users={this.state.alltime} />} />
          <Match pattern="/recent" render={props => <Recent users={this.state.recent} />} />
          <Miss component={NotFound} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
