import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: []
    };
  }

    componentDidMount(){
      fetch (URL)
      .then(response => response.json())
      .then(searchableMovieReviewsData => this.setState({reviews: searchableMovieReviewsData}))
  }
  render() {
    return <MovieReviews   reviews={this.state.reviews} />
  }
  }

  export default SearchableMovieReviewsContainer
