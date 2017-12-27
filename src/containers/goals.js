import {
  connect,
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import Component from './../components/GoalInputform';

import * as actions from './../actions/goals';

// mapStateToProps
const mapStateToProps = state => (
  {
    goals: state.goals,
    participantsCount: state.participants.participantsCount,
  }
);

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
