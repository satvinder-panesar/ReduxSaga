import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <div>
      {this.props.news}
      </div>
    );
  }
}

export default News;
