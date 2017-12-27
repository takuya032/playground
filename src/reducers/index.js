import { combineReducers } from "redux";
import goals from './goals';
import participants from './participants';

export default combineReducers({
  goals,
  participants,
});
