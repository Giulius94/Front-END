import React, { Component } from 'react'
import SingleComment from './SingleComment';
import AddComment from './AddComment';

export default class CommentList extends Component {
  render() {
    return (
      <>
        <SingleComment arrayCommenti={this.props.array} />
        <AddComment asin={this.props.array.asin} />
      </>
    )
  }
}
