import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Reviews from './reviews.jsx';
import ReviewsPreview from './reviewspreview.jsx'
import ModalAllReviews from './Modal.allreviews.jsx'
import InputForm from './Modal.writereview.jsx'
Modal.setAppElement('#reviews')
import $ from 'jquery';



class Accordion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false,
      modal:false,
      reviewsfromdb:[]
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.updatefunction = this.updatefunction.bind(this)
  }

  componentDidMount(){
    console.log('componenet mount')
    var path = window.location.pathname
    console.log(path.slice(7))
    var prodid = path.slice(7)

    if (prodid===''){
      prodid='1/'
    }

    $.ajax({
      url:`/shoes/${prodid}reviews`,
      method:'GET',
      success:(data)=>{this.setState({
        reviewsfromdb:data
      })}
    })
  }

  toggleOpen(){
    console.log(this.state.reviewsfromdb)
    this.setState({
      open: !this.state.open
    })
  }
  toggleModal(){
    console.log('toggle modal')
    this.setState({
      modal: !this.state.modal
    })
  }

  //this function passed into inputform as callback to update reviewsfrom db state after form submission
  updatefunction(){
    var path = window.location.pathname
    console.log(path.slice(7))
    var prodid = path.slice(7)

    $.ajax({
      url:`/shoes/${prodid}reviews`,
      method:'GET',
      success:(data)=>{this.setState({
        reviewsfromdb:data
      })}
    })

  }


  render(){
    return(
      <div>
        <Button onClick = {this.toggleOpen}>Reviews ({this.state.reviewsfromdb.length})</Button>

          <ReviewContent open = {this.state.open} >

          <InputForm updatefunction = {this.updatefunction}/>

          <ReviewsPreview allreviews = {this.state.reviewsfromdb}/>


          <ModalAllReviews
            allreviews = {this.state.reviewsfromdb}
          />


        </ReviewContent>
      </div>
    )

  }
}

//COMPONENT STYLE
var Button = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 500px;
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

export default Accordion