import { combineReducers } from "redux";
import goals from './goals';
import participants from './participants';
import amidas from './amidas';

export default combineReducers({
  goals,
  participants,
  amidas,
});
