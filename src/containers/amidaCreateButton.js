import {
  connect,
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import Component from './../components/AmidaCreateButton';

import * as actions from './../actions/amidas';

// mapStateToProps
const mapStateToProps = state => (
  {
    isOpen: state.amidas.isOpen,
  }
);


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
