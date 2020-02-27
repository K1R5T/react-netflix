import React from 'react';
// import logo from './logo.svg';
import './App.css';

const Box = (props) => {
  return(
    <div className = "backgroundclass">
        <p>{props.content}</p> 
        <dropdownbutton className={props.droptype} type="Dropdownbutton">+</dropdownbutton> 
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">

        <h1 className="FAQ">Frequently Asked Questions</h1>

        <Box content = "What is Netflix?" droptype = "drop"/>
        <Box content = "How much does Netflix cost?" droptype = "down"/>
        <Box content = "Where can I watch" droptype = "btn"/>
        <Box content = "How do I cancel? " droptype = "new"/>
        <Box content = "What can I watch on Netflix?" droptype = "nw-btn"/>
        <Box content = "How does the free trial work?" droptype = "new-btn"/>

      <div>
      <button type="button">TRY 30 DAYS FREE > </button>
      </div>

      </div>
    );
  }
}

export default App;