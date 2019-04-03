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
  <ReviewPanel>
    <ReviewInfo>
    <Starframe>test</Starframe>
    <SizeFrame>test</SizeFrame>
    <ComfFrame>test</ComfFrame>
    <DurFrame>test</DurFrame>
    </ReviewInfo>
    <BodyFrame>
      <BodyTitle>{i.review_title}</BodyTitle>
      <BodyText>{i.review_text}</BodyText>
      <BodyDetails>{i.date_submitted}</BodyDetails>
    </BodyFrame>
  </ReviewPanel>)}


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
padding-bottom:10px;
`

var ReviewPanel = styled.div`
display:grid
grid-template-columns:200px 500px
border-bottom: 0.5px solid #d6d5d5;
`

var ReviewInfo = styled.div`
grid-column:1/2;
padding-bottom: 10px;
padding-top:10px;
`

var Starframe = styled.div`
grid-area:star;
background:black;
height:40px;
`
var SizeFrame = styled.div`
grid-area: size;
background:blue;
height:40px;
`
var ComfFrame = styled.div`
grid-area: comfort;
background:orange;
height:40px;
`
var DurFrame = styled.div`
grid-area: dur;
background:red;
height:40px;
`
var BodyFrame = styled.div`
grid-column:2/3
font-family:'Helvetica Neue';
`
var BodyTitle = styled.div`
padding-top:10px;
font-weight: bold;
font-family:'Helvetica Neue';
`
var BodyText = styled.div`

font-family:'Helvetica Neue';
font-size:12px;
`

var BodyDetails = styled.div`
font-family:'Helvetica Neue';
font-size:12px;
padding-top:10px
`

export default Reviews;