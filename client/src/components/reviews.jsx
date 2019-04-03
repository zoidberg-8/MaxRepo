import React from 'react';
import styled from 'styled-components';

var Reviews = (props) =>(


<div>
  <Header>{props.allreviews.length} Reviews</Header>
  <InfoPanel>
    <Oneframe id='size'>size</Oneframe>
    <Oneframe>comfort</Oneframe>
    <Oneframe>durability</Oneframe>
  </InfoPanel>
{props.allreviews.map((i,index)=>
  <div>{i.review_id}</div>)}


</div>
)


var Header = styled.div`
text-align:center;
font-size:14px;
font-family:'Helvetica Neue';
margin-top:20px;
font-weight:bold;
`
var InfoPanel = styled.div`
display:grid
grid-template-columns: auto auto auto
`
var Oneframe = styled.span`
font-size:14px;
font-family:'Helvetica Neue';
`

export default Reviews;