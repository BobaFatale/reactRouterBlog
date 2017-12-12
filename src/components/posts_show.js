import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  render() {
    return (
      <div>
        Posts SHow!
      </div>
    )
  }
}

export default connect(null, )(PostsShow);