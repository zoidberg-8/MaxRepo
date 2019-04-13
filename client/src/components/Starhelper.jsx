import React from 'react';

function StarHelper(props){
  if (props.rating===5) {
    return <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
  }
  if (props.rating===4) {
    return <span>&#9733;&#9733;&#9733;&#9733;</span>
  }
  if (props.rating===3) {
    return <span>&#9733;&#9733;&#9733;</span>
  }
  if (props.rating===2) {
    return <span>&#9733;&#9733;</span>
  }
  if (props.rating===1) {
    return <span>&#9733;</span>
  }


  return (
    <span>&#9733;</span>
  );
}

export default StarHelper