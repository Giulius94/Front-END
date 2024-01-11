import React, { Component } from 'react';
import CommentList from './CommentList';

export default class CommentArea extends Component {

    state = {
        arr: [],
        asin: this.props.asin
    }


    componentDidMount() {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.asin, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDQ4OTU4MTQsImV4cCI6MTcwNjEwNTQxNH0.Bv73YRhMhx7rGbKB_V5ok5TfZrfQj7z88nzbbHk5ASY"
            }
        }).then(response => response.json())
            .then(json => this.setState({
                arr: json
            }))
            .catch(err => err)
    }


    render() {
        return (
         <CommentList array = {this.state.arr}/>
        )
    }
}
