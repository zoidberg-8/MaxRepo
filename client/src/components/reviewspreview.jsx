import React from 'react';

var ReviewsPreview = (props) =>(
  <div>
   {props.allreviews.slice(0,3).map((i)=>
    <div>
      <div>{i.review_title}</div>
      <div>{i.rating}</div>
      <div>{i.username}</div>
      <div>{i.current_timestamp}</div>
      <div>{i.review_text}</div>
    </div>)}
  </div>
)


export default ReviewsPreview