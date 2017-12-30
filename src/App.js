import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/storeSettings';
import './App.css';

// page component
import ParticipantsInputForm from './containers/participants';
import GoalInputform from './containers/goals';
import Amida from './containers/amida';

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
          <GoalInputform />
          <Amida />
        </div>
      </Provider>
    );
  }
}

export default App;
