import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import $ from 'jquery';

var customStyles ={
  content:{
    width:'55%',
    margin:'auto'
  }
};


class InputForm extends React.Component{
  constructor(props){
    super(props)

    this.state={
      inputModal: false
    }
    this.toggleInputModal = this.toggleInputModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleInputModal(){
    console.log('inputform toggle modal')
    this.setState({
      inputModal:!this.state.inputModal,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('form submitted')

    var path = window.location.pathname

    var prodid = path.slice(7)
    var form = e.target
    var data = new FormData(form)
    console.log(prodid)
    fetch(`/shoes/${prodid}reviews`,{
      method:'POST',
      body:data

    }).then(()=>this.toggleInputModal()).then(()=>this.props.updatefunction())
  }

  render(){
    return(

<div>
  <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
  <br></br>
  <br></br>
  <WriteReview onClick={this.toggleInputModal}>Write Review</WriteReview>
    <Modal isOpen = {this.state.inputModal} style={customStyles}>
      <Closebtn onClick = {this.toggleInputModal}>x</Closebtn>

      <Header>WRITE A REVIEW</Header>
      <Subtext>Please share your experience.</Subtext>
      <Gridform id='reviewform' onSubmit = {this.handleSubmit} >

        <Divcol>
          <div>Overall Rating</div>
        </Divcol>

        <Divtext>
            <input type = 'radio' name ='rating' value = '1'></input>
            <input type = 'radio' name ='rating' value = '2'></input>
            <input type = 'radio' name ='rating' value = '3'></input>
            <input type = 'radio' name ='rating' value = '4'></input>
            <input type = 'radio' name ='rating' value = '5'></input>

            </Divtext>


           <Line></Line>


            <TopSelectors>
              Size:
              <br></br>
              <input type = 'radio' name='size' value='1'></input><span>Runs Small</span>
              <br></br>
              <input type = 'radio' name='size' value='2'></input><span>Just Right</span>
              <br></br>
              <input type = 'radio' name='size' value='3'></input><span>Runs Big</span>
            </TopSelectors>
            <TopSelectors>
              Comfort:
              <br></br>
              <input type = 'radio' name='comfort' value='4'></input><span>Uncomfortable</span>
              <br></br>
              <input type = 'radio' name='comfort' value='5'></input><span>Average</span>
              <br></br>
              <input type = 'radio' name='comfort' value='6'></input><span>Very Comfortable</span>
            </TopSelectors>
            <TopSelectors>
              Durability:
              <br></br>
              <input type = 'radio' name='prod_durability' value='7'></input><span>Not Durable</span>
              <br></br>
               <input type = 'radio' name='prod_durability' value='8'></input><span>Average</span>
               <br></br>
              <input type = 'radio' name='prod_durability' value='9'></input><span>Very Durable</span>
            </TopSelectors>


              <Line></Line>


            <Divcol>
            Review Title:
            </Divcol>

            <FormTextArea rows='1' cols='50' name ='review_title' form='reviewform'></FormTextArea>


            <Divcol>
              <div> Review</div>
            </Divcol>

            <FormTextArea rows='4' cols='50' name ='review_text' form='reviewform'>
            </FormTextArea>


              <Line></Line>


            <Divcol>
              <div>Country/Region:</div>
            </Divcol>

              <FormSelect name ='country'>
                <option value='China'>china</option>
                <option value='UnitedStates'>US</option>
              </FormSelect>

            <Divcol>
              <div>City:</div>
            </Divcol>

            <FormTextArea type='text' name='city'></FormTextArea>

            <Divcol>
              Use for:
            </Divcol>

            <FormSelect name ='usefor'>
                <option value='0'></option>
                <option value='1'>School</option>
                <option value='2'>Hanging out</option>
                <option value='3'>Working out</option>
                <option value='4'>Playing my sport</option>
            </FormSelect>


              <SubmitButton type='submit' value='SUBMIT'></SubmitButton>


      </Gridform>

    </Modal>
</div>


    )
  }
}

//COMPONENET STYLING

var WriteReview = styled.button`
font-family:'Helvetica Neue';
border:0px;
border-bottom:solid 0.5px black;
padding-left:0px;
padding-right:0px;
`

var Gridform = styled.form`
 display:grid;
 grid-template-columns: auto auto auto;
 grid-row-gap:30px;
`
var Closebtn = styled.button`
float:right;
border:1px solid #E5E5E5;
margin:auto;
`
var Divcol = styled.div`
color:#111;
font-size:12px;
font-family:'Helvetica Neue'
`
var Divtext = styled.div`
grid-column-start:2;
grid-column-end:4;
`
var FormSelect = styled.select`
grid-column-start:2;
grid-column-end:4;
border:1px solid #E5E5E5;
height:56px;
`
var FormTextArea = styled.textarea`
grid-column-start:2;
grid-column-end:4;
border:1px solid #E5E5E5;
height:56px;
`
var Header = styled.div`
text-align:center;
font-size:14px;
font-family:'Helvetica Neue';
margin-top:20px;
font-weight:bold;
`
var Subtext = styled.div`
text-align:center;
font-size:12px;
padding-bottom:30px;
color: #8D8D8D;
font-family:'Helvetica Neue';
`
var Line = styled.hr`
grid-column-start:1;
grid-column-end:4;
border:0.5px solid #d6d5d5;
width:100%
`
var TopSelectors = styled.div`
align-items:right;
color:#111;
font-family: 'Helvetica Neue';
font-size:12px;
padding:5px;
`
var SubmitButton = styled.input`
grid-column-start:1;
grid-column-end:4;
height:50px;
background:black;
color:white;
border-radius:2px;
font-size:14px;
font-family:'Helvetica Neue';

`



export default InputForm;