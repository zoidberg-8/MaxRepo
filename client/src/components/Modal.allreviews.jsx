import React from 'react';
import Modal from 'react-modal';
import Reviews from './reviews.jsx'

class ModalAllReviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modalstate: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(){
    this.setState({
      modalstate:!this.state.modalstate
    })
  }

  render(){
    return(
      <div>
        <button onClick = {this.toggleModal}>More Reviews</button>
         <Modal isOpen = {this.state.modalstate} contentLabel='test'>
    <button onClick = {this.toggleModal}>
      close
    </button>
     {/* LOAD ALL REVIEWS IN MODAL */}
    <Reviews allreviews = {this.props.allreviews}/>
  </Modal>

      </div>
    )
  }
}

export default ModalAllReviews