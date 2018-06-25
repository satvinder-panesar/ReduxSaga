import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return (
      <div>
      	<ul>
      		{this.props.headline}
      	</ul>
      </div>
    );
  }
}

export default Headline;
