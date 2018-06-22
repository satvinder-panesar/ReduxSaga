import React, { Component } from 'react';
import {Button} from 'react-bootstrap'; 
import { connect } from 'react-redux';
import News from './News';

class Home extends Component {

handleClick(){
	this.props.getNews();
}

componentWillReceiveProps = newProps => {
    console.log("new props ",newProps.news);
   }

render() {
	return (
	  <div>
  		<center>
  				<h2>Welcome to a Simple News App</h2>
  				<h3	>Built using Redux-Saga</h3>
  				<Button onClick={this.handleClick.bind(this)}>Click here to get some news</Button>
  				<br /><br />
  				{this.props.dataAvailable && <News news= {this.props.news} />}
  		</center>
	  </div>
	    );
	}
}

function mapStateToProps(state) {
  return {
    news: state.news_articles.news,
    dataAvailable: state.news_articles.dataAvailable
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getNews: () => dispatch({ type: 'NEWS_REQUEST'})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
