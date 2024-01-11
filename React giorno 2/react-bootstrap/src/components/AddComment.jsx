import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class AddComment extends Component {

    state = {
        comment : '',
        rate : '',
        elementId : this.props.asin

    }

    saveComment = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method : 'POST',
            body : JSON.stringify(this.state),
            headers: {
                'Content-type' : 'application-json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDQ4OTU4MTQsImV4cCI6MTcwNjEwNTQxNH0.Bv73YRhMhx7rGbKB_V5ok5TfZrfQj7z88nzbbHk5ASY"
            }
        }).then(response => response.json())
            .then(json => json)
            .catch(err => err)
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formGroupCommento">
                    <Form.Label>Commento:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter your comment"
                    onChange={(e) => this.setState({comment : e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupVoto">
                    <Form.Label>Voto:</Form.Label>
                    <Form.Control 
                    type="number" 
                    max='5' 
                    placeholder="vote from 1 to 5"
                    onChange={(e) => this.setState({rate : e.target.value})}  />
                </Form.Group>
                <Button variant="info" 
                type='button' 
                onClick={this.saveComment}>Send</Button> 
            </Form>
        )
    }
}
