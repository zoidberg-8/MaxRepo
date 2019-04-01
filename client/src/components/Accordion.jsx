import React from 'react';
import styled from 'styled-components';

var Button = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
`;

var ReviewContent = styled.div`
  border: 0px solid gray;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;
`

class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return(
      <div>
      <Button onClick = {this.toggleOpen}>reviews</Button>
      <ReviewContent open = {this.state.open}>
      LOAD 3 REVIEWS HERE
      LINK TO READ MORE

      </ReviewContent>
      </div>
    )

  }
}

export default Accordion