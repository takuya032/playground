import React, { Component } from 'react';
import './App.css';

// page component
import VerticalLineInputForm from './VerticalLineInputForm';
// import VerticalLine from './VerticalLine';
import GoalInputform from './GoalInputform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VerticalLineInputForm />
        {/* <VerticalLine /> */}
        <GoalInputform />
      </div>
    );
  }
}

export default App;
