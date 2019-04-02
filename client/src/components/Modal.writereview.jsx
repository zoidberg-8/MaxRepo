import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import $ from 'jquery';



class InputForm extends React.Component{
  constructor(props){
    super(props)

    this.state={
      inputModal: false
    }
    this.toggleInputModal = this.toggleInputModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggleInputModal(){
    console.log('inputform toggle modal')
    this.setState({
      inputModal:!this.state.inputModal,
    })
  }

  handleSubmit(e){
    console.log('form submitted')

   var form = e.target
   var data = new FormData(form)

   fetch('/api/reviews/1',{
     method:'POST',
     body:data
   })

  }



  render(){
    return(

<div>
  <button onClick={this.toggleInputModal}>Write Review</button>
    <Modal isOpen = {this.state.inputModal}>
      <button onClick = {this.toggleInputModal}>close</button>

      <div>WRITE A REVIEW</div>
      <div>Please share your experience.</div>
      <Gridform id='reviewform' onSubmit = {this.handleSubmit} >

        <Divcross>
            <input type = 'radio' name ='rating' value = '1'></input>
            <input type = 'radio' name ='rating' value = '2'></input>
            <input type = 'radio' name ='rating' value = '3'></input>
            <input type = 'radio' name ='rating' value = '4'></input>
            <input type = 'radio' name ='rating' value = '5'></input>

            </Divcross>

            <Divcol>
              Size:
              <br></br>
              <input type = 'radio' name='size' value='1'></input><span>Runs Small</span>
              <br></br>
              <input type = 'radio' name='size' value='2'></input><span>Just Right</span>
              <br></br>
              <input type = 'radio' name='size' value='3'></input><span>Runs Big</span>
            </Divcol>
            <Divcol>
              Comfort:
              <br></br>
              <input type = 'radio' name='comfort' value='4'></input><span>Uncomfortable</span>
              <br></br>
              <input type = 'radio' name='comfort' value='5'></input><span>Average</span>
              <br></br>
              <input type = 'radio' name='comfort' value='6'></input><span>Very Comfortable</span>
            </Divcol>
            <Divcol>
              Durability:
              <br></br>
              <input type = 'radio' name='prod_durability' value='7'></input><span>Not Durable</span>
              <br></br>
               <input type = 'radio' name='prod_durability' value='8'></input><span>Average</span>
               <br></br>
              <input type = 'radio' name='prod_durability' value='9'></input><span>Very Durable</span>
            </Divcol>
            <Divcol>
              <div>Review Title:</div>
            </Divcol>
            <Divtext>
            <textarea rows='1' cols='50' name ='review_title' form='reviewform'></textarea>
            </Divtext>

            <Divcol>
              <div> Review</div>
            </Divcol>
            <Divtext>
              <textarea rows='4' cols='50' name ='review_text' form='reviewform'></textarea>
            </Divtext>
            <Divcross>
              <input type='submit'></input>
            </Divcross>

      </Gridform>

    </Modal>
</div>


    )
  }
}

//COMPONENET STYLING
var Gridform = styled.form`
 display:grid;
 grid-template-columns: auto auto auto;

`
var Divcross = styled.div`
grid-column-start:1;
grid-column-end:4;
`
var Divcol = styled.div`
grid-columm:1/3;
`
var Divtext = styled.div`
grid-column-start:2;
grid-column-end:4;;
`


export default InputForm;