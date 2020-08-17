import React from 'react';

class App extends React.Component {

  constructor(){
    this.state = {
      clickedTimes:0
    }
  }

  updateClicks(){
    this.state.clickedTimes++;//add one to the state
  }

  render(){
    return (
      <User firstName={'Clint'} lastName={'Fleewood'} whenClicked={updateClicks}/>
      <div>You Clicked {this.state.clickedTimes}</div>
    );
  }
}

export default App;
