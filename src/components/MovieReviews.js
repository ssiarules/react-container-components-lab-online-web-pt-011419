// Code MovieReviews Here
import React from 'react';
import Lates

const Review = ({headline, display_title, summary_short}) =>{
  return (
    <div key={headline} className='review'>
      <h2>{display_title}</h2>
      <p>{summary_short}</p>
  )
}

 const MovieReviews = ({reviews}) => {
   return(
     <div className='review-list'>
      {reviews.map(Review)}
      </div>
   )
 }

 MovieReviews.defualtProps ={
   reviews: []
 }

 export default MovieReviews
