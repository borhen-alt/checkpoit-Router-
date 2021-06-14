import ReactStars from  'react-rating-stars-component';

import React from 'react'

const MovieStars = (props) => {
    const ratingChanged = (newRating) => {
        props.Search(newRating);
      };
       
      return (
        <ReactStars
    count={10}
    onChange={ratingChanged}
    size={25}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  )
}

export default MovieStars;
