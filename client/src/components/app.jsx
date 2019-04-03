import React from 'react';
import Accordion from './Accordion.jsx';
import Modal from 'react-modal';


class App extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <Accordion/>
      </div>
    )
  }
}

export default App