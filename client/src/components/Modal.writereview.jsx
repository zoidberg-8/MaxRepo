import React from 'react';
import Modal from 'react-modal';

class InputForm extends React.Component{
  constructor(props){
    super(props)

    this.state={
      inputModal: false
    }
    this.toggleInputModal = this.toggleInputModal.bind(this)
  }

  toggleInputModal(){
    console.log('inputform toggle modal')
    this.setState({
      inputModal:!this.state.inputModal
    })
  }

  render(){
    return(

<div>
  <button onClick={this.toggleInputModal}>Write Review</button>
    <Modal isOpen = {this.state.inputModal}>
      <button onClick = {this.toggleInputModal}>close</button>
    </Modal>
</div>


    )
  }
}

export default InputForm;