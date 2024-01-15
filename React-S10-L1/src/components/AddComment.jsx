/* import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin,
    },
  }

  sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDUwNjg4ODEsImV4cCI6MTcwNjI3ODQ4MX0.G_-PW894dZytylvJjgHxz9icbEcS-g5ov3WMSaovvQM',
          },
        }
      )
      if (response.ok) {
        alert('Comment was sent!')
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        })
      } else {
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log('error')
    }
  }

  render() {
    return (
      <div className="my-3">
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment */

/* 
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: props.asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDUwNjg4ODEsImV4cCI6MTcwNjI3ODQ4MX0.G_-PW894dZytylvJjgHxz9icbEcS-g5ov3WMSaovvQM',
        },
      });
      if (response.ok) {
        alert('Comment was sent!');
        setComment({
          comment: '',
          rate: 1,
          elementId: props.asin,
        });
      } else {
        console.log('error');
        alert('Something went wrong');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => setComment({ ...comment, rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment; */

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function AddComment() {
  
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);

  const userComment = (e) => {
    setComment(e.target.value);
  };

  const userRate = (e) => {
    setRate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://striveschool-api.herokuapp.com/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDUwNjg4ODEsImV4cCI6MTcwNjI3ODQ4MX0.G_-PW894dZytylvJjgHxz9icbEcS-g5ov3WMSaovvQM',
      },
      body: JSON.stringify({ comment, rate }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Comment sent:', json);
        setComment(''); // Clear the comment input after submission if needed
        setRate(1); // Reset rate to 1 after submission if needed
      })
      .catch((error) => {
        console.error('Error during request:', error);
      });
  };

  return (
    <div className="my-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment}
            onChange={userComment}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" value={rate} onChange={userRate}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}