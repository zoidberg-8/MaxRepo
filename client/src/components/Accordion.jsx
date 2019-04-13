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
      reviewsfromdb:[],
      reviewsSet:[],
      start:0,
      reviewstoshow:10
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.updatefunction = this.updatefunction.bind(this)
    this.createSet = this.createSet.bind(this)
    this.increaseLimit = this.increaseLimit.bind(this)

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
      success:(data)=>{
        this.setState({
        reviewsfromdb:data.reverse()},()=>this.createSet())
    }
    })
  }

  toggleOpen(){
    this.setState({
      open: !this.state.open
    })
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  createSet(){
      var newSet = this.state.reviewsSet
      var start = this.state.start
      console.log(start)
console.log(this.state.reviewsfromdb[start])
      for (var start; start<this.state.reviewstoshow;start++){

       if(this.state.reviewsfromdb[start]){

        newSet.push(this.state.reviewsfromdb[start])
       }
      }

      this.setState({
        reviewsSet:newSet
      })

      console.log('from create set',this.state.reviewsSet)

  }

  increaseLimit(){
    console.log(this.state.reviewsfromdb)
    var newLimit = this.state.reviewstoshow + 10
    var newStart = this.state.start +10

    this.setState({
      reviewstoshow: newLimit,
      start: newStart
    }, ()=>this.createSet())
  }

  //updatefunction passed into <inputform> as callback to update reviewsfromdb state after form submission
  updatefunction(){
    var path = window.location.pathname
    console.log(path.slice(7))
    var prodid = path.slice(7)

    $.ajax({
      url:`/shoes/${prodid}reviews`,
      method:'GET',
      success:(data)=>{this.setState({
        reviewsfromdb:data.reverse()
      })
    }
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
            reviewsSet = {this.state.reviewsSet}
            increaselimit = {this.increaseLimit}
            createSet = {this.createSet}
            reset = {this.resetStartEnd}
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

export default Accordion