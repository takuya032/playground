import {
  connect,
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import Component from './../components/ParticipantsInputForm';

import * as actions from './../actions/participants';

// mapStateToProps
const mapStateToProps = state => (
  {
    participants: state.participants,
    participantsCount: state.participants.participantsCount
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
