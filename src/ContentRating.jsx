import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
    };
  }

  // Method to handle like button click
  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1, // Increment totalRatings
    }));
  };

  // Method to handle dislike button click
  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1, // Increment totalRatings
    }));
  };

  render() {
    return (
      <>
        <div className="content-rating">
          <p>Is cheesecake tasty?</p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
          {/* Display the total number of ratings */}
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}

export default ContentRating;
