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
      latestMovieReviews: [ ]
    };
  }

  componentDidMount() {
    fetch ('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}')
      .then(response => response.json())
      .then(latestMovieReviewsData => this.setState({latest-movie-reviews:latestMovieReviewsData}))
  }

  render() {
    return <MovieReviews latest-movie-reviews={this.state.latest-movie-reviews} />
  }
}

export default LatestMovieReviewsContainer
