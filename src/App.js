import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/storeSettings';
import './App.css';

// page component
import ParticipantsInputForm from './containers/participants';
// import VerticalLine from './components/VerticalLine';
import GoalInputform from './containers/goals';

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <div
          className="app"
        >
          <ParticipantsInputForm />
          {/* <VerticalLine /> */}
          <GoalInputform />
        </div>
      </Provider>
    );
  }
}

export default App;
