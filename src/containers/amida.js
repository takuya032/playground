import {
  connect,
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import Component from './../components/Amida';

import * as actions from './../actions/amidas';
import * as participantsActions from './../actions/participants';

// mapStateToProps
const mapStateToProps = state => (
  {
    isOpen: state.amidas.isOpen,
    goals: state.goals,
    participants: state.participants,
  }
);


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign(
      {},
      actions,
      participantsActions,
    ),
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
