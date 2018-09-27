import React, { Component } from 'react';

export default class App extends Component {
  state = { status: null };

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(({ status }) => this.setState({ status }));
  }

  render() {
    const { status } = this.state;
    return <div>Current status: {status}</div>;
  }
}
