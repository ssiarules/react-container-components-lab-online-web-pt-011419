import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [ ]
    };
  }

  componentDidMount() {
    fetch (URL)
      .then(response => response.json())
      .then(latestMovieReviewsData => this.setState({reviews:latestMovieReviewsData}))
  }

  render() {
    return <MovieReviews   reviews={this.state.reviews} />
  }
}

export default LatestMovieReviewsContainer
