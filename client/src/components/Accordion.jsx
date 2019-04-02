import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
Modal.setAppElement('#app')

// var Todal = styled.Modal`
// border: 1px solid black;
// `;

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
      open:false,
      modal:false,
      reviews:[1,2,3,4,5,6,7]
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleOpen(){
    console.log('DROP DOWN TOGGLE')
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

  render(){
    return(
      <div>
      <Button onClick = {this.toggleOpen}>reviews</Button>
      <ReviewContent open = {this.state.open} >
      load 3 reviews

      <button onClick = {this.toggleModal}>
        SHOW Modal
      </button>

      <Modal isOpen = {this.state.modal} contentLabel='test'>

        <button onClick = {this.toggleModal}>
          close
        </button>

      </Modal>




      </ReviewContent>
      </div>
    )

  }
}

export default Accordion