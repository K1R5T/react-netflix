import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">

        <h1 className="FAQ">Frequently Asked Questions</h1>

        <div className="what"><p>What is Netflix?</p> 
        <dropdownbutton className="drop" type="Dropdownbutton">+</dropdownbutton> 
          </div>

        <div className="how"><p>How much does Netflix cost?</p> 
        <dropdownbutton className="down" type="Dropdownbutton">+</dropdownbutton>
        </div>

        <div className="where"><p>Where can I watch?</p> 
        <dropdownbutton className="btn" type="Dropdownbutton">+</dropdownbutton> 
        </div>

        <div className="cancel"><p>How do I cancel?</p> 
        <dropdownbutton className="new" type="Dropdownbutton">+</dropdownbutton> 
        </div>

        <div className="watch"><p>What can I watch on Netflix?</p> 
        <dropdownbutton className="nw-btn" type="Dropdownbutton">+</dropdownbutton> 
        </div>

        <div className="trial"><p>How does the free trial work?</p> 
        <dropdownbutton className="new-btn" type="Dropdownbutton">+</dropdownbutton> 
        </div>

      <div>
      <button type="button">TRY 30 DAYS FREE > </button>
      </div>

      </div>
    );
  }
}

export default App;